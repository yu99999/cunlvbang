import React from "react"
import styled from "styled-components"
import style from "@/assets/global-style"

const BtnStyle = styled.div`
  width: 80rem; height: 28rem;
  background-color: #fff;
  line-height: 28rem;
  outline: none;
  font-size: ${style["font-size-s"]};
  border: 1px solid ${style["border-color"]};
  border-radius: 18rem;
  letter-spacing: 1rem;
  text-align: center;
  overflow: visible;

  &::after{
    border-radius: 40rem;
  }

  &.question{
    position: relative;
    &::before{
      content: "";
      width: 12rem; height: 12rem;
      border-radius: 50%;
      display: inline-block;
      background-color: ${style["danger-color"]};
      position: absolute;
      top: -5px; right: 0;
      z-index: 1;
    }
  }
`

const CardButton = (props) => {
  const {onClick} = props;

  return (
    <BtnStyle onClick={onClick}>
      {props.children}
    </BtnStyle>
  )
}

export default React.memo(CardButton);