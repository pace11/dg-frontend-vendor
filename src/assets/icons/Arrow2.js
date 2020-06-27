import * as React from 'react'

function SvgArrow2(props) {
  return (
    <svg width={13} height={8} fill="none" {...props}>
      <path
        d="M2 6.5l4.5-5 4.5 5"
        stroke="#332C2B"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default SvgArrow2
