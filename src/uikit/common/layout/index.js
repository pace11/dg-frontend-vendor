import React from 'react'
import { useTranslation } from 'react-i18next'
import Header from '../header'

export default function Layout() {
  const { i18n } = useTranslation()

  const HandleChangeLanguage = (e) => {
    i18n.changeLanguage(e)
  }

  return (
    <React.Fragment>
      <Header HandleChangeLanguage={HandleChangeLanguage} />
    </React.Fragment>
  )
}
