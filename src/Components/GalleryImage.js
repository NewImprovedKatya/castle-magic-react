import { Col } from "reactstrap";
import GALLERYPHOTOS from "../assets/information/GALLERYPHOTOS";


const GalleryImage = (image) => {
    const { src, srcSet, alt } = image;
    return (
        <Col>
        <h2>{alt}</h2>
            <img src={src} srcSet={srcSet} alt={alt}/>
            {/* <img src={GALLERYPHOTOS[1].src} srcSet={GALLERYPHOTOS[1].srcSet} alt={GALLERYPHOTOS[1].alt}/> */}
            {console.log("hello")}
        </Col>
    )
}

export default GalleryImage;