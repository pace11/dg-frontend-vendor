import React from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import Header from '../header'
import SidebarMenu from '../sidebar-menu'
import ListMenu from '../../components/list_menu'
import {
  Home,
  Chat,
  Sale,
  ProductNote,
  Ad,
  StoreDisplay,
  Statistic,
  Review,
  CustomerCare,
  Setting,
} from '../../../assets/icons'

const Content = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: grid;
  width: 100%;
  height: 82vh;
  grid-template-columns: 17% 83%;
`

const CenterContent = styled.div`
  width: 100%;
  padding: 25px 25px 10px 25px;
  box-sizing: border-box;
  overflow-y: scroll;
  white-space: nowrap;
`

export default function Layout({ children }) {
  const { i18n } = useTranslation()

  const HandleChangeLanguage = (e) => {
    i18n.changeLanguage(e)
  }

  return (
    <React.Fragment>
      <Header HandleChangeLanguage={HandleChangeLanguage} />
      <Content>
        <SidebarMenu>
          <ListMenu
            icon={<Home />}
            text="Home"
            linkTo="/"
            notification={0}
          />
          <ListMenu
            icon={<Chat />}
            text="Chat"
            linkTo="/chat"
            notification={8}
          />
          <ListMenu
            icon={<Sale />}
            text="Penjualan"
            linkTo="/sale"
            notification={0}
          />
          <ListMenu
            icon={<ProductNote />}
            text="Produk Dijual"
            data={[
              { text: 'Tambah Produk', linkTo: '/product/add' },
              { text: 'Daftar Produk Dijual', linkTo: '/product' },
            ]}
          />
          <ListMenu
            icon={<Ad />}
            text="Iklan & Promosi"
            data={[
              { text: 'Iklan', linkTo: '/ad' },
              { text: 'Promosi', linkTo: '/promotion' },
            ]}
          />
          <ListMenu
            icon={<StoreDisplay />}
            text="Tampilan Toko"
            linkTo="/store/display"
            notification={0}
          />
          <ListMenu
            icon={<Statistic />}
            text="Data Statistik"
            linkTo="/statistic"
            notification={0}
          />
          <ListMenu
            icon={<Review />}
            text="Ulasan Pembeli"
            linkTo="/review"
            notification={0}
          />
          <ListMenu
            icon={<CustomerCare />}
            text="Customer Care"
            linkTo="/customer"
            notification={0}
          />
          <ListMenu
            icon={<Setting />}
            text="Pengaturan"
            notification={0}
            data={[
              { text: 'Atur Toko', linkTo: '/store/setting' },
              { text: 'Atur Admin', linkTo: '/admin/setting' },
            ]}
          />
        </SidebarMenu>
        <CenterContent>{children}</CenterContent>
      </Content>
    </React.Fragment>
  )
}
