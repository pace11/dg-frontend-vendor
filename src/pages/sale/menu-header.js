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

export default function MenuHeader({ status }) {
  return (
    <ContainerMenu>
      <RowTop>
        <SelectedButton
          value="all-order"
          text="Semua Pesanan"
          isSelected={status}
          linkTo={`/sale?status=all-order`}
        />
        <SelectedButton
          value="new-order"
          text="Pesanan Baru (2)"
          isSelected={status}
          linkTo={`/sale?status=new-order`}
        />
        <SelectedButton
          value="need-shipped"
          text="Perlu Dikirim"
          isSelected={status}
          linkTo={`/sale?status=need-shipped`}
        />
        <SelectedButton
          value="in-shipping"
          text="Dalam Pengiriman"
          isSelected={status}
          linkTo={`/sale?status=in-shipping`}
        />
        <SelectedButton
          value="completed-order"
          text="Pesanan Selesai"
          isSelected={status}
          linkTo={`/sale?status=completed-order`}
        />
        <SelectedButton
          value="canceled-order"
          text="Pesanan Dibatalkan"
          isSelected={status}
          linkTo={`/sale?status=canceled-order`}
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
