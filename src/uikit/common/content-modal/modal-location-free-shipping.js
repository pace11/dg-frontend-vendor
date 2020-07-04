import React from 'react'
import styled from 'styled-components'
import { useStoreDispatch, useStoreState } from 'easy-peasy'
import { Button } from '../../components/button'
import Checkbox from '../../components/checkbox'
import data from '../../../__json__/data.json'

const Container = styled.div`
  width: 100%;
  height: auto;
`

const Row = styled.div`
  height: auto;
  ${(props) => props}
  border-box: box-sizing;
`

const Col = styled.div`
  height: auto;
  ${(props) => props}
  border-box: box-sizing;
`

export default function ModalLocationFreeShipping() {
  const dispatch = useStoreDispatch()
  const {
    GetLocationFreeShipping: stateLocationFreeShipping,
  } = useStoreState((globalState) => globalState)
  const { predifined_free_shipping } = data
  const { initialState } = stateLocationFreeShipping

  const HandleChange = (e) => {
    dispatch.GetLocationFreeShipping.setLocationFreeShipping({
      value: e,
    })
  }

  return (
    <Container>
      <Row
        width="100%"
        display="flex"
        flexWrap="wrap"
        flexDirection="column"
        height="400px"
      >
        {predifined_free_shipping.map((item, i) => (
          <Col width="25%" key={String(i)} marginBottom="20px">
            <Row fontWeight="600" fontSize="14px" marginBottom="10px">
              {item.name}
            </Row>
            {item.data.map((items, j) => (
              <Row
                display="flex"
                alignItems="center"
                key={String(j)}
                fontWeight="400"
                fontSize="14px"
                padding="3px 0"
              >
                <Checkbox
                  label={items.text}
                  margin="10px"
                  checked={
                    initialState &&
                    initialState.data.includes(items.id)
                  }
                  onClick={() => HandleChange(items.id)}
                />
              </Row>
            ))}
          </Col>
        ))}
      </Row>
      <Row
        display="flex"
        alignItems="center"
        justifyContent="flex-end"
        padding="20px 0"
      >
        <Col
          display="grid"
          gridTemplateColumns="repeat(2,1fr)"
          gridGap="10px"
          width="30%"
        >
          <Button
            variant="primary-orange-outline"
            block
            onClick={() => HandleChange('T')}
          >
            Hapus Gratis Ongkir
          </Button>
          <Button variant="primary-orange" block>
            Simpan
          </Button>
        </Col>
      </Row>
    </Container>
  )
}
