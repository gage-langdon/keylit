import React, { useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ColorPicker from "../widgets/color-picker"

const IndexPage = () => {
  const defaultColorOnLoad = "black"
  const [selectedColor, setbgColor] = useState({ hex: defaultColorOnLoad })
  const backgroundColor = selectedColor.hex
  const secondaryColor = selectedColor.secondaryColor

  return (
    <>
      <Layout>
        <SEO
          title="A key light for Zoom, FaceTime, and TikTok videos"
          description="A free keylight to light your face in a Zoom, FaceTime, or TikTok video"
        />
        <div
          style={{
            backgroundColor: backgroundColor,
            height: "calc(100vh)",
            width: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
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
          </div>
        </div>
      </Layout>
      <div
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          width: "100vw",
          color: secondaryColor || "white",
          paddingRight: "7px",
          textAlign: "end",
          fontSize: "9px",
        }}
      >
        Built by Ian and Gage
      </div>
    </>
  )
}

export default IndexPage
