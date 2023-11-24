import React from "react";
import ToDo from "../../globalComponents/toDoList/component/ToDo";
import Vague from "../../globalComponents/customComponents/backgroundLandingPage/Vague/Vague";
import Card_service from "../../globalComponents/customComponents/customCard/sampleCardHoverdeAnnimation/Card_service";
import SliderCard from "../../globalComponents/slider/SliderCard";
const TestPage = () => {
  return (
    <div>
      {/* <ToDo /> */}
      {/* <Vague /> */}

      {/* <Card_service
        imgTexteProps={"web"}
        texteProps={"im am sample texte"}
        linkImgProps={""}
        titleProps={"Cards"}
      /> */}

      <SliderCard />
    </div>
  );
};

export default TestPage;
