import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './pages/home'
import Login from './pages/login'
import Sale from './pages/sale'
import Chat from './pages/chat'
import AddProduct from './pages/product/add-product'
import ListProduct from './pages/product/list-product'
import Ad from './pages/ad'
import Promotion from './pages/promotion'
import StoreDisplay from './pages/store/display'
import StoreSetting from './pages/store/setting'
import Statistic from './pages/statistic'
import Review from './pages/reviews'
import Customer from './pages/customer'
import AdminSetting from './pages/admin/setting'

export default function RouterWeb() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/login" exact component={Login} />
      <Route path="/chat" exact component={Chat} />
      <Route path="/sale" exact component={Sale} />
      <Route path="/product/add" exact component={AddProduct} />
      <Route path="/product" exact component={ListProduct} />
      <Route path="/ad" exact component={Ad} />
      <Route path="/promotion" exact component={Promotion} />
      <Route path="/store/display" exact component={StoreDisplay} />
      <Route path="/store/setting" exact component={StoreSetting} />
      <Route path="/statistic" exact component={Statistic} />
      <Route path="/review" exact component={Review} />
      <Route path="/customer" exact component={Customer} />
      <Route path="/admin/setting" exact component={AdminSetting} />
    </BrowserRouter>
  )
}
