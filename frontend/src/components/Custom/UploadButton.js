import React, {useEffect, useState} from 'react'
import ElementsButton from "../../components/Elements/Button";
import {useFilePicker} from "use-file-picker";

function UploadButton(props) {
    const [openFileSelector, { filesContent}] = useFilePicker({
        readAs: 'DataURL',
        accept: '.json',
        multiple: false,
        limitFilesConfig: { max: 1 },
    });
    const [saved,setSaved] = useState(false)
    const [previousContent, setPreviousContent] = useState(null)

    useEffect(() => {
         if (filesContent[0] && (!saved || previousContent !== filesContent[0])) {
             props.upload(atob(filesContent[0].content.split(",")[1]))
             setSaved(true)
             setPreviousContent(filesContent[0])
        }
    }, [props, saved, filesContent, previousContent])

    if(props.contracts){
        return (<></>);
    } else{
    return (
        <div>
      <ElementsButton size={props.size} color={props.color} outline={true} onClick={() => openFileSelector()}>
           <i className={props.icon+"mr-2"}/>
          {props.text}


      </ElementsButton>

    </div>);
}
}

export default UploadButton;