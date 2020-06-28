import React, { useState } from 'react'
import styled from 'styled-components'
import { Button } from '../../components/button'
import SelectDropdown from '../../components/select_dropdown'
import { Text } from '../../components/input'

const Container = styled.div`
  width: 100%;
  height: auto;
`

const Row = styled.div`
  height: auto;
  ${(props) => props}
`

const WrapperButton = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
  div:not(:first-child) {
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 10px;
  }
`

export default function ModalChangeShipping() {
  const [textSelect, setTextSelect] = useState({
    no_resi: '',
    shipping: '',
    shipping_packages: '',
  })

  const HandleClick = (key, e) => {
    setTextSelect({
      ...textSelect,
      [key]: e,
    })
  }

  return (
    <Container>
      <Row
        display="grid"
        gridTemplateColumns="1fr 1fr"
        gridGap="10px"
      >
        <SelectDropdown
          label="Jasa Pengiriman"
          value={textSelect.shipping}
          onClick={(e) => HandleClick('shipping', e)}
          list={[
            { text: 'Pilihan 1', value: 'pil_1' },
            { text: 'Pilihan 2', value: 'pil_2' },
          ]}
        />
        <SelectDropdown
          label="Paket Pengiriman"
          value={textSelect.shipping_packages}
          onClick={(e) => HandleClick('shipping_packages', e)}
          list={[
            { text: 'Pilihan 1', value: 'pil_1' },
            { text: 'Pilihan 2', value: 'pil_2' },
          ]}
        />
      </Row>
      <Row display="grid" gridTemplateColumns="1fr">
        <Text
          label="Nomor Resi"
          onChange={(e) =>
            setTextSelect({ ...textSelect, no_resi: e.target.value })
          }
        />
      </Row>
      <WrapperButton>
        <div>
          <Button
            variant="primary-orange"
            onClick={() => alert('Pesanan telah dikirim')}
          >
            Pesanan Telah Dikirim
          </Button>
        </div>
      </WrapperButton>
    </Container>
  )
}
