import React from 'react'
import styled from 'styled-components'
import Theme from '../../../uikit/common/theme'
import { ProductDetail } from '../../../uikit/components/table_item'
import SelectDropdown from '../../../uikit/components/select_dropdown'
import Checkbox from '../../../uikit/components/checkbox'
import Utils from '../../../helpers/utils'
import EyeIcon from '../../../assets/icons/Eye2'
import ShopIcon from '../../../assets/icons/Shop'
import Edit from '../../../assets/icons/Edit'
import Duplicat from '../../../assets/icons/Duplicat'
import Notification from '../../../assets/icons/NotificationSmall'
import Delete from '../../../assets/icons/TrashSmall'

const ContainerMenu = styled.div`
  background: #ffffff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  box-sizing: border-box;
  padding: 10px 20px;
  margin-bottom: 20px;
`

const ContainerContent = styled.div`
  width: 100%;
  height: auto;
`

const Row = styled.div`
  height: auto;
  ${(props) => props}
`

const Col = styled.div`
  height: auto;
  ${(props) => props}
`

const RowTitle = styled.div`
  width: 100%;
  display: grid;
  height: 52px;
  grid-template-columns: 30% 20% 20% 15% 15%;
  font-size: 14px;
  div {
    display: flex;
    align-items: center;
  }
  border-bottom: 1px solid ${Theme.colors.gray};
  box-sizing: border-box;
`

const RowContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  height: auto;
`

const SpanText = styled.span`
  width: auto;
  height: 41px;
  border-radius: 10px;
  border: 1px solid ${Theme.colors.gray};
  color: ${Theme.colors.gray};
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  padding: 5px 10px;
`

const StyledText = styled.span`
  display: block;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  ${(props) => props}
`

export default function ContentListProduct({
  checkAllProduct,
  ckeckedProduct,
  HandleCheckAllProduct,
  HandleCheckProduct,
  HandleMenu,
  data,
}) {
  return (
    <ContainerMenu>
      <RowTitle>
        <div>
          <Checkbox
            checked={checkAllProduct}
            label="Produk"
            onClick={() => HandleCheckAllProduct()}
          />
        </div>
        <div>Statistik</div>
        <div>Harga</div>
        <div>Stok</div>
        <div>Aksi</div>
      </RowTitle>
      <RowContent>
        {data.map((item, i) => (
          <ContainerContent key={String(i)}>
            <Row
              display="grid"
              gridTemplateColumns="30% 20% 20% 15% 15%"
              padding="10px 0"
            >
              <Col display="grid" gridTemplateColumns="1fr 9fr">
                <Checkbox
                  checked={
                    ckeckedProduct.includes(item.product_id)
                      ? true
                      : false
                  }
                  onClick={() => HandleCheckProduct(item.product_id)}
                />
                <ProductDetail
                  productTitle={`${item.product_name}`}
                  imgUrl={`${item.product_image}`}
                />
              </Col>
              <Col>
                <StyledText>
                  <EyeIcon /> Dilihat: {item.seen}
                </StyledText>
                <StyledText>
                  <ShopIcon /> Terjual: {item.sold}
                </StyledText>
              </Col>
              <Col>
                <SpanText>
                  {Utils.currency(item.product_price, 'Rp')}
                </SpanText>
              </Col>
              <Col>
                <SpanText>{item.stok}</SpanText>
              </Col>
              <Col>
                <SelectDropdown
                  variant="with-icon"
                  text="Menu"
                  onClick={(e) => HandleMenu(e)}
                  list={[
                    {
                      icon: <Edit />,
                      text: 'Ubah',
                      value: 'change',
                      linkTo: '/product/edit',
                    },
                    {
                      icon: <Duplicat />,
                      text: 'Duplikat Produk',
                      value: 'duplicate_product',
                    },
                    {
                      icon: <Notification />,
                      text: 'Ingatkan Stok',
                      value: 'remember_product',
                    },
                    {
                      icon: <Delete />,
                      text: 'Hapus',
                      value: 'delete_product',
                    },
                  ]}
                />
              </Col>
            </Row>
          </ContainerContent>
        ))}
      </RowContent>
    </ContainerMenu>
  )
}
