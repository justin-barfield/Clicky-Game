import React from "react";

function NavBar(props) {
    return (
        <div className="nav col-sm bg-info text-center">

            <div className="col-sm-4">
            
                <div className="nav-item h3">
                    Clicky Game
                </div>

            </div>

            <div className="col-sm-4 h1">
            
                <div className="nav-item">
                    {props.gameState}
                </div>

            </div>

            <div className="col-sm-4 h3">
            
                <div className="nav-item">
                    Score: {props.score} | Top Score: {props.highScore}
                </div>

            </div>

        </div>
    )
};

export default NavBar;