import About from "../routes/about/About";
import Home from "../routes/home/Home";
import Projects from "../routes/projects/Projects";

const MainArea = () => {
    return (
        <main className="main-area">
            <Home />
            <About />
            <Projects />
        </main>
    )
}

export default MainArea;