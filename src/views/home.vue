<template>
  <div class="animated fadeIn">
   


<div class="container" data-view="viewmodels/home" data-active-view="true">
  <!-- <div class="page-header">
    <h1>Home</h1>
  </div> -->

  <div class="row">
    <div class="col-xs-12 col-sm-4 col-md-4 col-md-offset-2"  @click="to_saleall">
      <a class="pointer" style="text-decoration: none;" data-bind="click: createAlbum">
        <div class="thumbnail">
          <br>
           <p style="text-align: center">
            <i class="icon-graph fa-5x"></i>
          </p> 

          <div class="caption" style="text-align: center;">
            <h3>ยอดขาย</h3>
          </div>
        </div>
      </a>
    </div>

    <div class="col-xs-12 col-sm-4 col-md-4"  @click="to_arall">
      <a class="pointer" data-bind="click: manageGalleries">
        <div class="thumbnail">
          <br>
          <p style="text-align: center">
            <i class="icon-user-follow fa-5x"></i>
          </p>
          <div class="caption" style="text-align: center;">
            <h3>ลูกหนี้</h3>
          </div>
        </div>
      </a>
    </div>

    <div class="col-xs-12 col-sm-4 col-md-4" @click="to_kang">
      <a class="pointer" data-bind="click: manageGalleries">
        <div class="thumbnail">
          <br>
          <p style="text-align: center">
            <i class="icon-basket fa-5x"></i>
          </p>
          <div class="caption" style="text-align: center;">
            <h3>คลังสินค้าสำเร็จรูป</h3>
          </div>
        </div>
      </a>
    </div>


  </div>

  

  <div class="row">
    <div class="col-xs-12 col-sm-4 col-md-4 col-md-offset-2" @click="to_employee">
      <a class="pointer" data-bind="click: viewEmployee">
        <div class="thumbnail">
          <br>
          <p style="text-align: center">
            <i class="icon-people fa-5x"></i>
          </p>
          <div class="caption" style="text-align: center;">
            <h3>พนักงาน</h3>
          </div>
        </div>
      </a>
    </div>

    <div class="col-xs-12 col-sm-4 col-md-4"   @click="to_Material" >
      <a class="pointer"  data-bind="click: viewAnalytics" >
        <div class="thumbnail">
          <br>
          <p style="text-align: center">
            <i class="icon-fire fa-5x"></i>
          </p>
          <div class="caption" style="text-align: center;">
            <h3>วัตถุดิบ</h3>
          </div>
        </div>
      </a>
    </div>



   <div class="col-xs-12 col-sm-4 col-md-4" @click="to_expensesall">
      <a class="pointer" data-bind="click: manageGalleries">
        <div class="thumbnail">
          <br>
          <p style="text-align: center">
            <i class="icon-calculator fa-5x"></i>
          </p>
          <div class="caption" style="text-align: center;">
            <h3>ค่าใช้จ่าย</h3>
          </div>
        </div>
      </a>
    </div>


  
  </div>




  <div class="row">
    <div class="col-xs-12 col-sm-4 col-md-4 col-md-offset-2" @click="to_BudgetProject">
      <a class="pointer" style="text-decoration: none;" data-bind="click: viewArchives">
        <div class="thumbnail">
          <br>
          <p style="text-align: center">
            <i class="icon-wallet fa-5x"></i>
          </p>
          <div class="caption" style="text-align: center;">
            <h3>งบประมาณงานโครงการ</h3>
          </div>
        </div>
      </a>
    </div>

    <div class="col-xs-12 col-sm-4 col-md-4" @click="to_mdmStock">
      <a class="pointer" style="text-decoration: none;" data-bind="click: viewAnalytics">
        <div class="thumbnail">
          <br>
          <p style="text-align: center">
            <i class="icon-social-dropbox fa-5x"></i>
          </p>
          <div class="caption" style="text-align: center;">
            <h3>คลังพัสดุ</h3>
          </div>
        </div>
      </a>
    </div>



    <div class="col-xs-12 col-sm-4 col-md-4"  @click="to_roapercent">
      <a class="pointer" data-bind="click: manageGalleries">
        <div class="thumbnail">
          <br>
          <p style="text-align: center">
            <i class="icon-diamond fa-5x"></i>
          </p>
          <div class="caption" style="text-align: center;">
            <h3>ROA และ % กำไร</h3>
          </div>
        </div>
      </a>
    </div>





</div>





</div>






	<!-- <div class="card1-img" style="background-image:url('img/kkf/saleall.jpg');"> -->
<!-- 
    <b-row>
      <b-col lg="12">
        <transition name="fade">
          <b-card no-body v-if="show">
            <div slot="header">
             Sale : บริหารจัดการและตัดสินใจด้านการขาย
              <div class="card-header-actions">
      
                <b-link class="card-header-action btn-minimize" v-b-toggle.collapse1>
                  <i class="icon-arrow-up"></i>
                </b-link>
     
              </div>
            </div>
            <b-collapse id="collapse1" visible>
              <b-card-body>





<div class="wrapper">

	<header>
		<h1>Menu Report ยอดขายต่างและในประเทศ</h1>
	</header>
		
<section class="columns">
	
	<div class="column card1" type="submit" >
  
  <div class="card1-img" style="width: 100%;"> 

   <center><i class="fa fa-pie-chart" aria-hidden="true" style="font-size:200px"></i></center>
		<div class="overlay">
      
			<div class="overlay-content">
				<div  @click="to_saleall"  >View Report</div>
			</div>
		</div>
     


	</div>
          <center>ยอดขายภาพรวม</center> 
	</div>
	
		<div class="column card1" type="submit" >
	<div class="card1-img" >
    <center><i class="fa fa-line-chart" aria-hidden="true" style="font-size:200px"></i></center>
  <span class="badge badge-danger badge-pill">coming soon</span>
		<div class="overlay">
			<div class="overlay-content">
				<a href="#!">View Report</a>
			</div>
		</div>
    		
	</div>
  <center>ยอดขายต่างประเทศ</center> 
  </div>
  
  <div class="column"  type="submit" >
<div class="card1-img">
 <center><i class="fa fa-bar-chart" aria-hidden="true" style="font-size:200px;"></i></center>
<span class="badge badge-danger badge-pill">coming soon</span>
		<div class="overlay">
			<div class="overlay-content">
				<a href="#!">View Report</a>
			</div>
		</div>
    	     
	</div>
	
 <center>ยอดขายในประเทศ</center> 
  
  </div>



	
</section>	
	
	<footer>
		<h3>Footer</h3>
		<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam, porro. Doloribus vitae non dolores modi dolorum commodi perspiciatis dicta nostrum minus esse, totam officia, quibusdam amet quas tempora? Voluptatibus, esse.</p>
	</footer>

</div>





            
              </b-card-body>
            </b-collapse>
          </b-card>
        </transition>
      </b-col>
    </b-row>





  <b-row>
      <b-col lg="12">
        <transition name="fade">
          <b-card no-body v-if="show">
            <div slot="header">
              คลังสินค้า
              <div class="card-header-actions">
      
                <b-link class="card-header-action btn-minimize" v-b-toggle.collapse2>
                  <i class="icon-arrow-up"></i>
                </b-link>
     
              </div>
            </div>
            <b-collapse id="collapse2" visible>
              <b-card-body>






       <b-row>
      <b-col lg="4">

        <b-card  type="submit"  class="card1" style="width:100%">
     



  <div class="card1-img"> 

   <center><i class="fa fa-university" aria-hidden="true" style="font-size:200px"></i></center>
		<div class="overlay">
      
			<div class="overlay-content">
				<div  @click="to_saleall"  >View Report</div>
			</div>
		</div>
     มูลค่าคลัง 


	</div>
	


</b-card >


        
  
      </b-col>



    </b-row>










                
              </b-card-body>
            </b-collapse>
          </b-card>
        </transition>
      </b-col>
    </b-row> -->






  </div>














  
</template>

<script>


export default {  




  name: 'forms',

  
 
  mounted () {

    
  },




  data () {
    return {
      selected: [], // Must be an array reference!
      show: true
    }
  },
  methods: {
    click () {
      // do nothing
    },
    to_saleall()
    {
        this.$router.push("/report/reptsummarysale")
    },
    to_kang()
    {
         this.$router.push("/report/reptmdmWarehouseValue")
    } ,



    to_arall()
    {
      this.$router.push("/report/mdmAR")
    },
 to_expensesall()
    {
      this.$router.push("/report/Kexpenses")
    },
    
    to_roapercent()
    {
      this.$router.push("/report/roapercent")
    },to_Material()
    {
      this.$router.push("/report/reptmaterial")
    },to_employee()
    {
      this.$router.push("/report/reptmdmkemployee")
    },
    onSubmit(evt) {
      evt.preventDefault();
       window.location.href = "/member/signin";

    },
    to_BudgetProject()
    {
      this.$router.push("/report/reptbudgetproject")
    },
    viewUsers(){
      this.$router.push("/users")

    },
    to_users(){
      this.$router.push("/users")

    },
    to_mdmStock()
    {
      this.$router.push("/report/mdmStock")
    },
  }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}




section.color-left {
	width: 64px;
	height: 50px;
	background-color: #000;
	border-top-left-radius: 5px;
	display: block;
	float: left;
}

section.color-right {
	width: auto;
	height: 50px;
  background-color: #000;
  
	border-top-right-radius: 5px;
	display: block;
	float: left;
}



/* Medium Gray */
section.color-left.mediumGray-light {background-color:#CCD1D9;}
section.color-right.mediumGray-dark {background-color:#AAB2BD;}


.card1 {

  display: inline-block;
  margin: 1rem;
  border-radius: 4px;
  box-shadow: 0 -1px 1px 0 rgba(0, 0, 0, 0.05), 0 1px 2px 0 rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease;
  background: #fff;
  position: relative;
  overflow: hidden;
  width: 100%;
 



  
}


.card1:hover, .card1.hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 25px 0 rgba(0, 0, 0, 0.3), 0 0 1px 0 rgba(0, 0, 0, 0.25);
}
.card1:hover .card1-content, .card1.hover .card1-content {
  box-shadow: inset 0 3px 0 0 #85C1E9;
  border-color: #85C1E9;
}
.card1:hover .card1-img .overlay, .card1.hover .card1-img .overlay {
  background-color: rgba(25, 29, 38, 0.85);
  transition: opacity 0.2s ease;
  opacity: 1;
}
.card1-img {
  position: relative;
  height: 224px;
  width: 100%;
  background-color: #fff;
  transition: opacity 0.2s ease;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;


  
}
.card1-img .overlay {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
  opacity: 0;
}
.card1-img .overlay .overlay-content {
  line-height: 224px;
  width: 100%;
  text-align: center;
  color: #fff;
}
.card1-img .overlay .overlay-content div {
  color: #fff;
  padding: 0 2rem;
  display: inline-block;
  border: 1px solid rgba(255, 255, 255, 0.4);
  height: 40px;
  line-height: 40px;
  border-radius: 20px;
  cursor: pointer;
  text-decoration: none;
}
.card1-img .overlay .overlay-content div:hover, .card1-img .overlay .overlay-content div.hover {
  background: #1A5276;
  border-color: #1A5276;
  color:#A9CCE3;
}
.card1-content {
  width: 100%;
  /* min-height: 104px; */
  background-color: #F8F9F9;
  
  font-weight: 600;
  border-top: 1px solid #E9E9EB;
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
  padding: 1rem 2rem;
  transition: all 0.2s ease;
}
.card1-content div {
  text-decoration: none;
  color: #202927;
}
.card1-content h2, .card1-content div h2 {
 
  font-weight: 500;
}
.card1-content p, .card1-content div p {
  
  font-weight: 400;
  /* white-space: nowrap; */
  overflow: hidden;
  text-overflow: ellipsis;
  color: rgba(32, 41, 28, 0.8);
}


@media screen and (min-width: 601px) {
  i.fa {
    font-size: 80px;
  }
}

@media screen and (max-width: 600px) {
  i.fa {
    font-size: 30px;
  }
}



/* STRUCTURE */
.wrapper {
  padding: 5px;
  max-width: 960px;
  width: 95%;
  margin: 20px auto;
}
header {
  padding: 0 15px;
}
.columns {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  margin: 5px 0;
}
.column {
  flex: 1;
  border: 1px solid gray;
  margin: 2px;
  padding: 10px;
}
.column:first-child {
  margin-left: 0;
}
.column:last-child {
  margin-right: 0;
}
footer {
  padding: 0 15px;
}
@media screen and (max-width: 980px) {
  .columns .column {
    margin-bottom: 5px;
    flex-basis: 40%;
  }
  .columns .column:nth-last-child(2) {
    margin-right: 0;
  }
  .columns .column:last-child {
    flex-basis: 100%;
    margin: 0;
  }
}
@media screen and (max-width: 680px) {
  .columns .column {
    flex-basis: 100%;
    margin: 0 0 5px 0;
  }
}

.pointer {
  cursor: pointer;
}




.thumbnail{
  display:block;
  padding:4px;
  margin-bottom:20px;
  line-height:1.42857143;
  background-color:#fff;
  border:1px solid #ddd;
  border-radius:4px;
  -webkit-transition:border .2s ease-in-out;-o-transition:border .2s ease-in-out;transition:border .2s ease-in-out;
  color: #5D6D7E;

  color:#2471A3;
     background-color: rgba(251, 252, 252 , 0.8);
   background-color: rgba(255,255,255 , 0.8);
   border: 0px;
    box-shadow: 0px 1px 16px rgba(93, 109, 126  , 0.45);


 background-color: rgba(212, 230, 241   , 0.7); 
  }

.thumbnail a>img,.thumbnail>img{
  margin-right:auto;
  margin-left:auto
  }
  
  a.thumbnail.active,a.thumbnail:focus,a.thumbnail:hover{
    border-color:#337ab7
    
    }
    .thumbnail .caption
    {

    padding:9px;color:#5D6D7E;

 
    background-color: rgba(251, 252, 252 , 0.5);
    background-color: rgba(255,255,255 , 0.4);
  

    border-radius:2px;

      color:#2471A3;

      
  }



.thumbnail:hover, .thumbnail.hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.3), 0 0 1px 0 rgba(0, 0, 0, 0.25);
/*   
  background: linear-gradient(to bottom right, #D4E6F1, #D6EAF8); */
  /* border-top-width: 3px;
  border-top-color: #1A5276; */
  /* background-color: rgba(214, 234, 248   , 0.5); */

}



.thumbnail_dis{
  display:block;
  padding:4px;
  margin-bottom:20px;
  line-height:1.42857143;
  background-color:#fff;
  border:1px solid #ddd;
  border-radius:4px;
  -webkit-transition:border .2s ease-in-out;-o-transition:border .2s ease-in-out;transition:border .2s ease-in-out;
  color: #5D6D7E;

  


box-shadow: 0px 1px 16px rgba(133, 146, 158  , 0.45);

   

  }

.thumbnail_dis a>img,.thumbnail_dis>img{
  margin-right:auto;
  margin-left:auto
  }

    .thumbnail_dis .caption{

      padding:9px;color:#5D6D7E
      
      }






.line-chart-block, .bar-chart-block {
				height: 80%;
			}
				.line-chart {
					height: 200px;
					background: #11a8ab;
				}
				.time-lenght {
					padding-top: 22px;
					padding-left: 38px;
          overflow: hidden;
				}
					.time-lenght-btn {
						display: block;
						width: 70px;
						line-height: 32px;
						background: #50597b;
						border-radius: 5px;
						font-size: 14px;
						text-align: center;
						margin-right: 5px;
						-webkit-transition: background .3s;
						transition: background .3s;
					}
						.time-lenght-btn:hover {
							text-decoration: none;
							background: #e64c65;
						}
				.month-data {
					padding-top: 28px;
				}
					.month-data p {
						display: inline-block;
						margin: 0;
						padding: 0 25px 15px;            
						font-size: 16px;
					}
						.month-data p:last-child {
							padding: 0 25px;
              float: right;
							font-size: 15px;
						}
						.increment {
							color: #e64c65;
						}












/* Bar Graph Vertical */
.bar-graph .year {
  -webkit-animation: fade-in-text 2.2s 0.1s forwards;
  -moz-animation: fade-in-text 2.2s 0.1s forwards;
  animation: fade-in-text 2.2s 0.1s forwards;
}

.bar-graph-vertical {
  margin-top: 2px;
  max-width: 680px;
}

.bar-graph-vertical .bar-container {
  float: left;
  height: 150px;
  margin-right: 8px;
  position: relative;
  text-align: center;
  width: 40px;
}

.bar-graph-vertical .bar {
  border-radius: 3px;
  bottom: 40px;
  position: absolute;
  width: 40px;
}

.bar-graph-vertical .year {
  bottom: 0;
  left: 0;
  margin: 0 auto;
  position: absolute;
  right: 0;
  /* -webkit-transform: rotate(90deg);
  -moz-transform: rotate(90deg);
  -o-transform: rotate(90deg);
  -ms-transform: rotate(90deg);
  transform: rotate(90deg); */
}

.bar-graph-two .bar::after {
  -webkit-animation: fade-in-text 2.2s 0.1s forwards;
  -moz-animation: fade-in-text 2.2s 0.1s forwards;
  animation: fade-in-text 2.2s 0.1s forwards;
  color: #fff;
  content: attr(data-percentage);
  font-weight: 700;
  left: 0;
  margin: 0 auto;
  position: relative;
  right: 0;
  text-align: left;
  top: 24px;
  -webkit-transform: rotate(90deg);
  -moz-transform: rotate(90deg);
  -o-transform: rotate(90deg);
  -ms-transform: rotate(90deg);
  transform: rotate(90deg);
}

.bar-graph-two .bar-one .bar {
  background-color: #64b2d1;
  -webkit-animation: show-bar-one-vertical 1.2s 0.1s forwards;
  -moz-animation: show-bar-one-vertical 1.2s 0.1s forwards;
  animation: show-bar-one-vertical 1.2s 0.1s forwards;
}

.bar-graph-two .bar-two .bar {
  background-color: #5292ac;
  -webkit-animation: show-bar-two-vertical 1.2s 0.2s forwards;
  -moz-animation: show-bar-two-vertical 1.2s 0.2s forwards;
  animation: show-bar-two-vertical 1.2s 0.2s forwards;
}

.bar-graph-two .bar-three .bar {
  background-color: #407286;
  -webkit-animation: show-bar-three-vertical 1.2s 0.3s forwards;
  -moz-animation: show-bar-three-vertical 1.2s 0.3s forwards;
  animation: show-bar-three-vertical 1.2s 0.3s forwards;
}

.bar-graph-two .bar-four .bar {
  background-color: #2e515f;
  -webkit-animation: show-bar-four-vertical 1.2s 0.4s forwards;
  -moz-animation: show-bar-four-vertical 1.2s 0.4s forwards;
  animation: show-bar-four-vertical 1.2s 0.4s forwards;
}

/* Bar Graph Vertical Animations */
@-webkit-keyframes show-bar-one-vertical {
  0% {
    height: 0;
  }
  100% {
    height: 40%;
  }
}

@-webkit-keyframes show-bar-two-vertical {
  0% {
    height: 0;
  }
  100% {
    height: 55%;
  }
}

@-webkit-keyframes show-bar-three-vertical {
  0% {
    height: 0;
  }
  100% {
    height: 68%;
  }
}

@-webkit-keyframes show-bar-four-vertical {
  0% {
    height: 0;
  }
  100% {
    height: 82%;
  }
}

@-webkit-keyframes fade-in-text {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}











</style>
