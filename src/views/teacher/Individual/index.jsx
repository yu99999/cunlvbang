import React, {useState, useEffect} from "react"
import {Wrapper, Teams} from "./style"
import Btn from "@/baseUI/Btn"

const Individual = (props) => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    let temp = [
      {name: "团队A", id: 1, isApply: false},
      {name: "团队B", id: 2, isApply: true},
    ]
    setTeams(temp)    
  }, [])


  return (
    <div style={{padding: "14rem"}}>
      <Wrapper>
        <div className="info">
          <img src={require("@/assets/images/avatar.png")} alt=""/>
          <div>
            <span>您好，用户名称</span>
            <span>已认证：老师</span>
          </div>
        </div>
        
        <Teams>
          {
            teams.map((item, index) => {
              return (
                item.isApply ? 
                <div className="teammate" key={item.id}>
                  {item.name}向您发来了邀请
                  <div className="operation">
                    <Btn type="primary" size="mini" onClick={() => {}}>同意绑定</Btn>
                    <Btn type="info" size="mini" onClick={() => {}}>拒绝绑定</Btn>
                  </div>
                </div>
                :
                <div className="teammate" key={item.id}>
                  已绑定：{item.name}
                  <div className="operation">
                    <Btn type="info" size="mini" onClick={() => {}}>解除绑定</Btn>
                  </div>
                </div>
              )
            })
          }
        </Teams>
      </Wrapper>
    </div>
  )
}

export default React.memo(Individual);