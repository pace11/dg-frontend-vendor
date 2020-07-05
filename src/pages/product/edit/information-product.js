import React, { useState } from 'react'
import styled from 'styled-components'
import { Text } from '../../../uikit/components/input'
import SelectDropdown from '../../../uikit/components/select_dropdown'
import Theme from '../../../uikit/common/theme'

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

const WrapText = styled.div`
  width: 100%;
  display: inherit;
  white-space: normal;
  padding: 10px 0;
  p {
    margin: 0;
    text-align: left;
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    color: ${Theme.colors.gray4};
  }
`

const Title = styled.span`
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
`

export default function InformationProduct() {
  const [data, setData] = useState({
    product_name: '',
    product_category: '',
  })

  const HandleChange = (key, e) => {
    if (key === 'product_name') {
      setData({
        ...data,
        product_name: e.target.value,
      })
    } else {
      setData({
        ...data,
        product_category: e,
      })
    }
  }

  return (
    <Container>
      <Row padding="0 0 20px 0">
        <Title>Informasi Produk</Title>
      </Row>
      <Row
        display="grid"
        gridTemplateColumns="repeat(2, 1fr)"
        gridGap="5px"
        alignItems="end"
      >
        <Text
          label="Nama Produk"
          onChange={(e) => HandleChange('product_name', e)}
        />
        <WrapText>
          <p>
            Pastikan nama barang memuat merek, tipe & spesifikasi
            penting Nama masih dapat diubah jika barang belum masuk ke
            transaksi
          </p>
        </WrapText>
        <SelectDropdown
          variant="text"
          label="Nama Produk"
          value={data.product_category}
          onClick={(e) => HandleChange('product_category', e)}
          list={[
            { text: 'Pilihan 1', value: 'pil_1' },
            { text: 'Pilihan 2', value: 'pil_2' },
          ]}
        />
      </Row>
    </Container>
  )
}
