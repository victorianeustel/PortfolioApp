import { useEffect, useState } from "react";
import { ref, get } from "firebase/database";
import { db } from "./storageConfig";

export default function FetchData(path) {

    //directory could be data, about, or data/:id
    const [data, setData] = useState();
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const snapshot = await get(ref(db, path));
            const aboutVal = await snapshot.val();

            setData(aboutVal);
            setIsLoaded(true);
        }

        fetchData();

    }, [])

    if (isLoaded === true) {
        return data;
    }
}