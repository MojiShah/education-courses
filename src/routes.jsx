import About from "./Components/About/About";
import DashBoard from "./Components/About/SubRoutes/DashBoard";
import Setting from "./Components/About/SubRoutes/Setting";
import Courses from "./Components/Courses/Courses";
import Home from "./Components/Home/Home";
import MainCourse from "./Components/MainCourse";
import Panel from "./Components/Panel/Panel";
import SignIn from "./Components/SignIn/SignIn";

let routes = [
    { path: '/', element: <Home />  },
    { path: '/courses', element: <Courses /> },
    { path: '/courses/:courseID', element: <MainCourse /> },
    {
        path: '/about/*',
        element: <About />,
        children: [
            { path: 'setting', element: <Setting /> },
            { path: 'dashboard', element: <DashBoard /> }
        ]
    },
    {path:'/signin' , element : <SignIn />},
    {path:'/panel' , element:<Panel />}

];

export default routes;