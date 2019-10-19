import React from "react";

function ImageContainer(props) {
    return (

        <div className="image-container">

            {props.children}

        </div>

    );
};

export default ImageContainer;