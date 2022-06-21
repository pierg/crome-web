import React from "react";
import Button from "../Elements/Button";

function ComponentsView() {

    return(
        <>
            <div className="px-3 pb-3 relative flex flex-col min-w-0 break-words bg-white rounded shadow-md m-auto">
                <div className="row py-3 text-center">
                    <div className="col-9">
                        <div className="fs-4 font-bold text-blueGray-500">
                            COMPONENTS
                        </div>
                    </div>
                    <div className="col-3">
                        <Button size="sm" color="gray">
                            <i className="fa-solid fa-plus fa-2xl text-lightBlue-700"></i>
                        </Button>
                    </div>
                </div>
                <div className="flex flex-col justify-center p-5 ">
                    Test
                </div>
            </div>
        </>
    );
}

export default ComponentsView;