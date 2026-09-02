import { ImageResponse } from "next/og";
import { SITE_DESCRIPTION, SITE_TITLE } from "@/lib/site";

export const alt = SITE_TITLE;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const ACCENT = "#ff6a1a";
const BACKGROUND = "#0a0b08";
const FOREGROUND = "#e9e7db";
const MUTED = "#9a9a86";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: BACKGROUND,
        }}
      >
        <div
          style={{
            position: "relative",
            display: "flex",
            width: 200,
            height: 200,
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 44,
          }}
        >
          <div
            style={{
              display: "flex",
              width: 140,
              height: 140,
              borderRadius: "50%",
              border: `12px solid ${ACCENT}`,
            }}
          />
          <div
            style={{
              position: "absolute",
              display: "flex",
              width: 20,
              height: 20,
              borderRadius: "50%",
              background: ACCENT,
            }}
          />
          <div
            style={{ position: "absolute", top: 0, left: 94, display: "flex", width: 12, height: 34, background: ACCENT }}
          />
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 94,
              display: "flex",
              width: 12,
              height: 34,
              background: ACCENT,
            }}
          />
          <div
            style={{ position: "absolute", left: 0, top: 83, display: "flex", width: 34, height: 12, background: ACCENT }}
          />
          <div
            style={{
              position: "absolute",
              right: 0,
              top: 83,
              display: "flex",
              width: 34,
              height: 12,
              background: ACCENT,
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 92,
            fontWeight: 700,
            letterSpacing: -2,
            color: FOREGROUND,
            textTransform: "uppercase",
          }}
        >
          The Archive
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 32,
            color: MUTED,
            maxWidth: 920,
            textAlign: "center",
          }}
        >
          {SITE_DESCRIPTION}
        </div>
      </div>
    ),
    { ...size },
  );
}
