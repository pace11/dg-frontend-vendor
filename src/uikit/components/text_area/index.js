import React from 'react'
import styled from 'styled-components'
import Theme from '../../common/theme'

const Container = styled.div`
  width: 100%;
  margin: 5px 0;
  div {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 21px;
    color: ${Theme.colors.black};
  }
  textarea {
    width: 100%;
    font-family: Poppins;
    outline: none;
    border: 1px solid ${Theme.colors.gray5};
    border-radius: 10px;
    font-weight: 300;
    font-size: 14px;
    color: ${Theme.colors.gray4};
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    padding: 10px;
  }
  p {
    margin: 0;
    padding: 0;
    text-align: right;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    color: ${(props) =>
      props.charLength === props.maxLength
        ? Theme.colors.red
        : Theme.colors.gray};
  }
`

/**
 *
 * @param {String} props.label
 * @param {String} props.maxLength
 * @param {String} props.charLength
 * @param {Function} props.onChange
 */
function TextArea({ label, maxLength, rows, charLength, onChange }) {
  return (
    <Container charLength={charLength} maxLength={maxLength}>
      {label && <div>{label}</div>}
      <textarea
        maxLength={maxLength}
        onChange={onChange}
        rows={rows}
      />
      <p>{`${charLength} / ${maxLength}`}</p>
    </Container>
  )
}

TextArea.defaultProps = {
  maxLength: 100,
  charLength: 0,
  rows: 2,
}

export default TextArea
