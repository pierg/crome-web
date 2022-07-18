const textProps = {
    info: {
        title: "Edit a Goal",
        context: {
            title: "Context"
        },
        contract: [
            {
                title: "assumptions",
                color: "lightBlue"
            },
            {
                title: "guarantees",
                color: "lightBlue"
            },
        ],
        modal: {
            close: "now-ui-icons ui-1_simple-remove",
            cancelText: "Cancel",
            cancelColor: "danger",
            warningGuarantees: "A Goal must have at least 1 Guarantee",
            saveText: "Save",
            saveColor: "info"
        },
        lists: {
            title: "List of",
            elements: ["Locations", "Actions", "Sensors", "Contexts"]
        }
    }
};
export default textProps;