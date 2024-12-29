//import logo from './logo.svg';
import './App.css';
import GlobalRouter from "./routes/GlobalRouter";
import {LibroContext} from "./context/LibroContext";
import {useLibros} from "./hooks/UseLibros";
import {Footer} from "./components/Footer";


function App() {
  const libros = useLibros();
    
    return (
        <LibroContext.Provider value={{libros}}>
            
            <GlobalRouter></GlobalRouter>
            <Footer />
        </LibroContext.Provider>
         
    );
}

export default App;
