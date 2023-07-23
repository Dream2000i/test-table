import React, { useEffect } from "react";
import './App.scss';
import Search from "@/containers/Search/Search";
import Controls from "@/containers/Controls/Controls";
import TableData from "@/containers/TableData/TableData";
import { Routes, Route, useLocation, useParams } from "react-router";
import { useNavigation } from "react-router-dom";
export default function App() {

    return (
        <div className="app">
            <div className="container">
                <Search />
                <TableData />

                <Routes>
                    <Route path=":page" element={<>
                        <Controls />
                    </>} />
                    <Route path="*" element={<>
                        <Controls />
                    </>} />
                </Routes>
                
            </div>
        </div>
    );
}

