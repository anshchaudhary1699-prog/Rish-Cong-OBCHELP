import { google } from "googleapis";
import { NextResponse } from "next/server";
import path from "path";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const volunteerId = (body.volunteerId || "").trim();
    const status = body.status || "";
    const notes = body.notes || "";

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

    const spreadsheetId = "15FWxtqNkaB83i-YWuZ4V83kmHXkxpTjWuEqwYWqCXVg";

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: "Sheet1!A:J",
    });

    const rows = response.data.values || [];

    if (rows.length < 2) {
      return NextResponse.json({
        success: false,
        message: "No volunteers found",
      });
    }

    const rowIndex = rows.findIndex(
      (row, index) => index > 0 && row[0] === volunteerId
    );

    if (rowIndex === -1) {
      return NextResponse.json({
        success: false,
        message: "Volunteer ID not found",
      });
    }

    const actualSheetRow = rowIndex + 1;

    await sheets.spreadsheets.values.update({
      spreadsheetId,
      range: `Sheet1!I${actualSheetRow}:J${actualSheetRow}`,
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[status, notes]],
      },
    });

    return NextResponse.json({
      success: true,
      message: "Volunteer updated successfully",
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      success: false,
      message: "Server error",
    });
  }
}