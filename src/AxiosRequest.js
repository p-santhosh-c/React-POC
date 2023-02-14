import React, { useState, useEffect } from "react";
import axios from "axios";

const AxiosRequest = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get("https://jsonplaceholder.typicode.com/users");
            setData(result.data);
        };
        fetchData();
    }, []);

    return (
        <div>
            {data.map(el => (
                <div key={el.id}>
                    <h3>{el.name}</h3>
                    <p>{el.email}</p>
                </div>
            ))}
        </div>
    );
};


export default AxiosRequest;