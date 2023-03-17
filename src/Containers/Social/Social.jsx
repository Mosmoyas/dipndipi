import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTwitter,
    faFacebook,
    faInstagram,
    faSnapchat,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";


const Social = () => (
    <>
        <Link className="facebook">
            <FontAwesomeIcon icon={faFacebook} />
        </Link>
        <Link className="instagram">
            <FontAwesomeIcon icon={faInstagram} />
        </Link>
        <Link className="twitter">
            <FontAwesomeIcon icon={faTwitter} />
        </Link>
        <Link className="snapchat">
            <FontAwesomeIcon icon={faSnapchat} />
        </Link></>

)

export default Social