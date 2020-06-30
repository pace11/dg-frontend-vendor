import React, { useState } from 'react'
import Layout from '../../../uikit/common/layout'
import Section from '../../../uikit/common/section'
import MenuHeader from './menu-header'
import ContentListProduct from './content-list-product'

export default function List() {
  const [isMenu, setIsMenu] = useState('all_products')
  const [checkAllProduct, setCheckAllProduct] = useState(false)

  const HandleChangeMenu = (e) => {
    setIsMenu(e)
  }

  const HandleCheckAllProduct = () => {
    setCheckAllProduct(!checkAllProduct)
  }

  return (
    <Layout>
      <Section title="Daftar Produk">
        <MenuHeader
          HandleChangeMenu={HandleChangeMenu}
          isMenu={isMenu}
        />
        <ContentListProduct
          menu={isMenu}
          checkAllProduct={checkAllProduct}
          HandleCheckAllProduct={HandleCheckAllProduct}
        />
      </Section>
    </Layout>
  )
}
