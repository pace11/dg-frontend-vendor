import React from 'react'
import { useTranslation } from 'react-i18next'
import Cookies from 'js-cookie'
import styled from 'styled-components'
import Theme from '../../common/theme'
import { Button } from '../../components/button'
import DownloadAppsIcon from '../../../assets/icons/DownloadApps'
import LogoMain from '../../../assets/icons/LogoMain'
import NotificationIcon from '../../../assets/icons/Notification'
import Logout from '../../../assets/icons/Logout'

const LogoutIcon = styled(Logout)`
  margin-right: 15px;
`

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

const LogoBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const UserBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`

const ImgDiv = styled.div`
  display: inline-block;
  width: 50px;
  min-height: 50px;
  border-radius: 50%;
  background-image: url('https://res.cloudinary.com/code5/image/upload/v1589793836/dialogue/no-account_ks5tkz.png');
  background-size: contain;
  background-color: ${Theme.colors.gray5};
  margin: 0 10px 0 0;
`

const ColNotif = styled.div`
  display: flex;
  align-items: center;
  padding: 0 20px;
`

const ColUser = styled.div`
  display: flex;
  align-items: center;
  padding: 0 20px;
  border-left: 1px solid ${Theme.colors.gray5};
`

const WrapperBrandInfo = styled.div`
  position: relative;
  width: auto;
  height: auto;
  cursor: pointer;
  &:hover div {
    display: block;
  }
`

const ListBox = styled.div`
  display: none;
  position: absolute;
  width: 250px;
  height: auto;
  background: #fff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  padding: 10px;
  right: 0;
`

const Row = styled.div`
  width: auto;
  height: auto;
  ${(props) => props}
`

/**
 *
 * @param {Function} props.showModalLogin
 * @param {Function} props.showModalRegister
 * @param {Function} props.HandleChangeLanguage
 * @param {Boolean} props.isLoggedIn
 * @param {Object} props.data
 */
export default function Header({ HandleChangeLanguage }) {
  const { t } = useTranslation()

  const HandleLogout = () => {
    Cookies.remove('dlg_vendor_token')
    window.location.reload()
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
        <LogoBox>
          <LogoMain />
        </LogoBox>
        <UserBox>
          <ColNotif>
            <NotificationIcon />
          </ColNotif>
          <ColUser>
            <ImgDiv />
            <WrapperBrandInfo>
              <p>Dialogue - Vendor</p>
              <ListBox>
                <Row padding="0 25px">
                  <div>
                    <Button
                      variant="primary-orange-outline"
                      block
                      onClick={() => HandleLogout()}
                    >
                      <LogoutIcon /> Logout
                    </Button>
                  </div>
                </Row>
              </ListBox>
            </WrapperBrandInfo>
          </ColUser>
        </UserBox>
      </HeaderMenu>
    </ContainerHeader>
  )
}
