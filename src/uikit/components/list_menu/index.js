import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import theme from '../../common/theme'
import Arrow from '../../../assets/icons/Arrow'

const Container = styled.div`
  padding: 5px 0;
`

const RowParent = styled.div`
  a {
    text-decoration: none;
    font-size: 14px;
    font-style: normal;
    color: ${theme.colors.black};
    display: flex;
    justify-content: space-between;
    div {
      span {
        color: ${(props) =>
          props.to === props.linkActive
            ? theme.colors.orange
            : theme.colors.black};
      }
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

const RowChild = styled.div`
  padding: 0 0 5px 40px;
  a {
    text-decoration: none;
    font-size: 14px;
    font-style: normal;
    color: ${(props) =>
      props.to === props.linkActive
        ? theme.colors.orange
        : theme.colors.black};
  }
`

const WrapperArrowIcon = styled.span`
  svg {
    margin-top: 5px;
    transform: ${(props) =>
      props.show ? 'rotate(180deg)' : 'rotate(0deg)'};
  }
`

/**
 *
 * @param {String} props.elementId
 * @param {String} props.icon
 * @param {String} Props.text
 * @param {String} props.linkTo
 * @param {String} props.notification
 * @param {Object <Array>} props.data
 */
export default function ListMenu({
  elementId,
  icon,
  text,
  linkTo,
  notification,
  data,
}) {
  const location = useLocation()
  const [show, setShow] = useState(false)

  useEffect(() => {
    if (
      data !== undefined &&
      data.filter((item) => item.linkTo === location.pathname).length
    ) {
      setShow((show) => !show)
    }
  }, [])

  return (
    <Container id={elementId}>
      <RowParent
        linkActive={location.pathname}
        linkchild={
          data &&
          data.filter((item) => item.linkTo === location.pathname)
            .length
        }
        onClick={
          data && data.length > 0 ? () => setShow(!show) : false
        }
        to={`${linkTo}`}
      >
        <Link to={linkTo ? `${linkTo}` : `#`}>
          <div>
            <span>{icon}</span>
            <span>{text}</span>
          </div>
          {notification > 0 && (
            <Notification>{notification}</Notification>
          )}
          {data && data.length > 0 && (
            <WrapperArrowIcon show={show}>
              <Arrow />
            </WrapperArrowIcon>
          )}
        </Link>
      </RowParent>
      {show && (
        <React.Fragment>
          {data &&
            data.map((item, i) => (
              <RowChild
                key={String(i)}
                to={item.linkTo}
                linkActive={location.pathname}
              >
                <Link to={`${item.linkTo}`}>
                  <div>{item.text}</div>
                </Link>
              </RowChild>
            ))}
        </React.Fragment>
      )}
    </Container>
  )
}
