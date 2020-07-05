import React, { useState } from 'react'
import { useStoreDispatch, useStoreState } from 'easy-peasy'
import styled from 'styled-components'
import Radio from '../../../uikit/components/radio'
import { Button } from '../../../uikit/components/button'
import Theme from '../../../uikit/common/theme'
import dataJson from '../../../__json__/data.json'

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

const Col = styled.div`
  height: auto;
  ${(props) => props}
`

const Title = styled.span`
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
`

const StyledList = styled.ul`
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  li {
    padding: 5px;
  }
`

const StyledText = styled.span`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  span {
    color: ${Theme.colors.orange};
  }
  ${(props) => props}
`

const WrapText = styled.div`
  width: 100%;
  display: inherit;
  white-space: normal;
  color: ${Theme.colors.gray};
`

export default function ShippingProduct() {
  const [insurance, setInsurance] = useState('')
  const { predifined_shipping, predifined_free_shipping } = dataJson
  const dispatch = useStoreDispatch()
  const {
    GetDataTypeShipping: stateDataTypeShipping,
    GetLocationFreeShipping: stateLocationFreeShipping,
  } = useStoreState((globalState) => globalState)
  const typeShipping =
    stateDataTypeShipping && stateDataTypeShipping.initialState
  const locationFreeShipping =
    stateLocationFreeShipping &&
    stateLocationFreeShipping.initialState

  const HandleModal = (e) => {
    dispatch.ModalGlobal.setModalGlobal({ name: e, show: true })
  }

  return (
    <Container>
      <Row padding="0 0 20px 0">
        <Title>Pengiriman</Title>
      </Row>
      <Row background={Theme.colors.orangeSoft} padding="10px">
        <p style={{ margin: '0 25px', fontSize: '14px' }}>
          Batas waktu proses pesanan
        </p>
        <StyledList>
          <li>Reguler: 2 hari kerja</li>
          <li>Kilat: 2x24 jam</li>
          <li>Sameday Service: 1x24 jam</li>
        </StyledList>
      </Row>
      <Row
        display="grid"
        gridTemplateColumns="4fr 6fr"
        gridGap="10px"
        padding="15px 0"
      >
        <Col
          width="100%"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <p style={{ fontSize: '14px', fontWeight: '300' }}>
            Jasa pengiriman produk
          </p>
          <div style={{ width: '160px' }}>
            <Button
              variant="secondary-outline"
              onClick={() => HandleModal('set_shipping')}
              block
            >
              Atur Pengiriman
            </Button>
          </div>
        </Col>
        <Col>
          <WrapText>
            <Col>
              <StyledText display="block" fontWeight="600">
                Jasa pengiriman barang ini:
              </StyledText>
            </Col>
            <Col>
              {predifined_shipping.map((item) =>
                item.data.map(
                  (items, i) =>
                    typeShipping.data.includes(items.id) && (
                      <StyledText key={String(i)}>
                        {items.text},{' '}
                      </StyledText>
                    ),
                ),
              )}
              {typeShipping.data.length < 1 && `-`}
            </Col>
          </WrapText>
        </Col>
      </Row>
      <Row
        display="grid"
        gridTemplateColumns="4fr 6fr"
        gridGap="10px"
        alignItems="start"
        padding="15px 0"
      >
        <Col
          width="100%"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <p style={{ fontSize: '14px', fontWeight: '300' }}>
            Gratis Ongkos Kirim
          </p>
          <div style={{ width: '160px' }}>
            <Button
              variant="secondary-outline"
              onClick={() => HandleModal('location_free_shipping')}
              block
            >
              Pilih Daerah
            </Button>
          </div>
        </Col>
        <Col>
          <WrapText>
            <Col>
              <StyledText display="block" fontWeight="600">
                Jasa pengiriman barang ini:
              </StyledText>
            </Col>
            <Col>
              {predifined_free_shipping.map((item) =>
                item.data.map(
                  (items, i) =>
                    locationFreeShipping.data.includes(items.id) && (
                      <StyledText key={String(i)}>
                        {items.text},{' '}
                      </StyledText>
                    ),
                ),
              )}
              {locationFreeShipping.data.length < 1 && `-`}
            </Col>
          </WrapText>
        </Col>
      </Row>
      <Row display="grid" gridTemplateColumns="repeat(2, 1fr)">
        <StyledText>
          <p>Asuransi</p>
        </StyledText>
      </Row>
      <Row display="grid" gridTemplateColumns="repeat(2, 1fr)">
        <Col width="50%" display="flex" alignItems="center">
          <Radio
            text="Opsional"
            value="option"
            isSelected={insurance}
            onClick={() => setInsurance('option')}
          />
          <Radio
            text="Wajib"
            value="required"
            isSelected={insurance}
            onClick={() => setInsurance('required')}
          />
        </Col>
      </Row>
      <Row display="flex" justifyContent="flex-end">
        <Col
          display="grid"
          gridTemplateColumns="repeat(3, 1fr)"
          gridGap="10px"
        >
          <Button
            variant="primary-orange-outline"
            block
            onClick={() => alert('simpan ke draf success')}
          >
            Simpan ke Draf
          </Button>
          <Button
            variant="primary-orange-outline"
            block
            onClick={() => alert('jual & tambah lagi')}
          >
            Jual & Tambah Lagi
          </Button>
          <Button
            variant="primary-orange"
            block
            onClick={() => alert('jual success')}
          >
            Jual
          </Button>
        </Col>
      </Row>
    </Container>
  )
}
