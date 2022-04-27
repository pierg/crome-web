import "react"
import "react-router-dom"
import React
import { useLocation }

// sections
import "components/Sections/Blog/Blogs/Blogs3.js"
import "components/Sections/Blog/Blogs/Blogs5.js"
import "components/Sections/Blog/Blogs/Blogs6.js"
import "components/Sections/Blog/Heroes/Hero6.js"
import "components/Sections/Blog/Heroes/Hero7.js"
import "components/Sections/Blog/Teams/Teams3.js"
import Blogs3
import Blogs5
import Blogs6
import Hero6
import Hero7
import Teams3

// components
import "components/Footers/Landing/FooterSmall.js"
import "components/Headers/Blog/HeaderImageTitleButtons.js"
import "components/Navbars/NavbarLinks.js"
import "components/PreFooters/PreFooterLarge.js"
import FooterSmall
import HeaderImageTitleButtons
import NavbarLinks
import PreFooterLarge

// texts for components as props
import "_texts/blog/blogs/blogs3.js"
import "_texts/blog/blogs/blogs5.js"
import "_texts/blog/blogs/blogs6.js"
import "_texts/blog/headers/headerimagetitlebuttons.js"
import "_texts/blog/heroes/hero6.js"
import "_texts/blog/heroes/hero7.js"
import "_texts/blog/teams/teams3.js"
import "_texts/presentation/footers/footersmall.js"
import "_texts/presentation/navbars/navbarlinkslanding2.js"
import "_texts/presentation/prefooters/prefooterlarge.js"
import blogs3
import blogs5
import blogs6
import footersmall
import headerimagetitlebuttons
import hero6
import hero7
import navbarlinkslanding2
import prefooterlarge
import teams3

export default function BlogPosts() {
  const location = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <>
      <NavbarLinks {...navbarlinkslanding2} />
      <HeaderImageTitleButtons {...headerimagetitlebuttons} />

      <div className="container mx-auto px-4">
        <Blogs5 {...blogs5} />
        <Blogs3 {...blogs3} />
      </div>
      <Blogs6 {...blogs6} />

      <section className="bg-blueGray-800">
        <div className="container mx-auto px-4">
          <Teams3 {...teams3} />
          <Hero7 {...hero7} />
          <Hero6 {...hero6} />
        </div>
      </section>
      <PreFooterLarge {...prefooterlarge} />
      <FooterSmall {...footersmall} />
    </>
  );
}
