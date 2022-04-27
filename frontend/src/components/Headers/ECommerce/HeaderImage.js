import "prop-types"
import "react"
import PropTypes
import React

// components
import "../../../components/Skews/Skew.js"
import Skew

export default function HeaderImage({ image, skew }) {
  return (
    <>
      <section className="relative block h-500-px">
        <div
          className="absolute top-0 w-full h-full bg-center bg-cover"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80')",
          }}
        >
          <span className="w-full h-full absolute opacity-50 bg-black"></span>
        </div>
        <div className="w-full absolute top-auto bottom-0">
          <Skew {...skew} />
        </div>
      </section>
    </>
  );
}

HeaderImage.defaultProps = {
  skew: {},
};

HeaderImage.propTypes = {
  image: PropTypes.string,
  // object of props that can be passed to the Skew component
  skew: PropTypes.object,
};
