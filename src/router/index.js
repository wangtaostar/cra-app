import React, { lazy, Suspense } from 'react'
import { Redirect } from 'react-router-dom';
import RootLayout from '@components/layout/RootLayout'

// import Home from '@pages/home'

// Suspense 让组件“等待”某个异步操作，直到该异步操作结束即可渲染
// fallback 组件处于加载状态时显示
const SuspenseComponent = Component => props => {
  return (
    <Suspense fallback={null}>
      <Component {...props}></Component>
    </Suspense>
  )
}

// 懒加载 组件
const AboutComponent = lazy(() => import('@pages/about'))
const UserComponent = lazy(() => import("@pages/user"))

const Router = [
  {
    component: RootLayout,
    routes: [
      {
        path: '/',
        component: RootLayout,
        routes: [
          {
            path: '/',
            exact: true,
            render: () => <Redirect to={'/home'} />
          },
          {
            path: '/about',
            exact: true,
            key: 'about',
            component: SuspenseComponent(AboutComponent)
          },
          {
            path: '/user',
            exact: true,
            key: 'user',
            component: SuspenseComponent(UserComponent)
          }
        ]
      }
    ]
  }
]

export default Router