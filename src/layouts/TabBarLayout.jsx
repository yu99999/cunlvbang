import React, {useMemo} from "react"
import renderRoutes from "@/route/config"
import TabBar from "../components/TabBar"


const TabBarLayout = (props) => {
  const path = props.location.pathname;
  const category = path.split("/")[1];

  const list = useMemo(() => {
    if(category === "server"){
      return [
        {path: "/server/home", title: "首页", icon: require("../assets/images/tabBar1.png"), selectIcon: require("../assets/images/tabBar1-active.png")},
        {path: "/server/history", title: "历史回答", icon: require("../assets/images/tabBar2.png"), selectIcon: require("../assets/images/tabBar2-active.png")},
        {path: "/server/individual", title: "个人中心",icon: require("../assets/images/tabBar3.png"),selectIcon: require("../assets/images/tabBar3-active.png")},
      ]
    }else if(category === "teacher"){
      return [
        {path: "/teacher/home", title: "首页", icon: require("../assets/images/tabBar1.png"), selectIcon: require("../assets/images/tabBar1-active.png")},
        {path: "/teacher/history", title: "历史审核", icon: require("../assets/images/tabBar2.png"), selectIcon: require("../assets/images/tabBar2-active.png")},
        {path: "/teacher/individual", title: "个人中心",icon: require("../assets/images/tabBar3.png"),selectIcon: require("../assets/images/tabBar3-active.png")},
      ]
    }else if(category === "administrator"){
      return [
        {path: "/administrator/home", title: "首页", icon: require("../assets/images/tabBar1.png"), selectIcon: require("../assets/images/tabBar1-active.png")},
        {path: "/administrator/feedback", title: "意见反馈", icon: require("../assets/images/tabBar4.png"), selectIcon: require("../assets/images/tabBar4-active.png")},
      ]

    }
  }, [category])

  
  return (
    <>
      {renderRoutes(props.route.routes)}
      <div style={{height: "60rem"}}></div>
      <TabBar path={path} list={list}></TabBar>
    </>
  )
}

export default React.memo(TabBarLayout);