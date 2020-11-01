import React, {useState} from "react"
import styled from "styled-components"
import style from "@/assets/global-style"
import Pictures from "@/components/Pictures"
import Btn from "@/baseUI/Btn"
import Modal from "@/baseUI/Modal"

const Wrapper = styled.div`
  padding: ${style["padding"]};
  
  .main{
    border-radius: 6rem;
    padding: ${style["padding"]};
    background-color: #fff;
  }

  textarea{
    height: 240rem;
    line-height: 21rem;
  }
`


const Identity = (props) => {

  const [value, setValue] = useState("");
  const [pictures, setPictures] = useState([require("@/assets/images/1.jpg"), require("@/assets/images/1.jpg"), require("@/assets/images/1.jpg")]);
  const [showModal, setShowModal] = useState(false);

  const onSubmit = () => {
    console.log(props.match.params.category)
    console.log({value, pictures})
    setShowModal(true);
  }


  return (
    <Wrapper>
      <div className="main">
        <textarea
          placeholder="请如实说明您的身份，并提交图片证明" 
          onChange={(e) => setValue(e.target.value)}
          value={value}
        >
        </textarea>

        <Pictures pictures={pictures} onAppend={(value) => {setPictures(value)}}></Pictures>
      </div>
      
      <Btn type="primary" onClick={onSubmit} disabled={Boolean(!(value && pictures.length))}>
        确认提交
      </Btn>

      <Modal 
        show={showModal} 
        confirmText="返回" 
        title="您已成功提交审核材料，请等待系统审核，谢谢您的配合"
        onConfirm={() => {}}
      ></Modal>
    </Wrapper>
  )
}

export default React.memo(Identity)