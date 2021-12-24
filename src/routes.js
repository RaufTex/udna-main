import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './Components/HomePage/HomePage'
import PaternityPage from './Components/PaternityPage/PaternityPage'


export default function MainRoutes() {
    return (
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/paternidade" element={<PaternityPage />}/>
            </Routes>
    )
}
