import React, { useState } from "react";
import * as HTMLDocx from "html-docx-js/dist/html-docx"; // Importing html-docx-js
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import "./Previewcontainer.css";
import template1 from "../assets/template1.png";
import template2 from "../assets/template2.png";
import template3 from "../assets/template3.png";

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
  const [profileImage, setProfileImage] = useState(null);

  const templateImages = [template1, template2, template3];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => setProfileImage(event.target.result);
      reader.readAsDataURL(file);
    }
  };

  // Generate Word Document
  const handleDownloadDocx = () => {
    const docxContent = `
      <h2>${formData.name || "Your Name"}</h2>
      <p><strong>Email:</strong> ${formData.email || "Your Email"}</p>
      <p><strong>Phone:</strong> ${formData.phone || "Your Phone"}</p>
      <p><strong>Address:</strong> ${formData.address || "Your Address"}</p>
      <p><strong>Experience:</strong> ${formData.experience || "Your Experience"}</p>
      <p><strong>LinkedIn:</strong> ${formData.linkedin || "Your LinkedIn"}</p>
      <p><strong>GitHub:</strong> ${formData.github || "Your GitHub"}</p>
      <p><strong>Bio:</strong> ${formData.bio || "Your Bio"}</p>
      <p><strong>Achievements:</strong> ${formData.achievements || "Your Achievements"}</p>
    `;

    // Convert HTML content to .docx
    const docxBlob = HTMLDocx.asBlob(docxContent);
    const link = document.createElement("a");
    link.href = URL.createObjectURL(docxBlob);
    link.download = "Resume.docx";
    link.click();
  };

  const generatePDF = () => {
    if (selectedTemplate == null || selectedTemplate >= templateImages.length) {
      alert("Please select a valid template before downloading!");
      return;
    }
  
    // Create an offscreen container
    const input = document.createElement("div");
    input.style.position = "absolute";
    input.style.left = "-9999px"; 
    // Give it a known width so absolute positioning is consistent
    input.style.width = "800px"; 
  
    const templateImage = templateImages[selectedTemplate - 1];
  
    // Use a plain template literal for the HTML
    const resumeContent = `
      <div style="position: relative; width: 800px; font-family: Arial, sans-serif;">
        <!-- The background/template image -->
        <img 
          src="${templateImage}" 
          alt="Resume Template" 
          style="width: 100%; height: auto;" 
        />
  
        <!-- Profile photo container, absolutely positioned -->
        <div 
          style="
            position: absolute; 
            top: 70px; 
            left: 50px;
          "
        >
          <div 
            style="
              width: 240px;
              height: 240px;
              border-radius: 50%;
              overflow: hidden;
              display: flex;
              justify-content: center;
              align-items: center;
              background: #f0f0f0;
            "
          >
            <img 
              src="${profileImage || ""}" 
              alt="Profile" 
              style="width: 100%; height: 100%; object-fit: cover;" 
            />
          </div>
        </div>
  
        <!-- Text details, absolutely positioned on the right -->

<div 
          style="
            position: absolute; 
            top: 300px; 
            left: 330px; 
            width: 300px; 
            color: #000;
          "
        >
          <h2 style="margin: 0; font-size: 34px; font-weight: bold;">
            ${formData.name || "Your Name"}
          </h2>
          <p style="margin: 10px 0; font-size: 22px; font-weight: bold;">
            <strong>Email:</strong> ${formData.email || "Your Email"}
          </p>
          <p style="margin: 10px 0; font-size: 22px; font-weight: bold;">
            <strong>Phone:</strong> ${formData.phone || "Your Phone"}
          </p>
          <p style="margin: 10px 0; font-size: 22px; font-weight: bold;">
            <strong>Address:</strong> ${formData.address || "Your Address"}
          </p>
          <p style="margin: 10px 0; font-size: 22px; font-weight: bold;">
            <strong>Experience:</strong> ${formData.experience || "Your Experience"}
          </p>
          <p style="margin: 10px 0; font-size: 22px; font-weight: bold;">
            <strong>LinkedIn:</strong> ${formData.linkedin || "Your LinkedIn"}
          </p>
          <p style="margin: 10px 0; font-size: 22px; font-weight: bold;">
            <strong>GitHub:</strong> ${formData.github || "Your GitHub"}
          </p>
          <p style="margin: 10px 0; font-size: 22px; font-weight: bold;">
            <strong>Bio:</strong> ${formData.bio || "Your Bio"}
          </p>
          <p style="margin: 10px 0; font-size: 22px; font-weight: bold;">
            <strong>Achievements:</strong> ${formData.achievements || "Your Achievements"}
          </p>
        </div>
      </div>
    `;
  
    // Inject the HTML into the offscreen container
    input.innerHTML = resumeContent;
    document.body.appendChild(input);
  
    // Now generate the PDF with html2canvas + jsPDF
    html2canvas(input, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
  
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("Resume.pdf");
  
      // Clean up
      document.body.removeChild(input);
    });
  };
  

  return (
    <div className="preview-container">
      <h2>Enter Your Details</h2>

      <form>
        <label htmlFor="profile">Upload Profile Image:</label>
        <input id="profile" type="file" accept="image/*" onChange={handleImageUpload} />
        <label htmlFor="name">Name:</label>
        <input id="name" type="text" name="name" value={formData.name} onChange={handleChange} />
        <label htmlFor="email">Email:</label>
        <input id="email" type="email" name="email" value={formData.email} onChange={handleChange} />
        <label htmlFor="phone">Phone:</label>
        <input id="phone" type="text" name="phone" value={formData.phone} onChange={handleChange} />
        <label htmlFor="address">Address:</label>
        <input id="address" type="text" name="address" value={formData.address} onChange={handleChange} />
        <label htmlFor="education">Education:</label>
        <textarea id="education" name="education" value={formData.eductaion} onChange={handleChange}></textarea>
        <label htmlFor="skills">Skills:</label>
        <textarea id="skills" name="skills" value={formData.skills} onChange={handleChange}></textarea>
        <label htmlFor="experience">Experience:</label>
        <textarea id="experience" name="experience" value={formData.experience} onChange={handleChange}></textarea>
        <label htmlFor="linkedin">LinkedIn:</label>
        <input id="linkedin" type="url" name="linkedin" value={formData.linkedin} onChange={handleChange} />
        <label htmlFor="github">GitHub:</label>
        <input id="github" type="url" name="github" value={formData.github} onChange={handleChange} />
        <label htmlFor="bio">Bio:</label>
        <textarea id="bio" name="bio" value={formData.bio} onChange={handleChange}></textarea>
        <label htmlFor="achievements">Achievements:</label>
        <textarea id="achievements" name="achievements" value={formData.achievements} onChange={handleChange}></textarea>
      </form>
      <button className="download-btn" onClick={generatePDF}>
        Download as PDF
      </button>
      <button className="download-btn" onClick={handleDownloadDocx}>Download as Word</button>
    </div>
  );
}

export default Personalinfo;








// import React, { useState } from "react";
// import * as HTMLDocx from "html-docx-js/dist/html-docx"; // Importing html-docx-js
// import html2canvas from "html2canvas";
// import jsPDF from "jspdf";
// import "./Previewcontainer.css";
// import template1 from "../assets/template1.png";
// import template2 from "../assets/template2.png";
// import template3 from "../assets/template3.png";

// function Personalinfo({ selectedTemplate }) {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     address: "",
//     experience: "",
//     linkedin: "",
//     github: "",
//     bio: "",
//     achievements: "",
//   });
//   const [profileImage, setProfileImage] = useState(null);

//   const templateImages = [template1, template2, template3];

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleImageUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = (event) => setProfileImage(event.target.result);
//       reader.readAsDataURL(file);
//     }
//   };

//   // Generate Word Document
  // const handleDownloadDocx = () => {
  //   const docxContent = `
  //     <h2>${formData.name || "Your Name"}</h2>
  //     <p><strong>Email:</strong> ${formData.email || "Your Email"}</p>
  //     <p><strong>Phone:</strong> ${formData.phone || "Your Phone"}</p>
  //     <p><strong>Address:</strong> ${formData.address || "Your Address"}</p>
  //     <p><strong>Experience:</strong> ${formData.experience || "Your Experience"}</p>
  //     <p><strong>LinkedIn:</strong> ${formData.linkedin || "Your LinkedIn"}</p>
  //     <p><strong>GitHub:</strong> ${formData.github || "Your GitHub"}</p>
  //     <p><strong>Bio:</strong> ${formData.bio || "Your Bio"}</p>
  //     <p><strong>Achievements:</strong> ${formData.achievements || "Your Achievements"}</p>
  //   `;

//     // Convert HTML content to .docx
//     const docxBlob = HTMLDocx.asBlob(docxContent);
//     const link = document.createElement("a");
//     link.href = URL.createObjectURL(docxBlob);
//     link.download = "Resume.docx";
//     link.click();
//   };

//   const generatePDF = () => {
//     if (selectedTemplate == null || selectedTemplate >= templateImages.length) {
//       alert("Please select a valid template before downloading!");
//       return;
//     }

//     const input = document.createElement("div");
//     input.style.position = "absolute";
//     input.style.left = "-9999px"; // Hide it offscreen
//     input.style.width = "800px"; // Adjust width as needed

//     const templateImage = templateImages[selectedTemplate - 1];
//     const resumeContent = `
//       <div style="position: relative; font-family: Arial, sans-serif;">
//         <img src="${templateImage}" alt="Resume Template" style="width: 100%; height: auto;" />
//         <div style="position: absolute; top: 50px; left: 50px;">
//           <div style="
//             width: 120px;
//             height: 120px;
//             border-radius: 50%;
//             overflow: hidden;
//             display: flex;
//             justify-content: center;
//             align-items: center;
//             background: #f0f0f0;
//           ">
//             <img src="${profileImage || ""}" alt="Profile" style="width: 100%; height: 100%; object-fit: cover;" />
//           </div>
//         </div>
//         <div style="position: absolute; top: 50px; right: 50px; width: 300px; color: #000;">
//           <h2 style="margin: 0; font-size: 26px; font-weight: bold;">${formData.name || "Your Name"}</h2>
//           <p style="margin: 10px 0; font-size: 18px; font-weight: bold;"><strong>Email:</strong> ${formData.email || "Your Email"}</p>
//           <p style="margin: 10px 0; font-size: 18px; font-weight: bold;"><strong>Phone:</strong> ${formData.phone || "Your Phone"}</p>
//           <p style="margin: 10px 0; font-size: 18px; font-weight: bold;"><strong>Address:</strong> ${formData.address || "Your Address"}</p>
//           <p style="margin: 10px 0; font-size: 18px; font-weight: bold;"><strong>Experience:</strong> ${formData.experience || "Your Experience"}</p>
//           <p style="margin: 10px 0; font-size: 18px; font-weight: bold;"><strong>LinkedIn:</strong> ${formData.linkedin || "Your LinkedIn"}</p>
//           <p style="margin: 10px 0; font-size: 18px; font-weight: bold;"><strong>GitHub:</strong> ${formData.github || "Your GitHub"}</p>
//           <p style="margin: 10px 0; font-size: 18px; font-weight: bold;"><strong>Bio:</strong> ${formData.bio || "Your Bio"}</p>
//           <p style="margin: 10px 0; font-size: 18px; font-weight: bold;"><strong>Achievements:</strong> ${formData.achievements || "Your Achievements"}</p>
//         </div>
//       </div>
//     `;

//     input.innerHTML = resumeContent;
//     document.body.appendChild(input);

//     html2canvas(input, { scale: 2 }).then((canvas) => {
//       const imgData = canvas.toDataURL("image/png");
//       const pdf = new jsPDF();
//       const width = pdf.internal.pageSize.getWidth();
//       const height = (canvas.height * width) / canvas.width;
//       pdf.addImage(imgData, "PNG", 0, 0, width, height);
//       pdf.save("Resume.pdf");
//       document.body.removeChild(input);
//     });
//   };

//   return (
//     <div className="preview-container">
//       <h2>Enter Your Details</h2>

//       <form>
//         <label htmlFor="profile">Upload Profile Image:</label>
//         <input id="profile" type="file" accept="image/*" onChange={handleImageUpload} />
//         <label htmlFor="name">Name:</label>
//         <input id="name" type="text" name="name" value={formData.name} onChange={handleChange} />
//         <label htmlFor="email">Email:</label>
//         <input id="email" type="email" name="email" value={formData.email} onChange={handleChange} />
//         <label htmlFor="branch">Branch:</label>
//         <input id="branch" type="branch" name="branch" value={formData.branch} onChange={handleChange} />
//         <label htmlFor="phone">Phone:</label>
//         <input id="phone" type="text" name="phone" value={formData.phone} onChange={handleChange} />
//         <label htmlFor="address">Address:</label>
//         <input id="address" type="text" name="address" value={formData.address} onChange={handleChange} />
//         <label htmlFor="experience">Experience:</label>
//         <textarea id="experience" name="experience" value={formData.experience} onChange={handleChange}></textarea>
//         <label htmlFor="linkedin">LinkedIn:</label>
//         <input id="linkedin" type="url" name="linkedin" value={formData.linkedin} onChange={handleChange} />
//         <label htmlFor="github">GitHub:</label>
//         <input id="github" type="url" name="github" value={formData.github} onChange={handleChange} />
//         <label htmlFor="bio">Bio:</label>
//         <textarea id="bio" name="bio" value={formData.bio} onChange={handleChange}></textarea>
//         <label htmlFor="achievements">Achievements:</label>
//         <textarea id="achievements" name="achievements" value={formData.achievements} onChange={handleChange}></textarea>
//         <label htmlFor="achievements">Reference:</label>
//         <textarea id="reference" name="reference" value={formData.reference} onChange={handleChange}></textarea>
//       </form>

//       <button className="download-btn" onClick={generatePDF}>
//         Download as PDF
//       </button>
//       <button className="download-btn" onClick={handleDownloadDocx}>Download as Word</button>
//     </div>
//   );
// }

// export default Personalinfo;