import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";
      import Home from "../View/Home";
      import About from "../Component/About";
      import Tooltip from "../Component/Tooltip";
      import Content from "../Component/Content";
      import Stack from "../Component/Stack";
      import Overlays from "../Component/Overlays";
      import Utilities from "../Component/Utilities";
      import Alerts from "../Component/Alerts";
      import Info from "../Component/Info";
      import Forms from "../Component/Forms";
      import Event from "../Component/Event";
      import Page from "../Component/Page";

 export default function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/Tooltip" element={<Tooltip/>} /> 
        <Route path="/Content" element={<Content />} />
        <Route path="/Stack" element={<Stack />} />
        <Route path="/Overlays" element={<Overlays />} />
        <Route path="/Utilities" element={<Utilities />} />
        <Route path="/Alerts" element={<Alerts />} />
        <Route path="/Info" element={<Info />} />
        <Route path="/Forms" element={<Forms />} />
        <Route path="/Event" element={<Event />} />
        <Route path="/Page" element={<Page />} />
    </Routes>
    </Router>
  )
}

