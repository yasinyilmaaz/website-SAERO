import Home from "../Components/Home";
import HomePage from "../Components/HomePage";
import Projects from "../Components/projects/Projects";
import ProjectsLayout from "../Components/projects/ProjectsLayout";
import Trainimgs from "../Components/trainings/Trainimgs";
import TrainimgsLayout from "../Components/trainings/TrainimgsLayout";
import International from "../Components/international/International";
import Minister from "../Components/institutional/Minister";
import InstitutionalLayout from "../Components/institutional/InstitutionalLayout";
import Institutional from "../Components/institutional/Institutional";
import InternationalLayout from "../Components/international/InternationalLayout";




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
                element:<ProjectsLayout/>,
                children:[
                    {
                        index:true,
                        element:<Projects/>
                    }
                ]
            },
            {
                path:"egitim",
                name:"Education",
                element:<TrainimgsLayout/>,
                children:[
                    {
                        index:true,
                        element:<Trainimgs/>
                    }
                ]
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
                element:<InternationalLayout/>,
                children:[
                    {
                        index:true,
                        element:<International/>
                    }
                ]
            },
        ]
    }
]

export default routes;