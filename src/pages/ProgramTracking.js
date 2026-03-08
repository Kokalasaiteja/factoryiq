import React, { useState } from "react";
import AddProgramModal from "../components/AddProgramModal";
import "../styles/dashboard.css";

const ProgramTracking = () => {
  const [programs, setPrograms] = useState([
    { id: 1, programName: "Factory Automation", customer: "Tesla", startDate: "2026-01-10", endDate: "2026-06-15", progress: "65%", status: "on-track", tasks: 12 },
    { id: 2, programName: "EV Battery Line", customer: "Ford", startDate: "2026-02-01", endDate: "2026-08-30", progress: "40%", status: "at-risk", tasks: 8 },
    { id: 3, programName: "Robotics Integration", customer: "BMW", startDate: "2025-11-15", endDate: "2026-04-20", progress: "85%", status: "on-track", tasks: 15 },
    { id: 4, programName: "Solar Panel Assembly", customer: "Siemens", startDate: "2026-03-01", endDate: "2026-09-15", progress: "25%", status: "on-track", tasks: 6 },
    { id: 5, programName: "Medical Device Line", customer: "Abbott", startDate: "2026-01-20", endDate: "2026-07-30", progress: "55%", status: "on-track", tasks: 10 }
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddProgram = (newProgram) => {
    setPrograms([...programs, { ...newProgram, id: Date.now() }]);
  };

  const handleDelete = (id) => {
    setPrograms(programs.filter((p) => p.id !== id));
  };

  const exportToCSV = () => {
    const headers = [
      "Program Name",
      "Customer",
      "Start Date",
      "End Date",
      "Progress",
      "Status",
      "Tasks"
    ];

    const rows = programs.map((p) => [
      p.programName,
      p.customer,
      p.startDate,
      p.endDate,
      p.progress,
      p.status,
      p.tasks
    ]);

    const csvContent = [headers, ...rows]
      .map((row) => row.join(","))
      .join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");

    link.href = URL.createObjectURL(blob);
    link.download = "programs_export.csv";
    link.click();
  };

  const getStatusClass = (status) => {
    if (status === "on-track") return "status-green";
    if (status === "at-risk") return "status-yellow";
    return "status-red";
  };

  return (
    <div className="dashboard">
      {/* Header */}
      <div className="dashboard-header">
        <div className="dashboard-header-left">
          <h1 className="dashboard-title">Program Tracking</h1>
          <p className="dashboard-subtitle">
            Monitor and manage ongoing programs
          </p>
        </div>

        <div className="dashboard-header-right">
          <button
            className="btn btn-primary"
            onClick={() => setIsModalOpen(true)}
          >
            + Add Program
          </button>

          <button className="btn btn-secondary" onClick={exportToCSV}>
            Export Data
          </button>
        </div>
      </div>

      {/* Table Card */}
      <div className="card">
        <div className="card-header">
          <h3 className="card-title">Active Programs</h3>
        </div>

        <div className="card-body">
          <table className="data-table">
            <thead>
              <tr>
                <th>Program Name</th>
                <th>Customer</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Progress</th>
                <th>Status</th>
                <th>Tasks</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {programs.map((program) => (
                <tr key={program.id}>
                  <td>
                    <strong>{program.programName}</strong>
                  </td>

                  <td>{program.customer}</td>

                  <td>{program.startDate}</td>

                  <td>{program.endDate}</td>

                  <td>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px"
                      }}
                    >
                      <div
                        style={{
                          width: "60px",
                          height: "6px",
                          background: "#e2e8f0",
                          borderRadius: "3px",
                          overflow: "hidden"
                        }}
                      >
                        <div
                          style={{
                            width: program.progress,
                            height: "100%",
                            background:
                              program.status === "on-track"
                                ? "#22c55e"
                                : "#f59e0b"
                          }}
                        ></div>
                      </div>

                      <span>{program.progress}</span>
                    </div>
                  </td>

                  <td>
                    <span
                      className={`status-badge ${getStatusClass(
                        program.status
                      )}`}
                    >
                      {program.status === "on-track"
                        ? "On Track"
                        : program.status === "at-risk"
                        ? "At Risk"
                        : "Behind"}
                    </span>
                  </td>

                  <td>{program.tasks}</td>

                  <td>
                    <button
                      className="btn-delete"
                      onClick={() => handleDelete(program.id)}
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

      <AddProgramModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleAddProgram}
      />
    </div>
  );
};

export default ProgramTracking;