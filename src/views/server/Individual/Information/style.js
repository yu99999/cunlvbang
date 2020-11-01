import styled from "styled-components"
import style from "@/assets/global-style"

export const Wrapper = styled.div`
  background-color: #fff;
  padding: ${style["padding"]};
  box-sizing: border-box;
  height: 180rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 6rem;

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

  .bind{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .data{
    display: flex;
    justify-content: space-between;
    align-items: center;

    .data-item{
      display: flex;
      flex-direction: column;
      align-items: center;

      &>span:nth-child(1){
        font-size: ${style["font-size-l"]};
        margin-bottom: 5rem;
      }
    }

    .border{
      width: 2rem;
      height: 36rem;
      background-color: ${style["border-color"]};
    }
  }
`
