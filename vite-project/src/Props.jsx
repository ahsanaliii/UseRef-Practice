import React from 'react'
import ChildComp from './assets/components/ChildComp'
export default function Props(props) {
  return (
    <div>
      {/* <p>{name} and  {size}</p> */}
      <ChildComp {...props} ></ChildComp>
    </div>
  )
}
