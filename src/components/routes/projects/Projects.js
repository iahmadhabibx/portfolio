import "./projects.css";
import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

const Projects = () => {
    const [tabs, setTabs] = useState([
        { name: "All", key: "all", selected: true },
        { name: "Javascript", key: "js", selected: false },
        { name: "Angular", key: "angular", selected: false },
        { name: "ReactJS", key: "react", selected: false },
        { name: "NodeJS", key: "node", selected: false },
        { name: "NestJS", key: "nest", selected: false },
        { name: "Full Stack", key: "fullStack", selected: false },
    ]);
    const projects = [
        { key: ["angular", "all"], title: "Currency exchanger", url: "https://maptracker-54ca5.web.app/", delivery: 93 },
        { key: ["angular", "all"], title: "Ticket booking platform", url: "https://fansafe-ac5e8.firebaseapp.com/tickets", delivery: 95 },
        { key: ["js", "all"], title: "Ludo built with Javascript", url: null, delivery: 92 },
        { key: ["js", "all"], title: "Chess built with Javascript", url: null, delivery: 91 },
        { key: ["js", "all"], title: "Tic Tac Toe built with Javascript", url: null, delivery: 90 },
        { key: ["js", "all"], title: "Ping Pong, built with Javascript", url: null, delivery: 89 },
        { key: ["js", "all"], title: "Encryption Decryption method", url: null, delivery: 88 },
        { key: ["js", "all"], title: "Rock, paper Scissors", url: null, delivery: 87 },
        { key: ["js", "all"], title: "Car race", url: null, delivery: 86 },
        { key: ["react", "node", "fullStack", "all"], title: "An E-Commerce platform", url: "https://staging.febys.com", delivery: 100 },
        { key: ["react", "node", "fullStack", "all"], title: "A ticket booking platform", url: "https://ticketlake.com", delivery: 99 },
        { key: ["angular", "node", "fullStack", "all"], title: "B2B platform", url: "https://textilesupply.nl", delivery: 97 },
        { key: ["nest", "all"], title: "Food delivery system", url: "https://app.deliverybasics.com", delivery: 98 },
        { key: ["angular", "node", "fullStack", "all"], title: "Learning Management System", url: "https://web.rainbow-classroom.com", delivery: 94 },
        { key: ["node", "all"], title: "NodeJS based zoom clone", url: "https://blooming-forest-80223.herokuapp.com", delivery: 96 },
    ];

    const [projectsToShow, setProjectsToShow] = useState([]);

    useEffect(() => {
        filterProjects('all');
    }, []);

    const scrollTabs = (type) => {
        if (type === 'r')
            document.querySelector('.tabs').scrollLeft += 20;
        else
            document.querySelector('.tabs').scrollLeft -= 20;
    }

    const onChangeTab = (tab) => {
        const TABS = [...tabs];
        TABS.forEach(_tab => {
            if (_tab.key === tab.key) {
                _tab.selected = true;
            }
            else
                _tab.selected = false;
        });
        filterProjects(tab.key);
        setTabs(TABS);
    }

    const filterProjects = (key) => {
        const currentTab = tabs.find(tab => tab.key === key);
        let _projects = projects.slice().filter(proj => proj.key.includes(currentTab.key));
        _projects.sort((a,b)=>b.delivery - a.delivery);
        setProjectsToShow(_projects);
    }

    return (
        <section className="projects" id="projects">
            <h3 className="title ubuntu">My Projects</h3>

            <aside>
                <section className="tabs-container">
                    <div className="arrows-container w-100">
                        <FontAwesomeIcon icon={faAngleLeft} className="arrow arrow-left" onClick={() => scrollTabs('l')} />
                        <FontAwesomeIcon icon={faAngleRight} className="arrow arrow-right" onClick={() => scrollTabs('r')} />
                    </div>
                    <ul className="tabs">
                        {
                            React.Children.toArray(
                                tabs.map(tab => {
                                    return (
                                        <li className={`tab ${tab.selected && "selected"}`} onClick={() => onChangeTab(tab)}>
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
                                        <div className="project-wrapper">
                                            <ProjectCard project={card} />
                                        </div>
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