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
      {menu === 'all_order' ? (
        <React.Fragment>
          <RowTitle>
            <div>Produk</div>
            <div>Catatan</div>
            <div>Jumlah</div>
            <div>Harga</div>
            <div>Aksi</div>
          </RowTitle>
          <RowContent>
            <p>Belum Ada Pesanan</p>
          </RowContent>
        </React.Fragment>
      ) : menu === 'new_order' ? (
        <React.Fragment>
          <RowTitle>
            <div>Produk</div>
            <div>Catatan</div>
            <div>Jumlah</div>
            <div>Harga</div>
            <div>Aksi</div>
          </RowTitle>
          <RowContent>
            <p>Produk Baru Belum Ada</p>
          </RowContent>
        </React.Fragment>
      ) : menu === 'need_to_be_sent' ? (
        <React.Fragment>
          <RowTitle>
            <div>Produk</div>
            <div>Catatan</div>
            <div>Jumlah</div>
            <div>Harga</div>
            <div>Aksi</div>
          </RowTitle>
          <RowContent>
            <p>Pesanan Perlu Dikirim Belum Ada</p>
          </RowContent>
        </React.Fragment>
      ) : menu === 'in_shipping' ? (
        <React.Fragment>
          <RowTitle>
            <div>Produk</div>
            <div>Catatan</div>
            <div>Jumlah</div>
            <div>Harga</div>
            <div>Aksi</div>
          </RowTitle>
          <RowContent>
            <p>Pesanan Dalam Pengiriman Belum Ada</p>
          </RowContent>
        </React.Fragment>
      ) : menu === 'order_completed' ? (
        <React.Fragment>
          <RowTitle>
            <div>Produk</div>
            <div>Catatan</div>
            <div>Jumlah</div>
            <div>Harga</div>
            <div>Aksi</div>
          </RowTitle>
          <RowContent>
            <p>Pesanan Selesai Belum Ada</p>
          </RowContent>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <RowTitle>
            <div>Produk</div>
            <div>Catatan</div>
            <div>Jumlah</div>
            <div>Harga</div>
            <div>Aksi</div>
          </RowTitle>
          <RowContent>
            <p>Pesanan Dibatalkan Belum Ada</p>
          </RowContent>
        </React.Fragment>
      )}
    </ContainerMenu>
  )
}
