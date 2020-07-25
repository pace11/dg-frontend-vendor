import React from 'react'
import styled from 'styled-components'
import InputOtp from 'react-otp-input'
import Theme from '../../common/theme'

const Container = styled.div`
  width: auto;
  height: auto;
  div {
    div {
      input {
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        height: 40px;
        width: 40px !important;
        outline: 0;
        border-width: 0 0 2px;
        border-color: ${Theme.colors.black};
        margin: 0 10px;
      }
    }
  }
`

export default function InputOTP({
  numInputs,
  separator,
  value,
  onChange,
  isDisabled,
}) {
  const props = {
    numInputs: numInputs || 4,
    separator: separator,
    value: value,
    onChange: onChange,
    isDisabled: isDisabled || false,
  }
  return (
    <Container>
      <InputOtp
        numInputs={props.numInputs}
        separator={props.separator}
        value={props.value}
        onChange={onChange}
        isDisabled={props.isDisabled}
      />
    </Container>
  )
}
