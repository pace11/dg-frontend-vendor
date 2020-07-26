import React from 'react'
import styled from 'styled-components'
import Theme from '../../../uikit/common/theme'
import { Button } from '../../../uikit/components/button'
import UploadTemplateIcon from '../../../assets/icons/UploadTemplate'

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

export default function UploadTemplate() {
  return (
    <Container>
      <Row padding="0 0 20px 0">
        <StyledText fontWeight="bold" fontSize="18px">
          2. Upload Template Kategori
        </StyledText>
      </Row>
      <Row width="50%">
        <StyledText
          fontWeight="300"
          fontSize="14px"
          color={Theme.colors.gray}
        >
          Pastikan file yang diupload berformat .xls atau .xlsx
        </StyledText>
      </Row>
      <Row
        width="80%"
        display="grid"
        gridTemplateColumns="3fr 9fr"
        margin="20px 0"
        gridGap="20px"
        padding="10px"
      >
        <Col>
          <UploadTemplateIcon />
        </Col>
        <Row>
          <Col
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            border={`1px solid ${Theme.colors.gray5}`}
            boxSizing="border-box"
            borderRadius="10px"
            padding="25px"
          >
            <Row padding="10px 0">
              <Button variant="primary-orange-outline">
                Pilih & Upload File
              </Button>
            </Row>
            <StyledText
              fontWeight="300"
              fontSize="14px"
              color={Theme.colors.gray}
            >
              atau tarik file excel (.xls atau .xlsx) ke area ini
            </StyledText>
          </Col>
        </Row>
      </Row>
    </Container>
  )
}
