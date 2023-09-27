import { memo } from "react"

export const ShowIncrement = memo( ({increment}) => {
  console.log('rerendered')

  return (
    <button 
      className="btn btn-primary"
      onClick={()=>increment()}
    >
      Increment
    </button>
  )
} )
