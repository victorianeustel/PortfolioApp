import { useContext, createContext } from "react";
import "./Style.css"

function HandlePrevious(props) {

    const newIndex = props.index - 1;
    props.setIndex(newIndex < 0 ? props.imageLength - 1 : newIndex);
    props.setDirection("slide-left");
};

function HandleNext(props) {

    const newIndex = props.index + 1;
    props.setIndex(newIndex >= props.imageLength ? 0 : newIndex);
    props.setDirection("slide-right");
};

const PrevButton = () => (
    <div
        onClick={HandlePrevious}
        className="slider-button prev"
        role="button"
        aria-label="Next slide"
    />
);

const NextButton = () => (
    <div
        onClick={HandleNext}
        className='slider-button next'
        role='button'
        aria-label='Prev slide'
    />
);

export const SliderControls = (props) => {
    <div class="slider-button-container">
        <PrevButton
            index={props.index}
            setIndex={props.setIndex}
            setDirection={props.setDirection}
            imageLength={props.imageLength}
        />
        <NextButton
            index={props.index}
            setIndex={props.setIndex}
            setDirection={props.setDirection}
            imageLength={props.imageLength}
        />
    </div>
}
