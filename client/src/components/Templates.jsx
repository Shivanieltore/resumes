import React, { useState } from "react";
import { Packer, Document, Paragraph } from "docx";
import { saveAs } from "file-saver";
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import "./Previewcontainer.css";
function Templates() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    experience:"",
    linkedin: "",
    github: "",
    bio: "",
    achievements:"",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleDownloadDocx = () => {
    const doc = new Document({
      sections: [
        {
          children: [
            new Paragraph(`Name: ${formData.name}`),
            new Paragraph(`Email: ${formData.email}`),
            new Paragraph(`Phone: ${formData.phone}`),
            new Paragraph(`Address: ${formData.address}`),
            new Paragraph(`Work Experience: ${formData.experience}`),
            new Paragraph(`LinkedIn: ${formData.linkedin}`),
            new Paragraph(`GitHub: ${formData.github}`),
            new Paragraph(`Bio: ${formData.bio}`),
            new Paragraph(`Achievements: ${formData.achievements}`),
          ],
        },
      ],
    });
Packer.toBlob(doc).then((blob) => {
  saveAs(blob, "ResumePreview.docx");
});
};
const generatePDF = () => {
  const input = document.getElementById('resume');
  html2canvas(input).then((canvas) => {
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF();
    pdf.addImage(imgData, 'PNG', 0, 0);
    pdf.save('resume.pdf');
  });
};

return (
<div className="templates-container">
  <div className="form-preview-wrapper">
    {/* Form Section */}
    <form className="form-container">
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
        />
      </label>
      <label>
        Phone:
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Enter your phone number"
        />
      </label>
      <label>
        Address:
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Enter your address"
        />
      </label>
      <label>
        Work Experience:
        <input
          type="text"
          name="experience"
          value={formData.experience}
          onChange={handleChange}
          placeholder="Any Work Experience?"
        />
      </label>
      <label>
        LinkedIn:
        <input
          type="url"
          name="linkedin"
          value={formData.linkedin}
          onChange={handleChange}
          placeholder="Enter your LinkedIn profile URL"
        />
      </label>
      <br></br>
      <label>
        GitHub:
        <input
          type="url"
          name="github"
          value={formData.github}
          onChange={handleChange}
          placeholder="Enter your GitHub profile URL"
        />
      </label>
      <label>
        Bio:
        <textarea
          name="bio"
          value={formData.bio}
          onChange={handleChange}
          placeholder="Write a short bio"
        ></textarea>
      </label>
      <label>
        Achievements:
        <textarea
        type="text"
        name="achievements"
        value={formData.achievements}
        onChange={handleChange}
        placeholder="mention your achievement"
        ></textarea>
      </label>
    </form>

    {/* Preview Section */}
    <div className="preview-container">
      <h2>Preview</h2>
      <p>
        <strong>Name:</strong>{" "}
        {formData.name || "Your name will appear here"}
      </p>
      <p>
        <strong>Email:</strong>{" "}
        {formData.email || "Your email will appear here"}
      </p>
      <p>
        <strong>Phone:</strong>{" "}
        {formData.phone || "Your phone number will appear here"}
      </p>
      <p>
        <strong>Address:</strong>{" "}
        {formData.address || "Your address will appear here"}
      </p>
      <p>
        <strong>Work Experience</strong>{" "}
        {formData.experience || "Your work experience will appear here"}
      </p>
      <p>
        <strong>LinkedIn:</strong>{" "}
        {formData.linkedin || "Your LinkedIn profile will appear here"}
      </p>
      <p>
        <strong>GitHub:</strong>{" "}
        {formData.github || "Your GitHub profile will appear here"}
      </p>
      <p>
        <strong>Bio:</strong> {formData.bio || "Your bio will appear here"}
      </p>
      <p>
        <strong>Achievements</strong>{" "}
        {formData.achievements || "Your achievements will appear here"}
      </p>
    </div>
  </div>

  {/* Download Button */}
  <button onClick={handleDownloadDocx} className="download-btn"></button>
    Download as DOCX
  <button onClick={generatePDF}>Download PDF</button>
</div>
);
}

export default Templates;