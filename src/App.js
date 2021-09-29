
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';

import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Shop from './components/Shop';
import PicDetail from './components/PicDetail';
import Footer from './components/Footer';

function App() {
    return (
        <Router basename={process.env.PUBLIC_URL}>
            <Header />

            <Switch>
                <Route exact path='/' render={() => <Shop />} />
                <Route exact path='/shop' render={() => <Shop />} />
                {/*<Route exact path='/about' render={() => <h1>CIAOO</h1>} />*/}

                {/*<Route path='/pictures/:id' render={() => <PicDetail />} />*/}

                <Route><Redirect to='/'/></Route>
            </Switch>

            <Footer />
        </Router>
    );
}

export default App;
