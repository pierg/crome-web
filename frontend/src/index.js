import React from "react";
import ReactDOM from "react-dom";
import {HashRouter, Route, Switch, Redirect} from "react-router-dom";
// styles from Now UI template
import "assets/styles/bootstrap.min.css";
import "assets/scss/now-ui-kit.css";

import "assets/demo/demo.css";
import "assets/demo/react-demo.css";
import "assets/demo/nucleo-icons-page-styles.css";

// styles from Notus template
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.min.css";
import "assets/styles/docs.css";

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
// // custom
import CustomDashboard from "./views/custom/CustomDashboard";
// Product Pages - STOP


ReactDOM.render(
  <HashRouter>
    <Switch>
      {/* Product Pages - START */}
      {/* admin */}
      <Route path="/dashboard" exact component={Dashboard} />
      <Route path="/maps" exact component={Maps} />
      <Route path="/settings-2" exact component={Settings2} />
      <Route path="/tables" exact component={Tables} />
      {/* auth */}
      <Route path="/login-1" exact component={Login1} />
      <Route path="/login-2" exact component={Login2} />
      <Route path="/register-1" exact component={Register1} />
      <Route path="/register-2" exact component={Register2} />
      <Route path="/reset" exact component={Reset} />
      {/* blog */}
      <Route path="/blog-post" exact component={BlogPost} />
      <Route path="/blog-posts" exact component={BlogPosts} />
      {/* e-commerce */}
      <Route path="/chat" exact component={Chat} />
      <Route path="/checkout" exact component={Checkout} />
      <Route path="/e-commerce" exact component={ECommerce} />
      <Route path="/invoice" exact component={Invoice} />
      <Route path="/pricing" exact component={Pricing} />
      <Route path="/product" exact component={Product} />
      <Route path="/profile-1" exact component={Profile1} />
      <Route path="/settings-1" exact component={Settings1} />
      {/* error */}
      <Route path="/error-404" exact component={Error404} />
      <Route path="/error-500" exact component={Error500} />
      {/* presentation */}
      <Route path="/landing-1" exact component={Landing1} />
      <Route path="/landing-2" exact component={Landing2} />
      <Route path="/about-us" exact component={AboutUs} />
      <Route path="/contact-us" exact component={ContactUs} />
      {/* Product Pages - STOP */}
      {/* Docs Routes - START - you can delete these when you no longer need our docs */}
      <Route path="/components" component={Components} />
      <Route path="/documentation" component={Documentation} />
      {/* Docs Routes - STOP */}
      {/* Custom Routes added */}
      <Route exact path="/:id" render={(props) => ( <CustomDashboard page={props.match.params.id}/>)} />

      <Redirect from="*" to="/index" />
    </Switch>
  </HashRouter>,
  document.getElementById("root")
);
