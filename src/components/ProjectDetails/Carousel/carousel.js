import React, { useEffect, useState } from 'react';
import { data } from '../../../data/data';
import './carousel.css';
import { ChevronRightIcon, ChevronLeftIcon } from '@radix-ui/react-icons';

const Carousel = () => {
    const [index, setIndex] = useState(0);
    const length = data[1].images.length;

    useEffect(() => {
    }, [index]);

    const handlePrevious = () => {
        const newIndex = index - 1;
        setIndex(newIndex < 0 ? length - 1 : newIndex);
    };

    const handleNext = () => {
        const newIndex = index + 1;
        setIndex(newIndex >= length ? 0 : newIndex);
    };

    return (
        <div className="carousel">
            {/* <button onClick={handlePrevious}> */}
                <ChevronLeftIcon onClick={handlePrevious} className="button" />
            {/* </button> */}
            <img src={data[1].images[index]} id="images" />
            {/* <div id='images'>hi</div> */}
            {/* <button onClick={handleNext}> */}
                <ChevronRightIcon onClick={handleNext} className='button'/>
            {/* </button> */}
        </div>
    );
};

export default Carousel;