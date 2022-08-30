import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faHouse, faGraduationCap, faBriefcase, faUser } from "@fortawesome/free-solid-svg-icons";
import './sidebar.css';

const Sidebar = ({ toggleSiebar }) => {
    const [items, setItems] = useState([
        { name: "Home", icon: faHouse },
        { name: "About", icon: faUser },
        { name: "Education", icon: faGraduationCap },
        { name: "Projects", icon: faCode },
        { name: "Experience", icon: faBriefcase }
    ]);
    const [selectedMethod, setSelectedMethod] = useState({});
    const [shrinkedSideBar, setShrinkedSidebar] = useState(true)

    useEffect(() => {
        setSelectedMethod(items[0]);
    }, [items]);

    const onToggleSidebar = (event) => {
        const { checked } = event.target;
        toggleSiebar(event);
        setShrinkedSidebar(checked);
    }

    return (
        <main className={`sidebar ${!shrinkedSideBar && "shrinked"}`}>
            
            <header className="header ubuntu">
                {!shrinkedSideBar ? (
                    <span>AH<span className="dot">.</span></span>
                ) : (
                    <span>Ahmad<span className="dot">.</span></span>
                )}
            </header>

            <section className="body">
                <ul className="items">
                    {items.length &&
                        React.Children.toArray(
                            items.map(item => {
                                return (
                                    <li className={`item ${selectedMethod.name === item.name && "selected"}`} onClick={(e) => setSelectedMethod(item)}>
                                        <FontAwesomeIcon icon={item.icon} />
                                        <span className="title">{item.name}</span>
                                    </li>
                                )
                            })
                        )
                    }
                </ul>
            </section>

            <footer>
                <input type="checkbox" id="switch" onChange={onToggleSidebar} checked={shrinkedSideBar} /><label htmlFor="switch">Toggle Sidebar</label>
            </footer>
        </main>
    )
}

export default Sidebar;