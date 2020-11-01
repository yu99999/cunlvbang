import React from "react"
import {CardWrapper} from "./style"

const Card = (props) => {
  const {type} = props;

  console.log("card render")


  return (
    <CardWrapper>
      <div>
        <div style={{fontWeight: 600}}>
          案件名称，命名为XX案件
          <span className="iconfont" style={{marginLeft: "6rem"}}>&#xe618;</span>
        </div>
        <div className={`status ${type}-status`}>待追问</div>
      </div>
      <div>
        <div>发起人：用户ID</div>
        <span>评分：5.0</span>
      </div>
      <div>
        <span>发起日期：2020.08.26</span>
        <span>完成日期：2020.08.27</span>
      </div>

      <div style={{marginTop: 10}}>
        {props.children}
      </div>
    </CardWrapper>
  )
}

export default React.memo(Card)