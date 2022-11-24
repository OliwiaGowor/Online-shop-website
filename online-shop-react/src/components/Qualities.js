import React from "react";
import "./Qualities.css";
import QualitiesItem from "./QualitiesItem";

function Qualities() {
  return (
    <div className="qualities">
    <div className="qualities-container">
        <div className="qualities-elements">
           <QualitiesItem />
           <QualitiesItem />
           <QualitiesItem />
        </div>
    </div>
</div>
  );
}

export default Qualities;
