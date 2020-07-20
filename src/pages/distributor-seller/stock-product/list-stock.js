import React, { useState } from 'react'
import styled from 'styled-components'
import Theme from '../../../uikit/common/theme'
import Selectdropdown from '../../../uikit/components/select_dropdown'
import InputSearch from '../../../uikit/components/input_search'
import dataJson from '../../../__json__/data.json'

import Arrow from '../../../assets/icons/Arrow2'

const ArrowIcon = styled(Arrow)`
  transform: rotate(90deg);
`

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

const StyledText = styled.span`
  display: block;
  color: ${Theme.colors.gray};
  ${(props) => props};
`

const RowContent = styled.div`
  height: auto;
  &:nth-of-type(even) {
    background: ${Theme.colors.orangeSoft};
  }
  &:nth-of-type(odd) {
    background: #fff;
  }
  ${(props) => props}
`

export default function ListDistributor({ HandleModal }) {
  const { distributor_list } = dataJson
  const [filter, setFilter] = useState({
    role: [],
    category: [],
    filter: '',
    sorting: '',
  })

  const HandleMultipleData = (key, e) => {
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

  const HandleSingleData = (key, e) => {
    setFilter({
      ...filter,
      [key]: e,
    })
  }

  return (
    <Container>
      <Row
        display="grid"
        gridTemplateColumns="2fr 1fr 1fr 1fr 1fr"
        gridGap="15px"
      >
        <InputSearch placeholder="Cari nama distirbutor, seller, nama toko..." />

        <Selectdropdown
          variant="checkbox"
          text="Peran"
          value={filter.role}
          onClick={(e) => HandleMultipleData('role', e)}
          list={[
            { text: 'Distributor', value: 'distributor' },
            { text: 'Seller', value: 'seller' },
          ]}
        />
        <Selectdropdown
          variant="checkbox"
          text="Kategori"
          value={filter.category}
          onClick={(e) => HandleMultipleData('category', e)}
          list={[
            { text: 'Kategori 1', value: 'cat_1' },
            { text: 'Kategori 2', value: 'cat_2' },
            { text: 'Kategori 3', value: 'cat_3' },
          ]}
        />
        <Selectdropdown
          variant="text"
          text="Filter"
          value={filter.filter}
          onClick={(e) => HandleSingleData('filter', e)}
          list={[
            { text: 'Filter 1', value: 'fil_1' },
            { text: 'Filter 2', value: 'fil_2' },
            { text: 'Filter 3', value: 'fil_3' },
          ]}
        />

        <Selectdropdown
          variant="text"
          text="Urutkan"
          value={filter.sorting}
          onClick={(e) => HandleSingleData('sorting', e)}
          list={[
            { text: 'Nama: A - Z', value: 's1' },
            { text: 'Nama: Z - A', value: 's2' },
          ]}
        />
      </Row>
      <Row
        display="grid"
        gridTemplateColumns="35% 20% 20% 20% 5%"
        margin="20px 0 0 0"
        padding="10px 0"
        borderTop={`1px solid ${Theme.colors.gray5}`}
        color={Theme.colors.gray}
      >
        <Col>Nama Distributor/Seller</Col>
        <Col>Nama Toko</Col>
        <Col>Peran</Col>
        <Col>Lokasi</Col>
      </Row>
      {distributor_list.map((item, i) => (
        <RowContent
          key={String(i)}
          display="grid"
          gridTemplateColumns="35% 20% 20% 20% 5%"
          padding="10px 0"
          cursor="pointer"
          borderTop={`1px solid ${Theme.colors.gray5}`}
          onClick={() => HandleModal(item.distributor_id)}
        >
          <Col>
            <StyledText fontWeight="normal" fontSize="14px">
              {item.distributor_name}
            </StyledText>
          </Col>
          <Col>
            <StyledText fontWeight="normal" fontSize="14px">
              {item.information_other.name_shop}
            </StyledText>
          </Col>
          <Col>
            <StyledText fontWeight="normal" fontSize="14px">
              {item.distributor_role}
            </StyledText>
          </Col>
          <Col>
            <StyledText fontWeight="normal" fontSize="14px">
              {item.distributor_location}
            </StyledText>
          </Col>
          <Col>
            <ArrowIcon />
          </Col>
        </RowContent>
      ))}
    </Container>
  )
}
