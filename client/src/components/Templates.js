Packer.toBlob(doc).then((blob) => {
  saveAs(blob, "ResumePreview.docx");
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
        LinkedIn:
        <input
          type="url"
          name="linkedin"
          value={formData.linkedin}
          onChange={handleChange}
          placeholder="Enter your LinkedIn profile URL"
        />
      </label>
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
    </div>
  </div>

  {/* Download Button */}
  <button onClick={handleDownloadDocx} className="download-btn">
    Download as DOCX
  </button>
</div>
);
}

export default Templates;