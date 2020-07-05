import React, { useState } from 'react'
import styled from 'styled-components'
import { Button } from '../../components/button'
import { ProductDetail } from '../../components/table_item'
import { Text } from '../../components/input'
import Switch from '../../components/switch'

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

export default function ModalRememberProduct() {
  const [remember, setRemember] = useState(false)

  return (
    <Container>
      <Row display="flex" padding="10px 0">
        <StyledText marginRight="15px">
          Ingatkan Stok Produk
        </StyledText>
        <Switch
          checked={remember}
          onChange={() => setRemember(!remember)}
        />
      </Row>
      <Row>
        <ProductDetail productTitle="Uneed Nylon Kabel Data Micro USB Fast Charging 2.1A - UCBM1 " />
      </Row>

      <Row
        display="grid"
        gridTemplateColumns="8fr 2fr"
        gridGap="10px"
        alignItems="center"
      >
        <StyledText fontSize="14px" fontWeight="300">
          Pengingat akan aktif jika stok produk kurang dari
        </StyledText>
        <Text placeholder="0" />
      </Row>
      <Row display="flex" justifyContent="flex-end" padding="20px 0">
        <Col width="200px">
          <Button
            variant="primary-orange"
            onClick={() => alert('Simpan Berhasil')}
            block
          >
            Simpan
          </Button>
        </Col>
      </Row>
    </Container>
  )
}
