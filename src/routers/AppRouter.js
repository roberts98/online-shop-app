import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import DashboardPage from '../components/DashboardPage';
import AddItem from '../components/AddItem';
import EditItem from '../components/EditItem';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';
import ShoppingCard from '../components/ShoppingCard';
import ShowItem from '../components/ShowItem';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path="/" component={LoginPage} exact={true} />
        <PrivateRoute path="/dashboard" component={DashboardPage} />
        <PrivateRoute path="/items/:id" component={ShowItem} exact={true} />
        <PrivateRoute path="/items/:id/edit" component={EditItem} />
        <PrivateRoute path="/card" component={ShoppingCard} />
        <PrivateRoute path="/create" component={AddItem} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
