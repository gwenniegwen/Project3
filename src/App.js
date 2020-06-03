import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Calendar from './pages/Calendar'
import Signup from './pages/Signup';
import Welcome from './pages/Welcome';
import Navbar from './components/Navbar';
import Wrapper from './components/Wrapper';

function App() {
    return (
        <Router>
            <div>
                <Navbar />
                <Wrapper>
                    <Route exact path="/" component={Welcome} />
                    <Route exact path="/Signup" component={Signup} />
                    <Route exact path="/Calendar" component={Calendar} />
                </Wrapper>
            </div>
        </Router>
    );
}

export default App;