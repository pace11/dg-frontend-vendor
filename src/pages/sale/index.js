import React from 'react'
import { useStoreDispatch } from 'easy-peasy'
import Layout from '../../uikit/common/layout'
import Section from '../../uikit/common/section'
import MenuHeader from './menu-header'
import ContentSale from './content-sale'
import Utils from '../../helpers/utils'
import SaleData from '../../__json__/data.json'

export default function Sale() {
  const status = Utils.useQuery().get('status')
  const dispatch = useStoreDispatch()

  const HandleModal = (e) => {
    dispatch.ModalGlobal.setModalGlobal({ name: e, show: true })
  }

  const { list_sale } = SaleData

  return (
    <Layout>
      <Section title="Penjualan">
        <MenuHeader status={status} />
        <ContentSale handleModal={HandleModal} data={list_sale} />
      </Section>
    </Layout>
  )
}
