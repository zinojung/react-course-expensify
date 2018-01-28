import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import ExpenseDashboard from '../components/ExpenseDashboard.js';
import AddExpense from '../components/AddExpense.js';
import EditExpense from '../components/EditExpense.js';
import Help from '../components/Help.js';
import NotFound from '../components/NotFound.js';
import Header from '../components/Header.js';


const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={ExpenseDashboard} exact={true}/>
                <Route path="/creat" component={AddExpense} />
                <Route path="/edit/:id" component={EditExpense} />
                <Route path="/help" component={Help} />
                <Route component={NotFound} />
            </Switch>
        </div>
    </BrowserRouter>
)

export default AppRouter;