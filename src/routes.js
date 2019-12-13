import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './Home';
import SignIn from './SignIn';
import BookList from './BookList/BookList';


const Routes = () => (
<BrowserRouter >
<Switch>
<Route exact path="/" component={Home}/>
<Route path="/sign-in" component={SignIn}/>
<Route path="/booklist" component={BookList}/>
</Switch>
</BrowserRouter>
);
export default Routes;