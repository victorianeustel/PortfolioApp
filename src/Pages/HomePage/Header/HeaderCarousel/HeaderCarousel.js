import { TransitionGroup, CSSTransition } from 'react-transition-group';
import React, { useState, useEffect } from 'react';
import './HeaderCarousel.css';
import leftArrow from '../../../../Assets/Arrows/arrow-left.svg';
import rightArrow from '../../../../Assets/Arrows/arrow.svg';
import { HandleNext, HandlePrevious, childFactory } from '../../../../Actions/carouselActions';

function HeaderCarousel(props) {
    const { projects } = props;

    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState("slide-right");

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
                        key={projects[index].id}
                        timeout={1000}
                        classNames={direction}
                    >
                        <img alt="" src={projects[index].headerImage} />
                    </CSSTransition>
                </TransitionGroup>
            </div>

            <div id='preview-caption'>
                <div>
                    Project: {index + 1} / {projects.length}
                </div>
                <div className='header-carousel-arrows'>

                    <button onClick={() => {setIndex(HandlePrevious(index, projects.length)); setDirection("slide-left")}} className='header-prev'>
                        <img alt="previous carousel arrow" src={leftArrow} />
                    </button>

                    <button onClick={() => {setIndex(HandleNext(index, projects.length)); setDirection("slide-right")}} className='header-next'>
                        <img alt="next carousel arrow" src={rightArrow} />
                    </button>

                </div>


                <div id='open-project'>
                    {projects[index].name}
                    <br />
                    <a href={`/projects/${index}/${projects[index].name}`} id='caption-project-link'>
                        <img alt="project link"src={rightArrow} />
                        Open Project
                    </a>
                </div>
            </div>

        </div>


    )
}

export default HeaderCarousel;