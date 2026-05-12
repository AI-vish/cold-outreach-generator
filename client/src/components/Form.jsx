import { useState } from "react";
import apiClient from "../api/apiClient";

const Form = ({ onMessageGenerated, onLoadingChange, onError }) => {
  const [formData, setFormData] = useState({
    company: "",
    role: "",
    recruiter: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    onError("");
    onLoadingChange(true);

    try {
      const response = await apiClient.post("/messages/generate", formData);
      onMessageGenerated(response.data.data);
      setFormData((prev) => ({ ...prev, recruiter: "" }));
    } catch (error) {
      const errorMessage = error.response?.data?.message || "Unable to generate message.";
      onError(errorMessage);
    } finally {
      onLoadingChange(false);
    }
  };

  return (
    <form className="card form" onSubmit={handleSubmit}>
      <h2>Generate Outreach Message</h2>
      <label>
        Company
        <input
          type="text"
          name="company"
          value={formData.company}
          onChange={handleChange}
          placeholder="e.g., Stripe"
          required
        />
      </label>
      <label>
        Role
        <input
          type="text"
          name="role"
          value={formData.role}
          onChange={handleChange}
          placeholder="e.g., Frontend Engineer"
          required
        />
      </label>
      <label>
        Recruiter (optional)
        <input
          type="text"
          name="recruiter"
          value={formData.recruiter}
          onChange={handleChange}
          placeholder="e.g., Aisha"
        />
      </label>
      <button type="submit" className="btn-primary">
        Generate Message
      </button>
    </form>
  );
};

export default Form;
