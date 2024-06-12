import React from "react";

//IMAGES
import teamLogo from "../../assets/teamLogo.png";

//ESTILS
import "./Team.css";
import Button from "../Button/Button";
const Team = () => {
  return (
    <div className="team__container">
      <p className="team__title">The team</p>
      <div className="team__middle-wrapper">
        <p>
          The team of participants includes universities based in Spain,
          Portugal, Norway, Poland and France. The Autonomous University of
          Barcelona (UAB) leads a network of partners that bring strong
          expertise and new sources of creativity to the project. University of
          Vic- University of Central Catalonia (UVic- UCC), University of Minho
          (UM), University of Stavanger (US), University of Warsaw (UW) and
          Catholic University of Lyon (UCLy) are the partners.
        </p>
        <Button text={"Read more"} color={"#3f69c6"} />
      </div>
      <div className="team__image-wrapper">
        <img src={teamLogo} alt="test" />
        <img src={teamLogo} alt="test" />
        <img src={teamLogo} alt="test" />
        <img src={teamLogo} alt="test" />
      </div>
    </div>
  );
};

export default Team;
