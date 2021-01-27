import React from 'react'
import styled from 'styled-components'
import Theme from '../../common/theme'
import Logo from '../../../assets/icons/LogoMain'
import Barcode from '../../../assets/icons/Barcode'
import Utils from '../../../helpers/utils'

const LogoMain = styled(Logo)`
  transform: scale(0.7);
`

const Container = styled.div`
  width: 420px;
  height: auto;
  background: #ffffff;
  border: 1px solid ${Theme.colors.black};
  box-sizing: border-box;
  padding: 10px 10px;
`

const Row = styled.div`
  height: auto;
  ${(props) => props}
`

const StyledText = styled.p`
  font-style: normal;
  ${(props) => props}
`

export default function Receipt() {
  return (
    <Container>
      <Row
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="70px"
        borderBottom={`1px solid ${Theme.colors.gray5}`}
      >
        <LogoMain />
      </Row>
      <Row
        borderBottom={`1px solid ${Theme.colors.gray5}`}
        padding="10px 0"
      >
        <StyledText margin="0" fontWeight="600" fontSize="12px">
          INV/24062020/9021878321
        </StyledText>
      </Row>
      <Row
        display="flex"
        justifyContent="space-between"
        padding="10px 0"
        borderBottom={`1px solid ${Theme.colors.gray5}`}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            flexDirection: 'columns',
          }}
        >
          Logo
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            flexDirection: 'column',
          }}
        >
          <Barcode />
          <StyledText margin="0" fontWeight="600">
            TJNE-RGHEKA90328
          </StyledText>
          <StyledText
            margin="0"
            fontSize="12px"
            color={Theme.colors.gray}
          >
            Kode booking ini bukan no resi pengiriman
          </StyledText>
        </div>
      </Row>
      <Row
        display="grid"
        gridTemplateColumns="1fr 1fr"
        padding="10px 0"
        borderBottom={`1px solid ${Theme.colors.gray5}`}
      >
        <div>
          <StyledText
            display="inline-block"
            margin="0"
            fontSize="12px"
          >
            Berat:
          </StyledText>
          <StyledText
            display="inline-block"
            margin="0"
            fontWeight="600"
            fontSize="12px"
          >
            1 Kg
          </StyledText>
        </div>
        <div>
          <StyledText
            display="inline-block"
            margin="0"
            fontSize="12px"
          >
            Ongkos Kirim:{' '}
          </StyledText>
          <StyledText
            display="inline-block"
            margin="0"
            fontWeight="600"
            fontSize="12px"
          >
            {Utils.currency(36000, 'Rp')}
          </StyledText>
        </div>
      </Row>
      <Row
        display="grid"
        gridTemplateColumns="1fr 1fr"
        borderBottom={`1px solid ${Theme.colors.gray5}`}
      >
        <div style={{ padding: '5px 5px 5px 0' }}>
          <StyledText margin="0" fontSize="12px">
            Kepada:
          </StyledText>
          <StyledText margin="0" fontWeight="600" fontSize="12px">
            Ananda Mikola
          </StyledText>
          <StyledText margin="0" fontSize="12px">
            Cluster Hijau Sentosa Blok Z No.90 Kel. Wonocolo, Kec.
            Mulyosari Kota Tangerang Selatan, Banten, 15321
            082209326543
          </StyledText>
        </div>
        <div
          style={{
            borderLeft: `1px solid ${Theme.colors.gray5}`,
            padding: '5px 0 5px 5px ',
          }}
        >
          <StyledText margin="0" fontSize="12px">
            Dari:
          </StyledText>
          <StyledText margin="0" fontWeight="600" fontSize="12px">
            Samsung Indonesia
          </StyledText>
          <StyledText margin="0" fontSize="12px">
            Kec. Mulyosari Kota Tangerang Selatan 082209326543
          </StyledText>
        </div>
      </Row>
      <Row
        display="grid"
        gridTemplateColumns="7fr 3fr"
        padding="5px 0"
      >
        <StyledText margin="0" fontWeight="600" fontSize="12px">
          Produk
        </StyledText>
        <StyledText margin="0" fontWeight="600" fontSize="12px">
          Jumlah
        </StyledText>
      </Row>
      <Row
        display="grid"
        gridTemplateColumns="7fr 3fr"
        padding="5px 0"
      >
        <StyledText margin="0" fontSize="12px">
          1. Uneed Nylon Kabel Data Micro USB Fast Charging 2.1A -
          UCBM1
        </StyledText>
        <StyledText margin="0" fontSize="12px">
          1 pcs
        </StyledText>
      </Row>
    </Container>
  )
}
