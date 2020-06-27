import React from 'react'
import styled from 'styled-components'
import Theme from '../theme'
import StepIndicator from '../../components/step_indicator'

const Container = styled.div`
  width: 100%;
  height: auto;
`

const RowText = styled.div`
  padding: 10px 0;
  width: 100%;
  height: auto;
  border-bottom: 1px solid ${Theme.colors.gray5};
`

const StyledText = styled.span`
  font-style: normal;
  font-size: 14px;
  line-height: 21px;
  ${(props) => props}
`

export default function ModalStatusOrder({ data }) {
  return (
    <Container>
      <RowText>
        <div>
          <StyledText fontWeight="600">Ananda Mikola</StyledText>
          <StyledText marginLeft="20px">
            24 Jun 2020 , 19:31 WIB
          </StyledText>
        </div>
        <div>
          <StyledText fontWeight="600" color={Theme.colors.orange}>
            INV/24062020/9021878321
          </StyledText>
        </div>
      </RowText>
      <StepIndicator data={data} />
    </Container>
  )
}
