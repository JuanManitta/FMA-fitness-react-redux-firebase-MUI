import { Navigate, Route, Routes } from "react-router-dom"
import { Ranking, Alumnos, Actividades, Cuotas, FmaPage, Equipo } from "../pages/"

export const FmaRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<FmaPage/>} />

        <Route path="/*" element={<Navigate to='/'/>} />

        <Route path="/ranking" element={<Ranking/>} />

        <Route path="/alumnos" element={<Alumnos/>} />

        <Route path="/actividades" element={<Actividades/>} />

        <Route path="/equipo" element={<Equipo/>} />

        <Route path="/cuotas" element={<Cuotas/>} />
    </Routes>
  )
}
