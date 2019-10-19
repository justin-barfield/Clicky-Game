import React from "react";

function ImageContainer(props) {
    return (

        <div className="image-container container w-75">

            <div className="row col-sm">

                {props.children}

            </div>

        </div>

    );
};

export default ImageContainer;