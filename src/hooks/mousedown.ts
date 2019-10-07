import { useState } from "react";

export const useMouseDown = () => {
  const mousedownHook = (callback: () => void) => () =>  {
    document.addEventListener("mousedown", callback);
    return () => document.removeEventListener("mousedown", callback);
  };

  return {
    mousedownHook
  };
};