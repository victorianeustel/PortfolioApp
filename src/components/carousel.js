import React, { useEffect, useState } from 'react';
// import data from '../data/data';
import { data } from '../data/data';

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
            {/* <p>{index}</p> */}
            <img src={data[1].images[index]} width='300px' />
                <button onClick={handlePrevious}>Previous</button>
                <button onClick={handleNext}>Next</button>

        </div>
    );
};

export default Carousel;