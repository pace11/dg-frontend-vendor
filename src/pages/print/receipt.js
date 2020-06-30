import React from 'react'
import styled from 'styled-components'
import Layout from '../../uikit/common/layout-clear'
import { Button } from '../../uikit/components/button'
import Print from '../../assets/icons/Print'
import Receipt from '../../uikit/components/receipt'

const PrintIcon = styled(Print)`
  fill: white !important;
`

const Container = styled.div`
  padding: 1rem 7rem;
  display: grid;
  grid-template-columns: 1fr;
`

const Row = styled.div`
  width: 100%;
  height: auto;
  ${(props) => props}
`

export default function PrintReceipt() {
  return (
    <Layout>
      <Container>
        <Row>
          <Button variant="primary-orange">
            <PrintIcon />
            Cetak
          </Button>
        </Row>
        <Row marginTop="15px">
          <Receipt />
        </Row>
      </Container>
    </Layout>
  )
}
