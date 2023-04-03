export class FileService {
  async convertToBase64(file) {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader?.readAsDataURL(file);
    });
  }

  async base64ToBlob(b64Data) {
    const base64 = await fetch(b64Data);
    const blob = await base64.blob();

    return blob;
  }

  convertToImageUrl(file) {
    return URL.createObjectURL(file);
  }

  isBase64(str) {
    const base64Regexp = /(?<=,).*$/;

    return base64Regexp.test(str);
  }
}

export const fileService = new FileService();
