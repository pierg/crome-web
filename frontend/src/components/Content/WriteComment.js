import "prop-types"
import "react"
import PropTypes
import React

// components
import "../../components/Elements/Input.js"
import Input

export default function WriteComment({ image, input }) {
  return (
    <>
      <div className="items-center flex items-start">
        <img alt="..." src={image} className="mr-4 rounded-full w-10 h-10" />
        <div className="flex-1 mt-6">
          <form>
            <Input {...input} />
          </form>
        </div>
      </div>
    </>
  );
}

WriteComment.defaultProps = {
  input: {},
};
WriteComment.propTypes = {
  image: PropTypes.string,
  // It is represetnted by the props you
  // can pass to our Input component element
  // NOTE: if you wish to generate a textarea, you will need to pass
  // // // inside this object >> crometypes: "textarea"
  // // // full example >> input: { crometypes: "textarea" }
  input: PropTypes.object,
};
