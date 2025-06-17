import React, {useState} from "react";


const Flashcard = ({question, answer}) =>{


      const [isFlipped, setIsFlipped] = useState(false);
    


    return(
        <div className="card-container"
        onClick={() => setIsFlipped(!isFlipped)}>
            <div className="card-info">
                <p>{isFlipped ? answer : question}</p>
            </div>
        </div>
    )
}

export default Flashcard