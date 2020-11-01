import styled from "styled-components"
import style from "@/assets/global-style"

export const TabsChannel = styled.div`
  width: 100%;
  position: sticky;
  top: 0; left: 0;
  height: 42rem;
  display: flex;
  justify-content: space-around;
  text-align: center;

  .channel-item{
    flex: 1;
    line-height: 42rem;

    &.channel-item-select{
      color: ${style["theme-color"]};
    }
  }

  .underline{
    width: 33.3%;
    height: 1px;
    background-color: ${style["theme-color"]};
    position: absolute;
    bottom: 0;
    left: ${props => props.current*33.3 + "%"};
    transition: all .3s;
  }
`

export const TabsPane = styled.div`
  width: 100%;
  overflow: hidden;

  .pane-items{
    white-space: nowrap;
    transition: all .3s;
    transform: ${props => `translateX(${-100*props.current}%)`};
  }

  .pane-item{
    width: 100%;
    display: inline-block;
  }
`