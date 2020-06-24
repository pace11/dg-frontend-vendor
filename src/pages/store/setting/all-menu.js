import React from 'react'
import styled from 'styled-components'
import Theme from '../../../uikit/common/theme'
import StoreIcon from '../../../assets/icons/Store'
import AddressIcon from '../../../assets/icons/Address'
import ShippingIcon from '../../../assets/icons/Shipping'
import WalletIcon from '../../../assets/icons/Wallet'
import ChatIcon from '../../../assets/icons/ChatStore'
import NotificationIcon from '../../../assets/icons/NotificationStore'

const ContainerAllMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
`

const Row = styled.div`
  height: auto;
  display: grid;
  grid-template-columns: 1fr 9fr;
  padding: 10px;
  background: #ffffff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  div:first-child {
    svg {
      transform: scale(0.8);
    }
  }
  div:not(:first-child) {
    width: 100%;
    display: inherit;
    white-space: normal;
  }
`

const Title = styled.p`
  margin: 0;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  color: ${Theme.colors.black};
`

const Description = styled.p`
  padding: 0;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  color: ${Theme.colors.black};
`

export default function AllMenu() {
  return (
    <ContainerAllMenu>
      <Row>
        <div>
          <StoreIcon />
        </div>
        <div>
          <Title>Toko</Title>
          <Description>
            Atur nama toko, header, gambar, email dan nomor ponsel
            penjual. Kamu juga bisa menutup sementara tokomu.
          </Description>
        </div>
      </Row>
      <Row>
        <div>
          <AddressIcon />
        </div>
        <div>
          <Title>Alamat</Title>
          <Description>
            Atur lokasi toko dan asal pengiriman disini. Lokasi
            digunakan untuk perhitungan ongkos kirim pembeli.
          </Description>
        </div>
      </Row>
      <Row>
        <div>
          <ShippingIcon />
        </div>
        <div>
          <Title>Pengiriman</Title>
          <Description>
            Atur jasa pengiriman, jadwal pengiriman dan batas waktu
            input resi di tokomu.
          </Description>
        </div>
      </Row>
      <Row>
        <div>
          <WalletIcon />
        </div>
        <div>
          <Title>Rekening Bank</Title>
          <Description>
            Atur dan tambah nomor rekening untuk mencairkan dana hasil
            penjualan ditokomu.
          </Description>
        </div>
      </Row>
      <Row>
        <div>
          <ChatIcon />
        </div>
        <div>
          <Title>Template Chat</Title>
          <Description>
            Atur balasan chat otomatis ketika ada pesanan baru dari
            pembeli.
          </Description>
        </div>
      </Row>
      <Row>
        <div>
          <NotificationIcon />
        </div>
        <div>
          <Title>Notifikasi</Title>
          <Description>
            Atur notifikasi yang masuk dari dialogue atau pembeli.
          </Description>
        </div>
      </Row>
    </ContainerAllMenu>
  )
}
