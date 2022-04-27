import "../Elements/Button"
import "react"
import Button
import React

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
