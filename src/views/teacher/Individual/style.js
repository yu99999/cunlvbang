import styled from "styled-components"
import style from "@/assets/global-style"

export const Wrapper = styled.div`
  padding: ${style["padding"]};
  background-color: #fff;

  .info{
    display: flex;

    img{
      width: 56rem;
      height: 56rem;
      border-radius: 4rem;
      margin-right: 30rem;
    }

    &>div{
      display: flex;
      flex-direction: column;
      justify-content: space-around;

      &>span:nth-child(1){
        font-size: ${style["font-size-xl"]};
        font-weight: bold;
      }
    }
  }
  
`

export const Teams = styled.div`
  
  .teammate{
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin-top: ${style["padding"]};

    .operation{
      display: flex;

      button+button{
        margin-left: 14rem;
      }
    }
  }
`