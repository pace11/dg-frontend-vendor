import React from 'react'
import styled from 'styled-components'
import theme from '../../common/theme'
import SearchIcon from '../../../assets/icons/Search'

const Container = styled.div`
  width: 100%;
`

const RowInputSearch = styled.div`
  position: relative;
  input {
    font-family: 'Poppins', sans-serif;
    height: 41px;
    width: 100%;
    outline: none;
    padding: 0px 55px 0px 10px;
    background: transparent;
    border: 1px solid ${theme.colors.gray};
    letter-spacing: 1.5;
    border-radius: 10px;
    font-size: 14px;
    color: #828282;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  @media (max-width: 425px) {
    input {
      width: 100%;
      padding: 0px 50px 0px 10px;
    }
  }
`

const RightIcon = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 25px;
  width: 50px;
  border-left: 1px solid black;
  right: 10px;
  top: 8px;
  cursor: pointer;
  @media (max-width: 425px) {
    width: 35px;
    right: 4px;
  }
`

export default function InputSearch() {
  return (
    <Container>
      <RowInputSearch>
        <input placeholder="Cari nama pemesan, produk, nomor resi atau invoice ?" />
        <RightIcon>
          <SearchIcon />
        </RightIcon>
      </RowInputSearch>
    </Container>
  )
}
