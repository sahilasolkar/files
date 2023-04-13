import React from 'react'
import { Outlet } from 'react-router-dom'
import MainNavigation from './MainNavigation'

const Root = () => {
  return (
    <div>
      {/* <h1>this is root</h1> */}
      <MainNavigation/>
      <Outlet/>
    </div>
  )
}

export default Root
