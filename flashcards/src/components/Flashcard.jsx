import React from "react";

const Flashcard = ({question, answer}) =>{
    return(
        <div className="card-container">
            <div className="card-info">
                <p>{question}</p>
            </div>
        </div>
    )
}

export default Flashcard