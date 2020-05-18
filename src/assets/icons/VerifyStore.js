import * as React from 'react'

function SvgVerifyStore(props) {
  return (
    <svg width={16} height={16} fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 0c4.4 0 8 3.6 8 8v7.597a.404.404 0 01-.403.403H8c-4.4 0-8-3.6-8-8s3.6-8 8-8zM4.494 8.737A.704.704 0 015.542 7.8l1.183 1.318 3.757-3.757a.706.706 0 01.998.998l-4.312 4.307a.704.704 0 01-.993-.055L4.494 8.737z"
        fill="url(#verify-store_svg__paint0_linear)"
      />
      <mask
        id="verify-store_svg__a"
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={16}
        height={16}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8 0c4.4 0 8 3.6 8 8v7.597a.404.404 0 01-.403.403H8c-4.4 0-8-3.6-8-8s3.6-8 8-8zM4.494 8.737A.704.704 0 015.542 7.8l1.183 1.318 3.757-3.757a.706.706 0 01.998.998l-4.312 4.307a.704.704 0 01-.993-.055L4.494 8.737z"
          fill="url(#verify-store_svg__paint1_linear)"
        />
      </mask>
      <g mask="url(#verify-store_svg__a)">
        <path
          opacity={0.5}
          d="M-.534 1.207c.009-.07.02-.139.034-.207l-.034.207C-.98 4.523 3.515 9 9 9c7 0 9.5 6 9.5 7 0 .8-8 1-12 1l-9-3L-1 4l.466-2.793z"
          fill="url(#verify-store_svg__paint2_linear)"
        />
      </g>
      <defs>
        <linearGradient
          id="verify-store_svg__paint0_linear"
          x1={8}
          y1={0}
          x2={8}
          y2={16}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#2F80ED" />
          <stop offset={1} stopColor="#EB5757" />
        </linearGradient>
        <linearGradient
          id="verify-store_svg__paint1_linear"
          x1={8}
          y1={18.902}
          x2={8}
          y2={1.527}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E62129" />
          <stop offset={0.451} stopColor="#EF4507" />
          <stop offset={1} stopColor="#F56D06" />
        </linearGradient>
        <linearGradient
          id="verify-store_svg__paint2_linear"
          x1={8}
          y1={19.902}
          x2={8}
          y2={2.527}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E62129" />
          <stop offset={0.451} stopColor="#EF4507" />
          <stop offset={1} stopColor="#F56D06" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default SvgVerifyStore
