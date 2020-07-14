import React from 'react'
import styled from 'styled-components'
import Theme from '../../../uikit/common/theme'
import CheckIcon from '../../../assets/icons/Check'

const Container = styled.div`
  display: inline-block;
  width: auto;
  height: auto;
  user-select: none;
  cursor: pointer;
  div {
    display: flex;
    align-items: center;
  }
`

const CheckBox = styled.span`
  position: relative;
  display: inline-block;
  min-width: 20px;
  height: 20px;
  background: ${(props) =>
    props.checked ? Theme.colors.orange2 : '#fff'};
  -webkit-box-shadow: inset 0px 0px 0px
    ${(props) => (props.checked ? '0px' : '2px #cbcbd2')};
  -moz-box-shadow: inset 0px 0px 0px
    ${(props) => (props.checked ? '0px' : '2px #cbcbd2')};
  box-shadow: inset 0px 0px 0px
    ${(props) => (props.checked ? '0px' : '2px #cbcbd2')};
  border-radius: 5px;
`

const StyledCheckIcon = styled(CheckIcon)`
  position: absolute;
  top: 5px;
  left: 3px;
  fill: ${Theme.colors.white};
`

const LabelCheckbox = styled.span`
  margin-left: ${(props) => (props.margin ? props.margin : '5px')};
`

/**
 *
 * @param {String} props.elementId
 * @param {Boolean} props.checked
 * @param {String} props.label
 * @param {String} props.margin
 * @param {Function} props.onClick
 */
export default function ({
  elementId,
  checked,
  label,
  margin,
  onClick,
}) {
  return (
    <Container id={elementId} onClick={onClick}>
      <div>
        <CheckBox checked={checked}>
          {checked && <StyledCheckIcon />}
        </CheckBox>
        {label && (
          <LabelCheckbox margin={margin}>{label}</LabelCheckbox>
        )}
      </div>
    </Container>
  )
}
