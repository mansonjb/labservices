import { ImageResponse } from "next/og";

export const alt = "LAB Services — Logisticiens, Architectes & Bâtisseurs d'événements";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(140deg, #141414 0%, #232323 60%, #2c2c2c 100%)",
          padding: "70px",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div style={{ display: "flex", fontSize: 46, fontWeight: 900, letterSpacing: -1 }}>
            LAB<span style={{ color: "#e00028" }}>.</span>
          </div>
          <div style={{ display: "flex", fontSize: 18, letterSpacing: 8, color: "#b7b7b7" }}>SERVICES</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", width: 90, height: 8, background: "#e00028", borderRadius: 4, marginBottom: 28 }} />
          <div style={{ display: "flex", fontSize: 62, fontWeight: 900, lineHeight: 1.05, maxWidth: 940 }}>
            On bâtit l&apos;événement dont vos invités parleront encore dans un an.
          </div>
        </div>

        <div style={{ display: "flex", fontSize: 26, color: "#cfcfcf" }}>
          Logistique · Conception · Production événementielle — Le Mans &amp; Paris
        </div>
      </div>
    ),
    { ...size }
  );
}
