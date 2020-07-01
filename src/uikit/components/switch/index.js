import React from 'react'
import styled from 'styled-components'
import Switch from 'react-switch'

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
export default function ToogleSwitch({ label, onChange, checked }) {
  return (
    <Container>
      <Switch
        checked={checked}
        onChange={onChange}
        uncheckedIcon={false}
        checkedIcon={false}
      />
      {label && <span>{label}</span>}
    </Container>
  )
}
