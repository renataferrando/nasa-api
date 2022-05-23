import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";

const Context = React.createContext({});

export function ImagesContextProvider({ children }) {
  const [images, setImages] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <Context.Provider
      value={{ images, setImages, searchParams, setSearchParams }}
    >
      {children}
    </Context.Provider>
  );
}

export default Context;
