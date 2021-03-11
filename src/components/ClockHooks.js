import React, { useState, useEffect } from "react";

const Clock = ({ hour }) => {
  return <h3>{hour}</h3>;
};

const ClockHooks = () => {
  const [hour, setHour] = useState(new Date().toLocaleTimeString());
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let temp;

    if (visible) {
      temp = setInterval(() => {
        setHour(new Date().toLocaleTimeString());
      }, 1000);
    } else {
      clearInterval(temp);
    }
    return () => {
      console.log("Fase de Desmontaje");
    };
  }, [visible]);

  return (
    <>
      <h2>Reloj con Hooks</h2>
      {visible && <Clock hour={hour} />}
      <button onClick={() => setVisible(true)}>play</button>
      <button onClick={() => setVisible(false)}>stop</button>
    </>
  );
};

export default ClockHooks;
