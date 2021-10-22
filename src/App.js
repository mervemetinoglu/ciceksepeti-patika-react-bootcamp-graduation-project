import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Account from "./pages/Account/Account";
import AddProduct from "./pages/AddProduct/AddProduct";
import ProductDetailPage from "./pages/ProductDetail/ProductDetailPage";
import PrivateRoute from "./routes/PrivateRoute";

function App() {
  return (
    <>
      <Switch>
        <PrivateRoute path="/" exact>
          <Home />
        </PrivateRoute>
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/products/:id" component={ProductDetailPage} />
        <Route path="/account" component={Account} />
        <Route path="/addProduct" component={AddProduct} />
      </Switch>
    </>
  );
}

export default App;
