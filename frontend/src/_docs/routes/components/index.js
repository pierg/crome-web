import admin from "_docs/routes/components/_admin.js";
import auth from "_docs/routes/components/_auth.js";
import blog from "_docs/routes/components/_blog.js";
import eCommerce from "_docs/routes/components/_e-commerce.js";
import error from "_docs/routes/components/_error.js";
import misc from "_docs/routes/components/_misc.js";
import presentation from "_docs/routes/components/_presentation.js";

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
