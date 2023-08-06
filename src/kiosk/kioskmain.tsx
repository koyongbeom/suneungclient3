import React, { useEffect, useState, useRef } from 'react';
import { ReactComponent as Logo } from "../svg/newlogo.svg";
import KioskMainPage from './pages/mainpage';
import { Route, BrowserRouter as Router, Routes, useLocation } from "react-router-dom"
import PhonenumberPage from './pages/phonenumberpage';
import SelectPage from './pages/selectpage';


const KioskMain: React.FC<any> = (props) => {

    const [userId, setUserId] = useState<number>();
    const [name, setName] = useState<string>("");

    const setNewUserId = (id: number) => {
        setUserId(id);
    }

    const setUserName = (name: string) => {
        setName(name);
    }


    return (
        <div>
            <Routes>
                <Route path="/" element={<KioskMainPage />} />
                <Route path="/phonenumber" element={<PhonenumberPage userId={userId} setUserId={setNewUserId} setUserName={setUserName} userName={name} />} />
                <Route path="/selectpage" element={<SelectPage userId={userId} setUserId={setNewUserId} setUserName={setUserName} userName={name} />} />
            </Routes>

        </div>
    )
}
//"/img/daechiinterior/J2V_2032.webp"
export default KioskMain;