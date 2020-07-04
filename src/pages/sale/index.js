import React from 'react'
import { useStoreDispatch } from 'easy-peasy'
import { useParams } from 'react-router-dom'
import Layout from '../../uikit/common/layout'
import Section from '../../uikit/common/section'
import MenuHeader from './menu-header'
import ContentSale from './content-sale'
import SaleData from '../../__json__/data.json'

export default function Sale() {
  const { slug } = useParams()
  const dispatch = useStoreDispatch()

  const HandleModal = (e) => {
    dispatch.ModalGlobal.setModalGlobal({ name: e, show: true })
  }

  const { list_sale } = SaleData

  return (
    <Layout>
      <Section title="Penjualan">
        <MenuHeader slug={slug} />
        <ContentSale handleModal={HandleModal} data={list_sale} />
      </Section>
    </Layout>
  )
}
