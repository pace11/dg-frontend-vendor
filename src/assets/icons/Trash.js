import * as React from 'react'

function SvgTrash(props) {
  return (
    <svg width={16} height={15} fill="none" {...props}>
      <path
        d="M5.158 12.177a.475.475 0 00.473-.473V7.492a.475.475 0 00-.473-.473.475.475 0 00-.473.473v4.212c0 .268.205.473.473.473zM7.492 12.177a.475.475 0 00.473-.473V7.492a.475.475 0 00-.473-.473.475.475 0 00-.473.473v4.212c0 .268.22.473.473.473zM9.826 12.177a.475.475 0 00.473-.473V7.492a.474.474 0 00-.473-.473.475.475 0 00-.473.473v4.212c.015.268.22.473.473.473z"
        fill="#332C2B"
      />
      <path
        d="M13.58 1.877H9.826v-.473C9.826.63 9.196 0 8.423 0H6.562c-.773 0-1.404.63-1.404 1.404v.473H1.404C.63 1.877 0 2.507 0 3.281v.473c0 .773.63 1.404 1.404 1.404h.047l.82 8.564A1.396 1.396 0 003.675 15h7.666c.725 0 1.325-.552 1.404-1.278l.82-8.564h.047c.773 0 1.404-.631 1.404-1.404V3.28c-.032-.773-.663-1.404-1.436-1.404zm-7.492-.473c0-.253.205-.473.474-.473h1.876c.253 0 .474.205.474.473v.473H6.088v-.473zm5.694 12.224a.467.467 0 01-.473.426H3.66a.49.49 0 01-.473-.426l-.804-8.47h10.205l-.805 8.47zm2.272-9.89a.475.475 0 01-.474.473H1.404a.475.475 0 01-.473-.473v-.473c0-.252.205-.473.473-.473H13.58c.253 0 .474.205.474.473v.473z"
        fill="#332C2B"
      />
    </svg>
  )
}

export default SvgTrash