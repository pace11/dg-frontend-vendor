import React, { useState } from 'react'
import styled from 'styled-components'
import Layout from '../../../../uikit/common/layout'
import Section from '../../../../uikit/common/section'
import { Button } from '../../../../uikit/components/button'
import Checkbox from '../../../../uikit/components/checkbox'
import Theme from '../../../../uikit/common/theme'
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

const ColContent = styled.div`
  height: auto;
  border-bottom: 1px solid ${Theme.colors.gray4};
  padding: 10px 15px;
  &:nth-last-child(1),
  &:nth-last-child(2),
  &:nth-last-child(3),
  &:nth-last-child(4) {
    border-bottom: none;
  }
`

export default function Shipping() {
  const { list_vendor_shipping } = dataJson
  const [form, setForm] = useState({
    all_day: false,
    day: [],
  })

  const HandleChangeForm = (key, val) => {
    if (key === 'day') {
      let check = form.day.includes(val)
      setForm({
        ...form,
        [key]: check
          ? form[key].filter((item) => item !== val)
          : form[key].concat([val]),
      })
    } else if (key === 'all_day') {
      let check = form.day.length,
        all = [
          'senin',
          'selasa',
          'rabu',
          'kamis',
          'jumat',
          'sabtu',
          'minggu',
        ]
      if (check) {
        setForm({
          ...form,
          day: [],
          all_day: false,
        })
      } else {
        setForm({
          ...form,
          day: all,
          all_day: true,
        })
      }
    } else {
      setForm({
        ...form,
        [key]: val,
      })
    }
  }

  return (
    <Layout>
      <Section title="Atur Pengiriman Penjualan">
        <ContainerMenu>
          <Row>
            <Col padding="10px 5px">
              <StyledText
                fontStyle="normal"
                fontSize="14px"
                color={Theme.colors.black}
                background={Theme.colors.orangeSoft}
                padding="10px 0"
              >
                <p
                  style={{
                    margin: '0',
                    padding: '5px 0 5px 25px',
                    fontWeight: '600',
                  }}
                >
                  Penjual dianggap menolak pesanan jika tidak
                  mengirimkan barang sejak transaksi berhasil dibayar
                  dalam batas waktu berikut ini:
                </p>
                <ul style={{ margin: '0' }}>
                  <li>hari kerja untuk layanan pengiriman reguler</li>
                  <li>
                    2 x 24 jam (tidak termasuk hari besar) untuk
                    layanan pengiriman kilat
                  </li>
                  <li>
                    1 x 24 jam untuk layanan pengiriman sameday
                    service
                  </li>
                </ul>
              </StyledText>
            </Col>
          </Row>
          <Row
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            padding="10px 5px"
          >
            <Col>
              <StyledText
                fontStyle="normal"
                fontWeight="600"
                fontSize="14px"
                color={Theme.colors.black}
              >
                Hari Pengiriman
              </StyledText>
            </Col>
            <Col>
              <Button variant="primary-orange">Simpan</Button>
            </Col>
          </Row>
          <Row
            padding="10px 5px"
            borderBottom={`1px solid ${Theme.colors.gray6}`}
          >
            <StyledText
              fontStyle="normal"
              fontWeight="normal"
              fontSize="14px"
              color={Theme.colors.gray}
            >
              Pilih hari apa saja kamu dapat mengirimkan barang ke
              jasa pengiriman.
            </StyledText>
            <Col display="flex" padding="10px 0">
              <div>
                <Checkbox
                  label="Semua"
                  checked={form.all_day}
                  onClick={() => HandleChangeForm('all_day', 'all')}
                />
              </div>
              <div style={{ marginLeft: '15px' }}>
                <Checkbox
                  label="Senin"
                  checked={form.day.includes('senin')}
                  onClick={() => HandleChangeForm('day', 'senin')}
                />
              </div>
              <div style={{ marginLeft: '15px' }}>
                <Checkbox
                  label="Selasa"
                  checked={form.day.includes('selasa')}
                  onClick={() => HandleChangeForm('day', 'selasa')}
                />
              </div>
              <div style={{ marginLeft: '15px' }}>
                <Checkbox
                  label="Rabu"
                  checked={form.day.includes('rabu')}
                  onClick={() => HandleChangeForm('day', 'rabu')}
                />
              </div>
              <div style={{ marginLeft: '15px' }}>
                <Checkbox
                  label="Kamis"
                  checked={form.day.includes('kamis')}
                  onClick={() => HandleChangeForm('day', 'kamis')}
                />
              </div>
              <div style={{ marginLeft: '15px' }}>
                <Checkbox
                  label="Jumat"
                  checked={form.day.includes('jumat')}
                  onClick={() => HandleChangeForm('day', 'jumat')}
                />
              </div>
              <div style={{ marginLeft: '15px' }}>
                <Checkbox
                  label="Sabtu"
                  checked={form.day.includes('sabtu')}
                  onClick={() => HandleChangeForm('day', 'sabtu')}
                />
              </div>
              <div style={{ marginLeft: '15px' }}>
                <Checkbox
                  label="Minggu"
                  checked={form.day.includes('minggu')}
                  onClick={() => HandleChangeForm('day', 'minggu')}
                />
              </div>
            </Col>
          </Row>
          <Row padding="15px 0">
            <Col display="grid" gridTemplateColumns="repeat(4, 1fr)">
              {list_vendor_shipping.map((item, i) => (
                <ColContent key={String(i)}>
                  <Row display="flex" justifyContent="center">
                    <Col
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      width="100px"
                      height="50px"
                      background={Theme.colors.gray6}
                    >
                      Logo
                    </Col>
                  </Row>
                  {item.description && (
                    <Row padding="10px 0">
                      <StyledText
                        fontStyle="normal"
                        fontWeight="normal"
                        fontSize="12px"
                        color={Theme.colors.black}
                      >
                        {item.description}
                      </StyledText>
                    </Row>
                  )}
                  <Row
                    padding="10px 0"
                    display="grid"
                    gridTemplateColumns="1fr"
                  >
                    {item.data.map((item, i) => (
                      <Checkbox key={String(i)} label={item.name} />
                    ))}
                  </Row>
                </ColContent>
              ))}
            </Col>
          </Row>
        </ContainerMenu>
      </Section>
    </Layout>
  )
}
