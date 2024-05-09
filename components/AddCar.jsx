import React, { useState } from "react";
import { useRouter } from "next/router";
import { createRecord } from "@/utils/recordsFunctions";

const AddCar = () => {
    const [formData, setFormData] = useState({
        marca: "",
        model: "",
        an_fabricatie: "",
        numar_inmatriculare: "",
        VIN: "",
        piese_schimb: [],
        note: "",
        ultima_reparatie: ""
    });

    const router = useRouter();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleChangePiesa = (e, index, field) => {
        const { value } = e.target;
        const updatedPieseSchimb = formData.piese_schimb.map((piesa, i) => {
            if (i === index) {
                return {
                    ...piesa,
                    [field]: value
                };
            }
            return piesa;
        });
        setFormData({
            ...formData,
            piese_schimb: updatedPieseSchimb
        });
    };


    const addPiesa = () => {
        setFormData({
            ...formData,
            piese_schimb: [...formData.piese_schimb, { nume: "", producator: "", numar_referinta: "" }]
        });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await createRecord(formData);
            if (response) {
                router.push("/mylist");
            } else {
                alert("Failed to create record");
            }
        } catch (error) {
            console.error(error);
            alert("Failed to create record");
        }
    };

    return (
        <div className="add-car-container">
            <div className="add-car-form">
                <h2>Adaugă mașină nouă</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-row">
                        <div className="form-column">
                            <div className="form-group">
                                <label htmlFor="marca">Marca:</label>
                                <input
                                    type="text"
                                    id="marca"
                                    name="marca"
                                    value={formData.marca}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="model">Model:</label>
                                <input
                                    type="text"
                                    id="model"
                                    name="model"
                                    value={formData.model}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="an_fabricatie">An fabricație:</label>
                                <input
                                    type="text"
                                    id="an_fabricatie"
                                    name="an_fabricatie"
                                    value={formData.an_fabricatie}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className="form-column">
                            <div className="form-group">
                                <label htmlFor="numar_inmatriculare">Nr. înmatriculare:</label>
                                <input
                                    type="text"
                                    id="numar_inmatriculare"
                                    name="numar_inmatriculare"
                                    value={formData.numar_inmatriculare}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="VIN">VIN:</label>
                                <input
                                    type="text"
                                    id="VIN"
                                    name="VIN"
                                    value={formData.VIN}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="ultima_reparatie">Ultima reparație:</label>
                                <input
                                    type="date"
                                    id="ultima_reparatie"
                                    name="ultima_reparatie"
                                    value={formData.ultima_reparatie}
                                    onChange={handleChange}
                                />

                            </div>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="note">Note:</label>
                            <textarea
                                id="note"
                                name="note"
                                value={formData.note}
                                onChange={handleChange}
                                style={{ color: "black", width: "300px", height: "100px" }}
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Piese schimb:</label>
                        {formData.piese_schimb.map((piesa, index) => (
                            <div key={index}>
                                <label>Nume:</label>
                                <input
                                    type="text"
                                    name={`nume_${index}`}
                                    value={piesa.nume}
                                    onChange={(e) => handleChangePiesa(e, index, 'nume')}
                                />
                                <label>Producător:</label>
                                <input
                                    type="text"
                                    name={`producator_${index}`}
                                    value={piesa.producator}
                                    onChange={(e) => handleChangePiesa(e, index, 'producator')}
                                />
                                <label>Nr. referință:</label>
                                <input
                                    type="text"
                                    name={`numar_referinta_${index}`}
                                    value={piesa.numar_referinta}
                                    onChange={(e) => handleChangePiesa(e, index, 'numar_referinta')}
                                />
                            </div>
                        ))}

                        <button type="button" onClick={addPiesa}>Adaugă piesă</button>
                    </div>
                    <button type="submit" className="btn btn-primary" style={{ margin: "20px auto", display: "block" }}>Adaugă mașină</button>
                </form>
            </div>
        </div>
    );
}

export default AddCar;
