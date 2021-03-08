import React, { useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ColorPicker from "../widgets/color-picker"

const IndexPage = () => {
  const [selectedColor, setbgColor] = useState({
    hex: "#ddb892",
    label: "Studio",
    secondaryColor: "white",
    textColor: "black",
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
        </div>
        <footer style={{ position: "fixed", bottom: 0 }}>
          <div
            style={{
              bottom: 0,
              position: "fixed",
              display: "flex",
              width: "100%",
              paddingRight: "16px",

              backgroundColor,
            }}
          >
            <a
              href="https://www.buymeacoffee.com/gagelangdon"
              target="_blank"
              style={{ marginLeft: "auto" }}
            >
              <img
                src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
                alt="Buy Me A Coffee"
                style={{
                  height: "50px !important",
                  width: "200px !important",
                }}
              />
            </a>
          </div>
        </footer>
      </div>
    </Layout>
  )
}

export default IndexPage
