import React from 'react'
import Layout from '../../../uikit/common/layout'
import Section from '../../../uikit/common/section'
import ListDistributor from './list-distributor'

export default function AddProduct() {
  return (
    <Layout>
      <Section title="Daftar Distributor & Seller">
        <ListDistributor />
      </Section>
    </Layout>
  )
}
