import React, { useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { TwitterPicker } from "react-color"
import ColorPicker from "../widgets/color-picker"

const IndexPage = () => {
  const [backgroundColor, setbgColor] = useState("#f78da7")

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
            marginTop: "auto",
            paddingBottom: "16px",
            display: "flex",
            flexDirection: "column",
            marginLeft: "auto",
            bottom: 0,
            width: "100%",
          }}
        >
          <ColorPicker onChange={setbgColor} value={backgroundColor} />
          {/* <div>
            <a
              href="https://gage-langdon.com"
              style={{
                textDecoration: "none",
                color: "white",
                marginTop: "7px",
                filter: "invert(100%)",
              }}
            >
              @gage-langdon
            </a>
          </div> */}
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
