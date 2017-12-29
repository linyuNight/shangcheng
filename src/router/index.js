import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const GoodsShow = () => import('components/goods-show/goods-show')
const Classification = () => import('components/classification/classification')
const Find = () => import('components/find/find')
const Purchase = () => import('components/purchase/purchase')
const PurchaseDelete = () => import('components/purchase-delete/purchase-delete')
const GoodsDetail = () => import('components/goods-detail/goods-detail')
const ArticalDetail = () => import('components/artical-detail/artical-detail')
const ConfirmationOrder = () => import('components/confirmation-order/confirmation-order')
const AddAddress = () => import('components/add-address/add-address')
const MyOrder = () => import('components/my-order/my-order')
const OrderDetail = () => import('components/order-detail/order-detail')
const EvaluateDetail = () => import('components/evaluate-detail/evaluate-detail')
const EvaluateGoodsDetail = () => import('components/evaluate-goods-detail/evaluate-goods-detail')
const ArticalEvaluateDetail = () => import('components/artical-evaluate-detail/artical-evaluate-detail')
const ClassificationDetail = () => import('components/classification-detail/classification-detail')
const MakeMoney = () => import('components/make-money/make-money')
const TransactionDetail = () => import('components/transaction-detail/transaction-detail')
const LogisticsDetails = () => import('components/logistics-details/logistics-details')


export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/goodsShow',
      meta: {
        title: '海带宝日本代购'
      }
    },
    {
      path: '/goodsShow',
      name: 'goodsShow',
      component: GoodsShow,
      meta: {
        title: '海带宝日本代购'
      }
    },
    {
      path: '/goodsDetail',
      name: 'goodsDetail',
      component: GoodsDetail,
      meta: {
        title: '商品详情'
      }
    },
    {
      path: '/evaluateGoodsDetail',
      name: 'evaluateGoodsDetail',
      component: EvaluateGoodsDetail,
      meta: {
        title: '更多评价'
      }
    },
    {
      path: '/evaluateDetail',
      name: 'evaluateDetail',
      component: EvaluateDetail,
      meta: {
        title: '评价详情'
      }
    },
    {
      path: '/classification',
      name: 'classification',
      component: Classification,
      meta: {
        title: '商品分类'
      }
    },
    {
      path: '/classificationDetail',
      name: 'classificationDetail',
      component: ClassificationDetail,
      meta: {
        title: '商品列表'
      }
    },
    {
      path: '/find',
      name: 'find',
      component: Find,
      meta: {
        title: '发现'
      }
    },
    {
      path: '/articalDetail',
      name: 'articalDetail',
      component: ArticalDetail,
      meta: {
        title: '文章详情'
      }
    },
    {
      path: '/articalEvaluateDetail',
      name: 'articalEvaluateDetail',
      component: ArticalEvaluateDetail,
      meta: {
        title: '更多评论'
      }
    },
    {
      path: '/makeMoney',
      name: 'makeMoney',
      component: MakeMoney,
      meta: {
        title: '赚钱'
      }
    },
    {
      path: '/purchase',
      name: 'purchase',
      component: Purchase,
      meta: {
        title: '购物车'
      }
    },
    {
      path: '/purchaseDelete',
      name: 'purchaseDelete',
      component: PurchaseDelete,
      meta: {
        title: '购物车'
      }
    },
    {
      path: '/confirmationOrder',
      name: 'confirmationOrder',
      component: ConfirmationOrder,
      meta: {
        title: '确认订单'
      }
    },
    {
      path: '/addAddress',
      name: 'addAddress',
      component: AddAddress,
      meta: {
        title: '添加地址'
      }
    },
    {
      path: '/transactionDetail',
      name: 'transactionDetail',
      component: TransactionDetail,
      meta: {
        title: '交易详情'
      }
    },
    {
      path: '/myOrder',
      name: 'myOrder',
      component: MyOrder,
      meta: {
        title: '我的订单'
      }
    },
    {
      path: '/orderDetail',
      name: 'orderDetail',
      component: OrderDetail,
      meta: {
        title: '订单详情'
      }
    },
    {
      path: '/logisticsDetails',
      name: 'logisticsDetails',
      component: LogisticsDetails,
      meta: {
        title: '物流详情'
      }
    }
  ]
})
