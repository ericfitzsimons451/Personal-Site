import React from 'react'
import './MainDisplay.scss'

export const MainDisplay = (props) => {

  const { displayContent } = props
  return (
    <div>
      {displayContent}
    </div>
  )
}

export default MainDisplay