
const noWrap = (row) => {
  return `
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    word-wrap: break-word;
    -webkit-box-orient:vertical;
    -webkit-line-clamp:${row};
  `
}

const posAbsCenter = () => {
  return `
    position: absolute;
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);
  `
}

export default {
  "theme-color": "#5098FA",
  "warn-color": "#FF7D58",
  "success-color": "#52C4B0",
  "danger-color": "#F2534B",
  "border-color": "#D7D7D7",
  "border-color-v2": "#C8C8C8",
  "background-color": "#DEDEDE",
  "font-color-thin": "#999999",
  "font-size-ss": "10rem",
  "font-size-s": "12rem",
  "font-size-m": "14rem",
  "font-size-l": "16rem",
  "font-size-xl": "18rem",
  "padding": "14rem",
  noWrap,
  posAbsCenter
}