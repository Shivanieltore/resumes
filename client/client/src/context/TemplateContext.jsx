import React, { createContext, useContext, useState } from "react";

const TemplateContext = createContext();

export const TemplateProvider = ({ children }) => {
  const [selectedResumeTemplate, setSelectedResumeTemplate] = useState(null);
  const [selectedCvTemplate, setSelectedCvTemplate] = useState(null);

  return (
    <TemplateContext.Provider
      value={{
        selectedResumeTemplate,
        setSelectedResumeTemplate,
        selectedCvTemplate,
        setSelectedCvTemplate,
      }}
    >
      {children}
    </TemplateContext.Provider>
  );
};

export const useTemplate = () => useContext(TemplateContext);

