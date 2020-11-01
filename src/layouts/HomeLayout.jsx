import React from "react"
import renderRoutes from "@/route/config"
import NavBar from "@/components/NavBar"
import Loading from "@/baseUI/Loading"
import {useSelector} from "react-redux"

const HomeLayout = (props) => {
  const {loading} = useSelector(state => state.home)
  console.log("home")

  return (
    <>
      <NavBar></NavBar>
      {renderRoutes(props.route.routes)}
      <Loading loading={loading}></Loading>
    </>
  )
}

export default (React.memo(HomeLayout))