import React, {useEffect, useState} from 'react';
import axios from "axios";

function ClientInf() {
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
                    <h6 className="txt1"><b>Клиент:</b></h6>
                    <p className="txt1"><b>{persons.name}</b></p>
                    <p className="txt1"><b>{persons.username}</b></p>
                </>
            )}
        </div>
    )
}

export default ClientInf;