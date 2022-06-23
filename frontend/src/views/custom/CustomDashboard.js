import React from "react";
import {useLocation} from "react-router-dom";

// components
import CustomSidebar from "components/Crome/CustomSidebar";
import CustomPlayer from "./CustomPlayer";
import CustomSynthesis from "./CustomSynthesis";
import CustomContracts from "./CustomContracts";
// texts as props
import customsidebar from "../../_texts/custom/customsidebar";
import custommediaplayerteaminfo from "_texts/custom/customplayerinfo.js";
import {SocketProvider, ConnectorProvider} from "../../contexts/SocketProvider";
import useLocalStorage from "../../hooks/useLocalStorage";
import CreateEnvironment from "./CreateEnvironment";
import Console from "../../components/Crome/Console";
import consoleinfo from "../../_texts/custom/console";
import SocketIoConsoleMessage from "../../components/Custom/Examples/GetConsoleMessage";
import SocketSaveEnvironment from "../../components/Custom/Examples/SaveEnvironment";
import CustomComponent from "./CustomComponent";
import LandingPageCrome from "./LandingPageCrome";
import LandingPageContracts from "./LandingPageContracts";



export default function CustomDashboard(props) {
    const location = useLocation();
    const [id, setId] = useLocalStorage('id');
    const [cookie] = useLocalStorage('cookie')
    const tabId = sessionStorage.tabID ?
            sessionStorage.tabID :
            sessionStorage.tabID = Math.random();
    let [message, setMessage] = React.useState("");
    let [world, setWorld] = React.useState(null);
    let [savedEnvironment, setSavedEnvironment] = React.useState(null);
    let [listOfWorldNames, setListOfWorldNames] = React.useState(null);
    let [projectId, setProjectId] = React.useState(null);
    let [triggerSave, setTriggerSave] = React.useState(false);

    function updateMessage(msg) {
        if (message === "") {
            setMessage(msg);
        }
        else {
            setMessage(message + "\n" + msg);
        }
    }
    function updateWorld(wor) {
        setWorld(wor);
    }
    function saveEnvironment(info, env) {
        setSavedEnvironment({"info":info, "environment":env})
        setTriggerSave(true)
    }
    function updateListOfWorldNames(names) {
        setListOfWorldNames(names)
    }

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return (
        <SocketProvider id={id} cookie={cookie} tabId={tabId}>
            <ConnectorProvider setId={setId}/>
            <CustomSidebar
                {...customsidebar}
                currentRoute={"#" + location.pathname}
                id={id}
                setId={setId}
                cookie={cookie}
                page={props.page}
            />
            <Console {...consoleinfo} customText={message}/>
            <SocketIoConsoleMessage modifyMessage={(e) => updateMessage(e)} session={id}/>
            <SocketSaveEnvironment session={id} world={savedEnvironment} uploadImage={false} trigger={triggerSave} returnProjectId={setProjectId} setTrigger={setTriggerSave}/>
            <div className="relative xxl:ml-64 bg-blueGray-100 min-h-screen">
                {(() => {
                    switch (props.page) {
                        case 'world':
                            return (
                                <CreateEnvironment world={world} session={id} worldNames={listOfWorldNames} returnedProjectId={projectId} resetProject={() => setProjectId(null)} saveEnvironment={saveEnvironment}/>
                            )
                        case 'synthesis':
                            return (
                                <CustomSynthesis updateMessage={updateMessage}/>
                            )
                        case 'contracts':
                            return(
                                <CustomContracts/>
                            )
                        case 'indexContracts':
                            return(
                                <LandingPageContracts/>
                            )
                        case 'component':
                            return (
                                <CustomComponent/>
                            )
                        case 'crome':
                            return (
                                <CustomPlayer world={world} {...custommediaplayerteaminfo} setWorld={updateWorld} setListOfWorldNames={updateListOfWorldNames} id={id}/>
                            )
                        default:
                            return (
                                <LandingPageCrome/>
                            )
                    }
                })()}
            </div>
        </SocketProvider>
    );
}
