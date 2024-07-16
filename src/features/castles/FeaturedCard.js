import { useState } from "react";
import {
  Col,
  Card,
  CardImg,
  CardTitle,
  CardBody,
  CardText,
  CardSubtitle,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";

const FeaturedCard = ({ castle }) => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const { image, name, location, blurb, description } = castle;
  return (
    <div>
      <Card onClick={toggle}>
        <CardBody>
          <CardTitle tag="h5">{name}</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            {location}
          </CardSubtitle>
        </CardBody>
        <CardImg width="50%" src={image} alt={name} />
        <CardBody>
          <CardText>{blurb}</CardText>
        </CardBody>
      </Card>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>{name}</ModalHeader>
        <ModalBody>
          <CardImg
            width="100"
            src={image}
            alt={name}
            style={{
              height: 180,
              objectFit: "cover",
            }}
            top
          />
          <Col>{description}</Col>
          <Col>
            <img src={image} width={"100%"} />
          </Col>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default FeaturedCard;
