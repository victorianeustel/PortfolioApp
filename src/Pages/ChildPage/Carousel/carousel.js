import './carousel.css';
import React, { useState } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { ChevronRightIcon, ChevronLeftIcon } from '@radix-ui/react-icons';

export default function ImageSlider(props) {
    const { images } = props;

    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState("slide-right");

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
        <>
            {images.length === 1 ?

                <div className='image-slider single'>
                    <div className='image-column'>

                        <div className='image-wrapper'>

                            <img src={images[0].link} alt={images[0].description}></img>
                        </div>
                        <div id='image-description'>{images[0].description}</div>

                    </div>

                </div>
                :
                <div className="image-slider multi">

                    <ChevronLeftIcon onClick={handlePrevious} className="image-slider-button" />

                    <div className='image-column'>

                        <div id='image-header'>{index + 1} / {images.length}</div>

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

                    <ChevronRightIcon onClick={handleNext} className='image-slider-button' />
                </div>
            }
        </>



    );
}