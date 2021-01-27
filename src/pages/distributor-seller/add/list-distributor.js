import React, { useState } from 'react'
import styled from 'styled-components'
import Theme from '../../../uikit/common/theme'
import Selectdropdown from '../../../uikit/components/select_dropdown'
import { Button } from '../../../uikit/components/button'
import InputSearch from '../../../uikit/components/input_search'
import dataJson from '../../../__json__/data.json'

import EditIcon from '../../../assets/icons/Edit'
import RemoveIcon from '../../../assets/icons/Close'

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

const StyledList = styled.div`
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  p {
    b {
      font-weight: 600;
    }
    a {
      color: ${Theme.colors.orange};
    }
  }
  padding: 0 15px;
`

const StyledText = styled.span`
  display: block;
  color: ${Theme.colors.gray};
  ${(props) => props};
`

const WrapperIcon = styled.span`
  display: flex;
  align-items: center;
  width: 25px;
`

export default function ListDistributor({ HandleModal }) {
  const { distributor_list } = dataJson
  const [filter, setFilter] = useState({
    role: [],
    region: [],
    sorting: '',
  })

  const HandleFilter = (key, e) => {
    let check = filter[key].includes(e)
    let newArr = filter[key]
    if (check) {
      setFilter({
        ...filter,
        [key]: newArr.filter((item) => item !== e),
      })
    } else {
      setFilter({
        ...filter,
        [key]: [...newArr, e],
      })
    }
  }

  const HandleSorting = (key, e) => {
    setFilter({
      ...filter,
      [key]: e,
    })
  }

  return (
    <Container>
      <Row background={Theme.colors.orangeSoft} padding="10px">
        <StyledList>
          <p>
            <b>
              Tambahkan distributor & seller untuk membantu memasarkan
              produk serta meningkatkan penjualan Toko Anda
            </b>
            <br />
            <a href="#coba">Informasi lebih lanjut</a>
          </p>
        </StyledList>
      </Row>
      <Row padding="20px 0">
        <Button
          variant="primary-orange"
          onClick={() => HandleModal('add_distributor_seller')}
        >
          + Tambah Distributor/Seller{' '}
        </Button>
      </Row>
      <Row
        display="grid"
        gridTemplateColumns="1fr 1fr"
        gridGap="30px"
      >
        <Col width="70%">
          <InputSearch placeholder="Cari nama distirbutor, seller, nama toko..." />
        </Col>
        <Col
          display="grid"
          gridTemplateColumns="repeat(3, 1fr)"
          gridGap="10px"
        >
          <Selectdropdown
            variant="checkbox"
            text="Peran"
            value={filter.role}
            onClick={(e) => HandleFilter('role', e)}
            list={[
              { text: 'Distributor', value: 'distributor' },
              { text: 'Seller', value: 'seller' },
            ]}
          />
          <Selectdropdown
            variant="checkbox"
            text="Wilayah"
            value={filter.region}
            onClick={(e) => HandleFilter('region', e)}
            list={[
              { text: 'Sumatera', value: 'sumatera' },
              { text: 'Jawa & Bali', value: 'jawa_bali' },
              { text: 'Sulawesi', value: 'sulawesi' },
              { text: 'Kalimantan', value: 'kalimantan' },
              { text: 'Nusa Tenggara', value: 'nusa' },
              { text: 'Maluku & Papua', value: 'maluku_papua' },
            ]}
          />
          <Selectdropdown
            variant="text"
            text="Urutkan"
            value={filter.sorting}
            onClick={(e) => HandleSorting('sorting', e)}
            list={[
              { text: 'Nama: A - Z', value: 's1' },
              { text: 'Nama: Z - A', value: 's2' },
            ]}
          />
        </Col>
      </Row>
      <Row
        display="grid"
        gridTemplateColumns="35% 15% 25% 25%"
        margin="20px 0 0 0"
        padding="10px 0"
        borderTop={`1px solid ${Theme.colors.gray5}`}
        color={Theme.colors.gray}
      >
        <Col>Nama</Col>
        <Col>Peran</Col>
        <Col>Informasi Lainnya</Col>
        <Col>Aksi</Col>
      </Row>
      {distributor_list.map((item, i) => (
        <Row
          key={String(i)}
          display="grid"
          gridTemplateColumns="35% 15% 25% 25%"
          padding="10px 0"
          borderTop={`1px solid ${Theme.colors.gray5}`}
        >
          <Col>
            <StyledText fontWeight="normal" fontSize="14px">
              {item.distributor_name}
            </StyledText>
            <StyledText fontWeight="normal" fontSize="12px">
              {item.distributor_location}
            </StyledText>
          </Col>
          <Col>
            <StyledText fontWeight="normal" fontSize="14px">
              {item.distributor_role}
            </StyledText>
          </Col>
          <Col>
            <StyledText fontWeight="normal" fontSize="14px">
              {item.information_other.name_shop}
            </StyledText>
            <StyledText fontWeight="normal" fontSize="12px">
              {item.information_other.email_shop}
            </StyledText>
            <StyledText fontWeight="normal" fontSize="12px">
              {item.information_other.phone}
            </StyledText>
          </Col>
          <Col>
            <StyledText
              display="flex"
              alignItems="center"
              fontSize="14px"
              fontWeight="normal"
              cursor="pointer"
              onClick={() =>
                HandleModal('edit_distributor_seller', i)
              }
            >
              <WrapperIcon>
                <EditIcon />
              </WrapperIcon>
              Ubah
            </StyledText>
            <StyledText
              display="flex"
              alignItems="center"
              fontSize="14px"
              fontWeight="normal"
              cursor="pointer"
            >
              <WrapperIcon>
                <RemoveIcon style={{ fill: `${Theme.colors.red}` }} />
              </WrapperIcon>
              Nonaktifkan
            </StyledText>
          </Col>
        </Row>
      ))}
    </Container>
  )
}
