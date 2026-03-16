import { google } from "googleapis";
import { NextResponse } from "next/server";
import path from "path";

function generateVolunteerId() {
  const year = new Date().getFullYear();
  const random = Math.floor(1000 + Math.random() * 9000);
  return `VOL-${year}-${random}`;
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const volunteerId = generateVolunteerId();

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

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: "Sheet1!A:I",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [
          [
            volunteerId,
            new Date().toISOString(),
            body.name,
            body.mobile,
            body.age,
            body.area,
            body.skills,
            body.reason,
            "New",
          ],
        ],
      },
    });

    return NextResponse.json({
      success: true,
      volunteerId,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false });
  }
}