import React from 'react';
// import { Button } from 'semantic-ui-react';


function Result(props) {

    if (props.scorePoints < 5) {
        return (
            <>
            <div>
                <span> Awful, Your Score is</span><br />
                {props.scorePoints}/10 !
            </div>
           </>
        );
    }   

    else if (props.scorePoints < 8) {
        return (
            <>
            <div>
                <span> Nice Try, Your Score is</span><br />
                {props.scorePoints}/10 !
            </div>
         </>   
        );
    }
    else {
        return (
            <div>
                <span> Congrats, Your Score is</span><br />
                {props.scorePoints}/10 !
            </div>
        );
    }
}


export default Result;