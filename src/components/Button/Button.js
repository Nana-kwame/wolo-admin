import React from 'react'
import './Button.css';

const Button = ({clicked, text}) => {
    return ( 
        <div className="button">
            {text}
        </div>
     );
}
 
export default Button;