import React from "react"
import {Team} from "./style"
import {TagWrapper, Tag} from "../style"
import Btn from "@/baseUI/Btn"
import Popup from "@/baseUI/Popup"
import Search from "@/baseUI/Search"

const Join = (props) => {
  const {show, onClose, onFinish} = props;

  const tags = ["类型1", "类型2", "类型3"];

  const onSearch = (value) => {
    console.log(value)
  }

  console.log("join render")

  return (
    <Popup show={show} onClose={onClose}>
      <Search onSearch={onSearch}></Search>
      <Team>
        <div className="team-cell">
          <span className="label">团队名称</span>
          <span>哈哈哈哈</span>
        </div>
        <div className="team-cell">
          <span className="label">队长名称</span>
          <span>嘻嘻嘻<span className="count">剩余人数3人</span></span>
        </div>
        <div className="team-cell">
          <span className="label">擅长案件</span>
          <TagWrapper>
            {
              tags.map(value => <Tag key={value}>{value}</Tag>)
            }
          </TagWrapper>
        </div>
      </Team>
      
      <Btn type="primary" size="medium" onClick={() => onFinish(1221)} disabled>加入</Btn>
    </Popup>
  )
}

export default React.memo(Join, (prev, next) => prev.show === next.show);