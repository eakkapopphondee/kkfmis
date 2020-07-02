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
          name: 'ลูกหนี้',        
          
          url: '/report/mdmAR'
        },
        {
          name: 'คลังสินค้าสำเร็จรูป',
         
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
            name: 'Report',
            url: '/report',
            icon: 'icon-grid',
            children: [


                {
                    name: 'ยอดขาย',
                    url: '/report',

                    url: '/report/reptsummarysale'
                        //children: [
                        //   {
                        //     name: 'ภาพรวม',
                        //     url: '/report/reptsummarysale'
                        //   },
                        //   {
                        //     name: 'ขายต่างประเทศ',
                        //     url: '/dashboard'
                        //   },
                        //   {
                        //     name: 'ขายในประเทศ',
                        //     url: '/dashboard'
                        //   }
                        // ]
                },

                {
                    name: 'ลูกหนี้',

                    url: '/report/mdmAR'
                },
                {
                    name: 'คลังสินค้าสำเร็จรูป',

                    url: '/report',

                    url: '/report/reptmdmWarehouseValue'
                },
                {
                    name: 'พนักงาน',

                    url: '/users'
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

                    url: '/dashboard'
                },
                {
                    name: 'คลังพัสดุ',
                    url: '/dashboard'
                },
                {
                    name: 'ROA & % กำไร',
                    url: '/report/roapercent'
                }
            ]
        },
        {
          name: 'Setting',
          url: '/setup',
          icon: 'icon-settings',
          children: [              
            {
              name: 'ผู้ใช้งานระบบ',
             
              url: '/users'
            },
          ]
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