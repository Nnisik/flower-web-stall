import Main from "./pages/Main.tsx";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Profile from "./pages/Profile.tsx";
import AboutPage from "./pages/About.tsx";

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/profile" element={<Profile />} />
                </Routes>
            </Router>
        </>
    );
}

export default App
