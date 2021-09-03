import React from "react";
import Page1 from "../assets/images/1.png";
import Page2 from "../assets/images/2.png";
import Page3 from "../assets/images/3.png";
import Page4 from "../assets/images/4.png";

const Menu = () => {
  return (
    <div align="center">
      <div>
        <img src={Page1} alt="Menu page 1" style={{ paddingTop: "5rem" }} />
      </div>
      <div>
        <img src={Page2} alt="Menu page 2" />
      </div>
      <div>
        <img src={Page3} alt="Menu page 3" />
      </div>
      <div>
        <img src={Page4} alt="Menu page 4" />
      </div>
    </div>
  );
};

export default Menu;
