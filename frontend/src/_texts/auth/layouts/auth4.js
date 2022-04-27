import "_texts/auth/footers/footersmallreset.js"
import "_texts/auth/prefooters/prefooterlargereset.js"
import "_texts/presentation/navbars/navbarlinkslanding1.js"
import footersmallreset
import navbarlinkslanding1
import prefooterlargereset

const textProps = {
  image: require("assets/img/illustrations/register_bg.png").default,
  navbar: { ...navbarlinkslanding1 },
  prefooter: { ...prefooterlargereset },
  footer: { ...footersmallreset },
};
export default textProps;
