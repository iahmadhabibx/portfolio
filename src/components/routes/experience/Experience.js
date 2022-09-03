import "./experience.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Experience = () => {
    let date = new Date();
    const experience = [
        { role: "Junior Software Engineer", company: "Amigo Software", start: "Dec, 2019", end: "Aug, 2021", isPresent: false },
        { role: "Software Engineer", company: "Synavos Solutions", start: "Sep, 2021", end: null, isPresent: true },
    ]

    return (
        <section className="experience">
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