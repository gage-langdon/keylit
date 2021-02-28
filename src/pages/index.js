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
          height: "100vh",
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
            justifyContent: "space-between",
          }}
        >
          <div style={{ marginTop: "auto" }}>
            <a
              href="https://gage-langdon.com"
              style={{ textDecoration: "none", color: "white" }}
            >
              @gage-langdon
            </a>
          </div>
          <TwitterPicker onChange={setbgColor} triangle={false} />
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
