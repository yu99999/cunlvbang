import React, {useEffect, useCallback} from "react"
import Tabs from "@/baseUI/Tabs"
import CaseCard from "@/components/CaseCard"
import CardButton from "@/components/CaseCard/CardButton"
import {fetchServerHomeList} from "@/api/index"
import {changeHomeList} from "./store/action"
import {useSelector, useDispatch} from "react-redux"
import {isObjectEmpty} from "@/untils/index"


const Home = () => {

  const {list} = useSelector(state => state.serverHome)
  const dispatch = useDispatch();

  useEffect(() => {
    if(!isObjectEmpty(list)) return;
    fetchServerHomeList().then(res => {
      dispatch(changeHomeList(res.data))
    })
    // eslint-disable-next-line
  }, [])
  console.log(list)

  const onTabsChange = useCallback((i) => {
    console.log(i)
  }, [])

  const confirmFinish = () => {
    
  }

  return (
    <div>
      <Tabs list={["全部", "待受理", "受邀请"]} onChange={onTabsChange}>
        <div style={{padding: "14rem"}}>
          <CaseCard type="success">
            <CardButton>补充说明</CardButton>
            <CardButton className="question">追加提问</CardButton>
            <CardButton onClick={confirmFinish}>确认完成</CardButton>
          </CaseCard>

        </div>

        <div></div>
        <div>详细信息</div>
      </Tabs>
    </div>
  )
}

export default React.memo(Home);