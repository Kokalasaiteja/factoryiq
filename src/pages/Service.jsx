import React, { useState } from "react";
import "../styles/dashboard.css";

const Service = () => {
  const [tickets, setTickets] = useState([
    { id: "ST-101", customer: "ABB", issue: "Machine Failure", status: "Open", date: "2026-03-05" },
    { id: "ST-102", customer: "Siemens", issue: "Maintenance Request", status: "Closed", date: "2026-03-03" },
    { id: "ST-103", customer: "Bosch", issue: "Software Update Needed", status: "Open", date: "2026-03-04" },
    { id: "ST-104", customer: "Schneider", issue: "Parts Replacement", status: "In Progress", date: "2026-03-02" },
    { id: "ST-105", customer: "Honeywell", issue: "Performance Issue", status: "Open", date: "2026-03-01" }
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [newTicket, setNewTicket] = useState({
    ticketId: "",
    customer: "",
    issue: "",
    status: "Open",
    date: ""
  });

  const handleAddTicket = () => {
    if (newTicket.ticketId && newTicket.customer && newTicket.issue && newTicket.date) {
      setTickets([...tickets, { ...newTicket, id: newTicket.ticketId }]);

      setNewTicket({
        ticketId: "",
        customer: "",
        issue: "",
        status: "Open",
        date: ""
      });

      setIsModalOpen(false);
    }
  };

  const handleDelete = (id) => {
    setTickets(tickets.filter((t) => t.id !== id));
  };

  const getStatusClass = (status) => {
    if (status === "Open") return "status-red";
    if (status === "In Progress") return "status-yellow";
    return "status-green";
  };

  return (
    <div className="dashboard">

      {/* Header */}
      <div className="dashboard-header">
        <h1 className="dashboard-title">Service</h1>
        <p className="dashboard-subtitle">After-sales service and support</p>
      </div>

      {/* Status Cards */}
      <div className="status-summary">

        <div className="status-card yellow">
          <div className="status-icon">🎫</div>
          <div className="status-info">
            <h3>{tickets.filter((t) => t.status === "Open").length}</h3>
            <p>Open Tickets</p>
          </div>
        </div>

        <div className="status-card green">
          <div className="status-icon">✓</div>
          <div className="status-info">
            <h3>88%</h3>
            <p>Customer Satisfaction</p>
          </div>
        </div>

        <div className="status-card yellow">
          <div className="status-icon">⏱</div>
          <div className="status-info">
            <h3>4.2h</h3>
            <p>Avg Response Time</p>
          </div>
        </div>

      </div>

      {/* Tickets Table */}
      <div className="card">

        <div className="card-header">
          <h3 className="card-title">Service Tickets</h3>

          <button
            className="btn btn-primary"
            onClick={() => setIsModalOpen(true)}
          >
            + Add Service Ticket
          </button>
        </div>

        <div className="card-body">
          <table className="data-table">

            <thead>
              <tr>
                <th>Ticket ID</th>
                <th>Customer</th>
                <th>Issue</th>
                <th>Status</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {tickets.map((ticket) => (
                <tr key={ticket.id}>
                  <td><strong>{ticket.id}</strong></td>
                  <td>{ticket.customer}</td>
                  <td>{ticket.issue}</td>

                  <td>
                    <span className={`status-badge ${getStatusClass(ticket.status)}`}>
                      {ticket.status}
                    </span>
                  </td>

                  <td>{ticket.date}</td>

                  <td>
                    <button
                      className="btn-delete"
                      onClick={() => handleDelete(ticket.id)}
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
              <h2>Add Service Ticket</h2>

              <button
                className="modal-close"
                onClick={() => setIsModalOpen(false)}
              >
                ×
              </button>
            </div>

            <div className="modal-form">

              <div className="form-group">
                <label>Ticket ID</label>
                <input
                  type="text"
                  value={newTicket.ticketId}
                  onChange={(e) =>
                    setNewTicket({ ...newTicket, ticketId: e.target.value })
                  }
                  placeholder="e.g., ST-106"
                />
              </div>

              <div className="form-group">
                <label>Customer</label>
                <input
                  type="text"
                  value={newTicket.customer}
                  onChange={(e) =>
                    setNewTicket({ ...newTicket, customer: e.target.value })
                  }
                  placeholder="Enter customer name"
                />
              </div>

              <div className="form-group">
                <label>Issue</label>
                <input
                  type="text"
                  value={newTicket.issue}
                  onChange={(e) =>
                    setNewTicket({ ...newTicket, issue: e.target.value })
                  }
                  placeholder="Describe the issue"
                />
              </div>

              <div className="form-group">
                <label>Status</label>
                <select
                  value={newTicket.status}
                  onChange={(e) =>
                    setNewTicket({ ...newTicket, status: e.target.value })
                  }
                >
                  <option value="Open">Open</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Closed">Closed</option>
                </select>
              </div>

              <div className="form-group">
                <label>Date</label>
                <input
                  type="date"
                  value={newTicket.date}
                  onChange={(e) =>
                    setNewTicket({ ...newTicket, date: e.target.value })
                  }
                />
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
                  onClick={handleAddTicket}
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

export default Service;