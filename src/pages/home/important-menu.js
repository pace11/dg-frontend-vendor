import React from 'react'
import styled from 'styled-components'
import theme from '../../uikit/common/theme'
import PromoStoreIcon from '../../assets/icons/StorePromo'
import VoucherIcon from '../../assets/icons/Voucher'
import DiscountIcon from '../../assets/icons/Discount'
import ProductSpecialIcon from '../../assets/icons/ProductSpecial'
import LarisManisBanner from '../../assets/icons/LarisManis'

const ContainerMenu = styled.div`
  background: #ffffff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  box-sizing: border-box;
  padding: 20px;
  margin-bottom: 20px;
`

const TitleMenu = styled.div`
  width: 100%;
  p {
    margin: 0;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
  }
  small {
    color: ${theme.colors.gray};
  }
`

const Content = styled.div`
  width: 100%;
  margin: 10px 0 0 0;
  display: grid;
  grid-template-columns: repeat(${(props) => props.cols}, 1fr);
  box-sizing: border-box;
  div:not(:first-child) {
    border-left: 1px solid ${theme.colors.gray5};
  }
`

const Item = styled.div`
  text-align: center;
  small {
    color: ${theme.colors.gray};
  }
  p {
    margin: 20px 0;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    color: ${theme.colors.orange};
  }
`

const ItemImage = styled.div`
  display: flex;
  height: 100px;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  small {
    color: ${theme.colors.gray};
  }
`

const RowPromo = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding: 15px 0;
  margin-bottom: 10px;
  border-bottom: 1px solid ${theme.colors.gray5};
`

const TitlePromo = styled.p`
  margin: 0;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
`

export default function ImportantMenu() {
  return (
    <React.Fragment>
      <ContainerMenu>
        <TitleMenu>
          <p>Ini adalah hal penting</p>
          <small>
            Yang perlu ditangani untuk menjaga performa tokomu
          </small>
        </TitleMenu>
        <Content cols={5}>
          <Item>
            <small>Pesanan Baru</small>
            <p>0</p>
          </Item>
          <Item>
            <small>Pesanan Diproses</small>
            <p>0</p>
          </Item>
          <Item>
            <small>Pesanan Telah Dikirim</small>
            <p>0</p>
          </Item>
          <Item>
            <small>Chat Belum Dibaca</small>
            <p>0</p>
          </Item>
          <Item>
            <small>Produk Habis</small>
            <p>0</p>
          </Item>
        </Content>
      </ContainerMenu>
      <ContainerMenu>
        <TitleMenu>
          <p>Performa Toko</p>
          <small>Informasi mengenai data toko per hari</small>
        </TitleMenu>
        <Content cols={5}>
          <Item>
            <small>Kecepatan Membalas Chat</small>
            <p>0</p>
          </Item>
          <Item>
            <small>Persentase Membalas Chat</small>
            <p>0</p>
          </Item>
          <Item>
            <small>Kecepatan Pengiriman Pesanan</small>
            <p>0</p>
          </Item>
          <Item>
            <small>Jumlah Pesanan</small>
            <p>0</p>
          </Item>
          <Item>
            <small>Total Pengunjung</small>
            <p>0</p>
          </Item>
        </Content>
      </ContainerMenu>
      <ContainerMenu>
        <TitleMenu>
          <p>Performa Toko</p>
          <small>Informasi mengenai data toko per hari</small>
        </TitleMenu>
        <RowPromo>
          <LarisManisBanner />
        </RowPromo>
        <TitlePromo>Fitur Promo</TitlePromo>
        <Content cols={4}>
          <ItemImage>
            <PromoStoreIcon />
            <small>Promo Toko</small>
          </ItemImage>
          <ItemImage>
            <VoucherIcon />
            <small>Voucher</small>
          </ItemImage>
          <ItemImage>
            <DiscountIcon />
            <small>Diskon</small>
          </ItemImage>
          <ItemImage>
            <ProductSpecialIcon />
            <small>Produk Pilihan Toko</small>
          </ItemImage>
        </Content>
      </ContainerMenu>
    </React.Fragment>
  )
}
