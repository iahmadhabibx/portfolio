import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faHouse, faGraduationCap, faBriefcase, faUser } from "@fortawesome/free-solid-svg-icons";
import './sidebar.css';

const Sidebar = ({ toggleSiebar }) => {
    const [items, setItems] = useState([
        { name: "Home", icon: faHouse, id: "home" },
        { name: "About", icon: faUser, id: "about" },
        { name: "Projects", icon: faCode, id: "projects" },
        { name: "Experience", icon: faBriefcase, id: "experience" },
        { name: "Education", icon: faGraduationCap, id: "education" }
    ]);

    const [selectedMethod, setSelectedMethod] = useState({});
    const [shrinkedSideBar, setShrinkedSidebar] = useState(true);
    const [isToggleButtonDisabled, setToggleButtonDisable] = useState(false);

    useEffect(() => {
        setSelectedMethod(items[0]);
        const updateSize = () => {
            if (window.innerWidth < 768) {
                setShrinkedSidebar(false);
                setToggleButtonDisable(true);
                toggleSiebar(false);
            } else {
                setToggleButtonDisable(false);
                setShrinkedSidebar(true);
                toggleSiebar(true);
            }
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, [items]);

    const onToggleSidebar = (event) => {
        const { checked } = event.target;
        toggleSiebar(checked);
        setShrinkedSidebar(checked);
    }

    const goToSection = (item) => {
        window.location.replace(`/#${item.id}`)
    };

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
                                        <button className="transparent-btn" onClick={()=>goToSection(item)}>
                                            <FontAwesomeIcon icon={item.icon} />
                                            <span className="title">{item.name}</span>
                                        </button>
                                    </li>
                                )
                            })
                        )
                    }
                </ul>
            </section>

            {!isToggleButtonDisabled && (
                <footer>
                    <input type="checkbox" id="switch" onChange={onToggleSidebar} checked={shrinkedSideBar} /><label htmlFor="switch">Toggle Sidebar</label>
                </footer>
            )}
        </main>
    )
}

export default Sidebar;