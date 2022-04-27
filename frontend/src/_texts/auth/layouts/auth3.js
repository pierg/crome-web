import "_texts/presentation/footers/footersmall.js"
import "_texts/presentation/navbars/navbarlinkslanding1.js"
import "_texts/presentation/prefooters/prefooterlarge.js"
import footersmall
import navbarlinkslanding1
import prefooterlarge

const textProps = {
  color: "purple-indigo",
  navbar: { ...navbarlinkslanding1 },
  prefooter: { ...prefooterlarge },
  footer: { ...footersmall },
};
export default textProps;
