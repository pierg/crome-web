import React from "react";
import { Navigate, useLocation } from "react-router-dom";

// components
import CustomSidebar from "components/Crome/CustomSidebar";
import CustomPlayer from "./CustomPlayer";
import CustomContracts from "./CustomContracts";
// texts as props
import customsidebar from "../../_texts/customsidebar";
import custommediaplayerteaminfo from "_texts/customplayerinfo.js";
import { SocketProvider, ConnectorProvider } from "../../contexts/SocketProvider";
import useLocalStorage from "../../hooks/useLocalStorage";
import CreateEnvironment from "./CreateEnvironment";
import Console from "../../components/Crome/Console";
import consoleinfo from "../../_texts/console";
import SocketIoConsoleMessage from "../../components/Custom/Socket/GetConsoleMessage";
import SocketSaveEnvironment from "../../components/Custom/Socket/SaveEnvironment";
import LandingPageCrome from "./LandingPageCrome";
import { useParams } from "react-router";

export default function CustomDashboard() {
  const page = useParams().id;

  const location = useLocation();
  const [id, setId] = useLocalStorage("id");
  const [cookie] = useLocalStorage("cookie");
  const tabId = sessionStorage.tabID
    ? sessionStorage.tabID
    : (sessionStorage.tabID = Math.random());
  let [message, setMessage] = React.useState("");
  let [world, setWorld] = React.useState(null);
  let [savedEnvironment, setSavedEnvironment] = React.useState(null);
  let [listOfWorldNames, setListOfWorldNames] = React.useState(null);
  let [projectId, setProjectId] = React.useState(null);
  let [triggerSave, setTriggerSave] = React.useState(false);

  function updateMessage(msg) {
    if (message === "") {
      setMessage(msg);
    } else {
      setMessage(message + "\n" + msg);
    }
  }

  function updateWorld(wor) {
    setWorld(wor);
  }

  function saveEnvironment(info, env) {
    setSavedEnvironment({ info: info, environment: env });
    setTriggerSave(true);
  }

  function updateListOfWorldNames(names) {
    setListOfWorldNames(names);
  }

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <SocketProvider id={id} cookie={cookie} tabId={tabId}>
      <ConnectorProvider setId={setId} />
      <CustomSidebar
        {...customsidebar}
        currentRoute={"#" + location.pathname}
        id={id}
        setId={setId}
        cookie={cookie}
        page={page}
      />
      <Console {...consoleinfo} customText={message} />
      <SocketIoConsoleMessage modifyMessage={(e) => updateMessage(e)} session={id} />
      <SocketSaveEnvironment
        session={id}
        world={savedEnvironment}
        uploadImage={false}
        trigger={triggerSave}
        returnProjectId={setProjectId}
        setTrigger={setTriggerSave}
      />
      <div className="relative bg-blueGray-100 min-h-screen">
        {(() => {
          switch (page) {
            case "world":
              return (
                <CreateEnvironment
                  world={world}
                  session={id}
                  worldNames={listOfWorldNames}
                  returnedProjectId={projectId}
                  resetProject={() => setProjectId(null)}
                  saveEnvironment={saveEnvironment}
                />
              );
            case "contracts":
              return <CustomContracts />;
            case "crome":
              return (
                <CustomPlayer
                  world={world}
                  {...custommediaplayerteaminfo}
                  setWorld={updateWorld}
                  setListOfWorldNames={updateListOfWorldNames}
                  id={id}
                />
              );
            case "index":
              return <LandingPageCrome />;
            default:
              return <Navigate to="index" />;
          }
        })()}
      </div>
    </SocketProvider>
  );
}
