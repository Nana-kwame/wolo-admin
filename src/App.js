import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Welcome from './pages/Welcome/Welcome';
import LandingPage from './pages/LandingPage/LandingPage';

function App() {
    const buttons = [
        {
            text: 'Sign In',
            id: 1
        }, {
            text: 'Join',
            id: 2
        }
    ]
    return (

        <div>
            {/* <Header buttons={buttons}/> */}
            <LandingPage/>
        </div>

    );
}

export default App;
