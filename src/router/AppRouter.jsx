

import { useSelector } from "react-redux"
import { Navigate, Route, Routes } from "react-router-dom"
import { LoginPage } from "../auth/pages"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { FmaRoutes } from "../fma/routes/FmaRoutes"
import { useCheckAuth } from "../hooks"

export const AppRouter = () => {

  const { status } = useCheckAuth()
  

  if( status === 'checking'){
    return <LoginPage/>
  };

  return (
    <Routes >

      {
        (status === 'authenticated')
         ? <Route path="/*" element={<FmaRoutes/>} />
         : <Route path="/auth/*" element={<AuthRoutes/>}/>
      }

      <Route path='/*' element={<Navigate to='/auth/login'/>} />

    </Routes>
  )
}
