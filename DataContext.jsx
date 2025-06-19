import { useContext, createContext, useState } from "react";

const DataContext = createContext();

export const useData = () => {
  return useContext(DataContext);
};

export const DataProvider = ({ children }) => {
  const [language, setLanguage] = useState("cpp");
  const [code, setCode] = useState("");
  const [output, setOutput] = useState(null);
  const [error, setError] = useState(null);

  return (
    <DataContext.Provider
      value={{
        language,
        setLanguage,
        code,
        setCode,
        output,
        setOutput,
        error,
        setError,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
