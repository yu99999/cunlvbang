import styled from "styled-components"
import style from "@/assets/global-style"

export const TagWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const Tag = styled.div`
  border: 1rem solid ${props => props.unselected ? style["border-color"] : style["theme-color"]};
  border-radius: 12rem;
  line-height: 24rem;
  padding: 0 12rem;
  color: ${props => props.unselected ? "#999" : style["theme-color"]};
  margin: 0 10rem 10rem 0;
`