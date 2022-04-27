import "prop-types"
import "react"
import PropTypes
import React

// components
import "../../../components/Content/Contact.js"
import "../../../components/Elements/Input.js"
import Contact
import Input

export default function CardChatPeople({ input, contacts }) {
  return (
    <>
      <div className="flex justify-center bg-white border-0 shadow-lg rounded-lg relative flex flex-col min-w-0 break-words w-full mb-6">
        {input && (
          <div className="bg-blueGray-200 rounded-t-lg">
            <div className="my-4 mb-3 px-3 relative">
              <Input {...input} border={"borderless"} leftIcon={"fas fa-search"} />
            </div>
          </div>
        )}

        <div className="mt-4 flex pl-0 mb-3 flex-col">
          {contacts.map((prop, key) => (
            <Contact key={key} {...prop} />
          ))}
        </div>
      </div>
    </>
  );
}

CardChatPeople.defaultProps = {
  contacts: [],
};

CardChatPeople.propTypes = {
  // props to pass to the Input component
  input: PropTypes.object,
  // array of props to pass to the Contact component
  contacts: PropTypes.arrayOf(PropTypes.object),
};
