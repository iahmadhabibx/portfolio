import React, { useState } from "react";
import Modal from 'react-modal';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfo, faDigging } from "@fortawesome/free-solid-svg-icons";
import svg1 from "../../../assets/icons/1.svg";
import svg2 from "../../../assets/icons/2.svg";
import svg3 from "../../../assets/icons/3.svg";
import svg4 from "../../../assets/icons/4.svg";
import svg5 from "../../../assets/icons/5.svg";
import svg6 from "../../../assets/icons/6.svg";
const svgs = [svg1, svg2, svg3, svg4, svg5, svg6];

const ProjectCard = ({ project }) => {

    const [openModal, setModalOpen] = useState(false);

    const modalToggle = () => {
        setModalOpen(!openModal);
    }

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            width: '50%',
            height: '50%',
            overflow: 'hidden'
        },
    };

    function checkIframeLoaded() {
        var iframe = document.getElementById('iframe');
        var iframeDoc = iframe.contentDocument || iframe.contentWindow.document;

        if (iframeDoc.readyState == 'complete') {
            document.querySelector(".dots").classList.add("d-none");
            clearTimeout(timeout)
            return;
        }

        let timeout = window.setTimeout(checkIframeLoaded, 100);
    }


    return (
        <div className="card">
            <img className="w-100" src={svgs[Math.floor(Math.random() * 6)]} alt={project.title} />
            <section className="hover-details w-100">
                <div className="title ubuntu">{project.title}</div>
                <button className="details-btn" onClick={() => {
                    modalToggle();
                    checkIframeLoaded();
                }}>
                    <FontAwesomeIcon icon={faInfo} />
                </button>

                <Modal
                    isOpen={openModal}
                    // onAfterOpen={afterOpenModal}
                    onRequestClose={modalToggle}
                    style={customStyles}
                    ariaHideApp={false}
                    contentLabel="Selected Option"
                >
                    <React.Fragment>
                        <div class="dots"></div>
                        {
                            project.url ? (
                                <iframe id="iframe" src={project.url} className="iframe" frameBorder="0"></iframe>
                            ) : (
                                <div className="no-content">
                                    <FontAwesomeIcon icon={faDigging} className="img" />
                                    <p>Following content has no public URL yet. It will be updated in some time. But you can check my <a className="url" href="https://github.com/iahmadhabibx">Github</a></p>
                                </div>
                            )
                        }
                    </React.Fragment>
                </Modal>
            </section>
        </div>
    )
};

export default ProjectCard;