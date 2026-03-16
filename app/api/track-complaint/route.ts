import { google } from "googleapis";
import { NextResponse } from "next/server";
import path from "path";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const complaintId = (body.complaintId || "").trim();

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
      range: "Sheet1!A:J",
    });

    const rows = response.data.values || [];

    if (rows.length < 2) {
      return NextResponse.json({ success: false, message: "No complaints found" });
    }

    const foundRow = rows.find((row, index) => index > 0 && row[0] === complaintId);

    if (!foundRow) {
      return NextResponse.json({
        success: false,
        message: "Complaint ID not found",
      });
    }

    return NextResponse.json({
      success: true,
      complaint: {
        complaintId: foundRow[0] || "",
        timestamp: foundRow[1] || "",
        fullName: foundRow[2] || "",
        mobile: foundRow[3] || "",
        ward: foundRow[4] || "",
        category: foundRow[5] || "",
        description: foundRow[6] || "",
        photoLink: foundRow[7] || "",
        status: foundRow[8] || "",
        notes: foundRow[9] || "",
      },
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      success: false,
      message: "Server error",
    });
  }
}