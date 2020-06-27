import React from 'react'
import styled from 'styled-components'
import Theme from '../../common/theme'
import Utils from '../../../helpers/utils'

const Container = styled.div`
  width: 100%;
  height: auto;
  box-sizing: border-box;
  ${(props) => props}
`

const Row = styled(Container)`
  ${(props) => props}
`

const StyledSpan = styled.span`
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 18px;
  ${(props) => props}
  p {
    padding: 0;
    margin: 0;
  }
`

const StyledImg = styled.div`
  width: 100%;
  height: 90px;
  background-image: url(${(props) => props.imgUrl});
  background-color: ${Theme.colors.gray5};
  background-repeat: no-repeat;
  background-size: cover;
`

const StyledDesc = styled.div`
  width: 100%;
  display: inherit;
  white-space: normal;
  height: auto;
  ${(props) => props}
`

const StyledTable = styled.table`
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  color: ${Theme.colors.gray};
  border-spacing: 0;
`

export const Invoice = ({
  name,
  dateTime,
  invoiceNumber,
  status,
  statusDone,
  statusCanceled,
}) => {
  return (
    <Container>
      <Row>
        <StyledSpan fontWeight="600">{name}</StyledSpan>
        <StyledSpan marginLeft="20px">{dateTime}</StyledSpan>
      </Row>
      <Row display="flex" justifyContent="space-between">
        <StyledSpan fontWeight="600" color={Theme.colors.orange}>
          {invoiceNumber}
        </StyledSpan>
        <StyledSpan
          fontWeight="600"
          color={
            statusDone
              ? Theme.colors.green
              : statusCanceled
              ? Theme.colors.red
              : Theme.colors.orange
          }
        >
          {status}
        </StyledSpan>
      </Row>
    </Container>
  )
}

export const ProductDetail = ({
  imgUrl,
  productTitle,
  qty,
  weight,
  price,
  notes,
}) => {
  return (
    <Container margin="15px 0 0 0">
      <Row
        display="grid"
        gridTemplateColumns="3fr 7fr"
        gridGap="10px"
      >
        <div>
          <StyledImg imgUrl={imgUrl} />
        </div>
        <StyledDesc>
          <div>
            <StyledSpan>
              <p>{productTitle}</p>
            </StyledSpan>
            <StyledTable>
              <tbody>
                <tr>
                  <td>Jumlah</td>
                  <td>: {qty}</td>
                </tr>
                <tr>
                  <td>Berat</td>
                  <td>: {weight}</td>
                </tr>
                <tr>
                  <td>Harga</td>
                  <td>: {Utils.currency(price, 'Rp')}</td>
                </tr>
                <tr>
                  <td>Catatan</td>
                  <td>
                    :{' '}
                    <StyledSpan color={Theme.colors.orange}>
                      {notes}
                    </StyledSpan>
                  </td>
                </tr>
              </tbody>
            </StyledTable>
          </div>
        </StyledDesc>
      </Row>
    </Container>
  )
}

export const ResponseAddressBooking = ({
  responseTime,
  preOrder,
  name,
  address,
  bookingCode,
}) => {
  return (
    <React.Fragment>
      <Container minHeight="50px">
        {responseTime && (
          <Row>
            <StyledSpan>Batas Respon: </StyledSpan>
            <StyledSpan fontWeight="600" color={Theme.colors.orange}>
              {responseTime}
            </StyledSpan>
          </Row>
        )}
        {preOrder && (
          <Row>
            <StyledSpan>Pre Order: </StyledSpan>
            <StyledSpan fontWeight="600" color={Theme.colors.orange}>
              {preOrder}
            </StyledSpan>
          </Row>
        )}
      </Container>
      <Container>
        <Row>
          <StyledSpan fontWeight="600">{name}</StyledSpan>
        </Row>
        <StyledDesc marginTop="15px">
          <StyledSpan color={Theme.colors.gray}>
            <p>{address}</p>
          </StyledSpan>
        </StyledDesc>
      </Container>
      {bookingCode && (
        <Container marginTop="15px">
          <Row>
            <StyledSpan>Kode Booking:</StyledSpan>
          </Row>
          <Row>
            <StyledSpan color={Theme.colors.orange} fontWeight="600">
              {bookingCode}
            </StyledSpan>
          </Row>
        </Container>
      )}
    </React.Fragment>
  )
}

export const DetailCourier = ({ name, price }) => {
  return (
    <Container marginTop="45px">
      <Row>
        <StyledSpan fontWeight="600">{name}</StyledSpan>
      </Row>
      <StyledDesc marginTop="15px">
        <StyledSpan color={Theme.colors.gray}>
          {Utils.currency(price, 'Rp')}
        </StyledSpan>
      </StyledDesc>
    </Container>
  )
}

export const DetailPrice = ({
  total,
  productPrice,
  qty,
  shippingPrice,
}) => {
  return (
    <Container marginTop="45px">
      <Row>
        <StyledSpan fontWeight="600" color={Theme.colors.orange}>
          {Utils.currency(total, 'Rp')}
        </StyledSpan>
      </Row>
      <Row marginTop="15px">
        <StyledTable>
          <tbody>
            <tr>
              <td>Harga Produk</td>
              <td>
                :{' '}
                {Utils.currency(productPrice, 'Rp') +
                  ` (${qty} buah)`}
              </td>
            </tr>
            <tr>
              <td>Ongkos Kirim</td>
              <td>: {Utils.currency(shippingPrice, 'Rp')}</td>
            </tr>
          </tbody>
        </StyledTable>
      </Row>
    </Container>
  )
}
