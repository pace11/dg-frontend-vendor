import React from 'react'
import styled from 'styled-components'
import Theme from '../../uikit/common/theme'
import {
  Invoice,
  ProductDetail,
  ResponseAddressBooking,
  DetailCourier,
  DetailPrice,
} from '../../uikit/components/table_item'
import Button from '../../uikit/components/button'
import StatusSearch from '../../assets/icons/StatusSearch'
import Print from '../../assets/icons/Print'
import Chat from '../../assets/icons/Chat2'
import Arrow from '../../assets/icons/Arrow2'

const Container = styled.div`
  width: 100%;
  height: auto;
`

const Row = styled.div`
  height: auto;
  ${(props) => props}
`

const ColProduct = styled.div`
  height: auto;
  padding: 0 10px;
`

const ColShipping = styled(ColProduct)`
  border-left: 1px solid ${Theme.colors.gray4};
  padding: 0 10px;
`

const ColShippingCourier = styled(ColShipping)``

const ColTotalPrice = styled(ColShipping)``

const WrapperButton = styled.div`
  height: auto;
  width: auto;
  ${(props) => props}
`

const ChatIcon = styled(Chat)`
  fill: ${Theme.colors.black};
`

const StatusSearchIcon = styled(StatusSearch)`
  fill: ${Theme.colors.black};
`

const PrintIcon = styled(Print)`
  fill: ${Theme.colors.black};
`

const ArrowIcon = styled(Arrow)`
  transform: rotate(180deg);
`

export default function ListContentSale({ handleModal }) {
  return (
    <React.Fragment>
      <Container>
        <Row
          display="grid"
          margin="10px 0"
          gridTemplateColumns="35% 25% 15% 25%"
        >
          <ColProduct>
            <Invoice
              name="Ryan Pace"
              dateTime="24 Jun 2020 , 19:31 WIB"
              invoiceNumber="INV/24062020/9021878321"
              status="Pesanan Baru"
              statusDone={false}
              statusCancel={false}
            />
            <ProductDetail
              productTitle="Uneed Nylon Kabel Data Micro USB Fast Charging 2.1A -
            UCBM1"
              qty="1"
              weight="160 gr"
              price={90500}
              notes="Navy Blue"
            />
          </ColProduct>
          <ColShipping>
            <ResponseAddressBooking
              responseTime="23 Jam"
              preOrder="7 Hari"
              name="Ryan Pace"
              address="Cluster Hijau Sentosa Blok Z No.90 Kel. Wonocolo, Kec. Mulyosari Kota Tangerang Selatan, Banten, 15321 082209326543"
              bookingCode="TJNE-RGHEKA90328"
            />
          </ColShipping>
          <ColShippingCourier>
            <DetailCourier name="Wahana Tarif Normal" price={18000} />
          </ColShippingCourier>
          <ColTotalPrice>
            <DetailPrice
              total={50000}
              productPrice={35000}
              qty={1}
              shippingPrice={15000}
            />
          </ColTotalPrice>
        </Row>
        <Row display="flex" justifyContent="space-between">
          <WrapperButton
            display="grid"
            gridTemplateColumns="repeat(4, auto)"
            gridGap="10px"
          >
            <Button
              variant="secondary-outline"
              onClick={() => alert('chat pembeli')}
            >
              <ChatIcon /> Chat Pembeli
            </Button>
            <Button
              variant="secondary-outline"
              onClick={() => handleModal('status_order')}
            >
              <StatusSearchIcon />
              Status Pesanan
            </Button>
            <Button variant="secondary-outline">
              <PrintIcon />
              Cetak Struk Pengiriman
            </Button>
            <Button variant="secondary-outline">
              Menu Lainnya <ArrowIcon />
            </Button>
          </WrapperButton>
          <WrapperButton
            display="grid"
            gridTemplateColumns="repeat(2, auto)"
            gridGap="10px"
          >
            <Button
              variant="primary-outline"
              onClick={() => handleModal('reject_order')}
            >
              Tolak Pesanan
            </Button>
            <Button
              variant="primary-orange"
              onClick={() => handleModal('accept_order')}
            >
              Terima Pesanan
            </Button>
          </WrapperButton>
        </Row>
      </Container>
    </React.Fragment>
  )
}
