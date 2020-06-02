import * as React from 'react'

function SvgStoreDisplay(props) {
  return (
    <svg width={22} height={22} fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.75 1.833a.917.917 0 00-.917.917v12.833a.917.917 0 00.917.917h4.583c.507 0 .917.41.917.917v3.666a.917.917 0 11-1.833 0v-2.75H2.75A2.75 2.75 0 010 15.583V2.75A2.75 2.75 0 012.75 0h16.5A2.75 2.75 0 0122 2.75v12.833a2.75 2.75 0 01-2.75 2.75h-3.667v2.75a.917.917 0 11-1.833 0v-3.666c0-.507.41-.917.917-.917h4.583a.917.917 0 00.917-.917V2.75a.917.917 0 00-.917-.917H2.75z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.583 21.083c0-.506.41-.916.917-.916h11a.917.917 0 110 1.833h-11a.917.917 0 01-.917-.917zM6.417 17.417c0-.507.41-.917.916-.917h7.334a.917.917 0 010 1.833H7.333a.917.917 0 01-.916-.916zM6.685 3.935a.917.917 0 011.297 0l7.333 7.333a.917.917 0 11-1.296 1.297L7.332 5.88l-5.768 5.768a.917.917 0 11-1.297-1.296l6.417-6.417z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.935 4.852a.917.917 0 011.296 0l5.5 5.5a.917.917 0 01-1.296 1.296l-4.852-4.852-3.018 3.019a.917.917 0 01-1.296-1.297l3.666-3.666z"
      />
    </svg>
  )
}

export default SvgStoreDisplay