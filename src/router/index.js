import Vue from 'vue'
import Router from 'vue-router'

// Containers
const DefaultContainer = () =>
    import ('@/containers/DefaultContainer')
const MemberContainer = () =>
    import ('@/containers/MemberContainer')

// Views
//const Dashboard = () => import('@/views/Dashboard')
const Country = () =>
    import ('@/views/setup/default/country')
const StatusFlag = () =>
    import ('@/views/setup/default/statusflag')
const currency = () =>
    import ('@/views/setup/default/currency')
const businessstatus = () =>
    import ('@/views/setup/default/businessstatus')

const TradeTerm = () =>
    import ('@/views/setup/default/tradeterm')


const Role = () =>
    import ('@/views/setup/authorization/role')
const Approval = () =>
    import ('@/views/setup/authorization/approval')
const roleapprovalstep = () =>
    import ('@/views/setup/authorization/roleapprovalstep')

const Paymenttype = () =>
    import ('@/views/setup/financial/paymenttype')
const duedatetype = () =>
    import ('@/views/setup/financial/duedatetype')

const Packing = () =>
    import ('@/views/setup/product/packing')

//const Home = () => import('@/views/home')
const Home = () =>
    import ('@/views/home')
const signin = () =>
    import ('@/views/member/signin')
const signup = () =>
    import ('@/views/member/signup')

// Views
const dashboard = () =>
    import ('@/views/dashboard')


const reptsummarysale = () =>
    import ('@/views/report/reptsummarysale')

const reptmdmWarehouseValue = () =>
    import ('@/views/report/reptmdmWarehouseValue')




const mdmAR = () =>
    import ('@/views/report/mdmAR/mdmAR')


const Kexpenses  = () =>import('@/views/report/Kexpenses')
const Rroapercent = () =>import('@/views/report/roapercent')
const RMaterial = () =>import('@/views/report/reptmaterial')
const RBudgetProject = () =>import('@/views/report/reptbudgetproject')

Vue.use(Router)

export default new Router({
    mode: 'history',
    linkActiveClass: 'open active',
    scrollBehavior: () => ({ y: 0 }),
    routes: [{
            path: '/',
            name: '',
            component: DefaultContainer,
            children: [{
                    path: '/',
                    name: 'Home', //'home',
                    component: Home ////-->def compunent ้นทำ
                },
                {
                    path: 'dashboard',
                    name: 'Dashboard',
                    component: dashboard
                },

                {
                    path: 'sales',
                    redirect: '/sales/quotation',
                    name: 'sales',
                    component: {
                        render(c) { return c('router-view') }
                    },
                    children: [{
                        path: 'quotation',
                        name: 'quotation',
                        component: Home
                    }]
                }
            ]
        },


        {
            path: '/report',
            name: 'ยอดขาย',
            component: DefaultContainer,
            children: [


                {
                    path: '/report/reptsummarysale',
                    name: 'ภาพรวม',
                    component: reptsummarysale
                }
            ]
        },
        {
            path: '/report',
            name: 'คลังสินค้า',
            component: DefaultContainer,
            children: [


                {
                    path: '/report/reptmdmWarehouseValue',
                    name: 'ภาพรวม',
                    component: reptmdmWarehouseValue
                }
            ]
        },
        {
            path: '/report',
            name: 'ลูกหนี้',
            component: DefaultContainer,
            children: [

                {
                    path: '/report/mdmAR',
                    name: 'ลูกหนี้ 1',
                    component: mdmAR
                }
            ]

        },
        {
            path: '/report',
            name: 'ROA ยอดขาย และ % กำไร',
            component: DefaultContainer,
            children: [

                {
                    path: '/report/roapercent',
                    name: 'ROA ยอดขาย และ % กำไร 1',
                    component: Rroapercent
                }
            ]
        },
        {
            path: '/report',
            name: 'วัตถุดิบ',
            component: DefaultContainer,
            children: [

                {
                    path: '/report/reptmaterial',
                    name: 'วัตถุดิบ',
                    component: RMaterial
                }
            ]
        },
        {
            path: '/report',
            name: 'ค่าใช้จ่ายในการดำเนินงาน',
            component: DefaultContainer,
            children: [

                {
                    path: '/report/Kexpenses',
                    name: 'ค่าใช้จ่าย',
                    component: Kexpenses
                }
            ]

        }

<<<<<<< HEAD
        ,
=======
    },
    {
      path: '/report',     
      name: 'งบประมาณงานโครงการ',
      component: DefaultContainer,
      children: [      

        {
          path: '/report/reptbudgetproject',
          name: 'งบประมาณงานโครงการ',
          component: RBudgetProject
        }
      ]
    }

    ,
    {
      path: '/user',
      name: 'user',
      component: DefaultContainer,
      children: [
>>>>>>> dbedd4cbdc0fb1c2bbbb41fec67f097a5f6b5752
        {
            path: '/user',
            name: 'user',
            component: DefaultContainer,
            children: [{
                path: '/user',
                name: '',
                component: Home
            }]
        },


        {
            path: '/setup',
            name: 'setup',
            component: DefaultContainer,
            children: [{
                    path: '/setup/default',
                    /**        default  */
                    name: 'default',
                    component: {
                        render(c) { return c('router-view') }
                    },
                    children: [{
                            path: '/setup/default/country',
                            name: 'country',
                            component: Country
                        },
                        {
                            path: '/setup/default/tradeterm',
                            name: 'tradeterm',
                            component: TradeTerm
                        },

                        {
                            path: '/setup/default/statusflag',
                            name: 'statusflag',
                            component: StatusFlag
                        },
                        {
                            path: '/setup/default/currency',
                            name: 'currency',
                            component: currency
                        },
                        {
                            path: '/setup/default/businessstatus',
                            name: 'businessstatus',
                            component: businessstatus
                        },

                    ]
                },

                {
                    path: '/setup/authorization/role',
                    /**        authorization  */
                    name: 'authorization',
                    component: {
                        render(c) { return c('router-view') }
                    },
                    children: [{
                            path: '/setup/authorization/role',
                            name: 'role',
                            component: Role
                        },
                        {
                            path: '/setup/authorization/approval',
                            name: 'approval',
                            component: Approval
                        },
                        {
                            path: '/setup/authorization/roleapprovalstep',
                            name: 'roleapprovalstep',
                            component: roleapprovalstep
                        },
                    ]
                },

                {
                    path: '/setup/product',
                    /**        Product  */
                    name: 'product',
                    component: {
                        render(c) { return c('router-view') }
                    },
                    children: [{
                        path: '/setup/product/packing',
                        name: 'packing',
                        component: Packing
                    }, ]
                },

                {
                    path: '/setup/financial/paymenttype',
                    name: 'financial',
                    component: {
                        render(c) { return c('router-view') }
                    },
                    children: [{
                            path: '/setup/financial/paymenttype',
                            name: 'paymenttype',
                            component: Paymenttype /** จากการกำหนดข้างบนเด้อจ้า */
                        },
                        {
                            path: '/setup/financial/duedatetype',
                            name: 'duedatetype',
                            component: duedatetype /** BEE EDIT 5.10.19 */
                        },
                    ]
                }



            ]
        },

        {
            path: '/member',
            redirect: '/member/signin',
            name: 'member',
            component: MemberContainer,
            children: [{
                    path: 'signin',
                    name: 'signin',
                    component: signin
                },
                {
                    path: 'signup',
                    name: 'signup',
                    component: signup
                },
                {
                    path: 'resetpassword',
                    name: 'resetpassword',
                    component: {}
                }
            ]
        },






    ]
})