import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import OnOutsiceClick from 'react-outclick'
import styled from 'styled-components'
import Theme from '../../common/theme'

const VariantButton = {
  btnPrimary: {
    background: Theme.colors.red,
    color: Theme.colors.white,
    border: 0,
    cursor: 'pointer',
  },
  btnPrimaryOrange: {
    background: Theme.colors.orange,
    color: Theme.colors.white,
    border: 0,
    cursor: 'pointer',
  },
  btnPrimaryOutline: {
    background: 'transparent',
    color: Theme.colors.red,
    border: `1px solid ${Theme.colors.red}`,
    cursor: 'pointer',
  },
  btnPrimaryOrangeOutline: {
    background: 'transparent',
    color: Theme.colors.orange2,
    border: `1px solid ${Theme.colors.orange2}`,
    cursor: 'pointer',
  },
  btnSecondaryOutline: {
    background: 'transparent',
    color: Theme.colors.black,
    border: `1px solid ${Theme.colors.gray}`,
    cursor: 'pointer',
  },
  btnDisable: {
    background: '#e2e2e2',
    color: '#ffffff',
    border: 0,
    cursor: 'not-allowed',
  },
  btnSize: {
    large: {
      height: '50px',
    },
    medium: {
      height: '41px',
    },
  },
}

const HandlingVariantButton = (e) => {
  switch (e) {
    case 'secondary-outline':
      return VariantButton.btnSecondaryOutline
    case 'primary-orange':
      return VariantButton.btnPrimaryOrange
    case 'primary-orange-outline':
      return VariantButton.btnPrimaryOrangeOutline
    case 'primary-outline':
      return VariantButton.btnPrimaryOutline
    case 'disabled':
      return VariantButton.btnDisable
    default:
      return VariantButton.btnPrimary
  }
}

const HandlingSizeButton = (e) => {
  switch (e) {
    case 'large':
      return VariantButton.btnSize.large
    default:
      return VariantButton.btnSize.medium
  }
}

const Container = styled.div`
  width: 100%;
  ${(props) => HandlingSizeButton(props.size)}
  a {
    text-decoration: none;
  }
`

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  border-radius: 10px;
  border: 0;
  ${(props) => (props.block ? `width: 100%;` : `padding: 0 15px;`)}
  ${(props) =>
    HandlingVariantButton(
      props.disabled ? 'disabled' : props.variant,
    )}
  outline: none;
  font-family: 'Poppins', sans-serif;
  font-weight: bold;
  line-height: normal;
  letter-spacing: 1.33px;
  :active {
    opacity: 0.7;
  }
  svg {
    margin-right: 10px;
  }
`

const ContainerDropdown = styled.div`
  position: relative;
`

const RowList = styled.div`
  position: absolute;
  width: auto;
  height: auto;
  background: #ffffff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  margin: 5px 0;
  padding: 5px 0;
  user-select: none;
  p {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    margin: 0;
    width: auto;
    padding: 5px 10px;
  }
  p:hover {
    background: ${Theme.colors.pink};
    cursor: pointer;
  }
`

export const Button = ({
  children,
  variant,
  linkTo,
  size,
  block,
  onClick,
  disabled,
}) => {
  return (
    <Container size={size}>
      <Link to={linkTo ? `${linkTo}` : `#`}>
        <StyledButton
          block={block}
          variant={variant}
          onClick={onClick}
          disabled={disabled}
        >
          {children}
        </StyledButton>
      </Link>
    </Container>
  )
}

export const ButtonDropdown = ({
  children,
  variant,
  size,
  block,
  onClick,
  disabled,
  list,
}) => {
  const [show, setShow] = useState(false)
  const HandleClick = (e) => {
    setShow(!show)
    onClick(e)
  }

  return (
    <ContainerDropdown>
      <OnOutsiceClick onOutsideClick={() => setShow(false)}>
        <Container size={size}>
          <StyledButton
            block={block}
            variant={variant}
            onClick={() => setShow(!show)}
            disabled={disabled}
          >
            {children}
          </StyledButton>
        </Container>
        {show && (
          <RowList>
            {list.map((item, i) => (
              <p
                key={String(i)}
                onClick={() => HandleClick(item.value)}
              >
                {item.text}
              </p>
            ))}
          </RowList>
        )}
      </OnOutsiceClick>
    </ContainerDropdown>
  )
}
