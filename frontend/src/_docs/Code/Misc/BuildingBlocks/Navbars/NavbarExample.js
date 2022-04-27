import "components/Navbars/Navbar.js"
import "components/Navbars/NavbarBrand.js"
import "components/Navbars/NavbarButton.js"
import "components/Navbars/NavbarCollapse.js"
import "components/Navbars/NavbarContainer.js"
import "components/Navbars/NavbarList.js"
import "components/Navbars/NavbarListItem.js"
import "components/Navbars/NavbarListLink.js"
import "react"
import Navbar
import NavbarBrand
import NavbarButton
import NavbarCollapse
import NavbarContainer
import NavbarList
import NavbarListItem
import NavbarListLink
import React

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
import "@notus-pro/react/Navbar"
import "@notus-pro/react/NavbarBrand"
import "@notus-pro/react/NavbarButton"
import "@notus-pro/react/NavbarCollapse"
import "@notus-pro/react/NavbarContainer"
import "@notus-pro/react/NavbarList"
import "@notus-pro/react/NavbarListItem"
import "@notus-pro/react/NavbarListLink"
import Navbar
import NavbarBrand
import NavbarButton
import NavbarCollapse
import NavbarContainer
import NavbarList
import NavbarListItem
import NavbarListLink

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
