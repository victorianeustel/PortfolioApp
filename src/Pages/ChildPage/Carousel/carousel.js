import React, { useState } from 'react';
import './carousel.css'
import { ChevronRightIcon, ChevronLeftIcon } from '@radix-ui/react-icons';

function Carousel(props) {
    const { images } = props;

    const [index, setIndex] = useState(0);
    const length = images.length;

    const handlePrevious = () => {
        const newIndex = index - 1;
        setIndex(newIndex < 0 ? length - 1 : newIndex);
    };

    const handleNext = () => {
        const newIndex = index + 1;
        setIndex(newIndex >= length ? 0 : newIndex);
    };

    return (
        <>
            {images.length === 1 ?

                <div className="carousel single">

                    <div className='single-image' >
                        
                        <img src={images[0].link} alt={images[0].description}></img>
                        <div>{images[0].description}</div>

                    </div>

                </div>

                :

                <div className="carousel multi">

                    <ChevronLeftIcon onClick={handlePrevious} className="carousel-buttons" />

                    <div className='carousel-images'>

                        <div>{index + 1} / {images.length}</div>
                        <img src={images[index].link} alt={images[index].description} />
                        <div>{images[index].description}</div>

                    </div>

                    <ChevronRightIcon onClick={handleNext} className='carousel-buttons' />

                </div>
            }
        </>
    );
};

export default Carousel;