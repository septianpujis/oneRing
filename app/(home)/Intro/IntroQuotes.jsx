import React from "react";
import { Qoutes } from "../../../component";

export const IntroQuotes = () => {
  return (
    <>
      <Qoutes text={`Isildur's Bane`} position={`top-1/4 right-1/3`} />
      <Qoutes text={`The Ring of Power`} position={`top-3/4 right-1/3`} />
      <Qoutes text={`My Precious`} position={`top-1/4 right-2/3`} />
      <Qoutes text={`The One`} position={`top-[70%] right-2/4`} />
    </>
  );
};
