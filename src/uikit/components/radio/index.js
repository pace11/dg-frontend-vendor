import React from 'react'
import styled from 'styled-components'
import Theme from '../../common/theme'

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
  padding: 0 10px;
  height: 41px;
  cursor: pointer;
  box-sizing: border-box;
  user-select: none;
  div:first-child {
    margin-right: 15px;
    width: 20px;
    height: 20px;
    border: 2px solid
      ${(props) =>
        props.isSelected ? Theme.colors.orange : Theme.colors.gray5};
    border-radius: 50px;
  }
  div:first-child:before {
    content: '';
    width: 12px;
    min-height: 12px;
    position: absolute;
    top: 15px;
    left: 16px;
    background: ${(props) =>
      props.isSelected ? Theme.colors.orange : `transparent`};
    border-radius: 50%;
  }
`

const StyledSpan = styled.span`
  font-style: normal;
  font-size: 14px;
  line-height: 21px;
  ${(props) => props}
`

/**
 *
 * @param {String} props.text
 * @param {String, Number} props.value
 * @param {String} props.isSelected
 * @param {String} props.placeholder
 * @param {Function} props.onClick
 */
export default function Radio({
  text,
  value,
  isSelected,
  placeholder,
  onClick,
}) {
  return (
    <Container
      isSelected={isSelected === value ? true : false}
      data-value={value}
      onClick={onClick}
    >
      <div></div>
      <div>
        <StyledSpan fontWeight="600">{text}</StyledSpan>
        {placeholder && (
          <StyledSpan
            fontWeight="300"
            fontSize="12px"
            margin-left="5px"
            color={Theme.colors.black}
          >
            ({placeholder})
          </StyledSpan>
        )}
      </div>
    </Container>
  )
}
