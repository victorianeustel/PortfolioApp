import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { ref, getDownloadURL, listAll } from "firebase/storage";
import { storage } from "../database/storageConfig";
import { data } from "../data/data";

// const storageRef = ref(storage, data[2].images[2]);
// const imagesRef = ref(storage, 'About');


function getUrl(imagePath) {
    const storageRef = ref(storage, imagePath);

    getDownloadURL(storageRef)
        .then((url) => {
            console.log(url);
            return url;
        })
}


export default function Test() {

    const name = 'gs://portfolioapp-aaa92.appspot.com/Capstone/Screenshot 2023-04-25 at 7.25.45 PM.png'
    const test = getUrl(name);
    console.log(test);
 
    return (
        <div>
            hi
            {/* <ol>
                {data[1].images.map((item, index) => {
                    return (
                        <li key={index}>
                            <img src={item} width="50px" alt="text" />
                        </li>
                    );
                })}
            </ol> */}
        </div>
    )
}