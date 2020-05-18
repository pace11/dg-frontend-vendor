import React from 'react'
import styled from 'styled-components'
import StoreName from '../../components/store_name'
import Price from '../../components/price'
import theme from '../../common/theme'

const ContainerSidebar = styled.div`
  padding: 20px 10px 0 10px;
  width: 100%;
  min-height: 100%;
  background: #ffffff;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
`

const AccountInformation = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 0 20px 0;
  border-bottom: 1px solid ${theme.colors.gray5};
`

const WalletInformation = styled.div`
  padding: 10px 0;
  border-bottom: 1px solid ${theme.colors.gray5};
  p {
    margin: 0;
    font-size: 14px;
    font-style: normal;
    font-weight: 300;
    color: ${theme.colors.black};
  }
`

const ImageCircle = styled.div`
  width: 100px;
  min-height: 100px;
  background-image: url('https://res.cloudinary.com/code5/image/upload/v1589793836/dialogue/no-account_ks5tkz.png');
  background-size: contain;
  background-color: ${theme.colors.white2};
  border-radius: 50%;
`

const TitleBrand = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
`

export default function SidebarMenu() {
  return (
    <ContainerSidebar>
      <AccountInformation>
        <ImageCircle />
        <TitleBrand>Nama Brand</TitleBrand>
        <StoreName verified> Nama Brand</StoreName>
      </AccountInformation>
      <WalletInformation>
        <p>Saldo Youpay</p>
        <Price>500000000</Price>
      </WalletInformation>
    </ContainerSidebar>
  )
}
