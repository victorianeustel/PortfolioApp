import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { ref, getDownloadURL, listAll } from "firebase/storage";
import { storage } from "../database/storageConfig";
import { data } from "../data/data";

const storageRef = ref(storage, data[2].imagePaths[2]);
const imagesRef = ref(storage, 'Miami');


function getUrl(imagePath) {
    const storageRef = ref(storage, imagePath);

    getDownloadURL(storageRef)
        .then((url) => {
            console.log(url);
            return url;
        })
}

export default function Test() {
 
    return (
        <div>
            <ol>
                {data[1].images.map((item, index) => {
                    return (
                        <li key={index}>
                            <img src={item} width="50px" alt="text" />
                        </li>
                    );
                })}
            </ol>
        </div>
    )
}