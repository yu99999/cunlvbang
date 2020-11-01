import React from "react"
import styled from "styled-components"
import style from "@/assets/global-style"
import {connect} from "react-redux"
import {changeLeft} from "./store/action"

const Wrapper = styled.div`
  background-color: ${style["theme-color"]};
  font-size: ${style["font-size-l"]};
  padding: 0 16rem;
  height: 46rem;
  line-height: 46rem;
  box-sizing: border-box;
  position: relative;

  &>div{
    color: #fff;
  }
  .iconfont{
    margin-right: 4rem;
    color: #fff;
    font-size: 17rem;
  }
  .title{
    position: absolute;
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);
  }
`

const NavBar = (props) => {
  const {title, showLeft} = props;
  const {changeLeftDispatch} = props;

  const onClick = () => {
    changeLeftDispatch(false);
  }

  return (
    <Wrapper>
      <div onClick={onClick}>
        {
          showLeft && <><span className="iconfont">&#xe67e;</span>返回</>
        }
      </div>
      <div className="title">{title}</div>
    </Wrapper>
  )
}

const mapStateToProps = (state) => {
  return {
    title: state.navBar.title,
    showLeft: state.navBar.left
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    changeLeftDispatch(data){
      dispatch(changeLeft(data));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(NavBar));