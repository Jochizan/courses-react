import React, { useState, useEffect } from "react";

const ScrollHooks = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    //console.log("Moviendo el Scroll");

    const w = window;
    const detectionScroll = () => setScrollY(w.pageYOffset);
    detectionScroll();
    w.addEventListener("scroll", detectionScroll);
    return () => {
      w.removeEventListener("scroll", detectionScroll);
      //console.log("Fase de Desmontaje");
    };
  }, [scrollY]);

  // Visualizar la fase de Montaje
  //  useEffect(() => {
  //console.log("Fase de Montaje");
  //}, []);

  // NO usar de esta forma useEffect
  //  useEffect(() => {
  //console.log("Fase de Actualización");
  //});

  // Visualizar la fase de Desmontaje
  //  useEffect(() => {
  //return () => {
  //console.log("Fase de Desmontaje");
  //// Desconexiones y limpiezas
  //};
  //});

  return (
    <>
      <h2>Hooks - useEffect y el ciclo de Vida</h2>
      <p>ScrollY del navegador {scrollY}px</p>
    </>
  );
};

export default ScrollHooks;
