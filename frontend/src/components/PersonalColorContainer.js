import React from "react";

export default function PersonalColorContainer() {
    return (
        <div>
            <label for="personalColor-choice">퍼스널컬러를 적으세요 : </label>
            <input list="personalColor-choose" id="personalColor-choice" name="personalColor-choice" />

            <datalist id="personalColor-choice">
                <option value="웜톤"></option>
                <option value="쿨톤"></option>
            </datalist>
        </div>
    );
}