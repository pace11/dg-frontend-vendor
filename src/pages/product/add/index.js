import React from 'react'
import Layout from '../../../uikit/common/layout'
import Section from '../../../uikit/common/section'
import Tab from '../../../uikit/components/tabs'
import UploadProduct from './upload-product'
import InformationProduct from './information-product'
import DetailProduct from './detail-product'
import ShippingProduct from './shipping-product'

import DownloadTemplate from './download-template'
import UploadTemplate from './upload-template'
import StatusUploadTemplate from './status-upload-template'

export default function AddProduct() {
  return (
    <Layout>
      <Tab>
        <div label="Jual Satu Produk">
          <Section>
            <UploadProduct />
            <InformationProduct />
            <DetailProduct />
            <ShippingProduct />
          </Section>
        </div>
        <div label="Jual Banyak Produk Sekaligus">
          <Section>
            <DownloadTemplate />
            <UploadTemplate />
            <StatusUploadTemplate />
          </Section>
        </div>
      </Tab>
    </Layout>
  )
}
