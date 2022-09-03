import "./experience.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Experience = () => {
    let date = new Date();
    const experience = [
        { role: "Junior Software Engineer", company: "Amigo Software", start: "Dec, 2019", end: "Aug, 2021", isPresent: false, description: [
            "Working in the capacity of Full stack developer",
            "Using MEAN, MERN stack as well as Ionic for various projects",
            "Using ReactJS, Angular, Javascript, JQuery, Tailwind CSS as front-end tools",
            "Using NodeJS, NestJS, ExpressJS as back-end tools for REST API's",
            "Using MongoDB, PostgreSQL, MySQL for database",
            "Using Bitbucket for code management",
            "Developed custom event handlers for application's useage",
            "Interaction and meeting with clients to gather CR's and update applications",
            "Deploying of applications on play store and app store"
        ] },
        { role: "Software Engineer", company: "Synavos Solutions", start: "Sep, 2021", end: null, isPresent: true, description: [
            "Worked along with Alcatel Lucent enterprise to develop Telephony systems & Learning Management System",
            "Worked on Angular8 for front end and middleware development along with JQuery, Javascript, CSS, and material to develop responsive designs",
            "Worked on asynchronous data handling using Promises.",
            "Created webRTC based modules for peer to peer connections",
            "Created various events including custom events and consumed debouncer for delaying events",
            "Managed challenging Back-end development using ExpressJs NodeJS and Web Sockets",
            "Developed REST API’s for back end data integration with the SDK.",
            "Using GIT to manage code"
        ] },
    ]

    return (
        <section className="experience">
             <h3 className="title ubuntu">My Experience</h3>
            {
                React.Children.toArray(
                    experience.map(exp => {
                        return (
                            <main className="exp">
                                <FontAwesomeIcon icon={faBriefcase} className="job-icon" />
                                <div className="job-details w-100">
                                    <span className="header-detail">
                                        <div className="job-title ubuntu">{exp.role}</div>
                                        <div className="job-duration ubuntu">
                                            {exp.isPresent && (
                                                <React.Fragment>
                                                    <div>{exp.start} - Present</div>
                                                </React.Fragment>
                                            )}
                                            {!exp.isPresent && (
                                                <React.Fragment>
                                                    <div>{exp.start} - {exp.end}</div>
                                                </React.Fragment>
                                            )}
                                        </div>
                                    </span>
                                    <div className="job-company ubuntu">
                                        {exp.company}
                                    </div>

                                    <ul className="job-responsibilities">
                                        {
                                            React.Children.toArray(
                                                exp.description.map(duty => {
                                                    return(
                                                        <li>{duty}</li>
                                                    )
                                                })
                                            )
                                        }
                                    </ul>
                                </div>
                            </main>
                        )
                    })
                )
            }
        </section>
    );
};
export default Experience;