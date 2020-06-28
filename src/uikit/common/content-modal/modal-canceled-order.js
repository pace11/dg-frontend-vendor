import React, { useState } from 'react'
import styled from 'styled-components'
import { Button } from '../../components/button'
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

export default function ModalCanceledOrder() {
  const [text, setText] = useState('')

  return (
    <Container>
      <Row display="grid" gridTemplateColumns="1fr">
        <Text
          value={text}
          label="Nomor Resi"
          onChange={(e) => setText(e.target.value)}
        />
      </Row>
      <WrapperButton>
        <div>
          <Button
            variant="primary-orange"
            onClick={() => alert('Pesanan telah dikirim')}
          >
            Pesanan Telah Dikirim
          </Button>
        </div>
      </WrapperButton>
    </Container>
  )
}
