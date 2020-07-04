import React from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import Theme from '../theme'
import DownloadAppsIcon from '../../../assets/icons/DownloadApps'
import LogoMain from '../../../assets/icons/LogoMain'

const ContainerHeader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 18vh;
  z-index: ${Theme.zIndex.header};
  background: ${Theme.colors.white};
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
`

const HeaderTop = styled.div`
  display: flex;
  height: 5vh;
  justify-content: space-between;
  align-items: center;
  background-color: ${Theme.colors.white2};
  @media (max-width: 425px) {
    display: none;
  }
`

const LeftBox = styled.div`
  display: flex;
  width: auto;
  margin: 0 0 0 15px;
  p {
    display: flex;
    align-items: center;
    font-size: 12px;
    color: ${Theme.colors.gray2};
    margin-bottom: 10px;
    span {
      margin: 0 10px 0 0;
    }
  }
`

const RightBox = styled.div`
  width: auto;
  margin: 0 10px 0 0;
  span {
    font-size: 12px;
    color: ${Theme.colors.gray2};
  }
`

const HeaderMenu = styled.div`
  display: flex;
  justify-content: space-between;
  height: 13vh;
  align-items: center;
  padding: 0 30px;
`

/**
 *
 * @param {Function} props.showModalLogin
 * @param {Function} props.showModalRegister
 * @param {Function} props.HandleChangeLanguage
 * @param {Boolean} props.isLoggedIn
 * @param {Object} props.data
 */
export default function HeaderClear() {
  const { t, i18n } = useTranslation()

  const HandleChangeLanguage = (e) => {
    i18n.changeLanguage(e)
  }

  return (
    <ContainerHeader>
      <HeaderTop>
        <LeftBox>
          <p>
            <span>
              <DownloadAppsIcon />
            </span>
            {t('header.download_apps')}
          </p>
        </LeftBox>
        <RightBox>
          <span>{t('header.language')}</span>
          <select
            onChange={(e) => HandleChangeLanguage(e.target.value)}
          >
            <option value="id">Indonesia</option>
            <option value="en">English</option>
          </select>
        </RightBox>
      </HeaderTop>
      <HeaderMenu>
        <LogoMain />
      </HeaderMenu>
    </ContainerHeader>
  )
}
