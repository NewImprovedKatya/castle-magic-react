import { Container, Row, Col } from "reactstrap";
import GalleryList from "../features/gallery/GalleryList";

const Gallery = () => {
  return (
    <Container className="mt-5">
    <h2 className="text-center">Gallery</h2>
      <GalleryList />
    </Container>
  );
};

export default Gallery;
