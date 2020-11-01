import styled from "styled-components"
import style from "@/assets/global-style"

export const CardWrapper = styled.div`
  background-color: #fff;
  border-radius: 8rem;
  padding: ${style["padding"]};
  display: flex;
  flex-direction: column;
  line-height: 35rem;

  &>div{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .status::before{
    content: "";
    width: 12rem; height: 12rem;
    border-radius: 50%;
    display: inline-block;
    margin-bottom: -2rem;
    margin-right: 12rem;
  }

  .success-status{
    color: ${style["success-color"]};
    &::before{
      background-color: ${style["success-color"]};
    }
  }

  .warn-status{
    color: ${style["warn-color"]};
    &::before{
      background-color: ${style["warn-color"]};
    }
  }
  
  .danger-status{
    color: ${style["danger-color"]};
    &::before{
      background-color: ${style["danger-color"]};
    }
  }

`