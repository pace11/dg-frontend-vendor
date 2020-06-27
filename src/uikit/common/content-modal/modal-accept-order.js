import React from 'react'
import styled from 'styled-components'
import Button from '../../components/button'

const Container = styled.div`
  width: 100%;
  height: auto;
`

const WrapperButton = styled.div`
  display: flex;
  justify-content: flex-end;
  ul {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 21px;
  }
  div {
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 5px;
  }
`

export default function ModalAcceptOrder({ data }) {
  return (
    <Container>
      <ul>
        <li>
          Segera kirim pesanan sebelum batas pengiriman berakhir
        </li>
        <li>
          Cetak struk pengiriman atau tulis kode booking di kemasan
          paket
        </li>
      </ul>
      <WrapperButton>
        <div>
          <Button variant="secondary-outline">Batal</Button>
          <Button variant="primary-orange">Terima Pesanan</Button>
        </div>
      </WrapperButton>
    </Container>
  )
}
