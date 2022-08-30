import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../routes/home/Home";
import Projects from "../routes/projects/Projects";

const MainArea = () => {
    return (
        <main className="main-area">
            <BrowserRouter>
                <Routes>
                    <Route path="/" exact element={<Home />} />
                    <Route path="projects" element={<Projects />} />
                </Routes>
            </BrowserRouter>
        </main>
    )
}

export default MainArea;