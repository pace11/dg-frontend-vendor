import React from 'react'
import styled from 'styled-components'
import Layout from '../../../uikit/common/layout'
import AllMenuStoreSetting from './all-menu'

const TitlePage = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 30px;
  margin-left: 30px;
`

const ContentSetting = styled.div`
  width: 100%;
  box-sizing: border-box;
`

export default function Setting() {
  return (
    <Layout>
      <TitlePage>Atur Toko</TitlePage>
      <ContentSetting>
        <AllMenuStoreSetting />
      </ContentSetting>
    </Layout>
  )
}
