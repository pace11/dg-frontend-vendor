import * as React from 'react'
function SvgLogoMain(props) {
  return (
    <svg width={179} height={45} fill="none" {...props}>
      <path fill="url(#logo-main_svg__pattern0)" d="M0 0h179v45H0z" />
      <defs>
        <pattern
          id="logo-main_svg__pattern0"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <use
            xlinkHref="#logo-main_svg__image0"
            transform="matrix(.00152 0 0 .00608 -.648 -12.764)"
          />
        </pattern>
        <image
          id="logo-main_svg__image0"
          width={2896}
          height={4096}
        />
      </defs>
    </svg>
  )
}
export default SvgLogoMain