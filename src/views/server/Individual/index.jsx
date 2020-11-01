import React, {useState, useEffect} from "react"
import Btn from "@/baseUI/Btn"
import Information from "./Information"
import Join from "./Join"
import Establish from "./Establish"
import Team from "./Team"
import Modal from "@/baseUI/Modal"

const Individual = (props) => {
  const [showJoin, setShowJoin] = useState(false);
  const [showEstablish, setShowEstablish] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [teammates, setTeammates] = useState([]);

  const onEstablish = (obj) => {
    console.log(obj)
    setShowEstablish(false)
    setShowModal(true)
  }

  const onJoin = (obj) => {
    console.log(obj)
  }

  useEffect(() => {
    let temp = [
      {name: "用户A", id: 1, isApply: false},
      {name: "用户B", id: 2, isApply: false},
      {name: "用户C", id: 3, isApply: true}
    ]
    setTeammates(temp)
  }, [])

  const renderModule = () => {
    let isTeam = false;

    if(isTeam){
      return (
        <>
          <Btn type="primary" onClick={() => setShowEstablish(true)}>创建队伍</Btn>
          <Btn type="primary" onClick={() => setShowJoin(true)}>加入队伍</Btn>
          <Establish show={showEstablish} onClose={() => setShowEstablish(false)} onFinsh={onEstablish}></Establish>
          <Join show={showJoin} onClose={() => setShowJoin(false)} onFinish={onJoin}></Join>
        </>
      )
    }else{
      return (
        <>
          <Team teammates={teammates}></Team>
          <Btn type="info" onClick={() => {}}>申请解绑</Btn>
        </>
      )
    }
  }

  return (
    <div style={{padding: "14rem"}}>
      <Information></Information>

      {renderModule()}

      <Modal 
        show={showModal} 
        title="您已成功提交审核材料，请等待系统审核，谢谢你的配合"
        onConfirm={() => setShowModal(false)}
      >
      </Modal>
    </div>
  )
}

export default React.memo(Individual);