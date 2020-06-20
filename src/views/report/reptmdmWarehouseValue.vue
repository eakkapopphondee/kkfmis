<template> <!-- <WidgetsBrand/> -->
<div class="animated fadeIn">


 
   <b-row>

      <b-col md="12">
        <transition name="fade">
          <b-card no-body v-if="show">
            <div slot="header"><i class="fa fa-television" aria-hidden="true"></i> สรุปปริมาณ และมูลค่าคลังสินค้าสำเร็จรูป  {{dataDashboardobj.data_code}} 

              <div class="card-header-actions">
      
                <b-link class="card-header-action btn-minimize" v-b-toggle.collapse1>
                  <i class="icon-arrow-up"></i>
                </b-link>
     
              </div>
            </div>

              <b-collapse id="collapse1" visible>


              <b-card-body>

                

<div class="dashboard">
  <div class="all-card">
    <div class="row">

      <div class="col-lg-4 col-md-6">
        <div class="card">
          <div class="card-body border-left-1">
            <div class="row">
              <div class="col">
                <p class="card-title text-title">ปริมาณ (ผืน)</p>
                <h2 class="card-text text-amount">
                  
                 
                  
                 {{dataDashboardobj.end_qty| number(0)}} </h2>
              </div>
              <div class="col-auto">
                <div class="icon-shape icon-percent">
                  <i class="fa fa-table" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

  
 <div class="col-lg-4 col-md-6">
        <div class="card">
          <div class="card-body border-left-2">
            <div class="row">
              <div class="col">
                <p class="card-title text-title">น้ำหนัก  (ตัน)</p>
                <h2 class="card-text text-amount"> {{dataDashboardobj.end_wei| number(0)}} </h2>
              </div>
              <div class="col-auto">
                <div class="icon-shape icon-area">
                  <i class="fa fa-balance-scale" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-6">
        <div class="card">
          <div class="card-body border-left-3">
            <div class="row">
              <div class="col">
                <p class="card-title text-title">มูลค่า (ลบ.)</p>
                <h2 class="card-text text-amount">{{dataDashboardobj.end_cost| number(0)}}</h2>
              </div>
              <div class="col-auto">
               <div class="icon-shape icon-sus">
                  <i class="fa fa-money" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

          </div>
        </div>
      </div>








<b-row>
      <b-col md="6">
        <b-card  style="border: 0px solid;">
       
            <div class="knob_data" style= "background-image: url('img/brand/Flagex.png'); background-repeat: no-repeat;
            background-size: contain; background-position: left;  color:#1A5276; text-align: center; " >ขายต่างประเทศ  <span class="txt_smaller"></span></div>
              <b-row>


                
                <b-col sm="4">
                  <div class="callout callout-info">
                    <small class="text-muted">ปริมาณ (ผืน)</small><br>
                    <strong class="h2">{{dataDashboardobj_ex.end_qty| number(0)}}  </strong>
                    <div class="chart-wrapper" :style="{ top: '-10px'}">
                      <!--<callout-chart-example :data="[35, 23, 56, 22, 97, 23, 64]" variant="#20a8d8" width="80" height="30" />-->
                    
                    </div>
                  </div>
                </b-col>

                <b-col sm="4">
                    <div class="callout callout-danger">
                    <small class="text-muted">น้ำหนัก (ตัน)</small><br>
                    <strong class="h2">{{dataDashboardobj_ex.end_wei| number(2)}} </strong>
                    <div class="chart-wrapper" :style="{ top: '-10px'}">
                    
                    </div>
                 </div>
                </b-col>
                <b-col sm="4">
                  <div class="callout callout-success">
                    <small class="text-muted">มูลค่า  (ลบ.)</small><br>
                    <strong class="h2">{{dataDashboardobj_ex.end_cost| number(2)}} 

           




                    </strong>
                    <div class="chart-wrapper" :style="{ top: '-10px'}">
                    </div>
                  </div>
                </b-col>


              </b-row>


                  
          
        </b-card>
      </b-col>


      <b-col md="6">
        <b-card   style="border: 0px solid;">   
            
                  <div class="knob_data" style= "background-image: url('img/brand/thai2.png'); background-repeat: no-repeat;
                  background-size: contain; background-position: left;  color:#1A5276; text-align: center;" >ขายในประเทศ <span class="txt_smaller"></span></div>
             
               <b-row>
                <b-col sm="4">
                  <div class="callout callout-info">
                    <small class="text-muted">ปริมาณ (ผืน)</small><br>
                    <strong class="h2">{{dataDashboardobj_dm.end_qty| number(0)}} </strong>
                    <div class="chart-wrapper" :style="{ top: '-10px'}">
                      <!--<callout-chart-example :data="[35, 23, 56, 22, 97, 23, 64]" variant="#20a8d8" width="80" height="30" />-->
                      
                    </div>
                  </div>
                </b-col>

                <b-col sm="4">
                    <div class="callout callout-danger">
                    <small class="text-muted">น้ำหนัก (ตัน)</small><br>
                    <strong class="h2">{{dataDashboardobj_dm.end_wei| number(2)}} </strong>
                    <div class="chart-wrapper" :style="{ top: '-10px'}">
               
                    </div>
                 </div>
                </b-col>
                <b-col sm="4">
                  <div class="callout callout-success">
                    <small class="text-muted">มูลค่า  (ลบ.)</small><br>
               
<strong class="h2">{{dataDashboardobj_dm.end_cost| number(2)}} 
</strong>

                    <div class="chart-wrapper" :style="{ top: '-10px'}">
                     
                    </div>
                  </div>
                </b-col>


              </b-row>

                   
          
          
        </b-card>
      </b-col>

    </b-row>









 <small class="text-muted">ปริมาณ(ผืน) นับเฉพาะกลุ่มสินค้าอวน , น้ำหนัก(ตัน) นับรวมทุกกลุ่มสินค้า ( อวน/ด้าย/สายเอ็น/เชือก )</small>


               
              </b-card-body>
            </b-collapse>
          </b-card>
        </transition>
      </b-col>




















      
  </b-row>


 
<div class="animated fadeIn">
   
    <b-row>
      <b-col md="12">
        <transition name="fade">
          <b-card no-body v-if="show">
            <div slot="header"><i class="fa fa-bar-chart" aria-hidden="true"></i> สรุปปริมาณ และมูลค่าคงเหลือ  
              <div class="card-header-actions">
      
                <b-link class="card-header-action btn-minimize" v-b-toggle.collapse2>
                  <i class="icon-arrow-up"></i>
                </b-link>
     
              </div>
            </div>
            <b-collapse id="collapse2" visible>
              <b-card-body>


   
  <b-row>


                          <b-col sm="3">
                             <b-form-group
                                  label="ประจำเดือน"
                                  label-for="basicSelect"
     
                                  :label-cols="5"
                                  :horizontal="true">


                                      <b-form-select 
                                        id="txtid_mn"
                                        v-model="txtSearch_mn" 
                                       
                                        :plain="true"
                                        :options="iMun"  value-field="valuei"
                                       
                                        >
                                      </b-form-select>


                              </b-form-group>
                          </b-col>



 <b-col sm="3">


                                <b-form-group
                                  label="ปี ค.ศ."
                                  label-for="basicSelect"
                                  :label-cols="5"
                                  :horizontal="true">


                                      <b-form-select 
                                        id="sale"
                                        v-model="txtSearch" 
                                        :plain="true"
                                        :options="iSeleY" value="Please select">
                                      </b-form-select>


                              </b-form-group>




            </b-col>





               <b-col sm="3">
                             <b-button @click="Search" size="md" variant="outline-info" squared    >แสดงข้อมูล</b-button>
                          </b-col>



          </b-row>

              
     





           



        


       
  




<!-- <div class="tabset">
 
  <input type="radio" name="tabset12" id="tab1" aria-controls="marzen" checked >
  <label for="tab1">แบบตาราง</label>
 
  <input type="radio" name="tabset12" id="tab2" aria-controls="rauchbier" >
  <label for="tab2">แบบกราฟ</label>

  
  <div class="tab-panels">
    <section id="marzen" class="tab-panel"> -->

         <b-row>
           <b-col sm="6">

              <br>
          <span class="speech-bubbleex"> &nbsp; คลังต่างประเทศ &nbsp; </span>
         <gridmobile
                ref="gridDrawing"
                
                :fields="fieldDrawingEnd"
                :name="name"
                :btnGrid="false"
                :btnAdd="false"
                :btnClone="false"
                :btnView="false"
                :btnEdit="false"
              
                :btnDelete="false"
                :o_col_checkbox="false"
                :trackBy="'rowID'"
                :data="dataDrawingEndEx"
                :o_navfooter_visible="false"
              :o_grid_responsive="true"
                        
                :o_nav_visible="false"
                
            >
            </gridmobile>
            </b-col>
       


         
           <b-col sm="6">
          <br>
          <span class="speech-bubbledm"> &nbsp; คลังในประเทศ &nbsp; </span>
         <gridmobile
                ref="gridDrawingM"
                
                :fields="fieldDrawingEnd"
                :name="name"
                :btnGrid="false"
                :btnAdd="false"
                :btnClone="false"
                :btnView="false"
                :btnEdit="false"
              
                :btnDelete="false"
                :o_col_checkbox="false"
                :trackBy="'rowID'"
                :data="dataDrawingEndDm"
                :o_navfooter_visible="false"
                :o_grid_responsive="true"
              
                   
                :o_nav_visible="false"
            


                
            >
            </gridmobile>
            </b-col>
             </b-row> 





        
              </b-card-body>
            </b-collapse>
          </b-card>
        </transition>
      </b-col>
    </b-row>






          
</div>   



<div class="animated fadeIn">
   
    <b-row>
      <b-col md="12">
        <transition name="fade">
          <b-card no-body v-if="show">
            <div slot="header" ><i class="fa fa-bar-chart" aria-hidden="true"></i> สรุปการเคลื่อนไหว และปริมาณคงเหลือ  แยกรายเดือน
              <div class="card-header-actions">
      
                <b-link class="card-header-action btn-minimize" v-b-toggle.collapse3>
                  <i class="icon-arrow-up"></i>
                </b-link>
     
              </div>
            </div>
            <b-collapse id="collapse3" visible>
              <b-card-body  style="  zoom: 90%;">



              
     









   
 


<!-- 
<div class="tabset">
 
  <input type="radio" name="tabset34" id="tab3" aria-controls="marzen" checked>
  <label for="tab3">สะสม</label>

  <input type="radio" name="tabset34" id="tab4" aria-controls="rauchbier" >
  <label for="tab4">ประจำเดือน</label>

  
  <div class="tab-panels">
    <section id="marzen" class="tab-panel"> -->
   <b-row>
       
        <b-col sm="12">
               <br>
               

          <span class="speech-bubbleex"> &nbsp; คลังต่างประเทศ &nbsp; </span>


         <gridv2
                ref="gridDrawing2M"
       
                :fields="fieldDrawingex"


                :name="name"
                
                :btnGrid="false"
                :btnAdd="false"
                :btnClone="false"
                :btnView="false"
                :btnEdit="false"
              
                :btnDelete="false"

                :o_grid_responsive="true"





               
                :trackBy="'rowID'"


                :data="dataDrawingrecpayEx"

                :o_navfooter_visible="true"
                :o_nav_visible="false"
                :o_col_checkbox="false"
                
              
                
                
            >




        <template v-slot:data_code="{item,itemIndex}">


             <div v-if="item.data_code=='รวม'" style=" background-color: #E8F8F5; text-align: right; font-weight: bold;"> {{item.data_code}}&nbsp; &nbsp; </div>
             <div v-else> {{item.data_code}}</div>


     
        </template>






            </gridv2> 
           

        </b-col>

        <b-col sm="12">
               <br>

             
           <span class="speech-bubbledm"> &nbsp; คลังในประเทศ &nbsp; </span>
         <gridv2
                ref="gridDrawing2M"
       
                :fields="fieldDrawing"
                :name="name"
                :btnGrid="false"
                :btnAdd="false"
                :btnClone="false"
                :btnView="false"
                :btnEdit="false"
              
                :btnDelete="false"

                :o_grid_responsive="true"

              
                :trackBy="'rowID'"


                :data="dataDrawingrecpayDm"

                :o_navfooter_visible="true"
                :o_nav_visible="false"
                :o_col_checkbox="false"
                
              
                
                
            >

            

        <template v-slot:data_code="{item,itemIndex}">


             <div v-if="item.data_code=='รวม'" style=" background-color: #E8F8F5; text-align: right; font-weight: bold;"> {{item.data_code}}&nbsp; &nbsp; </div>
             <div v-else> {{item.data_code}}</div>


     
        </template>
            </gridv2> 

        

        </b-col>



  </b-row>          

<!-- 

  </section>
    <section id="rauchbier" class="tab-panel">
  
         <grid
                ref="gridDrawing"
       
                :fields="fieldDrawing"
                :name="name"
                :btnGrid="false"
                :btnAdd="false"
                :btnClone="false"
                :btnView="false"
                :btnEdit="false"
              
                :btnDelete="false"
                :o_col_checkbox="false"
                :trackBy="'rowID'"
                :data="dataDrawingEX"
                :o_navfooter_visible="false"
              
                
                
            >
            </grid> 
 
   </section>

  </div>
  
</div> -->



        
              </b-card-body>
            </b-collapse>
          </b-card>
        </transition>
      </b-col>
    </b-row>





          
</div>   





<div class="animated fadeIn">
   
    <b-row>
      <b-col md="12">
        <transition name="fade">
          <b-card no-body v-if="show">
            <div slot="header" ><i class="fa fa-bar-chart" aria-hidden="true"></i> สรุปการเคลื่อนไหว และปริมาณคงเหลือ  แยกรายเดือน
              <div class="card-header-actions">
      
                <b-link class="card-header-action btn-minimize" v-b-toggle.collapse4>
                  <i class="icon-arrow-up"></i>
                </b-link>
     
              </div>
            </div>
            <b-collapse id="collapse4" visible>
              <b-card-body style="  zoom: 90%;">


   
 


<!-- 
<div class="tabset">
 
  <input type="radio" name="tabset34" id="tab3" aria-controls="marzen" checked>
  <label for="tab3">สะสม</label>

  <input type="radio" name="tabset34" id="tab4" aria-controls="rauchbier" >
  <label for="tab4">ประจำเดือน</label>

  
  <div class="tab-panels">
    <section id="marzen" class="tab-panel"> -->
   <b-row>
       
        <b-col sm="12">
               <br>
               

          <span class="speech-bubbleex"> &nbsp; คลังต่างประเทศ &nbsp; </span>


         <gridv2
                ref="gridDrawing2M"
       
                :fields="fieldDrawingex_endmonth"


                :name="name"
                
                :btnGrid="false"
                :btnAdd="false"
                :btnClone="false"
                :btnView="false"
                :btnEdit="false"
              
                :btnDelete="false"

                :o_grid_responsive="true"



     

               
                :trackBy="'rowID'"


                :data="dataDrawingMonthEx"

                :o_navfooter_visible="true"
                :o_nav_visible="false"
                :o_col_checkbox="false"
              
                
                
            >


            

        <template v-slot:data_code="{item,itemIndex}">


             <div v-if="item.data_code=='รวม'" style=" background-color: #E8F8F5; text-align: right; font-weight: bold;"> {{item.data_code}}&nbsp; &nbsp; </div>
             <div v-else> {{item.data_code}}</div>


     
        </template>
            </gridv2> 
           

        </b-col>

        <b-col sm="12">
               <br>

             
          <span class="speech-bubbledm"> &nbsp; คลังในประเทศ &nbsp; </span>
         <gridv2
                ref="gridDrawing2M"
       
                :fields="fieldDrawing_endmonth"
                :name="name"
                :btnGrid="false"
                :btnAdd="false"
                :btnClone="false"
                :btnView="false"
                :btnEdit="false"
              
                :btnDelete="false"

                :o_grid_responsive="true"





               
                :trackBy="'rowID'"


                :data="dataDrawingMonthDm"

                :o_navfooter_visible="true"
                :o_nav_visible="false"
                :o_col_checkbox="false"
                
              
                
                
            >

            

        <template v-slot:data_code="{item,itemIndex}">


             <div v-if="item.data_code=='รวม'" style=" background-color: #E8F8F5; text-align: right; font-weight: bold;"> {{item.data_code}}&nbsp; &nbsp; </div>
             <div v-else> {{item.data_code}}</div>


     
        </template>
            </gridv2> 

        

        </b-col>



  </b-row>          

<!-- 

  </section>
    <section id="rauchbier" class="tab-panel">
  
         <grid
                ref="gridDrawing"
       
                :fields="fieldDrawing"
                :name="name"
                :btnGrid="false"
                :btnAdd="false"
                :btnClone="false"
                :btnView="false"
                :btnEdit="false"
              
                :btnDelete="false"
                :o_col_checkbox="false"
                :trackBy="'rowID'"
                :data="dataDrawingEX"
                :o_navfooter_visible="false"
              
                
                
            >
            </grid> 
 
   </section>

  </div>
  
</div> -->



        
              </b-card-body>
            </b-collapse>
          </b-card>
        </transition>
      </b-col>
    </b-row>





          
</div>   


    











          
</div>   







      

</template>












 <script>


import Vue from 'vue'


import Chart from 'chart.js'

 
import { API } from "@/shared/core";
import { GetDateView, AlertMessage, ObjCopy, ObjResetValue, GetLastUpdate,GetDateTimeFormat } from "@/shared/utils";
import { status, configMode } from "@/shared/define";
import { required, minLength } from "vuelidate/lib/validators";
import dic from "@/shared/dic";

import 'webrtc-adapter';

var i;


export default {




  
  i18n: {
    messages: {
      en: { dic: { codevalid: "This is a required field and must have {0} characters." } },
      th: { dic: { codevalid: "จำเป็นต้องมี {0} ตัวอักษร" } }    

    },
    sharedMessages: dic
  },


  name: "rptDrawing", 
 
  mounted() {



  
     var Selet = new Array();
     let date = new Date();

     Selet[0] = date.getFullYear();
     for (i = 1; i < 5; i++) 
     {
        Selet[i] = date.getFullYear()-i;
     }
     this.iSeleY = Selet;
     
     this.iMun = [

       { valuei: 1, text: "มกราคม" }
       ,{ valuei: 2, text: "กุมภาพันธ์" } 
       ,{ valuei: 3, text: "มีนาคม" } 
       ,{ valuei: 4, text: "เมษายน" } 
       ,{ valuei: 5, text: "พฤษภาคม" } 
       ,{ valuei: 6, text: "มิถุนายน" } 
       ,{ valuei: 7, text: "กรกฎาคม" } 
       ,{ valuei: 8, text: "สิงหาคม" } 
       ,{ valuei: 9, text: "กันยายน" } 
       ,{ valuei: 10, text: "ตุลาคม" } 
       ,{ valuei: 11, text: "พฤศจิกายน" } 
       ,{ valuei: 12, text: "ธันวาคม" } 
      
     ];
    

    this.txtSearch_mn =date.getMonth()+1;
    this.txtSearch = date.getFullYear();


 
    this.Search();


    





  },

  




  computed: {    
     config() {
      return configMode[this.mode].class;

      
    }



    
  },
  created: function() {
        const self = this;                   
    //    self.txtSearch = "2020";  
  },

  // form //
  data() {
    return {


        iSeleY: [],
      iMun: [],
      selected: [], // Must be an array reference!
      show: true,
      horizontal: { label:'col-3', input:'col-6' },
      options: ['Option 1', 'Option 2', 'Option 3'],
      selectOptions: [
        'Option 1', 'Option 2', 'Option 3',
        { 
          value: ['some value', 'another value'], 
          label: 'Selected option'
        }
      ],
      selectedOption: ['some value', 'another value'],
      chktyperept:false,
      formCollapsed: true,
      formCollapsed2: true,
       formCollapsed3: true,
        formCollapsed4: true,
      checkboxNames: ['Checkboxes', 'Inline Checkboxes',
                      'Checkboxes - custom', 'Inline Checkboxes - custom'],
      radioNames: ['Radios', 'Inline Radios',
                    'Radios - custom', 'Inline Radios - custom'],
    bar:null,
   txtSearch_mn: "",

    seen: true,
    token: null,
    formdate:new Date(),  
    formtime:"",  
    time: "",
    date: "",
    modal: false,
    mode: "Add",
    errMsg: "",
    avSearch: false,
    txtSearch: "",
    name:"rptDrawing",
    drawingCd:"",
    perPage: 10,

      startRow: 0,
      stopRow: 25,
     dataDrawing:[],
     dataDrawingEndEx:[],
     dataDrawingEndDm:[],

     dataDrawingrecpayEx :[],
     dataDrawingrecpayDm :[],

     dataDrawingMonthEx:[],
     dataDrawingMonthDm:[],

    fieldData:[
      
      // {
         
      //   name: "rowID",
      //   title: "No",
      //     class: "text-right",
      //   visible: true
      // },
       
       {
        name: "data_code",
        title: "เดือน",
        sortField: "mnt",
        class: "text-left",
        visible: true
        },

        {
        name: "cum_target_value",
        title: "เป้าหมายสะสม (ลบ.)",
        sortField: "fcValue",
        class: "text-right",
        visible: true,
        callback:(v) => {
          if (this.$root.$options.filters.number(v,2) != 0) {
          return '<spen> '+this.$root.$options.filters.number(v,2)+' </span> ';   
          } else{
              '<spen>/span> '
          } 
 
        },
        },  


        
        {
        name: "totpi_value",
        title: "รับคำสั่งซื้อประจำเดือน (ลบ.)",
        sortField: "poValue",
        class: "text-right",
        visible: true,
        callback:(v) => {
          if (this.$root.$options.filters.number(v,2) != 0) {
          return '<spen> '+this.$root.$options.filters.number(v,2)+' </span> ';   
          } else{
              '<spen>/span> '
          } 
 
        },
        },
       

         {
        name: "cum_sale_value",
        title: "ยอดขายสะสม (ลบ.)",
        sortField: "saleValue",
        class: "text-right",
        visible: true,
        callback:(v) => {
     
          if (this.$root.$options.filters.number(v,2) != 0) {
          return '<spen> '+this.$root.$options.filters.number(v,2)+' </span> ';   
          } else{
              '<spen>/span> '
          }  
 
        },






        },
        
         {
        name: "cum_diff_value",
        title: "ต่างจากเป้าหมายสะสม (ลบ.)",
        sortField: "diffValue",
        class: "text-right",
        visible: true,
        callback:(v) => {
     
            if (this.$root.$options.filters.number(v,2) != 0) {
          return '<spen> '+this.$root.$options.filters.number(v,2)+' </span> ';   
          } else{
              '<spen>/span> '
          }  
 
        },
        },
        
         {
        name: "cum_percent_diff",
        title: "% เทียบเป้าหมายสะสม",
        sortField: "percTarget",
        class: "text-right",
        visible: true,
        callback:(v) => {
           if (this.$root.$options.filters.number(v,2) <= 0 ) 
           {
               

           } else {
              
              
           if (this.$root.$options.filters.number(v,2) > 100 )
           {
               return     ' <div class="task-status"><div class="status-bar"><div class="status-track">   <span class="status-text"> '+this.$root.$options.filters.number(v,2)+'</span>  <div class="status-fill-good" style="width:100%"></div>  </div> </div>  </div> ';

           } else {
              if (this.$root.$options.filters.number(v,2) <=70  )

              {


               if (this.$root.$options.filters.number(v,2) <=40  ) 
               {
                return     ' <div class="task-status"><div class="status-bar"><div class="status-track">   <span class="status-text">'+this.$root.$options.filters.number(v,2)+'</span>  <div class="status-fill-bad" style="width:'+this.$root.$options.filters.number(v,2)+'%"></div>  </div> </div>  </div> ';
               }
               else
               {
                 return     ' <div class="task-status"><div class="status-bar"><div class="status-track">   <span class="status-text">'+this.$root.$options.filters.number(v,2)+'</span>  <div class="status-fill-bad2good" style="width:'+this.$root.$options.filters.number(v,2)+'%"></div>  </div> </div>  </div> ';

               }
             
             
             } 
              
              
              else 
              
              {
                return     ' <div class="task-status"><div class="status-bar"><div class="status-track">   <span class="status-text">'+this.$root.$options.filters.number(v,2)+'</span>  <div class="status-fill" style="width: '+this.$root.$options.filters.number(v,2)+'%"></div>  </div> </div>  </div> ';
              }
         
         
         }

        }



        }

        }

    ],
 fieldDrawingEnd:[
      
      // {
         
      //   name: "rowID",
      //   title: "No",
      //     class: "text-right",
      //   visible: true
      // },
       
       {
        name: "data_code",
        title: "เดือน",
        sortField: "mnt",
        class: "text-left",
        visible: true
        },

        {
        name: "end_wei",
        title: "น้ำหนักคงเหลือ (พันตัน)",
        sortField: "end_qty",
        class: "text-right",
        visible: true,
        callback:(v) => {
          if (this.$root.$options.filters.number(v,2) != 0) {
          return '<spen> '+this.$root.$options.filters.number(v,2)+' </span> ';   
          } else{
              '<spen>/span> '
          } 
 
        },
        },  


        
        {
        name: "end_cost",
        title: "มูลค่าคงเหลือ (ลบ.)",
        sortField: "poValue",
        class: "text-right",
        visible: true,
        callback:(v) => {
          if (this.$root.$options.filters.number(v,2) != 0) {
          return '<spen> '+this.$root.$options.filters.number(v,2)+' </span> ';   
          } else{
              '<spen>/span> '
          } 
 
        },
        }
        
        
        
    ],
     
      
    fieldDrawing:[
      
      // {
         
      //   name: "rowID",
      //   title: "No",
      //     class: "text-right",
      //   visible: true
      // },
       
       {
        name: "data_code",
        title: "กลุ่มผลิตภัณฑ์",
        sortField: "data_code",
        class: "text-left",
     
        visible: true
        },


        {
        name: "bal",
        title: "ยกมา",
        sortField: "bal",
        class: "text-right",
        visible: false,
        groups:[

 {
        name: "bal_qty",
        title: "ปริมาณ(พันผืน)",
        sortField: "bal_qty",
        class: "text-right",
       
        visible: false,
        callback:(v) => {
          if (this.$root.$options.filters.number(v,2) != 0) {
          return '<spen> '+this.$root.$options.filters.number(v,0)+' </span> ';   
          } else{
              '<spen>/span> '
          } 
 
        },
        },  


        
        {
        name: "bal_wei",
        title: "นน.(พันตัน)",
        sortField: "bal_wei",
        class: "text-right",
       
        visible: false,
        callback:(v) => {
          if (this.$root.$options.filters.number(v,2) != 0) {
          return '<spen> '+this.$root.$options.filters.number(v,2)+' </span> ';   
          } else{
              '<spen>/span> '
          } 
 
                },
        }, 



        
        {
        name: "bal_cost",
        title: "มูลค่า (ลบ.)",
        sortField: "bal_cost",
    
        class: "text-right",
        visible: false,
        callback:(v) => {
          if (this.$root.$options.filters.number(v,2) != 0) {
          return '<spen> '+this.$root.$options.filters.number(v,2)+' </span> ';   
          } else{
              '<spen>/span> '
          } 
 
        }

           



        }



        ]
 
        }
        ,

         {
        name: "rec",
        title: "รับเข้า",
        sortField: "rec",
        class: "text-right",
        visible: true,
        groups:[

 {
        name: "rec_qty",
        title: "ปริมาณ(พันผืน)",
        sortField: "rec_qty",
        class: "text-right",
       
        visible: true,
        callback:(v) => {
          if (this.$root.$options.filters.number(v,2) != 0) {
          return '<spen> '+this.$root.$options.filters.number(v,0)+' </span> ';   
          } else{
              '<spen>/span> '
          } 
 
        },
        },  


        
        {
        name: "rec_wei",
        title: "นน.(พันตัน)",
        sortField: "rec_wei",
        class: "text-right",
       
        visible: true,
        callback:(v) => {
          if (this.$root.$options.filters.number(v,2) != 0) {
          return '<spen> '+this.$root.$options.filters.number(v,2)+' </span> ';   
          } else{
              '<spen>/span> '
          } 
 
                },
        }, 



        
        {
        name: "rec_cost",
        title: "มูลค่า (ลบ.)",
        sortField: "rec_cost",
    
        class: "text-right",
        visible: true,
        callback:(v) => {
          if (this.$root.$options.filters.number(v,2) != 0) {
          return '<spen> '+this.$root.$options.filters.number(v,2)+' </span> ';   
          } else{
              '<spen>/span> '
          } 
 
        }

           



        }



        ]
 
        }

        
 ,

         {
        name: "pay",
        title: "จ่ายออก",
        sortField: "pay",
        class: "text-right",
        visible: true,
        groups:[

 {
        name: "pay_qty",
        title: "ปริมาณ(พันผืน)",
        sortField: "pay_qty",
        class: "text-right",
       
        visible: true,
        callback:(v) => {
          if (this.$root.$options.filters.number(v,2) != 0) {
          return '<spen> '+this.$root.$options.filters.number(v,0)+' </span> ';   
          } else{
              '<spen>/span> '
          } 
 
        },
        },  


        
        {
        name: "pay_wei",
        title: "นน.(พันตัน)",
        sortField: "pay_wei",
        class: "text-right",
       
        visible: true,
        callback:(v) => {
          if (this.$root.$options.filters.number(v,2) != 0) {
          return '<spen> '+this.$root.$options.filters.number(v,2)+' </span> ';   
          } else{
              '<spen>/span> '
          } 
 
                },
        }, 



        
        {
        name: "pay_cost",
        title: "มูลค่า (ลบ.)",
        sortField: "pay_cost",
    
        class: "text-right",
        visible: true,
        callback:(v) => {
          if (this.$root.$options.filters.number(v,2) != 0) {
          return '<spen> '+this.$root.$options.filters.number(v,2)+' </span> ';   
          } else{
              '<spen>/span> '
          } 
 
        }

           



        }



        ]
 
        }






 ,

         {
        name: "end1",
        title: "คงเหลือ",
        sortField: "end1",
        class: "text-right",
        visible: true,
        groups:[

 {
        name: "end_qty",
        title: "ปริมาณ(พันผืน)",
        sortField: "end_qty",
        class: "text-right",
       
        visible: true,
        callback:(v) => {
          if (this.$root.$options.filters.number(v,2) != 0) {
          return '<spen> '+this.$root.$options.filters.number(v,0)+' </span> ';   
          } else{
              '<spen>/span> '
          } 
 
        },
        },  


        
        {
        name: "end_wei",
        title: "นน.(พันตัน)",
        sortField: "end_wei",
        class: "text-right",
       
        visible: true,
        callback:(v) => {
          if (this.$root.$options.filters.number(v,2) != 0) {
          return '<spen> '+this.$root.$options.filters.number(v,2)+' </span> ';   
          } else{
              '<spen>/span> '
          } 
 
                },
        }, 



        
        {
        name: "end_cost",
        title: "มูลค่า (ลบ.)",
        sortField: "end_cost",
    
        class: "text-right",
        visible: true,
        callback:(v) => {
          if (this.$root.$options.filters.number(v,2) != 0) {
          return '<spen> '+this.$root.$options.filters.number(v,2)+' </span> ';   
          } else{
              '<spen>/span> '
          } 
 
        }

           



        }



        ]
 
        }










        



    ],
     

fieldDrawingex:[
      
      // {
         
      //   name: "rowID",
      //   title: "No",
      //     class: "text-right",
      //   visible: true
      // },
       
       {
        name: "data_code",
        title: "ประเทศ",
        sortField: "data_code",
        class: "text-left",
        width:15,
        
        visible: true,

        callback:(v) => {
    
          return '<small> '+v+' </small> ';   
          
 
        },

        },


        {
        name: "bal",
        title: "ยกมา",
        sortField: "bal",
        class: "text-right",
        visible: false,
        groups:[

 {
        name: "bal_qty",
        title: "ปริมาณ(พันผืน)",
        sortField: "bal_qty",
        class: "text-right",
       
        visible: false,
        callback:(v) => {
          if (this.$root.$options.filters.number(v,2) != 0) {
          return '<spen> '+this.$root.$options.filters.number(v,0)+' </span> ';   
          } else{
              '<spen>/span> '
          } 
 
        },
        },  


        
        {
        name: "bal_wei",
        title: "นน.(พันตัน)",
        sortField: "bal_wei",
        class: "text-right",
       
        visible: false,
        callback:(v) => {
          if (this.$root.$options.filters.number(v,2) != 0) {
          return '<spen> '+this.$root.$options.filters.number(v,2)+' </span> ';   
          } else{
              '<spen>/span> '
          } 
 
                },
        }, 



        
        {
        name: "bal_cost",
        title: "มูลค่า (ลบ.)",
        sortField: "bal_cost",
    
        class: "text-right",
        visible: false,
        callback:(v) => {
          if (this.$root.$options.filters.number(v,2) != 0) {
          return '<spen> '+this.$root.$options.filters.number(v,2)+' </span> ';   
          } else{
              '<spen>/span> '
          } 
 
        }

           



        }



        ]
 
        }
        ,

         {
        name: "rec",
        title: "รับเข้า",
        sortField: "rec",
        class: "text-right",
        visible: true,
        groups:[

 {
        name: "rec_qty",
        title: "ปริมาณ(พันผืน)",
        sortField: "rec_qty",
        class: "text-right",
       
        visible: true,
        callback:(v) => {
          if (this.$root.$options.filters.number(v,2) != 0) {
          return '<spen> '+this.$root.$options.filters.number(v,0)+' </span> ';   
          } else{
              '<spen>/span> '
          } 
 
        },
        },  


        
        {
        name: "rec_wei",
        title: "นน.(พันตัน)",
        sortField: "rec_wei",
        class: "text-right",
       
        visible: true,
        callback:(v) => {
          if (this.$root.$options.filters.number(v,2) != 0) {
          return '<spen> '+this.$root.$options.filters.number(v,2)+' </span> ';   
          } else{
              '<spen>/span> '
          } 
 
                },
        }, 



        
        {
        name: "rec_cost",
        title: "มูลค่า (ลบ.)",
        sortField: "rec_cost",
    
        class: "text-right",
        visible: true,
        callback:(v) => {
          if (this.$root.$options.filters.number(v,2) != 0) {
          return '<spen> '+this.$root.$options.filters.number(v,2)+' </span> ';   
          } else{
              '<spen>/span> '
          } 
 
        }

           



        }



        ]
 
        }

        
 ,

         {
        name: "pay",
        title: "จ่ายออก",
        sortField: "pay",
        class: "text-right",
        visible: true,
        groups:[

 {
        name: "pay_qty",
        title: "ปริมาณ(พันผืน)",
        sortField: "pay_qty",
        class: "text-right",
       
        visible: true,
        callback:(v) => {
          if (this.$root.$options.filters.number(v,2) != 0) {
          return '<spen> '+this.$root.$options.filters.number(v,0)+' </span> ';   
          } else{
              '<spen>/span> '
          } 
 
        },
        },  


        
        {
        name: "pay_wei",
        title: "นน.(พันตัน)",
        sortField: "pay_wei",
        class: "text-right",
       
        visible: true,
        callback:(v) => {
          if (this.$root.$options.filters.number(v,2) != 0) {
          return '<spen> '+this.$root.$options.filters.number(v,2)+' </span> ';   
          } else{
              '<spen>/span> '
          } 
 
                },
        }, 



        
        {
        name: "pay_cost",
        title: "มูลค่า (ลบ.)",
        sortField: "pay_cost",
    
        class: "text-right",
        visible: true,
        callback:(v) => {
          if (this.$root.$options.filters.number(v,2) != 0) {
          return '<spen> '+this.$root.$options.filters.number(v,2)+' </span> ';   
          } else{
              '<spen>/span> '
          } 
 
        }

           



        }



        ]
 
        }






 ,

         {
        name: "end1",
        title: "คงเหลือ",
        sortField: "end1",
        class: "text-right",
        visible: true,
        groups:[

 {
        name: "end_qty",
        title: "ปริมาณ(พันผืน)",
        sortField: "end_qty",
        class: "text-right",
       
        visible: true,
        callback:(v) => {
          if (this.$root.$options.filters.number(v,2) != 0) {
          return '<spen> '+this.$root.$options.filters.number(v,0)+' </span> ';   
          } else{
              '<spen>/span> '
          } 
 
        },
        },  


        
        {
        name: "end_wei",
        title: "นน.(พันตัน)",
        sortField: "end_wei",
        class: "text-right",
       
        visible: true,
        callback:(v) => {
          if (this.$root.$options.filters.number(v,2) != 0) {
          return '<spen> '+this.$root.$options.filters.number(v,2)+' </span> ';   
          } else{
              '<spen>/span> '
          } 
 
                },
        }, 



        
        {
        name: "end_cost",
        title: "มูลค่า (ลบ.)",
        sortField: "end_cost",
    
        class: "text-right",
        visible: true,
        callback:(v) => {
          if (this.$root.$options.filters.number(v,2) != 0) {
          return '<spen> '+this.$root.$options.filters.number(v,2)+' </span> ';   
          } else{
              '<spen>/span> '
          } 
 
        }

           



        }



        ]
 
        }










        



    ],
     




fieldDrawingex_endmonth:[
      
       
       {
        name: "data_code",
        title: "ประเทศ",
        sortField: "data_code",
        class: "text-left",
        
        visible: true
        },


        {
        name: "mn1",
        title: "ม.ค.",
        sortField: "mn1",
        class: "text-right",
        visible: true,
        groups:[

        {
        name: "qty_1",
        title: "ปริมาณ(พันผืน)",
        sortField: "qty_1",
        class: "text-right",
       
        visible: true,
        callback:(v) => {
          if (this.$root.$options.filters.number(v,2) != 0) {
          return '<spen> '+this.$root.$options.filters.number(v,0)+' </span> ';   
          } else{
              '<spen>/span> '
          } 
 
        },
        },  


        
        {
        name: "wei_1",
        title: "นน.(พันตัน)",
        sortField: "wei_1",
        class: "text-right",
       
        visible: true,
        callback:(v) => {
          if (this.$root.$options.filters.number(v,2) != 0) {
          return '<spen> '+this.$root.$options.filters.number(v,2)+' </span> ';   
          } else{
              '<spen>/span> '
          } 
 
                },
        }, 



        
        {
        name: "cost_1",
        title: "มูลค่า (ลบ.)",
        sortField: "cost_1",
    
        class: "text-right",
        visible: true,
        callback:(v) => {
          if (this.$root.$options.filters.number(v,2) != 0) {
          return '<spen> '+this.$root.$options.filters.number(v,2)+' </span> ';   
          } else{
              '<spen>/span> '
          } 
 
        }

        }

        ]
 
        }
,


{
        name: "mn2",
        title: "ก.พ.",
        sortField: "mn2",
        class: "text-right",
        visible: true,
        groups:[

        {
        name: "qty_2",
        title: "ปริมาณ(พันผืน)",
        sortField: "qty_2",
        class: "text-right",
       
        visible: true,
        callback:(v) => {
          if (this.$root.$options.filters.number(v,2) != 0) {
          return '<spen> '+this.$root.$options.filters.number(v,0)+' </span> ';   
          } else{
              '<spen>/span> '
          } 
 
        },
        },  


        
        {
        name: "wei_2",
        title: "นน.(พันตัน)",
        sortField: "wei_2",
        class: "text-right",
       
        visible: true,
        callback:(v) => {
          if (this.$root.$options.filters.number(v,2) != 0) {
          return '<spen> '+this.$root.$options.filters.number(v,2)+' </span> ';   
          } else{
              '<spen>/span> '
          } 
 
                },
        }, 



        
        {
        name: "cost_2",
        title: "มูลค่า (ลบ.)",
        sortField: "cost_2",
    
        class: "text-right",
        visible: true,
        callback:(v) => {
          if (this.$root.$options.filters.number(v,2) != 0) {
          return '<spen> '+this.$root.$options.filters.number(v,2)+' </span> ';   
          } else{
              '<spen>/span> '
          } 
 
        }

        }

        ]
 
        }
        ,



        
        {
        name: "mn3",
        title: "มี.ค.",
        sortField: "mn3",
        class: "text-right",
        visible: true,
        groups:[

        {
        name: "qty_3",
        title: "ปริมาณ(พันผืน)",
        sortField: "qty_3",
        class: "text-right",
       
        visible: true,
        callback:(v) => {
          if (this.$root.$options.filters.number(v,2) != 0) {
          return '<spen> '+this.$root.$options.filters.number(v,0)+' </span> ';   
          } else{
              '<spen>/span> '
          } 
 
        },
        },  


        
        {
        name: "wei_3",
        title: "นน.(พันตัน)",
        sortField: "wei_3",
        class: "text-right",
       
        visible: true,
        callback:(v) => {
          if (this.$root.$options.filters.number(v,2) != 0) {
          return '<spen> '+this.$root.$options.filters.number(v,2)+' </span> ';   
          } else{
              '<spen>/span> '
          } 
 
                },
        }, 



        
        {
        name: "cost_3",
        title: "มูลค่า (ลบ.)",
        sortField: "cost_3",
    
        class: "text-right",
        visible: true,
        callback:(v) => {
          if (this.$root.$options.filters.number(v,2) != 0) {
          return '<spen> '+this.$root.$options.filters.number(v,2)+' </span> ';   
          } else{
              '<spen>/span> '
          } 
 
        }

        }

        ]
 
        }



,




        {
        name: "mn4",
        title: "เม.ย.",
        sortField: "mn4",
        class: "text-right",
        visible: true,
        groups:[

        {
        name: "qty_4",
        title: "ปริมาณ(พันผืน)",
        sortField: "qty_4",
        class: "text-right",
       
        visible: true,
        callback:(v) => {
          if (this.$root.$options.filters.number(v,2) != 0) {
          return '<spen> '+this.$root.$options.filters.number(v,0)+' </span> ';   
          } else{
              '<spen>/span> '
          } 
 
        },
        },  


        
        {
        name: "wei_4",
        title: "นน.(พันตัน)",
        sortField: "wei_4",
        class: "text-right",
       
        visible: true,
        callback:(v) => {
          if (this.$root.$options.filters.number(v,2) != 0) {
          return '<spen> '+this.$root.$options.filters.number(v,2)+' </span> ';   
          } else{
              '<spen>/span> '
          } 
 
                },
        }, 



        
        {
        name: "cost_4",
        title: "มูลค่า (ลบ.)",
        sortField: "cost_4",
    
        class: "text-right",
        visible: true,
        callback:(v) => {
          if (this.$root.$options.filters.number(v,2) != 0) {
          return '<spen> '+this.$root.$options.filters.number(v,2)+' </span> ';   
          } else{
              '<spen>/span> '
          } 
 
        }

        }

        ]
 
        }








,




        {
        name: "mn5",
        title: "พ.ค.",
        sortField: "mn5",
        class: "text-right",
        visible: true,
        groups:[

        {
        name: "qty_5",
        title: "ปริมาณ(พันผืน)",
        sortField: "qty_5",
        class: "text-right",
       
        visible: true,
        callback:(v) => {
          if (this.$root.$options.filters.number(v,2) != 0) {
          return '<spen> '+this.$root.$options.filters.number(v,0)+' </span> ';   
          } else{
              '<spen>/span> '
          } 
 
        },
        },  


        
        {
        name: "wei_5",
        title: "นน.(พันตัน)",
        sortField: "wei_5",
        class: "text-right",
       
        visible: true,
        callback:(v) => {
          if (this.$root.$options.filters.number(v,2) != 0) {
          return '<spen> '+this.$root.$options.filters.number(v,2)+' </span> ';   
          } else{
              '<spen>/span> '
          } 
 
                },
        }, 



        
        {
        name: "cost_5",
        title: "มูลค่า (ลบ.)",
        sortField: "cost_5",
    
        class: "text-right",
        visible: true,
        callback:(v) => {
          if (this.$root.$options.filters.number(v,2) != 0) {
          return '<spen> '+this.$root.$options.filters.number(v,2)+' </span> ';   
          } else{
              '<spen>/span> '
          } 
 
        }

        }

        ]
 
        }



,




        {
        name: "mn6",
        title: "มิ.ย.",
        sortField: "mn6",
        class: "text-right",
        visible: true,
        groups:[

        {
        name: "qty_6",
        title: "ปริมาณ(พันผืน)",
        sortField: "qty_6",
        class: "text-right",
       
        visible: true,
        callback:(v) => {
          if (this.$root.$options.filters.number(v,2) != 0) {
          return '<spen> '+this.$root.$options.filters.number(v,0)+' </span> ';   
          } else{
              '<spen>/span> '
          } 
 
        },
        },  


        
        {
        name: "wei_6",
        title: "นน.(พันตัน)",
        sortField: "wei_6",
        class: "text-right",
       
        visible: true,
        callback:(v) => {
          if (this.$root.$options.filters.number(v,2) != 0) {
          return '<spen> '+this.$root.$options.filters.number(v,2)+' </span> ';   
          } else{
              '<spen>/span> '
          } 
 
                },
        }, 



        
        {
        name: "cost_6",
        title: "มูลค่า (ลบ.)",
        sortField: "cost_6",
    
        class: "text-right",
        visible: true,
        callback:(v) => {
          if (this.$root.$options.filters.number(v,2) != 0) {
          return '<spen> '+this.$root.$options.filters.number(v,2)+' </span> ';   
          } else{
              '<spen>/span> '
          } 
 
        }

        }

        ]
 
        }



,




        {
        name: "mn7",
        title: "ก.ค.",
        sortField: "mn7",
        class: "text-right",
        visible: true,
        groups:[

        {
        name: "qty_7",
        title: "ปริมาณ(พันผืน)",
        sortField: "qty_7",
        class: "text-right",
       
        visible: true,
        callback:(v) => {
          if (this.$root.$options.filters.number(v,2) != 0) {
          return '<spen> '+this.$root.$options.filters.number(v,0)+' </span> ';   
          } else{
              '<spen>/span> '
          } 
 
        },
        },  


        
        {
        name: "wei_7",
        title: "นน.(พันตัน)",
        sortField: "wei_7",
        class: "text-right",
       
        visible: true,
        callback:(v) => {
          if (this.$root.$options.filters.number(v,2) != 0) {
          return '<spen> '+this.$root.$options.filters.number(v,2)+' </span> ';   
          } else{
              '<spen>/span> '
          } 
 
                },
        }, 



        
        {
        name: "cost_7",
        title: "มูลค่า (ลบ.)",
        sortField: "cost_7",
    
        class: "text-right",
        visible: true,
        callback:(v) => {
          if (this.$root.$options.filters.number(v,2) != 0) {
          return '<spen> '+this.$root.$options.filters.number(v,2)+' </span> ';   
          } else{
              '<spen>/span> '
          } 
 
        }

        }

        ]
 
        }









,




        {
        name: "mn8",
        title: "ส.ค.",
        sortField: "mn8",
        class: "text-right",
        visible: true,
        groups:[

        {
        name: "qty_8",
        title: "ปริมาณ(พันผืน)",
        sortField: "qty_8",
        class: "text-right",
       
        visible: true,
        callback:(v) => {
          if (this.$root.$options.filters.number(v,2) != 0) {
          return '<spen> '+this.$root.$options.filters.number(v,0)+' </span> ';   
          } else{
              '<spen>/span> '
          } 
 
        },
        },  


        
        {
        name: "wei_8",
        title: "นน.(พันตัน)",
        sortField: "wei_8",
        class: "text-right",
       
        visible: true,
        callback:(v) => {
          if (this.$root.$options.filters.number(v,2) != 0) {
          return '<spen> '+this.$root.$options.filters.number(v,2)+' </span> ';   
          } else{
              '<spen>/span> '
          } 
 
                },
        }, 



        
        {
        name: "cost_8",
        title: "มูลค่า (ลบ.)",
        sortField: "cost_8",
    
        class: "text-right",
        visible: true,
        callback:(v) => {
          if (this.$root.$options.filters.number(v,2) != 0) {
          return '<spen> '+this.$root.$options.filters.number(v,2)+' </span> ';   
          } else{
              '<spen>/span> '
          } 
 
        }

        }

        ]
 
        }





,




        {
        name: "mn9",
        title: "ก.ย.",
        sortField: "mn9",
        class: "text-right",
        visible: true,
        groups:[

        {
        name: "qty_9",
        title: "ปริมาณ(พันผืน)",
        sortField: "qty_9",
        class: "text-right",
       
        visible: true,
        callback:(v) => {
          if (this.$root.$options.filters.number(v,2) != 0) {
          return '<spen> '+this.$root.$options.filters.number(v,0)+' </span> ';   
          } else{
              '<spen>/span> '
          } 
 
        },
        },  


        
        {
        name: "wei_9",
        title: "นน.(พันตัน)",
        sortField: "wei_9",
        class: "text-right",
       
        visible: true,
        callback:(v) => {
          if (this.$root.$options.filters.number(v,2) != 0) {
          return '<spen> '+this.$root.$options.filters.number(v,2)+' </span> ';   
          } else{
              '<spen>/span> '
          } 
 
                },
        }, 



        
        {
        name: "cost_9",
        title: "มูลค่า (ลบ.)",
        sortField: "cost_9",
    
        class: "text-right",
        visible: true,
        callback:(v) => {
          if (this.$root.$options.filters.number(v,2) != 0) {
          return '<spen> '+this.$root.$options.filters.number(v,2)+' </span> ';   
          } else{
              '<spen>/span> '
          } 
 
        }

        }

        ]
 
        }







,




        {
        name: "mn10",
        title: "ต.ค.",
        sortField: "mn10",
        class: "text-right",
        visible: true,
        groups:[

        {
        name: "qty_10",
        title: "ปริมาณ(พันผืน)",
        sortField: "qty_10",
        class: "text-right",
       
        visible: true,
        callback:(v) => {
          if (this.$root.$options.filters.number(v,2) != 0) {
          return '<spen> '+this.$root.$options.filters.number(v,0)+' </span> ';   
          } else{
              '<spen>/span> '
          } 
 
        },
        },  


        
        {
        name: "wei_10",
        title: "นน.(พันตัน)",
        sortField: "wei_10",
        class: "text-right",
       
        visible: true,
        callback:(v) => {
          if (this.$root.$options.filters.number(v,2) != 0) {
          return '<spen> '+this.$root.$options.filters.number(v,2)+' </span> ';   
          } else{
              '<spen>/span> '
          } 
 
                },
        }, 



        
        {
        name: "cost_10",
        title: "มูลค่า (ลบ.)",
        sortField: "cost_10",
    
        class: "text-right",
        visible: true,
        callback:(v) => {
          if (this.$root.$options.filters.number(v,2) != 0) {
          return '<spen> '+this.$root.$options.filters.number(v,2)+' </span> ';   
          } else{
              '<spen>/span> '
          } 
 
        }

        }

        ]
 
        }









,




        {
        name: "mn11",
        title: "พ.ย.",
        sortField: "mn11",
        class: "text-right",
        visible: true,
        groups:[

        {
        name: "qty_11",
        title: "ปริมาณ(พันผืน)",
        sortField: "qty_11",
        class: "text-right",
       
        visible: true,
        callback:(v) => {
          if (this.$root.$options.filters.number(v,2) != 0) {
          return '<spen> '+this.$root.$options.filters.number(v,0)+' </span> ';   
          } else{
              '<spen>/span> '
          } 
 
        },
        },  


        
        {
        name: "wei_11",
        title: "นน.(พันตัน)",
        sortField: "wei_11",
        class: "text-right",
       
        visible: true,
        callback:(v) => {
          if (this.$root.$options.filters.number(v,2) != 0) {
          return '<spen> '+this.$root.$options.filters.number(v,2)+' </span> ';   
          } else{
              '<spen>/span> '
          } 
 
                },
        }, 



        
        {
        name: "cost_11",
        title: "มูลค่า (ลบ.)",
        sortField: "cost_11",
    
        class: "text-right",
        visible: true,
        callback:(v) => {
          if (this.$root.$options.filters.number(v,2) != 0) {
          return '<spen> '+this.$root.$options.filters.number(v,2)+' </span> ';   
          } else{
              '<spen>/span> '
          } 
 
        }

        }

        ]
 
        }








,




        {
        name: "mn12",
        title: "ธ.ค.",
        sortField: "mn12",
        class: "text-right",
        visible: true,
        groups:[

        {
        name: "qty_12",
        title: "ปริมาณ(พันผืน)",
        sortField: "qty_12",
        class: "text-right",
       
        visible: true,
        callback:(v) => {
          if (this.$root.$options.filters.number(v,2) != 0) {
          return '<spen> '+this.$root.$options.filters.number(v,0)+' </span> ';   
          } else{
              '<spen>/span> '
          } 
 
        },
        },  


        
        {
        name: "wei_12",
        title: "นน.(พันตัน)",
        sortField: "wei_12",
        class: "text-right",
       
        visible: true,
        callback:(v) => {
          if (this.$root.$options.filters.number(v,2) != 0) {
          return '<spen> '+this.$root.$options.filters.number(v,2)+' </span> ';   
          } else{
              '<spen>/span> '
          } 
 
                },
        }, 



        
        {
        name: "cost_12",
        title: "มูลค่า (ลบ.)",
        sortField: "cost_12",
    
        class: "text-right",
        visible: true,
        callback:(v) => {
          if (this.$root.$options.filters.number(v,2) != 0) {
          return '<spen> '+this.$root.$options.filters.number(v,2)+' </span> ';   
          } else{
              '<spen>/span> '
          } 
 
        }

        }

        ]
 
        }








        



    ],







fieldDrawing_endmonth:[
      
       
       {
        name: "data_code",
        title: "กลุ่มผลิตภัณฑ์",
        sortField: "data_code",
        class: "text-left",
        
        visible: true
        },


        {
        name: "mn1",
        title: "ม.ค.",
        sortField: "mn1",
        class: "text-right",
        visible: true,
        groups:[

        {
        name: "qty_1",
        title: "ปริมาณ(พันผืน)",
        sortField: "qty_1",
        class: "text-right",
       
        visible: true,
        callback:(v) => {
          if (this.$root.$options.filters.number(v,2) != 0) {
          return '<spen> '+this.$root.$options.filters.number(v,0)+' </span> ';   
          } else{
              '<spen>/span> '
          } 
 
        },
        },  


        
        {
        name: "wei_1",
        title: "นน.(พันตัน)",
        sortField: "wei_1",
        class: "text-right",
       
        visible: true,
        callback:(v) => {
          if (this.$root.$options.filters.number(v,2) != 0) {
          return '<spen> '+this.$root.$options.filters.number(v,2)+' </span> ';   
          } else{
              '<spen>/span> '
          } 
 
                },
        }, 



        
        {
        name: "cost_1",
        title: "มูลค่า (ลบ.)",
        sortField: "cost_1",
    
        class: "text-right",
        visible: true,
        callback:(v) => {
          if (this.$root.$options.filters.number(v,2) != 0) {
          return '<spen> '+this.$root.$options.filters.number(v,2)+' </span> ';   
          } else{
              '<spen>/span> '
          } 
 
        }

        }

        ]
 
        }
,


{
        name: "mn2",
        title: "ก.พ.",
        sortField: "mn2",
        class: "text-right",
        visible: true,
        groups:[

        {
        name: "qty_2",
        title: "ปริมาณ(พันผืน)",
        sortField: "qty_2",
        class: "text-right",
       
        visible: true,
        callback:(v) => {
          if (this.$root.$options.filters.number(v,2) != 0) {
          return '<spen> '+this.$root.$options.filters.number(v,0)+' </span> ';   
          } else{
              '<spen>/span> '
          } 
 
        },
        },  


        
        {
        name: "wei_2",
        title: "นน.(พันตัน)",
        sortField: "wei_2",
        class: "text-right",
       
        visible: true,
        callback:(v) => {
          if (this.$root.$options.filters.number(v,2) != 0) {
          return '<spen> '+this.$root.$options.filters.number(v,2)+' </span> ';   
          } else{
              '<spen>/span> '
          } 
 
                },
        }, 



        
        {
        name: "cost_2",
        title: "มูลค่า (ลบ.)",
        sortField: "cost_2",
    
        class: "text-right",
        visible: true,
        callback:(v) => {
          if (this.$root.$options.filters.number(v,2) != 0) {
          return '<spen> '+this.$root.$options.filters.number(v,2)+' </span> ';   
          } else{
              '<spen>/span> '
          } 
 
        }

        }

        ]
 
        }
        ,



        
        {
        name: "mn3",
        title: "มี.ค.",
        sortField: "mn3",
        class: "text-right",
        visible: true,
        groups:[

        {
        name: "qty_3",
        title: "ปริมาณ(พันผืน)",
        sortField: "qty_3",
        class: "text-right",
       
        visible: true,
        callback:(v) => {
          if (this.$root.$options.filters.number(v,2) != 0) {
          return '<spen> '+this.$root.$options.filters.number(v,0)+' </span> ';   
          } else{
              '<spen>/span> '
          } 
 
        },
        },  


        
        {
        name: "wei_3",
        title: "นน.(พันตัน)",
        sortField: "wei_3",
        class: "text-right",
       
        visible: true,
        callback:(v) => {
          if (this.$root.$options.filters.number(v,2) != 0) {
          return '<spen> '+this.$root.$options.filters.number(v,2)+' </span> ';   
          } else{
              '<spen>/span> '
          } 
 
                },
        }, 



        
        {
        name: "cost_3",
        title: "มูลค่า (ลบ.)",
        sortField: "cost_3",
    
        class: "text-right",
        visible: true,
        callback:(v) => {
          if (this.$root.$options.filters.number(v,2) != 0) {
          return '<spen> '+this.$root.$options.filters.number(v,2)+' </span> ';   
          } else{
              '<spen>/span> '
          } 
 
        }

        }

        ]
 
        }



,




        {
        name: "mn4",
        title: "เม.ย.",
        sortField: "mn4",
        class: "text-right",
        visible: true,
        groups:[

        {
        name: "qty_4",
        title: "ปริมาณ(พันผืน)",
        sortField: "qty_4",
        class: "text-right",
       
        visible: true,
        callback:(v) => {
          if (this.$root.$options.filters.number(v,2) != 0) {
          return '<spen> '+this.$root.$options.filters.number(v,0)+' </span> ';   
          } else{
              '<spen>/span> '
          } 
 
        },
        },  


        
        {
        name: "wei_4",
        title: "นน.(พันตัน)",
        sortField: "wei_4",
        class: "text-right",
       
        visible: true,
        callback:(v) => {
          if (this.$root.$options.filters.number(v,2) != 0) {
          return '<spen> '+this.$root.$options.filters.number(v,2)+' </span> ';   
          } else{
              '<spen>/span> '
          } 
 
                },
        }, 



        
        {
        name: "cost_4",
        title: "มูลค่า (ลบ.)",
        sortField: "cost_4",
    
        class: "text-right",
        visible: true,
        callback:(v) => {
          if (this.$root.$options.filters.number(v,2) != 0) {
          return '<spen> '+this.$root.$options.filters.number(v,2)+' </span> ';   
          } else{
              '<spen>/span> '
          } 
 
        }

        }

        ]
 
        }








,




        {
        name: "mn5",
        title: "พ.ค.",
        sortField: "mn5",
        class: "text-right",
        visible: true,
        groups:[

        {
        name: "qty_5",
        title: "ปริมาณ(พันผืน)",
        sortField: "qty_5",
        class: "text-right",
       
        visible: true,
        callback:(v) => {
          if (this.$root.$options.filters.number(v,2) != 0) {
          return '<spen> '+this.$root.$options.filters.number(v,0)+' </span> ';   
          } else{
              '<spen>/span> '
          } 
 
        },
        },  


        
        {
        name: "wei_5",
        title: "นน.(พันตัน)",
        sortField: "wei_5",
        class: "text-right",
       
        visible: true,
        callback:(v) => {
          if (this.$root.$options.filters.number(v,2) != 0) {
          return '<spen> '+this.$root.$options.filters.number(v,2)+' </span> ';   
          } else{
              '<spen>/span> '
          } 
 
                },
        }, 



        
        {
        name: "cost_5",
        title: "มูลค่า (ลบ.)",
        sortField: "cost_5",
    
        class: "text-right",
        visible: true,
        callback:(v) => {
          if (this.$root.$options.filters.number(v,2) != 0) {
          return '<spen> '+this.$root.$options.filters.number(v,2)+' </span> ';   
          } else{
              '<spen>/span> '
          } 
 
        }

        }

        ]
 
        }



,




        {
        name: "mn6",
        title: "มิ.ย.",
        sortField: "mn6",
        class: "text-right",
        visible: true,
        groups:[

        {
        name: "qty_6",
        title: "ปริมาณ(พันผืน)",
        sortField: "qty_6",
        class: "text-right",
       
        visible: true,
        callback:(v) => {
          if (this.$root.$options.filters.number(v,2) != 0) {
          return '<spen> '+this.$root.$options.filters.number(v,0)+' </span> ';   
          } else{
              '<spen>/span> '
          } 
 
        },
        },  


        
        {
        name: "wei_6",
        title: "นน.(พันตัน)",
        sortField: "wei_6",
        class: "text-right",
       
        visible: true,
        callback:(v) => {
          if (this.$root.$options.filters.number(v,2) != 0) {
          return '<spen> '+this.$root.$options.filters.number(v,2)+' </span> ';   
          } else{
              '<spen>/span> '
          } 
 
                },
        }, 



        
        {
        name: "cost_6",
        title: "มูลค่า (ลบ.)",
        sortField: "cost_6",
    
        class: "text-right",
        visible: true,
        callback:(v) => {
          if (this.$root.$options.filters.number(v,2) != 0) {
          return '<spen> '+this.$root.$options.filters.number(v,2)+' </span> ';   
          } else{
              '<spen>/span> '
          } 
 
        }

        }

        ]
 
        }



,




        {
        name: "mn7",
        title: "ก.ค.",
        sortField: "mn7",
        class: "text-right",
        visible: true,
        groups:[

        {
        name: "qty_7",
        title: "ปริมาณ(พันผืน)",
        sortField: "qty_7",
        class: "text-right",
       
        visible: true,
        callback:(v) => {
          if (this.$root.$options.filters.number(v,2) != 0) {
          return '<spen> '+this.$root.$options.filters.number(v,0)+' </span> ';   
          } else{
              '<spen>/span> '
          } 
 
        },
        },  


        
        {
        name: "wei_7",
        title: "นน.(พันตัน)",
        sortField: "wei_7",
        class: "text-right",
       
        visible: true,
        callback:(v) => {
          if (this.$root.$options.filters.number(v,2) != 0) {
          return '<spen> '+this.$root.$options.filters.number(v,2)+' </span> ';   
          } else{
              '<spen>/span> '
          } 
 
                },
        }, 



        
        {
        name: "cost_7",
        title: "มูลค่า (ลบ.)",
        sortField: "cost_7",
    
        class: "text-right",
        visible: true,
        callback:(v) => {
          if (this.$root.$options.filters.number(v,2) != 0) {
          return '<spen> '+this.$root.$options.filters.number(v,2)+' </span> ';   
          } else{
              '<spen>/span> '
          } 
 
        }

        }

        ]
 
        }









,




        {
        name: "mn8",
        title: "ส.ค.",
        sortField: "mn8",
        class: "text-right",
        visible: true,
        groups:[

        {
        name: "qty_8",
        title: "ปริมาณ(พันผืน)",
        sortField: "qty_8",
        class: "text-right",
       
        visible: true,
        callback:(v) => {
          if (this.$root.$options.filters.number(v,2) != 0) {
          return '<spen> '+this.$root.$options.filters.number(v,0)+' </span> ';   
          } else{
              '<spen>/span> '
          } 
 
        },
        },  


        
        {
        name: "wei_8",
        title: "นน.(พันตัน)",
        sortField: "wei_8",
        class: "text-right",
       
        visible: true,
        callback:(v) => {
          if (this.$root.$options.filters.number(v,2) != 0) {
          return '<spen> '+this.$root.$options.filters.number(v,2)+' </span> ';   
          } else{
              '<spen>/span> '
          } 
 
                },
        }, 



        
        {
        name: "cost_8",
        title: "มูลค่า (ลบ.)",
        sortField: "cost_8",
    
        class: "text-right",
        visible: true,
        callback:(v) => {
          if (this.$root.$options.filters.number(v,2) != 0) {
          return '<spen> '+this.$root.$options.filters.number(v,2)+' </span> ';   
          } else{
              '<spen>/span> '
          } 
 
        }

        }

        ]
 
        }





,




        {
        name: "mn9",
        title: "ก.ย.",
        sortField: "mn9",
        class: "text-right",
        visible: true,
        groups:[

        {
        name: "qty_9",
        title: "ปริมาณ(พันผืน)",
        sortField: "qty_9",
        class: "text-right",
       
        visible: true,
        callback:(v) => {
          if (this.$root.$options.filters.number(v,2) != 0) {
          return '<spen> '+this.$root.$options.filters.number(v,0)+' </span> ';   
          } else{
              '<spen>/span> '
          } 
 
        },
        },  


        
        {
        name: "wei_9",
        title: "นน.(พันตัน)",
        sortField: "wei_9",
        class: "text-right",
       
        visible: true,
        callback:(v) => {
          if (this.$root.$options.filters.number(v,2) != 0) {
          return '<spen> '+this.$root.$options.filters.number(v,2)+' </span> ';   
          } else{
              '<spen>/span> '
          } 
 
                },
        }, 



        
        {
        name: "cost_9",
        title: "มูลค่า (ลบ.)",
        sortField: "cost_9",
    
        class: "text-right",
        visible: true,
        callback:(v) => {
          if (this.$root.$options.filters.number(v,2) != 0) {
          return '<spen> '+this.$root.$options.filters.number(v,2)+' </span> ';   
          } else{
              '<spen>/span> '
          } 
 
        }

        }

        ]
 
        }







,




        {
        name: "mn10",
        title: "ต.ค.",
        sortField: "mn10",
        class: "text-right",
        visible: true,
        groups:[

        {
        name: "qty_10",
        title: "ปริมาณ(พันผืน)",
        sortField: "qty_10",
        class: "text-right",
       
        visible: true,
        callback:(v) => {
          if (this.$root.$options.filters.number(v,2) != 0) {
          return '<spen> '+this.$root.$options.filters.number(v,0)+' </span> ';   
          } else{
              '<spen>/span> '
          } 
 
        },
        },  


        
        {
        name: "wei_10",
        title: "นน.(พันตัน)",
        sortField: "wei_10",
        class: "text-right",
       
        visible: true,
        callback:(v) => {
          if (this.$root.$options.filters.number(v,2) != 0) {
          return '<spen> '+this.$root.$options.filters.number(v,2)+' </span> ';   
          } else{
              '<spen>/span> '
          } 
 
                },
        }, 



        
        {
        name: "cost_10",
        title: "มูลค่า (ลบ.)",
        sortField: "cost_10",
    
        class: "text-right",
        visible: true,
        callback:(v) => {
          if (this.$root.$options.filters.number(v,2) != 0) {
          return '<spen> '+this.$root.$options.filters.number(v,2)+' </span> ';   
          } else{
              '<spen>/span> '
          } 
 
        }

        }

        ]
 
        }









,




        {
        name: "mn11",
        title: "พ.ย.",
        sortField: "mn11",
        class: "text-right",
        visible: true,
        groups:[

        {
        name: "qty_11",
        title: "ปริมาณ(พันผืน)",
        sortField: "qty_11",
        class: "text-right",
       
        visible: true,
        callback:(v) => {
          if (this.$root.$options.filters.number(v,2) != 0) {
          return '<spen> '+this.$root.$options.filters.number(v,0)+' </span> ';   
          } else{
              '<spen>/span> '
          } 
 
        },
        },  


        
        {
        name: "wei_11",
        title: "นน.(พันตัน)",
        sortField: "wei_11",
        class: "text-right",
       
        visible: true,
        callback:(v) => {
          if (this.$root.$options.filters.number(v,2) != 0) {
          return '<spen> '+this.$root.$options.filters.number(v,2)+' </span> ';   
          } else{
              '<spen>/span> '
          } 
 
                },
        }, 



        
        {
        name: "cost_11",
        title: "มูลค่า (ลบ.)",
        sortField: "cost_11",
    
        class: "text-right",
        visible: true,
        callback:(v) => {
          if (this.$root.$options.filters.number(v,2) != 0) {
          return '<spen> '+this.$root.$options.filters.number(v,2)+' </span> ';   
          } else{
              '<spen>/span> '
          } 
 
        }

        }

        ]
 
        }








,




        {
        name: "mn12",
        title: "ธ.ค.",
        sortField: "mn12",
        class: "text-right",
        visible: true,
        groups:[

        {
        name: "qty_12",
        title: "ปริมาณ(พันผืน)",
        sortField: "qty_12",
        class: "text-right",
       
        visible: true,
        callback:(v) => {
          if (this.$root.$options.filters.number(v,2) != 0) {
          return '<spen> '+this.$root.$options.filters.number(v,0)+' </span> ';   
          } else{
              '<spen>/span> '
          } 
 
        },
        },  


        
        {
        name: "wei_12",
        title: "นน.(พันตัน)",
        sortField: "wei_12",
        class: "text-right",
       
        visible: true,
        callback:(v) => {
          if (this.$root.$options.filters.number(v,2) != 0) {
          return '<spen> '+this.$root.$options.filters.number(v,2)+' </span> ';   
          } else{
              '<spen>/span> '
          } 
 
                },
        }, 



        
        {
        name: "cost_12",
        title: "มูลค่า (ลบ.)",
        sortField: "cost_12",
    
        class: "text-right",
        visible: true,
        callback:(v) => {
          if (this.$root.$options.filters.number(v,2) != 0) {
          return '<spen> '+this.$root.$options.filters.number(v,2)+' </span> ';   
          } else{
              '<spen>/span> '
          } 
 
        }

        }

        ]
 
        }








        



    ],









    iframe: {
    src: "", //DIV HERE #EDITOR
    loaded: false
    },
    dataSelect:[],
    objSelect:{},
    bar:null,

    dataDashboardobj:{},
    dataDashboardobj_ex:{},
    dataDashboardobj_dm:{},

    setdataDashboardobj:[],
    setdataDashboardobj_ex:[],
    setdataDashboardobj_dm:[],


    dataDashboardobjYY:{},
    dataDashboardEXobjYY:{},
    dataDashboardDMobjYY:{},


    dataDashboardAll:[],
    dataDashboardEX:[],
    dataDashboardDM:[],


    };
  },
  // validations: {
  //   form: {
  //     code: { required, minLength: minLength(1) },
      
  //   }
  // },
  methods: {
    Search(e) {

        this.QueryData();
       
       

    },



    


   validator (val) {
      return val ? val.length >= 4 : false
    },

    QueryData(){




      API.reptmdmWarehouseValueGetDataGrid_1({
   
             data:{yr:this.txtSearch,mnt:this.txtSearch_mn,tsale:"",con:"=",rept:"D"},    
   

            callblack: res => {

            let errA = "";
            let _statusA = ""; 
            if (res.length <= 0)                            
            {   
              AlertMessage("error", 'ไม่พบข้อมูลยอดขายประจำเดือน');
              return ;
            }
           
            this.setdataDashboardobj=[]; 
            this.setdataDashboardobj=[]; 

           res.forEach((d,i) => {

 
            this.setdataDashboardobj= []; 
            this.setdataDashboardobj.push(d);


            this.dataDashboardobj = this.setdataDashboardobj[0];

  

            });


  


            }

            
     
        });





      API.reptmdmWarehouseValueGetDataGrid_1({
   
             data:{yr:this.txtSearch,mnt:this.txtSearch_mn,tsale:"1",con:"=",rept:"D"},    
   

            callblack: res => {

            let errA = "";
            let _statusA = ""; 
            if (res.length <= 0)                            
            {   
            
              return ;
            }
           
            this.setdataDashboardobj_ex=[]; 
            this.setdataDashboardobj_ex=[]; 

           res.forEach((d,i) => {

 
            this.setdataDashboardobj_ex= []; 
            this.setdataDashboardobj_ex.push(d);


            this.dataDashboardobj_ex = this.setdataDashboardobj_ex[0];

  

            });


  


            }

            
     
        });


      API.reptmdmWarehouseValueGetDataGrid_1({
   
             data:{yr:this.txtSearch,mnt:this.txtSearch_mn,tsale:"0",con:"=",rept:"D"},    
   

            callblack: res => {

            let errA = "";
            let _statusA = ""; 
            if (res.length <= 0)                            
            {   
            
              return ;
            }
           
            this.setdataDashboardobj_dm=[]; 
            this.setdataDashboardobj_dm=[]; 

           res.forEach((d,i) => {

 
            this.setdataDashboardobj_dm= []; 
            this.setdataDashboardobj_dm.push(d);


            this.dataDashboardobj_dm = this.setdataDashboardobj_dm[0];

  

            });


  


            }

            
     
        });



           





      API.reptmdmWarehouseValueGetDataGrid_1({
   
             data:{yr:this.txtSearch,mnt:this.txtSearch_mn,tsale:"1",con:"<=",rept:"1"},    
   

            callblack: res => {

            let errA = "";
            let _statusA = ""; 
            if (res.length <= 0)                            
            {   
           
              return ;
            }






            
            this.dataDrawingEndEx=[]; 

        
          

           res.forEach((d,i) => {

           
               this.dataDrawingEndEx.push(d);




            });


  


            }

            


   





      
        });





      API.reptmdmWarehouseValueGetDataGrid_1({
   
             data:{yr:this.txtSearch,mnt:this.txtSearch_mn,tsale:"0",con:"<=",rept:"1"},    
   

            callblack: res => {

            let errA = "";
            let _statusA = ""; 
            if (res.length <= 0)                            
            {   
            //  AlertMessage("error", 'ไม่พบข้อมูลยอดขายประจำเดือน');
              return ;
            }

           
            this.dataDrawingEndDm=[]; 

        
          

           res.forEach((d,i) => {

           
               this.dataDrawingEndDm.push(d);




            });


  


            }

            
     
        });


          


           API.reptmdmWarehouseValueGetDataGrid_1({
  
             data:{yr:this.txtSearch,mnt:this.txtSearch_mn,tsale:"1",con:"=",rept:"0"},    
   

            callblack: res => {

            let errA = "";
            let _statusA = ""; 
            if (res.length <= 0)                            
            {   
//AlertMessage("error", 'ไม่พบข้อมูลยอดขายประจำเดือน');
              return ;
            }
           
            this.dataDrawingrecpayEx=[]; 

        
          

           res.forEach((d,i) => {

               
               this.dataDrawingrecpayEx.push(d);




            });


  


            }

            


 
      
        });




      API.reptmdmWarehouseValueGetDataGrid_1({
   
             data:{yr:this.txtSearch,mnt:this.txtSearch_mn,tsale:"0",con:"=",rept:"0"},    
   

            callblack: res => {

            let errA = "";
            let _statusA = ""; 
            if (res.length <= 0)                            
            {   
             // AlertMessage("error", 'ไม่พบข้อมูลยอดขายประจำเดือน');
              return ;
            }






            
            this.dataDrawingrecpayDm=[]; 

        
          

           res.forEach((d,i) => {

           
               this.dataDrawingrecpayDm.push(d);




            });


  


            }

            


   





      
        });











      API.reptmdmWarehouseValueGetDataGrid_2({
   
             data:{yr:this.txtSearch,mnt:this.txtSearch_mn,tsale:"0",con:"<=",rept:"0"},    
   

            callblack: res => {

            let errA = "";
            let _statusA = ""; 
            if (res.length <= 0)                            
            {   
            //  AlertMessage("error", 'ไม่พบข้อมูลยอดขายประจำเดือน');
              return ;
            }



           
            this.dataDrawingMonthDm=[]; 

        
          

           res.forEach((d,i) => {

           
               this.dataDrawingMonthDm.push(d);




            });


  


            }

            


   





      
        });









      API.reptmdmWarehouseValueGetDataGrid_2({
   
             data:{yr:this.txtSearch,mnt:this.txtSearch_mn,tsale:"1",con:"<=",rept:"0"},    
   

            callblack: res => {

            let errA = "";
            let _statusA = ""; 
            if (res.length <= 0)                            
            {   
            //  AlertMessage("error", 'ไม่พบข้อมูลยอดขายประจำเดือน');
              return ;
            }



           
            this.dataDrawingMonthEx=[]; 

        
          

           res.forEach((d,i) => {

           
               this.dataDrawingMonthEx.push(d);




            });



            console.log(this.dataDrawingMonthEX);


  


            }

            


   





      
        });










      //dataDrawingrecpayEx




       
    },
   ongridclick(mode, data, evt){
      this.mode = mode;


      this.dataSelect = ObjCopy(data);
      this.objSelect  = ObjCopy(this.dataSelect[0]);
   
      this.iframe.loaded = false;


  

    let reader = new FileReader();
    reader.onload = function(){
      var dataURL = reader.result;
      var output = document.getElementById('output');
      output.src = dataURL;
    };
     reader.readAsDataURL(file);

   
      
   },

   load(){
    // this.iframe.loaded = true;
   },
    



  }





  

};




</script>



















<!-- <script>
import MainChartExample from './charts/MainChartExample'
import WidgetsDropdown from './widgets/WidgetsDropdown'
import WidgetsBrand from './widgets/WidgetsBrand'



import Vue from 'vue'
 
import { API } from "@/shared/core";
import { GetDateView, AlertMessage, ObjCopy, ObjResetValue, GetLastUpdate,GetDateTimeFormat } from "@/shared/utils";
import { status, configMode } from "@/shared/define";
import { required, minLength } from "vuelidate/lib/validators";
import dic from "@/shared/dic";

import 'webrtc-adapter';


export default {
  name: 'Dashboard',
  components: {
    MainChartExample,
    WidgetsDropdown,
    WidgetsBrand
  },
  data () {
    return {
      selected: 'Month',
      tableItems: [
        {
          avatar: { url: 'img/avatars/1.jpg', status: 'success' },
          user: { name: 'Yiorgos Avraamu', new: true, registered: 'Jan 1, 2015' },
          country: { name: 'USA', flag: 'cif-us' },
          usage: { value: 50, period: 'Jun 11, 2015 - Jul 10, 2015' },
          payment: { name: 'Mastercard', icon: 'cib-cc-mastercard' },
          activity: '10 sec ago'
        },
        {
          avatar: { url: 'img/avatars/2.jpg', status: 'danger' },
          user: { name: 'Avram Tarasios', new: false, registered: 'Jan 1, 2015' },
          country: { name: 'Brazil', flag: 'cif-br' },
          usage: { value: 22, period: 'Jun 11, 2015 - Jul 10, 2015' },
          payment: { name: 'Visa', icon: 'cib-cc-visa' },
          activity: '5 minutes ago'
        },
        {
          avatar: { url: 'img/avatars/3.jpg', status: 'warning' },
          user: { name: 'Quintin Ed', new: true, registered: 'Jan 1, 2015' },
          country: { name: 'India', flag: 'cif-in' },
          usage: { value: 74, period: 'Jun 11, 2015 - Jul 10, 2015' },
          payment: { name: 'Stripe', icon: 'cib-stripe' },
          activity: '1 hour ago'
        },
        {
          avatar: { url: 'img/avatars/4.jpg', status: '' },
          user: { name: 'Enéas Kwadwo', new: true, registered: 'Jan 1, 2015' },
          country: { name: 'France', flag: 'cif-fr' },
          usage: { value: 98, period: 'Jun 11, 2015 - Jul 10, 2015' },
          payment: { name: 'PayPal', icon: 'cib-paypal' },
          activity: 'Last month'
        },
        {
          avatar: { url: 'img/avatars/5.jpg', status: 'success' },
          user: { name: 'Agapetus Tadeáš', new: true, registered: 'Jan 1, 2015' },
          country: { name: 'Spain', flag: 'cif-es' },
          usage: { value: 22, period: 'Jun 11, 2015 - Jul 10, 2015' },
          payment: { name: 'Google Wallet', icon: 'cib-google-pay' },
          activity: 'Last week'
        },
        {
          avatar: { url: 'img/avatars/6.jpg', status: 'danger' },
          user: { name: 'Friderik Dávid', new: true, registered: 'Jan 1, 2015' },
          country: { name: 'Poland', flag: 'cif-pl' },
          usage: { value: 43, period: 'Jun 11, 2015 - Jul 10, 2015' },
          payment: { name: 'Amex', icon: 'cib-cc-amex' },
          activity: 'Last week'
        }
      ],
      tableFields: [
        { key: 'avatar', label: '', _classes: 'text-center' },
        { key: 'user' },
        { key: 'country', _classes: 'text-center' },
        { key: 'usage' },
        { key: 'payment', label: 'Payment method', _classes: 'text-center' },
        { key: 'activity' },
      ]
    }
  },
  methods: {
    color (value) {
      let $color
      if (value <= 25) {
        $color = 'info'
      } else if (value > 25 && value <= 50) {
        $color = 'success'
      } else if (value > 50 && value <= 75) {
        $color = 'warning'
      } else if (value > 75 && value <= 100) {
        $color = 'danger'
      }
      return $color
    }
  }
}
</script>  -->








<style>





.xxx {

   width:350px;
}


.app-body .main {

    background-image: linear-gradient(rgba(234, 242, 248  , 0.8), #F2F3F4); 
}


.card_body {
  
    background: linear-gradient(to bottom right, rgba(232, 246, 243    , 1), rgba(234, 250, 241    , 1)); 
    border: 1px solid rgb(214, 219, 223   ) ;




}

.card_body2 {
  
   background: linear-gradient(to bottom right, rgba(253, 237, 236     , 1), rgba(253, 237, 236     , 1)); 
   
   border: 1px solid rgb(214, 219, 223  );
   
}


.form-row > .col, .form-row > [class*="col-"] {

    padding-right: 0px;
    padding-left: 5 px;
    text-align: right;


}
.btn-block {
    display: block;
    width: 100%;
    height: 50px;
    color: #154360;
   
    background: linear-gradient(to bottom right, rgba(214, 234, 248      , 1), rgba(235, 245, 251   , 1));
     border-color: rgba(233, 247, 239    , 1);
}


.wrapper {
  padding: 3rem 1.5rem;
  max-width: 900px;
  margin: 0 auto;
}
.st0{fill:#D7DDE5;}
.st1, .knob_data {fill:#2EAB6F; color:#2EAB6F;}

.graph {
  width: 80%;
  display: table;
  margin: 0 auto 0;
  position: relative;
  text-align: center;
  
 
  
}

.graph_media {
  max-height: 12rem;
}

.graph_data, .knob_data {
  font-size: 2rem;
}

.graph_data {
  display: table-cell;
  vertical-align: middle;
}

.card_division {
  border-top: 1px solid #D7DDE5;
  padding: 0;
}


.card_full {
  max-height: none;
  height: auto;
}

.card_more_button {
  display: block;
  text-align: center;
  font-size: 1.5rem;
  line-height: 1.1;
  transition: transform .12s ease-out;
}

.card_more_button {
  border-radius: 0;
  border-left: 0;
  border-right: 0;
  border-bottom-color: #D7DDE5;
  border-top-color: #D7DDE5;
  background-color: #fff;
}

.card_more_button:after {
  	content: '\e629';
}

.card_more_content {
  display: none;
  font-size: .865rem;
  line-height: 1.5;
  padding: .75rem;
}

.stats {
  width: 100%;
  margin-bottom: -2px;
  height: 5.75rem;
  display: table;
}

.stats_row > .stats_item {
  border-left: 1px solid #D7DDE5;
  padding: .75rem 1.5rem;
  overflow: hidden;
  display: table-cell;
  vertical-align: middle;
  height: 100%;
}

.stats_row > .stats_item:first-child {
  border-left: 0;
}

.stats_row:after {
  content: ' ';
  display: table;
  clear: both;
}

.stats_item_number {
  white-space: nowrap;
  font-size: 2.25rem;
  line-height: 2.5rem;
  
  /* &:before {
    display: none;
  } */
}

.txt_success {
  color: #000 ;
  /* font-size: 40px; */
font-weight:bold;
}

.txt_error {
  color: #000 ;
  /* font-size: 40px; */
  font-weight:bold;
}

.txt_warn {
  color: #DDC728;
}

.txt_smaller {
  font-size: .75em;      
}

.flipY {
  transform: scaleY(-1);
  border-bottom-color: #fff;
}

.txt_faded {
  opacity: .65;
}

.fa-navicon:before, .fa-reorder:before, .fa-bars:before {
    content: "";
}

.fa-unsorted:before, .fa-sort:before {
    content: "";
}




.panel:nth-child(n){
  box-sizing: border-box;
  position: relative;
  display: inline-block;
  width: 280px;
  height: 160px;
  margin: 5px;
  font-size: 18px;
  font-weight: 600;
  color: #fff;
  overflow: hidden;
  border-radius: 5px;

}


.panel {
  box-sizing: border-box;
  position: relative;
  display: inline-block;
  width: 280px;
  height: 160px;
  margin: 5px;
  font-size: 32px;
  font-weight: 600;
  color: #fff;
  overflow: hidden;
  border-radius: 8px;

}

.panel a {
  position: relative;
  display: block;
  padding: 12px 25px 25px 25px;
  color: #fff;
  text-decoration: none;
  z-index: 2;
}
.panel a span {
    display: block;
    font-size: 96px;
    font-weight: 700;
    line-height: 96px;

 
  
}

.panel a span:nth-child(n)  {

    font-size: 40px;
    font-weight: 700;

 
}


.panel:after {
  position: absolute;
  font-family: FontAwesome;
  color:#0B5345;
  z-index: 1;
  transition: all .5s;
  line-height: normal;
}
.panel.post {
  background-color: #0B5345;
  width: 100%;
  
}
.panel.post:after {
  content: "\f024";
  font-size: 100px;
  color: #117A65;
  top: 30px;
  right: 35px;
  /* -webkit-transform: rotate(45deg);
  transform: rotate(45deg); */

  
}
.panel.post:hover:after {
  top: 8px;
}
.panel.comment {
  background-color: #1B4F72;
  width: 100%;
}
.panel.comment:after {
  content: "\f155";
  font-size: 100px;
  color: #1F618D;
  top: 30px;
  right: 35px;
}
.panel.comment:hover:after {
  top: -5px;
}
.panel.page {
  background-color: #641E16;
  width: 100%;
}
.panel.page:after {
  content: "\f080";
  font-size:90px;
  color: #922B21;
  top: 30px;
  right: 35px;
}
.panel.page:hover:after {
  top: 24px;
}


.panel.user {
  background-color: #7D6608;
  width: 100%;
}


.panel.user:after {
  content: "\f091";
  font-size: 100px;
  color: #9C640C;
  top: 30px;
  right: 35px;
}
.panel.user:hover:after {
  top: 7px;
}
.panel:hover:after {
  transition: all .5s;
}


.callout-info {
    border-left-color: #63c2de;
}
.callout {
    position: relative;
    padding: 0 1rem;
    margin: 1rem 0;
    /* border-left: 4px solid #c8ced3; */
    border-radius: .25rem;
}

.callout-danger {
    border-left-color: #f86c6b;
}
.callout-warning {
    border-left-color: #ffc107;
}.callout-success {
    border-left-color: #4dbd74;
}



.card-body {
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    padding: 1.25rem;
     border: 0px solid;
}


 




.dashboard {

       font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji"
    , "Segoe UI Symbol", "Noto Color Emoji"; 
    font-size: 0.875rem;
    color:#566573;
}
.dashboard .all-card {
  padding: 30px;
}
.dashboard .card {
  border-radius: 6px;
  border: 1px solid rgba(0, 0, 0, 0.05);
  background-color: #fff;
  margin-bottom: 30px;
  box-shadow: 0 0.15rem 1.75rem 0 rgba(58, 59, 69, 0.15);
}

.dashboard .card .border-left-1 {
  border-left: 4px solid #2980B9;
}

.dashboard .card .border-left-2 {
  border-left: 4px solid #C0392B;
}

.dashboard .card .border-left-3 {
  border-left: 4px solid #16A085;
}

.dashboard .card .border-left-4 {
  border-left: 4px solid #884EA0;
}



.dashboard .card .border-left-pink {
  border-left: 4px solid #f5365c;
}
.dashboard .card .border-left-orange {
  border-left: 4px solid #fb6340;
}
.dashboard .card .border-left-yellow {
  border-left: 4px solid #ffd600;
}
.dashboard .card .border-left-blue {
  border-left: 4px solid #11cdef;
}
.dashboard .card .text-title {
  color: #8898aa;
  font-weight: 500;
  font-size: 14px;
}
.dashboard .card .text-amount {
  font-weight: 600;
}
.dashboard .card .icon-shape {
  border-radius: 50%;
  color: #fff;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  box-shadow: 0 0 2rem 0 rgba(136, 152, 170, 0.15) !important;
}
.dashboard .card .icon-area {
  background: #f5365c;
}
.dashboard .card .icon-pie {
  background: #fb6340;
}
.dashboard .card .icon-user {
  background: #ffd600;
}
.dashboard .card .icon-percent {
  background: #11cdef;
}

.dashboard .card .icon-sus {
  background: #17A589;
}

.dashboard .chart {
  padding: 30px;
}
@media (min-width: 992px) and (max-width: 1300px) {
  .dashboard .card .text-title {
    font-size: 12px;
  }
  .dashboard .card .text-amount {
    font-size: 18px;
  }
  .dashboard .card .icon-shape {
    width: 35px;
    height: 35px;
    font-size: 20px;
  }
}
@media (max-width: 360px) {


  .icon-shape {
    display: none !important;
  }
 
.xxx {

   width:250px;
}


}


.task-row {

  border-bottom: 1px solid #ddd;
}
.task-row:last-child {
  border-bottom: 1px solid transparent;
}
.priority {
  width: 15%;
  float: left;
  line-height: 34px;
}
.priority a {
  padding: 5px;
}
.priority.High a {
  background: #f88;
}
.priority.Normal a {
  background: #8f8;
}
.priority.Low a {
  background: #88f;
}
.task-title {
  width: 45%;
  float: left;
}
.task-title h4 {
  color: #555;
  font-weight: bold;
}
.task-title h5 {
  color: #999;
}
.task-status {
  width: 100%;
  float: left;

}
.status-bar {
  float: left;
  height: 20px;
  width: 90%;
 
}
.status-track {
  position: relative;
  width: 100%;
  height: 20px;
  background: #ebebeb;
  border-radius: 3px;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
}



.status-fill {
  position: relative;
  background: #85C1E9;
  border-radius: 3px;
  height: 20px;
  width: 50%;
  /*default*/
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
}

.status-fill-bad {
  position: relative;
  background: #FADBD8;
  border-radius: 3px;
  height: 20px;
  width: 50%;
  /*default*/
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
}
.status-fill-bad2good {
  position: relative;
  background: #FAD7A0;
  border-radius: 3px;
  height: 20px;
  width: 50%;
  /*default*/
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
}

.status-fill-good {
  position: relative;
  background: #D5F5E3;
  border-radius: 3px;
  height: 20px;
  width: 50%;
  /*default*/
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
}


.status-text {
  position: absolute;
  left: 50%;
  margin-left: -20px;
  /* sketchy center-it: 50% -->  then 1/2 width <--  */
  color: #656565;
  text-align: center;
  font-family: "Lato", "Verdana", sans-serif;
  font-size: 12px;
  line-height: 20px;
  font-weight: bold;
  z-index: 100;
  display: inline-block;
  width: 50px;
}
.task-time {
  width: 20%;
  float: left;
  height: 34px;
  line-height: 34px;
}
.task-time a {
  font-size: 12px;
  color: #555;
  font-weight: bold;
}
.task-time small {
  color: #999;
  font-weight: normal;
}
/* Tooltips */
.tooltip {
  display: inline;
  position: relative;
}
.tooltip:hover:after {
  background: #333;
  background: rgba(0, 0, 0, 0.8);
  border-radius: 5px;
  bottom: 26px;
  color: #fff;
  content: attr(tooltip);
  left: 20%;
  padding: 5px 15px;
  position: absolute;
  z-index: 98;
  width: 220px;
}
.tooltip:hover:before {
  border: solid;
  border-color: #333 transparent;
  border-width: 6px 6px 0 6px;
  bottom: 20px;
  content: "";
  left: 50%;
  position: absolute;
  z-index: 99;
}





.tabset > input[type="radio"] {
  position: absolute;
  left: -200vw;
}




.tabset .tab-panel {
  display: none;
}

.tabset > input:first-child:checked ~ .tab-panels > .tab-panel:first-child,
.tabset > input:nth-child(3):checked ~ .tab-panels > .tab-panel:nth-child(2),
.tabset > input:nth-child(5):checked ~ .tab-panels > .tab-panel:nth-child(3),
.tabset > input:nth-child(7):checked ~ .tab-panels > .tab-panel:nth-child(4),
.tabset > input:nth-child(9):checked ~ .tab-panels > .tab-panel:nth-child(5),
.tabset > input:nth-child(11):checked ~ .tab-panels > .tab-panel:nth-child(6) {
  display: block;
}

/*
 Styling
*/


.tabset > label {
  position: relative;
  display: inline-block;
  padding: 15px 15px 25px;
  border: 1px solid transparent;
  border-bottom: 0;
  cursor: pointer;
  font-weight: 600;
}

.tabset > label::after {
  content: "";
  position: absolute;
  left: 15px;
  bottom: 10px;
  width: 22px;
  height: 4px;
  background: #8d8d8d;
}

.tabset > label:hover,
.tabset > input:focus + label {
  color: #06c;
}

.tabset > label:hover::after,
.tabset > input:focus + label::after,
.tabset > input:checked + label::after {
  background: #06c;
}

.tabset > input:checked + label {
  border-color: #ccc;
  border-bottom: 1px solid #fff;
  margin-bottom: -1px;
}

.tab-panel {
  /* padding: 30px 0; */
  border-top: 1px solid #ccc;
}

/*
 Demo purposes only
*/
*,
*:before,
*:after {
  box-sizing: border-box;
}


.tabset {
  max-width: 100%;
}





.switch-input {

  display: none;
  width: 100px;
  position:absolute;
  
  
}
.switch-label {
  position: relative;
  display: inline-block;

  cursor: pointer;
  font-weight: 500;
  text-align: left;
  margin: 16px;
  padding: 16px 0 16px 44px;
}
.switch-label:before, .switch-label:after {
  content: "";
  position: absolute;
  margin: 0;
  outline: 0;
  top: 50%;
  -ms-transform: translate(0, -50%);
  -webkit-transform: translate(0, -50%);
  transform: translate(0, -50%);
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
}
.switch-label:before {
  left: 1px;
  width: 34px;
  height: 14px;
  background-color: #3498DB;
  border-radius: 8px;
}
.switch-label:after {
  left: 0;
  width: 20px;
  height: 20px;
  background-color: #3498DB;
 
  border-radius: 50%;
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.14), 0 2px 2px 0 rgba(0, 0, 0, 0.098), 0 1px 5px 0 rgba(0, 0, 0, 0.084);
}
.switch-label .toggle--on {
   display: none;
   width: 100px;
  
}
.switch-label .toggle--off {
  display: inline-block;
   width: 100px;
}





.switch-input:checked + .switch-label:before {
  background-color: #A5D6A7;
}
.switch-input:checked + .switch-label:after {
  background-color: #4CAF50;
  -ms-transform: translate(80%, -50%);
  -webkit-transform: translate(80%, -50%);
  transform: translate(80%, -50%);
}
.switch-input:checked + .switch-label .toggle--on {
  display: inline-block;
}
.switch-input:checked + .switch-label .toggle--off {
  display: none;
}



.fixed-bottom-bar {
  height: 40px;
  z-index: 1020;
  position: fixed;

  width:250px;
  bottom:10px;
  right: 10px;

  border-radius: 5px;

  padding-top: 5px;
  background-color: #fff;
   box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.14), 0 2px 2px 0 rgba(0, 0, 0, 0.098), 0 1px 5px 0 rgba(0, 0, 0, 0.084);


    
}



.fixed-bottom-bar-in {

  position: absolute; top: 130%; left: 75%; height: 100px; margin-top: -50px; width: 250px; margin-left: -125px;

}


	@media screen and (max-width: 600px) { 


    .dashboard .all-card {
     padding: 0px; 
     }
     .navbar-brand {


         padding: 0px; 
      }

 .graph_data, .knob_data {
    font-size: 1.3rem;


    
}


.fixed-bottom-bar {
  height: 40px;
  z-index: 1020;
  position: fixed;

  width: 100%;
  bottom:0;
  right: 0;

  padding-top: 5px;
  background-color: #fff;
  
  }
  
  
  
.fixed-bottom-bar-in {

  position: absolute; top: 130%; left: 35%; height: 100px; margin-top: -50px; width: 250px; margin-left: -125px;
}


.card-header {
    margin-bottom: 0;
    border-bottom: 0px solid;
    background: -webkit-gradient(linear, left top, right bottom, from(#f4f6f6), to(#e5e8e8));
    background: linear-gradient(to bottom right, #f4f6f6, #e5e8e8);
    border-color: #d8dbe0;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 10px;
    padding-right: 10px;
    background: #A9CCE3;
    border-top: 2px solid #AEB6BF;

   
   
}
  
  }









  





.switch input { 
    display:none;
}
.switch {
  
    display:inline-block;
    width:50px;
    height:14px;
    margin:5px;
    margin-left: 25px;
    -webkit-transform:translateY(50%);
    transform:translateY(50%);
    position:relative;
}

.slider {
    position:absolute;
    top:0px;
    bottom:0;
    left:0;
    right:0;
    border-radius:20px;
    background: #B7B7B7;
    cursor:pointer;
    border:4px solid transparent;
    overflow:visible;
    -webkit-transition:.4s;
    transition:.4s;
}
.slider:before {
    position:absolute;
    content:"";
    width:22px;
    height:22px;
    background:#2980B9;
    border-radius:100px;
    top: -8px;
    -webkit-transform:translateX(-0px);
    transform:translateX(-0px);
    -webkit-transition:.4s;
    transition:.4s;
    -webkit-box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.23);
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.23);
}

.switch input:checked + .slider:before {
    -webkit-transform:translateX(20px);
    transform:translateX(20px);
    background:#2980B9;
}
.off{
    position: absolute;
    left: -60px;
    top: -5px;
    color: #154360;
  -webkit-transition: all ease .4s;
    transition: all ease .4s;
}
.on{
    position: absolute;
    right: -70px;
    top: -5px;
     color: #d3d3d3;
    font-family: 'roboto_light',sans-serif;
    -webkit-transition: all ease .4s;
    transition: all ease .4s;
}
.switch input:checked ~ .off {
    color: #d3d3d3;
    
    top: -5px;
}

.switch input:checked ~ .on {
    color: #154360;
    
}

.card-header {
    margin-bottom: 0;    
    border-bottom: 0 solid;
    background: -webkit-gradient(linear,left top,right bottom,from(#f4f6f6),to(#e5e8e8));
    background: linear-gradient(to bottom right,#f4f6f6,#e5e8e8);
    border-color: #d8dbe0;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 10px;
    padding-right: 10px;
    background: #fff;
  
}



.box11 {
  background-color: #D7BDE2;
  padding: 15px;
  overflow: hidden;

    -webkit-box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
       -moz-box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
            box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;

   color:#4A235A;

   	
}



.box11 .info {
  text-align: center;   
  width: auto;

}

 .box11 .info p {color:#BBB}




.box111 {
  background-color: #EBDEF0;
  padding: 15px;
  overflow: hidden;

    -webkit-box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
       -moz-box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
            box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;

   color:#4A235A
}


.box111 .info {
  text-align: center;   
  width: auto;

}

 .box111 .info p {color:#BBB}








.box22 {
  background-color: #D4EFDF;
  padding: 15px;
  overflow: hidden;

    -webkit-box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
       -moz-box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
            box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;

   color:#145A32
}


.box22 .info {
  text-align: center;   
  width: auto;

}

 .box22 .info p {color:#BBB}




.box222 {
  background-color: #E9F7EF;
  padding: 15px;
  overflow: hidden;

    -webkit-box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
       -moz-box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
            box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;

   color:#145A32
}


.box222 .info {
  text-align: center;   
  width: auto;

}

 .box222 .info p {color:#BBB}





.box33 {
  background-color: #FAE5D3;
  padding: 15px;
  overflow: hidden;

    -webkit-box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
       -moz-box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
            box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;

   color:#6E2C00
}


 
.box33 .info {
  text-align: center;   
  width: auto;

}

 .box33 .info p {color:#BBB}




.box333 {
  background-color: #FDF2E9;
  padding: 15px;
  overflow: hidden;

    -webkit-box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
       -moz-box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
            box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;

   color:#6E2C00
}


.box333 .info {
  text-align: center;   
  width: auto;

}

 .box333 .info p {color:#BBB}











.box44 {
  background-color: #E6B0AA;
  padding: 15px;
  overflow: hidden;

    -webkit-box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
       -moz-box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
            box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;

   color:#641E16
}


 
.box44 .info {
  text-align: center;   
  width: auto;

}

 .box44 .info p {color:#BBB}




.box444 {
  background-color: #F2D7D5;
  padding: 15px;
  overflow: hidden;

    -webkit-box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
       -moz-box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
            box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;

   color:#641E16
}


.box444 .info {
  text-align: center;   
  width: auto;

}

 .box444 .info p {color:#BBB}






.horizontal-scroll {
  overflow-x: scroll;
  max-width: 100%;
  position: relative;
}

/* Arrow icon - not great */
.horizontal-scroll::after {
  
  color: #333;
  background-color: #ccc;
  font-weight: bold;
  text-indent: 15px;
  position: absolute;
  top: calc(50% - 30px);
  right: 0;
  height: 60px;
  width: 30px;
  line-height: 58px;
  font-size:18px;
  border-radius: 60px 0 0 60px;
}
.horizontal-scroll-off::after {
  content: '';
  background-color: transparent;
}

 

 .pl-3, .px-3 {
     padding-left: 0 !important; 
}

.pr-3, .px-3 {
     padding-right: 0 !important; 
}

.speech-bubbleex {
	position: relative;
  background: #F2D7D5;
  Color:#641E16;
  border-radius: .4em;
  padding-left:2px ; 
   padding-right:2px ; 
}



.speech-bubbledm {
	position: relative;
  background: #D4EFDF;
  Color:#145A32;
  border-radius: .4em;
  padding-left:2px ; 
   padding-right:2px ; 
}

.table 
{
   max-height: 350px;


}






</style>





