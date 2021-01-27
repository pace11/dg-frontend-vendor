import React, { useState } from 'react'
import styled from 'styled-components'
import Layout from '../../../uikit/common/layout'
import Section from '../../../uikit/common/section'
import Checkbox from '../../../uikit/components/checkbox'
import { Button } from '../../../uikit/components/button'
import { Text } from '../../../uikit/components/input'
import Theme from '../../../uikit/common/theme'
import CloseIcon from '../../../assets/icons/Close'
import EditIcon from '../../../assets/icons/Edit'
import WaitIcon from '../../../assets/icons/Wait'
import Modal from '../../../uikit/common/modal'
import UserIcon from '../../../assets/icons/UserIllustrator'
import StoreIcon from '../../../assets/icons/Store'
import ChatIcon from '../../../assets/icons/Chat'
import SaleIcon from '../../../assets/icons/Sale'
import StatisticIcon from '../../../assets/icons/Statistic'
import AdIcon from '../../../assets/icons/Ad'
import dataJson from '../../../__json__/data.json'

const ContainerMenu = styled.div`
  background: #ffffff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  box-sizing: border-box;
  padding: 20px;
  margin-bottom: 20px;
`

const Row = styled.div`
  height: auto;
  ${(props) => props}
`

const RowContent = styled.div`
  height: auto;
  &:nth-of-type(odd) {
    border-top: 1px solid ${Theme.colors.gray5};
  }
  ${(props) => props}
`

const Col = styled.div`
  height: auto;
  ${(props) => props}
`

const StyledText = styled.span`
  height: auto;
  display: inherit;
  white-space: normal;
  ${(props) => props};
`

const StyledList = styled.div`
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  p {
    b {
      font-weight: 600;
    }
    a {
      color: ${Theme.colors.orange};
    }
  }
  padding: 0 15px;
`

export default function AccountBank() {
  const { admin_list } = dataJson
  const [isModal, setIsModal] = useState(false)
  const [form, setForm] = useState({
    admin_email: '',
    admin_name: '',
    role_admin: [],
  })

  const HandleFillForm = (key, val) => {
    if (key === 'role_admin') {
      let check = form.role_admin.includes(val)
      setForm({
        ...form,
        [key]: check
          ? form[key].filter((item) => item !== val)
          : form[key].concat([val]),
      })
    } else {
      setForm({
        ...form,
        [key]: val,
      })
    }
  }

  return (
    <React.Fragment>
      <Layout>
        <Section title="Pengaturan Admin">
          <ContainerMenu>
            <Row>
              <Col
                background={Theme.colors.orangeSoft}
                padding="10px"
                display="grid"
                gridTemplateColumns="10fr 2fr"
              >
                <StyledList>
                  <p>
                    <b>
                      Tambahkan admin untuk membantu kelola tokomu
                      biar dagangan makin lancar
                    </b>
                    <br />
                    <a href="#coba">Informasi lebih lanjut</a>
                  </p>
                </StyledList>
                <Row display="flex" justifyContent="flex-end">
                  <UserIcon />
                </Row>
              </Col>
            </Row>
            <Row
              display="flex"
              justifyContent="flex-start"
              padding="15px 0"
            >
              <Col padding="0 15px">
                <Button
                  variant="primary-orange"
                  onClick={() => setIsModal(!isModal)}
                >
                  + Tambah Admin
                </Button>
              </Col>
            </Row>
            <Row
              display="grid"
              gridTemplateColumns="2fr 4fr 3fr 3fr"
              borderTop={`1px solid ${Theme.colors.gray5}`}
              borderBottom={`1px solid ${Theme.colors.gray5}`}
              gridGap="10px"
              padding="10px 0"
            >
              <Col>Nama</Col>
              <Col>Alamat Email</Col>
              <Col>Terakhir Online</Col>
              <Col>Aksi</Col>
            </Row>
            {admin_list.map((item, i) => (
              <RowContent
                key={String(i)}
                display="grid"
                gridTemplateColumns="2fr 4fr 3fr 3fr"
                gridGap="10px"
                padding="10px 0"
              >
                <Col>
                  <StyledText
                    fontStyle="normal"
                    fontWeight="normal"
                    fontSize="14px"
                    color={Theme.colors.black}
                  >
                    {item.admin_name}
                  </StyledText>
                </Col>
                <Col>
                  <StyledText
                    fontStyle="normal"
                    fontWeight="normal"
                    fontSize="14px"
                    color={Theme.colors.black}
                  >
                    {item.admin_email}
                  </StyledText>
                </Col>
                <Col>
                  <StyledText
                    fontStyle="normal"
                    fontWeight="normal"
                    fontSize="14px"
                    color={Theme.colors.black}
                  >
                    {item.last_active}
                  </StyledText>
                </Col>
                <Col display="grid" gridTemplateColumns="1fr">
                  <div style={{ margin: '0 0 5px 0' }}>
                    {item.admin_status === 1 ? (
                      <StyledText
                        display="flex"
                        alignItems="center"
                        fontStyle="normal"
                        fontWeight="normal"
                        fontSize="14px"
                        color={Theme.colors.gray2}
                      >
                        <WaitIcon
                          style={{
                            marginRight: '5px',
                            fill: Theme.colors.gray2,
                          }}
                        />
                        Menunggu Bergabung
                      </StyledText>
                    ) : (
                      <StyledText
                        display="flex"
                        alignItems="center"
                        fontStyle="normal"
                        fontWeight="normal"
                        fontSize="14px"
                        color={Theme.colors.black}
                        cursor="pointer"
                      >
                        <EditIcon
                          style={{ transform: 'scale(0.8)' }}
                        />
                        Ubah
                      </StyledText>
                    )}
                  </div>
                  <div style={{ margin: '0 0 5px 0' }}>
                    <StyledText
                      fontStyle="normal"
                      fontWeight="normal"
                      fontSize="14px"
                      color={Theme.colors.black}
                      cursor="pointer"
                    >
                      <CloseIcon
                        style={{
                          marginRight: '5px',
                          fill: Theme.colors.red,
                        }}
                      />
                      Nonaktifkan
                    </StyledText>
                  </div>
                </Col>
              </RowContent>
            ))}
          </ContainerMenu>
        </Section>
      </Layout>
      <Modal
        show={isModal}
        onClick={() => setIsModal(!isModal)}
        title="Tambah Admin"
      >
        <Row>
          <Text
            label="Alamat Email"
            placeholder="Masukkan alamat email"
          />
          <Text
            label="Nama Admin"
            placeholder="Masukkan nama asli admin"
          />
        </Row>
        <Row>
          <StyledText
            fontStyle="normal"
            fontWeight="normal"
            fontSize="14px"
            color={Theme.colors.black}
          >
            Akses Admin
          </StyledText>
        </Row>
        <Row display="grid" gridTemplateColumns="1fr 1fr">
          <Col>
            <Row display="flex" justifyContent="space-between">
              <StyledText
                display="flex"
                alignItems="center"
                fontStyle="normal"
                fontWeight="normal"
                fontSize="14px"
                color={Theme.colors.black}
              >
                <StoreIcon
                  style={{
                    transform: 'scale(0.6)',
                  }}
                />
                Atur produk ditoko
              </StyledText>
              <Col display="flex" alignItems="center">
                <Checkbox
                  checked={form.role_admin.includes('r1')}
                  onClick={() => HandleFillForm('role_admin', 'r1')}
                />
              </Col>
            </Row>
            <Row display="flex" justifyContent="space-between">
              <StyledText
                display="flex"
                alignItems="center"
                fontStyle="normal"
                fontWeight="normal"
                fontSize="14px"
                color={Theme.colors.black}
              >
                <ChatIcon
                  style={{
                    fill: Theme.colors.orange,
                    margin: '0 6px',
                  }}
                />
                Kelola chat pembeli
              </StyledText>
              <Col display="flex" alignItems="center">
                <Checkbox
                  checked={form.role_admin.includes('r2')}
                  onClick={() => HandleFillForm('role_admin', 'r2')}
                />
              </Col>
            </Row>
            <Row display="flex" justifyContent="space-between">
              <StyledText
                display="flex"
                alignItems="center"
                fontStyle="normal"
                fontWeight="normal"
                fontSize="14px"
                color={Theme.colors.black}
              >
                <SaleIcon
                  style={{
                    fill: Theme.colors.orange,
                    margin: '0 8px',
                  }}
                />
                Atur transaksi penjualan
              </StyledText>
              <Col display="flex" alignItems="center">
                <Checkbox
                  checked={form.role_admin.includes('r3')}
                  onClick={() => HandleFillForm('role_admin', 'r3')}
                />
              </Col>
            </Row>
          </Col>
          <Col>
            <Row display="flex" justifyContent="space-between">
              <StyledText
                display="flex"
                alignItems="center"
                fontStyle="normal"
                fontWeight="normal"
                fontSize="14px"
                color={Theme.colors.black}
              >
                <StatisticIcon
                  style={{
                    fill: Theme.colors.orange,
                    margin: '0 6px',
                  }}
                />
                Akses data statistik
              </StyledText>
              <Col display="flex" alignItems="center">
                <Checkbox
                  checked={form.role_admin.includes('r4')}
                  onClick={() => HandleFillForm('role_admin', 'r4')}
                />
              </Col>
            </Row>
            <Row display="flex" justifyContent="space-between">
              <StyledText
                display="flex"
                alignItems="center"
                fontStyle="normal"
                fontWeight="normal"
                fontSize="14px"
                color={Theme.colors.black}
              >
                <AdIcon
                  style={{
                    fill: Theme.colors.orange,
                    margin: '0 6px',
                  }}
                />
                Atur iklan & promosi
              </StyledText>
              <Col display="flex" alignItems="center">
                <Checkbox
                  checked={form.role_admin.includes('r5')}
                  onClick={() => HandleFillForm('role_admin', 'r5')}
                />
              </Col>
            </Row>
          </Col>
        </Row>
        <Row
          display="flex"
          justifyContent="flex-end"
          padding="20px 0"
          alignItems="center"
        >
          <Col>
            <Button block variant="primary-orange">
              Simpan
            </Button>
          </Col>
        </Row>
      </Modal>
    </React.Fragment>
  )
}
