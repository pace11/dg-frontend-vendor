import React, { useState } from 'react'
import styled from 'styled-components'
import { Button } from '../../components/button'
import SelectDropdown from '../../components/select_dropdown'
import { Text } from '../../components/input'

const Container = styled.div`
  width: 100%;
  height: auto;
`

const Row = styled.div`
  height: auto;
  ${(props) => props}
`

const WrapperButton = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
  div:not(:first-child) {
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 10px;
  }
`

export default function ModalAddDistributtorSeller() {
  const [form, setForm] = useState({
    role: '',
  })

  const HandleFillForm = (key, e) => {
    setForm({
      ...form,
      [key]: e,
    })
  }

  return (
    <Container>
      <Row
        display="grid"
        gridTemplateColumns="1fr"
        gridGap="10px"
        padding="10px"
      >
        <SelectDropdown
          variant="text"
          label="Pilih Peran"
          text="Peran"
          value={form.role}
          onClick={(e) => HandleFillForm('role', e)}
          list={[
            { text: 'Distributor', value: 'role_1' },
            { text: 'Seller', value: 'role_2' },
          ]}
        />
        <Text label="Alamat Email" placeholder="Masukkan email" />
        <Text
          label="Nama Distributor"
          placeholder="Masukkan nama distributor"
        />
        <Text
          label="Nomor Handphone"
          placeholder="Masukkan nomor handphone"
        />
      </Row>
      <WrapperButton>
        <div>
          <Button
            variant="primary-orange"
            onClick={() => alert('Simpan Data Berhasil')}
          >
            Simpan
          </Button>
        </div>
      </WrapperButton>
    </Container>
  )
}
