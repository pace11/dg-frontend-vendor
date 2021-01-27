import * as React from 'react'

function SvgArrow(props) {
  return (
    <svg width={13} height={9} fill="none" {...props}>
      <path
        d="M11 2L6.5 7 2 2"
        stroke="#EF4507"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default SvgArrow
