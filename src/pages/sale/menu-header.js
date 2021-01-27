import React from 'react'
import styled from 'styled-components'
import SelectedButton from '../../uikit/components/selected_button'
import InputSearch from '../../uikit/components/input_search'
import { Button } from '../../uikit/components/button'
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

export default function MenuHeader({ slug }) {
  return (
    <ContainerMenu>
      <RowTop>
        <SelectedButton
          value="all-order"
          text="Semua Pesanan"
          isSelected={slug}
          linkTo={`/sale/all-order`}
        />
        <SelectedButton
          value="new-order"
          text="Pesanan Baru (2)"
          isSelected={slug}
          linkTo={`/sale/new-order`}
        />
        <SelectedButton
          value="need-shipped"
          text="Perlu Dikirim"
          isSelected={slug}
          linkTo={`/sale/need-shipped`}
        />
        <SelectedButton
          value="in-shipping"
          text="Dalam Pengiriman"
          isSelected={slug}
          linkTo={`/sale/in-shipping`}
        />
        <SelectedButton
          value="completed-order"
          text="Pesanan Selesai"
          isSelected={slug}
          linkTo={`/sale/completed-order`}
        />
        <SelectedButton
          value="canceled-order"
          text="Pesanan Dibatalkan"
          isSelected={slug}
          linkTo={`/sale/canceled-order`}
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
