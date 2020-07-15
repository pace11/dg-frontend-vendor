import React, { useState } from 'react'
import styled from 'styled-components'
import SelectedButton from '../../../uikit/components/selected_button'
import InputSearch from '../../../uikit/components/input_search'
import { Button } from '../../../uikit/components/button'
import Selectdropdown from '../../../uikit/components/select_dropdown'

const ContainerMenu = styled.div`
  background: #ffffff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  box-sizing: border-box;
  padding: 20px;
  margin-bottom: 20px;
`

const RowTop = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 85% 15%;
`

const RowBottom = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 3fr 1fr 1fr 1fr;
  grid-gap: 10px;
  align-items: center;
`

export default function MenuHeader({ slug }) {
  const [filter, setFilter] = useState({
    category: [],
    filter: [],
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
    <ContainerMenu>
      <RowTop>
        <div>
          <SelectedButton
            value="all-product"
            text="Semua Produk"
            isSelected={slug}
            linkTo={`/products/all-product`}
          />
          <SelectedButton
            value="on-sale"
            text="Dijual (2)"
            isSelected={slug}
            linkTo={`/products/on-sale`}
          />
          <SelectedButton
            value="not-sold"
            text="Tidak Dijual (3)"
            isSelected={slug}
            linkTo={`/products/not-sold`}
          />
        </div>
        <div>
          <Button
            block
            variant="primary-orange"
            linkTo={`/product/add`}
          >
            + Tambah Product
          </Button>
        </div>
      </RowTop>
      <RowBottom>
        <InputSearch />
        <Selectdropdown
          variant="checkbox"
          text="Kategori"
          value={filter.category}
          onClick={(e) => HandleFilter('category', e)}
          list={[
            { text: 'Kategori 1', value: 'category_1' },
            { text: 'Kategori 2', value: 'category_2' },
            { text: 'Kategori 3', value: 'category_3' },
          ]}
        />
        <Selectdropdown
          variant="checkbox"
          text="Filter"
          value={filter.filter}
          onClick={(e) => HandleFilter('filter', e)}
          list={[
            { text: 'Baru', value: 'new' },
            { text: 'Bekas', value: 'second' },
            { text: 'Stok Kosong', value: 'empty_stock' },
            { text: 'Pre Order', value: 'pre_order' },
            { text: 'Produk Unggulan', value: 'star_product' },
          ]}
        />
        <Selectdropdown
          variant="text"
          value={filter.sorting}
          text="Urutkan"
          onClick={(e) => HandleSorting('sorting', e)}
          list={[
            { text: 'Terakhir Diubah', value: 's1' },
            { text: 'Paling Laku', value: 's2' },
            { text: 'Rendah Peminat', value: 's3' },
            { text: 'Harga Tinggi', value: 's4' },
            { text: 'Harga Terendah', value: 's5' },
            { text: 'Alfabet: A-Z', value: 's6' },
            { text: 'Alfabet: Z-A', value: 's7' },
          ]}
        />
      </RowBottom>
    </ContainerMenu>
  )
}
