import React, { useState } from 'react'
import styled from 'styled-components'
import Theme from '../../../uikit/common/theme'
import SelectDropdown from '../../../uikit/components/select_dropdown'
import { ProductDetail } from '../../../uikit/components/table_item'
import EyeIcon from '../../../assets/icons/Eye2'
import ShopIcon from '../../../assets/icons/Shop'
import Utils from '../../../helpers/utils'
import dataJson from '../../../__json__/data.json'

const Container = styled.div`
  width: 100%;
  height: auto;
`

const Row = styled.div`
  height: auto;
  ${(props) => props}
`

const RowContent = styled.div`
  height: auto;
  &:nth-of-type(odd) {
    border-top: 1px solid ${Theme.colors.gray5};
  }
  ${(props) => props}
`

const Col = styled.div`
  height: auto;
  ${(props) => props}
`

export default function ModalEditDistributtorSeller({ data }) {
  const { distributor_list, list_product } = dataJson
  const DetailDistributtor = distributor_list.filter(
    (item) => item.distributor_id === data,
  )
  const [form, setForm] = useState({
    period: '',
  })

  const HandleFillForm = (key, e) => {
    setForm({
      ...form,
      [key]: e,
    })
  }

  return (
    <Container>
      <Row fontSize="14px" fontStyle="normal">
        <span style={{ marginRight: '20px' }}>
          {DetailDistributtor[0].distributor_role}
        </span>
        <span style={{ marginRight: '20px' }}>
          {DetailDistributtor[0].distributor_location}
        </span>
        <span style={{ marginRight: '20px' }}>
          {DetailDistributtor[0].information_other.name_shop}
        </span>
      </Row>
      <Row padding="10px 5px" width="15%">
        <SelectDropdown
          variant="text"
          text="Periode"
          value={form.period}
          onClick={(e) => HandleFillForm('period', e)}
          list={[
            { text: 'Hari Ini', value: 'p_1' },
            { text: '1 Minggu', value: 'p_2' },
            { text: '1 Bulan', value: 'p_3' },
            { text: '3 Bulan', value: 'p_4' },
            { text: '6 Bulan', value: 'p_5' },
          ]}
        />
      </Row>
      <Row
        marginTop="10px"
        display="grid"
        gridTemplateColumns="4fr 2fr 2fr 2fr"
        gridGap="10px"
        fontSize="14px"
        borderBottom={`1px solid ${Theme.colors.gray5}`}
        padding="10px 0"
      >
        <Col>Produk</Col>
        <Col>Statistik</Col>
        <Col>Harga</Col>
        <Col>Sisa Stok</Col>
      </Row>
      {list_product.map((item, i) => (
        <RowContent
          key={String(i)}
          display="grid"
          gridTemplateColumns="4fr 2fr 2fr 2fr"
          gridGap="10px"
          padding="5px 0"
        >
          <Col>
            <ProductDetail productTitle={`${item.product_name}`} />
          </Col>
          <Col display="flex" alignItems="flex-start" fontSize="14px">
            <span
              style={{
                fontSize: '14px',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <EyeIcon
                style={{
                  marginRight: '5px',
                  transform: 'scale(0.8)',
                }}
              />
              Dilihat: {item.seen}
            </span>
            <span
              style={{
                fontSize: '14px',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <ShopIcon
                style={{
                  marginRight: '5px',
                  transform: 'scale(0.8)',
                }}
              />
              Terjual: {item.sold}
            </span>
          </Col>
          <Col>
            <span>{Utils.currency(item.product_price, 'Rp')}</span>
          </Col>
          <Col>{item.stok}</Col>
        </RowContent>
      ))}
    </Container>
  )
}
