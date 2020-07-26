import React from 'react'

/**
 * @param {String} props.activeTab
 * @param {String} props.label
 * @param {Function} props.onClick
 */
export default function Tab({ activeTab, label, onClick }) {
  const OnClick = (props) => {
    onClick(props)
  }

  let className = 'tab-list-item'
  if (activeTab === label) className += ' tab-list-active'

  return (
    <li className={className} onClick={(label) => OnClick(label)}>
      {label}
    </li>
  )
}
