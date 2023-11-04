import routes from "./routes";
import { generatePath} from "react-router-dom";


// bunun bize avantajı 
// eper linkin path değiştirmeniz gerekti name değiştirmeden tüm bu linki
// koyduğumuz sayfalar bu path ile çalışır

// useSearchParams = js deki searchparams ile aynı

export const url = (path, params={}) => {
    let lastRoute, url
    path.split('.').map(p =>{
        if(!lastRoute){
            lastRoute = routes.find(r => r.name === p)
            console.log(lastRoute)
            url = lastRoute.path
        }else{
            lastRoute = lastRoute.children.find(r => r.name === p)
            url +=  '/' + lastRoute.path 
        }
    })

    return generatePath(url.replace(/\/\//gi,'/'), params)
    
}