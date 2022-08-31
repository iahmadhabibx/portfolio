import "./projects.css";
import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
    const tabs = [
        { name: "All", key: "all", selected: true },
        { name: "Javascript", key: "js", selected: false },
        { name: "Angular", key: "angular", selected: false },
        { name: "ReactJS", key: "react", selected: false },
        { name: "NodeJS", key: "node", selected: false },
        { name: "Full Stack", key: "fullStack", selected: false },
    ];
    const projects = [
        { key: ["angular", "all"], title: "Currency exchanger", url: "https://maptracker-54ca5.web.app/" },
        { key: ["angular", "all"], title: "Ticket booking platform", url: "https://fansafe-ac5e8.firebaseapp.com/tickets" },
        { key: ["js", "all"], title: "Ludo built with Javascript", url: null },
        { key: ["js", "all"], title: "Chess built with Javascript", url: null },
        { key: ["js", "all"], title: "Tic Tac Toe built with Javascript", url: null },
        { key: ["js", "all"], title: "Ping Pong, built with Javascript", url: null },
        { key: ["js", "all"], title: "Encryption Decryption method", url: null },
        { key: ["js", "all"], title: "Rock, paper Scissors", url: null },
        { key: ["js", "all"], title: "Car race", url: null },
        { key: ["react", "node", "fullStack", "all"], title: "An E-Commerce platform", url: "https://qa.febys.com" },
        { key: ["react", "node", "fullStack", "all"], title: "A ticket booking platform", url: "https://ticketlake.com" },
        { key: ["angular", "node", "fullStack", "all"], title: "B2B platform", url: "https://textilesupply.nl" },
        { key: ["angular", "node", "fullStack", "all"], title: "Learning Management System", url: "https://web.rainbow-classroom.com" },
        { key: ["node", "all"], title: "NodeJS based zoom clone", url: "https://blooming-forest-80223.herokuapp.com" },
    ];
    const [projectsToShow, setProjectsToShow] = useState([]);

    useEffect(() => {
        filterProjects(0);
    }, []);

    const filterProjects = (index) => {
        const currentTab = tabs[index];
        let _projects = projects.slice().filter(proj => proj.key.includes(currentTab.key));
        setProjectsToShow(_projects);
    }

    return (
        <section className="projects">
            <h3 className="title ubuntu">About Me</h3>

            <aside>
                <section className="tabs-container">
                    <ul className="tabs">
                        {
                            React.Children.toArray(
                                tabs.map(tab => {
                                    return (
                                        <li className={`tab ${tab.selected && "selected"}`}>
                                            {tab.name}
                                        </li>
                                    )
                                })
                            )
                        }
                    </ul>
                </section>

                <section className="cards-container">
                    <ul className="cards">
                        {
                            projectsToShow.length && (React.Children.toArray(
                                projectsToShow.map(card => {
                                    return (
                                        <ProjectCard project={card} />
                                    )
                                })
                            ))
                        }
                    </ul>
                </section>


            </aside>
        </section>
    )
}

export default Projects;