import React from 'react'
import Layout from '../../../uikit/common/layout'
import Section from '../../../uikit/common/section'
import UploadProduct from './upload-product'
import InformationProduct from './information-product'
import DetailProduct from './detail-product'
import ShippingProduct from './shipping-product'

export default function AddProduct() {
  return (
    <Layout>
      <Section title="Jual Produk">
        <UploadProduct />
        <InformationProduct />
        <DetailProduct />
        <ShippingProduct />
      </Section>
    </Layout>
  )
}
