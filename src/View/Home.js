import React, {Component} from "react";
import About from "../Component/About";
import Tooltip from "../Component/Tooltip";
import Content from "../Component/Content";
import Stack from "../Component/Stack";
import Overlays from "../Component/Overlays";
import Utilities from "../Component/Utilities";
import Alerts from "../Component/Alerts";
import Info from "../Component/Info";
import Forms from "../Component/Forms";


class Home extends Component {
   render () {
    return (
      <div className="body">
              <About />
              <Tooltip />
              <Content />
              <Stack />
              <Overlays />
              <Utilities />
              <Alerts />
              <Info />
              <Forms />
     </div>
    );
  }
}

export default Home;
