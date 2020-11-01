import React, {lazy, Suspense} from "react"
import HomeLayout from "../layouts/HomeLayout"
import TabBarLayout from "../layouts/TabBarLayout"

const lazyComponent = Component => props => {
  return (
    <Suspense fallback={null}>
      <Component {...props}></Component>
    </Suspense>
  )
}

const ServerHomeComponent = lazyComponent(lazy(() => import("../views/server/Home")));
const ServerHistoryComponent = lazyComponent(lazy(() => import("../views/server/History")));
const ServerIndividualComponent = lazyComponent(lazy(() => import("../views/server/Individual")));

const TeacherHomeComponent = lazyComponent(lazy(() => import("../views/teacher/Home")));
const TeacherHistoryComponent = lazyComponent(lazy(() => import("../views/teacher/History")));
const TeacherIndividualComponent = lazyComponent(lazy(() => import("../views/teacher/Individual")));

const AdministratorHomeComponent = lazyComponent(lazy(() => import("../views/administrator/Home")));
const AdministratorFeedbackComponent = lazyComponent(lazy(() => import("../views/administrator/Feedback")));

const Identity = lazyComponent(lazy(() => import("../views/Identity")))

export default [
  {
    component: HomeLayout,
    routes: [
      {
        path: "/server",
        component: TabBarLayout,
        routes: [
          {
            path: "/server/home",
            component: ServerHomeComponent
          },
          {
            path: "/server/history",
            component: ServerHistoryComponent
          },
          {
            path: "/server/individual",
            component: ServerIndividualComponent
          },
        ]
      },
      {
        path: "/teacher",
        component: TabBarLayout,
        routes: [
          {
            path: "/teacher/home",
            component: TeacherHomeComponent
          },
          {
            path: "/teacher/history",
            component: TeacherHistoryComponent
          },
          {
            path: "/teacher/individual",
            component: TeacherIndividualComponent
          },
        ]
      },
      {
        path: "/administrator",
        component: TabBarLayout,
        routes: [
          {
            path: "/administrator/home",
            component: AdministratorHomeComponent
          },
          {
            path: "/administrator/feedback",
            component: AdministratorFeedbackComponent
          }
        ]
      },
      {
        path: "/identity/:category",
        component: Identity
      }
    ]
  }
]