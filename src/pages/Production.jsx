import React, { useState } from "react";
import "../styles/dashboard.css";

const Production = () => {
  const [productionData, setProductionData] = useState([
    { id: "PROD-001", line: "Line A", product: "Solar Inverter", target: 200, actual: 195, efficiency: "97.5%", status: "On Track" },
    { id: "PROD-002", line: "Line A", product: "Solar Inverter", target: 200, actual: 210, efficiency: "105%", status: "Above Target" },
    { id: "PROD-003", line: "Line B", product: "Medical Device", target: 150, actual: 142, efficiency: "94.7%", status: "On Track" },
    { id: "PROD-004", line: "Line B", product: "Medical Device", target: 150, actual: 138, efficiency: "92%", status: "At Risk" },
    { id: "PROD-005", line: "Line C", product: "Robot Arm", target: 50, actual: 48, efficiency: "96%", status: "On Track" }
  ]);

  const [shiftData, setShiftData] = useState([
    { id: 1, shift: "Morning Shift", startTime: "06:00 AM", endTime: "02:00 PM", workers: 45, output: "580 units", utilization: "92%" },
    { id: 2, shift: "Afternoon Shift", startTime: "02:00 PM", endTime: "10:00 PM", workers: 42, output: "520 units", utilization: "87%" }
  ]);

  const [isProductionModalOpen, setIsProductionModalOpen] = useState(false);
  const [isShiftModalOpen, setIsShiftModalOpen] = useState(false);

  const [newProduction, setNewProduction] = useState({
    line: "",
    product: "",
    quantity: "",
    date: ""
  });

  const [newShift, setNewShift] = useState({
    name: "",
    supervisor: "",
    startTime: "",
    endTime: ""
  });

  const getStatusClass = (status) => {
    if (status === "On Track" || status === "Above Target") return "status-green";
    if (status === "At Risk") return "status-yellow";
    return "status-red";
  };

  const handleAddProduction = () => {
    if (newProduction.line && newProduction.product && newProduction.quantity) {
      const newItem = {
        id: `PROD-${String(productionData.length + 1).padStart(3, "0")}`,
        line: newProduction.line,
        product: newProduction.product,
        target: parseInt(newProduction.quantity),
        actual: Math.floor(parseInt(newProduction.quantity) * 0.95),
        efficiency: "95%",
        status: "On Track"
      };

      setProductionData([...productionData, newItem]);

      setNewProduction({
        line: "",
        product: "",
        quantity: "",
        date: ""
      });

      setIsProductionModalOpen(false);
    }
  };

  const handleAddShift = () => {
    if (newShift.name && newShift.startTime && newShift.endTime) {
      const newItem = {
        id: Date.now(),
        shift: newShift.name,
        startTime: newShift.startTime,
        endTime: newShift.endTime,
        workers: 40,
        output: "450 units",
        utilization: "85%"
      };

      setShiftData([...shiftData, newItem]);

      setNewShift({
        name: "",
        supervisor: "",
        startTime: "",
        endTime: ""
      });

      setIsShiftModalOpen(false);
    }
  };

  const handleDeleteProduction = (id) => {
    setProductionData(productionData.filter((item) => item.id !== id));
  };

  const handleDeleteShift = (id) => {
    setShiftData(shiftData.filter((item) => item.id !== id));
  };

  return (
    <div className="dashboard">
      {/* Header */}
      <div className="dashboard-header">
        <h1 className="dashboard-title">Production</h1>
        <p className="dashboard-subtitle">
          Monitor manufacturing production metrics
        </p>
      </div>

      {/* Status Cards */}
      <div className="status-summary">

        <div className="status-card green">
          <div className="status-icon">📦</div>
          <div className="status-info">
            <h3>1,250</h3>
            <p>Units Today</p>
          </div>
        </div>

        <div className="status-card green">
          <div className="status-icon">⚡</div>
          <div className="status-info">
            <h3>87%</h3>
            <p>Efficiency</p>
          </div>
        </div>

        <div className="status-card yellow">
          <div className="status-icon">🔧</div>
          <div className="status-info">
            <h3>5</h3>
            <p>Active Lines</p>
          </div>
        </div>

      </div>

      {/* Production Table */}
      <div className="card">
        <div className="card-header">
          <h3 className="card-title">Production Overview</h3>

          <button
            className="btn btn-primary"
            onClick={() => setIsProductionModalOpen(true)}
          >
            + Add Production
          </button>
        </div>

        <div className="card-body">
          <table className="data-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Line</th>
                <th>Product</th>
                <th>Target</th>
                <th>Actual</th>
                <th>Efficiency</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {productionData.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.line}</td>
                  <td>{item.product}</td>
                  <td>{item.target}</td>
                  <td>{item.actual}</td>
                  <td>{item.efficiency}</td>

                  <td>
                    <span className={`status-badge ${getStatusClass(item.status)}`}>
                      {item.status}
                    </span>
                  </td>

                  <td>
                    <button
                      className="btn-delete"
                      onClick={() => handleDeleteProduction(item.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      </div>

      {/* Shift Table */}
      <div className="card" style={{ marginTop: "24px" }}>
        <div className="card-header">
          <h3 className="card-title">Shift Details</h3>

          <button
            className="btn btn-primary"
            onClick={() => setIsShiftModalOpen(true)}
          >
            + Add Shift
          </button>
        </div>

        <div className="card-body">
          <table className="data-table">
            <thead>
              <tr>
                <th>Shift</th>
                <th>Start</th>
                <th>End</th>
                <th>Workers</th>
                <th>Output</th>
                <th>Utilization</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {shiftData.map((item) => (
                <tr key={item.id}>
                  <td>{item.shift}</td>
                  <td>{item.startTime}</td>
                  <td>{item.endTime}</td>
                  <td>{item.workers}</td>
                  <td>{item.output}</td>
                  <td>{item.utilization}</td>

                  <td>
                    <button
                      className="btn-delete"
                      onClick={() => handleDeleteShift(item.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      </div>

      {/* Production Modal */}
      {isProductionModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">

            <div className="modal-header">
              <h2>Add Production</h2>
              <button
                className="modal-close"
                onClick={() => setIsProductionModalOpen(false)}
              >
                ×
              </button>
            </div>

            <div className="modal-form">

              <input
                placeholder="Production Line"
                value={newProduction.line}
                onChange={(e) =>
                  setNewProduction({ ...newProduction, line: e.target.value })
                }
              />

              <input
                placeholder="Product"
                value={newProduction.product}
                onChange={(e) =>
                  setNewProduction({ ...newProduction, product: e.target.value })
                }
              />

              <input
                type="number"
                placeholder="Quantity"
                value={newProduction.quantity}
                onChange={(e) =>
                  setNewProduction({ ...newProduction, quantity: e.target.value })
                }
              />

              <div className="modal-actions">
                <button
                  className="btn-cancel"
                  onClick={() => setIsProductionModalOpen(false)}
                >
                  Cancel
                </button>

                <button className="btn-save" onClick={handleAddProduction}>
                  Save
                </button>
              </div>

            </div>
          </div>
        </div>
      )}

      {/* Shift Modal */}
      {isShiftModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">

            <div className="modal-header">
              <h2>Add Shift</h2>
              <button
                className="modal-close"
                onClick={() => setIsShiftModalOpen(false)}
              >
                ×
              </button>
            </div>

            <div className="modal-form">

              <input
                placeholder="Shift Name"
                value={newShift.name}
                onChange={(e) =>
                  setNewShift({ ...newShift, name: e.target.value })
                }
              />

              <input
                type="time"
                value={newShift.startTime}
                onChange={(e) =>
                  setNewShift({ ...newShift, startTime: e.target.value })
                }
              />

              <input
                type="time"
                value={newShift.endTime}
                onChange={(e) =>
                  setNewShift({ ...newShift, endTime: e.target.value })
                }
              />

              <div className="modal-actions">
                <button
                  className="btn-cancel"
                  onClick={() => setIsShiftModalOpen(false)}
                >
                  Cancel
                </button>

                <button className="btn-save" onClick={handleAddShift}>
                  Save
                </button>
              </div>

            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Production;