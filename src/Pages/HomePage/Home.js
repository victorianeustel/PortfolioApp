import React, { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";
import { db } from "../../Database/storageConfig";

import ProjectTable from "./ProjectTable.js";
import Header from "./Header.js";
import Loader from "../LoaderPage/Loader.js"

import './HomePage.css';
import '../../Styles/global.css';

function HomePage() {
    const [isDataLoaded, setIsDataLoaded] = useState(false);
    const [data, setData] = useState();

    useEffect(() => {

        const dbRef = ref(db, 'data');

        function fetchData(snapshot) {
            let records = [];
            snapshot.forEach((childSnapshot) => {
                let keyName = childSnapshot.key;
                let data = childSnapshot.val();
                records.push({ key: keyName, data: data });
            });
            setData(records);
            setIsDataLoaded(true);
        };
        const handleData = onValue(dbRef, fetchData);

        return () => {
            handleData(); // Clean up the event listener when the component unmounts
        };
    }, []);

    if (isDataLoaded ) {
        return (

            <div className="home-container">
                    <div class="top">
                        <Header />
                    </div>
                <div className="bottom">
                    <ProjectTable data={data} />
                </div>
            </div>

        )
    }

    else {
        return (

            <Loader />

        )
    }


}

export default HomePage;