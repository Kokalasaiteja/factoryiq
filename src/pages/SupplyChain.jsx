import React, { useState } from "react";
import "../styles/dashboard.css";

const SupplyChain = () => {
  const [suppliers, setSuppliers] = useState([
    { id: 1, name: "Tesla Supply Co", material: "Battery Cells", quantity: "5000 units", deliveryDate: "2026-03-15", status: "On Time" },
    { id: 2, name: "BMW Parts Ltd", material: "Motor Components", quantity: "2000 units", deliveryDate: "2026-03-20", status: "Delayed" },
    { id: 3, name: "Siemens AG", material: "Control Systems", quantity: "150 units", deliveryDate: "2026-03-10", status: "On Time" },
    { id: 4, name: "Foxconn Tech", material: "PCBs", quantity: "10000 units", deliveryDate: "2026-03-25", status: "On Time" },
    { id: 5, name: "Panasonic Corp", material: "Sensors", quantity: "3000 units", deliveryDate: "2026-03-18", status: "Delayed" }
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [newSupplier, setNewSupplier] = useState({
    name: "",
    material: "",
    quantity: "",
    deliveryDate: "",
    status: "On Time"
  });

  const handleAddSupplier = () => {
    if (
      newSupplier.name &&
      newSupplier.material &&
      newSupplier.quantity &&
      newSupplier.deliveryDate
    ) {
      setSuppliers([...suppliers, { ...newSupplier, id: Date.now() }]);

      setNewSupplier({
        name: "",
        material: "",
        quantity: "",
        deliveryDate: "",
        status: "On Time"
      });

      setIsModalOpen(false);
    }
  };

  const handleDelete = (id) => {
    setSuppliers(suppliers.filter((s) => s.id !== id));
  };

  return (
    <div className="dashboard">

      {/* Header */}
      <div className="dashboard-header">
        <h1 className="dashboard-title">Supply Chain</h1>
        <p className="dashboard-subtitle">
          Track supplier deliveries and inventory
        </p>
      </div>

      {/* Table Card */}
      <div className="card">

        <div className="card-header">
          <h3 className="card-title">Supply Chain Tracking</h3>

          <button
            className="btn btn-primary"
            onClick={() => setIsModalOpen(true)}
          >
            + Add Supplier
          </button>
        </div>

        <div className="card-body">
          <table className="data-table">

            <thead>
              <tr>
                <th>Supplier Name</th>
                <th>Material</th>
                <th>Quantity</th>
                <th>Delivery Date</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {suppliers.map((supplier) => (
                <tr key={supplier.id}>
                  <td>{supplier.name}</td>
                  <td>{supplier.material}</td>
                  <td>{supplier.quantity}</td>
                  <td>{supplier.deliveryDate}</td>

                  <td>
                    <span
                      className={`status-badge ${
                        supplier.status === "Delayed"
                          ? "status-red"
                          : "status-green"
                      }`}
                    >
                      {supplier.status}
                    </span>
                  </td>

                  <td>
                    <button
                      className="btn-delete"
                      onClick={() => handleDelete(supplier.id)}
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

      {/* Modal */}
      {isModalOpen && (
        <div
          className="modal-overlay"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >

            <div className="modal-header">
              <h2>Add Supplier</h2>

              <button
                className="modal-close"
                onClick={() => setIsModalOpen(false)}
              >
                ×
              </button>
            </div>

            <div className="modal-form">

              <div className="form-group">
                <label>Supplier Name</label>
                <input
                  type="text"
                  value={newSupplier.name}
                  onChange={(e) =>
                    setNewSupplier({
                      ...newSupplier,
                      name: e.target.value
                    })
                  }
                  placeholder="Enter supplier name"
                />
              </div>

              <div className="form-group">
                <label>Material</label>
                <input
                  type="text"
                  value={newSupplier.material}
                  onChange={(e) =>
                    setNewSupplier({
                      ...newSupplier,
                      material: e.target.value
                    })
                  }
                  placeholder="Enter material name"
                />
              </div>

              <div className="form-group">
                <label>Quantity</label>
                <input
                  type="text"
                  value={newSupplier.quantity}
                  onChange={(e) =>
                    setNewSupplier({
                      ...newSupplier,
                      quantity: e.target.value
                    })
                  }
                  placeholder="e.g., 1000 units"
                />
              </div>

              <div className="form-group">
                <label>Delivery Date</label>
                <input
                  type="date"
                  value={newSupplier.deliveryDate}
                  onChange={(e) =>
                    setNewSupplier({
                      ...newSupplier,
                      deliveryDate: e.target.value
                    })
                  }
                />
              </div>

              <div className="form-group">
                <label>Status</label>

                <select
                  value={newSupplier.status}
                  onChange={(e) =>
                    setNewSupplier({
                      ...newSupplier,
                      status: e.target.value
                    })
                  }
                >
                  <option value="On Time">On Time</option>
                  <option value="Delayed">Delayed</option>
                </select>
              </div>

              <div className="modal-actions">

                <button
                  className="btn-cancel"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </button>

                <button
                  className="btn-save"
                  onClick={handleAddSupplier}
                >
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

export default SupplyChain;