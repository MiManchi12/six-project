const routers = [
    {
        path: '/',
        redirect: '/home'
    },
    // 登录
    {
        path: '/login',
        name: 'Login',
        component: () => import('../view/login/index.vue')
    },
    // 注册
    {
        path: '/register',
        name: 'Register',
        component: () => import('../view/register/index.vue')
    },
 // 课程
 {
    path: '/class',
    name: 'Class',
    component: () => import('../view/class/index.vue'),
    redirect:'/class/vip',
    children: [
        {
            path: 'vip',
            component: () => import('../view/class/vip/index.vue'),
            meta: {
                title: '会员专区',
            }
        },
        {
            path: 'video',
            component: () => import('../view/class/video/index.vue'),
            meta: {
                title: '视频课',
            }
        },
        {
            path: 'live',
            component: () => import('../view/class/live/index.vue'),
            meta: {
                title: '直播课',
            }
        },
        {
            path: 'offline',
            component: () => import('../view/class/offline/index.vue'),
            meta: {
                title: '线下课',
            }
        },
        {
            path: 'subject',
            component: () => import('../view/class/subject/index.vue'),
            meta: {
                title: '主题',
            }
        },
        {
            path: 'product',
            component: () => import('../view/class/product/index.vue'),
            meta: {
                title: '产品',
            }
        },
        
    ]
},
    // 我的
    {
        path: '/myself',
        name: 'Myself',
        component: () => import('../view/myself/index.vue'),
        redirect: '/center/dynamics',
        children: [
            {
              name: 'Dynamics',
              path: '/center/dynamics',
              component: () => import('../view/myself/dynamics/index.vue'),
            },
            {
              name: 'My_member',
              path: '/center/my_member',
              component: () => import('../view/myself/my_member/index.vue'),
            },
            {
              name: 'Wallet',
              path: '/center/wallet',
              component: () => import('../view/myself/wallet/index.vue'),
            },
            {
              name: 'Coupons',
              path: '/center/coupons',
              component: () => import('../view/myself/coupons/index.vue'),
            },
            {
              name: 'Buyer',
              path: '/center/buyer',
              component: () => import('../view/myself/buyer/index.vue'),
              children: [],
            },
            {
              name: 'Seller',
              path: '/center/seller',
              component: () => import('../view/myself/seller/index.vue'),
              children: [],
            },
            {
              name: 'Edit_info',
              path: '/center/edit_info',
              component: () => import('../view/myself/edit_info/index.vue'),
            },
          ],
    },
    // 练习室
    {
        path: '/train',
        name: 'Train',
        component: () => import('../view/train/index.vue'),
        redirect: '/train/myroom',
        children: [
            {
                path: '/train',
                name: 'MyRoom',
                meta: {
                    title: '我的练习室'
                }
            },
            {
                path: '/train/myroom',
                name: 'MyRoom',
                component: () => import('../view/train/myroom/index.vue'),
                meta: {
                    title: '我的练习室'
                }
            },
            {
                path: 'cache',
                name: 'Cache',
                component: () => import('../view/train/cache/index.vue'),
                meta: {
                    title: '缓存'
                }
            },
            {
                path: 'collect',
                name: 'Collect',
                component: () => import('../view/train/collect/index.vue'),
                meta: {
                    title: '收藏'
                }
            },
            {
                path: 'history',
                name: 'History',
                component: () => import('../view/train/history/index.vue'),
                meta: {
                    title: '历史'
                }
            },
        ]
    },
    //交流
    {
        path: '/exchange',
        name: 'Exchange',
        component: () => import('../view/exchange/index.vue')
    },
    // 首页
    {
        path: '/home',
        name: 'Home',
        component: () => import('../view/home/index.vue')
    },
    // 详情页
    {
        path: '/detail',
        redirect: '/detail/video',
        children: [
            {
                path: 'video',
                component: () => import('../view/detail/video.vue'),
                meta: {
                    title: '详情页',
                }
            }
        ]
    },
    //404
    {
        path: '/404',
        name: '404',
        component: () => import('../view/error/404.vue'),
    },

]
export default routers