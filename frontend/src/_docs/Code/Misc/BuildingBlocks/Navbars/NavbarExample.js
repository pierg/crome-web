import React from "react";

import Navbar from "components/Navbars/Navbar.js";
import NavbarContainer from "components/Navbars/NavbarContainer.js";
import NavbarBrand from "components/Navbars/NavbarBrand.js";
import NavbarButton from "components/Navbars/NavbarButton.js";
import NavbarCollapse from "components/Navbars/NavbarCollapse.js";
import NavbarList from "components/Navbars/NavbarList.js";
import NavbarListItem from "components/Navbars/NavbarListItem.js";
import NavbarListLink from "components/Navbars/NavbarListLink.js";

function NavbarExample() {
  return (
    <Navbar color="pink">
      <NavbarContainer>
        <NavbarBrand to="/" type="light">
          Notus PRO React
        </NavbarBrand>
        <NavbarButton breakpoint="md">
          <i className="fas fa-bars"></i>
        </NavbarButton>
        <NavbarCollapse breakpoint="md">
          <NavbarList breakpoint="md" className="md:mr-auto">
            <NavbarListItem>
              <NavbarListLink to="/" type="light">
                Left Link 1
              </NavbarListLink>
              <NavbarListLink href="#pablo" type="light">
                Left Link 2
              </NavbarListLink>
            </NavbarListItem>
          </NavbarList>
          <NavbarList breakpoint="md" className="md:ml-auto">
            <NavbarListLink to="/" type="light">
              Right Link 1
            </NavbarListLink>
            <NavbarListLink href="#pablo" type="light">
              Right Link 2
            </NavbarListLink>
          </NavbarList>
        </NavbarCollapse>
      </NavbarContainer>
    </Navbar>
  );
}

const props = `// no props for this, as this is an view component`;
const description =
  "And here is a full example with all of the above. As you can see, now it makes more sense.";

const preview = `import React from "react";

// @notus-pro/react
import Navbar from "@notus-pro/react/Navbar";
import NavbarContainer from "@notus-pro/react/NavbarContainer";
import NavbarBrand from "@notus-pro/react/NavbarBrand";
import NavbarButton from "@notus-pro/react/NavbarButton";
import NavbarCollapse from "@notus-pro/react/NavbarCollapse";
import NavbarList from "@notus-pro/react/NavbarList";
import NavbarListItem from "@notus-pro/react/NavbarListItem";
import NavbarListLink from "@notus-pro/react/NavbarListLink";

export default function NavbarExample() {
  return (
    <Navbar color="pink">
      <NavbarContainer>
        <NavbarBrand to="/" type="light">
          Notus PRO React
        </NavbarBrand>
        <NavbarButton breakpoint="md">
          <i className="fas fa-bars"></i>
        </NavbarButton>
        <NavbarCollapse breakpoint="md">
          <NavbarList breakpoint="md" className="md:mr-auto">
            <NavbarListItem>
              <NavbarListLink to="/" type="light">
                Left Link 1
              </NavbarListLink>
              <NavbarListLink href="#pablo" type="light">
                Left Link 2
              </NavbarListLink>
            </NavbarListItem>
          </NavbarList>
          <NavbarList breakpoint="md" className="md:ml-auto">
            <NavbarListLink to="/" type="light">
              Right Link 1
            </NavbarListLink>
            <NavbarListLink href="#pablo" type="light">
              Right Link 2
            </NavbarListLink>
          </NavbarList>
        </NavbarCollapse>
      </NavbarContainer>
    </Navbar>
  );
}`;

const docsObjects = {
  component: NavbarExample,
  componentName: "NavbarExample",
  description,
  props,
  preview,
};
export default docsObjects;
