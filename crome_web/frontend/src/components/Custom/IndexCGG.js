import React from "react";
import Button from "../Elements/Button";

function IndexCGG(props) {
  return (
    <>
      <div className="w-full flex justify-center my-4">
        <Button onClick={() => props.callCGG("auto")}>Automatic</Button>
      </div>
    </>
  );
}

export default IndexCGG;
