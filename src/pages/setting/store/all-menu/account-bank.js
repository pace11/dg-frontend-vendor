import React, { useState } from 'react'
import styled from 'styled-components'
import Layout from '../../../../uikit/common/layout'
import Section from '../../../../uikit/common/section'
import SelectDropdown from '../../../../uikit/components/select_dropdown'
import { Button } from '../../../../uikit/components/button'
import { Text } from '../../../../uikit/components/input'
import Theme from '../../../../uikit/common/theme'
import EditIcon from '../../../../assets/icons/Edit'
import DeleteIcon from '../../../../assets/icons/Trash'
import Modal from '../../../../uikit/common/modal'
import CheckedIcon from '../../../../assets/icons/Check'
import dataJson from '../../../../__json__/data.json'

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
  &:nth-of-type(even) {
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

export default function AccountBank() {
  const { store_bank_list } = dataJson
  const [isModal, setIsModal] = useState(false)
  const [form, setForm] = useState({
    bank_name: '',
  })
  return (
    <React.Fragment>
      <Layout>
        <Section title="Rekening Bank">
          <ContainerMenu>
            <Row padding="15px 25px">
              <StyledText
                fontStyle="normal"
                fontWeight="normal"
                fontSize="14px"
                color={Theme.colors.gray}
              >
                Tambahkan rekening bank untuk keperluan pencairan dana
                dari Dialoegue.
              </StyledText>
            </Row>
            <Row>
              <Col
                background={Theme.colors.orangeSoft}
                padding="5px 0"
              >
                <StyledText
                  fontStyle="normal"
                  fontWeight="normal"
                  fontSize="14px"
                  color={Theme.colors.black}
                >
                  <ul>
                    <li>
                      Telitilah dalam mengisi data rekening bank.
                      DIaloegue tidak bertanggung jawab apabila
                      terjadi hal yang tidak diinginkan akibat
                      kesalahan dalam pengisian data rekening bank
                      yang meliputi nomor rekening, nama pemilik
                      rekening dan nama bank.
                    </li>
                  </ul>
                </StyledText>
              </Col>
            </Row>
            <Row
              display="flex"
              justifyContent="space-between"
              padding="15px 0"
            >
              <Col display="flex" alignItems="center">
                <StyledText
                  fontStyle="normal"
                  fontWeight="600"
                  fontSize="16px"
                  color={Theme.colors.black}
                >
                  Daftar Rekening Bank
                </StyledText>
              </Col>
              <Col>
                <Button
                  variant="primary-orange"
                  onClick={() => setIsModal(!isModal)}
                >
                  + Tambah Rekening
                </Button>
              </Col>
            </Row>
            <Row
              display="grid"
              gridTemplateColumns="2fr 2fr 3fr 5fr"
              borderTop={`1px solid ${Theme.colors.gray5}`}
              borderBottom={`1px solid ${Theme.colors.gray5}`}
              gridGap="10px"
              padding="10px 0"
            >
              <Col>Nama Bank</Col>
              <Col>Nomor Rekening</Col>
              <Col>Nama Pemilik Rekening</Col>
              <Col>Aksi</Col>
            </Row>
            {store_bank_list.map((item, i) => (
              <RowContent
                key={String(i)}
                display="grid"
                gridTemplateColumns="2fr 2fr 3fr 5fr"
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
                    {item.bank_name}
                  </StyledText>
                </Col>
                <Col>
                  <StyledText
                    fontStyle="normal"
                    fontWeight="normal"
                    fontSize="14px"
                    color={Theme.colors.black}
                  >
                    {item.bank_no_account}
                  </StyledText>
                </Col>
                <Col>
                  <StyledText
                    fontStyle="normal"
                    fontWeight="normal"
                    fontSize="14px"
                    color={Theme.colors.black}
                  >
                    {item.bank_name_user}
                  </StyledText>
                </Col>
                <Col display="flex">
                  <div style={{ marginRight: '10px' }}>
                    {item.main_bank ? (
                      <Button
                        size="x-small"
                        variant="primary-orangesoft"
                      >
                        Rekening Utama
                      </Button>
                    ) : (
                      <Button
                        size="x-small"
                        variant="secondary-outline"
                      >
                        <CheckedIcon
                          style={{ transform: 'scale(0.7)' }}
                        />
                        Set Utama
                      </Button>
                    )}
                  </div>
                  <div style={{ marginRight: '10px' }}>
                    <Button
                      size="x-small"
                      variant="secondary-outline"
                    >
                      <EditIcon style={{ transform: 'scale(0.7)' }} />
                      Ubah
                    </Button>
                  </div>
                  <div style={{ marginRight: '10px' }}>
                    <Button size="x-small" variant="primary-outline">
                      <DeleteIcon
                        style={{
                          transform: 'scale(0.8)',
                          fill: Theme.colors.red,
                        }}
                      />
                      Hapus
                    </Button>
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
        title="Tambah Rekening Bank"
      >
        <Row padding="0 10px">
          <Text
            label="Nama Pemilik Rekening"
            placeholder="Masukkan Nama"
          />
          <SelectDropdown
            label="Nama Bank"
            variant="text"
            text="Pilih Nama Bank"
            value={form.bank_name}
            onClick={(e) => setForm({ ...form, bank_name: e })}
            list={[
              { text: 'Bank Mandiri', value: 'b1' },
              { text: 'Bank BCA', value: 'b2' },
            ]}
          />
          <Text label="Nomor Rekening" placeholder="Masukkan Nomor" />
        </Row>
        <Row
          display="flex"
          justifyContent="flex-end"
          padding="20px 10px"
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
