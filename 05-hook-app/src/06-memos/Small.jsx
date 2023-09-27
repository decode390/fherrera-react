import { memo } from "react";

export const Small = memo(({value}) => {
  console.log('Generated');

  return (
    <small>{value}</small>
  )
})
