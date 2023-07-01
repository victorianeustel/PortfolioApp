import React, { useEffect, useState } from 'react';
import { data } from '../../../data/data';
import './carousel.css';
import { ChevronRightIcon, ChevronLeftIcon } from '@radix-ui/react-icons';

function Carousel({ dataID }) {
    const [index, setIndex] = useState(0);
    const length = data[dataID].images.length;

    //rerendering for change of dataID detail page
    // useEffect(() => {
    // }, [dataID]);

    //preloading images
    useEffect(() => {
        data[dataID].images.forEach((picture) => {
            new Image().src = picture.fileName;
        })
    })

    // console.log("ID: " + dataID)

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
            {data[dataID].images.length === 1 ?
                <div className="carousel">
                    <div className='carousel-images'>
                        <img src={data[dataID].images[0].link} alt={data[dataID].images[0].description} />
                        <div>{data[dataID].images[index].description}</div>
                    </div>
                </div>
                :
                <div className="carousel">

                    <ChevronLeftIcon onClick={handlePrevious} className="carousel-buttons" />
                    <div className='carousel-images'>
                        <div>{index + 1} / {data[dataID].images.length}</div>

                        <img src={data[dataID].images[index].link} alt={data[dataID].images[index].description} />
                        <div>{data[dataID].images[index].description}</div>
                    </div>
                    <ChevronRightIcon onClick={handleNext} className='carousel-buttons' />
                </div>

            }
        </div>
    );
};

export default Carousel;