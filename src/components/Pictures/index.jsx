import React from "react"
import styled from "styled-components"
import style from "@/assets/global-style"

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  .picture-item{
    width: 30%;
    position: relative;
    height: 0;
    padding-bottom: 30%;
    border-radius: 6rem;
    margin-right: 3%;
    margin-bottom: 3%;

    img{
      position: absolute;
      top: 0; left: 0;
      width: 100%; height: 100%;

    }
  }

  .append{
    position: relative;
    background-color: #E5E5E5;
    display: block;

    input{
      position: absolute;
      top: 0; left: 0;
      width: 100%; height: 100%;
      opacity: 0;
    }

    &::before{
      ${style["posAbsCenter"]};
      content: "";
      width: 4rem; height: 44rem;
      border-radius: 2rem;
      background-color: #999999;
    }
    &::after{
      ${style["posAbsCenter"]};
      content: "";
      width: 44rem; height: 4rem;
      border-radius: 2rem;
      background-color: #999999;
    }
  }

`

const Pictures = (props) => {
  const {pictures} = props;
  // const {onAppend} = props;

  const appendPicture = (e) => {
    e.persist();
    console.log(e.target.files)
    // onAppend();
  }

  return (
    <Wrapper>
      {
        pictures.map((value, index) => {
          return (
            <div className="picture-item" key={index}>
              <img src={value} alt=""></img>
            </div>
          )
        })
      }
      <div className="picture-item append">
        <input type="file" accept="image/*" onChange={appendPicture} />
      </div>
    </Wrapper>
  )
}

Pictures.defaultProps = {
  pictures: []
}

export default React.memo(Pictures)