import React, { useState } from 'react'
import styled from 'styled-components'
import { Button } from '../../components/button'
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
export default function ModalOther({ handleBack }) {
  const [charLength, setCharLength] = useState(0)
  const [note, setNote] = useState('')

  const HandleChange = (e) => {
    let length = e.target.value.length
    setNote(e.target.value)
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
        <TextArea
          label="Alasan Anda menolak pesanan ini"
          value={note}
          onChange={(e) => HandleChange(e)}
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
            onClick={() => handleBack('other', 'reject_order')}
          >
            Kembali
          </Button>
          <Button
            variant="primary-orange"
            disabled={note ? false : true}
          >
            Tolak Pesanan
          </Button>
        </div>
      </WrapperButton>
    </Container>
  )
}
