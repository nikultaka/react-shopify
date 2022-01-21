import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomeController from '../components/Controller/HomeController'

export default function MainRoutes() {
    return (
        <Routes>
            <Route exact path="/" element={<HomeController />} />
            <Route exact path="*" element={<HomeController />} />
        </Routes>
    )

}