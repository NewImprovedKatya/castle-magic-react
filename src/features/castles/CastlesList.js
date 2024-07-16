import React from 'react';
import { Card, CardHeader, CardTitle, CardBody, CardText, Col, Row } from 'reactstrap';
import { CASTLES } from '../../assets/information/CASTLES';
import FeaturedCard from './FeaturedCard';

const cards = [
  {
    header: "Header 1",
    title: "Title 1",
    body: "This is the card body text for card 1.",
    text: "Some additional info for card 1."
  },
  {
    header: "Header 2",
    title: "Title 2",
    body: "This is the card body text for card 1.",
    text: "Some additional info for card 1."
  },
  {
    header: "Header 3",
    title: "Title 3",
    body: "This is the card body text for card 1.",
    text: "Some additional info for card 1."
  },
  // Add objects for cards 2-7 with similar structure
];

const CastlesList = () => {
  return (
    <Row xs={1} md={3} className=''>
      {CASTLES.map((card, index) => (
        <Col key={index} xs={12} className="mb-3">
          <FeaturedCard castle={card} />
        </Col>
      ))}
    </Row>
  );
};

export default CastlesList;




/* import { CASTLES } from "./CASTLES";
import { Col, Row, Container, Card, CardBody, CardTitle, CardText  } from "reactstrap";
import FeaturedCard from "./FeaturedCard";

const CastlesList = () => {
  return (

      <Row >

            <Col md className="m-1" >
            <Card>
                
                <CardBody>
                    <CardTitle>Castle</CardTitle>
                    <CardText>Big stone cave</CardText>
                </CardBody>
            </Card>
            </Col>

            <Col md className="m-1" >
            <Card>
                
                <CardBody>
                    <CardTitle>Castle</CardTitle>
                    <CardText>Big stone cave</CardText>
                </CardBody>
            </Card>
            </Col>

            <Col md className="m-1" >
            <Card>
                
                <CardBody>
                    <CardTitle>Castle</CardTitle>
                    <CardText>Big stone cave</CardText>
                </CardBody>
            </Card>
            </Col>

        
      

      </Row>

  );
};

export default CastlesList;
 */