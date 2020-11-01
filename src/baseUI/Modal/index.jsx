import React from "react"
import Popup from "../Popup"
import Btn from "../Btn"
import styled from "styled-components"
import style from "@/assets/global-style"

const ModalWrapper = styled.div`
  height: 170rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h3{
    font-size: ${style["font-size-xl"]};
  }
  .btns{
    display: flex;
    justify-content: space-around;
  }
`

const Modal = (props) => {
  const {show, title, showCancel, confirmText, cancelText} = props;
  const {onConfirm, onCancel} = props;

  return (
    <Popup show={show}>
      <ModalWrapper>
        <h3>{title}</h3>

        <div className="btns">
          {
            showCancel && <Btn type="info" size="small" onClick={onCancel}>{cancelText}</Btn>
          }
          <Btn type="primary" size={showCancel ? "small" : "medium"} onClick={onConfirm}>{confirmText}</Btn>
        </div>
      </ModalWrapper>
    </Popup>
  )
}

Modal.defaultProps = {
  showCancel: false,
  confirmText: "确认",
  cancelText: "取消",
  onConfirm: () => {},
  onCancel: () => {}
}

export default React.memo(Modal);