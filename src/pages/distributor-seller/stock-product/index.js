import React, { useState } from 'react'
import Layout from '../../../uikit/common/layout'
import Section from '../../../uikit/common/section'
import ListStokDistributor from './list-stock'
import Modal from '../../../uikit/common/modal'
import ContentModalAddDistributorSeller from '../content-modal/modal-add-distributor-seller'
import ContentModalEditDistributorSeller from '../content-modal/modal-edit-distributor-seller'

export default function AddProduct() {
  const [modal, setModal] = useState({
    add_distributor_seller: false,
    edit_distributor_seller: false,
    data: '',
  })
  const HandleModal = (e, v) => {
    setModal({ ...modal, [e]: !modal[e], data: v })
  }

  return (
    <React.Fragment>
      <Layout>
        <Section title="Stok Produk Distributor & Seller">
          <ListStokDistributor
            HandleModal={(e, v) => HandleModal(e, v)}
          />
        </Section>
      </Layout>
      <Modal
        show={modal.add_distributor_seller}
        onClick={() => HandleModal('add_distributor_seller')}
        title="Tambah Distributor/Seller"
      >
        <ContentModalAddDistributorSeller />
      </Modal>
      <Modal
        show={modal.edit_distributor_seller}
        onClick={() => HandleModal('edit_distributor_seller')}
        title="Edit Distributor/Seller"
      >
        <ContentModalEditDistributorSeller data={modal.data} />
      </Modal>
    </React.Fragment>
  )
}
