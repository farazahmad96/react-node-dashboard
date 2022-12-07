import React, { useState } from "react";
// import { useNavigate } from 'react-router-dom';
import Button from "./Button";
export default function Modal() {

    const [showModal, setShowModal] = useState(false);

    const [name, setName] = useState("");
    const [country, setCountry] = useState("");
    const [city, setCity] = useState("");
    // const navigate = useNavigate();

    const AddNewTeam = async () => {
        console.warn(name, country, city);
        let result = await fetch('http://localhost:5000/add_team', {
            method: 'post',
            body: JSON.stringify({ name, country, city }),
            headers: {
                'Content-Type': 'application/json'
            },
        })
        result = await result.json();
        console.warn(result);
        if (result) {
            alert()
        }
    }
    return (
        <>
            <Button click={setShowModal} title={'Create New Team'} icon={<i className='fa fa-plus'></i>} />

            {showModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">

                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                    <h3 className="text-3xl font-semibold">
                                        Create New Team
                                    </h3>
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowModal(false)}
                                    >
                                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                            ×
                                        </span>
                                    </button>
                                </div>
                                {/*body*/}
                                <div className="relative p-6 flex-auto">
                                    <div className="w-full max-w-xs">
                                        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                                            <div className="mb-4">
                                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                                    Name
                                                </label>
                                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="team_name" type="text" placeholder="Username" value={name} onChange={(e) => setName(e.target.value)} />
                                            </div>
                                            <div className="mb-6">
                                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                                    Country
                                                </label>
                                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="team_country" type="text" value={country} onChange={(e) => setCountry(e.target.value)} placeholder="Country" />
                                            </div>
                                            <div className="mb-6">
                                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                                    City
                                                </label>
                                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="team_city" type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder="City" />
                                            </div>

                                            <div className="flex items-center justify-between">
                                                <button
                                                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                    type="button"
                                                    onClick={() => setShowModal(false)}
                                                >
                                                    Close
                                                </button>
                                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={AddNewTeam} type="button">
                                                    Save
                                                </button>

                                            </div>
                                        </form>

                                    </div>
                                </div>
                                {/*footer*/}
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    );
}