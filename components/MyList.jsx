import { useEffect, useState } from "react";

// Definirea componentului Modal separat
const Modal = ({ isOpen, onClose, carDetails }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal">
                <div className="modal-content">
                    <span className="close" onClick={onClose}>&times;</span>
                    <h2>Detalii mașină</h2>
                    <ul>
                        <li><strong>Marca:</strong> {carDetails.marca}</li>
                        <li><strong>Model:</strong> {carDetails.model}</li>
                        <li><strong>An fabricație:</strong> {carDetails.an_fabricatie}</li>
                        <li><strong>Nr. înmatriculare:</strong> {carDetails.numar_inmatriculare}</li>
                        <li><strong>VIN:</strong> {carDetails.VIN}</li>
                        <li><strong>Ultima reparație:</strong> {carDetails.ultima_reparatie}</li>
                        <li><strong>Note:</strong> {carDetails.note}</li>
                        <li><strong>Piese schimb:</strong>
                            <ul>
                                {carDetails.piese_schimb.map((piesa, index) => (
                                    <li key={index}>
                                        <strong>{piesa.nume}</strong> - Producător: {piesa.producator}, Nr. referință: {piesa.numar_referinta}
                                    </li>
                                ))}
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

// Definirea componentului NavLink
const NavLink = ({ to, children }) => {
    return (
        <a href={to} className="mx-4 text-lg text-white hover:text-gray-300">
            {children}
        </a>
    );
}

// Definirea componentului MyList
const MyList = () => {
    const [records, setRecords] = useState([]);
    const [selectedCar, setSelectedCar] = useState(null);

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

    const openModal = (carDetails) => {
        setSelectedCar(carDetails);
    };

    const closeModal = () => {
        setSelectedCar(null);
    };

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
                                <div className="record-column">
                                    <h3>Detalii</h3>
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
                                    <div className="record-column">
                                        <button onClick={() => openModal(record)}>Vezi detalii</button>
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
                <Modal isOpen={selectedCar !== null} onClose={closeModal} carDetails={selectedCar} />
            </div>
        </div>
    );
}

export default MyList;
