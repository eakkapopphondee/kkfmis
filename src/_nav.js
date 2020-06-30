export default {
    items: [{
            name: 'Home',
            url: '/',
            icon: 'icon-screen-desktop',
            badge: {
                variant: 'primary'
            }
        },

        {

            name: 'Dashboard',
            url: '/dashboard',
            icon: 'icon-chart',
            badge: {
                variant: 'secondary'

            }
        },

        {
            name: 'ยอดขาย',
            url: '/report',

            url: '/report/reptsummarysale'

        },
        {

            name: 'ลูกหนี้',

            url: '/report/mdmAR'
        },
        {
            name: 'คลังสินค้าสำเร็จรูป',

            url: '/report/reptmdmWarehouseValue'
        },

        {
            name: 'พนักงาน',

            url: '/dashboard'
        },
        {
            name: 'วัตถุดิบ',
            url: '/report/reptmaterial'
        },
        {
            name: 'ค่าใช้จ่าย',
            url: '/report',
            url: '/report/Kexpenses'
        },
        {

            name: 'งบประมาณโครงการ',
            url: '/report/reptbudgetproject'

        },
        {
            name: 'คลังพัสดุ',
            url: '/dashboard'

        },


        {

            name: 'ROA & % กำไร',
            url: '/report/roapercent'
        },

        // {


        //     name: 'Report',
        //     url: '/report',
        //     icon: 'icon-grid',
        //     children: [


        //         {
        //             name: 'ยอดขาย',
        //             url: '/report',

        //             url: '/report/reptsummarysale'

        //         },

        //         {
        //             name: 'ลูกหนี้',

        //             url: '/report/mdmAR'
        //         },
        //         {
        //             name: 'คลังสินค้าสำเร็จรูป',

        //             url: '/report',

        //             url: '/report/reptmdmWarehouseValue'
        //         },
        //         {
        //             name: 'พนักงาน',

        //             url: '/users'
        //         },
        //         {
        //             name: 'วัตถุดิบ',
        //             url: '/report/reptmaterial'
        //         },
        //         {
        //             name: 'ค่าใช้จ่าย',
        //             url: '/report',
        //             url: '/report/Kexpenses'
        //         },
        //         {
        //             name: 'งบประมาณโครงการ',

        //             url: '/dashboard'
        //         },
        //         {
        //             name: 'คลังพัสดุ',
        //             url: '/dashboard'
        //         },
        //         {
        //             name: 'ROA & % กำไร',
        //             url: '/report/roapercent'
        //         }
        //     ]
        // },
        {
            name: 'Setting',
            url: '/setup',
            icon: 'icon-settings',
            children: [{
                name: 'ผู้ใช้งานระบบ',

                url: '/users'
            }, ]
        }


    ]
}