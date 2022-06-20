import React from "react";
import componentInfo from "../../_texts/custom/componentInfo";


export default class CustomComponent extends React.Component {

    render() {
        return (<>
            <div className="relative pt-8 pb-12 bg-red-500 ">
                    <div className="px-4 md:px-6 mx-auto w-full">
                        <div>
                            <div className="flex flex-wrap justify-center">
                                <h1 className="display-3 title-up text-white font-semibold text-center">
                                    {componentInfo.info.texts.title}
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </>)
    }
}