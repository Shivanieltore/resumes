import React, { useState } from "react";
import { Packer, Document, Paragraph } from "docx";
import { saveAs } from "file-saver";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import "./Previewcontainer.css";
import axios from "axios";

function Personalinfo({ selectedTemplate }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    experience: "",
    linkedin: "",
    github: "",
    bio: "",
    achievements: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "email" && !validateEmail(value)) {
      alert("Please enter a valid email address.");
    }

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
    const input = document.getElementById("resume");
    if (!input) {
      console.error('Element with id "resume" not found.');
      return;
    }

    html2canvas(input, { scale: 2 })
      .then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF();
        const width = pdf.internal.pageSize.getWidth();
        const height = (canvas.height * width) / canvas.width;
        pdf.addImage(imgData, "PNG", 0, 0, width, height);
        pdf.save("Resume.pdf");
      })
      .catch((error) => {
        console.error("Error generating PDF:", error);
      });
  };

  const handleSubmit = async () => {
    if (!selectedTemplate) {
      alert("Please select a template before submitting!");
      return;
    }

    if (!formData.name || !formData.email || !formData.phone) {
      alert("Name, Email, and Phone are required fields!");
      return;
    }

    setIsLoading(true);

    try {
      const response = await axios.post("http://127.0.0.1:5000/generate_resume", {
        ...formData,
        templateId: selectedTemplate,
      });

      alert("Resume generated successfully!");
      console.log("Resume generated:", response.data);
    } catch (error) {
      console.error("Error generating resume:", error);
      alert("Failed to generate resume. Please try again.");
    } finally {
      setIsLoading(false);
    }
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
              placeholder="Mention your achievement"
            ></textarea>
          </label>
        </form>

        {/* Preview Section */}
        <div id="resume" className="preview-container">
          <h2>Preview</h2>
          <p><strong>Name:</strong> {formData.name || "Your name will appear here"}</p>
          <p><strong>Email:</strong> {formData.email || "Your email will appear here"}</p>
          <p><strong>Phone:</strong> {formData.phone || "Your phone number will appear here"}</p>
          <p><strong>Address:</strong> {formData.address || "Your address will appear here"}</p>
          <p><strong>Work Experience:</strong> {formData.experience || "Your work experience will appear here"}</p>
          <p><strong>LinkedIn:</strong> {formData.linkedin || "Your LinkedIn profile will appear here"}</p>
          <p><strong>GitHub:</strong> {formData.github || "Your GitHub profile will appear here"}</p>
          <p><strong>Bio:</strong> {formData.bio || "Your bio will appear here"}</p>
          <p><strong>Achievements:</strong> {formData.achievements || "Your achievements will appear here"}</p>
        </div>
      </div>

      {/* Download Button */}
      <button onClick={handleDownloadDocx} className="download-btn">Download Word</button>
      <button onClick={generatePDF} className="download-btn">Download PDF</button>
      <button onClick={handleSubmit} className="submit-btn" disabled={isLoading}>
        {isLoading ? "Generating..." : "Generate Resume"}
      </button>
    </div>
  );
}

export default Personalinfo;

