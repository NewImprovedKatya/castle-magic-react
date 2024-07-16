import { Container, Col, Row, CardImg, Card } from "reactstrap";
import construction from "../assets/images/CP2.jpg";
import halfFinished from "../assets/images/river-castle-lg.jpg";
import digital from "../assets/images/aHillCastleSW.jpg";
import construct from "../assets/images/Construction.jpg";
import plan from "../assets/images/Castleplan.png";

const About = () => {
  return (
    <Container>
      <Row className="row-content">
        <h2 className="my-4">How We Work</h2>
        <h4 className="my-3">Choose a Site</h4>
        <Col sm="6">
          <p>
            Castle plans are best designed to fit and defend the site when we
            build a castle. Hire us, and we will visit your site, design the
            plan, and build the castle. Time needed to draw custom plans is
            usually two weeks. Select your land to defend a castle. Terrain
            around a castle is just as important as designing interior and
            exterior elements of a castle. Best castle designs are created when
            the site shapes the structure.
          </p>
        </Col>
        <Col sm="6">
          <Card>
            <CardImg
              alt="Card image cap"
              src={digital}
              width="100%"
            />
          </Card>
        </Col>
      </Row>
      <Row className="row-content">
        <h4 className="my-3">Design the Plan</h4>
        <Col sm="6">
          <Card>
            <CardImg alt="Card image cap" src={plan} width="100%" />
          </Card>
        </Col>
        <Col sm="6">
          <p>
            "Ananda balasana pose ardha chandrasana bhujangasana chakravakasana
            dandasana dolphin plank pose kapalabhati pranayama laghu vajrasana
            mula bandha parivrtta janu sirsasana parivrtta trikonasana
            parsvakonasana purvottanasana salamba sirsasana supta matsyendrasana
            supta virasana tolasana uddiyana bandha utthan pristhasana.
            Agnistambhasana pose ananda balasana pose anjaneyasana chaturanga
            dandasana hanumanasana janu sirsasana kumbhaka pranayama."
          </p>
        </Col>
      </Row>
      <Row className="row-content">
        <h4 className="my-3">Start the Build</h4>
        <Col sm="6">
          <p>
            Castle plans are best designed to fit and defend the site when we
            build a castle. Hire us, and we will visit your site, design the
            plan, and build the castle. Time needed to draw custom plans is
            usually two weeks. Select your land to defend a castle. Terrain
            around a castle is just as important as designing interior and
            exterior elements of a castle. Best castle designs are created when
            the site shapes the structure.
          </p>
        </Col>
        <Col sm="6">
          <Card>
            <CardImg
              alt="Card image cap"
              src={construct}
              width="100%"
            />
          </Card>
        </Col>
      </Row>
      <Row className="row-content">
        <h2 className="my-4">Meet the Master Mason</h2>
        <Col sm="6">
          <p>
            "Ananda balasana pose ardha chandrasana bhujangasana chakravakasana
            dandasana dolphin plank pose kapalabhati pranayama laghu vajrasana
            mula bandha parivrtta janu sirsasana parivrtta trikonasana
            parsvakonasana purvottanasana salamba sirsasana supta matsyendrasana
            supta virasana tolasana uddiyana bandha utthan pristhasana.
            Agnistambhasana pose ananda balasana pose anjaneyasana chaturanga
            dandasana hanumanasana janu sirsasana kumbhaka pranayama."
          </p>
        </Col>
        <Col sm="6">
          <Card>
            <CardImg alt="Card image cap" src={construction} width="100%" />
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
