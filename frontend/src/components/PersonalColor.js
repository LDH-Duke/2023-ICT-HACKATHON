import React from "react";
import PersonalColorContainer from "./PersonalColorContainer";
import "./PersonalColor.css";

export default function PersonalColor() {
    return (
        <div className="container">
            <div className="text">퍼스널컬러</div>
            <PersonalColorContainer />
        </div>
    );
}