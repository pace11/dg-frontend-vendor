import React from 'react'
import styled from 'styled-components'
// import Theme from '../../../uikit/common/theme'

const Container = styled.div`
  background: #ffffff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  box-sizing: border-box;
  padding: 20px;
  margin-bottom: 20px;
`

const Row = styled.div`
  height: auto;
  ${(props) => props}
`

// const Col = styled.div`
//   height: auto;
//   ${(props) => props}
// `

export default function UploadProduct() {
  return (
    <Container>
      <Row>afafa</Row>
      <Row>affa</Row>
    </Container>
  )
}
