import React from "react";
import ToDo from "../../globalComponents/toDoList/component/ToDo";
import Vague from "../../globalComponents/customComponents/backgroundLandingPage/Vague/Vague";
import Card_service from "../../globalComponents/customComponents/customCard/sampleCardHoverdeAnnimation/Card_service";
import SliderCard from "../../globalComponents/slider/SliderCard";
import HorizontalNavBar from "../../globalComponents/navBar/horizontaleNavBar/HorizontalNavBar";
const TestPage = () => {
  return (
    <div>
      {/* <ToDo /> */}

      <Vague />
      {/* <Card_service
        imgTexteProps={"web"}
        texteProps={"im am sample texte"}
        linkImgProps={""}
        titleProps={"Cards"}
      /> */}

      {/* <SliderCard /> */}
      {/* <div
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: "white",
        }}
      ></div> */}

      <HorizontalNavBar />
    </div>
  );
};

export default TestPage;
