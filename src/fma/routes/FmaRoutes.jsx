import { Navigate, Route, Routes } from "react-router-dom"
import { Ranking, Calendario, Actividades, Suscripcion, FmaPage, Equipo } from "../pages/"

export const FmaRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<FmaPage/>} />

        <Route path="/*" element={<Navigate to='/'/>} />

        <Route path="/ranking" element={<Ranking/>} />

        <Route path="/calendario" element={<Calendario/>} />

        <Route path="/actividades" element={<Actividades/>} />

        <Route path="/equipo" element={<Equipo/>} />

        <Route path="/suscripcion" element={<Suscripcion/>} />
    </Routes>
  )
}
