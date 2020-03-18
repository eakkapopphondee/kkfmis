<template>
  <div class="app">
    <AppHeader fixed>
      <SidebarToggler class="d-lg-none" display="md" mobile />
  
      <b-link class="navbar-brand" to="#">
        <img class="navbar-brand-full" src="img/brand/logo.png" width="100%" height="80%" alt="CoreUI Logo">
        <img class="navbar-brand-minimized" src="img/brand/logokkf.png" width="60" height="50" alt="CoreUI Logo">
      </b-link>
      <SidebarToggler class="d-md-down-none" display="lg" :defaultOpen="false" />
 
      <b-navbar-nav class="d-md-down-none">
        <!-- <b-nav-item class="px-3" to="/users" exact>Home</b-nav-item>
        <b-nav-item class="px-3" to="/dashboard">Dashboard</b-nav-item>
        <b-nav-item class="px-3" to="/Logout">Logout</b-nav-item> -->
        <!-- <b-nav-item class="px-3">Settings</b-nav-item> -->
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto">
        <!-- <b-nav-item class="d-md-down-none">
          
          <i class="icon-bell"></i>
          <b-badge pill variant="danger">5</b-badge>
        </b-nav-item>
        <b-nav-item class="d-md-down-none">
          <i class="icon-list"></i>
        </b-nav-item>
        <b-nav-item class="d-md-down-none">
          <i class="icon-location-pin"></i>
        </b-nav-item>
        <DefaultHeaderDropdownAccnt/> -->
      </b-navbar-nav>

<!--          
       <AsideToggler class="d-none d-lg-block" />  -->
   
 
      <div class="navbar-togglerTo"  > <a class="pointer"> <i class="icon-screen-desktop fa-2x" @click="to_home" ></i></a></div> 
      <div class="navbar-togglerTo"  > <a class="pointer"> <i class="icon-chart fa-2x" @click="to_dashboard" ></i></a></div> 
      <div class="navbar-togglerLogout"  > <a class="pointer"> <i class="icon-power fa-2x" @click="showMsgBoxTwo" ></i></a></div> 
     
             
  <!-- <div class="mb-1">
     <b-button @click="showMsgBoxTwo">msgBoxConfirm with options</b-button>
    
    </div> -->


      
      
      <!--<AsideToggler class="d-lg-none" mobile />-->
    </AppHeader>
    <div class="app-body">
      <AppSidebar :fixed="true">
        <SidebarHeader/>
        <SidebarForm/>
        <SidebarNav :navItems="nav"></SidebarNav>
        <SidebarFooter/>
        <!-- <SidebarMinimizer/> -->
      </AppSidebar>
      <main class="main">
        <!-- <Breadcrumb :list="list"/> -->
        <br>
        <div class="container-fluid">
          <router-view></router-view>
        </div>
      </main>
      <!-- <AppAside fixed> -->
        <!--aside-->
        <!-- <DefaultAside/>
      </AppAside> -->
    </div>
    <TheFooter>
      <!--footer-->
      <div>
        <a href="/">MIS KKF</a>
        <span class="ml-1">&copy; 2020</span>
      </div>
      <div class="ml-auto">
        <span class="mr-1">Powered by</span>
        <a href="/">IT-KIG Application</a>
      </div>
    </TheFooter>
  </div>
</template>

<script>
import nav from '@/_nav'
import { Header as AppHeader, SidebarToggler, Sidebar as AppSidebar, SidebarFooter, SidebarForm, SidebarHeader, SidebarNav, Aside as AppAside, AsideToggler, Footer as TheFooter, Breadcrumb } from '@coreui/vue'
import DefaultAside from './DefaultAside'
import DefaultHeaderDropdownAccnt from './DefaultHeaderDropdownAccnt'



export default {
  name: 'DefaultContainer',
  components: {
    AsideToggler,
    AppHeader,
    AppSidebar,
    AppAside,
    TheFooter,
    Breadcrumb,
    DefaultAside,
    DefaultHeaderDropdownAccnt,
    SidebarForm,
    SidebarFooter,
    SidebarToggler,
    SidebarHeader,
    SidebarNav
    // ,
    // SidebarMinimizer
  },

    

  data () {
    return {
      nav: nav.items,
        boxOne: '',
        boxTwo: ''
    }
  },
  computed: {
    name () {
      return this.$route.name
    },
    list () {
      return this.$route.matched.filter((route) => route.name || route.meta.label )
    }
  },
  
    
   methods: {  
     
     
     scrollHandle(evt) {
       //console.log(this.$localStorage.get("User"))
    
      
  },
    to_home()
    {
        this.$router.push("/")
    },
    to_dashboard()
    {
        this.$router.push("/dashboard")
    },

  showMsgBoxTwo() {
        this.boxTwo = ''
        this.$bvModal.msgBoxConfirm('ยืนยันการ Logout ออกจากระบบ ... ', {
          title: 'Please Confirm',
          size: 'sm',
          buttonSize: 'sm',
          okVariant: 'danger',
          okTitle: 'YES',
          cancelTitle: 'NO',
          footerClass: 'p-2',
          hideHeaderClose: false,
          centered: true
        })
          .then(value => {
            this.boxTwo = value

            if (this.boxTwo)
            {
              this.onSingout();
            }
          })
          .catch(err => {
            // An error occurred
          })
      },
   



  onSingout() {
   
        this.usercode = this.$localStorage.get("User") ;

        if (typeof y === "undefined") {
            try {
              API.OauthLogout({
                data:{usercode:this.usercode},
                    callblack: res => {
                    
                    }
                  });
            }
            catch(err) {
              
            }
            finally {
              this.$localStorage.remove("Token");
              this.$localStorage.remove("User");  
  
            //  this.$localStorage.set("lang");  
              this.$router.push("/member/signin");
                
            }  
          } else {
              this.$localStorage.remove("Token");
              this.$localStorage.remove("User");  
  
            //  this.$localStorage.set("lang");  
              this.$router.push("/member/signin");
          }
                      
    }   
   }
}
</script>


<style scoped>

.app-header .navbar-togglerTo {
    min-width: 50px;
    padding: 0.25rem 0;
}

.app-header .navbar-togglerTo:hover {
    min-width: 50px;
    padding: 0.25rem 0;
    font-size: 18px;
    font-weight: 600;
    color:  #1F618D;
}




.app-header .navbar-togglerLogout {
    min-width: 50px;
    padding: 0.25rem 0;
}

.app-header .navbar-togglerLogout:hover {
    min-width: 50px;
    padding: 0.25rem 0;
    font-size: 18px;
    font-weight: 600;
    color:  #922B21;
}


.pointer {
  cursor: pointer;
}




@media screen and (max-width: 600px) {

  .app-header {
    
    font-size: 14px;
    font-weight: 600;

  }

.app-header .navbar-togglerTo {
    min-width: 50px;
    padding: 0.25rem 0;
}

.app-header .navbar-togglerTo:hover {
    min-width: 50px;
    padding: 0.25rem 0;

    color:  #1F618D;
}




.app-header .navbar-togglerLogout {
    min-width: 50px;
    padding: 0.25rem 0;
}

.app-header .navbar-togglerLogout:hover {
    min-width: 50px;
    padding: 0.25rem 0;
    font-size: 14px;
    font-weight: 600;
    color:  #922B21;
}
}





</style>
