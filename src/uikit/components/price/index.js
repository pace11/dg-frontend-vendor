import React from 'react'
import styled from 'styled-components'
import theme from '../../common/theme'
import Utils from '../../../helpers/utils'

const Container = styled.span`
  padding: ${props => props.padding};
  font-size: ${props => (props.size ? props.size : '14px')};
  font-style: normal;
  font-weight: ${props =>
    props.variant === 'line-through' ? '300' : 'bold'};
  text-decoration: ${props =>
    props.variant === 'line-through' ? 'line-through' : 'none'};
  color: ${props =>
    props.variant === 'line-through'
      ? theme.colors.gray2
      : theme.colors.red};
`

/**
 *
 * @param {String} props.variant
 * @param {String} props.size
 * @param {String} props.padding
 * @param {String} props.color
 * @param {String <any>} props.children
 */
export default function Price({
  variant,
  size,
  padding,
  color,
  children,
}) {
  return (
    <Container
      variant={variant}
      size={size}
      padding={padding}
      color={color}
    >
      {Utils.currency(children, 'Rp')}
    </Container>
  )
}
