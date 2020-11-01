import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import style from "@/assets/global-style"

const BtnMain = styled.button`
  width: 100%;
  font-size: ${style["font-size-xl"]};
  line-height: 44rem;
  text-align: center;
  border-radius: 6rem;
  margin: 30rem auto 10rem auto;
  box-sizing: border-box;
  opacity: ${props => props.disabled ? 0.5 : 1};

  &.primary-btn{
    background-color: ${style["theme-color"]};
    color: #fff;
  }
  &.info-btn{
    background-color: ${style["background-color"]};
    color: #777777;
    border: 1px solid ${style["border-color-v2"]};
  }

  &.medium-btn{
    width: 144rem;
  }
  &.small-btn{
    width: 88rem;
  }
  &.mini-btn{
    width: 64rem;
    line-height: 28rem;
    font-size: ${style["font-size-s"]};
    margin: 0 auto;
  }

`

const Btn = (props) => {
  const {type, size, disabled} = props;
  const {onClick} = props;
  
  return (
    <BtnMain onClick={onClick} className={`${type}-btn ${size}-btn`} disabled={disabled}>
      {props.children}
    </BtnMain>
  )
}

Btn.defaultProps = {
  type: "primary",
  size: "",
  disabled: false
}

Btn.propTypes = {
  type: PropTypes.oneOf(["primary", "info"]),
  size: PropTypes.oneOf(["", "medium", "small", "mini"]),
  disabled: PropTypes.bool
}

// const compare = (prev, next) => {
//   return prev.type === next.type && prev.size === next.size && prev.value === next.value && prev.disabled === next.disabled
// }

export default React.memo(Btn);