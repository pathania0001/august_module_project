
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import RouterLayout from "./components/layout/RootLayout"

const Routes = ()=>{
   const router = createBrowserRouter([
    {
        
        path:'/',
        element:<RouterLayout />
    }
   ])
    return (
        <RouterProvider router={router}/>
    )
}

export default Routes;