import React, {useState, useEffect, useMemo} from "react"
import {TagWrapper, Tag} from "../style"
import styled from "styled-components"
import style from "@/assets/global-style"
import Btn from "@/baseUI/Btn"
import Popup from "@/baseUI/Popup"

const Item = styled.div`
  line-height: 40rem;
  display: flex;
  margin-bottom: 20rem;
  border-bottom: 1rem solid #cccccc;

  span{
    font-weight: bold;
    font-size: ${style["font-size-xl"]};
  }
  input{
    flex: 1;
    margin-left: 20rem;
  }
`

const Establish = (props) => {
  const {show, onClose, onFinsh} = props;

  const [name, setName] = useState("");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    let temp = ["类型1", "类型2", "类型3"].map(item => ({
      value: item,
      selected: false
    }))
    setCategories(temp)
  }, [])

  const onTagChange = (index) => {
    categories[index].selected = !categories[index].selected;
    console.log(categories)
    setCategories([...categories]);
  }

  const filterCategories = useMemo(() => {
    return categories.filter(item => Boolean(item.selected))
  }, [categories])


  return (
    <Popup show={show} onClose={onClose}>

      <Item>
        <span>团队名称</span>
        <input value={name} type="text" placeholder="在此输入您的团队名称" onChange={(e) => setName(e.target.value)} />
      </Item>

      <Item>
        <span>擅长案件种类</span>
      </Item>

      <TagWrapper>
        {
          categories.map((item, index) => (
            <Tag key={item.value} unselected={!item.selected} onClick={() => onTagChange(index)}>{item.value}</Tag>
          ))
        }
      </TagWrapper>

      <Btn
        type="primary"
        size="medium" 
        onClick={() => onFinsh({name, filterCategories})} 
        disabled={Boolean(!(name && filterCategories.length))} 
      >
        创建
      </Btn>
    </Popup>
  )
}

export default React.memo(Establish)