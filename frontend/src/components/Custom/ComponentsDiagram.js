import React from "react";
import componentInfo from "../../_texts/custom/componentInfo";
import Diagram, { useSchema, createSchema } from 'beautiful-react-diagrams';
import "beautiful-react-diagrams/styles.css";

function ComponentsDiagram(props) {

    const initialSchema = createSchema({nodes: props.nodes, links : props.link});



    const UncontrolledDiagram = () => {
      // create diagrams schema
      const [schema, { onChange }] = useSchema(initialSchema);

      return (
        <div className="h-400-px">
          <Diagram schema={schema} onChange={onChange} className="border-none" />
        </div>
      );
    };


    return(<>
        <div className="flex-col mx-auto pb-5">
            <div className="px-3 pb-3 relative flex flex-col min-w-0 break-words bg-white rounded shadow-md m-auto">
                <div className="fs-4 m-3 text-center">
                    {componentInfo.info.texts.diagram}
                </div>
                <div className="flex flex-col justify-center p-3">
                    <div>
                      <UncontrolledDiagram/>
                    </div>
                </div>
            </div>
        </div>
    </>);
}

export default ComponentsDiagram;