import React, { useState } from 'react'
import { useStoreDispatch } from 'easy-peasy'
import Layout from '../../uikit/common/layout'
import Section from '../../uikit/common/section'
import MenuHeader from './menu-header'
import ContentSale from './content-sale'
import SaleData from '../../__json__/data.json'

export default function Sale() {
  const dispatch = useStoreDispatch()
  const [isMenu, setIsMenu] = useState('all_order')

  const HandleChangeMenu = (e) => {
    setIsMenu(e)
  }

  const HandleModal = (e) => {
    dispatch.ModalGlobal.setModalGlobal({ name: e, show: true })
  }

  const { list_sale } = SaleData

  return (
    <Layout>
      <Section title="Penjualan">
        <MenuHeader
          HandleChangeMenu={HandleChangeMenu}
          isMenu={isMenu}
        />
        <ContentSale
          menu={isMenu}
          handleModal={HandleModal}
          data={list_sale}
        />
      </Section>
    </Layout>
  )
}
