import { createBrowserRouter } from "react-router";
import RootLayout from "./layouts/RootLayout";
import QuizPage from "./pages/QuizPage";
const router = createBrowserRouter([
    {path:"/",element:<RootLayout/>,children:[
        {index:true, element:<QuizPage/>}
        
    ]}
])

export default router;