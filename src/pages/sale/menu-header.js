import React from 'react'
import styled from 'styled-components'
import InputRadio from '../../uikit/components/selected_button'
import InputSearch from '../../uikit/components/input_search'
import Button from '../../uikit/components/button'
import DownloadReport from '../../assets/icons/DownloadReport'

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
`

const RowBottom = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  grid-gap: 10px;
`

export default function MenuHeader({ isMenu, HandleChangeMenu }) {
  return (
    <ContainerMenu>
      <RowTop>
        <InputRadio
          value="all_order"
          text="Semua Pesanan"
          isSelected={isMenu}
          onClick={() => HandleChangeMenu('all_order')}
        />
        <InputRadio
          value="new_order"
          text="Pesanan Baru (2)"
          isSelected={isMenu}
          onClick={() => HandleChangeMenu('new_order')}
        />
        <InputRadio
          value="need_to_be_sent"
          text="Perlu Dikirim"
          isSelected={isMenu}
          onClick={() => HandleChangeMenu('need_to_be_sent')}
        />
        <InputRadio
          value="in_shipping"
          text="Dalam Pengiriman"
          isSelected={isMenu}
          onClick={() => HandleChangeMenu('in_shipping')}
        />
        <InputRadio
          value="order_completed"
          text="Pesanan Selesai"
          isSelected={isMenu}
          onClick={() => HandleChangeMenu('order_completed')}
        />
        <InputRadio
          value="canceled_order"
          text="Pesanan Dibatalkan"
          isSelected={isMenu}
          onClick={() => HandleChangeMenu('canceled_order')}
        />
      </RowTop>
      <RowBottom>
        <InputSearch />
        <Button block variant="secondary-outline">
          01 Mei 2020 - 01 Juni 2020
        </Button>
        <Button block variant="secondary-outline">
          <DownloadReport />
          Unduh Laporan Penjualan
        </Button>
      </RowBottom>
    </ContainerMenu>
  )
}
