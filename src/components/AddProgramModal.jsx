import React, { useState } from "react";

const AddProgramModal = ({ isOpen, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    programName: "",
    customer: "",
    startDate: "",
    endDate: "",
    progress: "0%",
    status: "on-track",
    tasks: 0
  });

  const [errors, setErrors] = useState({});

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.programName.trim())
      newErrors.programName = "Program Name is required";

    if (!formData.customer.trim())
      newErrors.customer = "Customer is required";

    if (!formData.startDate)
      newErrors.startDate = "Start Date is required";

    if (!formData.endDate)
      newErrors.endDate = "End Date is required";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      onSave(formData);

      setFormData({
        programName: "",
        customer: "",
        startDate: "",
        endDate: "",
        progress: "0%",
        status: "on-track",
        tasks: 0
      });

      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          <h2>Add New Program</h2>

          <button
            className="modal-close"
            onClick={onClose}
          >
            &times;
          </button>
        </div>

        <form onSubmit={handleSubmit} className="modal-form">

          {/* Program Name */}
          <div className="form-group">
            <label>Program Name *</label>

            <input
              type="text"
              name="programName"
              value={formData.programName}
              onChange={handleChange}
              placeholder="Enter program name"
              className={errors.programName ? "error" : ""}
            />

            {errors.programName && (
              <span className="error-message">
                {errors.programName}
              </span>
            )}
          </div>

          {/* Customer */}
          <div className="form-group">
            <label>Customer *</label>

            <input
              type="text"
              name="customer"
              value={formData.customer}
              onChange={handleChange}
              placeholder="Enter customer name"
              className={errors.customer ? "error" : ""}
            />

            {errors.customer && (
              <span className="error-message">
                {errors.customer}
              </span>
            )}
          </div>

          {/* Start Date */}
          <div className="form-group">
            <label>Start Date *</label>

            <input
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              className={errors.startDate ? "error" : ""}
            />

            {errors.startDate && (
              <span className="error-message">
                {errors.startDate}
              </span>
            )}
          </div>

          {/* End Date */}
          <div className="form-group">
            <label>End Date *</label>

            <input
              type="date"
              name="endDate"
              value={formData.endDate}
              onChange={handleChange}
              className={errors.endDate ? "error" : ""}
            />

            {errors.endDate && (
              <span className="error-message">
                {errors.endDate}
              </span>
            )}
          </div>

          {/* Progress */}
          <div className="form-group">
            <label>Progress</label>

            <select
              name="progress"
              value={formData.progress}
              onChange={handleChange}
            >
              <option value="0%">0%</option>
              <option value="10%">10%</option>
              <option value="20%">20%</option>
              <option value="30%">30%</option>
              <option value="40%">40%</option>
              <option value="50%">50%</option>
              <option value="60%">60%</option>
              <option value="70%">70%</option>
              <option value="80%">80%</option>
              <option value="90%">90%</option>
              <option value="100%">100%</option>
            </select>
          </div>

          {/* Status */}
          <div className="form-group">
            <label>Status</label>

            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
            >
              <option value="on-track">On Track</option>
              <option value="at-risk">At Risk</option>
              <option value="behind">Behind</option>
            </select>
          </div>

          {/* Buttons */}
          <div className="modal-actions">
            <button
              type="button"
              className="btn-cancel"
              onClick={onClose}
            >
              Cancel
            </button>

            <button
              type="submit"
              className="btn-save"
            >
              Save Program
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default AddProgramModal;