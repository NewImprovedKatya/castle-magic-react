import GalleryImage from "../../Components/GalleryImage";
import GALLERYPHOTOS from "../../assets/information/GALLERYPHOTOS";
import { Row, Col, Card } from "reactstrap";

import katarynaSmall from "../../assets/images/kataryna-castle-sm.jpg";

const GalleryList = () => {
  return (
    <Row xs={1} md={3} className="">
      {GALLERYPHOTOS.map((image, index) => (
        <Col key={index} xs={12} className="mb-3">
          {/* <GalleryImage image={image} /> */}
          <Card>
            <img
              src={image.src}
              srcSet={image.srcSet}
              alt={image.alt}
              width="100%"
            />
          </Card>

        </Col>
      ))}
    </Row>
  );
};

export default GalleryList;
