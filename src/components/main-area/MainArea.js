import About from "../routes/about/About";
import Home from "../routes/home/Home";
import Projects from "../routes/projects/Projects";
import Experience from "../routes/experience/Experience";
import Education from "../routes/education/Education";

const MainArea = () => {
    return (
        <main className="main-area">
            <Home />
            <About />
            <Projects />
            <Experience />
            <Education />
        </main>
    )
}

export default MainArea;