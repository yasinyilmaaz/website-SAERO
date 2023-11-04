import Home from "../Components/Home";
import HomePage from "../Components/HomePage";
import Projects from "../Components/projects/Projects";
import Trainimgs from "../Components/trainings/Trainimgs";
import International from "../Components/international/International";
import Minister from "../Components/institutional/Minister";
import InstitutionalLayout from "../Components/institutional/InstitutionalLayout";
import Institutional from "../Components/institutional/Institutional";




const routes = [  
    {
        path:"/",
        name:"homepage",
        element:<HomePage/>,
        children:[
            {
                index:true,
                element:<Home/>
            },
            {
                path:"projeler",
                name:"projects",
                element:<Projects/>
            },
            {
                path:"egitim",
                name:"Education",
                element:<Trainimgs/>
            },
            {
                path:"kurumsal",
                name:"Corporate",
                element:<InstitutionalLayout/>,
                children:[
                    {
                        index:true,
                        element:<Institutional/>
                    },
                    {
                        path:"baskan",
                        name:"Minister",
                        element:<Minister/> 
                    }
                ]
            },
            {
                path:"uluslararası",
                name:"International",
                element:<International/>
            },
        ]
    }
]

export default routes;