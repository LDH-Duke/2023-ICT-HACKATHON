import React from "react";
import PersonalColorContainer from "./PersonalColorContainer";
import "./PersonalColor.css";

export default function PersonalColor() {
    return (
        <div className="container">
            <div className="text">퍼스널컬러</div>
            <p> 웜톤 쿨톤 </p>
            <PersonalColorContainer />
        </div>
    );
}