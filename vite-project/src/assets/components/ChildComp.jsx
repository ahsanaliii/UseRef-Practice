import React from 'react'

export default function ChildComp(props) {
  return (
    <div>
      <p>{props.children}</p>
    </div>
  )
}
