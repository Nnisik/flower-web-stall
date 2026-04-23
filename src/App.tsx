import Main from "./pages/MainPage.tsx";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Profile from "./pages/ProfilePage.tsx";
import AboutPage from "./pages/AboutPage.tsx";
import Gallery from "./pages/GalleryPage.tsx";
import BasicPage from "./pages/BasicPage.tsx";

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<BasicPage><Main /></BasicPage>} />
                    <Route path="/gallery" element={<BasicPage><Gallery /></BasicPage>} />
                    <Route path="/about" element={<BasicPage><AboutPage /></BasicPage>} />
                    <Route path="/profile" element={<BasicPage><Profile /></BasicPage>} />
                </Routes>
            </Router>
        </>
    );
}

export default App
