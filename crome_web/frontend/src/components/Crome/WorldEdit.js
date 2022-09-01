import React from "react";
import { Button, ModalFooter } from "reactstrap";
import Input from "../Elements/Input";
import Checkbox from "../Elements/Checkbox";

function WorldEdit(props) {
  let element = props.element;
  let mutexList = JSON.parse(JSON.stringify(props.mutexList));

  function changeParameter(e) {
    switch (e.target.name) {
      case "name":
        element = e.target.value;
        break;
      default:
        break;
    }
    props.edit(element);
  }

  function changeMutex(key) {
    mutexList.includes(props.list[key])
      ? mutexList.splice(mutexList.indexOf(props.list[key]), 1)
      : mutexList.push(props.list[key]);
    mutexList.sort();
    props.editMutex(mutexList);
  }

  function handleKeyEvent(event) {
    if (event.key === "Enter" && props.validName(element)) {
      props.save(element, mutexList);
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
          value={element || ""}
          onChange={changeParameter}
          autoFocus={true}
        />
        {(props.list.length > 1 || props.number > 0) && (
          <h4 className="title title-up mb-3">{props.info.modal.mutex}</h4>
        )}
        <div className="flex flex-col mt-1">
          {props.list.map((prop, key) => {
            return (
              key !== props.number && (
                <Checkbox
                  key={key}
                  label={prop}
                  name="mutex"
                  checked={mutexList.includes(props.list[key])}
                  onChange={() => changeMutex(key)}
                />
              )
            );
          })}
        </div>
      </div>
      <ModalFooter>
        <Button color={props.info.modal.cancelColor} onClick={props.close}>
          {props.info.modal.cancelText}
        </Button>
        <Button
          color={props.info.modal.saveColor}
          disabled={!props.validName(element)}
          onClick={() => props.save(element, mutexList)}
        >
          {props.info.modal.saveText}
        </Button>
      </ModalFooter>
    </>
  );
}

export default WorldEdit;
