import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.min.css";
import "assets/styles/docs.css";
import NavbarComponents from "_docs/components/NavbarComponents2.js";
// Docs Routes - START - you can delete these when you no longer need our docs
import Components from "_docs/layouts/Components.js";
import Documentation from "_docs/layouts/Documentation.js";
// Docs Routes -  STOP

// Product Pages - START
// // admin
import Dashboard from "views/admin/Dashboard.js";
import Maps from "views/admin/Maps.js";
import Settings2 from "views/admin/Settings2.js";
import Tables from "views/admin/Tables.js";
// // auth
import Login1 from "views/auth/Login1.js";
import Login2 from "views/auth/Login2.js";
import Register1 from "views/auth/Register1.js";
import Register2 from "views/auth/Register2.js";
import Reset from "views/auth/Reset.js";
// // blog
import BlogPost from "views/blog/BlogPost.js";
import BlogPosts from "views/blog/BlogPosts.js";
// // e-commerce
import Chat from "views/e-commerce/Chat.js";
import Checkout from "views/e-commerce/Checkout.js";
import ECommerce from "views/e-commerce/ECommerce.js";
import Invoice from "views/e-commerce/Invoice.js";
import Pricing from "views/e-commerce/Pricing.js";
import Product from "views/e-commerce/Product.js";
import Profile1 from "views/e-commerce/Profile1.js";
import Settings1 from "views/e-commerce/Settings1.js";
// // error
import Error404 from "views/error/Error404.js";
import Error500 from "views/error/Error500.js";
// // presentation
import Landing1 from "views/presentation/Landing1.js";
import Landing2 from "views/presentation/Landing2.js";
import AboutUs from "views/presentation/AboutUs.js";
import ContactUs from "views/presentation/ContactUs.js";
// Product Pages - STOP

ReactDOM.render(
  <HashRouter>
    <Switch>
      {/* Product Pages - START */}
      {/* admin */}
      <Route
        path="/dashboard"
        exact
        render={() => (
          <React.Fragment>
            <NavbarComponents />
            <div className="pt-17">
              <Dashboard />
            </div>
          </React.Fragment>
        )}
      />
      <Route
        path="/maps"
        exact
        render={() => (
          <React.Fragment>
            <NavbarComponents />
            <div className="pt-17">
              <Maps />
            </div>
          </React.Fragment>
        )}
      />
      <Route
        path="/settings-2"
        exact
        render={() => (
          <React.Fragment>
            <NavbarComponents />
            <div className="pt-17">
              <Settings2 />
            </div>
          </React.Fragment>
        )}
      />
      <Route
        path="/tables"
        exact
        render={() => (
          <React.Fragment>
            <NavbarComponents />
            <div className="pt-17">
              <Tables />
            </div>
          </React.Fragment>
        )}
      />
      {/* auth */}
      <Route
        path="/login-1"
        exact
        render={() => (
          <React.Fragment>
            <NavbarComponents />
            <div className="pt-17">
              <Login1 />
            </div>
          </React.Fragment>
        )}
      />
      <Route
        path="/login-2"
        exact
        render={() => (
          <React.Fragment>
            <NavbarComponents />
            <div className="pt-17">
              <Login2 />
            </div>
          </React.Fragment>
        )}
      />
      <Route
        path="/register-1"
        exact
        render={() => (
          <React.Fragment>
            <NavbarComponents />
            <div className="pt-17">
              <Register1 />
            </div>
          </React.Fragment>
        )}
      />
      <Route
        path="/register-2"
        exact
        render={() => (
          <React.Fragment>
            <NavbarComponents />
            <div className="pt-17">
              <Register2 />
            </div>
          </React.Fragment>
        )}
      />
      <Route
        path="/reset"
        exact
        render={() => (
          <React.Fragment>
            <NavbarComponents />
            <div className="pt-17">
              <Reset />
            </div>
          </React.Fragment>
        )}
      />
      {/* blog */}
      <Route
        path="/blog-post"
        exact
        render={() => (
          <React.Fragment>
            <NavbarComponents />
            <div className="pt-17">
              <BlogPost />
            </div>
          </React.Fragment>
        )}
      />
      <Route
        path="/blog-posts"
        exact
        render={() => (
          <React.Fragment>
            <NavbarComponents />
            <div className="pt-17">
              <BlogPosts />
            </div>
          </React.Fragment>
        )}
      />
      {/* e-commerce */}
      <Route
        path="/chat"
        exact
        render={() => (
          <React.Fragment>
            <NavbarComponents />
            <div className="pt-17">
              <Chat />
            </div>
          </React.Fragment>
        )}
      />
      <Route
        path="/checkout"
        exact
        render={() => (
          <React.Fragment>
            <NavbarComponents />
            <div className="pt-17">
              <Checkout />
            </div>
          </React.Fragment>
        )}
      />
      <Route
        path="/e-commerce"
        exact
        render={() => (
          <React.Fragment>
            <NavbarComponents />
            <div className="pt-17">
              <ECommerce />
            </div>
          </React.Fragment>
        )}
      />
      <Route
        path="/invoice"
        exact
        render={() => (
          <React.Fragment>
            <NavbarComponents />
            <div className="pt-17">
              <Invoice />
            </div>
          </React.Fragment>
        )}
      />
      <Route
        path="/pricing"
        exact
        render={() => (
          <React.Fragment>
            <NavbarComponents />
            <div className="pt-17">
              <Pricing />
            </div>
          </React.Fragment>
        )}
      />
      <Route
        path="/product"
        exact
        render={() => (
          <React.Fragment>
            <NavbarComponents />
            <div className="pt-17">
              <Product />
            </div>
          </React.Fragment>
        )}
      />
      <Route
        path="/profile-1"
        exact
        render={() => (
          <React.Fragment>
            <NavbarComponents />
            <div className="pt-17">
              <Profile1 />
            </div>
          </React.Fragment>
        )}
      />
      <Route
        path="/settings-1"
        exact
        render={() => (
          <React.Fragment>
            <NavbarComponents />
            <div className="pt-17">
              <Settings1 />
            </div>
          </React.Fragment>
        )}
      />
      {/* error */}
      <Route
        path="/error-404"
        exact
        render={() => (
          <React.Fragment>
            <NavbarComponents />
            <div className="pt-17">
              <Error404 />
            </div>
          </React.Fragment>
        )}
      />
      <Route
        path="/error-500"
        exact
        render={() => (
          <React.Fragment>
            <NavbarComponents />
            <div className="pt-17">
              <Error500 />
            </div>
          </React.Fragment>
        )}
      />
      {/* presentation */}
      <Route
        path="/landing-1"
        exact
        render={() => (
          <React.Fragment>
            <NavbarComponents />
            <div className="pt-17">
              <Landing1 />
            </div>
          </React.Fragment>
        )}
      />
      <Route
        path="/landing-2"
        exact
        render={() => (
          <React.Fragment>
            <NavbarComponents />
            <div className="pt-17">
              <Landing2 />
            </div>
          </React.Fragment>
        )}
      />
      <Route
        path="/about-us"
        exact
        render={() => (
          <React.Fragment>
            <NavbarComponents />
            <div className="pt-17">
              <AboutUs />
            </div>
          </React.Fragment>
        )}
      />
      <Route
        path="/contact-us"
        exact
        render={() => (
          <React.Fragment>
            <NavbarComponents />
            <div className="pt-17">
              <ContactUs />
            </div>
          </React.Fragment>
        )}
      />
      {/* Product Pages - STOP */}
      {/* Docs Routes - START - you can delete these when you no longer need our docs */}
      <Route path="/components" component={Components} />
      <Route path="/documentation" component={Documentation} />
      {/* Docs Routes - STOP */}
      <Redirect from="*" to="/components" />
    </Switch>
  </HashRouter>,
  document.getElementById("root")
);
