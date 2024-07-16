import { Container, Col, Row, CardImg, Card } from "reactstrap";

const InfoCard = () => {
  return (
    <Row className="row-content">
      <Col sm="6">
        <p>
          Lorem Ipsem.
        </p>
      </Col>
      <Col sm="6">
        <Card>
          <CardImg
            alt="Card image cap"
            src=""
            style={{
              height: 270,
            }}
            width="100%"
          />
        </Card>
      </Col>
    </Row>
  );
};

export default InfoCard;
