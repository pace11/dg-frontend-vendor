import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: auto;
  margin-bottom: 65px;
`
const TitlePage = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 30px;
  margin-left: 30px;
`

/**
 *
 * @param {String} props.Title
 * @param {String, <any>} props.children
 */
export default function Section({ title, children }) {
  return (
    <Container>
      <TitlePage>{title}</TitlePage>
      {children}
    </Container>
  )
}
