import React from "react";
import Recipes from "./Recipes";
import Dogs from "./Dogs";
import Cars from "./Cars";
import { Link, useRouteMatch, Switch, Route } from "react-router-dom";

const Blog = () => {
  const { path, url } = useRouteMatch();
  console.log(path, url);

  return (
    <div>
      <ul>
        <li>
          <Link to={`${url}/recipes`}>Recipes</Link>
        </li>
        <li>
          <Link to={`${url}/dogs`}>Dogs</Link>
        </li>
        <li>
          <Link to={`${url}/cars`}>Cars</Link>
        </li>
      </ul>
      <Switch>
          <Route path={`${path}/recipes`}>
              <Recipes />
          </Route>
          <Route path={`${path}/dogs`}>
              <Dogs />
          </Route>
          <Route path={`${path}/cars`}>
              <Cars />
          </Route>
      </Switch>
    </div>
  );
};

export default Blog;
