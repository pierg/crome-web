import "_texts/auth/footers/footerauth.js"
import "_texts/presentation/navbars/navbarlinkslanding1.js"
import footer
import navbar

const textProps = {
  image: require("assets/img/register_bg_2.png").default,
  navbar: { ...navbar },
  footer: { ...footer },
};
export default textProps;
