import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { faKeyboard } from "@fortawesome/free-regular-svg-icons";
import './education.css';

const Education = () => {
    const experience = [
        {
            role: "BSCS", company: "GC University, Lahore", start: "2015", end: "2019"
        },
        {
            role: "ICS", company: "Punjab Group of Colleges", start: "2013", end: "2015"
        },
    ];
    const coCurriculars = [
        {
            role: "President", company: "GCU ACM Student Chapter", start: "2018", end: "2019", description: [
                "Served as the president of international organization's student chapter",
                "Organized national level events that included Tech, Art, Gaming, and various other competion to engage students in healthy activities",
                "Organized an event on virtual reality in collaboration with STYLY Labs Japan",
                "Only president to be awarded with multiple achivements awards in a single year"
            ]
        },
        {
            role: "Writer", company: "Scientific Ravi", start: "2016", end: "2019", description: [
                "Written many articles every year for scientific ravi which is a tech magazine published every year by GC University, Lahore"
            ]
        },
    ]

    return (
        <React.Fragment>
            <section className="education" id="education">
                <h3 className="title ubuntu">Education</h3>
                {
                    React.Children.toArray(
                        experience.map(exp => {
                            return (
                                <main className="exp">
                                    <FontAwesomeIcon icon={faGraduationCap} className="job-icon" />
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
            <section className="education">
                <h3 className="title ubuntu">Co Curriculars</h3>
                {
                    React.Children.toArray(
                        coCurriculars.map(exp => {
                            return (
                                <main className="exp">
                                    <FontAwesomeIcon icon={faKeyboard} className="job-icon" />
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
                                                        return (
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
        </React.Fragment>
    );
};

export default Education;