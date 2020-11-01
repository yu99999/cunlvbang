import React, {useState} from "react"
import {TabsChannel, TabsPane} from "./style"

const Tabs = (props) => {
  const {children, list, onChange} = props;
  console.log('tabs render')

  const [current, setCurrent] = useState(0);

  return (
    <>
      <TabsChannel current={current}>
        {
          list.map( (item, index) => (
            <div
              className={`channel-item ${current === index && "channel-item-select"}`}
              key={index}
              onClick={() => {setCurrent(index); onChange(index);}}
            >
              {item}
            </div>
          ))
        }
        <div className="underline"></div>
      </TabsChannel>
      <TabsPane current={current}>
        <div className="pane-items">
          {
            children.map( (item, index) => <div className="pane-item" key={index}>{item}</div> )
          }
        </div>
      </TabsPane>
    </>
  )
}

export default React.memo(Tabs);