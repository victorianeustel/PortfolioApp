import { TransitionGroup, CSSTransition } from 'react-transition-group';
import React, { useState } from 'react';
import './HeaderCarousel.css';

function HeaderCarousel(props) {
    const { projects } = props;
    console.log(projects[1].data.name);

    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState("slide-right");

    const handlePrevious = () => {
        const newIndex = index - 1;
        setIndex(newIndex < 0 ? projects.length - 1 : newIndex);
        setDirection("slide-left");

    };

    const handleNext = () => {
        const newIndex = index + 1;
        setIndex(newIndex >= projects.length ? 0 : newIndex);
        setDirection("slide-right");

    };

    const childFactory = (direction) => (child) =>
        React.cloneElement(child, {
            classNames: direction,
        });

    return (
        <div className='header-carousel-container'>

            <div className="image-wrapper">
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
                {projects[index].data.name}
            </div>

        </div>


    )
}

export default HeaderCarousel;