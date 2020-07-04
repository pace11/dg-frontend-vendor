import React from 'react'
import styled from 'styled-components'
import InputRadio from '../../../uikit/components/selected_button'
import InputSearch from '../../../uikit/components/input_search'
import { Button } from '../../../uikit/components/button'

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
`

export default function MenuHeader({ isMenu, HandleChangeMenu }) {
  return (
    <ContainerMenu>
      <RowTop>
        <div>
          <InputRadio
            value="all_products"
            text="Semua Produk"
            isSelected={isMenu}
            onClick={() => HandleChangeMenu('all_products')}
          />
          <InputRadio
            value="on_sale"
            text="Dijual (2)"
            isSelected={isMenu}
            onClick={() => HandleChangeMenu('on_sale')}
          />
          <InputRadio
            value="not_sold"
            text="Tidak Dijual (3)"
            isSelected={isMenu}
            onClick={() => HandleChangeMenu('not_sold')}
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
        <Button block variant="secondary-outline">
          Kategori
        </Button>
        <Button block variant="secondary-outline">
          Filter
        </Button>
        <Button block variant="secondary-outline">
          Urutkan
        </Button>
      </RowBottom>
    </ContainerMenu>
  )
}
