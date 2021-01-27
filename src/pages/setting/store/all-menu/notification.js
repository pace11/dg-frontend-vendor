import React, { useState } from 'react'
import styled from 'styled-components'
import Layout from '../../../../uikit/common/layout'
import Section from '../../../../uikit/common/section'
import Theme from '../../../../uikit/common/theme'
import EmailIcon from '../../../../assets/icons/Email'
import Switch from '../../../../uikit/components/switch'
import PCIcon from '../../../../assets/icons/Pc'

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

export default function Notification() {
  const [form, setForm] = useState({
    email_1: false,
    email_2: false,
    email_3: false,
    email_4: false,
    email_5: false,
    email_6: false,
    email_7: false,
    email_8: false,
    email_9: false,
    web_1: false,
    web_2: false,
    web_3: false,
    web_4: false,
    web_5: false,
    web_6: false,
    web_7: false,
    web_8: false,
    web_9: false,
  })
  return (
    <Layout>
      <Section title="Notifikasi">
        <ContainerMenu>
          <Row display="grid" gridTemplateColumns="1fr 1fr">
            <Col padding="10px 20px">
              <StyledText
                display="flex"
                alignItems="center"
                fontStyle="normal"
                fontWeight="600"
                fontSize="16px"
                color={Theme.colors.black}
              >
                <EmailIcon style={{ marginRight: '10px' }} />
                Email
              </StyledText>
              <Row padding="15px 0">
                <StyledText
                  fontStyle="normal"
                  fontWeight="normal"
                  fontSize="14px"
                  color={Theme.colors.black}
                >
                  Atur seberapa sering Dialoegue mengirimkan email
                  kepada Anda.
                </StyledText>
              </Row>
              <Row
                display="flex"
                justifyContent="space-between"
                padding="10px"
              >
                <Col>
                  <StyledText
                    fontStyle="normal"
                    fontWeight="normal"
                    fontSize="14px"
                    color={Theme.colors.black}
                  >
                    Pesanan Baru & Status Transaksi
                  </StyledText>
                </Col>
                <Col>
                  <Switch
                    checked={form.email_1}
                    onChange={(e) => setForm({ ...form, email_1: e })}
                  />
                </Col>
              </Row>
              <Row
                display="flex"
                justifyContent="space-between"
                padding="10px"
              >
                <Col>
                  <StyledText
                    fontStyle="normal"
                    fontWeight="normal"
                    fontSize="14px"
                    color={Theme.colors.black}
                  >
                    Pengiriman Pesanan
                  </StyledText>
                </Col>
                <Col>
                  <Switch
                    checked={form.email_2}
                    onChange={(e) => setForm({ ...form, email_2: e })}
                  />
                </Col>
              </Row>
              <Row
                display="flex"
                justifyContent="space-between"
                padding="10px"
              >
                <Col>
                  <StyledText
                    fontStyle="normal"
                    fontWeight="normal"
                    fontSize="14px"
                    color={Theme.colors.black}
                  >
                    Chat & Ulasan Pembeli
                  </StyledText>
                </Col>
                <Col>
                  <Switch
                    checked={form.email_3}
                    onChange={(e) => setForm({ ...form, email_3: e })}
                  />
                </Col>
              </Row>
              <Row
                display="flex"
                justifyContent="space-between"
                padding="10px"
              >
                <Col>
                  <StyledText
                    fontStyle="normal"
                    fontWeight="normal"
                    fontSize="14px"
                    color={Theme.colors.black}
                  >
                    Promo Dialogue
                  </StyledText>
                </Col>
                <Col>
                  <Switch
                    checked={form.email_4}
                    onChange={(e) => setForm({ ...form, email_4: e })}
                  />
                </Col>
              </Row>
              <Row
                display="flex"
                justifyContent="space-between"
                padding="10px"
              >
                <Col>
                  <StyledText
                    fontStyle="normal"
                    fontWeight="normal"
                    fontSize="14px"
                    color={Theme.colors.black}
                  >
                    Event Dialogue
                  </StyledText>
                </Col>
                <Col>
                  <Switch
                    checked={form.email_5}
                    onChange={(e) => setForm({ ...form, email_5: e })}
                  />
                </Col>
              </Row>
              <Row
                display="flex"
                justifyContent="space-between"
                padding="10px"
              >
                <Col>
                  <StyledText
                    fontStyle="normal"
                    fontWeight="normal"
                    fontSize="14px"
                    color={Theme.colors.black}
                  >
                    Pembaruan Fitur
                  </StyledText>
                </Col>
                <Col>
                  <Switch
                    checked={form.email_6}
                    onChange={(e) => setForm({ ...form, email_6: e })}
                  />
                </Col>
              </Row>
              <Row
                display="flex"
                justifyContent="space-between"
                padding="10px"
              >
                <Col>
                  <StyledText
                    fontStyle="normal"
                    fontWeight="normal"
                    fontSize="14px"
                    color={Theme.colors.black}
                  >
                    Iklan & Promosi Dialogue
                  </StyledText>
                </Col>
                <Col>
                  <Switch
                    checked={form.email_7}
                    onChange={(e) => setForm({ ...form, email_7: e })}
                  />
                </Col>
              </Row>
              <Row
                display="flex"
                justifyContent="space-between"
                padding="10px"
              >
                <Col>
                  <StyledText
                    fontStyle="normal"
                    fontWeight="normal"
                    fontSize="14px"
                    color={Theme.colors.black}
                  >
                    Pembaruan Produk di Toko
                  </StyledText>
                </Col>
                <Col>
                  <Switch
                    checked={form.email_8}
                    onChange={(e) => setForm({ ...form, email_8: e })}
                  />
                </Col>
              </Row>
              <Row
                display="flex"
                justifyContent="space-between"
                padding="10px"
              >
                <Col>
                  <StyledText
                    fontStyle="normal"
                    fontWeight="normal"
                    fontSize="14px"
                    color={Theme.colors.black}
                  >
                    Pembaruan Youpay
                  </StyledText>
                </Col>
                <Col>
                  <Switch
                    checked={form.email_9}
                    onChange={(e) => setForm({ ...form, email_9: e })}
                  />
                </Col>
              </Row>
            </Col>
            <Col
              padding="10px 20px"
              borderLeft={`1px solid ${Theme.colors.gray5}`}
            >
              <StyledText
                display="flex"
                alignItems="center"
                fontStyle="normal"
                fontWeight="600"
                fontSize="16px"
                color={Theme.colors.black}
              >
                <PCIcon style={{ marginRight: '10px' }} />
                Website & Aplikasi
              </StyledText>
              <Row padding="15px 0">
                <StyledText
                  fontStyle="normal"
                  fontWeight="normal"
                  fontSize="14px"
                  color={Theme.colors.black}
                >
                  Atur seberapa sering Anda menerima notifikasi dari
                  Dialoegue.
                </StyledText>
              </Row>
              <Row
                display="flex"
                justifyContent="space-between"
                padding="10px"
              >
                <Col>
                  <StyledText
                    fontStyle="normal"
                    fontWeight="normal"
                    fontSize="14px"
                    color={Theme.colors.black}
                  >
                    Pesanan Baru & Status Transaksi
                  </StyledText>
                </Col>
                <Col>
                  <Switch
                    checked={form.web_1}
                    onChange={(e) => setForm({ ...form, web_1: e })}
                  />
                </Col>
              </Row>
              <Row
                display="flex"
                justifyContent="space-between"
                padding="10px"
              >
                <Col>
                  <StyledText
                    fontStyle="normal"
                    fontWeight="normal"
                    fontSize="14px"
                    color={Theme.colors.black}
                  >
                    Pengiriman Pesanan
                  </StyledText>
                </Col>
                <Col>
                  <Switch
                    checked={form.web_2}
                    onChange={(e) => setForm({ ...form, web_2: e })}
                  />
                </Col>
              </Row>
              <Row
                display="flex"
                justifyContent="space-between"
                padding="10px"
              >
                <Col>
                  <StyledText
                    fontStyle="normal"
                    fontWeight="normal"
                    fontSize="14px"
                    color={Theme.colors.black}
                  >
                    Chat & Ulasan Pembeli
                  </StyledText>
                </Col>
                <Col>
                  <Switch
                    checked={form.web_3}
                    onChange={(e) => setForm({ ...form, web_3: e })}
                  />
                </Col>
              </Row>
              <Row
                display="flex"
                justifyContent="space-between"
                padding="10px"
              >
                <Col>
                  <StyledText
                    fontStyle="normal"
                    fontWeight="normal"
                    fontSize="14px"
                    color={Theme.colors.black}
                  >
                    Promo Dialogue
                  </StyledText>
                </Col>
                <Col>
                  <Switch
                    checked={form.web_4}
                    onChange={(e) => setForm({ ...form, web_4: e })}
                  />
                </Col>
              </Row>
              <Row
                display="flex"
                justifyContent="space-between"
                padding="10px"
              >
                <Col>
                  <StyledText
                    fontStyle="normal"
                    fontWeight="normal"
                    fontSize="14px"
                    color={Theme.colors.black}
                  >
                    Event Dialogue
                  </StyledText>
                </Col>
                <Col>
                  <Switch
                    checked={form.web_5}
                    onChange={(e) => setForm({ ...form, web_5: e })}
                  />
                </Col>
              </Row>
              <Row
                display="flex"
                justifyContent="space-between"
                padding="10px"
              >
                <Col>
                  <StyledText
                    fontStyle="normal"
                    fontWeight="normal"
                    fontSize="14px"
                    color={Theme.colors.black}
                  >
                    Pembaruan Fitur
                  </StyledText>
                </Col>
                <Col>
                  <Switch
                    checked={form.web_6}
                    onChange={(e) => setForm({ ...form, web_6: e })}
                  />
                </Col>
              </Row>
              <Row
                display="flex"
                justifyContent="space-between"
                padding="10px"
              >
                <Col>
                  <StyledText
                    fontStyle="normal"
                    fontWeight="normal"
                    fontSize="14px"
                    color={Theme.colors.black}
                  >
                    Iklan & Promosi Dialogue
                  </StyledText>
                </Col>
                <Col>
                  <Switch
                    checked={form.web_7}
                    onChange={(e) => setForm({ ...form, web_7: e })}
                  />
                </Col>
              </Row>
              <Row
                display="flex"
                justifyContent="space-between"
                padding="10px"
              >
                <Col>
                  <StyledText
                    fontStyle="normal"
                    fontWeight="normal"
                    fontSize="14px"
                    color={Theme.colors.black}
                  >
                    Pembaruan Produk di Toko
                  </StyledText>
                </Col>
                <Col>
                  <Switch
                    checked={form.web_8}
                    onChange={(e) => setForm({ ...form, web_8: e })}
                  />
                </Col>
              </Row>
              <Row
                display="flex"
                justifyContent="space-between"
                padding="10px"
              >
                <Col>
                  <StyledText
                    fontStyle="normal"
                    fontWeight="normal"
                    fontSize="14px"
                    color={Theme.colors.black}
                  >
                    Pembaruan Youpay
                  </StyledText>
                </Col>
                <Col>
                  <Switch
                    checked={form.web_9}
                    onChange={(e) => setForm({ ...form, web_9: e })}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </ContainerMenu>
      </Section>
    </Layout>
  )
}
