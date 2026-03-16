import { google } from "googleapis";
import { NextResponse } from "next/server";
import path from "path";

function generateComplaintId() {
  const year = new Date().getFullYear();
  const random = Math.floor(1000 + Math.random() * 9000);
  return `RISH-${year}-${random}`;
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const complaintId = generateComplaintId();

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

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: "Sheet1!A:I",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [
          [
            complaintId,
            new Date().toISOString(),
            body.name,
            body.mobile,
            body.ward,
            body.category,
            body.description,
            body.photo,
            "Pending",
          ],
        ],
      },
    });

    return NextResponse.json({
      success: true,
      complaintId,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false });
  }
}