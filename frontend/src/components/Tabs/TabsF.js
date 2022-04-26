import React from "react";

export default function TabsF({
       firstMenu,
       secondMenu,
       thirdMenu,
       fourthMenu,
       fifthMenu,
       firstPage,
       secondPage,
       thirdPage,
       fourthPage,
       fifthPage,
       }) {
  const [openTab, setOpenTab] = React.useState(1);
  return (
      <>
        <div className="flex flex-wrap pt-8">
          <div className="w-full">
            <ul
                className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
                role="tablist"
            >
              <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <a
                    className={
                      "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                      (openTab === 1
                          ? "text-white bg-lightBlue-600"
                          : "text-lightBlue-600 bg-white")
                    }
                    onClick={e => {
                      e.preventDefault();
                      setOpenTab(1);
                    }}
                    data-toggle="tab"
                    href={"#link1"}
                    role="tablist"
                >
                  {firstMenu}
                </a>
              </li>
              <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <i className="fas fa-chevron-circle-right text-lightBlue-600"/>
              </li>
              <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <a
                    className={
                      "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                      (openTab === 2
                          ? "text-white bg-lightBlue-600"
                          : "text-lightBlue-600 bg-white")
                    }
                    onClick={e => {
                      e.preventDefault();
                      setOpenTab(2);
                    }}
                    data-toggle="tab"
                    href={"#link2"}
                    role="tablist"
                >
                  {secondMenu}
                </a>
              </li>
              <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <i className="fas fa-chevron-circle-right text-lightBlue-600"/>
              </li>
              <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <a
                    className={
                      "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                      (openTab === 3
                          ? "text-white bg-lightBlue-600"
                          : "text-lightBlue-600 bg-white")
                    }
                    onClick={e => {
                      e.preventDefault();
                      setOpenTab(3);
                    }}
                    data-toggle="tab"
                    href={"#link3"}
                    role="tablist"
                >
                  {thirdMenu}
                </a>
              </li>
              <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <i className="fas fa-chevron-circle-right text-lightBlue-600"/>
              </li>
              <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <a
                    className={
                      "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                      (openTab === 4
                          ? "text-white bg-lightBlue-600"
                          : "text-lightBlue-600 bg-white")
                    }
                    onClick={e => {
                      e.preventDefault();
                      setOpenTab(4);
                    }}
                    data-toggle="tab"
                    href={"#link4"}
                    role="tablist"
                >
                  {fourthMenu}
                </a>
              </li>
              <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <i className="fas fa-chevron-circle-right text-lightBlue-600"/>
              </li>
              <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <a
                    className={
                      "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                      (openTab === 5
                          ? "text-white bg-lightBlue-600"
                          : "text-lightBlue-600 bg-white")
                    }
                    onClick={e => {
                      e.preventDefault();
                      setOpenTab(5);
                    }}
                    data-toggle="tab"
                    href={"#link5"}
                    role="tablist"
                >
                  {fifthMenu}
                </a>
              </li>
            </ul>
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
              <div className="px-4 py-5 flex-auto">
                <div className="tab-content tab-space">
                  <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                    {firstPage}
                  </div>
                  <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                    {secondPage}
                  </div>
                  <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                    {thirdPage}
                  </div>
                  <div className={openTab === 4 ? "block" : "hidden"} id="link4">
                    {fourthPage}
                  </div>
                  <div className={openTab === 5 ? "block" : "hidden"} id="link5">
                    {fifthPage}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
  );
};

