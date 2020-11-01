import React from "react"
import styled from "styled-components"
import {CSSTransition} from "react-transition-group"

const Wrapper = styled.div`
  position: absolute;
  top: 0; left: 0; bottom: 0; right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;

  &.fade-enter{
    opacity: 0;
    .popup-main{
      transform: scale(0.7);
    }
  }
  &.fade-enter-active{
    opacity: 1;
    transition: opacity .3s;
    .popup-main{
      transform: scale(1);
      transition: transform .3s;
    }
  }
  &.fade-exit-active{
    opacity: 0;
    transition: opacity .3s;
    .popup-main{
      transform: scale(0.7);
      transition: transform .3s;
    }
  }

  .popup-main{
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    margin: auto;
    min-height: 190rem;
    background-color: #fff;
    border-radius: 14px;
    width: 288rem;
    height: fit-content;
    padding: 14rem;
    box-sizing: border-box;
  }
`

const Popup = (props) => {
  const {show, onClose} = props;

  return (
    <CSSTransition in={show} unmountOnExit timeout={300} classNames="fade">
      <Wrapper onClick={() => {onClose()}}>
        <div className="popup-main" onClick={(e) => e.stopPropagation()}>
          {props.children}
        </div>
      </Wrapper>
    </CSSTransition>
  )
}

Popup.defaultProps = {
  onClose: () => {}
}

export default React.memo(Popup);