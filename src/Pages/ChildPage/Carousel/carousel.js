import './Carousel.css';
import React, { useState } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import leftarrow from '../../../Assets/Arrows/arrow-left-white.svg';
import x from '../../../Assets/Arrows/x-white.svg';


export default function ImageSlider(props) {
    const { images } = props;

    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState("slide-right");
    const [showFullscreen, setShowFullscreen] = useState(false);

    const handleFullScreen = () => {
        setShowFullscreen((current) => !current);
    }

    const handlePrevious = () => {
        const newIndex = index - 1;
        setIndex(newIndex < 0 ? images.length - 1 : newIndex);
        setDirection("slide-left");
    };

    const handleNext = () => {
        const newIndex = index + 1;
        setIndex(newIndex >= images.length ? 0 : newIndex);
        setDirection("slide-right");
    };

    const childFactory = (direction) => (child) =>
        React.cloneElement(child, {
            classNames: direction,
        });
        

    return (
        <CSSTransition
            //1. state (enter/exit - boolean)
            in={showFullscreen}
            //2. duration
            timeout={1000}
            //3. classname 
            classNames="test"
        >
            <div className={`image-slider fullscreen-${showFullscreen}`}>
                {images.length !==1
                    ?
                    <div class="slider-button-container">
                        <div
                            onClick={handlePrevious}
                            className="slider-button prev"
                            role="button"
                            aria-label="Next slide"
                        />
                        <div
                            onClick={handleNext}
                            className='slider-button next'
                            role='button'
                            aria-label='Prev slide'
                        />
                    </div>

                    : null
                }
                {showFullscreen ?
                    <button id="exit-fullscreen" onClick={handleFullScreen}>
                        <img alt="exit fullscreen" src={x} />
                    </button>
                    :
                    null

                }


                <div className='image-column'>

                    <div id='image-header' >
                        {images.length !== 1
                            ? <>{index + 1} / {images.length}</>
                            : null

                        }

                        {!showFullscreen
                            ?
                            <button id="showFullscreen" onClick={handleFullScreen}>
                                <img alt="full screen button" src={leftarrow} className="small-arrow" />
                                Fullscreen
                            </button>
                            :
                            null

                        }

                    </div>

                    <div className="image-wrapper">

                        <TransitionGroup childFactory={childFactory(direction)}>
                            <CSSTransition
                                key={images[index].link}
                                timeout={1000}
                                classNames={direction}
                            >
                                <img alt="" src={images[index].link} />
                            </CSSTransition>
                        </TransitionGroup>

                    </div>

                    <div id='image-description'>{images[index].description}</div>

                </div>

            </div>
        </CSSTransition>


    );
}