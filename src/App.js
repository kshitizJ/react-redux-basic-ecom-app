import './App.css';
import Header from './containers/Header';
import ProductListing from './containers/ProductListing';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ProductDetail from './containers/ProductDetail';

function App() {
   return (
      <div className="App">
         {/* Router helps in routing */}
         <Router>
            <Header />
            {/* Switch helps in switching between the components */}
            <Switch>
               {/* Route take us to that particular url and renders the component in that url */}
               <Route exact path="/" component={ProductListing} />
               <Route exact path="/product/:productId" component={ProductDetail} />
               <Route>404 not found</Route>
            </Switch>
         </Router>
      </div>
   );
}

export default App;
