import svg1 from "../../../assets/icons/1.svg";
import svg2 from "../../../assets/icons/2.svg";
import svg3 from "../../../assets/icons/3.svg";
import svg4 from "../../../assets/icons/4.svg";
import svg5 from "../../../assets/icons/5.svg";
import svg6 from "../../../assets/icons/6.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faInfo } from "@fortawesome/free-solid-svg-icons";

const ProjectCard = ({ project }) => {
    const svgs = [svg1, svg2, svg3, svg4, svg5, svg6];
    return (
        <div className="card">
            <img className="w-100" src={svgs[Math.floor(Math.random() * 6)]} alt={project.title} />
            <section className="hover-details w-100">
                <div className="title ubuntu">{project.title}</div>
                <button className="details-btn">
                    <FontAwesomeIcon icon={faInfo} />
                </button>
            </section>
        </div>
    )
};

export default ProjectCard;