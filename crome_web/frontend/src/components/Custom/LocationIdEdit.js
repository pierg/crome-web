import React from "react";
import { Button, ModalFooter } from "reactstrap";
import Input from "../Elements/Input";

function LocationIdEdit(props) {
  function handleKeyEvent(event) {
    if (event.key === "Enter" && props.validName(props.element, true)) {
      props.save();
    }
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
          value={props.element}
          onChange={(e) => props.edit(e.target.value)}
          autoFocus={true}
        />
      </div>
      <ModalFooter>
        <Button color={props.info.modal.cancelColor} onClick={props.close}>
          {props.info.modal.cancelText}
        </Button>
        <Button
          color={props.info.modal.saveColor}
          disabled={!props.validName(props.element, true)}
          onClick={() => props.save()}
        >
          {props.info.modal.saveText}
        </Button>
      </ModalFooter>
    </>
  );
}

export default LocationIdEdit;
