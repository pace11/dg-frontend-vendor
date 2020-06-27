import React from 'react'
import styled from 'styled-components'
import Theme from '../../common/theme'

const Container = styled.div`
  width: 100%;
  height: auto;
`

const StyledUl = styled.ul`
  padding: 0;
  ${(props) =>
    props.data.length > 1
      ? `
        li {
            display: flex;
            align-items: flex-start;
            padding: 0 0 20px 0;
            list-style-type: none;
            span {
            display: inline-block;
            width: 18px;
            min-height: 18px;
            background: ${Theme.colors.gray2};
            border-radius: 50%;
            margin-right: 10px;
            border: 8px solid #fff;
            }
            span:first-child:after {
            content: '';
            position: absolute;
            left: 7%;
            width: 1px;
            height: 80px;
            background: ${Theme.colors.gray5};
            z-index: -1;
            }
        }
        li:first-child {
            display: flex;
            align-items: flex-start;
            padding: 0 0 20px 0;
            list-style-type: none;
            div {
            color: ${Theme.colors.green};
            }
            span {
            display: inline-block;
            width: 18px;
            min-height: 18px;
            background: ${Theme.colors.green};
            border-radius: 50%;
            margin-right: 10px;
            border: 9px solid #fff;
            }
            span:first-child:after {
            content: '';
            position: absolute;
            left: 7%;
            width: 1px;
            height: 80px;
            background: ${Theme.colors.gray5};
            z-index: -1;
            }
        }
        li:last-child {
            display: flex;
            align-items: flex-start;
            padding: 0 0 20px 0;
            list-style-type: none;
            span {
            display: inline-block;
            width: 18px;
            min-height: 18px;
            background: ${Theme.colors.gray2};
            border-radius: 50%;
            margin-right: 10px;
            border: 9px solid #fff;
            }
            span:first-child:after {
            content: '';
            position: absolute;
            left: 7%;
            width: 1px;
            height: 80px;
            background: transparent;
            z-index: -1;
            }
        }`
      : `
        li {
            display: flex;
            align-items: flex-start;
            padding: 0 0 20px 0;
            list-style-type: none;
            div {
                color: ${Theme.colors.green};
            }
            span {
            display: inline-block;
            width: 18px;
            min-height: 18px;
            background: ${Theme.colors.green};
            border-radius: 50%;
            margin-right: 10px;
            border: 8px solid #fff;
            }
        }`}
`

const WrapperContent = styled.div`
  display: inline;
  width: auto;
  height: auto;
`

const StyledText = styled.p`
  margin: 5px 0;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 21px;
  ${(props) => props}
`

export default function StepIndicator({ data }) {
  return (
    <Container>
      <StyledUl data={data}>
        {data &&
          data.map((item) => (
            <li key={String(item.id)}>
              <span></span>
              <WrapperContent>
                <StyledText fontWeight="600">{item.title}</StyledText>
                <StyledText color={Theme.colors.gray}>
                  {item.date}
                </StyledText>
              </WrapperContent>
            </li>
          ))}
      </StyledUl>
    </Container>
  )
}
