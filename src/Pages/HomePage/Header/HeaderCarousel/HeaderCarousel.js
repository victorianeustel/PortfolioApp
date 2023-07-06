import { TransitionGroup, CSSTransition } from 'react-transition-group';
import React, { useState, useEffect } from 'react';
import './HeaderCarousel.css';
import leftArrow from '../../../../Assets/Arrows/arrow-left.svg';
import rightArrow from '../../../../Assets/Arrows/arrow.svg';

function HeaderCarousel(props) {
    const { projects } = props;

    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState("slide-right");

    const handlePrevious = () => {
        const newIndex = index - 1;
        setIndex(newIndex < 0 ? projects.length - 1 : newIndex);
        setDirection("slide-left");

    };

    const handleNext = () => {
        console.log("handling next");
        const newIndex = index + 1;
        setIndex(newIndex >= projects.length ? 0 : newIndex);
        setDirection("slide-right");

    };

    const childFactory = (direction) => (child) =>
        React.cloneElement(child, {
            classNames: direction,
        });

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (
                (prev + 1) >= projects.length ? 0 : (prev + 1)
            ));
            setDirection("slide-right");
        }, 10000);

        return () => clearInterval(interval);

    }, []);

    return (
        <div className='header-carousel-container'>

            <div className="header-image-wrapper">
                <TransitionGroup childFactory={childFactory(direction)}>
                    <CSSTransition
                        key={projects[index].data.id}
                        timeout={1000}
                        classNames={direction}
                    >
                        <img alt="" src={projects[index].data.headerImage} />
                    </CSSTransition>
                </TransitionGroup>
            </div>

            <div id='preview-caption'>
                <div>
                    Project: {index + 1} / {projects.length}
                </div>
                <div className='header-carousel-arrows'>

                    <button onClick={handlePrevious} className='header-prev'>
                        <img src={leftArrow} />
                    </button>

                    <button onClick={handleNext} className='header-next'>
                        <img src={rightArrow} />
                    </button>

                </div>


                <div >
                    {projects[index].data.name}
                    <br />
                    <a href={`/projects/${index}/${projects[index].data.name}`} id='caption-project-link'>
                        <img src={rightArrow} />
                        Open Project
                    </a>
                </div>
            </div>

        </div>


    )
}

export default HeaderCarousel;