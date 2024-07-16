import { Button, Container } from "reactstrap";
import CastlesList from "../features/castles/CastlesList";
import Specialties from "../features/castles/Specialties";
import Hero from "../Components/Hero";
import ImageCarousel from "../Components/ImageCarousel";
import InfoCard from "../Components/InfoCard";
import GalleryList from "../features/gallery/GalleryList";
import katarynaSmall from "../assets/images/kataryna-castle-sm.jpg";
import GalleryImage from "../Components/GalleryImage";
import GALLERYPHOTOS from "../assets/information/GALLERYPHOTOS";
import Contact from "./Contact";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Container className="mt-5">
        <h2 className="mb-4">Featured Builds</h2>
        <CastlesList />
        <h2 className="my-4">Gallery</h2>
        <ImageCarousel />

        <Link to="/gallery">
          <Button className=" btn-lg m-2">View Full Gallery</Button>
        </Link>
        <Contact className="text-center"/>
      </Container>
    </div>
  );
};

export default HomePage;
