import React from "react"
import styled from "styled-components"
import style from "@/assets/global-style"

const Wrapper = styled.div`
  padding: ${style["padding"]};
  background-color: #fff;
`

const FeedbackCard = (props) => {
  return (
    <Wrapper>
      嗯嗯

    </Wrapper>
  )
}

export default React.memo(FeedbackCard);