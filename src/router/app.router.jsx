import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import WelcomeContent from "../components/Welcome/welcome";
import PyPage from "../components/PyPage/pythonpage";
import JavPage from "../components/Jav/javpage";
import CPPPage from "../components/Cpp/cpppage";
import ReactPage from "../components/react/reactpage";
import ApiPage from "../components/FastApi/apipage";
import DMPage from "../components/DM/dmpage";
import MLPage from "../components/ML/mlpage";
import DLPage from "../components/DL/dlpage";

const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <WelcomeContent />
            },
            {
                path: "/python",
                element: <PyPage />
            },
            {
                path: "/javascript",
                element: <JavPage />
            },
            {
                path: "/cplus",
                element: <CPPPage />
            },
            {
                path: "/react",
                element: <ReactPage />
            },
            {
                path: "/fastapi",
                element: <ApiPage />
            },
            {
                path: "/datamining",
                element: <DMPage />
            },
            {
                path: "/machinelearn",
                element: <MLPage />
            },
            {
                path: "/deeplearn",
                element: <DLPage />
            }
        ]
    }
]);

export default router;