<template>
  <div id="app">
    <router-view></router-view>
    <vue-progress-bar></vue-progress-bar>
    <notifications position="top center"/>    
  </div>
</template>

<script>
//import NprogressContainer from "vue-nprogress/src/NprogressContainer";
import { API } from "@/shared/core";

export default {
  name: "app",
  mounted() {
    API.OauthAccess({
      callblack: res => {
        this.$localStorage.set("AccessToken", res.accessToken);   
      }
    });
    if(!this.$localStorage.get("lang")) { this.$localStorage.set("lang", 'en'); }
    this.$i18n.locale = this.$localStorage.get("lang");
  },



  methods: {
            isMobile() {
                if( screen.width <= 760 ) {
                    return true;
                }
                else {
                    return false;
                }
            }
        },
        created() {
            if (this.isMobile()) {
                 addEventListener('resize', () => {
                 this.mobile = innerWidth <= 700
                 })
            }
            else {
                
              
            }
        },
  /*asyncComputed: {
    async myResolvedValue() {
      return await AlertMessage().then((ok) => { console.log(ok); });
    }
  },*/
  watch: {
    $route: function(p) {
      if (!/^[/]member/.test(p.path)) {
        if (!this.$localStorage.get("Token")) {
            this.$router.push("/member/signin");
        }
      }      
    }
  }
};
</script>

<style lang="scss">
/* Import Font Awesome Icons Set */
$fa-font-path: "~font-awesome/fonts/";
@import "~font-awesome/scss/font-awesome.scss";
/* Import Simple Line Icons Set */
$simple-line-font-path: "~simple-line-icons/fonts/";
@import "~simple-line-icons/scss/simple-line-icons.scss";
/* Import Flag Icons Set */
//@import '~flag-icon-css/css/flag-icon.min.css';

/*bootstrap*/
//@import "~bootstrap/dist/css/bootstrap.css"; // from bootstrap node_modules

/* Import Bootstrap Vue Styles */
@import '~bootstrap-vue/dist/bootstrap-vue.css';
// Import Main styles for this application

@import "~vue-multiselect/dist/vue-multiselect.min.css";
@import "assets/scss/style";

@import 'assets/css/style';

 @import "assets/css/main";
</style>


//  @import 'assets/css/style';
//   @import 'assets/css/table';