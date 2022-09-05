import React from "react";

function Button({children,isDisabled, clickHandler}) {
    return (
<button
    type="button"
    disabled={isDisabled}
    onClick={clickHandler} >
    {children}
</button>












)
}

export default Button