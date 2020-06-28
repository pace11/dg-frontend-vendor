import React from 'react'
import styled from 'styled-components'
import Theme from '../../common/theme'

const Container = styled.div`
  width: 100%;
  height: auto;
  padding: 10px 0;
  label {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 21px;
    color: ${Theme.colors.black};
  }
  input {
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    height: 41px;
    width: 100%;
    outline: none;
    color: ${Theme.colors.gray4};
    padding: 0 10px;
    background: transparent;
    box-sizing: border-box;
    border: 1px solid ${Theme.colors.gray};
    border-radius: 10px;
  }
`

export const Text = ({ label, type, value, onChange }) => {
  return (
    <Container>
      {label && <label>{label}</label>}
      <input type={type} value={value} onChange={onChange} />
    </Container>
  )
}
