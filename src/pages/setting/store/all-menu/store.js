import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import Layout from '../../../../uikit/common/layout'
import Section from '../../../../uikit/common/section'
import { Button } from '../../../../uikit/components/button'
import SelectButton from '../../../../uikit/components/selected_button'
import SelectDropdown from '../../../../uikit/components/select_dropdown'
import { Text, Password } from '../../../../uikit/components/input'
import Modal from '../../../../uikit/common/modal'
import TextArea from '../../../../uikit/components/text_area'
import Checkbox from '../../../../uikit/components/checkbox'
import Theme from '../../../../uikit/common/theme'
import VerifiedIcon from '../../../../assets/icons/VerifyStore'
import LockIcon from '../../../../assets/icons/Lock'
import EditIcon from '../../../../assets/icons/Edit'
import ArrowIcon from '../../../../assets/icons/Arrow2'
import DeleteIcon from '../../../../assets/icons/Trash'
import InputOtp from '../../../../uikit/components/input_otp'

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

const ImageCircle = styled.div`
  position: relative;
  width: 100px;
  min-height: 100px;
  font-style: normal;
  font-weight: normal;
  color: ${Theme.colors.white};
  font-size: 12px;
  background-image: url(${(props) =>
    props.img
      ? props.img
      : 'https://res.cloudinary.com/code5/image/upload/v1589793836/dialogue/no-account_ks5tkz.png'});
  background-size: cover;
  background-color: ${Theme.colors.white2};
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 50%;
  overflow: hidden;
  span {
    display: none;
    position: absolute;
    width: 100%;
    height: 20px;
    background: ${Theme.colors.red};
    text-align: center;
    bottom: 0;
  }
  &:hover span {
    display: block;
    cursor: pointer;
  }
`

export default function Store() {
  const imageFile = useRef(null)
  const [otp, setOtp] = useState('')
  const [tabStore, setTabStrore] = useState('open_store')
  const [isModal, setIsModal] = useState({
    change_password: false,
    otp: false,
    input_password: false,
  })
  const [form, setForm] = useState({
    img_store_url: '',
    schedule: [
      {
        day: [],
        open_store: '',
        close_store: '',
        time_zone: '',
      },
    ],
    reason_close_store: '',
  })

  const HandleClickUpload = () => {
    imageFile.current.click()
  }

  const UpdateImage = (e) => {
    const file_reader = new FileReader(),
      file_image = e.target.files[0]

    if (file_image.size > 10000000) {
      alert('image file is too large > 10 Mb')
    } else {
      if (file_image && file_image.type.match('image.*')) {
        file_reader.readAsDataURL(file_image)
        file_reader.onloadend = () => {
          setForm({ ...form, img_store_url: file_reader.result })
        }
      }
    }
  }

  const HandleFillForm = (key, name, index, val) => {
    if (name === 'day') {
      let check = form.schedule[index].day.includes(val)
      setForm({
        ...form,
        [key]: form[key].map((item, i) =>
          i === index
            ? {
                ...item,
                [name]: check
                  ? item[name].filter((item) => item !== val)
                  : item[name].concat([val]),
              }
            : item,
        ),
      })
    } else {
      setForm({
        ...form,
        [key]: form[key].map((item, i) =>
          i === index ? { ...item, [name]: val } : item,
        ),
      })
    }
  }

  const HandleAddSchedule = () => {
    setForm({
      ...form,
      schedule: form.schedule.concat([
        {
          day: [],
          open_store: '',
          close_store: '',
          time_zone: '',
        },
      ]),
    })
  }

  const HandleRemoveSchedule = (e) => {
    setForm({
      ...form,
      schedule: form.schedule.filter((item, i) => i !== e),
    })
  }

  return (
    <React.Fragment>
      <Layout>
        <Section title="Atur Toko">
          <ContainerMenu>
            <Row
              padding="0 0 15px 0"
              borderBottom={`1px solid ${Theme.colors.gray6}`}
            >
              <VerifiedIcon />
              <span
                style={{
                  fontWeight: '600',
                  fontSize: '18px',
                  margin: '0 10px',
                }}
              >
                Official Brand
              </span>
            </Row>
            <Row
              display="flex"
              justifyContent="space-between"
              padding="15px 5px"
              borderBottom={`1px solid ${Theme.colors.gray6}`}
            >
              <Col width="50%">
                <StyledText
                  fontStyle="normal"
                  fontWeight="600"
                  fontSize="16px"
                  color={Theme.colors.black}
                >
                  Informasi Toko
                </StyledText>
                <Row
                  display="grid"
                  gridTemplateColumns="2fr 8fr"
                  padding="10px 0"
                  gridGap="20px"
                >
                  <Col>
                    <ImageCircle img={form.img_store_url}>
                      {form.img_store_url && (
                        <span
                          onClick={() =>
                            setForm({ ...form, img_store_url: '' })
                          }
                        >
                          hapus
                        </span>
                      )}
                    </ImageCircle>
                  </Col>
                  <Col>
                    <StyledText
                      fontStyle="normal"
                      fontWeight="normal"
                      fontSize="14px"
                      color={Theme.colors.black}
                    >
                      Besar file: Maksimum 10.000.000 bytes (10
                      Megabytes) EkstensiEkstensi file yang
                      diperbolehkan: JPG, JPEG, PNG
                    </StyledText>
                    <input
                      type="file"
                      ref={imageFile}
                      accept="image/*"
                      onChange={(e) => UpdateImage(e)}
                      hidden
                    />
                    <Button
                      variant="secondary-outline"
                      onClick={() => HandleClickUpload()}
                    >
                      Pilih Foto
                    </Button>
                  </Col>
                </Row>
                <Row display="grid" gridTemplateColumns="1fr">
                  <Text label="Nama Toko" />
                </Row>
              </Col>
              <Col>
                <Button variant="primary-orange">Simpan</Button>
              </Col>
            </Row>
            <Row
              padding="15px 5px"
              borderBottom={`1px solid ${Theme.colors.gray6}`}
            >
              <StyledText
                fontStyle="normal"
                fontWeight="600"
                fontSize="16px"
                color={Theme.colors.black}
              >
                Keamanan
              </StyledText>
              <Col width="250px" padding="15px 0">
                <Button
                  block
                  variant="secondary-outline"
                  onClick={() =>
                    setIsModal({
                      ...isModal,
                      change_password: !isModal.change_password,
                    })
                  }
                >
                  <LockIcon />
                  Ubah Kata Sandi
                </Button>
              </Col>
            </Row>
            <Row
              padding="15px 5px"
              borderBottom={`1px solid ${Theme.colors.gray6}`}
            >
              <StyledText
                fontStyle="normal"
                fontWeight="600"
                fontSize="16px"
                color={Theme.colors.black}
              >
                Verifikasi Toko
              </StyledText>
              <Col
                display="flex"
                justifyContent="space-between"
                alignItems="flex-end"
              >
                <Row width="50%">
                  <Text label="Email Toko" />
                </Row>
                <Row padding="10px 0">
                  <Button variant="primary-orange">
                    <EditIcon
                      style={{ fill: `${Theme.colors.white}` }}
                    />
                    Ubah
                  </Button>
                </Row>
              </Col>
              <Col
                display="flex"
                justifyContent="space-between"
                alignItems="flex-end"
              >
                <Row width="50%">
                  <Text label="Nomor HP" />
                </Row>
                <Row padding="10px 0">
                  <Button variant="primary-orange">
                    <EditIcon
                      style={{ fill: `${Theme.colors.white}` }}
                    />
                    Ubah
                  </Button>
                </Row>
              </Col>
            </Row>
            <Row padding="0 5px">
              <StyledText
                fontStyle="normal"
                fontWeight="600"
                fontSize="16px"
                color={Theme.colors.black}
                padding="15px 0"
              >
                Status Toko
              </StyledText>
              <Col>
                <SelectButton
                  text="Buka Toko"
                  value="open_store"
                  isSelected={tabStore}
                  onClick={() => setTabStrore('open_store')}
                />
                <SelectButton
                  text="Tutup Toko"
                  value="close_store"
                  isSelected={tabStore}
                  onClick={() => setTabStrore('close_store')}
                />
              </Col>
            </Row>

            {tabStore === 'open_store' ? (
              <React.Fragment>
                <Row padding="0px 5px">
                  <Col>
                    <StyledText
                      fontStyle="normal"
                      fontWeight="normal"
                      fontSize="14px"
                      color={Theme.colors.black}
                      padding="0 0 15px 0"
                    >
                      Pilih hari dan jam buka tokomu untuk melayani
                      pembeli. Meskpiun tokomu melewati jadwal buka
                      toko kamu tetap bisa menerima pesanan dari
                      pembeli.
                    </StyledText>
                  </Col>
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
                          Toko akan dianggap buka 7 hari 24 jam jika
                          kamu tidak mengubah jadwal hari dan jam
                          buka-tutup toko.
                        </li>
                      </ul>
                    </StyledText>
                  </Col>
                </Row>
                {form.schedule.map((item, i) => (
                  <Row
                    key={String(i)}
                    display="grid"
                    gridTemplateColumns="1fr 1fr"
                    padding="15px 5px"
                    gridGap="20px"
                  >
                    <Col>
                      <Row>
                        <StyledText
                          fontStyle="normal"
                          fontWeight="600"
                          fontSize="14px"
                          color={Theme.colors.black}
                        >
                          Pilih Hari
                        </StyledText>
                      </Row>
                      <Row
                        display="grid"
                        gridTemplateColumns="repeat(5,1fr)"
                        gridGap="10px"
                      >
                        <Checkbox
                          label="Senin"
                          checked={form.schedule[i].day.includes(
                            'senin',
                          )}
                          onClick={() =>
                            HandleFillForm(
                              'schedule',
                              'day',
                              i,
                              'senin',
                            )
                          }
                        />
                        <Checkbox
                          label="Selasa"
                          checked={form.schedule[i].day.includes(
                            'selasa',
                          )}
                          onClick={() =>
                            HandleFillForm(
                              'schedule',
                              'day',
                              i,
                              'selasa',
                            )
                          }
                        />
                        <Checkbox
                          label="Rabu"
                          checked={form.schedule[i].day.includes(
                            'rabu',
                          )}
                          onClick={() =>
                            HandleFillForm(
                              'schedule',
                              'day',
                              i,
                              'rabu',
                            )
                          }
                        />
                        <Checkbox
                          label="Kamis"
                          checked={form.schedule[i].day.includes(
                            'kamis',
                          )}
                          onClick={() =>
                            HandleFillForm(
                              'schedule',
                              'day',
                              i,
                              'kamis',
                            )
                          }
                        />
                        <Checkbox
                          label="Jumat"
                          checked={form.schedule[i].day.includes(
                            'jumat',
                          )}
                          onClick={() =>
                            HandleFillForm(
                              'schedule',
                              'day',
                              i,
                              'jumat',
                            )
                          }
                        />
                        <Checkbox
                          label="Sabtu"
                          checked={form.schedule[i].day.includes(
                            'sabtu',
                          )}
                          onClick={() =>
                            HandleFillForm(
                              'schedule',
                              'day',
                              i,
                              'sabtu',
                            )
                          }
                        />
                        <Checkbox
                          label="Minggu"
                          checked={form.schedule[i].day.includes(
                            'minggu',
                          )}
                          onClick={() =>
                            HandleFillForm(
                              'schedule',
                              'day',
                              i,
                              'minggu',
                            )
                          }
                        />
                      </Row>
                    </Col>
                    <Col
                      display="grid"
                      gridTemplateColumns="repeat(4,1fr)"
                      gridGap="15px"
                    >
                      <Row>
                        <StyledText
                          fontStyle="normal"
                          fontWeight="600"
                          fontSize="14px"
                          color={Theme.colors.black}
                        >
                          Jam Buka
                        </StyledText>
                        <SelectDropdown
                          variant="text"
                          text="Pilih"
                          value={form.schedule[i].open_store}
                          onClick={(e) =>
                            HandleFillForm(
                              'schedule',
                              'open_store',
                              i,
                              e,
                            )
                          }
                          list={[
                            { text: '07:00', value: '07:00' },
                            { text: '08:00', value: '08:00' },
                            { text: '09:00', value: '09:00' },
                          ]}
                        />
                      </Row>
                      <Row>
                        <StyledText
                          fontStyle="normal"
                          fontWeight="600"
                          fontSize="14px"
                          color={Theme.colors.black}
                        >
                          Jam Tutup
                        </StyledText>
                        <SelectDropdown
                          variant="text"
                          text="Pilih"
                          value={form.schedule[i].close_store}
                          onClick={(e) =>
                            HandleFillForm(
                              'schedule',
                              'close_store',
                              i,
                              e,
                            )
                          }
                          list={[
                            { text: '07:00', value: '07:00' },
                            { text: '08:00', value: '08:00' },
                            { text: '09:00', value: '09:00' },
                          ]}
                        />
                      </Row>
                      <Row>
                        <StyledText
                          fontStyle="normal"
                          fontWeight="600"
                          fontSize="14px"
                          color={Theme.colors.black}
                        >
                          Zona Waktu
                        </StyledText>
                        <SelectDropdown
                          variant="text"
                          text="Pilih"
                          value={form.schedule[i].time_zone}
                          onClick={(e) =>
                            HandleFillForm(
                              'schedule',
                              'time_zone',
                              i,
                              e,
                            )
                          }
                          list={[
                            { text: 'WIB', value: 'wib' },
                            { text: 'WITA', value: 'wita' },
                            { text: 'WIT', value: 'wit' },
                          ]}
                        />
                      </Row>
                      <Row display="flex" alignItems="center">
                        {i > 0 && (
                          <span
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              cursor: 'pointer',
                            }}
                            onClick={() => HandleRemoveSchedule(i)}
                          >
                            <DeleteIcon
                              style={{ paddingRight: '5px' }}
                            />
                            Hapus
                          </span>
                        )}
                      </Row>
                    </Col>
                  </Row>
                ))}
                <Row display="flex" justifyContent="space-between">
                  <Col></Col>
                  <Col
                    display="grid"
                    gridTemplateColumns="auto auto"
                    gridGap="10px"
                  >
                    <Button
                      variant="secondary-outline"
                      onClick={() => HandleAddSchedule()}
                      disabled={
                        form.schedule.length < 2 ? false : true
                      }
                    >
                      Tambah Jadwal
                    </Button>
                    <Button variant="primary-orange">Simpan</Button>
                  </Col>
                </Row>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <Row padding="15px 5px">
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
                          Pastikan kamu mengatur tanggal buka dan
                          tutup lapak dengan benar. Kami akan
                          mengirimkan e-mail pengingat 1x24 jam
                          sebelum lapak dibuka.
                        </li>
                      </ul>
                    </StyledText>
                  </Col>
                  <Col padding="10px 0">
                    <StyledText
                      fontStyle="normal"
                      fontWeight="600"
                      fontSize="14px"
                      color={Theme.colors.black}
                    >
                      Atur Waktu Tutup Toko
                    </StyledText>
                  </Col>
                  <Col width="50%">
                    <Row
                      display="grid"
                      gridTemplateColumns="1fr 1fr"
                      gridGap="15px"
                    >
                      <Text label="Tanggal Tutup Toko" type="date" />
                      <Text label="Tanggal Buka Toko" type="date" />
                    </Row>
                  </Col>
                  <Col>
                    <StyledText
                      fontStyle="normal"
                      fontWeight="normal"
                      fontSize="14px"
                      color={Theme.colors.black}
                    >
                      Alasan Tutup
                    </StyledText>
                    <Row>
                      <SelectButton
                        text="Restok Produk"
                        value="restock_product"
                        isSelected={form.reason_close_store}
                        onClick={() =>
                          setForm({
                            ...form,
                            reason_close_store: 'restock_product',
                          })
                        }
                      />
                      <SelectButton
                        text="Pindah ke Marketplace Lain"
                        value="change_marketplace"
                        isSelected={form.reason_close_store}
                        onClick={() =>
                          setForm({
                            ...form,
                            reason_close_store: 'change_marketplace',
                          })
                        }
                      />
                      <SelectButton
                        text="Buat Toko Baru"
                        value="create_new_store"
                        isSelected={form.reason_close_store}
                        onClick={() =>
                          setForm({
                            ...form,
                            reason_close_store: 'create_new_store',
                          })
                        }
                      />
                      <SelectButton
                        text="Mau Liburan"
                        value="get_holiday"
                        isSelected={form.reason_close_store}
                        onClick={() =>
                          setForm({
                            ...form,
                            reason_close_store: 'get_holiday',
                          })
                        }
                      />
                      <SelectButton
                        text="Lainnya"
                        value="other"
                        isSelected={form.reason_close_store}
                        onClick={() =>
                          setForm({
                            ...form,
                            reason_close_store: 'other',
                          })
                        }
                      />
                    </Row>
                  </Col>
                  <Col>
                    <TextArea
                      label="Catatan"
                      showLimit={false}
                      caption="Catatan akan tampil di halaman toko pada saat toko tutup"
                    />
                  </Col>
                </Row>
                <Row display="flex" justifyContent="space-between">
                  <Col></Col>
                  <Col
                    display="grid"
                    gridTemplateColumns="auto auto"
                    gridGap="10px"
                  >
                    <Button variant="primary-orange">Simpan</Button>
                  </Col>
                </Row>
              </React.Fragment>
            )}
          </ContainerMenu>
        </Section>
      </Layout>
      <Modal
        show={isModal.change_password}
        onClick={() =>
          setIsModal({
            ...isModal,
            change_password: !isModal.change_password,
          })
        }
        title="Ubah Kata Sandi"
      >
        <Row padding="0 0 20px 0">
          <StyledText
            fontStyle="normal"
            fontWeight="600"
            fontSize="16px"
          >
            Pilih Metode Verifikasi
          </StyledText>
        </Row>
        <Row display="grid" gridTemplateColumns="1fr" gridGap="10px">
          <Button
            variant="primary-orange"
            onClick={() =>
              setIsModal({
                ...isModal,
                change_password: false,
                otp: !isModal.otp,
              })
            }
            block
          >
            Kirim SMS ke *****78
          </Button>
          <Button
            variant="primary-orange"
            onClick={() =>
              setIsModal({
                ...isModal,
                change_password: false,
                otp: !isModal.otp,
              })
            }
            block
          >
            Kirim Email ke papa@gmail.com
          </Button>
        </Row>
      </Modal>
      <Modal
        show={isModal.otp}
        onClick={() => setIsModal({ ...isModal, otp: !isModal.otp })}
        iconTitle={
          <ArrowIcon
            style={{
              margin: '0 15px 3px 0',
              transform: 'scale(1.5) rotate(-90deg)',
              cursor: 'pointer',
            }}
            onClick={() =>
              setIsModal({
                ...isModal,
                otp: !isModal.otp,
                change_password: true,
              })
            }
          />
        }
        title="Edit Password"
      >
        <Row padding="20px 0">
          <StyledText
            fontStyle="normal"
            fontWeight="600"
            fontSize="16px"
          >
            Masukkan Kode Verifikasi
          </StyledText>
          <StyledText
            fontStyle="normal"
            fontWeight="normal"
            fontSize="14px"
            padding="10px 0"
          >
            Kode verifikasi telah dikirimkan melalui sms ke
            08xxx-xxxx-x94
          </StyledText>
        </Row>
        <Row
          display="flex"
          justifyContent="center"
          padding="20px 0 0 0"
        >
          <InputOtp value={otp} onChange={(e) => setOtp(e)} />
        </Row>
        <Row>
          <StyledText
            fontStyle="normal"
            fontWeight="normal"
            fontSize="14px"
            padding="10px 0"
          >
            <p>
              Mohon menunggu <b>xx detik</b> untuk mengirim ulang kode
              verifikasi
            </p>
          </StyledText>
        </Row>
        <Row display="flex" justifyContent="flex-end">
          <Col width="200px">
            <Button
              variant="primary-orange"
              block
              disabled={otp.length === 4 ? false : true}
              onClick={() =>
                setIsModal({
                  ...isModal,
                  otp: false,
                  input_password: !isModal.input_password,
                })
              }
            >
              Verifikasi
            </Button>
          </Col>
        </Row>
      </Modal>
      <Modal
        show={isModal.input_password}
        onClick={() =>
          setIsModal({
            ...isModal,
            input_password: !isModal.input_password,
          })
        }
        title="Ubah Kata Sandi"
      >
        <Row padding="20px 0">
          <StyledText
            fontStyle="normal"
            fontWeight="600"
            fontSize="16px"
          >
            Masukkan Kata Sandi Baru
          </StyledText>
        </Row>
        <Row>
          <Text
            type="email"
            placeholder="Masukkan email"
            label="Email/No. HP Terdaftar"
          />
        </Row>
        <Row>
          <Password label="Kata Sandi Baru" />
        </Row>
        <Row>
          <Password label="Ulang Kata Sandi" />
        </Row>
        <Row
          display="flex"
          justifyContent="flex-end"
          padding="25px 0 0 0"
        >
          <Col width="200px">
            <Button variant="primary-orange" block>
              Simpan
            </Button>
          </Col>
        </Row>
      </Modal>
    </React.Fragment>
  )
}
