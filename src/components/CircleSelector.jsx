import { render } from '@testing-library/react';
import React from 'react';

function CircleSelector(props) {
    
function handleClick() {
    console.log('btn clicked')
    // this.setState(this.props)
};
    

    return(
        <div className="CircleSelector">
        
        <button onClick={handleClick()}>
            SELECT CIRCLE 1
            </button>
        <button onClick={handleClick()}>SELECT CIRCLE 2</button>
        <button onClick={handleClick()}>SELECT CIRCLE 3</button>
        <button onClick={handleClick()}>SELECT CIRCLE 4</button>
        </div>
    )
}





export default CircleSelector;