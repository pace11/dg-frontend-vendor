import React, { useState } from 'react'
import styled from 'styled-components'
import Layout from '../../uikit/common/layout'
import MenuHeader from './menu-header'
import ContentSale from './content-sale'

const TitlePage = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 30px;
  margin-left: 30px;
`

export default function Sale() {
  const [isMenu, setIsMenu] = useState('all_order')

  const HandleChangeMenu = (e) => {
    setIsMenu(e)
  }

  return (
    <Layout>
      <TitlePage>Pesanan</TitlePage>
      <MenuHeader
        HandleChangeMenu={HandleChangeMenu}
        isMenu={isMenu}
      />
      <ContentSale menu={isMenu} />
    </Layout>
  )
}
