<template>
  <div class="app">
    <AppHeader fixed>
      <SidebarToggler class="d-lg-none" display="md" mobile />
  
      <b-link class="navbar-brand" to="/dashboard">
        <img class="navbar-brand-full" src="img/brand/logo.png" width="100%" height="80%" alt="CoreUI Logo">
        <img class="navbar-brand-minimized" src="img/brand/logokkf.png" width="60" height="50" alt="CoreUI Logo" >
      </b-link>
      
      <SidebarToggler class="d-md-down-none" display="lg" :defaultOpen="false" />
       <b-navbar-nav class="d-md-down-none">
        <!-- <b-nav-item class="px-3" to="/users" exact>Home</b-nav-item>
        <b-nav-item class="px-3" to="/dashboard">Dashboard</b-nav-item>
        <b-nav-item class="px-3" to="/Logout">Logout</b-nav-item> -->
        <!-- <b-nav-item class="px-3">Settings</b-nav-item> -->
      </b-navbar-nav>
     <b-navbar-nav class="ml-auto">
         <!--   <b-nav-item class="d-md-down-none">
          
          <i class="icon-bell"></i>
          <b-badge pill variant="danger">5</b-badge>
        </b-nav-item>
        <b-nav-item class="d-md-down-none">
          <i class="icon-list"></i>
        </b-nav-item>
        <b-nav-item class="d-md-down-none">
          <i class="icon-location-pin"></i>
        </b-nav-item>
        <DefaultHeaderDropdownAccnt/>   -->
        <div class="btninfouser">
          <b-button v-b-modal.modal-changepassword>{{ user }}</b-button>

          <b-modal
            id="modal-changepassword"
            size="sm"
            :title="user"
            cancel-only
            no-stacking
            :hide-footer="true"
          >
            <b-form @submit="onSubmit">
              <p class="my-2" v-if="user && user != null">เปลี่ยนรหัสผ่าน</p>
              <b-form-group
          label-for="password"
          :invalid-feedback="'password is Incorrect.'"
          :state="$v.form.password.required ? !$v.form.password.$invalid : null"
        >
          <b-input-group>
            <b-input-group-prepend>
              <span class="input-group-text">
                <i class="fa fa-lock"></i>
              </span>
            </b-input-group-prepend>
            <b-form-input
              id="password"
              type="password"
              v-model="form.password"
              placeholder="Password"
              @focus="passfocus = true"
              @blur="passfocus = false"
              :state="$v.form.password.required ? !$v.form.password.$invalid : null"
              autocomplete="off"
              trim
              required
            />
          </b-input-group>
        </b-form-group>
        <div class="alert alert-info" v-show="passfocus">
          <h6>Password must contain the following:</h6>
          <p>
            <i
              class="fa fa-check-circle"
              :class="{'text-success': lower, 'text-white': !lower}"
              style="color: rgb(40, 167, 69);"
            ></i> A lowercase letter (a-z)
          </p>
          <p>
            <i class="fa fa-check-circle" :class="{'text-success': upper, 'text-white': !upper}"></i> A capital letter (A-Z)
          </p>
          <p>
            <i class="fa fa-check-circle" :class="{'text-success': number, 'text-white': !number}"></i> A number (0-9)
          </p>
          <!--<p>
            <i
              class="fa fa-check-circle"
              :class="{'text-success': speacial, 'text-white': !speacial}"
            ></i> A speacial letter (!@#-$%^*;)
          </p>-->
          <p>
            <i class="fa fa-check-circle" :class="{'text-success': length, 'text-white': !length}"></i> Minimum 8 characters
          </p>
        </div>

        <b-form-group
          label-for="confpass"
          :invalid-feedback="'password does not match.'"
          :state="$v.form.confpass.required ? !$v.form.confpass.$invalid : null"
        >
          <b-input-group>
            <b-input-group-prepend>
              <span class="input-group-text">
                <i class="fa fa-lock"></i>
              </span>
            </b-input-group-prepend>
            <b-form-input
              id="confpass"
              type="password"
              v-model="form.confpass"
              placeholder="Confirm Password"
              autocomplete="off"
              :state="$v.form.confpass.required ? !$v.form.confpass.$invalid : null"
              trim
            />
          </b-input-group>
        </b-form-group>
        <b-form-group>
          <b-button
            block
            variant="warning"
            type="submit"
            :disabled="$v.form.$invalid"
          >เปลี่ยนรหัสผ่าน</b-button>
        </b-form-group>
        
            </b-form>

          </b-modal>
        </div>
      </b-navbar-nav>

<!--          
       <AsideToggler class="d-none d-lg-block" />  -->
   
 
      <div class="navbar-togglerTo round-button fcsText1"  ><a class="pointer"><span><div class="fcsText12">กลับสู่หน้า Home</div></span><i class="icon-screen-desktop fa-2x" @click="to_home" ></i></a></div> 
      <div class="navbar-togglerTo round-button fcsText1"  ><a class="pointer"><span><div class="fcsText12">เข้าสู่หน้า Dashboard</div></span> <i class="icon-chart fa-2x" @click="to_dashboard" ></i></a></div> 
      <div class="navbar-togglerLogout round-button-out fcsText1"> <a class="pointer"> <span><div class="fcsText12">ออกจากระบบ</div></span><i class="icon-power fa-2x" @click="showMsgBoxTwo" ></i></a></div> 
     
             
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
import {
  required,
  minLength,
  sameAs,
  email,
  integer
} from "vuelidate/lib/validators";
import { GetObjVal, AlertMessage } from "@/shared/utils";

import { API } from "@/shared/core";

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
        boxTwo: '',
        form: {
        username: "",
        email: "",
        password: "",
        confpass: ""
      },
      passfocus: false,
      lower: false,
      upper: false,
      number: false,
      /*speacial: false,*/
      length: false,
      vsuccess: false
    }
  },
  validations: {
    form: {
      password: {
        required,
        passvalid(val) {
          this.lower = /[a-z]+/.test(val);
          this.upper = /[A-Z]+/.test(val);
          this.number = /[0-9]+/.test(val);
          //this.speacial = /[!@#-$%^*;]+/.test(val);
          this.length = GetObjVal(val, "length") >= 8;
          return (
            this.lower &&
            this.upper &&
            this.number &&
            /*this.speacial &&*/
            this.length
          );
        },
        minLength: minLength(8)
      },
      confpass: {
        required,
        sameAsPassword: sameAs("password")
      }
    }
  },
  computed: {
    name () {
      return this.$route.name
    },
    list () {
      return this.$route.matched.filter((route) => route.name || route.meta.label )
    },
    user() {
      return this.$localStorage.get("User");
    },
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
                      
    }  ,onSubmit(evt) {
      evt.preventDefault();

      API.UserPassword({
        data: {
          username: this.$localStorage.get("User"),
          userid: this.$localStorage.get("User"),
          password : this.form.password,
          confpass : this.form.confpass,
        },
        callblack: res => {
          //console.log(res);
          AlertMessage("success", "บันทึกเรียบร้อยแล้ว");
          this.$root.$emit('bv::hide::modal','modal-changepassword')
        }
      });


     



    }, 
   }
}
</script>


<style scoped>


.app-header .navbar-togglerTo {
    min-width: 50px;
    padding: 0.25rem 0;
     margin-right: 5px;
}

.app-header .navbar-togglerTo:hover {
    min-width: 50px;
    padding: 0.25rem 0;
    font-size: 18px;
    font-weight: 600;
    color:  #212F3C;
     margin-right: 5px;
}




.app-header .navbar-togglerLogout {
    min-width: 50px;
    padding: 0.25rem 0;
     margin-right: 5px;
}

.app-header .navbar-togglerLogout:hover {
    min-width: 50px;
    padding: 0.25rem 0;
    font-size: 18px;
    font-weight: 600;
    color:  #922B21;
     margin-right: 5px;
}


.pointer {
  cursor: pointer;
}




@media screen and (max-width: 600px) {

  .app-header {
    
    font-size: 14px;
    font-weight: 600;

  }


  .app-header {
    
    font-size: 14px;
    font-weight: 600;

  }

 .navbar-brand {

    display :none;
}



.app-header .navbar-togglerTo {
    min-width: 50px;
    padding: 0.25rem 0;
     margin-right: 5px;
    
}

.app-header .navbar-togglerTo:hover {
    min-width: 50px;
    padding: 0.25rem 0;

    color:  #212F3C;
    margin-right: 5px;
}




.app-header .navbar-togglerLogout {
    min-width: 50px;
    padding: 0.25rem 0;
    margin-right: 5px;
}

.app-header .navbar-togglerLogout:hover {
    min-width: 50px;
    padding: 0.25rem 0;
    font-size: 14px;
    font-weight: 600;
    color:  #922B21;
    margin-right: 5px;
}








}





.round-button {
display:block;
width:45px;
height:45px;
line-height:50px;

border-radius: 50%;
color:#424949;
text-align:center;
text-decoration:none;

 box-shadow: 0 0 1px #D6DBDF; 
font-size:14px;
font-weight:bold;

background-color: #D6DBDF

}
.round-button:hover {
background-color: #ABB2B9
}



.round-button-out {
display:block;
width:45px;
height:45px;
line-height:50px;
padding-left: 2px;
border-radius: 50%;
color:#641E16;
box-shadow: 0 0 1px #D6DBDF;
text-align:center;
text-decoration:none;
background: #E6B0AA;
/* box-shadow: 0 0 3px gray; */
font-size:14px;
font-weight:bold;
}
.round-button-out:hover {
background: #D98880;
}




div.fcsText1 a span {display:none;
 
 height: 20px;

}
div.fcsText1 a:hover {position:relative; cursor:default;-webkit-transition: all 0.7s ease-in-out;
    -moz-transition: all 0.7s ease-in-out;
    -o-transition: all 0.7s ease-in-out;
    -ms-transition: all 0.7s ease-in-out;    
    transition: all 0.7s ease-in-out;}
div.fcsText1 a:hover span {display:block; position:absolute; float:left; white-space:nowrap;-webkit-transition: all 0.7s ease-in-out;
    -moz-transition: all 0.7s ease-in-out;
    -o-transition: all 0.7s ease-in-out;
    -ms-transition: all 0.7s ease-in-out;    
    transition: all 0.7s ease-in-out; 
    top:20px; left:-45px;
    padding-top:0;
    font-weight:bolder; 
    padding-left: 5px;
    padding-right: 5px;
    
    /* background:rgba(0, 0, 0, 0.8);  */

    font-size:12px; 
    color:#ECF0F1; 

    border-radius: 5px;

 
    }


    div.fcsText12 {
      display: inline;
 
      background:rgba(86, 101, 115 , 0.7);  
      padding: 5px;
      border-radius: 5px;

}

.btninfouser {
  padding-right: 10px;
}


</style>
