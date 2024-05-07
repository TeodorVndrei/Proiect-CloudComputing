// Modal.js
import React from "react";

const Modal = ({ isOpen, onClose, carDetails, onDelete }) => {
    if (!isOpen) return null;

    const handleDelete = async () => {
        await onDelete(carDetails._id);
        onClose();
    };

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
                    <button onClick={handleDelete} className="btn btn-danger">Șterge mașina</button>
                </div>
            </div>
        </div>
    );
}

export default Modal;
