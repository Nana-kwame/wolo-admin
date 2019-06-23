/* eslint-disable no-undef */
import React, {Component} from 'react';
import './Welcome.css';
import imagesLoaded from 'imagesloaded';
import anime from 'animejs';
import backgroundImage from './../../assets/library.jpg';

// const self = this;

function Segementer(el, options) {
const self = this;
    this.el = el;
    this.options = extend({}, options);
    extend(this.options, options);

    imagesLoaded(this.el, {
        background: true
    }, () => {
        self._init();
        self._initEvents();
        self
            .options
            .onReady();
    });

}

// Segementer.prototype.options = {
//     pieces: 4,
//     renderOnLoad: false,
//     shadows: true,
//     shadowsAnimation: {
//         opacity: 1
//     },

//     parallax: false,
//     parallaxMovement: {
//         min: 10,
//         max: 40
//     },
//     animation: {
//         duration: 1500,
//         easing: 'easeOutQuad',
//         delay: 0,
//         translateZ: {
//             min: 10,
//             max: 65
//         }
//     },

//     // The callbacks to run tertiary functions
//     onReady: () => {
//         return false;
//     },
//     onAnimationComplete: () => {
//         return false;
//     },
//     onAnimationStart: () => {
//         return false;
//     },

//     positions: [
//         {
//             top: 80,
//             left: 10,
//             width: 30,
//             height: 20
//         }, {
//             top: 2,
//             left: 2,
//             width: 40,
//             height: 40
//         }, {
//             top: 30,
//             left: 60,
//             width: 30,
//             height: 60
//         }, {
//             top: 10,
//             left: 20,
//             width: 50,
//             height: 60
//         }
//     ]
// }

// Segementer.prototype._init = () => {
//     this.dimensions = {
//         width: this.el.offsetWidth,
//         height: this.el.offsetHeight
//     };

//     const background = this.el.style.backgroundImage;
//     this.imgsrc = background
//         .replace('url(', '')
//         .replace(')', '')
//         .replace(/\"/gi, "");

//     // Create the layout
//     this._layout();

//     const self = this;
//     this.pieces = []
//         .slice
//         .call(this.el.querySelectorAll('.segmenter__piece-wrap'));
//     this
//         .pieces
//         .forEach((piece) => {
//             piece.style.WebkitTransform = piece.style.transform = 'translateZ(0.0001px)';

//             if (self.options.renderOnLoad) {
//                 self._renderPiece(piece);
//             }
//         });

//     // Flag pieces that are already rendered on load or after animation run
//     if (this.options.renderOnLoad) {
//         this.active = true;
//     }
// }

// Segementer.prototype._layout = () => {
//     const clipPath = areClipPathShapesSupported();
//     let segBgEl = document.createElement('div');
//     segBgEl.className = 'segmenter__background';
//     segBgEl.style.backgroundImage = `url(${this.imgsrc})`;

//     let segPieces = document.createElement('div'),
//         segPiecesHtml = '',
//         positionTotal = this.options.positions.length;

//     segPieces.className = 'segmenter__pieces';

//     for (let i = 0, len = this.options.pieces; i < len; ++i) {
//         if (this.options.parallax) {
//             segPiecesHtml += '<div class="segmenter__piece-parallax">';
//         }

//         segPiecesHtml += '<div class="segmenter__piece-wrap">';

//         let top,
//             left,
//             width,
//             height,
//             clipTop,
//             clipLeft,
//             clipRight,
//             clipBottom,
//             pos = i <= positionTotal - 1
//                 ? i
//                 : 0,
//             isRandom = this.options.positions === 'random';

//         top = isRandom
//             ? anime.random(0, 100)
//             : this.options.positions[pos].top;
//         left = isRandom
//             ? anime.random(0, 100)
//             : this.options.positions[pos].left;
//         width = isRandom
//             ? anime.random(0, 100)
//             : this.options.positions[pos].width;
//         height = isRandom
//             ? anime.random(0, 100)
//             : this.options.positions[pos].height;

//         if (!clipPath) {
//             clipTop = isRandom
//                 ? top / 100 * this.dimensions.height
//                 : this.options.positions[pos].top / 100 * this.dimensions.height;
//             clipLeft = isRandom
//                 ? left / 100 * this.dimensions.width
//                 : this.options.positions[pos].left / 100 * this.dimensions.width;
//             clipRight = isRandom
//                 ? width / 100 * this.dimensions.width + clipLeft
//                 : this.options.positions[pos].width / 100 * this.dimensions.width + clipLeft;
//             clipBottom = isRandom
//                 ? height / 100 * this.dimensions.height + clipTop
//                 : this.options.positions[pos].height / 100 * this.dimensions.height + clipTop;

//         }

//         if (this.options.shadows) {
//             segPieces += `<div class="segmenter__shadow" style="top: ${top}%; left: ${left}%; width: ${width}; height: ${height}"></div>`
//         }

//         segPiecesHtml += clipPath
//             ? '<div class="segmenter__piece" style="background-image: url(' + this.imgsrc + '); -webkit-clip-path: polygon(' + left + '% ' + top + '%, ' + (left + width) + '% ' + top + '%, ' + (left + width) + '% ' + (top + height) + '%, ' + left + '% ' + (top + height) + '%); clip-path: polygon(' + left + '% ' + top + '%, ' + (left + width) + '% ' + top + '%, ' + (left + width) + '% ' + (top + height) + '%, ' + left + '% ' + (top + height) + '%)"></div>'
//             : '<div class="segmenter__piece" style="background-image: url(' + this.imgsrc + '); clip: rect(' + clipTop + 'px,' + clipRight + 'px,' + clipBottom + 'px,' + clipLeft + 'px)"></div>';

//         segPiecesHtml += '</div>';

//         if (this.options.parallax) {
//             segPiecesHtml += '</div>';
//         }
//     }

//     segPieces.innerHTML = segPiecesHtml;
//     this.el.innerHTML = '';
//     this
//         .el
//         .appendChild(segBgEl);
//     this
//         .el
//         .appendChild(segPieces);
// };

// // Render a piece with the options that are passed in the intialization.
// Segementer.prototype._renderPiece = (piece) => {
//     let idx = this
//         .pieces
//         .indexOf(piece);
//     if (self.options.animation.translateZ != undefined) {
//         if (typeof self.options.animation.translateZ === 'object') {
//             let randArr = createRandIntOrderedArray(self.options.animation.translateZ.min, self.options.animation.translateZ.max, self.options.pieces);
//             piece.style.transform = piece.style.WebkitTransform = `translateZ(${randArr[idx]}px)`;
//         } else {
//             piece.style.transform = piece.style.WebkitTransform = `translateZ(${self.options.animation.translateZ}px)`;
//         }
//     }

//     if (self.options.animation.translateY != undefined) {
//         if (typeof self.options.animation.translateY === 'object') {
//             let randArr = createRandIntOrderedArray(self.options.animation.translateY.min, self.options.animation.translateY.max, self.options.pieces);
//             piece.style.transform = piece.style.WebkitTransform = `translateY(${randArr[idx]}px)`;
//         } else {
//             piece.style.transform = piece.style.WebkitTransform = `translateY(${self.options.animation.translateY}px)`;
//         }
//     }

//     if (self.options.animation.translateX !== undefined) {
//         if (typeof self.options.animation.translateX === 'object') {
//             let randArr = createRandIntOrderedArray(self.options.animation.translateX.min, self.options.animation.translateX.max, self.options.pieces);
//             piece.style.transform = piece.style.WebkitTransform = `translateX(${self.options.animation.translateX}px)`;
//         } else {
//             piece.style.transform = piece.style.WebkitTransform = `translateX(${self.options.animation.translateX}px)`;
//         }
//     }

//     if (self.options.animation.opacity !== undefined) {
//         piece.style.opacity = self.options.opacity;
//     }

//     if (self.options.shadows && isObjEmpty(self.options.shadowsAnimation)) {
//         let shadowEl = piece.querySelector('.segmenter__shadow');
//         shadowEl.style.opacity = self.options.shadowsAnimation.opacity !== undefined
//             ? self.options.shadowsAnimation.opacity
//             : 0;
//         shadowEl.style.transform = shadowEl.style.WebkitTransform = `translateX(${ (self.options.shadowsAnimation.translateX !== undefined
//             ? self.options.shadowsAnimation.translateX
//             : 0)}px) translateY(${ (self.options.shadowsAnimation.translateY !== undefined
//             ? self.options.shadowsAnimation.translateY
//             : 0)}px)`;
//     }
// };

// /**
//  * Animates the pieces with the options with anime js
//  */

// Segementer.prototype.animate = () => {
//     if (this.active) {
//         return false;
//     }
//     this.active = true;

//     const self = this,
//         animProps = {
//             targets: this.pieces,
//             duration: this.options.animation.duration,
//             delay: (el, index) => {
//                 return (self.options.pieces - index - 1) * self.options.animation.delay;
//             },
//             easing: this.options.easing,
//             begin: this.options.onAnimationStart,
//             complete: this.options.onAnimationComplete
//         };

//     if (this.options.animation.translateZ !== undefined) {
//         let randArr = createRandIntOrderedArray(this.options.animation.translateZ.min, this.options.animation.translateZ.max, this.options.pieces);
//         animProps.translateZ = typeof this.options.animation.translateZ === 'object'
//             ? (el, index) => {
//                 return randArr[index];
//             }
//             : this.options.animation.translateZ;
//     }

//     if (this.options.animation.translateX !== undefined) {
//         animProps.translateX = typeof this.options.animation.translateX === 'object'
//             ? (el, index) => {
//                 return anime.random(self.options.animation.translateX.min, self.options.animation.translateX.max);
//             }
//             : this.options.animation.translateX;
//     }

//     if (this.options.animation.translateY !== undefined) {
//         animProps.translateY = typeof this.options.animation.translateY === 'object'
//             ? () => {
//                 return anime.random(self.options.animation.translateY.min, self.options.animation.translateY.max);
//             }
//             : this.options.animation.translateY;
//     }

//     if (this.options.animation.opacity !== undefined) {
//         animProps.opacity = this.options.animation.opacity;
//     }

//     anime(animProps);

//     //  Animate the shadow element

//     if (this.options.shadows && isObjEmpty(this.options.shadowsAnimation)) {
//         anime(collect({
//             targets: this
//                 .el
//                 .querySelectorAll('.segmenter__shadow'),
//             duration: this.options.animation.duration,
//             delay: function (el, index) {
//                 return (self.options.pieces - index - 1) * self.options.animation.delay;
//             },
//             easing: this.options.animation.easing
//         }, this.options.shadowsAnimation))
//     }
// }

// // Init or Bind events/* Utility function to cancatentate objects
// const collect = () => {
//     let ret = {};
//     let len = arguments.length;
//     for (let i = 0; i < len; i++) {
//         for (let p in arguments[i]) {
//             if (arguments[i].hasOwnProperty(p)) {
//                 ret[p] = arguments[i][p];
//             }
//         }

//     }

// }

// // Checks if an object is empty.
// function isObjEmpty(obj) {
//     return Object
//         .getOwnPropertyNames(obj)
//         .length > 0;
// }
// // Utility function to create a sorted array of random numbers between minVal
// // and maxVal with a length = size
// const createRandIntOrderedArray = (minVal, maxVal, size) => {
//     let arr = [];

//     for (let i = 0; i < size; i++) {
//         arr.push(anime.random(minVal, maxVal));
//     }

//     arr.sort((a, b) => {
//         return a - b
//     });

//     return arr
// }

// // Utility function
// const areClipPathShapesSupported = () => {
//     const base = 'clipPath',
//         prefixes = [
//             'webkit', 'moz', 'ms', 'o'
//         ],
//         properties = [base],
//         testElement = document.createElement('testelement'),
//         attribute = 'polygon(50% 0%, 0% 100%, 100% 100%)';

//     // Push prefix values into the properties array
//     for (let i = 0; i < prefixes.length; i++) {
//         // To capitalize the text on the screen incrementally
//         let prefixedProperty = prefixes[i] + base
//             .charAt(0)
//             .toUpperCase() + base.slice(1);
//         properties.push(prefixedProperty);
//     };

//     // Iterate over the properties to determine if they pass the IE clip path and
//     // CSS shape create test
//     for (let i = 0, l = properties.length; i < l; i++) {
//         let property = properties[i];

//         // IE clip path test will automatically fail
//         if (testElement.style[property] === '') {
//             if (testElement.style[property] !== '') {
//                 return true;
//             }
//         }

//     }

//     return false;

// }

// function extend(a, b) {
//     if (b &&a!== undefined) {
//         for (let key in b) {
//             if (b.hasOwnProperty(key)) {
//                 a[key] = b[key];
//             }
//         }
//     }

// }

// function debounce(func, wait, immediate) {
//     let timeout;
//     return () => {
//         let context = this,
//             args = arguments;
//         let later = () => {
//             timeout = null;
//             if (!immediate) {
//                 func.apply(context, args);
//             };

//             let callNow = immediate && !timeout;
//             clearTimeout(timeout);
//             timeout = setTimeout(later, wait);
//             if (callNow) {
//                 func.apply(context, args);
//             };
//         };
//     }
// }

class Welcome extends Component {
    // state = {  }
    segmentStyle = {
        backgroundImage: `${backgroundImage}`
    }

    componentWillMount() {
        Segementer.prototype._initEvents = () => {
            var self = this;

            // Window resize

            this.debounceSize = this.debounce((ev) => {
                let positionsTotal = self.options.length;

                //  Recalculate the dimensions
                self.dimensions = {
                    width: self.el.offsetWidth,
                    height: self.el.offsetHeight
                };

                // Recalculate the clip values
                self
                    .pieces
                    .forEach((piece, position) => {
                        let clipTop,
                            clipLeft,
                            clipRight,
                            clipBottom,
                            segmenterPiece = piece.querySelector('.segmenter__piece');

                        if (self.options.positions === 'random') {
                            let randT = anime.random(0, 100),
                                randL = anime.random(0, 100),
                                randW = anime.random(0, 100),
                                randH = anime.random(0, 100);
                            clipTop = randT / 100 * self.dimensions.height;
                            clipLeft = randL / 100 * self.dimensions.width;
                            clipRight = randW / 100 * self.dimensions.width + clipLeft;
                            clipBottom = randH / 100 * self.dimensions.height + clipTop;
                        } else {
                            let pos = position <= positionsTotal - 1
                                ? position
                                : 0;
                            clipTop = self.options.positionsTotal[pos].top / 100 * self.dimensions.height;
                            clipLeft = self.options.positions[pos].left / 100 * self.dimensions.width;
                            clipRight = self.options.positions[pos].width / 100 * self.dimensions.width + clipLeft;
                            clipBottom = self.options.positions[pos].height / 100 * self.dimensions.height + clipTop;
                        }

                        segmenterPiece.style.clip = `rect(${clipTop}px, ${clipRight}px, ${clipBottom}px, ${clipLeft}px)`
                    })
            }, 10);
            window.addEventListener('resize', this.debounceSize);
        }

        setTimeout(() => {
            let headline = document.querySelector('.trigger-headline'),
                trigger = document.querySelector('.btn--trigger'),
                segmenter = new Segementer(document.querySelector('.segmenter'), {
                    onReady: () => {
                        trigger
                            .classList
                            .remove('btn--hidden');
                        segmenter.animate();
                        headline
                            .classList
                            .remove('trigger-headline--hidden');
                        this
                            .classList
                            .add('btn--hidden');
                    }
                })
        }, 200);
    }

    render() {
        return (
            <React.Fragment>
                <div className='segmenter'></div>
                <h2 className="trigger-headline trigger-headline-hidden">
                    <span>W</span>
                    <span>O</span>
                    <span>L</span>
                    <span>O</span>
                    <span></span>
                    <span>Library</span>
                </h2>
            </React.Fragment>

        );
    }
}

export default Welcome;