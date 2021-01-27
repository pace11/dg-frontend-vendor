import React from 'react'
import styled from 'styled-components'
import { Button } from '../../components/button'
import { ProductDetail } from '../../components/table_item'

const Container = styled.div`
  width: 100%;
  height: auto;
`

const Row = styled.div`
  height: auto;
  ${(props) => props}
`

const Col = styled.div`
  height: auto;
  ${(props) => props}
`

const StyledText = styled.span`
  width: auto;
  height: auto;
  ${(props) => props}
`

export default function ModalDeleteProduct() {
  return (
    <Container>
      <Row padding="20px 0">
        <StyledText fontWeight="bold">
          Anda yakin akan menghapus produk ini?
        </StyledText>
      </Row>
      <Row>
        <ProductDetail productTitle="Uneed Nylon Kabel Data Micro USB Fast Charging 2.1A - UCBM1 " />
      </Row>
      <Row display="flex" justifyContent="flex-end" padding="20px 0">
        <Col
          display="grid"
          gridTemplateColumns="repeat(2, 1fr)"
          gridGap="10px"
        >
          <Col width="150px">
            <Button
              variant="primary-outline"
              onClick={() => alert('Batalkan Berhasil')}
              block
            >
              Batalkan
            </Button>
          </Col>
          <Col width="150px">
            <Button
              variant="primary-orange"
              onClick={() => alert('Simpan Berhasil')}
              block
            >
              Simpan
            </Button>
          </Col>
        </Col>
      </Row>
    </Container>
  )
}
