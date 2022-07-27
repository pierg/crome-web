const textProps = {
    info: {
        title: "Edit a Goal",
        goalComponent: {
            editIconName: "fas fa-pen",
            downloadIconName: "fas fa-arrow-down",
            deleteIconName: "fas fa-trash-alt" ,
            iconColor: "bg-lightBlue-600",
        },
        contract: [
            {
                title: "assumptions",
                color: "lightBlue"
            },
            {
                title: "guarantees",
                color: "lightBlue"
            }
        ],
        buttons: {
            uploadGoal:{
                text: "Upload goals",
                color: "gray",
                icon: "fas fa-arrow-up"
            },
            downloadGoals:{
                text: "Download goals",
                color: "gray",
                icon: "fas fa-arrow-down"
            }
        },
        modal: {
            close: "now-ui-icons ui-1_simple-remove",
            cancelText: "Cancel",
            cancelColor: "danger",
            saveText: "Save",
            saveColor: "info"
        }
    }
};
export default textProps;