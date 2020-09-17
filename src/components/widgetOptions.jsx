import React from "react";

export default function WidgetOptions({ as: Wrapper = 'div',className, width, image, label}) {
    return (
    <Wrapper className={className} >
        <img src={image} width={width} alt="" />
        <label>{label}</label>
    </Wrapper>
    );
}