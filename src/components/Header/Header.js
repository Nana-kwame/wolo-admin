import React from 'react';
import './Header.css';

const Header = (props) => {
    return ( 
        <header className='header'>
                <h3 className='header-title'> Wolo</h3>

                <div className='header-buttons'>
                    {props.buttons.map(button => (
                        <h3 className='header-button' key={button.id}> {button.text} </h3>
                    ))}
                   
                </div>
        </header>
     );
}
 
export default Header;