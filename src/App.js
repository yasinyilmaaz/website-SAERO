import './App.css';
import routes from './routers/routes';
import { useRoutes } from 'react-router-dom';



function App() {

  return useRoutes(routes);
}

export default App;
