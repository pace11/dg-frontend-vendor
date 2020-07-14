import React from 'react'
import Layout from '../../../uikit/common/layout'
import Section from '../../../uikit/common/section'
import UploadProduct from './upload-product'

export default function AddProduct() {
  return (
    <Layout>
      <Section title="Stok Produk Distributor & Seller">
        <UploadProduct />
      </Section>
    </Layout>
  )
}
