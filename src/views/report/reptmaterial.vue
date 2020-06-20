<template>
  <!-- <WidgetsBrand/> -->

  <div class="animated fadeIn">

<div v-if="show_err">
<b-row>
<div>
  <b-alert show variant="danger">
    <h4 class="alert-heading">ผิดพลาด!</h4>
    <p>
      <b> ตรวจพบข้อมูลเม็ดวัตุดิบที่ไม่มีรหัสกลุ่มวัตถุดิบ โปรแกรมไม่สามารถแสดงรายงาน สรุปปริมาณและมูลค่าคงเหลือได้ กรุณาติดต่อฝ่ายบัญชี ! </b>
    </p>
    <hr>
   
   <div v-html="txt_PB"></div>

   
  </b-alert>
</div>
</b-row>
</div>

    
    <b-row v-if="show">
      <b-col lg="12">
        <transition name="fade">
          <b-card no-body >
            <div slot="header">
              <h5><i class="fa fa-television" aria-hidden="true"></i> รายงาน สรุปปริมาณและมูลค่าคงเหลือวัตถุดิบแยกตามกลุ่มวัตถุดิบ</h5>
              <div class="card-header-actions">
                <b-link class="card-header-action btn-minimize" v-b-toggle.collapse1>
                  <i class="icon-arrow-up"></i>
                </b-link>
              </div>
            </div>
            <b-collapse id="collapse1" visible>


              <b-card-body>
                <b-card class="text-center bg-light">
                  <b-container fluid>



                      <b-container class="bv-example-row">
                        <b-row>
                          <b-col sm="4">
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
                          <b-col sm="4">


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
                          <b-col sm="4">
                             <b-button @click="Search" size="lg" variant="outline-info" squared    >แสดงข้อมูล</b-button>
                          </b-col>
                        </b-row>
                      </b-container>

                  </b-container>
                </b-card>

                   
                      
                                  <i class="fa fa-television" aria-hidden="true"></i>
                                  ปริมาณและมูลค่าคงเหลือวัตถุดิบ
                                      <grid
                                        ref="DGV1"
                                        :fields="F_DGV1"
                                        :name="name"
                                        :btnGrid="false"
                                        :btnAdd="false"
                                        :btnClone="false"
                                        :btnView="false"
                                        :btnEdit="false"
                                        :btnDelete="false"
                                        :o_col_checkbox="false"
                                        :trackBy="'rowID'"
                                        :data="dataDGV1"
                                        :o_navfooter_visible="false"
                                      ></grid>
           
                 


              </b-card-body>

         
              
            </b-collapse>
          </b-card>
       </transition>
      </b-col>
    </b-row>


     <div class="animated fadeIn" v-if="show">
      <b-row >
        <b-col lg="12">
          <transition name="fade">
            <b-card no-body >
              <div slot="header">
                <i class="fa fa-bar-chart" aria-hidden="true"></i> สัดส่วนปริมาณการใช้และปริมาณคงเหลือเม็ดวัตถุดิบสะสม
                <div class="card-header-actions">
                  <b-link class="card-header-action btn-minimize" v-b-toggle.collapse3>
                    <i class="icon-arrow-up"></i>
                  </b-link>
                </div>
              </div>
              <b-collapse id="collapse3" visible>
                <b-card-body>
                 
                <b-row>

      <b-col xs="4">
          <b-card border-variant="secondary" bg-variant="light" header="ปริมาณรับเข้าสะสม" align="center">
            
        <b-card-text>
          
          <div class="chart-container" id = "DVg1" >
                      <canvas height="250" id="graph1" ></canvas>
                    </div>

        </b-card-text>
      </b-card>
      </b-col>

 <b-col xs="4">
          <b-card border-variant="secondary"  bg-variant="light" header="ปริมาณจ่ายออกสะสม" align="center">
        <b-card-text>
          <div style>
                      <canvas height="250" id="graph2"></canvas>
                    </div>

        </b-card-text>
      </b-card>
      </b-col>

 <b-col  xs="4">
          <b-card border-variant="secondary" bg-variant="light" header="ปริมาณคงเหลือ" align="center">
        <b-card-text>
          <div style>
                      <canvas height="250" id="graph3"></canvas>
                    </div>

        </b-card-text>
      </b-card>
      </b-col>
                  
                  
                </b-row>
               
               
                </b-card-body>
              </b-collapse>
            </b-card>
          </transition>
        </b-col>
      </b-row>
    </div>




     <div class="animated fadeIn" v-if="show">
      <b-row>
        <b-col lg="12">
          <transition name="fade">
            <b-card no-body >
              <div slot="header">
                <i class="fa fa-bar-chart" aria-hidden="true"></i> แนวโน้มราคาวัตถุดิบย้อนหลัง 1 ปี
                <div class="card-header-actions">
                  <b-link class="card-header-action btn-minimize" v-b-toggle.collapse4>
                    <i class="icon-arrow-up"></i>
                  </b-link>
                </div>
              </div>
              <b-collapse id="collapse4" visible>
                <b-card-body>
                  
                 
                              <b-row>

                                <b-col sm="12">  

                                <div >
                                        <b-card border-variant="secondary" bg-variant="light" header="กราฟแนวโน้มราคาวัตถุดิบย้อนหลัง 1 ปี" align="center">
                                          <b-card-text>
                                            
                                                        <canvas height = 100; id="graph4"></canvas>
                                           

                                          </b-card-text>
                                        </b-card>
                              </div>
         
                                </b-col>
                               

                              </b-row>
               
               
               
                </b-card-body>
              </b-collapse>
            </b-card>
          </transition>
        </b-col>
      </b-row>
    </div>

    

    <div class="animated fadeIn" v-if="show">
      <b-row>
        <b-col lg="12">
          <transition name="fade">
            <b-card no-body >
              <div slot="header">
                <i class="fa fa-bar-chart" aria-hidden="true"></i> ราคาวัตถุดิบ (บาท/กก.) 5 รายการแรก(ตามปริมาณคงเหลือ)
                <div class="card-header-actions">
                  <b-link class="card-header-action btn-minimize" v-b-toggle.collapse5>
                    <i class="icon-arrow-up"></i>
                  </b-link>
                </div>
              </div>
              <b-collapse id="collapse5" visible>
                <b-card-body>
                              <b-row>
                                <b-col sm="8">
                                  <grid
                                                      ref="DGV2"
                                                      :fields="F_DGV2"
                                                      :name="name"
                                                      :btnGrid="false"
                                                      :btnAdd="false"
                                                      :btnClone="false"
                                                      :btnView="false"
                                                      :btnEdit="false"
                                                      :btnDelete="false"
                                                      :o_col_checkbox="false"
                                                      :trackBy="'rowID'"
                                                      :data="dataDGV2"
                                                      :o_navfooter_visible="false"
                                                    ></grid>  
                               </b-col>
                              </b-row>
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
import Vue from "vue";

import { API } from "@/shared/core";
import {
  GetDateView,
  AlertMessage,
  ObjCopy,
  ObjResetValue,
  GetLastUpdate,
  GetDateTimeFormat
} from "@/shared/utils";
import { status, configMode } from "@/shared/define";
import { required, minLength } from "vuelidate/lib/validators";
import dic from "@/shared/dic";
require('chartjs-plugin-labels');
import "webrtc-adapter";
import Chart from "chart.js";

var i;
var t;
var  H2 = new Array();

var myChart1 = null;
var myChart2 = null;
var myChart3 = null;
var bar= null;

export default {
  i18n: {
    messages: {
      en: {
        dic: {
          codevalid: "This is a required field and must have {0} characters."
        }
      },
      th: { dic: { codevalid: "จำเป็นต้องมี {0} ตัวอักษร" } }
    },
    sharedMessages: dic
  },

  name: "rptDrawing",

  created: function() {
    const self = this;
  },

  data() {
    return {
      selected: [],
      show: true,
      horizontal: { label: "col-3", input: "col-6" },
      name: "rptDrawing",
      selectedOption: ["some value", "another value"],
      chktyperept: false,
      formCollapsed: true,
      formCollapsed2: true,
      formCollapsed3: true,
      formCollapsed4: true,
      checkboxNames: [
        "Checkboxes",
        "Inline Checkboxes",
        "Checkboxes - custom",
        "Inline Checkboxes - custom"
      ],
      radioNames: [
        "Radios",
        "Inline Radios",
        "Radios - custom",
        "Inline Radios - custom"
      ],

      seen: true,
      token: null,
      formdate: new Date(),
      formtime: "",
      time: "",
      date: "",
      txt_PB:"",
      modal: false,
      mode: "Add",
      errMsg: "",
      avSearch: false,
      show_err : false,
      txtSearch: "",
      txtSearch_mn: "",
     // name: "rptDrawing",
      drawingCd: "",
      perPage: 25,

      startRow: 0,
      stopRow: 25,

      iframe: {
        src: "", //DIV HERE #EDITOR
        loaded: false
      },
      iSeleY: [],
      iMun: [],
      dataDGV1: [],
      dataDGV2: [],
      dataDGV3: [],
      objSelect: {},
      F_DGV1: [  {
                        name: "matgrprpcd",
                        title: "รหัสกลุ่มวัตถุดิบ",
                        sortField: "",
                        class: "text-left",
                        visible: true
                      },
                      {
                        name: "matgrprpname",
                        title: "รายละเอียด",
                        sortField: "",
                        class: "text-left",
                        visible: true
                      },
                      {
                        name: "mat_price",
                        title: "ราคาวัตถุดิบ(บาท/กก.)",
                        sortField: "",
                        class: "text-right",
                        visible: true,
                        callback:(v) => {
                            if (this.$root.$options.filters.number(v,2) != 0) {
                            return '<spen> '+this.$root.$options.filters.number(v,2)+' </span> ';   
                            } else{
                                '<spen>/span> '
                            } 
                  
                          }
                      },
                      {
                        name: "prd_rec_wei",
                        title: "รับเข้า(ตัน)",
                        sortField: "",
                        class: "text-right",
                        visible: true,
                        callback:(v) => {
                            if (this.$root.$options.filters.number(v,2) != 0) {
                            return '<spen> '+this.$root.$options.filters.number(v,2)+' </span> ';   
                            } else{
                                '<spen>/span> '
                            } 
                  
                          }
                      },
                      {
                        name: "prd_pay_wei",
                        title: "เบิกใช้(ตัน)",
                        sortField: "",
                        class: "text-right",
                        visible: true,
                        callback:(v) => {
                            if (this.$root.$options.filters.number(v,2) != 0) {
                            return '<spen> '+this.$root.$options.filters.number(v,2)+' </span> ';   
                            } else{
                                '<spen>/span> '
                            } 
                  
                          }
                      },
                      {
                        name: "end_wei",
                        title: "คงเหลือ(ตัน)",
                        sortField: "",
                        class: "text-right",
                        visible: true,
                        callback:(v) => {
                            if (this.$root.$options.filters.number(v,2) != 0) {
                            return '<spen> '+this.$root.$options.filters.number(v,2)+' </span> ';   
                            } else{
                                '<spen>/span> '
                            } 
                  
                          }
                      },
                      {
                        name: "end_cost",
                        title: "มูลค่าคงเหลือ(ลบ.)",
                        sortField: "",
                        class: "text-right",
                        visible: true,
                        callback:(v) => {
                            if (this.$root.$options.filters.number(v,2) != 0) {
                            return '<spen> '+this.$root.$options.filters.number(v,2)+' </span> ';   
                            } else{
                                '<spen>/span> '
                            } 
                  
                          }
                      },
                      {
                        name: "rec_wei_cum",
                        title: "รับเข้าสะสมตลอดปี(ตัน)",
                        sortField: "",
                        class: "text-right",
                        visible: true,
                        callback:(v) => {
                            if (this.$root.$options.filters.number(v,2) != 0) {
                            return '<spen> '+this.$root.$options.filters.number(v,2)+' </span> ';   
                            } else{
                                '<spen>/span> '
                            } 
                  
                          }
                      },
                      {
                        name: "pay_wei_cum",
                        title: "เบิกใช้สะสมตลอดปี(ตัน)",
                        sortField: "",
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
              ],
         F_DGV2: [],
      
    };
  },

  methods: {
    Search(e) {
       
      this.QueryData();
    },

    QueryData() {
      
      var Tc = 0;
      var H1 = new Array();
     
      var dataH1 = new Array();
      var ChartCul_H1 = new Array();
      var ChartDATA_H1_1 = new Array();
      var ChartDATA_H1_2 = new Array();
      var ChartDATA_H1_3 = new Array();
     
       var Charttxt_H1 = new Array();

       var C_COLOR = new Array();
       var C_NAME_C = new Array();

    
      var CharDATA_H2 = new Array();
      var CharDATA_set = new Array();

        this.F_DGV2 = H1;
        this.dataDGV2 = dataH1;
        this.$refs.DGV2.reset();

        var sNO_DM = true;


      /// var iMouns = this.txtSearch_mn.selectedIndex;
      //    var iMouns =  this.$refs.txtid_mn.selectedIndex();  
    //   console.log(iMouns);
          

          API.GetDataSearchMaterial({
              data:{zyear:this.txtSearch,zmonth:this.txtSearch_mn},              
              callblack: res => {
                 /// console.log(res);
                   this.dataDGV1   =  res ;
                   
                  var cui = res.length;
                  var rop = 1;
              res.forEach((d,i) => {
                if(rop!=cui)
                      {
                        
                        /*else
                        {
                          this.show_err = false;
                          this.show = true;
                        }*/
                       if(res[i].matgrprpcd.toString() === "NO_DM")
                        {
                          
                             sNO_DM = false;
                        }
                          Charttxt_H1[i]   =res[i].matgrprpname;

                          ChartDATA_H1_1[i]=res[i].rec_wei_cum.toFixed(2);
                          ChartDATA_H1_2[i]=res[i].pay_wei_cum.toFixed(2);
                          ChartDATA_H1_3[i]=res[i].end_wei.toFixed(2);
                      }
                     
                      rop++;
                   });
              
              
                var ctx = document.getElementById("graph1").getContext("2d");
                
                if(myChart1 !== null)
                {
                         myChart1.data.labels = Charttxt_H1;
                         myChart1.data.datasets =  [{
                                          label: 'Page A',
                                          data: ChartDATA_H1_1,
                                          backgroundColor: ['#36C1A1', '#339DF9', '#E2A11E', '#E290E5','#F96565']
                                        }];
                         myChart1.update();
                }else
                {

                         myChart1 = new Chart(ctx, {
                                      type: 'pie',
                                      data: {
                                        labels:  Charttxt_H1,
                                        datasets: [{
                                          label: 'Page A',
                                          data: ChartDATA_H1_1,
                                          backgroundColor: ['#36C1A1', '#339DF9', '#E2A11E', '#E290E5','#F96565']
                                        }]
                                      },
                                      options: {
                                        responsive: true,
                                           plugins: { //setup chartjs-plugin-labels plug in 
                                                  labels: [
                                                      {
                                                          render: 'percentage',
                                                        //arc: true,
                                                          precision: 2,// font size, default is defaultFontSize
                                                          fontSize: 18,
                                                          fontStyle: 'bold',
                                                          // font color, can be color array for each data or function for dynamic color, default is defaultFontColor
                                                          fontColor: '#fff',
                                                      }
                                                  ]
                                              }
                                        
                                      }
                                    });
            
                }
            
             
             


             var ctx2 = document.getElementById('graph2').getContext("2d");
             // var ctx = document.getElementById("graph1").getContext("2d");
             if(myChart2 !== null)
                {
                         myChart2.data.labels = Charttxt_H1;
                         myChart2.data.datasets =  [{
                                          label: 'Page A',
                                          data: ChartDATA_H1_2,
                                          backgroundColor: ['#36C1A1', '#339DF9', '#E2A11E', '#E290E5','#F96565']
                                        }];
                         myChart2.update();
                }else
                {

                         myChart2 = new Chart(ctx2, {
                                      type: 'pie',
                                      data: {
                                        labels:  Charttxt_H1,
                                        datasets: [{
                                          label: 'Page A',
                                          data: ChartDATA_H1_2,
                                          backgroundColor: ['#36C1A1', '#339DF9', '#E2A11E', '#E290E5','#F96565']
                                        }]
                                      },
                                      options: {
                                        responsive: true
                                        ,
                                           plugins: { //setup chartjs-plugin-labels plug in 
                                                  labels: [
                                                      {
                                                          render: 'percentage',
                                                        //arc: true,
                                                          precision: 2,// font size, default is defaultFontSize
                                                          fontSize: 18,
                                                          fontStyle: 'bold',
                                                          // font color, can be color array for each data or function for dynamic color, default is defaultFontColor
                                                          fontColor: '#fff',
                                                      }
                                                  ]
                                              }
                                      }
                                    });
            
                }

              
            /*  var myChart2 = new Chart(ctx2, {
                  type: 'pie',
                  data: {
                    labels:  Charttxt_H1,
                    datasets: [{
                      label: 'Page A',
                      data: ChartDATA_H1_2,
                      backgroundColor: ['#36C1A1', '#339DF9', '#E2A11E', '#E290E5','#F96565']
                    }]
                  },
                  options: {
                    responsive: true
                  }
                });
*/

               
                var ctx3 = document.getElementById('graph3').getContext("2d");


                if(myChart3 !== null)
                {
                         myChart3.data.labels = Charttxt_H1;
                         myChart3.data.datasets =  [{
                                          label: 'Page A',
                                          data: ChartDATA_H1_3,
                                          backgroundColor: ['#36C1A1', '#339DF9', '#E2A11E', '#E290E5','#F96565']
                                        }];
                         myChart3.update();
                }else
                {

                         myChart3 = new Chart(ctx3, {
                                      type: 'pie',
                                      data: {
                                        labels:  Charttxt_H1,
                                        datasets: [{
                                          label: 'Page A',
                                          data: ChartDATA_H1_3,
                                          backgroundColor: ['#36C1A1', '#339DF9', '#E2A11E', '#E290E5','#F96565']
                                        }]
                                      },
                                      options: {
                                        responsive: true
                                        ,
                                           plugins: { //setup chartjs-plugin-labels plug in 
                                                  labels: [
                                                      {
                                                          render: 'percentage',
                                                        //arc: true,
                                                          precision: 2,// font size, default is defaultFontSize
                                                          fontSize: 18,
                                                          fontStyle: 'bold',
                                                          // font color, can be color array for each data or function for dynamic color, default is defaultFontColor
                                                          fontColor: '#fff',
                                                      }
                                                  ]
                                              }
                                      }
                                    });
            
                }
                
             // var ctx = document.getElementById("graph1").getContext("2d");
            /*   var  myChart = new Chart(ctx3, {
                  type: 'pie',
                  data: {
                 labels: Charttxt_H1,
                    datasets: [{
                      label: 'Page A',
                      data: ChartDATA_H1_3,
                      backgroundColor: ['#36C1A1', '#339DF9', '#E2A11E', '#E290E5','#F96565']
                    }]
                  },
                  options: {
                    responsive: true
                  }
                });*/





              }
              });





              API.GetDataSearchMaterialPRC({
              data:{zyear:this.txtSearch,zmonth:this.txtSearch_mn},              
              callblack: res => {


                        if(sNO_DM)
                         {
                           
                         }else
                         {
                           for (i = 0; i < res[0]["s_pb"].length; i++) 
                           {
                                this.txt_PB = this.txt_PB +res[0]["s_pb"][i].toString()+ '</br>';
                           }
                           
                         }






                      H1[0] = {
                          name: "mn_name",
                          title: "เดือน/ปี",
                          sortField: "",
                          class: "text-left",
                          visible: true
                        };

                        for (i = 0; i < res[0]["c_herder"].length; i++) {
                            Tc = i + 1;
                              H1[Tc] = {
                              name: "CUL" + Tc.toString(),
                              title: res[0]["c_herder"][i].toString(),
                              sortField: "",
                              class: "text-right",
                              visible: true,
                              callback:(v) => {
                                  if (this.$root.$options.filters.number(v,2) != 0) {
                                  return '<spen> '+this.$root.$options.filters.number(v,2)+' </span> ';   
                                  } else{
                                      '<spen>/span> '
                                  } 
                        
                                }
                                };
                           
                          };
                       
                        
                        for (i = 0; i < res[0]["c_data"].length; i++) {
                                 ChartCul_H1[i] = (res[0]["c_data"][i]["mn_name"].toString()+" "+ res[0]["c_data"][i]["iYear"].toString().substring(2, 4));

                                            ///console.log(res[0]["c_data"][i]["iYear"].toString());
                              
                                        const expr = res[0]["c_herder"].length;
                                        switch (expr) {                          
                                          
                                          case 1:dataH1[i] = {
                                                     mn_name: (res[0]["c_data"][i]["mn_name"].toString()+" "+ res[0]["c_data"][i]["iYear"].toString().substring(2, 4)),
                                                     CUL1: res[0]["c_data"][i]["cuL_1"].toString()
                                                  }
                                          case 2:dataH1[i] = {
                                                     mn_name:  res[0]["c_data"][i]["mn_name"].toString()+" "+res[0]["c_data"][i]["iYear"].toString().substring(2, 4),
                                                     CUL1: res[0]["c_data"][i]["cuL_1"].toString(),
                                                     CUL2: res[0]["c_data"][i]["cuL_2"].toString()
                                                  }
                                          case 3:dataH1[i] = {
                                                     mn_name:  (res[0]["c_data"][i]["mn_name"].toString()+" "+res[0]["c_data"][i]["iYear"].toString().substring(2, 4)),
                                                     CUL1: res[0]["c_data"][i]["cuL_1"].toString(),
                                                     CUL2: res[0]["c_data"][i]["cuL_2"].toString(),
                                                     CUL3: res[0]["c_data"][i]["cuL_3"].toString()
                                                  }
                                          case 4:  dataH1[i] = {
                                                     mn_name: res[0]["c_data"][i]["mn_name"].toString()+" "+res[0]["c_data"][i]["iYear"].toString().substring(2, 4),
                                                     CUL1: res[0]["c_data"][i]["cuL_1"].toString(),
                                                     CUL2: res[0]["c_data"][i]["cuL_2"].toString(),
                                                     CUL3: res[0]["c_data"][i]["cuL_3"].toString(),
                                                     CUL4: res[0]["c_data"][i]["cuL_4"].toString()
                                                  }
                                          case 5: dataH1[i] = {
                                                     mn_name:  res[0]["c_data"][i]["mn_name"].toString()+" "+res[0]["c_data"][i]["iYear"].toString().substring(2, 4),
                                                     CUL1: res[0]["c_data"][i]["cuL_1"].toString(),
                                                     CUL2: res[0]["c_data"][i]["cuL_2"].toString(),
                                                     CUL3: res[0]["c_data"][i]["cuL_3"].toString(),
                                                     CUL4: res[0]["c_data"][i]["cuL_4"].toString(),
                                                     CUL5: res[0]["c_data"][i]["cuL_5"].toString()
                                                  }
                                        } 
                          }

                         
                            //  console.log(C_NAME_C);
                            C_COLOR = ["rgba(54, 193, 161, 1.0)","rgba(51, 157, 249, 1.0)","rgba(226, 161, 30, 1.0)","rgba(226, 144, 229, 1.0)","rgba(249, 101, 101, 1.0)"];
                           // C_NAME_C = ["copo","copo","copo"];
                            CharDATA_H2 = [[0],[0],[0],[0],[0]];
                          
                                         
                              for (i = 0; i < res[0]["c_herder"].length; i++) {
                                    C_NAME_C[i] = res[0]["c_herder"][i].toString();


                                    for (t = 0; t < res[0]["c_data"].length; t++) {
                                          Tc = i + 1;
                                          var CULhh = "cuL_" + Tc.toString();
                                          CharDATA_H2[i][t] = res[0]["c_data"][t][CULhh].toString();
                                    }

                                    CharDATA_set[i] = {backgroundColor:"rgba(0, 0, 0, 0)",
                                                borderColor: C_COLOR[i],
                                                label: C_NAME_C[i],
                                                data: CharDATA_H2[i]} ;
                              }

///console.log(CharDATA_set);

                          var ctx = document.getElementById("graph4").getContext("2d");

                        if(bar !== null)
                          {
                                  bar.data.labels = ChartCul_H1;
                                  bar.data.datasets =  CharDATA_set;
                                  bar.update();
                          }else
                          {

                                  bar = new Chart(ctx, {
                                    type: "line",
                                    options: {
                                      responsive: true,
                                      title: {
                                        // ข้อความที่อยู่ด้านบนของแผนภูมิ
                                        
                                        display: true
                                      }
                                    },
                                    data: {
                                      labels: ChartCul_H1,
                                      datasets: CharDATA_set
                                    }
                                  });
                      
                          }


                        
                          
                            

                    
                          this.F_DGV2 = H1;
                          this.$refs.DGV2.reset();

                         if(sNO_DM)
                         {
                            this.show_err = false;
                           this.show = true;
                         }else
                         {
                           this.show_err = true;
                           this.show = false;
                         }
                        
                        
                        

                        ///   dataH1[0]['mn_name'] =  res[0]["c_data"][1]["mn_name"].toString();   

                      }
                       
            
              });





    }
  },

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
    
    //   console.log("555555");
  //   H1 = [];
    ///console.log(date.getMonth());
    this.txtSearch_mn =date.getMonth()+1;
    this.txtSearch = date.getFullYear();



    
 myChart1 = null;
 myChart2= null;
 myChart3= null;
 bar= null;


    this.QueryData();
  //  chart.update();
  }
};
</script>

 

<style>
.app-body .main {
  background-image: linear-gradient(rgba(234, 242, 248, 0.8), #f2f3f4);
}


.card_body {
  background: linear-gradient(
    to bottom right,
    rgba(232, 246, 243, 1),
    rgba(234, 250, 241, 1)
  );
  border: 1px solid rgb(214, 219, 223);
}

.card_body2 {
  background: linear-gradient(
    to bottom right,
    rgba(253, 237, 236, 1),
    rgba(253, 237, 236, 1)
  );

  border: 1px solid rgb(214, 219, 223);
}

.form-row > .col,
.form-row > [class*="col-"] {
  padding-right: 0px;
  padding-left: 5 px;
  text-align: right;
}
.btn-block {
  display: block;
  width: 100%;
  height: 50px;
  color: #154360;

  background: linear-gradient(
    to bottom right,
    rgba(214, 234, 248, 1),
    rgba(235, 245, 251, 1)
  );
  border-color: rgba(233, 247, 239, 1);
}

.wrapper {
  padding: 3rem 1.5rem;
  max-width: 900px;
  margin: 0 auto;
}
.st0 {
  fill: #d7dde5;
}
.st1,
.knob_data {
  fill: #2eab6f;
  color: #2eab6f;
}

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

.graph_data,
.knob_data {
  font-size: 2rem;
}

.graph_data {
  display: table-cell;
  vertical-align: middle;
}

.card_division {
  border-top: 1px solid #d7dde5;
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
  transition: transform 0.12s ease-out;
}

.card_more_button {
  border-radius: 0;
  border-left: 0;
  border-right: 0;
  border-bottom-color: #d7dde5;
  border-top-color: #d7dde5;
  background-color: #fff;
}

.card_more_button:after {
  content: "\e629";
}

.card_more_content {
  display: none;
  font-size: 0.865rem;
  line-height: 1.5;
  padding: 0.75rem;
}

.stats {
  width: 100%;
  margin-bottom: -2px;
  height: 5.75rem;
  display: table;
}

.stats_row > .stats_item {
  border-left: 1px solid #d7dde5;
  padding: 0.75rem 1.5rem;
  overflow: hidden;
  display: table-cell;
  vertical-align: middle;
  height: 100%;
}

.stats_row > .stats_item:first-child {
  border-left: 0;
}

.stats_row:after {
  content: " ";
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
  color: #000;
  /* font-size: 40px; */
  font-weight: bold;
}

.txt_error {
  color: #000;
  /* font-size: 40px; */
  font-weight: bold;
}

.txt_warn {
  color: #ddc728;
}

.txt_smaller {
  font-size: 0.75em;
}

.flipY {
  transform: scaleY(-1);
  border-bottom-color: #fff;
}

.txt_faded {
  opacity: 0.65;
}

.fa-navicon:before,
.fa-reorder:before,
.fa-bars:before {
  content: "";
}

.fa-unsorted:before,
.fa-sort:before {
  content: "";
}

.panel:nth-child(n) {
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

.panel a span:nth-child(n) {
  font-size: 40px;
  font-weight: 700;
}

.panel:after {
  position: absolute;
  font-family: FontAwesome;
  color: #0b5345;
  z-index: 1;
  transition: all 0.5s;
  line-height: normal;
}
.panel.post {
  background-color: #0b5345;
  width: 100%;
}
.panel.post:after {
  content: "\f024";
  font-size: 100px;
  color: #117a65;
  top: 30px;
  right: 35px;
  /* -webkit-transform: rotate(45deg);
  transform: rotate(45deg); */
}
.panel.post:hover:after {
  top: 8px;
}
.panel.comment {
  background-color: #1b4f72;
  width: 100%;
}
.panel.comment:after {
  content: "\f155";
  font-size: 100px;
  color: #1f618d;
  top: 30px;
  right: 35px;
}
.panel.comment:hover:after {
  top: -5px;
}
.panel.page {
  background-color: #641e16;
  width: 100%;
}
.panel.page:after {
  content: "\f080";
  font-size: 90px;
  color: #922b21;
  top: 30px;
  right: 35px;
}
.panel.page:hover:after {
  top: 24px;
}

.panel.user {
  background-color: #7d6608;
  width: 100%;
}

.panel.user:after {
  content: "\f091";
  font-size: 100px;
  color: #9c640c;
  top: 30px;
  right: 35px;
}
.panel.user:hover:after {
  top: 7px;
}
.panel:hover:after {
  transition: all 0.5s;
}

.callout-info {
  border-left-color: #63c2de;
}
.callout {
  position: relative;
  padding: 0 1rem;
  margin: 1rem 0;
  /* border-left: 4px solid #c8ced3; */
  border-radius: 0.25rem;
}

.callout-danger {
  border-left-color: #f86c6b;
}
.callout-warning {
  border-left-color: #ffc107;
}
.callout-success {
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
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 0.875rem;
  color: #566573;
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
  border-left: 4px solid #2980b9;
}

.dashboard .card .border-left-2 {
  border-left: 4px solid #c0392b;
}

.dashboard .card .border-left-3 {
  border-left: 4px solid #16a085;
}

.dashboard .card .border-left-4 {
  border-left: 4px solid #884ea0;
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
  background: #85c1e9;
  border-radius: 3px;
  height: 20px;
  width: 50%;
  /*default*/
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
}

.status-fill-bad {
  position: relative;
  background: #fadbd8;
  border-radius: 3px;
  height: 20px;
  width: 50%;
  /*default*/
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
}
.status-fill-bad2good {
  position: relative;
  background: #fad7a0;
  border-radius: 3px;
  height: 20px;
  width: 50%;
  /*default*/
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
}

.status-fill-good {
  position: relative;
  background: #d5f5e3;
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
  position: absolute;
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
.switch-label:before,
.switch-label:after {
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
  background-color: #3498db;
  border-radius: 8px;
}
.switch-label:after {
  left: 0;
  width: 20px;
  height: 20px;
  background-color: #3498db;

  border-radius: 50%;
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.14),
    0 2px 2px 0 rgba(0, 0, 0, 0.098), 0 1px 5px 0 rgba(0, 0, 0, 0.084);
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
  background-color: #a5d6a7;
}
.switch-input:checked + .switch-label:after {
  background-color: #4caf50;
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

  width: 250px;
  bottom: 10px;
  right: 10px;

  border-radius: 5px;

  padding-top: 5px;
  background-color: #fff;
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.14),
    0 2px 2px 0 rgba(0, 0, 0, 0.098), 0 1px 5px 0 rgba(0, 0, 0, 0.084);
}

.fixed-bottom-bar-in {
  position: absolute;
  top: 130%;
  left: 75%;
  height: 100px;
  margin-top: -50px;
  width: 250px;
  margin-left: -125px;
}

@media screen and (max-width: 600px) {
  .fixed-bottom-bar {
    height: 40px;
    z-index: 1020;
    position: fixed;

    width: 100%;
    bottom: 0;
    right: 0;

    padding-top: 5px;
    background-color: #fff;
  }

  .fixed-bottom-bar-in {
    position: absolute;
    top: 130%;
    left: 35%;
    height: 100px;
    margin-top: -50px;
    width: 250px;
    margin-left: -125px;
  }

  .card-header {
    margin-bottom: 0;
    border-bottom: 0px solid;
    background: -webkit-gradient(
      linear,
      left top,
      right bottom,
      from(#f4f6f6),
      to(#e5e8e8)
    );
    background: linear-gradient(to bottom right, #f4f6f6, #e5e8e8);
    border-color: #d8dbe0;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 10px;
    padding-right: 10px;
    background: #a9cce3;
    border-top: 2px solid #aeb6bf;
  }
}

.switch input {
  display: none;
}
.switch {
  display: inline-block;
  width: 50px;
  height: 14px;
  margin: 5px;
  margin-left: 25px;
  -webkit-transform: translateY(50%);
  transform: translateY(50%);
  position: relative;
}

.slider {
  position: absolute;
  top: 0px;
  bottom: 0;
  left: 0;
  right: 0;
  border-radius: 20px;
  background: #b7b7b7;
  cursor: pointer;
  border: 4px solid transparent;
  overflow: visible;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}
.slider:before {
  position: absolute;
  content: "";
  width: 22px;
  height: 22px;
  background: #2980b9;
  border-radius: 100px;
  top: -8px;
  -webkit-transform: translateX(-0px);
  transform: translateX(-0px);
  -webkit-transition: 0.4s;
  transition: 0.4s;
  -webkit-box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.23);
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.23);
}

.switch input:checked + .slider:before {
  -webkit-transform: translateX(20px);
  transform: translateX(20px);
  background: #2980b9;
}
.off {
  position: absolute;
  left: -60px;
  top: -5px;
  color: #154360;
  -webkit-transition: all ease 0.4s;
  transition: all ease 0.4s;
}
.on {
  position: absolute;
  right: -100px;
  top: -5px;
  color: #d3d3d3;
  font-family: "roboto_light", sans-serif;
  -webkit-transition: all ease 0.4s;
  transition: all ease 0.4s;
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
  background: -webkit-gradient(
    linear,
    left top,
    right bottom,
    from(#f4f6f6),
    to(#e5e8e8)
  );
  background: linear-gradient(to bottom right, #f4f6f6, #e5e8e8);
  border-color: #d8dbe0;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 10px;
  padding-right: 10px;
  background: #fff;
}
</style>