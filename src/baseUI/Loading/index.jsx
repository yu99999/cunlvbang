import React from "react"
import styled from "styled-components"
import loadingAnimation from "./loading.svg"

const Wrapper = styled.div`
  position: fixed;
  z-index: 999;
  top: 0; left: 0; right: 0; bottom: 0;
  background-color: rgba(235, 235, 235, 0.4);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img{
    width: 150rem;
    height: 150rem;
  }
`

const Loading = (props) => {
  const {loading} = props;

  return (
    <>
    {
      loading ? (
        <Wrapper>
          <img src={loadingAnimation} alt=""/>
        </Wrapper>
      ) : null
    }
    </>
  )
}

export default React.memo(Loading);