import { Navigate, Route, Routes } from "react-router-dom"
import { 
  Ranking, 
  Calendario, 
  Actividades, 
  Suscripcion,
  FmaPage, 
  Equipo, 
  Zumba, 
  Yoga, 
  Crossfit, 
  Calistenia, 
  YogaTurnos, 
  CrossfitTurnos, 
  CalisteniaTurnos, 
  ZumbaTurnos,  
  Inicio
} from "../pages/"

export const FmaRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<FmaPage/>} />

        <Route path="/*" element={<Navigate to='/'/>} />

        {/* Rutas principales */}
        <Route path="ranking" element={<Ranking/>} />
        <Route path="calendario" element={<Calendario/>} />
        <Route path="actividades" element={<Actividades/>} />
        <Route path="equipo" element={<Equipo/>} />
        <Route path="suscripcion" element={<Suscripcion/>} />
        <Route path="inicio" element={<Inicio/>} />

        {/* Rutas de Actividades */}
        <Route path="calistenia" element={<Calistenia/>} />
        <Route path="zumba" element={<Zumba/>} />
        <Route path="yoga" element={<Yoga/>} />
        <Route path="crossfit" element={<Crossfit/>} />

        {/* Turnos */}
        <Route path="yogaTurnos" element={<YogaTurnos />} />
        <Route path="calisteniaTurnos" element={<CalisteniaTurnos />} />
        <Route path="crossfitTurnos" element={<CrossfitTurnos />} />
        <Route path="zumbaTurnos" element={<ZumbaTurnos />} />
    </Routes>
  )
}
