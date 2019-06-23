import React from 'react'
import './Button.css';
const Button = ({name, btnClicked, style}) => {
    return (
        <div>
            <button className={["btn btn--trigger" ]} style={style} onClick={btnClicked}>
                {name}
            </button>
        </div>

    );
}

export default Button;