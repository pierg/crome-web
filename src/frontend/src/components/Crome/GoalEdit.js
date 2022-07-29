import React, { useEffect } from "react";
import { Button, ModalFooter } from "reactstrap";
import Input from "../Elements/Input";
import ContractContentEditor from "../Custom/ContractContentEditor";
import contracteditorinfo from "_texts/contracteditorinfo.js";
import makeListOf from "hooks/stringToListConversion.js";
import { Table } from "reactstrap";

function GoalEdit(props) {
  const [formulaRed, setFormulaRed] = React.useState(null);
  const [goal] = React.useState(JSON.parse(JSON.stringify(props.goal)));
  const [formulaText, setFormulaText] = React.useState(props.goal.context["formula"]);

  function changeParameter(
    e,
    contractType = false,
    index = 0,
    propValue = false,
    subKey = -1
  ) {
    const value = propValue || e.target.value;

    const contractTypeIndex = contractType ? goal.contract[contractType][index] : false;
    switch (e.target.name) {
      case "name":
        goal.name = value;
        break;
      case "description":
        goal.description = value;
        break;
      case "context":
        //init formula context
        setFormulaText(value);
        goal.context["formula"] = value;

        //fill tab world_values
        goal.context["world_values"] = [];
        let tabFormula = value.split(" ");
        for (let i = 0; i < tabFormula.length; i++) {
          if (tabFormula[i].charAt(0) === "!") {
            tabFormula[i] = tabFormula[i].substring(1);
          }
          if (props.listOfWorldVariables[3].includes(tabFormula[i])) {
            if (!goal.context["world_values"].includes(tabFormula[i])) {
              goal.context["world_values"].push(tabFormula[i]);
            }
          }
        }
        break;
      case "ltl_value":
        contractTypeIndex.ltl_value = value;
        break;
      case "contentName":
        contractTypeIndex.pattern.name = value;
        contractTypeIndex.pattern.arguments = [];
        break;
      case "type":
        if (value === "Pattern") {
          if (contractTypeIndex.pattern === undefined) {
            contractTypeIndex.pattern = { name: "", arguments: [] };
            delete contractTypeIndex.world_values;
          }
        } else {
          delete contractTypeIndex.pattern;
        }
        break;
      case "subValue":
        contractTypeIndex.pattern.arguments[subKey] = { value: makeListOf(value) };
        break;
      default:
        break;
    }

    props.edit(goal);
  }

  function deleteContractContent(key, contractType) {
    goal.contract[contractType].splice(key, 1);
    props.edit(goal);
  }

  function addContractContent(contractType, key = -1) {
    goal.contract[contractType].push({ ltl_value: "" });
    props.edit(goal);
  }

  function setLTLWorldValues(key, contractType, values) {
    goal.contract[contractType][key].world_values = values;
    props.edit(goal);
  }

  useEffect(() => {
    let tabFormula = formulaText.split(" ");
    let context = "";
    let formulaRed = "";

    for (let i = 0; i < tabFormula.length; i++) {
      context = tabFormula[i];
      if (tabFormula[i].charAt(0) === "!") {
        context = tabFormula[i].substring(1);
      }
      if (props.listOfWorldVariables[3].includes(context)) {
        context = "<span class='text-red-500'>" + context + "</span>";
      }
      if (tabFormula[i].charAt(0) === "!") {
        context = "!" + context;
      }
      formulaRed += context + " ";
    }

    setFormulaRed(formulaRed);
  }, [formulaText, props.listOfWorldVariables]);

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
      <div className="modal-body justify-content-center">
        <Input
          type="text"
          placeholder="Title of the Goal"
          name="name"
          value={goal.name}
          onChange={changeParameter}
        />
        <Input
          type="textarea"
          placeholder="Description of the Goal"
          name="description"
          value={goal.description}
          onChange={changeParameter}
        />
        <div>
          <div className="m-auto w-50">
            <Table responsive>
              <thead>
                <tr className="text-center">
                  <th colSpan={2}>Atomic propositions</th>
                </tr>
              </thead>
              <tbody>
                {props.listOfWorldVariables.map(
                  (prop, key) =>
                    key !== props.listOfWorldVariables.length && (
                      <tr key={key}>
                        <td className="font-semibold text-center">
                          {props.info.lists.title} {props.info.lists.elements[key]} :
                        </td>
                        <td className="text-left">
                          {prop.map((subProp, subKey) => (
                            <span key={subKey}>
                              {" " + subProp}
                              {subKey !== prop.length - 1 ? ", " : ""}
                            </span>
                          ))}
                        </td>
                      </tr>
                    )
                )}
              </tbody>
            </Table>
          </div>
        </div>

        <div className="mt-4">
          <h4 className="font-bold title-up mb-2 inline">
            {props.info.context.title} :{" "}
          </h4>
          <input
            type="text"
            placeholder="write boolean"
            name="context"
            className="ml-4 border-blueGray-300 text-sm placeholder-blueGray-200 bg-white rounded-md border border-solid"
            value={props.goal.context["formula"]}
            onChange={changeParameter}
          />
          <div
            className={"w-64 ml-12 center inline"}
            dangerouslySetInnerHTML={{ __html: "Formula : " + formulaRed }}
          />
        </div>

        {props.info.contract.map((prop, key) => (
          <div key={key}>
            <h4 className="title title-up">{prop.title}</h4>
            <ContractContentEditor
              items={goal.contract[prop.title]}
              patterns={props.patterns}
              color={prop.color}
              changeParameter={changeParameter}
              deleteContent={deleteContractContent}
              addContent={addContractContent}
              contractType={prop.title}
              listOfWorldVariables={props.listOfWorldVariables}
              setLTLWorldValues={setLTLWorldValues}
              keyType={key}
              {...contracteditorinfo}
            />
          </div>
        ))}
      </div>
      <ModalFooter>
        <div className="flex flex-col w-full">
          {goal.contract.guarantees.length === 0 && (
            <div className="flex justify-end mb-2">
              <span className={"text-red-500 "}>
                {props.info.modal.warningGuarantees}
              </span>
            </div>
          )}
          <div className="flex w-full justify-between">
            <Button color={props.info.modal.cancelColor} onClick={props.close}>
              {props.info.modal.cancelText}
            </Button>
            <Button
              color={props.info.modal.saveColor}
              disabled={goal.contract.guarantees.length === 0}
              onClick={() => props.save(goal)}
            >
              {props.info.modal.saveText}
            </Button>
          </div>
        </div>
      </ModalFooter>
    </>
  );
}

export default GoalEdit;
