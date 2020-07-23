import React, { useState } from 'react'
import styled from 'styled-components'
import Layout from '../../../../uikit/common/layout'
import Section from '../../../../uikit/common/section'
import SelectDropdown from '../../../../uikit/components/select_dropdown'
import { Button } from '../../../../uikit/components/button'
import { Text } from '../../../../uikit/components/input'
import CheckBox from '../../../../uikit/components/checkbox'
import Theme from '../../../../uikit/common/theme'
import EditIcon from '../../../../assets/icons/Edit'
import DeleteIcon from '../../../../assets/icons/Trash'
import Modal from '../../../../uikit/common/modal'
import LocationIcon from '../../../../assets/icons/Location'
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

export default function Address() {
  const { store_address } = dataJson
  const [isModal, setIsModal] = useState(false)
  const [form, setForm] = useState({
    name_address: '',
    store_address: '',
    province: '',
    city: '',
    sub_district: '',
    village: '',
    postal_code: '',
    phone: '',
    main_address: false,
  })
  return (
    <React.Fragment>
      <Layout>
        <Section title="Atur Alamat Toko">
          <ContainerMenu>
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
                      Atur alamat utamamu di sini. Alamat utama
                      digunakan untuk perhitungan ongkos kirim saat
                      pembeli berbelanja di tokomu.
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
                  Daftar Alamat
                </StyledText>
              </Col>
              <Col>
                <Button
                  variant="primary-orange"
                  onClick={() => setIsModal(!isModal)}
                >
                  + Tambah Alamat
                </Button>
              </Col>
            </Row>
            <Row
              display="grid"
              gridTemplateColumns="2fr 4fr 4fr"
              borderTop={`1px solid ${Theme.colors.gray5}`}
              borderBottom={`1px solid ${Theme.colors.gray5}`}
              padding="10px 0"
            >
              <Col>Nama Alamat</Col>
              <Col>Alamat</Col>
              <Col>Aksi</Col>
            </Row>
            {store_address.map((item, i) => (
              <RowContent
                key={String(i)}
                display="grid"
                gridTemplateColumns="2fr 4fr 4fr"
                padding="10px 0"
              >
                <Col>
                  <StyledText
                    fontStyle="normal"
                    fontWeight="600"
                    fontSize="14px"
                    color={Theme.colors.black}
                  >
                    {item.name}
                  </StyledText>
                </Col>
                <Col>
                  <StyledText
                    fontStyle="normal"
                    fontWeight="normal"
                    fontSize="14px"
                    color={Theme.colors.black}
                  >
                    {item.address}
                  </StyledText>
                  <StyledText
                    fontStyle="normal"
                    fontWeight="normal"
                    fontSize="14px"
                    color={Theme.colors.black}
                  >
                    {`${item.village} - ${item.sub_district} - ${item.city} - ${item.province} - ${item.postal_code}`}
                  </StyledText>
                  <StyledText
                    fontStyle="normal"
                    fontWeight="normal"
                    fontSize="14px"
                    color={Theme.colors.black}
                    padding="10px 0"
                  >
                    {`Nomor ponsel: ${item.phone}`}
                  </StyledText>
                </Col>
                <Col display="flex">
                  <div style={{ marginRight: '10px' }}>
                    {item.main_address ? (
                      <Button
                        size="x-small"
                        variant="primary-orangesoft"
                      >
                        Alamat Utama
                      </Button>
                    ) : (
                      <Button
                        size="x-small"
                        variant="secondary-outline"
                      >
                        <LocationIcon />
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
        title="Tambah Alamat"
      >
        <Row padding="0 10px">
          <SelectDropdown
            label="Nama Alamat"
            variant="text"
            text="Alamat"
            value={form.name_address}
            onClick={(e) => setForm({ ...form, name_address: e })}
            list={[
              { text: 'Rumah', value: 'house' },
              { text: 'Toko', value: 'store' },
              { text: 'Apartement', value: 'apartement' },
              { text: 'Kos', value: 'kos' },
              { text: 'Ruko', value: 'ruko' },
              { text: 'Kantor', value: 'office' },
            ]}
          />
          <Text
            label="Alamat Toko"
            placeholder="Masukkan Alamat Lengkap"
          />
          <SelectDropdown
            label="Provinsi"
            variant="text"
            text="Pilih Provinsi"
            value={form.province}
            onClick={(e) => setForm({ ...form, province: e })}
            list={[
              { text: 'Papua', value: 'p1' },
              { text: 'Papua Barat', value: 'p2' },
            ]}
          />
          <SelectDropdown
            label="Kota"
            variant="text"
            text="Pilih Kota"
            value={form.city}
            onClick={(e) => setForm({ ...form, city: e })}
            list={[
              { text: 'Jayapura', value: 'c1' },
              { text: 'Merauke', value: 'c2' },
            ]}
          />
          <SelectDropdown
            label="Kecamatan"
            variant="text"
            text="Pilih Kecamatan"
            value={form.sub_district}
            onClick={(e) => setForm({ ...form, sub_district: e })}
            list={[
              { text: 'Cengkareng', value: 'kcm1' },
              { text: 'Cipondoh', value: 'kcm2' },
            ]}
          />
          <SelectDropdown
            label="Kelurahan"
            variant="text"
            text="Pilih Kelurahan"
            value={form.village}
            onClick={(e) => setForm({ ...form, village: e })}
            list={[
              { text: 'Duri Kosambi', value: 'kl1' },
              { text: 'Kebun Jeruk', value: 'kl2' },
            ]}
          />
          <SelectDropdown
            label="Kode Pos"
            variant="text"
            text="Pilih Kode Pos"
            value={form.postal_code}
            onClick={(e) => setForm({ ...form, postal_code: e })}
            list={[
              { text: '11750', value: 'pst1' },
              { text: '11751', value: 'pst2' },
            ]}
          />
          <Text
            label="No. Telepon"
            placeholder="Masukkan No. Telepon"
          />
        </Row>
        <Row
          display="grid"
          gridTemplateColumns="1fr 1fr"
          gridGap="20px"
          padding="20px 10px"
          alignItems="center"
        >
          <Col>
            <Button block variant="primary-orange">
              Simpan
            </Button>
          </Col>
          <Col>
            <CheckBox
              checked={form.main_address}
              label="Jadikan Alamat Utama"
              onClick={() =>
                setForm({ ...form, main_address: !form.main_address })
              }
            />
          </Col>
        </Row>
      </Modal>
    </React.Fragment>
  )
}
