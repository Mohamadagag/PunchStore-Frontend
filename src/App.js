import "./Css/App.css";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import Contactus from "./Pages/Contactus";
import Aboutus from "./Pages/Aboutus";
import Checkout from "./Pages/Checkout";
// import Newpassword from "./Pages/Newpassword";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import EditPassword from "./Components/EditPassword";
import DashboardProducts from "./Components/DashboardProducts";
import DashboardAddItem from "./Components/DashboardAddItem";
// import ProductEditDelete from "./Pages/ProductEditDelete";
// import Edit from "./Pages/Edit";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contactus />} />
          <Route path="/about" element={<Aboutus />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="dashboard">
            <Route
              path=""
              element={<Dashboard elt={<DashboardProducts />} />}
            />
            <Route
              path="editPassword"
              element={<Dashboard elt={<EditPassword />} />}
            />
            <Route
              path="addProduct"
              element={<Dashboard elt={<DashboardAddItem />} />}
            />
          </Route>

          {/* <Route path="/newpassword" element={<Newpassword />} />
          <Route path="/productEditDelete" element={<ProductEditDelete />} />
          <Route path="/edit" element={<Edit />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
