import React from 'react'
import styled from 'styled-components'
import Theme from '../../uikit/common/theme'
import {
  Invoice,
  ProductDetail,
  ResponseOrder,
  AddressOrder,
  DetailCourier,
  DetailPrice,
} from '../../uikit/components/table_item'
import { Button, ButtonDropdown } from '../../uikit/components/button'
import StatusSearch from '../../assets/icons/StatusSearch'
import Print from '../../assets/icons/Print'
import Arrow from '../../assets/icons/Arrow2'

const StatusSearchIcon = styled(StatusSearch)`
  fill: ${Theme.colors.black};
`

const PrintIcon = styled(Print)`
  fill: ${Theme.colors.black};
`

const ArrowIcon = styled(Arrow)`
  transform: rotate(180deg);
`

const ContainerMenu = styled.div`
  background: #ffffff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  box-sizing: border-box;
  padding: 10px 20px;
  margin-bottom: 20px;
`

const ContainerContent = styled.div`
  width: 100%;
  height: auto;
`

const Row = styled.div`
  height: auto;
  ${(props) => props}
`

const Col = styled.div`
  height: auto;
  padding: 0 10px;
  ${(props) => props}
`

const RowTitle = styled.div`
  width: 100%;
  padding: 0 10px;
  display: grid;
  height: 52px;
  grid-template-columns: 35% 25% 15% 25%;
  font-size: 14px;
  div {
    display: flex;
    align-items: center;
    padding: 0 10px;
  }
  border-bottom: 1px solid ${Theme.colors.gray};
  box-sizing: border-box;
`

const RowContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  height: auto;
`

export default function ContentSale({ handleModal, data }) {
  return (
    <ContainerMenu>
      <RowTitle>
        <div>Produk</div>
        <div>Pengiriman</div>
        <div>Jasa Pengiriman</div>
        <div>Total Harga</div>
      </RowTitle>
      <RowContent>
        {data.map((item, i) => (
          <ContainerContent key={String(i)}>
            <Row
              display="grid"
              margin="10px 0 0 0"
              gridTemplateColumns="35% 65%"
            >
              <Col>
                <Invoice
                  name={`${item.cust_name}`}
                  dateTime={`${item.booking_date}`}
                  invoiceNumber={`${item.order_id}`}
                  status={`${item.on_shipping_status}`}
                  statusDone={false}
                  statusCancel={false}
                />
              </Col>
              <Col borderLeft={`1px solid ${Theme.colors.gray4}`}>
                <ResponseOrder
                  responseTime={`${item.response_deadline_hour} jam`}
                  preOrder={item.response_deadline_status}
                />
              </Col>
            </Row>
            <Row display="grid" gridTemplateColumns="35% 25% 15% 25%">
              <Col>
                <Row
                  display="grid"
                  gridTemplateColumns="1fr"
                  gridGap="5px"
                >
                  {item.product_details.map((items, j) => (
                    <Col key={String(j)}>
                      <ProductDetail
                        productTitle={`${items.product_name}`}
                        qty={`${items.qty}`}
                        weight={`${items.weight} gram`}
                        price={`${items.product_price}`}
                        notes={`${items.notes}`}
                        showDetail
                      />
                    </Col>
                  ))}
                </Row>
              </Col>
              <Col borderLeft={`1px solid ${Theme.colors.gray4}`}>
                <AddressOrder
                  name={`${item.shipping_details.receiver_name}`}
                  address={`${item.shipping_details.shipping_address}, ${item.shipping_details.shipping_kec}, ${item.shipping_details.shipping_kel}, ${item.shipping_details.shipping_city}, ${item.shipping_details.shipping_province}, ${item.shipping_details.shipping_postalcode}, ${item.shipping_details.shipping_phonenumber}`}
                  bookingCode={`${item.booking_code}`}
                />
              </Col>
              <Col borderLeft={`1px solid ${Theme.colors.gray4}`}>
                <DetailCourier
                  name={`${item.shipping_details.shipping_v}`}
                  price={item.shipping_details.shipping_cost}
                />
              </Col>
              <Col borderLeft={`1px solid ${Theme.colors.gray4}`}>
                <DetailPrice
                  total={item.total_cost}
                  listProduct={item.product_details}
                  qty={10}
                  shippingPrice={item.shipping_details.shipping_cost}
                />
              </Col>
            </Row>
            <Row
              display="flex"
              justifyContent="space-between"
              margin="10px 0"
              boxSizing="border-box"
            >
              <Col
                display="grid"
                gridTemplateColumns="repeat(4, auto)"
                gridGap="10px"
              >
                {/* <Button
                  variant="secondary-outline"
                  onClick={() => alert('chat pembeli')}
                >
                  <ChatIcon /> Chat Pembeli
                </Button> */}
                <Button
                  variant="secondary-outline"
                  onClick={() => handleModal('status_order')}
                >
                  <StatusSearchIcon />
                  Status Pesanan
                </Button>
                <Button
                  variant="secondary-outline"
                  linkTo={`/print/receipt`}
                >
                  <PrintIcon />
                  Cetak Struk Pengiriman
                </Button>
                <ButtonDropdown
                  variant="secondary-outline"
                  onClick={(e) => handleModal(e)}
                  list={[
                    {
                      text: 'Ganti Jasa Pengiriman',
                      value: 'change_shipping',
                    },
                    {
                      text: 'Batalkan Pesanan',
                      value: 'canceled_order',
                    },
                  ]}
                >
                  Menu Lainnya <ArrowIcon />
                </ButtonDropdown>
              </Col>
              <Col
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
              </Col>
            </Row>
          </ContainerContent>
        ))}
      </RowContent>
    </ContainerMenu>
  )
}
