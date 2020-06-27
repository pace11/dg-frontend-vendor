import React from 'react'
import theme from '../../common/theme'

/**
 *
 * @param {Boolean} props.show
 * @param {Function} props.onClick
 * @param {String} props.title
 * @param {String <any>} props.children
 */
export default function Modal({ show, onClick, title, children }) {
  if (!show) {
    return null
  } else {
    return (
      <React.Fragment>
        <div
          className="bg-filter-modal"
          onClick={(e) => onClick(e)}
        ></div>
        <div className="container-modal">
          <div className="modal-header">
            <p className="title">{title}</p>
            <span onClick={(e) => onClick(e)}>&times;</span>
          </div>
          <div className="fdn-modal-content">{children}</div>
        </div>
        <style>
          {`
          .bg-filter-modal {
            display: block;
            width: 100%;
            height: 100%;
            top: 0;
            position: fixed;
            background-color: rgb(0, 0, 0);
            background-color: rgba(0, 0, 0, 0.7);
            z-index: ${theme.zIndex.bgModal};
          }  
          .container-modal {
            position: fixed;
            z-index: ${theme.zIndex.modal};
            width: 494px;
            max-height: 520px;
            background: #fff;
            padding: 20px;
            margin: 10% auto;
            border-radius: 10px;
            top: 0;
            left: 0;
            right: 0;
            -webkit-animation-name: animatezoom;
            -webkit-animation-duration: 0.4s;
            animation-name: animatezoom;
            animation-duration: 0.4s;
          }
          .modal-header {
            position: relative;
            width: 100%;
            height: 40px;
          }
          .modal-header .title {
            position: absolute;
            margin: 0;
            font-size: 20px;
            font-weight: bold;
          }
          .modal-header span {
            position: absolute;
            color: #aaa;
            right: 0;
            top: -10px;
            margin-bottom: 50px;
            font-size: 28px;
            font-weight: bold;
          }
          .modal-header span:hover, .modal-header span:focus {
            color: #000;
            text-decoration: none;
            cursor: pointer;
          }
          .fdn-modal-content {
            width: 100%;
            max-height: 490px;
            overflow-y: scroll;
          }
          @keyframes animatezoom {
            from {
              transform: scale(0.1);
            }
            to {
              transform: scale(1);
            }
          }
        `}
        </style>
      </React.Fragment>
    )
  }
}
