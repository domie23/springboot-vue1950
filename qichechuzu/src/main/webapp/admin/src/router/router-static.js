import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'

     import users from '@/views/modules/users/list'
    import cheliang from '@/views/modules/cheliang/list'
    import cheliangJiancha from '@/views/modules/cheliangJiancha/list'
    import cheliangOrder from '@/views/modules/cheliangOrder/list'
    import dictionary from '@/views/modules/dictionary/list'
    import gonggao from '@/views/modules/gonggao/list'
    import kehu from '@/views/modules/kehu/list'
    import yuangong from '@/views/modules/yuangong/list'
    import dictionaryCheliang from '@/views/modules/dictionaryCheliang/list'
    import dictionaryCheliangJiancha from '@/views/modules/dictionaryCheliangJiancha/list'
    import dictionaryCheliangOrder from '@/views/modules/dictionaryCheliangOrder/list'
    import dictionaryCheliangZhuangtai from '@/views/modules/dictionaryCheliangZhuangtai/list'
    import dictionaryDiqu from '@/views/modules/dictionaryDiqu/list'
    import dictionaryGonggao from '@/views/modules/dictionaryGonggao/list'
    import dictionarySex from '@/views/modules/dictionarySex/list'





//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    } ,{
        path: '/users',
        name: '管理信息',
        component: users
      }
    ,{
        path: '/dictionaryCheliang',
        name: '车辆类型',
        component: dictionaryCheliang
    }
    ,{
        path: '/dictionaryCheliangJiancha',
        name: '检查结果',
        component: dictionaryCheliangJiancha
    }
    ,{
        path: '/dictionaryCheliangOrder',
        name: '订单类型',
        component: dictionaryCheliangOrder
    }
    ,{
        path: '/dictionaryCheliangZhuangtai',
        name: '车辆状态',
        component: dictionaryCheliangZhuangtai
    }
    ,{
        path: '/dictionaryDiqu',
        name: '地区',
        component: dictionaryDiqu
    }
    ,{
        path: '/dictionaryGonggao',
        name: '公告类型',
        component: dictionaryGonggao
    }
    ,{
        path: '/dictionarySex',
        name: '性别类型',
        component: dictionarySex
    }


    ,{
        path: '/cheliang',
        name: '车辆',
        component: cheliang
      }
    ,{
        path: '/cheliangJiancha',
        name: '检查单',
        component: cheliangJiancha
      }
    ,{
        path: '/cheliangOrder',
        name: '车辆出租',
        component: cheliangOrder
      }
    ,{
        path: '/dictionary',
        name: '字典',
        component: dictionary
      }
    ,{
        path: '/gonggao',
        name: '公告',
        component: gonggao
      }
    ,{
        path: '/kehu',
        name: '客户',
        component: kehu
      }
    ,{
        path: '/yuangong',
        name: '员工',
        component: yuangong
      }


    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
