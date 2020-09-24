import React from "react";

export default function WidgetOptions({ as: Wrapper = 'div',className, image, label}) {
    return (
    <Wrapper className={className} >
        <img src={image} alt="" />
        <label>{label}</label>
    </Wrapper>
    );
}