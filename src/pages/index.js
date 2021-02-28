import React, { useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { TwitterPicker } from "react-color"

const IndexPage = () => {
  const [{ hex: backgroundColor }, setbgColor] = useState({ hex: "#f78da7" })

  return (
    <Layout>
      <SEO
        title="A key light for Zoom, FaceTime, and TikTok videos"
        description="A free keylight to light your face in a Zoom, FaceTime, or TikTok video"
      />
      <div
        style={{
          backgroundColor,
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            marginTop: "auto",
            padding: "16px",
            display: "flex",
            flexDirection: "column",
            marginLeft: "auto",
            position: "fixed",
            bottom: 0,
          }}
        >
          <TwitterPicker onChange={setbgColor} triangle="hide" />
          <div>
            <a
              href="https://gage-langdon.com"
              style={{
                textDecoration: "none",
                color: "white",
                marginTop: "7px",
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
