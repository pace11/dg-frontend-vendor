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
import StoreDisplay from './pages/store/display'
import StoreSetting from './pages/store/setting'
import Statistic from './pages/statistic'
import Review from './pages/reviews'
import Customer from './pages/customer'
import AdminSetting from './pages/admin/setting'
import ReceiptPrint from './pages/print/receipt'

export default function RouterWeb() {
  return (
    <BrowserRouter>
      <Route path="/login" exact component={Login} />
      <ProtectedRoute path="/" exact={true} component={Home} />
      <ProtectedRoute path="/chat" exact={true} component={Chat} />
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
        path="/store/display"
        exact={true}
        component={StoreDisplay}
      />
      <ProtectedRoute
        path="/store/setting"
        exact={true}
        component={StoreSetting}
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
        path="/admin/setting"
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
