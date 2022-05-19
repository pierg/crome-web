import React from 'react';
import Button from "../Elements/Button";

function LibraryView(props) {

    const [selectedRow, setSelectedRow] = React.useState(null)

    function selectLibrary(id, selected) {
        if (selected)
            setSelectedRow(id)
        else
            setSelectedRow(null)
    }

    const tmp_libraries = []
    let libraryClass = ""
    for (let i = 0; i < 1000; i += 1) {
        let select = true
        libraryClass = "border-b-1 text-blueGray-700 text-lg py-1 cursor-pointer"
        if (i===0) libraryClass += " border-t-1"
        if (i===selectedRow) {
            libraryClass += " bg-blueGray-200 hover:bg-blueGray-300"
            select = false
            console.log(select)
        } else
            libraryClass += "  hover:bg-blueGray-100"

        tmp_libraries.push(<li key={i} className={libraryClass} onClick={() => selectLibrary(i, {select})}>library_{i}</li>)
    }

    return (
        <div className=" px-3 relative flex flex-col min-w-0 break-words bg-white rounded shadow-lg">
            <div className="flex flex-col justify-center p-4 pr-0">
                <span className="font-bold text-xl uppercase text-blueGray-700">Libraries</span>

                <div className="overflow-auto max-h-200-px pt-3 px-5">
                    <ul>
                        {tmp_libraries}
                    </ul>
                </div>
                <div className="flex flex-col m-auto py-2 uppercase ">
                    <Button>Map to library</Button>
                </div>
            </div>
        </div>
    );
}

export default LibraryView;