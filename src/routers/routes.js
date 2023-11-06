import Home from "../Components/Home";
import HomePage from "../Components/HomePage";

import Projects from "../Components/projects/Projects";
import ProjectsLayout from "../Components/projects/ProjectsLayout";
import OnGoingProjects from "../Components/projects/OnGoingProjects";
import OtherProjects from "../Components/projects/OtherProjects";

import Trainimgs from "../Components/trainings/Trainimgs";
import TrainimgsLayout from "../Components/trainings/TrainimgsLayout";
import Blog from "../Components/trainings/Blog";
import AstronomicalEvents from "../Components/trainings/AstronomicalEvents";
import EducationalActivities from "../Components/trainings/EducationalActivities";


import International from "../Components/international/International";
import Minister from "../Components/institutional/Minister";
import InstitutionalLayout from "../Components/institutional/InstitutionalLayout";
import Institutional from "../Components/institutional/Institutional";
import BoardOfDirectors from "../Components/institutional/BoardOfDirectors";
import CorporateDocuments from "../Components/institutional/CorporateDocuments";
import OrganizationChart from "../Components/institutional/OrganizationChart";



import InternationalLayout from "../Components/international/InternationalLayout";
import InternationalCooperation from "../Components/international/InternationalCooperation";
import NationalCooperation from "../Components/international/NationalCooperation";





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
                    },
                    {
                        path:"yurutulen-projeler",
                        name:"OnGoingProjects",
                        element:<OnGoingProjects/>
                    },
                    {
                        path:"diger-projeler",
                        name:"OtherProjects",
                        element:<OtherProjects/>
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
                    },
                    {
                        path:"astronomik-olaylar",
                        name:"AstronomicalEvents",
                        element:<AstronomicalEvents/>,
                    },
                    {
                        path:"blog",
                        name:"Blog",
                        element:<Blog/>
                    },
                    {
                        path:"egitim-faaliyetleri",
                        name:"EducationalActivities",
                        element:<EducationalActivities/>
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
                    },
                    {
                        path:"yonetim-kurulu",
                        name:"BoardOfDirectors",
                        element:<BoardOfDirectors/> 
                    },
                    {
                        path:"kurumsal-belgeler",
                        name:"CorporateDocuments",
                        element:<CorporateDocuments/> 
                    },
                    {
                        path:"organizasyon-semasi",
                        name:"OrganizationChart",
                        element:<OrganizationChart/> 
                    },
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
                    },
                    {
                        path:"uluslararasi-isbirlikleri",
                        name:"InternationalCooperation",
                        element:<InternationalCooperation/>
                    },
                    {
                        path:"ulusal-isbirlikleri",
                        name:"NationalCooperation",
                        element:<NationalCooperation/>
                    }
                ]
            },
        ]
    }
]

export default routes;