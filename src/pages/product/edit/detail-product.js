import React, { useState } from 'react'
import styled from 'styled-components'
import TextArea from '../../../uikit/components/text_area'
import { Text } from '../../../uikit/components/input'
import SelectDropdown from '../../../uikit/components/select_dropdown'
import Radio from '../../../uikit/components/radio'
import Switch from '../../../uikit/components/switch'
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

const Col = styled.div`
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

const StyledText = styled.span`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  span {
    color: ${Theme.colors.orange};
  }
  ${(props) => props}
`

export default function DetailProduct() {
  const [data, setData] = useState({
    charlength: 0,
    description: '',
    unit: '',
    price: '',
    weight: '',
    dimension_1: '',
    dimension_2: '',
    dimension_3: '',
    stock: '',
    condition: '',
    pre_order: false,
  })

  const HandleChange = (key, e) => {
    switch (key) {
      case 'description':
        setData({
          ...data,
          [key]: e.target.value,
          charlength: e.target.value.length,
        })
        break
      case 'pre_order':
        setData({
          ...data,
          [key]: !data.pre_order,
        })
        break
      default:
        setData({
          ...data,
          [key]: e,
        })
        break
    }
  }

  return (
    <Container>
      <Row padding="0 0 20px 0">
        <Title>Detail Produk</Title>
      </Row>
      <Row>
        <TextArea
          label="Deskripsi Produk"
          rows={10}
          onChange={(e) => HandleChange('description', e)}
          maxLength={2000}
          charLength={data.charlength}
        />
      </Row>
      <Row display="grid" gridTemplateColumns="repeat(2, 1fr)">
        <Text
          label="Harga Satuan"
          addOnLeft="Rp"
          onChange={(e) => HandleChange('price', e)}
        />
      </Row>
      <Row
        display="grid"
        gridTemplateColumns="repeat(2, 1fr)"
        gridGap="10px"
        alignItems="end"
      >
        <Col
          display="grid"
          gridTemplateColumns="7fr 3fr"
          gridGap="10px"
          alignItems="end"
        >
          <Text
            label="Perkiraan Berat"
            onChange={(e) => HandleChange('weight', e)}
          />
          <Col padding="10px 0">
            <SelectDropdown
              variant="text"
              value={data.unit}
              onClick={(e) => HandleChange('unit', e)}
              list={[
                { text: 'Kilogram', value: 'kg' },
                { text: 'Kilometer', value: 'km' },
              ]}
            />
          </Col>
        </Col>
        <Col>
          <WrapText>
            <p>
              Jika kemasan atau barang berukuran besar, gunakan berat
              volumetrik untuk menghindari selisih ongkos kirim
            </p>
          </WrapText>
        </Col>
      </Row>
      <Row display="grid" gridTemplateColumns="repeat(2, 1fr)">
        <Col>
          <Row display="grid" alignItems="end">
            <StyledText>
              <p>
                Kemasan atau barang berukuran besar?{' '}
                <span>Masukkan Dimensi</span>
              </p>
            </StyledText>
          </Row>
          <Row
            display="grid"
            gridTemplateColumns="repeat(3, 1fr)"
            gridGap="10px"
          >
            <Text
              addOnRight="Cm"
              onChange={(e) => HandleChange('dimension_1', e)}
            />
            <Text
              addOnRight="Cm"
              onChange={(e) => HandleChange('dimension_2', e)}
            />
            <Text
              addOnRight="Cm"
              onChange={(e) => HandleChange('dimension_3', e)}
            />
          </Row>
        </Col>
      </Row>
      <Row display="grid" gridTemplateColumns="repeat(2, 1fr)">
        <Text
          label="Stok"
          onChange={(e) => HandleChange('stok', e)}
        />
      </Row>
      <Row display="grid" gridTemplateColumns="repeat(2, 1fr)">
        <StyledText>
          <p>Kondisi Produk</p>
        </StyledText>
      </Row>
      <Row display="grid" gridTemplateColumns="repeat(2, 1fr)">
        <Col width="50%" display="flex" alignItems="center">
          <Radio
            text="Baru"
            value="new"
            isSelected={data.condition}
            onClick={() => HandleChange('condition', 'new')}
          />
          <Radio
            text="Bekas"
            value="second"
            isSelected={data.condition}
            onClick={() => HandleChange('condition', 'second')}
          />
        </Col>
      </Row>
      <Row display="flex" padding="20px 0" alignItems="center">
        <StyledText margin="0 20px 0 0">Pre order</StyledText>
        <Switch
          checked={data.pre_order}
          onChange={(e) => HandleChange('pre_order', e)}
        />
      </Row>
      <Row
        display="grid"
        gridTemplateColumns="repeat(2, 1fr)"
        gridGap="10px"
      >
        <Col>
          <Text
            placeholder="Masukkan waktu proses"
            caption="Maksimal 210 hari"
            onChange={(e) => HandleChange('stok', e)}
          />
        </Col>
        <Col>
          <WrapText>
            <p>
              Waktu proses harus diisi untuk mengetahui lama produk
              diproses
            </p>
          </WrapText>
        </Col>
      </Row>
    </Container>
  )
}
