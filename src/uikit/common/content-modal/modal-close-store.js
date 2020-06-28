import React, { useState } from 'react'
import styled from 'styled-components'
import { Button } from '../../components/button'
import { Text } from '../../components/input'
import TextArea from '../../components/text_area'
import Theme from '../theme'

const Container = styled.div`
  width: 100%;
  height: auto;
`

const BadgeInfo = styled.div`
  height: auto;
  background: ${Theme.colors.pink};
  padding: 10px;
  p {
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 18px;
    margin: 0;
    b {
      color: ${Theme.colors.orange};
    }
  }
`

const Row = styled.div`
  height: auto;
  ${(props) => props}
`

const WrapperButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  div:not(:first-child) {
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 10px;
  }
`

const StepText = styled.div`
  width: auto;
  height: auto;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
`

/**
 *
 * @param {Function} props.handleBack
 */
export default function ModalCloseStore({ handleBack }) {
  const [charLength, setCharLength] = useState(0)
  const [data, setData] = useState({
    close_date: '',
    note: '',
  })

  const HandleChange = (key, e) => {
    let length = e.target.value.length
    setData({
      ...data,
      [key]: e.target.value,
    })
    setCharLength(length)
  }

  return (
    <Container>
      <BadgeInfo>
        <p>
          Menolak pesanan akan berdampak pada penurunan reputasi toko
          Anda. <b>Pelajari lebih.</b>
        </p>
      </BadgeInfo>
      <Row>
        <Text
          label="Tanggal tutup toko"
          type="date"
          value={data.close_date}
          onChange={(e) => HandleChange('close_date', e)}
        />
        <TextArea
          label="Catatan"
          value={data.note}
          onChange={(e) => HandleChange('note', e)}
          charLength={charLength}
        />
      </Row>
      <WrapperButton>
        <div>
          <StepText>Langkah 2/2</StepText>
        </div>
        <div>
          <Button
            variant="secondary-outline"
            onClick={() => handleBack('close_store', 'reject_order')}
          >
            Kembali
          </Button>
          <Button
            variant="primary-orange"
            disabled={data.note && data.close_date ? false : true}
          >
            Tolak Pesanan
          </Button>
        </div>
      </WrapperButton>
    </Container>
  )
}
