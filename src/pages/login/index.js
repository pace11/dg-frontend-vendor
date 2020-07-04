import React, { useState } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import Cookies from 'js-cookie'
import ImageBg from '../../assets/svg/onboarding.svg'
import Header from '../../uikit/common/header-clear'
import { Button } from '../../uikit/components/button'
import { Text, Password } from '../../uikit/components/input'
import Utils from '../../helpers/utils'

const Container = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  background-image: url(${ImageBg});
  background-repeat: no-repeat;
  background-size: cover;
  margin: 140px 0 0 0;
`

const FormLogin = styled.div`
  position: absolute;
  width: 435px;
  min-height: 424px;
  left: 108px;
  top: 240px;
  background: #ffffff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  padding: 3rem;
  box-sizing: border-box;
`

const Row = styled.div`
  width: auto;
  height: auto;
  ${(props) => props}
`

function Login() {
  const history = useHistory()
  const [data, setData] = useState({
    username: '',
    password: '',
  })

  const HandleChange = (key, e) => {
    setData({
      ...data,
      [key]: e.target.value,
    })
  }

  const HandleSubmit = () => {
    if (
      data.username === 'admin@gmail.com' &&
      data.password === '12345'
    ) {
      Cookies.set(
        'dlg_vendor_token',
        Math.random().toString(36).slice(2),
      )
      history.push('/')
      window.location.reload()
    } else {
      alert('gagal login')
    }
  }

  return (
    <React.Fragment>
      <Header />
      <Container>
        <FormLogin>
          <Row>
            {Utils.isLoggedIn ? 'Sudah Login' : 'Belum Login'}
            <h4>Masuk</h4>
          </Row>
          <Text
            label="Nomor Handphone atau Email"
            placeholder="Masukkan nomor ponsel/email"
            onChange={(e) => HandleChange('username', e)}
          />
          <Password
            label="Kata Sandi"
            placeholder="Masukkan kata sandi"
            onChange={(e) => HandleChange('password', e)}
          />
          <Row
            display="flex"
            justifyContent="flex-end"
            padding="20px 0"
          >
            <div style={{ width: '200px' }}>
              <Button
                variant="primary-orange"
                block
                onClick={() => HandleSubmit()}
              >
                Masuk
              </Button>
            </div>
          </Row>
        </FormLogin>
      </Container>
    </React.Fragment>
  )
}

export default Login
