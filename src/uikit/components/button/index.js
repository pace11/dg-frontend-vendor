import React from 'react'
import styled from 'styled-components'
import theme from '../../common/theme'

const VariantButton = {
  btnPrimary: {
    background: theme.colors.red,
    color: theme.colors.white,
    border: 0,
    cursor: 'pointer',
  },
  btnPrimaryOrange: {
    background: theme.colors.orange,
    color: theme.colors.white,
    border: 0,
    cursor: 'pointer',
  },
  btnPrimaryOutline: {
    background: 'transparent',
    color: theme.colors.orange2,
    border: `1px solid ${theme.colors.orange2}`,
    cursor: 'pointer',
  },
  btnSecondaryOutline: {
    background: 'transparent',
    color: theme.colors.black,
    border: `1px solid ${theme.colors.gray}`,
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
`

const StyledButton = styled.button`
  height: 100%;
  border-radius: 10px;
  border: 0;
  ${(props) => (props.block ? `width: 100%;` : `padding: 0 15px;`)}
  ${(props) => HandlingVariantButton(props.variant)}
  outline: none;
  font-family: 'Poppins', sans-serif;
  font-weight: bold;
  line-height: normal;
  letter-spacing: 1.33px;
  :active {
    opacity: 0.7;
  }
`

function Button({ children, variant, size, block }) {
  return (
    <Container size={size}>
      <StyledButton block={block} variant={variant}>
        {children}
      </StyledButton>
    </Container>
  )
}

export default Button
