import React from "react";
import PropTypes from "prop-types";

// components
import Button from "../../../components/Elements/Button.js";
import Input from "../../../components/Elements/Input.js";
import Select from "../../../components/Elements/Select.js";
import InfoAreaIcon from "../../../components/InfoAreas/Presentation/InfoAreaIcon.js";

export default function CardContactUsAddress({ title, button, components }) {
  const width = {
    1: "w-1/12",
    2: "w-2/12",
    3: "w-3/12",
    4: "w-4/12",
    5: "w-5/12",
    6: "w-6/12",
    7: "w-7/12",
    8: "w-8/12",
    9: "w-9/12",
    10: "w-10/12",
    11: "w-11/12",
    12: "w-full",
  };
  const sm = {
    1: "sm:w-1/12",
    2: "sm:w-2/12",
    3: "sm:w-3/12",
    4: "sm:w-4/12",
    5: "sm:w-5/12",
    6: "sm:w-6/12",
    7: "sm:w-7/12",
    8: "sm:w-8/12",
    9: "sm:w-9/12",
    10: "sm:w-10/12",
    11: "sm:w-11/12",
    12: "sm:w-full",
  };
  const md = {
    1: "md:w-1/12",
    2: "md:w-2/12",
    3: "md:w-3/12",
    4: "md:w-4/12",
    5: "md:w-5/12",
    6: "md:w-6/12",
    7: "md:w-7/12",
    8: "md:w-8/12",
    9: "md:w-9/12",
    10: "md:w-10/12",
    11: "md:w-11/12",
    12: "md:w-full",
  };
  const lg = {
    1: "lg:w-1/12",
    2: "lg:w-2/12",
    3: "lg:w-3/12",
    4: "lg:w-4/12",
    5: "lg:w-5/12",
    6: "lg:w-6/12",
    7: "lg:w-7/12",
    8: "lg:w-8/12",
    9: "lg:w-9/12",
    10: "lg:w-10/12",
    11: "lg:w-11/12",
    12: "lg:w-full",
  };
  const xl = {
    1: "xl:w-1/12",
    2: "xl:w-2/12",
    3: "xl:w-3/12",
    4: "xl:w-4/12",
    5: "xl:w-5/12",
    6: "xl:w-6/12",
    7: "xl:w-7/12",
    8: "xl:w-8/12",
    9: "xl:w-9/12",
    10: "xl:w-10/12",
    11: "xl:w-11/12",
    12: "xl:w-full",
  };
  return (
    <>
      <div className="shadow-lg rounded-lg text-blueGray-500 ml-12 p-6 mt-12 mb-12 relative flex flex-col min-w-0 break-words bg-white w-full">
        <h4 className="text-xl font-bold leading-tight pb-6">{title}</h4>
        <div className="flex-auto">
          <div className="flex flex-wrap -mx-4">
            {components.map((prop, key) => (
              <div
                className={
                  "px-4 relative " +
                  (width[prop.width] || "w-full") +
                  " " +
                  (sm[prop.sm] || "") +
                  " " +
                  (md[prop.md] || "") +
                  " " +
                  (lg[prop.lg] || "") +
                  " " +
                  (xl[prop.xl] || "")
                }
                key={key}
              >
                {(prop.input || prop.select) && (
                  <div className="mb-3 pt-0 relative">
                    {prop.label && (
                      <label className="block uppercase text-blueGray-500 text-xs font-bold mb-2 ml-1">
                        {prop.label}
                      </label>
                    )}
                    {prop.input && <Input {...prop.input} />}
                    {prop.select && <Select {...prop.select} />}
                  </div>
                )}
                {prop.infoarea && <InfoAreaIcon {...prop.infoarea} />}
              </div>
            ))}
          </div>
          <div className="w-full text-right mt-2">
            <Button {...button} />
          </div>
        </div>
      </div>
    </>
  );
}

const widthTypes = {
  // The width the component should have by default
  // if this is not set, then it is defaulted to 100% (w-full)
  width: PropTypes.oneOf([1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12]),
  // The width the input should have on sm breakpoint
  sm: PropTypes.oneOf([1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12]),
  // The width the input should have on md breakpoint
  md: PropTypes.oneOf([1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12]),
  // The width the input should have on lg breakpoint
  lg: PropTypes.oneOf([1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12]),
  // The width the input should have on xl breakpoint
  xl: PropTypes.oneOf([1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12]),
};

const inputsTypes = PropTypes.shape({
  ...widthTypes,
  label: PropTypes.string,
  // It is represetnted by the props you
  // can pass to our Input component element
  // NOTE: if you wish to generate a textarea, you will need to pass
  // // // inside this object >> type: "textarea"
  // // // full example >> input: { type: "textarea" }
  input: PropTypes.object,
});

const selectTypes = PropTypes.shape({
  ...widthTypes,
  label: PropTypes.string,
  // It is represetnted by the props you
  // can pass to our Select component element
  select: PropTypes.object,
});

const infoAreaTypes = PropTypes.shape({
  // props to pass to the InfoAreaIcon component
  infoarea: PropTypes.object,
});

CardContactUsAddress.defaultProps = {
  components: [],
  button: {},
};
CardContactUsAddress.propTypes = {
  title: PropTypes.string,
  // props to pass to the Button component
  button: PropTypes.object,
  components: PropTypes.arrayOf(
    PropTypes.oneOfType([inputsTypes, selectTypes, infoAreaTypes])
  ),
};
