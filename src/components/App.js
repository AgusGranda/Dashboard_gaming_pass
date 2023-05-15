import React from 'react';
import { Route, Switch } from 'react-router-dom';

import ContentWrapper from './ContentWrapper';
import ProductsDetail from './ProductsDetail';
import LastProductDb from './LastProductDb';
import Categories from './Categories';
import NotFound from './NotFound';
import SideBar from './SideBar';

function App() {
  return (
    <React.Fragment>
      <div id="wrapper">
        <SideBar />
        <Switch>
          <Route exact path="/">
            <ContentWrapper />
          </Route>
          <Route path="/ProductsDetail">
            <ProductsDetail/>
          </Route>
          <Route path="/LastProductDb">
            <LastProductDb />
          </Route>
          <Route path="/Categories">
            <Categories />
          </Route>
          <Route component={NotFound} />
        </Switch>
      </div>
    </React.Fragment>
  );
}

export default App;
