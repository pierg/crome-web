import "react"
import "react-dom"
import "react-router-dom"
import React
import ReactDOM
import Redirect }
import Route
import Switch
import { HashRouter

// styles from Now UI template
import "assets/demo/demo.css"
import "assets/demo/nucleo-icons-page-styles.css"
import "assets/demo/react-demo.css"
import "assets/scss/now-ui-kit.css"
import "assets/styles/bootstrap.min.css"

// styles from Notus template
import "@fortawesome/fontawesome-free/css/all.min.css"
import "assets/styles/docs.css"
import "assets/styles/tailwind.min.css"

// Docs Routes - START - you can delete these when you no longer need our docs
import "_docs/layouts/Components.js"
import "_docs/layouts/Documentation.js"
import Components
import Documentation

// Docs Routes -  STOP
// Product Pages - START
// // admin
import "views/admin/Dashboard.js"
import "views/admin/Maps.js"
import "views/admin/Settings2.js"
import "views/admin/Tables.js"
import Dashboard
import Maps
import Settings2
import Tables

// // auth
import "views/auth/Login1.js"
import "views/auth/Login2.js"
import "views/auth/Register1.js"
import "views/auth/Register2.js"
import "views/auth/Reset.js"
import Login1
import Login2
import Register1
import Register2
import Reset

// // blog
import "views/blog/BlogPost.js"
import "views/blog/BlogPosts.js"
import BlogPost
import BlogPosts

// // e-commerce
import "views/e-commerce/Chat.js"
import "views/e-commerce/Checkout.js"
import "views/e-commerce/ECommerce.js"
import "views/e-commerce/Invoice.js"
import "views/e-commerce/Pricing.js"
import "views/e-commerce/Product.js"
import "views/e-commerce/Profile1.js"
import "views/e-commerce/Settings1.js"
import Chat
import Checkout
import ECommerce
import Invoice
import Pricing
import Product
import Profile1
import Settings1

// // error
import "views/error/Error404.js"
import "views/error/Error500.js"
import Error404
import Error500

// // presentation
import "views/presentation/AboutUs.js"
import "views/presentation/ContactUs.js"
import "views/presentation/Landing1.js"
import "views/presentation/Landing2.js"
import AboutUs
import ContactUs
import Landing1
import Landing2

// // custom
import "./views/custom/CustomDashboard"
import CustomDashboard

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
      <Route
        exact
        path="/:id"
        render={(props) => <CustomDashboard page={props.match.params.id} />}
      />

      <Redirect from="*" to="/index" />
    </Switch>
  </HashRouter>,
  document.getElementById("root")
);
