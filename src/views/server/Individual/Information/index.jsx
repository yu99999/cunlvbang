import React from "react"
import {Wrapper} from "./style"

const Information = (props) => {
  return (
    <Wrapper>
      <div className="info">
        <img src={require("@/assets/images/avatar.png")} alt=""/>
        <div>
          <span>您好，用户名称</span>
          <span>法律咨询服务者</span>
        </div>
      </div>

      <div className="bind">
        <span>所属团队：团队名称</span>
        <span>绑定老师：老师名称</span>
      </div>

      <div className="data">
        <div className="data-item">
          <span>20</span>
          <span>已办案件</span>
        </div>
        <div className="border"></div>
        <div className="data-item">
          <span>4.8</span>
          <span>平均评分</span>
        </div>
        <div className="border"></div>
        <div className="data-item">
          <span>队长</span>
          <span>本人身份</span>
        </div>
      </div>
    </Wrapper>
  )
}

export default React.memo(Information);