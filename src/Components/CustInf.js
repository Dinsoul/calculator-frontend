import React, {Component, useEffect, useState} from 'react';
import axios from "axios";

function CustInf() {
    const [persons, setPersons] = useState([]);

    useEffect(() => {
        const apiUrl = 'https://jsonplaceholder.typicode.com/users/1';
        axios.get(apiUrl).then((resp) => {
            const allPersons = resp.data;
            setPersons(allPersons);
            console.log(allPersons)
        });
    }, [setPersons]);


    return (
        <div>
            {persons && (
                <>
                   <p className="txt">{persons.name}</p>
                    <p className="txt">{persons.username}</p>
                </>
            )}
        </div>
    )
}

export default CustInf;