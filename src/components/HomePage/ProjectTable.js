import React from "react";
import './HomePage.css'
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ref, onValue } from "firebase/database";
import { db } from "../../database/storageConfig";


function ProjectTable() {
    const [data, setData] = useState([]);

    let navigate = useNavigate();
    const routeChange = (key) => {
        let path = 'projects/' + key;
        navigate(path, { state: { key: key } });
    }

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
        };

        const handleData = onValue(dbRef, fetchData);

        return () => {
            handleData(); // Clean up the event listener when the component unmounts
        };
    }, []);

    return (
        <table className="data-table">
            <thead>
                <tr>
                    <th id="name">Project</th>
                    <th id="type">Type</th>
                    <th id="location">Client</th>
                    <th id="date">Date</th>
                </tr>
            </thead>
            <tbody>
                {data.map((event, key) => {
                    return (
                        <tr key={key} onClick={() => routeChange(key)}>
                            <td id="name">{event.data.name}</td>
                            <td id="type">{event.data.type}</td>
                            <td id="location">{event.data.client}</td>
                            <td id="date">{event.data.year}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default ProjectTable;