import React, { useState, useEffect } from 'react'
import { useStoreDispatch } from 'easy-peasy'
import { useParams } from 'react-router-dom'
import Layout from '../../../uikit/common/layout'
import Section from '../../../uikit/common/section'
import MenuHeader from './menu-header'
import ContentListProduct from './content-list-product'
import dataJson from '../../../__json__/data.json'

export default function List() {
  const dispatch = useStoreDispatch()
  const { list_product } = dataJson
  const { slug } = useParams()
  const [checkAllProduct, setCheckAllProduct] = useState(false)
  const [checkedProduct, setCheckedProduct] = useState([])

  const HandleCheckAllProduct = () => {
    if (checkAllProduct) {
      setCheckAllProduct(!checkAllProduct)
      setCheckedProduct([])
    } else {
      setCheckAllProduct(!checkAllProduct)
      Object.keys(list_product).forEach((key) => {
        setCheckedProduct((oldArray) => [
          ...oldArray,
          list_product[key].product_id,
        ])
      })
    }
  }

  const HandleCheckProduct = (e) => {
    let check = checkedProduct.includes(e)
    if (check) {
      setCheckedProduct(checkedProduct.filter((item) => item !== e))
    } else {
      setCheckedProduct((oldArray) => [...oldArray, e])
    }
  }

  const HandleMenu = (e) => {
    dispatch.ModalGlobal.setModalGlobal({ name: e, show: true })
  }

  useEffect(() => {
    if (checkedProduct.length < list_product.length)
      setCheckAllProduct(false)
    else if (checkedProduct.length === list_product.length)
      setCheckAllProduct(true)
  }, [checkedProduct, list_product])

  return (
    <Layout>
      <Section title="Daftar Produk">
        <MenuHeader slug={slug} />
        <ContentListProduct
          ckeckedProduct={checkedProduct}
          checkAllProduct={checkAllProduct}
          HandleCheckAllProduct={HandleCheckAllProduct}
          HandleMenu={HandleMenu}
          HandleCheckProduct={HandleCheckProduct}
          data={list_product}
        />
      </Section>
    </Layout>
  )
}
