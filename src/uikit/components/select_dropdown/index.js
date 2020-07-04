import React, { useState } from 'react'
import OnOutsiceClick from 'react-outclick'
import Checkbox from '../../components/checkbox'
import styled from 'styled-components'
import Theme from '../../common/theme'
import Arrow from '../../../assets/icons/Arrow2'

const ArrowIcon = styled(Arrow)`
  transform: ${(props) =>
    props.show === 'true' ? `rotate(0deg)` : `rotate(180deg)`};
`

const Container = styled.div`
  width: 100%;
  height: auto;
  padding: 10px 0;
  position: relative;
  font-weight: 300;
  label {
    font-style: normal;
    font-size: 14px;
    line-height: 21px;
    color: ${Theme.colors.gray4};
  }
`
const Row = styled.div`
  width: 100%;
  box-sizing: border-box;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  ${(props) => props};
`

const StyledText = styled.p`
  margin: 0;
  padding: 5px;
  background: ${(props) =>
    props.isSelected ? Theme.colors.orangeSoft2 : '#fff'};
  color: ${(props) =>
    props.isSelected ? Theme.colors.black : Theme.colors.black};
  :hover {
    background: ${(props) =>
      props.isSelected
        ? Theme.colors.orangeSoft2
        : Theme.colors.white};
    cursor: pointer;
  }
`

export default function SelectDropdown({
  variant,
  label,
  text,
  value,
  list,
  onClick,
}) {
  const props = {
    variant: variant,
    label: label,
    text: text,
    value: value,
    list: list || {},
    onClick: onClick,
  }

  const [show, setShow] = useState(false)
  const isValue = props.list.filter(
    (item) => item.value === props.value,
  )
  const HandleClick = (e) => {
    setShow(!show)
    props.onClick(e)
  }

  return (
    <Container>
      {props.label && <label>{props.label}</label>}
      <OnOutsiceClick onOutsideClick={() => setShow(false)}>
        <Row
          display="flex"
          height="41px"
          alignItems="center"
          justifyContent="space-between"
          background="transparent"
          color={Theme.colors.black}
          border={`1px solid ${Theme.colors.gray5}`}
          borderRadius="10px"
          padding="0 10px"
          cursor="pointer"
          userSelect="none"
          onClick={() => setShow(!show)}
        >
          <p>
            {props.variant !== 'checkbox'
              ? props.value
                ? isValue[0].text
                : '- pilih salah satu -'
              : props.text}
          </p>
          <ArrowIcon show={JSON.stringify(show)} />
        </Row>
        {show && (
          <Row
            position="absolute"
            background="#fff"
            margin="5px 0"
            boxShadow="0px 0px 10px rgba(0, 0, 0, 0.25)"
            padding="5px 0"
            borderRadius="10px"
            overflow="hidden"
            userSelect="none"
            zIndex="1"
          >
            {props.variant !== 'checkbox'
              ? props.list.map((item, i) => (
                  <StyledText
                    key={String(i)}
                    onClick={() => HandleClick(item.value)}
                    isSelected={value === item.value ? true : false}
                  >
                    {item.text}
                  </StyledText>
                ))
              : props.list.map((item, i) => (
                  <StyledText key={String(i)}>
                    <Checkbox label={item.text} />
                  </StyledText>
                ))}
          </Row>
        )}
      </OnOutsiceClick>
    </Container>
  )
}
