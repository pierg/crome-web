import React, { createRef, useEffect } from "react";
import { useScreenshot } from "use-react-screenshot";
import { useSocket } from "../../contexts/SocketProvider";

export default function CustomDownload(props) {
  const myCanvas = createRef();
  const divCanvas = createRef();

  const socket = useSocket();

  // eslint-disable-next-line no-unused-vars
  const [screenImage, takeScreenShot] = useScreenshot({
    type: "image/jpeg",
    quality: 1.0,
  });

  useEffect(() => {
    if (props.currentRef === null && myCanvas.current !== null) {
      props.setRef(myCanvas);
    }
  }, [myCanvas]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (props.project !== null) {
      downloadScreenshot();
    }
  }, [props.project]); // eslint-disable-line react-hooks/exhaustive-deps

  const download = (screenImage = {}) => {
    socket.emit("save-image", {
      image: screenImage.split(",")[1],
      project: props.project,
    });
    props.resetProject();
    props.goToIndex();
  };

  const downloadScreenshot = () => takeScreenShot(divCanvas.current).then(download);

  return (
    <>
      <div>
        <div ref={divCanvas}>
          <canvas className="shifted-canvas-margin" ref={myCanvas} id="canvas" />
        </div>
      </div>
    </>
  );
}
