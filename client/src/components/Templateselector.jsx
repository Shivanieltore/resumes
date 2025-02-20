import React from "react";
import { useNavigate } from "react-router-dom";
import "./TemplateSelector.css";
import template1 from "../assets/template1.png";
import template2 from "../assets/template2.png";
import template3 from "../assets/template3.png";
import template4 from "../assets/template4.png";
import template5 from "../assets/template5.png";
import template6 from "../assets/template6.png";
import template7 from "../assets/template7.png";
import template8 from "../assets/template8.png";

const Templateselector = ({ onSelectTemplate }) => {
  const navigate = useNavigate();

  const templates = [
    { id: 1, name: "Template 1", image: template1 },
    { id: 2, name: "Template 2", image: template2 },
    { id: 3, name: "Template 3", image: template3 },
    { id: 4, name: "Template 4", image: template4 },
    { id: 5, name: "Template 5", image: template5 },
    { id: 6, name: "Template 6", image: template6 },
    { id: 7, name: "Template 7", image: template7 },
    { id: 8, name: "Template 8", image: template8 },
  ];

  const handleTemplateSelect = (id) => {
    onSelectTemplate(id);
    localStorage.setItem("selectedTemplate", id); // Save selected template in local storage
    navigate("/personal-info"); // Always navigate to PersonalInfo
  };

  return (
    <div className="template-selector">
      <h2>Select a Template</h2>
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

export default Templateselector;
