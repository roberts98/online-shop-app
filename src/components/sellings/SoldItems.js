import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import getItems from '../../selectors/items';
import ItemListFilters from '../ItemListFilters';
import ItemListSingle from '../ItemListSingle';

const SoldItems = (props) => (
  <div className="container">
    <div className="sidebar">
      <div className="row">
        <div className="col-sm-12 col-md-4 col-lg-3 col-xl-3">
          <ul className="list-group">
            <Link to="/dashboard/sellings/sold">
              <li className="list-group-item active">Sold</li>
            </Link>
            <Link to="/dashboard/sellings/sell">
              <li className="list-group-item">Currently Selling</li>
            </Link>
            <Link to="/create">
              <li className="list-group-item">Add new item</li>
            </Link>
          </ul>
        </div>
        <div className="col-sm-12 col-md-8 col-lg-9 col-xl-9">
          <ItemListFilters />
          {props.items.length > 0 ? (
            props.items.map((item) => (
              <ItemListSingle
                key={item.name}
                {...item}
              />
            ))
          ) : (
              <div>
                <p>You haven't sold any items</p>
              </div>
            )
          }
        </div>
      </div>
    </div>
  </div>
);

const mapStateToProps = (state) => {
  return {
    items: state.items.filter((item) => item.isBought && (item.sellerId === state.auth.uid))
  }
};

export default connect(mapStateToProps)(SoldItems);