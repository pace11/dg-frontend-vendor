import React from 'react'
import styled from 'styled-components'
import NotFoundStatusTemplateIcon from '../../../assets/icons/NfStatusTemplate'

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

export default function StatusUploadTemplate() {
  return (
    <Container>
      <Row padding="0 0 20px 0">
        <StyledText fontWeight="bold" fontSize="18px">
          3. Cek Status dan Riwayat Upload Template
        </StyledText>
      </Row>
      <Row
        width="50%"
        display="grid"
        gridTemplateColumns="2fr 10fr"
        margin="20px 0"
        gridGap="20px"
        padding="10px"
        boxSizing="border-box"
      >
        <Col>
          <NotFoundStatusTemplateIcon />
        </Col>
        <Row display="flex" alignItems="center">
          <Col
            display="flex"
            flexDirection="column"
            justifyContent="flex-start"
            alignContent="flex-start"
          >
            <StyledText fontWeight="bold" fontSize="14px">
              Belum ada template kategori yang diupload
            </StyledText>
            <StyledText fontWeight="300" fontSize="14px">
              Download dan upload template kategori sesuai form diatas
            </StyledText>
          </Col>
        </Row>
      </Row>
    </Container>
  )
}
