import React from "react";


function Images(props) {
    return (

        <div className="card col-sm-3"  onClick={props.handleClick}>

            <div className="card-body pic-container">

                <img className="pictures" alt={props.id} src={props.image} />

            </div>

        </div>
    );
};

export default Images;