import React, { useState } from 'react';
import './carousel.css'
import { ChevronRightIcon, ChevronLeftIcon } from '@radix-ui/react-icons';
import { ProjectContext } from '../ProjectContext';
import { useContext } from 'react';

function Carousel() {
    const images = useContext(ProjectContext).images;

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
        <div className="carousel">
            {images.length === 1 ?

                <div className="carousel">

                    <div className='carousel-images' alt={images.description} >

                        <img src={images[0].link} alt={images[0].description}></img>
                        <div>{images[0].description}</div>
                        
                    </div>

                </div>

                :

                <div className="carousel">

                    <ChevronLeftIcon onClick={handlePrevious} className="carousel-buttons" />

                    <div className='carousel-images'>

                        <div>{index + 1} / {images.length}</div>
                        <img src={images[index].link} alt={images[index].description} />
                        <div>{images[index].description}</div>
                        
                    </div>

                    <ChevronRightIcon onClick={handleNext} className='carousel-buttons' />

                </div>
            }
        </div>
    );
};

export default Carousel;