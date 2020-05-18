import React from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import Header from '../header'
import SidebarMenu from '../sidebar-menu'

const Content = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 17% 83%;
`

const CenterContent = styled.div`
  width: 100%;
  height: 100vh;
  padding: 25px 25px 10px 25px;
  box-sizing: border-box;
  position: relative;
  overflow-y: scroll;
`

export default function Layout({ children }) {
  const { i18n } = useTranslation()

  const HandleChangeLanguage = (e) => {
    i18n.changeLanguage(e)
  }

  return (
    <React.Fragment>
      <Header HandleChangeLanguage={HandleChangeLanguage} />
      <Content>
        <SidebarMenu />
        <CenterContent>{children}</CenterContent>
      </Content>
    </React.Fragment>
  )
}
