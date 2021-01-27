import * as React from 'react'

function SvgFilter(props) {
  return (
    <svg width={17} height={17} fill="none" {...props}>
      <path
        d="M6.625 16a.936.936 0 01-.938-.938V9.707L1.142 2.434A.938.938 0 011.937 1h13.125a.94.94 0 01.795 1.434l-4.545 7.273v4.418c0 .43-.292.804-.71.91l-3.75.937-.227.028zM3.628 2.875L7.42 8.941a.94.94 0 01.142.496v4.425l1.875-.47V9.439a.94.94 0 01.143-.497l3.79-6.066H3.628z"
        fill="#332C2B"
        stroke="#fff"
        strokeWidth={0.9}
      />
    </svg>
  )
}

export default SvgFilter
