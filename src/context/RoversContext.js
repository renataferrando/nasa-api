import React, { useState } from "react";

const Context = React.createContext({});

export function RoversContextProvider({ children }) {
  const [rovers, setRovers] = useState([]);
  const [maxdate, setMaxDate] = useState(null);
  const [maxsol, setMaxSol] = useState(null);

  return (
    <Context.Provider
      value={{ rovers, setRovers, maxdate, setMaxDate, maxsol, setMaxSol }}
    >
      {children}
    </Context.Provider>
  );
}

export default Context;
