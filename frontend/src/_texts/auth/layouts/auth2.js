import "_texts/auth/headers/headerimagetitlesmallcenter.js"
import "_texts/presentation/footers/footersmall.js"
import "_texts/presentation/navbars/navbarlinkslanding1.js"
import "_texts/presentation/prefooters/prefooterlarge.js"
import footersmall
import headerimagetitlesmallcenter
import navbarlinkslanding1
import prefooterlarge

const textProps = {
  navbar: { ...navbarlinkslanding1 },
  header: { ...headerimagetitlesmallcenter },
  prefooter: { ...prefooterlarge },
  footer: { ...footersmall },
};
export default textProps;
