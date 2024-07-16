import { Col } from "reactstrap";

const GalleryImage = (image) => {
  const { src, srcSet, alt } = image;
  return (
    <Col>
      <h2>{alt}</h2>
      <img src={src} srcSet={srcSet} alt={alt} />
      {console.log("hello")}
    </Col>
  );
};

export default GalleryImage;
