import React from "react";
import customnavbutton from "_texts/custom/customnavbutton.js";

export default function CustomNavButton({
  toggleNew,
  open,
  itemsLength,
  type,
  noProject,
  href
}) {

    let disabled
    let actionToggle

    if (type === "back") {
        disabled = (open === 0)
        actionToggle = (open - 1 < 0 ? itemsLength - 1 : open - 1)
    }
    else {
        disabled = (open === itemsLength -1 || noProject)
        actionToggle = (open + 1 > itemsLength - 1 ? 0 : open + 1)
    }

    return (
        <a
            href={href}
            className={(disabled ? "hover:no-underline cursor-default " : "") + customnavbutton.textColor + " text-center opacity-85 focus:outline-none hover:opacity-100 transition-opacity duration-150 ease-linear w-12 text-xl z-50"}
            onClick={(e) => toggleNew(e, actionToggle, disabled)}
        >
            <div>
                {(type === "back") && (
                    <i className={customnavbutton.iconColor + " " + customnavbutton.iconNameBack + " mr-2"}/>
                )}
                <span className={(disabled ? "opacity-40 " : "hover:underline ") + "text-2xl"}>
                    {type === "back" ? customnavbutton.backText : customnavbutton.continueText}
                </span>
                {(type === "continue") && (
                    <i className={customnavbutton.iconColor + " " + customnavbutton.iconNameContinue + " ml-2"}/>
                )}
            </div>
        </a>
    );
}