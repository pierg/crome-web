import "./ContractEditArguments.js"
import "./CustomSelect"
import "prop-types"
import "react"
import ContractEditArguments
import CustomSelect
import PropTypes
import React
import {

  Button,
  Card,
  CardBody,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Table,
  UncontrolledDropdown,
} from "reactstrap";
import "./LTLTextArea"
import "hooks/searchPatterns.js"
import LTLTextArea
import searchPatterns

function NamesOf(obj) {
  let list = [];
  for (let i = 0; i < obj.length; i++) {
    list.push(obj[i].name);
  }
  return list;
}

export default function ContractContentEditor({
  items,
  patterns,
  color,
  changeParameter,
  deleteContent,
  addContent,
  contractType,
  listOfWorldVariables,
  setLTLWorldValues,
  infos,
}) {
  const [open, setOpen] = React.useState();

  let callBackAction = (key) => {
    setOpen(key);
  };
  return (
    <>
      <div>
        <Card className="card-plain">
          <CardBody className="overflow-x-initial">
            <Table responsive>
              <thead>
                <tr>
                  {infos.titles.map((prop, key) => (
                    <th key={key}>{prop}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {items.map((prop, key) => (
                  <tr key={key}>
                    <td>{key + 1}</td>
                    <td className="w-32">
                      <UncontrolledDropdown>
                        <DropdownToggle
                          caret
                          className="btn-round btn-block"
                          color={infos.dropdownColor}
                        >
                          {prop.pattern === undefined ? infos.types[0] : infos.types[1]}
                        </DropdownToggle>
                        <DropdownMenu>
                          {infos.types.map((infoType, infoTypeKey) => (
                            <DropdownItem
                              key={infoTypeKey}
                              name="type"
                              onClick={(e) =>
                                changeParameter(e, contractType, key, infoType)
                              }
                            >
                              {infoType}
                            </DropdownItem>
                          ))}
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </td>
                    <td>
                      {prop.pattern === undefined && (
                        <LTLTextArea
                          value={prop.ltl_value}
                          name="ltl_value"
                          placeholder={infos.placeholders.ltl}
                          onChange={(e) => changeParameter(e, contractType, key)}
                          listOfWorldVariables={listOfWorldVariables}
                          setLTLWorldValues={(values) =>
                            setLTLWorldValues(key, contractType, values)
                          }
                        />
                      )}
                      {prop.pattern !== undefined && (
                        <CustomSelect
                          items={NamesOf(patterns)}
                          placeholder={infos.placeholders.pattern}
                          defaultValue={prop.pattern.name}
                          name="contentName"
                          changeSelector={(e, value) =>
                            changeParameter(e, contractType, key, value)
                          }
                        />
                      )}
                    </td>
                    <td className="grid w-full">
                      {prop.pattern !== undefined && (
                        <ContractEditArguments
                          title={infos.details}
                          content={searchPatterns(prop.pattern, patterns)}
                          color={color}
                          setOpen={() => callBackAction(key)}
                          changeParameter={(e, subKey) =>
                            changeParameter(e, contractType, key, false, subKey)
                          }
                          number={key}
                          infos={infos}
                          defaultOpened={key === open}
                        />
                      )}
                    </td>
                    <td>
                      <Button
                        className="btn-icon"
                        color={infos.deleteButton.color}
                        size="sm"
                        type="button"
                        onClick={() => deleteContent(key, contractType)}
                      >
                        <i className={infos.deleteButton.icon} />
                      </Button>
                    </td>
                  </tr>
                ))}
                <tr>
                  <td colSpan="5" className="text-center">
                    <Button
                      className="btn-icon"
                      color={infos.addRowButton.color}
                      size="sm"
                      type="button"
                      onClick={() => addContent(contractType)}
                    >
                      <i className={infos.addRowButton.icon} />
                    </Button>
                  </td>
                </tr>
              </tbody>
            </Table>
          </CardBody>
        </Card>
      </div>
    </>
  );
}

ContractContentEditor.defaultProps = {
  items: [],
  defaultOpened: -1,
  multiple: false,
};

ContractContentEditor.propTypes = {
  // NOTE: if you pass an array for the defaultOpened prop
  // // // then the user will be able to open multiple collapses
  // // // For example, if you want to have only the first
  // // // collapse opened, but the user can open multiple
  // // // then you can pass defaultOpened={[0]}
  // // // otherwise, you can pass defaultOpened={0}
  defaultOpened: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.number),
  ]),
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string),
      ]),
    })
  ),
  color: PropTypes.oneOf([
    "blueGray",
    "red",
    "orange",
    "amber",
    "emerald",
    "teal",
    "lightBlue",
    "indigo",
    "purple",
    "pink",
  ]),
};
