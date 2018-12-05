import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import MainItemList from '../components/MainItemList';
import AddItem from '../components/AddItem';
import EditItem from '../components/EditItem';
import NotFoundPage from '../components/NotFoundPage';
import ShowItem from '../components/ShowItem';
import Header from '../components/Header';
import DashboardPage from '../components/DashboardPage';
import OrdersBoughtPage from '../components/OrdersBoughtPage';
import SoldItems from '../components/sellings/SoldItems';
import SellingNow from '../components/sellings/SellingNow';
import PrivateRoute from './PrivateRoute';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
    <Header />
      <Switch>
        <Route path="/" component={MainItemList} exact={true} />
        <Route path="/items/:id" component={ShowItem} exact={true} />
        <PrivateRoute path="/items/:id/edit" component={EditItem} />
        <PrivateRoute path="/dashboard" component={DashboardPage} exact={true}/>
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
