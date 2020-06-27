import React, { useState } from 'react'
import { useStoreDispatch } from 'easy-peasy'
import styled from 'styled-components'
import Layout from '../../uikit/common/layout'
import MenuHeader from './menu-header'
import ContentSale from './content-sale'

const TitlePage = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 30px;
  margin-left: 30px;
`

export default function Sale() {
  const dispatch = useStoreDispatch()
  const [isMenu, setIsMenu] = useState('all_order')

  const HandleChangeMenu = (e) => {
    setIsMenu(e)
  }

  const HandleModal = (e) => {
    dispatch.ModalGlobal.setModalGlobal({ name: e, show: true })
  }

  return (
    <Layout>
      <TitlePage>Pesanan</TitlePage>
      <MenuHeader
        HandleChangeMenu={HandleChangeMenu}
        isMenu={isMenu}
      />
      <ContentSale menu={isMenu} handleModal={HandleModal} />
    </Layout>
  )
}
