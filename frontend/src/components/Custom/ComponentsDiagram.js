import React from "react";
import componentInfo from "../../_texts/custom/componentInfo";
import Diagram, { useSchema, createSchema } from 'beautiful-react-diagrams';

function ComponentsDiagram(props) {

    const initialSchema = createSchema({nodes :props.nodes, links: props.links})

    const UncontrolledDiagram = () => {
      // create diagrams schema
      const [schema, { onChange }] = useSchema(initialSchema);

      return (
        <div style={{ height: '22.5rem' }}>
          <Diagram schema={schema} onChange={onChange} />
        </div>
      );
    };

    console.log(initialSchema)

    return(<>
            <div className="w-50 lg:w-9/12 xl:w-10/12 flex-col mt-5 mx-auto pb-5">
                <div className="px-3 pb-3 relative flex flex-col min-w-0 break-words bg-white rounded shadow-md m-auto">
                    <div className="fs-4 m-3 text-center">
                        {componentInfo.info.texts.diagram}
                    </div>
                    <div className="flex flex-col justify-center p-5 ">
                        <UncontrolledDiagram/>
                    </div>
                </div>
            </div>
    </>);
}

export default ComponentsDiagram;