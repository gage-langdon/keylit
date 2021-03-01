import React, { useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ColorPicker from "../widgets/color-picker"

const IndexPage = () => {
  const [selectedColor, setbgColor] = useState({
    hex: "#FFFFFF",
    label: "Studio",
    secondaryColor: "grey",
  })
  const { hex: backgroundColor, secondaryColor } = selectedColor

  return (
    <Layout>
      <SEO
        title="A key light for Zoom, FaceTime, and TikTok videos"
        description="A free keylight to light your face in a Zoom, FaceTime, or TikTok video"
      />
      <div
        style={{
          backgroundColor,
          height: "calc(100vh)",
          width: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            marginBottom: "auto",
            paddingTop: "16px",
            display: "flex",
            flexDirection: "column",
            marginLeft: "auto",
            width: "100%",
          }}
        >
          <ColorPicker onChange={setbgColor} value={selectedColor} />
          <div
            style={{
              bottom: 0,
              position: "fixed",
              display: "flex",
              width: "100%",
              paddingBottom: "7px",
              backgroundColor,
            }}
          >
            <a
              href="https://gage-langdon.com"
              style={{
                textDecoration: "none",
                color: secondaryColor || "white",
                marginTop: "7px",
                marginRight: "7px",
                marginLeft: "auto",
              }}
            >
              @gage-langdon
            </a>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
