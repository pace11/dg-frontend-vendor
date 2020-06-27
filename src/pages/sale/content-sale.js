import React from 'react'
import styled from 'styled-components'
import theme from '../../uikit/common/theme'
import ListContentSale from './list-content-sale'

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
  grid-template-columns: 35% 25% 15% 25%;
  font-size: 14px;
  div {
    display: flex;
    align-items: center;
  }
  border-bottom: 1px solid ${theme.colors.gray};
  box-sizing: border-box;
`

const RowContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  height: auto;
`

export default function ContentSale({
  menu,
  handleModal,
}) {
  return (
    <ContainerMenu>
      <RowTitle>
        <div>Produk</div>
        <div>Pengiriman</div>
        <div>Jasa Pengiriman</div>
        <div>Total Harga</div>
      </RowTitle>
      {menu === 'all_order' ? (
        <RowContent>
          <ListContentSale
            handleModal={handleModal}
          />
        </RowContent>
      ) : menu === 'new_order' ? (
        <RowContent>
          <p>Produk Baru Belum Ada</p>
        </RowContent>
      ) : menu === 'need_to_be_sent' ? (
        <RowContent>
          <p>Pesanan Perlu Dikirim Belum Ada</p>
        </RowContent>
      ) : menu === 'in_shipping' ? (
        <RowContent>
          <p>Pesanan Dalam Pengiriman Belum Ada</p>
        </RowContent>
      ) : menu === 'order_completed' ? (
        <RowContent>
          <p>Pesanan Selesai Belum Ada</p>
        </RowContent>
      ) : (
        <RowContent>
          <p>Pesanan Dibatalkan Belum Ada</p>
        </RowContent>
      )}
    </ContainerMenu>
  )
}
