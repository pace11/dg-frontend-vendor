import React from 'react'
import styled from 'styled-components'
import Switch from 'react-switch'
import Theme from '../../common/theme'

const Container = styled.div`
  display: inline;
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
  span {
    margin-left: 5px;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
  }
`

/**
 *
 * @param {String} props.label
 * @param {Function} props.onChange
 * @param {Boolean} props.checked
 */
export default function ToogleSwitch({
  label,
  onChange,
  checked,
  width,
  height,
}) {
  const props = {
    onChange: onChange,
    checked: checked,
    uncheckedIcon: false,
    checkedIcon: false,
    onColor: Theme.colors.green2,
    offColor: Theme.colors.gray2,
    width: width || 40,
    height: height || 20,
  }

  return (
    <Container>
      <Switch {...props} />
      {label && <span>{label}</span>}
    </Container>
  )
}
