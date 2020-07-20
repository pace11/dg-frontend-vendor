import React from 'react'
import styled from 'styled-components'
import Layout from '../../../../uikit/common/layout'
import Section from '../../../../uikit/common/section'
import Theme from '../../../../uikit/common/theme'
import VerifiedIcon from '../../../../assets/icons/VerifyStore'

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

export default function Store() {
  return (
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
        </ContainerMenu>
      </Section>
    </Layout>
  )
}
