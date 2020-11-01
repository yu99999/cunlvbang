import React from "react"
import styled from "styled-components"
import style from "@/assets/global-style.js"
import { NavLink } from "react-router-dom"

const TabBarWrapper = styled.div`
  background-color: #fff;
  position: fixed;
  bottom: 0; left: 0;
  width: 100%;
  height: 60rem;
  display: flex;
  justify-content: space-between;
  font-size: ${style["font-size-ss"]};

  .tabBar-item{
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img{
      width: 27rem;
      height: 27rem;
      margin-bottom: 2rem;
    }
  }

`

const TabBar = (props) => {
  const {list, path} = props;

  return (
    
    <TabBarWrapper>
      {
        list.map(item => (
          <NavLink className="tabBar-item" to={item.path} key={item.path}>
            <img src={path === item.path ? item.selectIcon : item.icon} alt=""/>
            {item.title}
          </NavLink>
        ))
      }
    </TabBarWrapper>
  )
}

export default React.memo(TabBar, (prev, next) => prev.path === next.path);