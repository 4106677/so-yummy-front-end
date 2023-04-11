import { Grid } from "react-loader-spinner";
import { LoaderContainerStyled } from "./LoaderContainer";

export const Loader = () => {
  return (
    <LoaderContainerStyled>
      <Grid
        height="80"
        width="80"
        color="#8baa36"
        ariaLabel="grid-loading"
        radius="12.5"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </LoaderContainerStyled>
  ) 
}