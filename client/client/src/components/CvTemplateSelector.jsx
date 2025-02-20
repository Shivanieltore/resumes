import React from "react";
import { useNavigate } from "react-router-dom";
import "./CvTemplateSelector.css";
import cvtemplate1 from "../assets/cvtemplate1.jpg";
import cvtemplate2 from "../assets/cvtemplate2.jpg";
import cvtemplate3 from "../assets/cvtemplate3.jpg";
import cvtemplate4 from "../assets/cvtemplate4.jpg";
import cvtemplate5 from "../assets/cvtemplate5.jpg";
import cvtemplate6 from "../assets/cvtemplate6.jpg";

const CvTemplateSelector = ({ onSelectTemplate }) => {
  const navigate = useNavigate();

  const templates = [
    { id: 1, name: "Template 1", image: cvtemplate1 },
    { id: 2, name: "Template 2", image: cvtemplate2 },
    { id: 3, name: "Template 3", image: cvtemplate3 },
    { id: 4, name: "Template 4", image: cvtemplate4 },
    { id: 5, name: "Template 5", image: cvtemplate5 },
    { id: 6, name: "Template 6", image: cvtemplate6 },
  ];

  const handleTemplateSelect = (id) => {
    onSelectTemplate(id); // Update parent state
    navigate("/cv-maker"); // Navigate to the CV maker page
  };

  return (
    <div className="template-selector">
      <h2>Select a CV Template</h2>
      <div className="template-list">
        {templates.map((template) => (
          <div
            key={template.id}
            className="template-item"
            onClick={() => handleTemplateSelect(template.id)}
          >
            <img src={template.image} alt={template.name} />
            <p>{template.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CvTemplateSelector;

