import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import theme from '../../common/theme'
import Arrow from '../../../assets/icons/Arrow'

const Container = styled.div`
  padding: 5px 0;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 14px;
  font-style: normal;
  color: ${theme.colors.black};
`

const RowText = styled.div`
  display: flex;
  justify-content: space-between;
  span {
    color: ${(props) =>
      props.to === props.linkActive
        ? theme.colors.orange
        : theme.colors.black};
  }
  padding: ${(props) => (props.padding ? props.padding : '0px')};
  div {
    display: flex;
    span:first-child {
      width: 40px;
      svg {
        transform: scale(0.9);
        fill: ${(props) =>
          props.to === props.linkActive || props.linkchild > 0
            ? theme.colors.orange
            : theme.colors.black} !important;
      }
    }
    span:not(:first-child) {
      color: ${(props) =>
        props.to === props.linkActive || props.linkchild > 0
          ? theme.colors.orange
          : theme.colors.black};
    }
  }
`

const Notification = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  max-height: 20px;
  background: ${theme.colors.orange};
  border-radius: 50%;
  color: ${theme.colors.white};
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
`

const RowMenu = styled.div`
  padding: 0 0 0 40px;
`

const ArrowIcon = styled(Arrow)`
  margin-top: 5px;
`

export default function ListMenu({
  icon,
  text,
  linkTo,
  notification,
  data,
}) {
  const location = useLocation()

  return (
    <Container>
      <StyledLink to={linkTo}>
        <RowText
          to={linkTo}
          linkActive={location.pathname}
          linkchild={
            data &&
            data.filter((item) => item.linkTo === location.pathname)
              .length
          }
        >
          <div>
            <span>{icon}</span>
            <span>{text}</span>
          </div>
          {notification > 0 && <Notification>10</Notification>}
          {data && data.length > 0 && <ArrowIcon />}
        </RowText>
      </StyledLink>
      {data && data.length > 0 && (
        <RowMenu>
          {data &&
            data.map((item, i) => (
              <StyledLink key={String(i)} to={item.linkTo}>
                <RowText
                  padding="10px 0"
                  to={item.linkTo}
                  linkActive={location.pathname}
                >
                  <span>{item.text}</span>
                </RowText>
              </StyledLink>
            ))}
        </RowMenu>
      )}
    </Container>
  )
}
