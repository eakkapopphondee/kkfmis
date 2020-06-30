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
            name: 'ลูกหนี้',

            url: '/report/mdmAR'
        },
        {
            name: 'คลังสินค้าสำเร็จรูป',

            url: '/dashboard'
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
        }




        // , 
        //     {
        //       name: 'Disabled',
        //       url: '/dashboard',
        //       icon: 'icon-ban',
        //       badge: {
        //         variant: 'secondary',
        //         text: 'NEW'
        //       },
        //       attributes: { disabled: true },
        //     }



    ]
}