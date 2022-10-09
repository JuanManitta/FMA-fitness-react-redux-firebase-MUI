import { Route, Routes } from "react-router-dom"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { FmaRoutes } from "../fma/routes/FmaRoutes"

export const AppRouter = () => {
  return (
    <Routes >

        {/* Login */}

        <Route path="/auth/*" element={<AuthRoutes/>}/>


        {/* Ranking sin Edición */}
        <Route path="/*" element={<FmaRoutes/>} />

    </Routes>
  )
}
