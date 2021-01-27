import React, { useState } from 'react'
import styled from 'styled-components'
import { Button } from '../../components/button'
import Theme from '../theme'
import Radio from '../../components/radio'

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

const ReasonBox = styled.div`
  height: auto;
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
export default function ModalShippingProblem({ handleBack }) {
  const [data, setData] = useState('')
  return (
    <Container>
      <BadgeInfo>
        <p>
          Menolak pesanan akan berdampak pada penurunan reputasi toko
          Anda. <b>Pelajari lebih.</b>
        </p>
      </BadgeInfo>
      <ReasonBox>
        <Row
          borderBottom={`1px solid ${Theme.colors.gray5}`}
          padding="5px 0"
          color={Theme.colors.gray}
          fontSize="14px"
        >
          Alasan Anda menolak pesanan :
        </Row>
        <Row>
          <Radio
            value="1"
            text="Biaya pengiriman tidak sesuai"
            isSelected={data}
            onClick={() => setData('1')}
          />
          <Radio
            value="2"
            text="Kantor jasa pengiriman tutup"
            isSelected={data}
            onClick={() => setData('2')}
          />
          <Radio
            value="3"
            text="Tidak dapat mengirim dengan jasa pengiriman yang dipilih"
            isSelected={data}
            onClick={() => setData('3')}
          />
          <Radio
            value="4"
            text="Lainnya"
            isSelected={data}
            onClick={() => setData('4')}
          />
        </Row>
      </ReasonBox>
      <WrapperButton>
        <div>
          <StepText>Langkah 2/2</StepText>
        </div>
        <div>
          <Button
            variant="secondary-outline"
            onClick={() =>
              handleBack('shipping_problem', 'reject_order')
            }
          >
            Kembali
          </Button>
          <Button
            variant="primary-orange"
            disabled={data ? false : true}
          >
            Tolak Pesanan
          </Button>
        </div>
      </WrapperButton>
    </Container>
  )
}
