import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import ProtectedRoute from './protected-route'
import Home from './pages/home'
import Login from './pages/login'
import Sale from './pages/sale'
import Chat from './pages/chat'
import AddProduct from './pages/product/add'
import EditProduct from './pages/product/edit'
import ListProduct from './pages/product/list'
import Ad from './pages/ad'
import Promotion from './pages/promotion'
import SettingStore from './pages/setting/store'
import Statistic from './pages/statistic'
import Review from './pages/reviews'
import Customer from './pages/customer'
import AdminSetting from './pages/setting/admin'
import ReceiptPrint from './pages/print/receipt'
import AddDistributor from './pages/distributor-seller/add'
import StockProduct from './pages/distributor-seller/stock-product'
import StoreAccountBank from './pages/setting/store/all-menu/account-bank'
import StoreAddress from './pages/setting/store/all-menu/address'
import StoreNotification from './pages/setting/store/all-menu/notification'
import StoreShipping from './pages/setting/store/all-menu/shipping'
import StoreNStore from './pages/setting/store/all-menu/store'
import StoreTemplateChat from './pages/setting/store/all-menu/template-chat'

export default function RouterWeb() {
  return (
    <BrowserRouter>
      <Route path="/login" exact component={Login} />
      <ProtectedRoute path="/" exact={true} component={Home} />
      <ProtectedRoute path="/chat" exact={true} component={Chat} />
      <ProtectedRoute
        path="/distributor/add"
        exact={true}
        component={AddDistributor}
      />
      <ProtectedRoute
        path="/distributor/stock-product"
        exact={true}
        component={StockProduct}
      />
      <ProtectedRoute
        path="/sale/:slug"
        exact={true}
        component={Sale}
      />
      <ProtectedRoute
        path="/product/add"
        exact={true}
        component={AddProduct}
      />
      <ProtectedRoute
        path="/product/edit"
        exact={true}
        component={EditProduct}
      />
      <ProtectedRoute
        path="/products/:slug"
        exact={true}
        component={ListProduct}
      />
      <ProtectedRoute path="/ad" exact={true} component={Ad} />
      <ProtectedRoute
        path="/promotion"
        exact={true}
        component={Promotion}
      />
      <ProtectedRoute
        path="/setting/store"
        exact={true}
        component={SettingStore}
      />
      <ProtectedRoute
        path="/setting/store/bank"
        exact={true}
        component={StoreAccountBank}
      />
      <ProtectedRoute
        path="/setting/store/address"
        exact={true}
        component={StoreAddress}
      />
      <ProtectedRoute
        path="/setting/store/notification"
        exact={true}
        component={StoreNotification}
      />
      <ProtectedRoute
        path="/setting/store/shipping"
        exact={true}
        component={StoreShipping}
      />
      <ProtectedRoute
        path="/setting/store/store"
        exact={true}
        component={StoreNStore}
      />
      <ProtectedRoute
        path="/setting/store/template-chat"
        exact={true}
        component={StoreTemplateChat}
      />
      <ProtectedRoute
        path="/statistic"
        exact={true}
        component={Statistic}
      />
      <ProtectedRoute
        path="/review"
        exact={true}
        component={Review}
      />
      <ProtectedRoute
        path="/customer"
        exact={true}
        component={Customer}
      />
      <ProtectedRoute
        path="/setting/admin"
        exact={true}
        component={AdminSetting}
      />
      <ProtectedRoute
        path="/print/receipt"
        exact={true}
        component={ReceiptPrint}
      />
    </BrowserRouter>
  )
}
