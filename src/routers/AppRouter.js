import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import MainItemList from '../components/items/MainItemList';
import AddItem from '../components/dashboard/items/AddItem';
import EditItem from '../components/dashboard/items/EditItem';
import NotFoundPage from '../components/NotFoundPage';
import ShowItem from '../components/items/ShowItem';
import Header from '../components/Header';
import DashboardPage from '../components/dashboard/DashboardPage';
import OrdersBoughtPage from '../components/dashboard/orders/OrdersBoughtPage';
import SoldItems from '../components/dashboard/sellings/SoldItems';
import SellingNow from '../components/dashboard/sellings/SellingNow';
import RegisterPage from '../components/auth/RegisterPage';
import LoginPage from '../components/auth/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
    <Header />
      <Switch>
        <Route path="/" component={MainItemList} exact={true} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/items/:id" component={ShowItem} exact={true} />
        <PrivateRoute path="/items/:id/edit" component={EditItem} />
        <PrivateRoute path="/dashboard" component={DashboardPage} exact={true} />
        <PrivateRoute path="/dashboard/sellings/sold" component={SoldItems} />
        <PrivateRoute path="/dashboard/sellings/sell" component={SellingNow} />
        <PrivateRoute path="/dashboard/orders/bought" component={OrdersBoughtPage} />
        <PrivateRoute path="/create" component={AddItem} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
