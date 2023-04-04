export const pxToRem = (px) => {
  const REM_BASE_VALUE = 0.0625;

  if (typeof px === 'number') {
    const rem = px * REM_BASE_VALUE;

    return `${Number.isInteger(rem) ? String(rem) : rem.toFixed(3)}rem`;
  }

  const numValue = Number.parseFloat(px);

  if (Number.isNaN(numValue)) {
    throw new Error('Parameter must contain number even it has string type');
  }

  const rem = numValue * REM_BASE_VALUE;

  return `${Number.isInteger(rem) ? String(rem) : rem.toFixed(3)}rem`;
};
