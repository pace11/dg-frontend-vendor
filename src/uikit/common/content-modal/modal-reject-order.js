import React, { useState } from 'react'
import styled from 'styled-components'
import Button from '../../components/button'
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
  margin-top: ;
`

const StepText = styled.div`
  width: auto;
  height: auto;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
`

export default function ModalRejectOrder() {
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
            value="empty_stok"
            text="Stok Kosong"
            placeholder="Status produk akan berubah menjadi tidak dijual"
            isSelected={data}
            onClick={() => setData('empty_stok')}
          />
          <Radio
            value="close_store"
            text="Toko sedang tutup"
            isSelected={data}
            onClick={() => setData('close_store')}
          />
          <Radio
            value="shipping_problem"
            text="Kendala jasa pengiriman"
            isSelected={data}
            onClick={() => setData('shipping_problem')}
          />
          <Radio
            value="buyer_request"
            text="Permintaan pembeli"
            isSelected={data}
            onClick={() => setData('buyer_request')}
          />
          <Radio
            value="other"
            text="Lainnya"
            isSelected={data}
            onClick={() => setData('other')}
          />
        </Row>
      </ReasonBox>
      <WrapperButton>
        <div>
          <StepText>Langkah 1/2</StepText>
        </div>
        <div>
          <Button
            variant="primary-orange"
            disabled={data ? false : true}
            onClick={(e) => console.log('bisa click')}
          >
            Selanjutnya
          </Button>
        </div>
      </WrapperButton>
    </Container>
  )
}
