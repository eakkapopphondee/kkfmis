<template>
  <div>
    
    <b-form @submit="onSubmit">
      <div  > 
      <!-- <img src="img/kkf/loginKKF.png" width="180px;" height="80px">  -->
      <p  style="color:#1B4F72" >Sign In to your account : MIS KKF Application</p>
      <hr>
      <b-form-group label-for="username">
        <b-input-group>
          <b-input-group-prepend>
            
            <span class="input-group-text">
              <i class="fa fa-user"></i>
            </span>

          </b-input-group-prepend>
          <b-form-input id="username" 
          v-model="form.username" 
          autocomplete="off"
          :placeholder="$t('dic.username')" trim required
          
          />
        </b-input-group>
      </b-form-group>

      <b-form-group label-for="password">
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
            :placeholder="$t('dic.password')"
            autocomplete="off"
            trim
            required
          />
        </b-input-group>
      </b-form-group>

     <!--
        <b-form-radio-group 
      v-model="form.lang"
      :options="options_lang"
      name="radio-save"
    ></b-form-radio-group>
-->
<!--
      <b-form-group label-for="twofactor" >
        <b-input-group>
          <b-input-group-prepend>
            <span class="input-group-text">
              <i class="fa fa-qrcode"></i>
            </span>
          </b-input-group-prepend>
          <b-form-input
            id="twofactor"
            v-model="form.twofactor"
            autocomplete="off"
            :placeholder="$t('dic.twofactor')"
            trim
          />

        </b-input-group>
      </b-form-group>
      -->
      
      <b-form-group>
        <b-button block variant="primary" type="submit" :disabled="$v.form.$invalid">{{$t('dic.signin')}}</b-button>
      </b-form-group>
      </div>
    </b-form>



  </div>

  
</template>

<script>
import { required } from "vuelidate/lib/validators";
import { API } from "@/shared/core";

export default {
  name: "signin",
  mounted() {},
  computed: {},
  data() {
    return {
      token: null,
      form: {
        username: "",
        password: "",
        twofactor: "" ,
        lang: "th" ,
      },       
        options_lang: [
          { text: 'Thai', value: 'th' },
          { text: 'English', value: 'en' },
         // { text: 'หยุดชั่วคราว เฉพาะคน', value: 'C' }
        ],
    };
  },
  validations: {
    form: {
      username: {
        required
      },
      password: {
        required
      }
    }
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();



       API.OauthLogin({
              data: this.form,

                 
             
              callblack: res => {
             
                this.$localStorage.set("Token", res.token);
                this.$localStorage.set("User", res.username);
                window.location.href = "/";

                
              }
            });




      // if (this.form.username=="miskkf")
      // {
      //    if (this.form.password=="miskkf12345")
      //    {
      // this.$localStorage.set("Token", "TEST");
      // this.$localStorage.set("UserCode", "KKF"); 
      // this.$localStorage.set("User", "KKF"); 
      // this.$localStorage.set("lang", this.form.lang);    
      // window.location.href = "/";
      //    } else {

 
      // this.$localStorage.set("Token", "");
      // this.$localStorage.set("UserCode", ""); 
      // this.$localStorage.set("User", ""); 
      // this.$localStorage.set("lang", this.form.lang); 


      //     window.location.href = "/";

      //    }



      // } else 
      // {

      // this.$localStorage.set("Token", "");
      // this.$localStorage.set("UserCode", ""); 
      // this.$localStorage.set("User", ""); 
      // this.$localStorage.set("lang", this.form.lang); 


      //     window.location.href = "/";
      // }


 /*
      grecaptcha.ready(() => {
        grecaptcha.execute(this.recapchasite(), {
            action: "signin"
          })
          .then(recaptcha => {
            API.OauthLogin({
              data: this.form,
              recaptcha: recaptcha,
              callblack: res => {
                this.$localStorage.set("Token", res.token);
                this.$localStorage.set("User", res.username);                 
                //this.$router.push("/");
                window.location.href = "/";
              }
            });
          });
      });
      */
    }
  }
};
</script>





<style scope >

/*  #7fb3d5   */

.app {
 
    background: #ddd url(../../assets/bg.png) repeat top left;

    /* background: radial-gradient(circle, #fff 0%, #a6b9c1 100%) no-repeat;  */

     background: radial-gradient(circle, #fff 0%,  rgba(169, 204, 227  , 1) 100%) no-repeat; 

      /* background-color: #D4E6F1;
      background-image: linear-gradient(70deg, transparent 67%, hsla(0,0%,100%,.05) 67%, hsla(0,0%,100%,.025)),
                      linear-gradient(#ddd 11px, transparent 11px),
                      linear-gradient(#A9CCE3, ##AED6F1); */

       /* background-image: linear-gradient(rgba(169, 204, 227  , 1), #fff6e4);
       background-image: linear-gradient(rgba(169, 204, 227  , 1), #F2F3F4); 
          background-image: linear-gradient(rgba(234, 242, 248 , 0.8), #F2F3F4);  */

          
    background-image: linear-gradient(rgba(169, 204, 227 , 0.4), #F2F3F4); 



  }


  .btn-block {
    display: block;
    width: 100%;
    height: 50px;
    color: #154360;
   
    background: -webkit-gradient(linear, left top, right bottom, from(rgba(214, 234, 248  , 1)), to(rgba(169, 204, 227 , 1)));
    background: linear-gradient(to bottom right, rgba(214, 234, 248  , 1), rgba(169, 204, 227  , 1));
    border-color: rgba(233, 247, 239 , 1);



}

  .btn-primary:hover {

   
    background: -webkit-gradient(linear, left top, right bottom, from(rgba(133, 193, 233  , 1)), to(rgba(127, 179, 213  , 1)));
    background: linear-gradient(to bottom right, rgba(133, 193, 233  , 1), rgba(127, 179, 213  , 1));
    border-color: rgba(233, 247, 239 , 1);



} 


.btn-primary.disabled, .btn-primary:disabled {
    color: #154360;
    background-color: #d8dbe0;
    border-color: #d8dbe0;
 
}

.btn-outline-primary.disabled, .btn-outline-primary:disabled {
    color: #919294;
    background-color: transparent;
}
.btn-outline-primary {
    color: #2E86C1;
    border-color: #ced2d8;
    background-color: transparent;
 
}




.btn-block,btn-block:hover {

    background-color:#154360;
  
    display: block;
    color: #154360;
}


.btn-primary.disabled, .btn-primary:disabled {
    color: #154360;
    background-color: #20a8d8;
    border-color: #20a8d8;
  
}

.bg-primary {
    background: -webkit-gradient(linear, left top, right bottom, from(rgba(84, 153, 199 , 1)), to(rgba(93, 173, 226, 1)));
    background: linear-gradient(to bottom right, rgba(84, 153, 199 , 1), rgba(93, 173, 226 , 1));
    
}

.card.bg-primary {
    border-color: #d8dbe0;
    color:#154360;
   
}


.classic-form-page {
    content: '';
    width: 100%;
    height: 100%;
    display: block;
    z-index: -1; 
    z-index: 1;
    position: absolute;
    top: 0;
    right: 0;
    /* background: #ddd url(../../assets/bg.png) repeat top left;  */


  }
  .classic-form-page2 {

   min-height: 100vh;
    z-index: 999;
    padding: 20px;
    position: relative;
   

  }


.card {
    margin-bottom: 15px;
    background-color: rgba(251, 252, 252 , 0.5);
    background-color: rgba(255,255,255 , 0.3);
    border: 0px;
    box-shadow: 0px 1px 16px rgba(36, 113, 163 , 0.45);
}



















</style>