import React from "react"
import Tabs from "@/baseUI/Tabs"
import CaseCard from "@/components/CaseCard"

const History = () => {
  

  return (
    <div>
      <Tabs list={["全部", "已受理", "已邀请"]}>
        <div style={{padding: "14rem"}}>
          <CaseCard status={0}></CaseCard>

        </div>
        <div>哈哈哈哈</div>
        <div>详细信息</div>
      </Tabs>
    </div>
  )
}

export default React.memo(History);