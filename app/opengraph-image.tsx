import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Nabil Zikri - Operations and admin, with a habit of building tools.";

export default function OpengraphImage() {
 return new ImageResponse(
 (
 <div
 style={{
 width: "100%",
 height: "100%",
 display: "flex",
 flexDirection: "column",
 justifyContent: "center",
 backgroundColor: "#faf8f4",
 padding: "80px",
 }}
 >
 <div style={{ display: "flex", width: 64, height: 6, backgroundColor: "#2f5e8e", marginBottom: 40 }} />
 <div style={{ display: "flex", fontSize: 22, letterSpacing: 4, color: "#9b958a", marginBottom: 26 }}>
 JOHOR BAHRU, MALAYSIA
 </div>
 <div style={{ display: "flex", fontSize: 66, lineHeight: 1.1, color: "#211f1b", fontWeight: 600, maxWidth: 920 }}>
 Operations and admin, with a habit of building tools.
 </div>
 <div style={{ display: "flex", fontSize: 26, color: "#6a655c", marginTop: 48 }}>
 Nabil Zikri / nzkbuild.xyz
 </div>
 </div>
 ),
 { ...size }
 );
}

