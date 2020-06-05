import React from 'react'
import styled from 'styled-components'
import theme from '../../../uikit/common/theme'
import Checkbox from '../../../uikit/components/checkbox'

const ContainerMenu = styled.div`
  background: #ffffff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  box-sizing: border-box;
  padding: 10px 20px;
  margin-bottom: 20px;
`

const RowTitle = styled.div`
  width: 100%;
  padding: 0 10px;
  display: grid;
  height: 52px;
  grid-template-columns: 40% 20% 15% 15% 10%;
  font-size: 14px;
  div {
    display: flex;
    align-items: center;
  }
  border-bottom: 1px solid ${theme.colors.gray};
  box-sizing: border-box;
`

const RowContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.colors.red};
`

export default function ContentListProduct({
  menu,
  checkAllProduct,
  HandleCheckAllProduct,
}) {
  return (
    <ContainerMenu>
      <RowTitle>
        <div>
          <Checkbox
            label="Produk"
            checked={checkAllProduct}
            onClick={() => HandleCheckAllProduct()}
          />
        </div>
        <div>Statistik</div>
        <div>Harga</div>
        <div>Stok</div>
        <div>Aksi</div>
      </RowTitle>
      {menu === 'all_products' ? (
        <RowContent>
          <p>Belum Ada Produk</p>
        </RowContent>
      ) : menu === 'on_sale' ? (
        <RowContent>
          <p>Belum Ada Produk Dijual</p>
        </RowContent>
      ) : (
        <RowContent>
          <p>Belum Ada Produk Tidak Dijual</p>
        </RowContent>
      )}
    </ContainerMenu>
  )
}
