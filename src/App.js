import './App.css';
import ProductList from "./components/ProductList";
import Navbar from "./components/Navbar"
import Slider from "./components/Slider";

function App() {
    return (
        <div className="container-center-horizontal">
            <div className="desktop-version screen">
                <Navbar/>
                <ProductList/>
                <Slider/>
            </div>
        </div>
    );
}

export default App;
