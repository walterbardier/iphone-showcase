import { createContext, useContext, useState } from "react";

const PhoneContext = createContext();

export function PhoneProvider({ children }) {
  const [section, setSection] = useState("hero");

  return (
    <PhoneContext.Provider
      value={{
        section,
        setSection,
      }}
    >
      {children}
    </PhoneContext.Provider>
  );
}

export function usePhone() {
  return useContext(PhoneContext);
}