import React, { useState } from 'react'
import theme from '../../common/theme'
import Tab from './tab'

/**
 *
 * @param {String <any>} props.children
 */
export default function Tabs({ children }) {
  const [activeTab, setActiveTab] = useState(children[0].props.label)

  const OnClickTabItem = (props) => {
    setActiveTab(props)
  }

  return (
    <div className="container-tab">
      <div className="tab-list">
        {children &&
          children.map((item) => {
            const { label } = item.props
            return (
              <Tab
                activeTab={activeTab}
                key={label}
                label={label}
                onClick={() => OnClickTabItem(label)}
              />
            )
          })}
      </div>
      <div className="tab-content">
        {children &&
          children.map((item) => {
            if (item.props.label !== activeTab) return undefined
            return item.props.children
          })}
      </div>
      <style>
        {`
          container-tab {
            width: 100%;
          }
          .tab-list {
            font-size: 18px;
            font-style: normal;
            font-weight: 600;
            padding-left: 0;
          }  
          .tab-list-item {
            display: inline-block;
            list-style: none;
            margin-bottom: -1px;
            padding: 1rem;
            cursor: pointer;
          } 
          .tab-list-active {
            position: relative;
          }
          .tab-list-active::before {
            content:'';
            position: absolute;
            background: ${theme.colors.orange};
            width: 50px;
            height: 5px;
            bottom: 0;
          }
          .tab-content {
            margin: 10px 0px;
          }
        `}
      </style>
    </div>
  )
}
