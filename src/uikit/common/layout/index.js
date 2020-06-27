import React from 'react'
import { useStoreDispatch, useStoreState } from 'easy-peasy'
import styled, { keyframes } from 'styled-components'
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
import Modal from '../../common/modal'
import ContentModalStatusOrder from '../content-modal/modal-status-order'
import ContentModalRejectOrder from '../content-modal/modal-reject-order'
import ContentModalAcceptOrder from '../content-modal/modal-accept-order'

const Content = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: grid;
  width: 100%;
  height: 82vh;
  grid-template-columns: 17% 83%;
  z-index: 1;
`

const AnimateZoom = keyframes`
  from {
    transform: scale(0.1);
  }
  to {
    transform: scale(1);
  }
`

const CenterContent = styled.div`
  width: 100%;
  padding: 25px 25px 10px 25px;
  box-sizing: border-box;
  overflow-y: scroll;
  overflow-x: hidden;
  white-space: nowrap;
  animation-name: ${AnimateZoom};
  animation-duration: 0.4s;
`

export default function Layout({ children }) {
  const dispatch = useStoreDispatch()
  const data_step = [
    {
      id: 1,
      title: 'Transaksi selesai',
      date: '27 Jun 2020, 15:03 WIB',
    },
    {
      id: 2,
      title: 'Paket telah diterima pembeli',
      date: '27 Jun 2020, 15:03 WIB',
    },
    {
      id: 3,
      title: 'Pengiriman',
      date: '27 Jun 2020, 15:03 WIB',
    },
    {
      id: 4,
      title: 'Paket telah kamu proses',
      date: '27 Jun 2020, 15:03 WIB',
    },
    {
      id: 5,
      title: 'Paket telah kamu proses',
      date: '27 Jun 2020, 15:03 WIB',
    },
  ]

  const { ModalGlobal: stateModal } = useStoreState(
    (globalState) => globalState,
  )
  const showModal = stateModal && stateModal.initialState

  const { i18n } = useTranslation()

  const HandleChangeLanguage = (e) => {
    i18n.changeLanguage(e)
  }

  const HandleModal = (e) => {
    dispatch.ModalGlobal.setModalGlobal({ name: e, show: false })
  }

  return (
    <React.Fragment>
      <Header HandleChangeLanguage={HandleChangeLanguage} />
      <Content>
        <SidebarMenu>
          <ListMenu
            elementId=""
            icon={<Home />}
            text="Home"
            linkTo="/"
            notification={0}
          />
          <ListMenu
            elementId=""
            icon={<Chat />}
            text="Chat"
            linkTo="/chat"
            notification={8}
          />
          <ListMenu
            elementId=""
            icon={<Sale />}
            text="Penjualan"
            linkTo="/sale"
            notification={0}
          />
          <ListMenu
            elementId=""
            icon={<ProductNote />}
            text="Produk Dijual"
            data={[
              { text: 'Tambah Produk', linkTo: '/product/add' },
              { text: 'Daftar Produk', linkTo: '/product' },
            ]}
          />
          <ListMenu
            elementId=""
            icon={<Ad />}
            text="Iklan & Promosi"
            data={[
              { text: 'Iklan', linkTo: '/ad' },
              { text: 'Promosi', linkTo: '/promotion' },
            ]}
          />
          <ListMenu
            elementId=""
            icon={<StoreDisplay />}
            text="Tampilan Toko"
            linkTo="/store/display"
            notification={0}
          />
          <ListMenu
            elementId=""
            icon={<Statistic />}
            text="Data Statistik"
            linkTo="/statistic"
            notification={0}
          />
          <ListMenu
            elementId=""
            icon={<Review />}
            text="Ulasan Pembeli"
            linkTo="/review"
            notification={0}
          />
          <ListMenu
            elementId="cs"
            icon={<CustomerCare />}
            text="Customer Care"
            linkTo="/customer"
            notification={0}
          />
          <ListMenu
            elementId=""
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
      <Modal
        show={showModal.status_order}
        onClick={() => HandleModal('status_order')}
        title="Status Pesanan"
      >
        <ContentModalStatusOrder data={data_step} />
      </Modal>
      <Modal
        show={showModal.reject_order}
        onClick={() => HandleModal('reject_order')}
        title="Tolak Pesanan"
      >
        <ContentModalRejectOrder />
      </Modal>
      <Modal
        show={showModal.accept_order}
        onClick={() => HandleModal('accept_order')}
        title="Terima Pesanan"
      >
        <ContentModalAcceptOrder />
      </Modal>
    </React.Fragment>
  )
}
