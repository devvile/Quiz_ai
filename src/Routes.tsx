import { createBrowserRouter } from "react-router";
import RootLayout from "./layouts/RootLayout";
import QuizPage from "./pages/quiz/QuizPage";
const router = createBrowserRouter([
    {path:"/",element:<RootLayout/>,children:[
        {index:true, element:<QuizPage/>}
        
    ]}
])

export default router;