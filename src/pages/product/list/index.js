import React, { useState } from 'react'
import styled from 'styled-components'
import Layout from '../../../uikit/common/layout'
import MenuHeader from './menu-header'
import ContentListProduct from './content-list-product'

const TitlePage = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 30px;
  margin-left: 30px;
`

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
      <TitlePage>Daftar Produk</TitlePage>
      <MenuHeader
        HandleChangeMenu={HandleChangeMenu}
        isMenu={isMenu}
      />
      <ContentListProduct
        menu={isMenu}
        checkAllProduct={checkAllProduct}
        HandleCheckAllProduct={HandleCheckAllProduct}
      />
    </Layout>
  )
}
