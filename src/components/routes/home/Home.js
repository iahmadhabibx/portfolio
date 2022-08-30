import React, { useEffect } from "react";
import "./home.css"
import Typewriter from 'typewriter-effect/dist/core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faStackOverflow } from "@fortawesome/free-brands-svg-icons";

const Home = () => {
    const expertiesList = ["Full stack developer", "Javascript developer", "MEAN stack developer", "MERN stack developer", "NodeJS/ExpressJS developer", "NestJS developer"]
    const socialIcons = [faGithub, faLinkedin, faStackOverflow];

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
                <div className="w-100">I am <span className="experties" id="experties"></span></div>
            </main>
            <aside className="footer">
                <section className="social-icons w-100">
                    {React.Children.toArray(
                        socialIcons.map(icon => {
                            return (
                                <FontAwesomeIcon icon={icon} />
                            )
                        })
                    )}
                </section>
                <button className="resume-btn ubutnu">Download resume</button>
            </aside>
        </section>
    )
}

export default Home;