import React from "react";
import "./about.css";

const About = () => {
    let date = new Date("01-01-2018");
    let dateNow = new Date();
    const skills = [
        { name: "HTML/CSS", efficiency: 9, color: "#ffd15c" },
        { name: "Javascript", efficiency: 7, color: "#ffd15c" },
        { name: "Angular", efficiency: 7.5, color: "#ffd15c" },
        { name: "ReactJS", efficiency: 7.5, color: "#ffd15c" },
        { name: "NodeJS", efficiency: 7.5, color: "#ffd15c" },
        { name: "NestJS", efficiency: 5, color: "#ffd15c" },
        { name: "Mongo DB", efficiency: 6, color: "#ffd15c" },
        { name: "WebRTC", efficiency: 6, color: "#ffd15c" },
        { name: "MySQL", efficiency: 7, color: "#ffd15c" },
        { name: "Web Sockets", efficiency: 6.5, color: "#ffd15c" },
        { name: "Git/Bitbucket", efficiency: 6.8, color: "#ffd15c" }
    ]

    return (
        <section className="about" id="about">
            <h3 className="title ubuntu">About Me</h3>
            <aside>
                <div className="para-box">
                    I am Ahmad Habib, a full stack developer with a growing passion of learning and I have
                    <span className="my-experience"> {Number(dateNow.getFullYear()) - Number(date.getFullYear())} years </span>
                    of working experience. I have done my graduation from <a href="https://gcu.edu.pk/" className="url" target="_blank">GC University, Lahore</a> .
                    Apart from my working, I also like to play cricket, football, badminton, table tennis and snooker.
                </div>

                <h3 className="title ubuntu">Skills</h3>
                <div className="para-box">
                    {React.Children.toArray(
                        skills.map(skill => {
                            return (
                                <section className="skill">
                                    <div className="wrap">
                                        <h3 className="ubunru">{skill.name}</h3>
                                        <small>{skill.efficiency / 10 * 100}%</small>
                                    </div>
                                    <div className="progressbar">
                                        <div className="progress" style={{ backgroundColor: skill.color, width: (skill.efficiency * 10)+"%" }}></div>
                                    </div>
                                </section>
                            )
                        })
                    )
                    }
                </div>
            </aside>
        </section>
    )
}

export default About