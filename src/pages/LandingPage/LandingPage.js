import React from 'react'

import './LandingPage.css';
import './shadows.css';

import image from './../../assets/library.jpg';
import Button from '../../components/Button/Button';

const bgImage = {
    backgroundImage: `url(${image})`
};

const leftButton = {
    transform: `translateX(-60%)`
}

const rightButton = {
    transform: `translateX(60%)`
}

// const segmenter_shadow_1 = {     top: '80%',     left: '10%',     width:
// '30%',     height: '20%' }
const LandingPage = () => {
    return (
        <React.Fragment>
            <div className='segmenter' style={bgImage}>
                <div className="segmenter__background" style={bgImage}></div>
                <div className="segmenter__pieces">
                    <div className="segmenter__piece-wrap">
                        <div className="segmenter__shadow  segment_shadow_1"></div>
                        <div className="segmenter__piece segment_1" style={bgImage}></div>
                    </div>
                    <div className="segmenter__piece-wrap">
                        <div className="segmenter__shadow segment_shadow_1"></div>
                        <div className="segmenter__piece segment_2" style={bgImage}></div>
                    </div>
                    <div className="segmenter__piece-wrap">
                        <div className="segmenter__shadow .segment_shadow_2"></div>
                        <div
                            className="segmenter__piece segementer__piece-parallax segment_3"
                            style={bgImage}></div>
                    </div>
                    <div className="segmenter__piece-wrap">
                        <div className="segmenter__shadow segment_shadow_3"></div>
                        <div className="segmenter__piece segment_4" style={bgImage}></div>
                    </div>
                </div>
            </div>
            <h2 className="trigger-headline trigger-headline--hidden">
                <span>W</span>
                <span>O</span>
                <span>L</span>
                <span>O</span>
            </h2>

            <div className='wolo-header'>
                <p className='wolo-header__title'>
                    Books accessible to all
                </p>
            </div>

            <div className='bottom-nav'>
                <Button name='Sign In' style={leftButton}/>
                <Button name='Sign Up' style={rightButton}/>
            </div>
        </React.Fragment>

    );
}

export default LandingPage;