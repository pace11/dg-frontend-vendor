import React from 'react'
import styled from 'styled-components'
import theme from '../../uikit/common/theme'

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

export default function MenuHeader({ menu }) {
  return (
    <ContainerMenu>
      <RowTitle>
        <div>Produk</div>
        <div>Pengiriman</div>
        <div>Total Harga</div>
        <div>Status</div>
        <div>Aksi</div>
      </RowTitle>
      {menu === 'all_order' ? (
        <RowContent>
          <p>Belum Ada Pesanan</p>
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
