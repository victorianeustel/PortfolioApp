import React from "react";
import './HomePage.css';
import '../../styles/global.css';
import ProjectTable from "./ProjectTable.js";
import Header from "./Header.js";
import { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";
import { db } from "../../database/storageConfig";

function HomePage() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [data, setData] = useState();

    useEffect(() => {
        const dbRef = ref(db, 'data');

        const fetchData = (snapshot) => {
            let records = [];
            snapshot.forEach((childSnapshot) => {
                let keyName = childSnapshot.key;
                let data = childSnapshot.val();
                records.push({ key: keyName, data: data });
            });
            setData(records);
            setIsLoaded(true);
        };

        const handleData = onValue(dbRef, fetchData);

        return () => {
            handleData(); // Clean up the event listener when the component unmounts
        };
    }, []);


    if (isLoaded) {
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

            <div className="loader-container">
                <div className="loader" />
            </div>
            
        )
    }


}

export default HomePage;