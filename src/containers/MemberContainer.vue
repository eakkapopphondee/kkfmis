<template>

  <div class="app flex-row align-items-center" >
    <div class="container">
      <b-row class="justify-content-center">
        <b-col md="6" sm="10">
          <div class="container card card-body pt-1 pb-1">
            <b-row>
              
               <div class="p-3 col-sm-12 mb-0">

          
                  
                  <center><img src="img/kkf/Bglogin-01.jpg" width="100%"> </center>  
     
                

                
                <ul class="p-3 nav nav-pills nav-fill mb-0"> 
                
                </ul>
                <router-view></router-view>



              </div>
 
            </b-row>
          </div>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "MemberContainer",
  data: () => {
    return { };
  },
  computed: {
    /*SectionHeight() {
      return window.innerHeight;
    },*/
     name () {
      return this.$route.name
    }
  }
};
</script>

<style>
body {
  color: black;
}



.bg-primary {
    background: -webkit-gradient(linear, left top, right bottom, from(rgba(84, 153, 199 , 1)), to(rgba(93, 173, 226, 1)));
    background: linear-gradient(to bottom right, rgba(84, 153, 199 , 1), rgba(93, 173, 226 , 1));

}


.nav-pills .nav-link {
  background-color: none;
}
.nav-link.active {
    margin-top: 0px;
    border-top: none;
    /*background-color: transparent;*/
}
.singin,
.singin:hover {
  color: #fff;
  background-color: #28a745;
}
.singup,
.singup:hover {
  color: #fff;
  background-color: #007bff;
}
.resetpw,
.resetpw:hover {
  color: #222;
  background-color: #ffc107;
}

.grecaptcha-badge {
    display: block;
}
</style>

