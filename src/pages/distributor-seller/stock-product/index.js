import React, { useState } from 'react'
import Layout from '../../../uikit/common/layout'
import Section from '../../../uikit/common/section'
import ListStokDistributor from './list-stock'
import Modal from '../../../uikit/common/modal'
import ContentModalViewStokProduct from '../content-modal/modal-view-stok-product'

export default function AddProduct() {
  const [modal, setModal] = useState({
    view_stock_distributtor: false,
    data: '',
  })
  const HandleModal = (val) => {
    setModal({
      ...modal,
      view_stock_distributtor: !modal.view_stock_distributtor,
      data: val,
    })
  }

  return (
    <React.Fragment>
      <Layout>
        <Section title="Stok Produk Distributor & Seller">
          <ListStokDistributor HandleModal={(e) => HandleModal(e)} />
        </Section>
      </Layout>
      <Modal
        show={modal.view_stock_distributtor}
        onClick={() => HandleModal('add_distributor_seller')}
        title="Distributor List"
        width="80%"
      >
        <ContentModalViewStokProduct data={modal.data} />
      </Modal>
    </React.Fragment>
  )
}
