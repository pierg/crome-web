import React, { useEffect, useState } from "react";

function FetchTime(props) {
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    fetch("/time")
      .then((res) => res.json())
      .then((data) => {
        setCurrentTime(data.time);
      });
  }, [setCurrentTime]);

  return (
    <>
      <h1>Server Time:</h1>
      <p>{currentTime}</p>
    </>
  );
}

export default FetchTime;
