import { google } from "googleapis";
import { NextResponse } from "next/server";
import path from "path";

export async function GET() {
  try {
    const auth = new google.auth.GoogleAuth({
      keyFile: path.join(
        process.cwd(),
        "keys/rishikesh-complaint-system-9678c3c43baa.json"
      ),
      scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
    });

    const sheets = google.sheets({
      auth,
      version: "v4",
    });

    const complaintSheetId = "1IzH_SGYKD4ERFQMOSmkiBgakqTSpTjg8vPfJbaO_unA";
    const volunteerSheetId = "15FWxtqNkaB83i-YWuZ4V83kmHXkxpTjWuEqwYWqCXVg";

    const complaintsResponse = await sheets.spreadsheets.values.get({
      spreadsheetId: complaintSheetId,
      range: "Sheet1!A:J",
    });

    const volunteersResponse = await sheets.spreadsheets.values.get({
      spreadsheetId: volunteerSheetId,
      range: "Sheet1!A:I",
    });

    const complaintRows = complaintsResponse.data.values || [];
    const volunteerRows = volunteersResponse.data.values || [];

    const complaints = complaintRows.slice(1);
    const volunteers = volunteerRows.slice(1);

    const totalComplaints = complaints.length;

    const pendingCases = complaints.filter((row) =>
      (row[8] || "").toLowerCase().includes("pending")
    ).length;

    const resolvedCases = complaints.filter((row) =>
      (row[8] || "").toLowerCase().includes("resolved")
    ).length;

    const activeVolunteers = volunteers.length;

    return NextResponse.json({
      success: true,
      stats: {
        totalComplaints,
        pendingCases,
        resolvedCases,
        activeVolunteers,
      },
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      success: false,
      stats: {
        totalComplaints: 0,
        pendingCases: 0,
        resolvedCases: 0,
        activeVolunteers: 0,
      },
    });
  }
}