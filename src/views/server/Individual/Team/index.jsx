import React from "react"
import styled from "styled-components"
import style from "@/assets/global-style"
import Btn from "@/baseUI/Btn"

const Wrapper = styled.div`
  background-color: #fff;
  padding: ${style["padding"]};
  margin-top: ${style["padding"]};

  .title{
    font-weight: bold;
    font-size: ${style["font-size-xl"]};
  }

  .main{

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
  }
`

const Team = (props) => {
  const {teammates} = props;

  return (
    <Wrapper>
      <div className="title">当前团队人数 2/5</div>
      <div className="main">
        {
          teammates.map((item, index) => {
            return (
              item.isApply ? 
              <div className="teammate" key={item.id}>
                {item.name}申请加入你的团队
                <div className="operation">
                  <Btn type="primary" size="mini" onClick={() => {}}>同意加入</Btn>
                  <Btn type="info" size="mini" onClick={() => {}}>拒绝加入</Btn>
                </div>
              </div>
              :
              <div className="teammate" key={item.id}>
                队员：{item.name}
                <div className="operation">
                  <Btn type="primary" size="mini" onClick={() => {}}>转让队长</Btn>
                  <Btn type="info" size="mini" onClick={() => {}}>移除队伍</Btn>
                </div>
              </div>
            )
          })
        }
      </div>
    </Wrapper>
  )
}

export default React.memo(Team);