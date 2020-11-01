import React from "react"
import Tabs from "@/baseUI/Tabs"
import CaseCard from "@/components/CaseCard"
import styled from "styled-components"
import style from "@/assets/global-style"

const PaneWrapper = styled.div`
  padding: ${style["padding"]};
  box-sizing: border-box;
`

const Home = () => {
  

  return (
    <div>
      <Tabs list={["全部", "待受理", "受邀请"]}>
        <PaneWrapper>
          <CaseCard status={0}></CaseCard>

        </PaneWrapper>
        <div>哈哈哈哈</div>
        <div>详细信息</div>
      </Tabs>
    </div>
  )
}

export default React.memo(Home);