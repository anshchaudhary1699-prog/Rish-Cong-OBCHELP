"use client";

import { useEffect, useState } from "react";

export default function AdminPage() {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState("");

  const [complaintId, setComplaintId] = useState("");
  const [status, setStatus] = useState("");
  const [notes, setNotes] = useState("");
  const [assignedTo, setAssignedTo] = useState("");
  const [department, setDepartment] = useState("");
  const [updateMessage, setUpdateMessage] = useState("");

  const [volunteerId, setVolunteerId] = useState("");
  const [volunteerStatus, setVolunteerStatus] = useState("");
  const [volunteerNotes, setVolunteerNotes] = useState("");
  const [volunteerUpdateMessage, setVolunteerUpdateMessage] = useState("");

  const [analytics, setAnalytics] = useState({
    totalComplaints: 0,
    pendingCases: 0,
    resolvedCases: 0,
    activeVolunteers: 0,
  });

  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        const response = await fetch("/api/analytics");
        const result = await response.json();

        if (result.success) {
          setAnalytics(result.stats);
        }
      } catch (error) {
        console.error("Admin analytics fetch failed", error);
      }
    };

    fetchAnalytics();
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (password === "admin123") {
      setAuthenticated(true);
    } else {
      alert("Wrong password");
    }
  };

  const handleUpdateComplaint = async () => {
    try {
      const response = await fetch("/api/admin/update-complaint", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          complaintId,
          status,
          notes,
          assignedTo,
          department,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setUpdateMessage("Complaint updated successfully");
      } else {
        setUpdateMessage(result.message || "Update failed");
      }
    } catch (error) {
      console.error(error);
      setUpdateMessage("Server error");
    }
  };

  const handleUpdateVolunteer = async () => {
    try {
      const response = await fetch("/api/admin/update-volunteer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          volunteerId,
          status: volunteerStatus,
          notes: volunteerNotes,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setVolunteerUpdateMessage("Volunteer updated successfully");
      } else {
        setVolunteerUpdateMessage(result.message || "Update failed");
      }
    } catch (error) {
      console.error(error);
      setVolunteerUpdateMessage("Server error");
    }
  };

  if (!authenticated) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-100 px-6">
        <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-xl">
          <h1 className="text-3xl font-black text-slate-900">Admin Login</h1>
          <p className="mt-2 text-sm text-slate-600">
            Enter password to access the admin panel.
          </p>

          <form onSubmit={handleLogin} className="mt-6 space-y-4">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter admin password"
              className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-orange-300"
            />

            <button
              type="submit"
              className="w-full rounded-2xl bg-slate-900 px-5 py-3 text-sm font-bold text-white shadow-lg"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 px-6 py-10 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-orange-600">
              Private Dashboard
            </p>
            <h1 className="mt-2 text-4xl font-black text-slate-900">
              Admin Panel
            </h1>
          </div>

          <button
            onClick={() => setAuthenticated(false)}
            className="rounded-2xl bg-red-600 px-5 py-3 text-sm font-bold text-white"
          >
            Logout
          </button>
        </div>

        <div className="mb-8 grid gap-6 md:grid-cols-4">
          <div className="rounded-3xl bg-white p-6 shadow-lg ring-1 ring-slate-200">
            <div className="text-sm font-bold uppercase tracking-[0.2em] text-slate-500">
              Total Complaints
            </div>
            <div className="mt-3 text-3xl font-black text-slate-900">
              {analytics.totalComplaints}
            </div>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-lg ring-1 ring-slate-200">
            <div className="text-sm font-bold uppercase tracking-[0.2em] text-slate-500">
              Pending Cases
            </div>
            <div className="mt-3 text-3xl font-black text-slate-900">
              {analytics.pendingCases}
            </div>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-lg ring-1 ring-slate-200">
            <div className="text-sm font-bold uppercase tracking-[0.2em] text-slate-500">
              Resolved Cases
            </div>
            <div className="mt-3 text-3xl font-black text-slate-900">
              {analytics.resolvedCases}
            </div>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-lg ring-1 ring-slate-200">
            <div className="text-sm font-bold uppercase tracking-[0.2em] text-slate-500">
              Active Volunteers
            </div>
            <div className="mt-3 text-3xl font-black text-slate-900">
              {analytics.activeVolunteers}
            </div>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl bg-white p-8 shadow-lg ring-1 ring-slate-200">
            <h2 className="text-2xl font-black text-slate-900">
              Complaint Management
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Search complaints, update status, mark resolved, and add notes.
            </p>

            <div className="mt-6 grid gap-4">
              <input
                value={complaintId}
                onChange={(e) => setComplaintId(e.target.value)}
                placeholder="Enter Complaint ID"
                className="rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-orange-300"
              />

              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-orange-300"
              >
                <option value="">Update Status</option>
                <option value="Pending">Pending</option>
                <option value="Under Review">Under Review</option>
                <option value="In Progress">In Progress</option>
                <option value="Resolved">Resolved</option>
              </select>

              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Add admin notes"
                className="min-h-[120px] rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-orange-300"
              />

              <input
                value={assignedTo}
                onChange={(e) => setAssignedTo(e.target.value)}
                placeholder="Assigned To"
                className="rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-orange-300"
              />

              <input
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                placeholder="Department"
                className="rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-orange-300"
              />

              <button
                onClick={handleUpdateComplaint}
                className="rounded-2xl bg-slate-900 px-5 py-3 text-sm font-bold text-white shadow-lg"
              >
                Save Changes
              </button>

              {updateMessage && (
                <div className="text-sm font-semibold text-green-600">
                  {updateMessage}
                </div>
              )}
            </div>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-lg ring-1 ring-slate-200">
            <h2 className="text-2xl font-black text-slate-900">
              Volunteer Management
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Review volunteer details and manage your growing campaign team.
            </p>

            <div className="mt-6 grid gap-4">
              <input
                value={volunteerId}
                onChange={(e) => setVolunteerId(e.target.value)}
                placeholder="Search Volunteer ID"
                className="rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-green-300"
              />

              <select
                value={volunteerStatus}
                onChange={(e) => setVolunteerStatus(e.target.value)}
                className="rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-green-300"
              >
                <option value="">Update Volunteer Status</option>
                <option value="New">New</option>
                <option value="Contacted">Contacted</option>
                <option value="Approved">Approved</option>
                <option value="Active">Active</option>
              </select>

              <textarea
                value={volunteerNotes}
                onChange={(e) => setVolunteerNotes(e.target.value)}
                placeholder="Add volunteer notes"
                className="min-h-[120px] rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-green-300"
              />

              <button
                onClick={handleUpdateVolunteer}
                className="rounded-2xl bg-green-600 px-5 py-3 text-sm font-bold text-white shadow-lg"
              >
                Update Volunteer
              </button>

              {volunteerUpdateMessage && (
                <div className="text-sm font-semibold text-green-600">
                  {volunteerUpdateMessage}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}