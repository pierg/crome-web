import "_docs/routes/components/_admin.js"
import "_docs/routes/components/_auth.js"
import "_docs/routes/components/_blog.js"
import "_docs/routes/components/_e-commerce.js"
import "_docs/routes/components/_error.js"
import "_docs/routes/components/_misc.js"
import "_docs/routes/components/_presentation.js"
import admin
import auth
import blog
import eCommerce
import error
import misc
import presentation

const routesArray = [
  { ...presentation },
  { ...admin },
  { ...eCommerce },
  { ...blog },
  { ...auth },
  { ...misc },
  { ...error },
];

export default routesArray;
