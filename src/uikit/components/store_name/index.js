import React from 'react'
import styled from 'styled-components'
import theme from '../../common/theme'
import VerifiedStore from '../../../assets/icons/VerifyStore'

const Container = styled.span`
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
  margin: ${props => (props.margin ? props.margin : '0')};
  svg {
    margin: 0 8px 0 0;
  }
  p {
    display: inline-block;
    margin: 0;
    font-size: ${props => (props.fontSize ? props.fontSize : '14px')};
    font-weight: ${props =>
      props.fontWeight ? props.fontWeight : '400'};
    color: ${props =>
      props.color ? props.color : theme.colors.black};
  }
`

/**
 *
 * @param {String} props.fontSize
 * @param {String} props.fontWeight
 * @param {String} props.margin
 * @param {String} props.color
 * @param {Boolean} props.verified
 * @param {String} props.children
 */
export default function StoreName({
  fontSize,
  fontWeight,
  margin,
  color,
  verified,
  children,
}) {
  return (
    <Container
      fontSize={fontSize}
      fontWeight={fontWeight}
      margin={margin}
      color={color}
    >
      {verified && <VerifiedStore />}
      <p>{children}</p>
    </Container>
  )
}
