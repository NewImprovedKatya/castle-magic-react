import {
  Container,
  Col,
  Row,
  CardImg,
  Card,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";
import contactPhoto from "../assets/images/lake-castle-lg.jpg";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <Container className="mt-5">
      <h2>Contact Us</h2>
      <Row className="row-content">
        <Col sm="6">
          <p>Call: (123)456-7890</p>
          <p>Text: (123)456-7890</p>
          <p>Mail or ship to: 154 Castle Ln Sandpoint, ID 83864</p>
          <Form>
            <FormGroup>
              <Label for="exampleEmail">Email:</Label>
              <Input
                id="exampleEmail"
                name="email"
                placeholder="Email"
                type="email"
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleText">Message:</Label>
              <Input id="exampleText" name="text" type="textarea" />
            </FormGroup>
          </Form>
          <Link to="/about">
            <Button className="btn-secondary btn-lg m-2">About</Button>
          </Link>
          <Link to="/faq">
            <Button className="btn-secondary btn-lg m-2">FAQ</Button>
          </Link>
        </Col>
        <Col sm="6">
          <Card>
            <CardImg alt="castle" src={contactPhoto} width="100%" />
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
