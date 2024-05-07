import { useEffect, useState } from "react";

function NavLink({ to, children }) {
    return (
        <a href={to} className="mx-4 text-lg text-white hover:text-gray-300">
            {children}
        </a>
    );
}

const MyList = () => {
    const [records, setRecords] = useState([]);

    useEffect(() => {
        try {
            fetch('/api/records', {
                method: 'GET',
            })
                .then(response => response.json())
                .then(json => setRecords(json.data));
        } catch (error) {
            console.log(error);
        }
    }, []);

    return (
        <div className="mylist-page">
            <div className="mylist-content">
                <div className="mylist-grid">
                    <h2 className="mylist-title">Lista ta de mașini</h2>
                    {records.length > 0 ? (
                        <div className="mylist-card">
                            <div className="mylist-record">
                                <div className="record-column">
                                    <h3>Nume Mașină</h3>
                                </div>
                                <div className="record-column">
                                    <h3>VIN</h3>
                                </div>
                                <div className="record-column">
                                    <h3>Nr. înmatriculare</h3>
                                </div>
                            </div>
                            {records.map(record => (
                                <div key={record.VIN} className="mylist-record">
                                    <div className="record-column">
                                        <p>{record.marca} {record.model}</p>
                                    </div>
                                    <div className="record-column">
                                        <p>{record.VIN}</p>
                                    </div>
                                    <div className="record-column">
                                        <p>{record.numar_inmatriculare}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p>Lista este goală. Adaugă o mașină acum!</p>
                    )}
                </div>
                <NavLink to="/adauga-masina">
                    <button className="btn">Adaugă mașină</button>
                </NavLink>
            </div>
        </div>
    );
}

export default MyList;
