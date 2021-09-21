import React, { useState, useEffect } from "react"

const COLORS = [
  {
    hex: "#FFFFFF",
    secondaryColor: "black",
  },
  {
    hex: "#ddb892",
  },
 
  {
    hex: "#F4364C",
  },
  {
    hex: "#eb9336",
  },
  {
    hex: "#c4f5f3",
    secondaryColor: "#2b3b3a",
  } 

]

const ColorPicker: React.FC<{
  onChange: Function
  value: { hex: string; secondaryColor: string }
}> = ({ onChange, value }) => {
  const [helpTextActive, setHelpTextActive] = useState(true)

  // scroll through colors animation at start

  useEffect(() => {
    // onHelp()
  }, [])

  // const colorScrollAnim = async () => {
  //   for (let i = 0; i < COLORS.length; i++) {
  //     onChange(COLORS[i])
  //     await new Promise(r => setTimeout(r, 100))
  //     document.getElementById(COLORS[i].hex).scrollIntoView()
  //   }
  //   onHelp()
  // }

  const onHelp = () => {
    onChange({ hex: "black" })
    setHelpTextActive(true)
    document.getElementById("helpBtn").scrollIntoView()
  }

  const onColorSelect = color => {
    setHelpTextActive(false)
    onChange(color)
  }

  return (
    <>
      <div style={{}}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "start",
            flexWrap: "nowrap",
            gap: "7px",
            maxWidth: "100vw",
            paddingTop: "7px",
            paddingLeft: "12px",
            position: "fixed",
             overflowX: "auto",
             scrollbarWidth: "none",
          }}
        >
          {COLORS.map(color => (
            <button
              key={color.hex}
              id={color.hex}
              type="button"
              onClick={() => onColorSelect(color)}
              style={{
                background: "none",
                border: "none",
                outline: "none",
                cursor: "pointer",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  backgroundColor: value.hex,
                }}
              >
                <div
                  style={{
                    height: "3rem",
                    width: "3rem",
                    backgroundColor: color.hex,
                    borderRadius: "50px",
                    opacity: ".80",
                    border:
                      value.hex === color.hex
                        ? `${color.secondaryColor || "white"} 3px solid`
                        : undefined,
                  }}
                />
              </div>
            </button>
          ))}
          <button
            id="helpBtn"
            type="button"
            onClick={onHelp}
            style={{
              background: "none",
              border: "none",
              outline: "none",
              cursor: "pointer",
              backgroundColor: value.hex,
            }}
          >
            <div
              style={{
                height: "3rem",
                width: "3rem",
                borderRadius: "50px",
                opacity: ".85",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
                fontSize: "2rem",
                color: value.secondaryColor || "white",
                border: value.hex === "black" ? `grey 3px solid` : undefined,
              }}
            >
              ?
            </div>
          </button>
        </div>
      </div>
      {helpTextActive ? (
        <div
          style={{
            color: "white",
            height: "100vh",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{ width: "75%", opacity: ".84" }}>
            <h1>Keylit.app</h1>
            <p>
              Use this app on a secondary monitor or position the window behind
              your video call to add light to your face
            </p>
            <p style={{ opacity: ".60" }}>
              - A <b>keylight</b> is the most important light that a
              photographer utilizes to highlight the form and dimension of the
              subject
            </p>
          </div>
        </div>
      ) : undefined}
    </>
  )
}

export default ColorPicker
