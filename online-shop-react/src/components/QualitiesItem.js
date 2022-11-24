import React from "react";
import "./QualitiesItem.css";

function QualitiesItem() {
    return (
        <div className="qualities-item">
            <div className="qualities-icon-container"><img className="qualities-icon" src="icons/truck-side.png" width="50px" height="50px" /></div>
            <h2 className="qualities-header">Shipping</h2>
            <p className="qualities-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
    );
}

export default QualitiesItem;
