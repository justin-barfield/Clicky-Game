import React from "react";


function Images(props) {
    return (

        <div className="card">

            <div className="card-body pic-container">

                <img alt={props.id} src={props.image} onClick={props.handleClick} />

            </div>

        </div>
    );
};

export default Images;