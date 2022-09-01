import React from "react";
import { Button, ModalFooter } from "reactstrap";
import Input from "../Elements/Input";

function SavingEdit(props) {
  const [element] = React.useState(JSON.parse(JSON.stringify(props.element)));

  function changeParameter(e) {
    switch (e.target.name) {
      case "name":
        element.name = e.target.value;
        break;
      case "description":
        element.description = e.target.value;
        break;
      default:
        break;
    }
    props.edit(element);
  }

  function handleKeyEvent(event) {
    if (
      event.key === "Enter" &&
      element !== "" &&
      !arrayIncludesWithoutCase(props.listOfNames, element.name)
    ) {
      props.save(element);
    }
  }

  function arrayIncludesWithoutCase(array, element) {
    if (element.toLowerCase() === "simple gridworld") return true;
    if (array != null) {
      for (let i = 0; i < array.length; i++) {
        if (array[i].toLowerCase() === element.toLowerCase()) return true;
      }
    }
    return false;
  }

  return (
    <>
      <div className="modal-header justify-content-center">
        <button
          aria-hidden={true}
          className="close"
          onClick={props.close}
          type="button"
        >
          <i className={props.info.modal.close} />
        </button>
        <h4 className="title title-up">{props.info.title}</h4>
      </div>
      <div className="modal-body justify-content-center" onKeyPress={handleKeyEvent}>
        <Input
          type="text"
          placeholder="Name *"
          autoComplete="off"
          name="name"
          value={element.name}
          onChange={changeParameter}
        />
        <span
          className={
            "text-red-500 " +
            (arrayIncludesWithoutCase(props.listOfNames, element.name) ? "ml-2" : "")
          }
        >
          {arrayIncludesWithoutCase(props.listOfNames, element.name)
            ? "This project name already exists"
            : ""}
        </span>
        <Input
          type="textarea"
          placeholder="Description"
          autoComplete="off"
          name="description"
          value={element.description}
          onChange={changeParameter}
        />
      </div>
      <ModalFooter>
        <Button color={props.info.modal.cancelColor} onClick={props.close}>
          {props.info.modal.cancelText}
        </Button>
        <Button
          color={props.info.modal.saveColor}
          disabled={
            element.name === "" ||
            arrayIncludesWithoutCase(props.listOfNames, element.name)
          }
          onClick={() => props.save(element)}
        >
          {props.info.modal.saveText}
        </Button>
      </ModalFooter>
    </>
  );
}

export default SavingEdit;
