import React from 'react'
import styled from 'styled-components'
import Theme from '../../../uikit/common/theme'
import InputSearch from '../../../uikit/components/input_search'
import { Button } from '../../../uikit/components/button'
import NotFoundIcon from '../../../assets/icons/NfDlTemplate'

const Container = styled.div`
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

const Col = styled.div`
  height: auto;
  ${(props) => props}
`

const StyledText = styled.span`
  height: auto;
  display: inherit;
  white-space: normal;
  ${(props) => props};
`

export default function DownloadTemplate() {
  return (
    <Container>
      <Row padding="0 0 20px 0">
        <StyledText fontWeight="bold" fontSize="18px">
          1. Download Template Sesuai Kategori
        </StyledText>
      </Row>
      <Row width="50%">
        <InputSearch placeholder="Cari Kategori" />
      </Row>
      <Row
        width="50%"
        display="grid"
        gridTemplateColumns="2fr 10fr"
        margin="20px 0"
        gridGap="20px"
        border={`1px solid ${Theme.colors.gray5}`}
        padding="10px"
        boxSizing="border-box"
        borderRadius="10px"
      >
        <Col>
          <NotFoundIcon />
        </Col>
        <Row display="flex" alignItems="center">
          <Col
            display="flex"
            flexDirection="column"
            justifyContent="flex-start"
            alignContent="flex-start"
          >
            <StyledText fontWeight="bold" fontSize="14px">
              Belum ada kategori produk yang ditambahkan
            </StyledText>
            <StyledText fontWeight="300" fontSize="14px">
              Cari dan tambahkan kategori produk pada form diatas
            </StyledText>
          </Col>
        </Row>
      </Row>
      <Row>
        <StyledText
          fontWeight="300"
          fontSize="14px"
          color={Theme.colors.gray}
        >
          Kamu bisa pilih 3 kategori sekaligus
        </StyledText>
      </Row>
      <Row padding="15px 0">
        <Button variant="secondary">Download Template</Button>
      </Row>
    </Container>
  )
}
