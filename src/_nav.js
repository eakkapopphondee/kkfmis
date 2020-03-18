export default {
  items: [
    {
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
        
          url: '/dashboard'
    
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
          url: '/dashboard'
        },
        {
          name: 'ค่าใช้จ่าย',
        
          url: '/dashboard'
        },
        {
          name: 'งบประมาณโครงการ',
      
          url: '/dashboard'
        },
        {
          name: 'คลังพัสดุ',
          url: '/dashboard'
        }
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
