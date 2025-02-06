import { useState } from "react";
import { BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom';
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

import axios from "axios";

export default function Header() {
    const location = useLocation();
    const { roomCode } = location.state || {};
    const history = useHistory();

    return (
        <div className="h-screen flex flex-col items-center justify-center bg-gray-900 text-white">

            <div className="absolute top-0 w-full flex justify-between items-center p-4 bg-gray-800 shadow-md">
                <div className="flex flex-row w-full m-4 ">
                    <button
                        className="px-4   m-2 py-2 bg-red-500 rounded-lg font-semibold hover:bg-red-600"
                        onClick={() => history.push("/signup")}
                    >
                        Signup
                    </button>
                    <button
                        className="px-4 m-2 py-2 bg-red-500 rounded-lg font-semibold hover:bg-red-600"
                        onClick={() => alert("login !")}
                    >
                        Login
                    </button>
                </div>
            </div>
        </div>
    );
}
