import React from 'react'
import styled from 'styled-components'
import { useStoreDispatch, useStoreState } from 'easy-peasy'
import { Button } from '../../components/button'
import Switch from '../../components/switch'
import Theme from '../../common/theme'
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

export default function ModalSetShipping() {
  const dispatch = useStoreDispatch()
  const {
    GetDataTypeShipping: stateDataTypeShipping,
  } = useStoreState((globalState) => globalState)
  const { predifined_shipping } = data
  const { initialState } = stateDataTypeShipping

  const HandleChange = (e) => {
    dispatch.GetDataTypeShipping.setDataTypeShipping({ value: e })
  }

  return (
    <Container>
      {predifined_shipping.map((item, i) => (
        <Row
          key={String(i)}
          display="grid"
          gridTemplateColumns="4fr 6fr"
          padding="10px 0"
          borderBottom={`1px solid ${Theme.colors.gray5}`}
        >
          <Col>{item.name}</Col>
          <Col display="grid" gridTemplateColumns="8fr 2fr">
            {item.data.map((items, j) => (
              <React.Fragment key={String(j)}>
                <div style={{ padding: '10px 0' }}>{items.text}</div>
                <div style={{ padding: '10px 0' }}>
                  <Switch
                    checked={
                      initialState &&
                      initialState.data.includes(items.id)
                    }
                    onChange={() => HandleChange(items.id)}
                  />
                </div>
              </React.Fragment>
            ))}
          </Col>
        </Row>
      ))}

      <Row
        display="flex"
        alignItems="center"
        justifyContent="flex-end"
        padding="20px 0"
      >
        <Col width="40%">
          <Button variant="primary-secondary" block>
            Simpan
          </Button>
        </Col>
      </Row>
    </Container>
  )
}
