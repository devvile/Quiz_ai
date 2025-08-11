import { createBrowserRouter } from "react-router";
import RootLayout from "./layouts/RootLayout";

const router = createBrowserRouter([
    {path:"/",element:<RootLayout/>,children:[
        
    ]}
])

export default router;