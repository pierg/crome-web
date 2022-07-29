const textProps = {
  mainTitle: "Build Your Environment",
  gridSize: "Size of the Grid",
  errorMsg: {
    gridTooSmall: "The retracted size is too small, clear before decreasing the size",
    wallInsideBlock: "You can't create a wall within a block",
    wallLine: "Select a line or a column where you want to put a wall",
    splitLocations: "You can't have a location that would be split",
  },
  help: {
    title: "How to do?",
    messages: [
      {
        title: "How to create a Location?",
        content:
          "Click on a first cell, then click on the opposite corner of the location you want. You will need to enter the id of the location you just created to see it appear.",
      },
      {
        title: "How to delete a Location?",
        content:
          "In the list of locations, click on the cross corresponding to the location you want to delete.",
      },
      {
        title: "How to put a Wall?",
        content:
          "Go to wall mode, click on a location and next, click on a neighbour location. A wall will be built.",
      },
      {
        title: "How to delete a Wall?",
        content:
          "Go to wall mode, click on 2 locations between which there is a wall. The wall will disappear.",
      },
    ],
  },
  componentsList: [
    {
      content: [],
      title: "Locations",
      displayAddWallButton: false,
    },
    {
      content: [],
      title: "Actions",
      displayAddButton: true,
    },
    {
      content: [],
      title: "Sensors",
      displayAddButton: true,
    },
    {
      content: [],
      title: "Context",
      displayAddButton: true,
    },
  ],
  buttons: {
    clear: "Clear",
    save: "Save",
    update: "Update",
    back: {
      text: "Back to Crome",
      color: "gray",
      icon: "fas fa-long-arrow-alt-left",
    },
    buildYourEnvironment: {
      text: "Build your environment",
      size: "worldModeling",
      color: "gray",
      icon: "fas fa-plus-square",
    },
    uploadWorld: {
      text: "Upload a world",
      size: "worldModeling",
      color: "gray",
      icon: "fas fa-arrow-up",
    },
  },
  modal: {
    world: {
      title: "Edit Element",
      modal: {
        mutex: "Exclusive with :",
        close: "now-ui-icons ui-1_simple-remove",
        cancelText: "Cancel",
        cancelColor: "danger",
        saveText: "Save",
        saveColor: "info",
      },
    },
    saving: {
      title: "Save Environment",
      modal: {
        close: "now-ui-icons ui-1_simple-remove",
        cancelText: "Cancel",
        cancelColor: "danger",
        saveText: "Save",
        saveColor: "info",
      },
    },
    inputId: {
      title: "Enter Location ID",
      modal: {
        close: "now-ui-icons ui-1_simple-remove",
        cancelText: "Cancel",
        cancelColor: "danger",
        saveText: "Save",
        saveColor: "info",
      },
    },
  },
};
export default textProps;
