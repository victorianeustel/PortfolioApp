import React from "react";
/* ======================
Carousel Control Actions 
====================== */

export function HandlePrevious(index, length) {
    const newIndex = index - 1;
    if (newIndex < 0) {
        return length - 1;
    }
    return newIndex;
};

export function HandleNext(index, length) {

    const newIndex = index + 1;
    if (newIndex >= length) {
        return 0;
    }
    return newIndex;
};

export const childFactory = (direction) => (child) =>
    React.cloneElement(child, {
        classNames: direction,
    });