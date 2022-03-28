import logo from "./logo.svg";
import "./App.css";
import MainPage from "./components/MainPage/MainPage";
import { MenuPC } from "./components/Menu/MenuPC/MenuPC.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GamePage } from "./components/GamePage/GamePage";
import { Characters } from "./components/Characters/Characters";
import { Story } from "./components/StoryLine/Story";
import { Forum } from "./components/Forum/Forum";
import { About } from "./components/About/About.jsx";
function App(props) {
    return (
        <div className="App">
            <Router>
                <MenuPC />
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="home" element={<MainPage />} />
                    <Route path="norgmar" element={<GamePage />} />
                    <Route path="characters" element={<Characters />} />
                    <Route path="story-line" element={<Story />} />
                    <Route path="ekipa" element={<About />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
{
    /* <>
    <Router>
        <Header />

        <Content>
            <Wrapper>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="home" element={<MainPage />} />
                    <Route path="about" element={<About />} />
                    <Route path="plan" element={<Plan />} />
                    <Route path="contact" element={<Kontakt />} />
                    <Route path="metamorfozy" element={<Metamorfozy />} />
                </Routes>
            </Wrapper>
        </Content>
    </Router>
</>; */
}
