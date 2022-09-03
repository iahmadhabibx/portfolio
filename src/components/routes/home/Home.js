import React, { useEffect } from "react";
import "./home.css"
import Typewriter from 'typewriter-effect/dist/core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faStackOverflow } from "@fortawesome/free-brands-svg-icons";
import ResumeFile from "../../../assets/Ahmad_Habib.pdf";

const Home = () => {
    const expertiesList = ["Full stack developer", "Javascript developer", "MEAN stack developer", "MERN stack developer", "NodeJS/ExpressJS developer", "NestJS developer"]
    const socialIcons = [
        { icon: faGithub, link:'https://github.com/iahmadhabibx'},
        { icon: faLinkedin, link:'https://www.linkedin.com/in/iahmadhabibx/'},
        { icon: faStackOverflow, link:'https://stackoverflow.com/users/12515963/ahmad-habib'}];

    useEffect(() => {
        new Typewriter('#experties', {
            strings: expertiesList,
            autoStart: true,
            loop: true
        });
    }, [])

    return (
        <section className="home h-100">
            <header>
                <img className="user-img" src="https://avatars.githubusercontent.com/u/49106201?v=4" alt="Ahmad Habib" />
            </header>
            <main>
                <h2 className="ubuntu name">Ahmad Habib</h2>
                <div className="w-100 experties-div">I am <span className="experties" id="experties"></span></div>
            </main>
            <aside className="footer">
                <section className="social-icons w-100">
                    {React.Children.toArray(
                        socialIcons.map(sicon => {
                            return (
                                <a href={sicon.link} target="_blank" ><FontAwesomeIcon icon={sicon.icon} /></a>
                            )
                        })
                    )}
                </section>
                    <a className="resume-btn ubutnu" href={ResumeFile} download="Ahmad_Habib">Download resume</a>
            </aside>
        </section>
    )
}

export default Home;