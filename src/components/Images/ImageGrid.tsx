import ImageGallery from "react-image-gallery";
import { ImageContainer } from "./ImageGrid.styles";
import "./ImageGrid.css";

import { Images } from "./Images";

export const ImageGrid = () => {
  return (
    <ImageContainer>
      <ImageGallery items={Images} showPlayButton={false} autoPlay={true} />
    </ImageContainer>
  );
};
