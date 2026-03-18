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

    const spreadsheetId = "1IzH_SGYKD4ERFQMOSmkiBgakqTSpTjg8vPfJbaO_unA";

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: "Sheet1!A:L",
    });

    const rows = response.data.values || [];
    const dataRows = rows.slice(1);

    const complaints = dataRows.map((row) => ({
      complaintId: row[0] || "",
      timestamp: row[1] || "",
      fullName: row[2] || "",
      mobile: row[3] || "",
      ward: row[4] || "",
      category: row[5] || "",
      description: row[6] || "",
      photoLink: row[7] || "",
      status: row[8] || "",
      notes: row[9] || "",
      assignedTo: row[10] || "",
      department: row[11] || "",
    }));

    return NextResponse.json({
      success: true,
      complaints,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      success: false,
      complaints: [],
    });
  }
}