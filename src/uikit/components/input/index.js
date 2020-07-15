import React, { useState } from 'react'
import styled from 'styled-components'
import Theme from '../../common/theme'
import EyeIcon from '../../../assets/icons/Eye'
import Check from '../../../assets/icons/Check'

const Container = styled.div`
  width: 100%;
  height: auto;
  padding: 10px 0;
  div {
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 21px;
    color: ${Theme.colors.gray4};
  }
  div:last-child {
    font-weight: 300;
    font-size: 12px;
    color: ${(props) =>
      props.warning ? Theme.colors.red : Theme.colors.gray4};
    text-align: ${(props) => (props.warning ? `left` : `right`)};
  }
  input {
    font-family: 'Poppins', sans-serif;
    font-weight: 300;
    font-size: 14px;
    height: 41px;
    width: 100%;
    outline: none;
    color: ${Theme.colors.gray4};
    background: transparent;
    box-sizing: border-box;
    border: 1px solid
      ${(props) =>
        props.warning ? Theme.colors.red : Theme.colors.gray5};
    border-radius: 10px;
    ${(props) =>
      props.addOnRight
        ? `padding: 0 45px 0 10px;`
        : props.addOnLeft
        ? `padding: 0 10px 0 30px;`
        : `padding: 0 10px;`}
  }
`

const WrapperInput = styled.div`
  width: auto;
  height: auto;
  position: relative;
  span {
    position: absolute;
    display: flex;
    align-items: center;
    width: 41px;
    height: 41px;
    ${(props) =>
      props.addOnRight
        ? `right: 0;`
        : props.addOnLeft
        ? `left: 10px;`
        : ``}
  }
`

const WrapperPassword = styled.div`
  width: 100%;
  height: auto;
  position: relative;
`

const WrapperIcon = styled.span`
  position: absolute;
  right: 10px;
  top: 12px;
  cursor: pointer;
  svg {
    fill: ${(props) =>
      props.isType === 'password'
        ? Theme.colors.green
        : Theme.colors.gray};
  }
`

const VerifiedIcon = styled.span`
  position: absolute;
  top: 0px;
  right: -15px;
  svg {
    transform: scale(1.2);
    fill: ${Theme.colors.green};
  }
`

export const Text = ({
  label,
  type,
  value,
  placeholder,
  caption,
  onChange,
  addOnLeft,
  addOnRight,
  warning,
  verified,
}) => {
  const RenderAddon = (props) => {
    if (props.addOnLeft || props.addOnRight)
      return <span>{props.addOnLeft || props.addOnRight}</span>
    return null
  }

  return (
    <Container
      addOnLeft={addOnLeft}
      addOnRight={addOnRight}
      warning={warning}
    >
      {label && <div>{label}</div>}
      <WrapperInput addOnLeft={addOnLeft} addOnRight={addOnRight}>
        <RenderAddon addOnLeft={addOnLeft} addOnRight={addOnRight} />
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
        {verified && (
          <VerifiedIcon>
            <Check />
          </VerifiedIcon>
        )}
      </WrapperInput>
      {caption && <div>{caption}</div>}
      {warning && <div>{warning}</div>}
    </Container>
  )
}

export const Password = ({ label, value, placeholder, onChange }) => {
  const [isType, setIsType] = useState('password')

  return (
    <Container>
      {label && <div>{label}</div>}
      <WrapperPassword>
        <input
          type={isType}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
        <WrapperIcon
          onClick={() =>
            setIsType(isType === 'password' ? 'text' : 'password')
          }
          isType={isType}
        >
          <EyeIcon />
        </WrapperIcon>
      </WrapperPassword>
    </Container>
  )
}
