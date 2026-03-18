import { google } from "googleapis";
import { NextResponse } from "next/server";
import path from "path";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const complaintId = (body.complaintId || "").trim();
    const status = body.status || "";
    const notes = body.notes || "";
    const assignedTo = body.assignedTo || "";
    const department = body.department || "";

    const auth = new google.auth.GoogleAuth({
      keyFile: path.join(
        process.cwd(),
        "keys/rishikesh-complaint-system-9678c3c43baa.json"
      ),
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
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

    if (rows.length < 2) {
      return NextResponse.json({
        success: false,
        message: "No complaints found",
      });
    }

    const rowIndex = rows.findIndex(
      (row, index) => index > 0 && row[0] === complaintId
    );

    if (rowIndex === -1) {
      return NextResponse.json({
        success: false,
        message: "Complaint ID not found",
      });
    }

    const actualSheetRow = rowIndex + 1;

    await sheets.spreadsheets.values.update({
      spreadsheetId,
      range: `Sheet1!I${actualSheetRow}:L${actualSheetRow}`,
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[status, notes, assignedTo, department]],
      },
    });

    return NextResponse.json({
      success: true,
      message: "Complaint updated successfully",
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      success: false,
      message: "Server error",
    });
  }
}