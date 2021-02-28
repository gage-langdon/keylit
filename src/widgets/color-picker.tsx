import React from "react"

const COLORS = [
  {
    hex: "#FFFFFF",
    label: "Studio",
  },
  {
    hex: "#F4364C",
    label: "Campfire",
  },
  {
    hex: "#2AF5C9",
    label: "Breeze",
  },
  {
    hex: "#FFEF00",
    label: "Banana",
  },
  {
    hex: "#AC4FC6",
    label: "Ballard",
  },
  {
    hex: "#26D07C",
    label: "PNW",
  },
]

const ColorPicker: React.FC<{ onChange: Function; value: string }> = ({
  onChange,
  value,
}) => {
  const onClick = (el, value) => {
    onChange(value)
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "nowrap",
        gap: "7px",
        overflowX: "auto",
        // maxWidth: "200%",
        paddingLeft: "calc(50%)",
        paddingRight: "calc(50%)",
      }}
    >
      {COLORS.map(color => (
        <button
          key={color.hex}
          type="button"
          onClick={el => onClick(el, color.hex)}
          style={{ background: "none", border: "none", outline: "none" }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              backgroundColor: value,
            }}
          >
            <div
              style={{
                height: "3rem",
                width: "3rem",
                backgroundColor: color.hex,
                borderRadius: "50px",
                opacity: ".80",
                border: value === color.hex ? "white 3px solid" : undefined,
              }}
            />
          </div>
        </button>
      ))}
    </div>
  )
}

export default ColorPicker
