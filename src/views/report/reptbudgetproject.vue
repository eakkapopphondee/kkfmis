<template>
  <!-- <WidgetsBrand/> -->

  <div class="animated fadeIn">



    
    <b-row v-if="show">
      <b-col lg="12">
        <transition name="fade">
          <b-card no-body >
            <div slot="header">
              <h5><i class="fa fa-television" aria-hidden="true"></i> รายงาน งบประมาณงานโครงการและค่าใช้จ่ายจริง</h5>
             
            </div>
            <b-collapse id="collapse1" visible>

              <b-card-body>

                      <b-alert :show="show_err" variant="warning">
                        <h4 class="alert-heading">ไม่พบข้อมูล งบประมาณงานโครงการและค่าใช้จ่าย ประจำเดือน  &nbsp;</b>{{ this.iMun[this.txtSearch_mn-1].text}} {{this.txtSearch}} !</h4>
                       
                        <hr>
                          <b> เนื่องจากทางบัญชียังไม่ Import ข้อมูลเข้าระบบ กรุณาติดต่อฝ่ายบัญชี ! </b>
                      
                      <div v-html="txt_PB"></div>
                      </b-alert>

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

              </b-card-body>

            </b-collapse>
          </b-card>
       </transition>





                <div class="animated fadeIn" v-if="show">
                    <b-row >
                        <b-col lg="12">
                        <transition name="fade">
                            <b-card no-body >
                            
                            <b-collapse id="collapse3" visible>
                                <b-card-body>
                                
                                <b-row  >


                                <b-col lg="12" >
                                    <b-row >
                                        
                                        <b-col lg="12" style="position:relative;z-index: 1;">
                                             
                                            <b-list-group-item style="backgroundColor:#e3e8e8" class="d-flex align-items-center">
                                 
                                        
                                                  <b-avatar class="mr-3"><i class="fa fa-bar-chart" aria-hidden="true"></i></b-avatar>
                                                <span class=""><h5>ค่าใช้จ่ายที่เกิดจริงเทียบกับงบประมาณ ณ {{ this.iMun[this.txtSearch_mn-1].text}} {{this.txtSearch}}</h5></span>
                                                
                                                <span class="mr-auto">
                                                    <h2><b-badge variant="info" style="position:relative;left:15px" rounded>{{this.txtpersen}}</b-badge></h2>
                                                </span>
                                                <h5><b-badge class="float-right">Update : {{this.txtUpdate}}</b-badge></h5>

                                            </b-list-group-item>


  
                                            
                                         </b-col>     
                                   </b-row>  
                                    <b-list-group-item class="d-flex align-items-center" style="backgroundColor:rgba(178, 206, 215, 0.32);position:relative;bottom:35px;">

                                         <canvas v-bind:height="height2" id="graph1">
                                         </canvas>
                                    </b-list-group-item>
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
                    <b-row >
                        <b-col lg="12">
                        <transition name="fade">
                            <b-card no-body >
                            
                            <b-collapse id="collapse3" visible>
                                <b-card-body>

                                     <b-row >
                                        <b-col lg="12" v-resize:throttle.100="onResize">
                                            <b-row >
                                                    <b-col lg="12" style="position:relative;z-index: 1;">
                                                        <b-list-group-item style="backgroundColor:#e3e8e8"  class="d-flex align-items-center">
                                                            <b-avatar class="mr-3"><i class="fa fa-bar-chart" aria-hidden="true"></i></b-avatar>
                                                            <span class="mr-auto"><h5>กราฟแสดง ค่าใช้จ่ายที่เกิดขึ้นจริงสะสม ณ ปี {{this.txtSearch}} เทียบงบประมาณ แยกประเภทโครงการ</h5></span>
                                                        </b-list-group-item>
                                                    </b-col>     
                                            </b-row>  
                                            <b-list-group-item class="d-flex align-items-center" style="backgroundColor:rgba(178, 206, 215, 0.32);position:relative;bottom:35px;">
           
                                             
                                                    <canvas v-bind:height="height" id="graph2">
                                                    </canvas>
                                          

                                            </b-list-group-item>
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
                    <b-row >
                        <b-col lg="12">
                        <transition name="fade">
                            <b-card no-body >
                            <div slot="header">
                                <i class="fa fa-bar-chart" aria-hidden="true"></i> ตารางแสดง งบประมาณงานโครงการ และค่าใช้จ่ายจริง
                                <div class="card-header-actions">
                                <b-link class="card-header-action btn-minimize" v-b-toggle.collapse3>
                                    <i class="icon-arrow-up"></i>
                                </b-link>
                                </div>
                            </div>
                            <b-collapse id="collapse3" visible>
                                <b-card-body>
                                
                                <b-row>
                                       <gridmobile
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
                                      ></gridmobile>
                                </b-row>
                            
                            
                                </b-card-body>
                            </b-collapse>
                            </b-card>
                        </transition>
                        </b-col>
                    </b-row>
                    </div>




      </b-col>
    </b-row>



 

  </div>
</template>






<script>
import Vue from "vue";
import resize from "vue-resize-directive";
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
var ChartDATA_H1_1 = new Array();

var ChartLebal = new Array();
var ChartDATA_H1_2 = new Array();
var ChartDATA_H1_3 = new Array();

var myChart1 = null;
var myChart2 = null;
var myChart3 = null;
var bar= null;
var MeSeData= null;

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
  directives:{resize},

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
      txtUpdate:"",
      modal: false,
      mode: "Add",
      errMsg: "",
      avSearch: false,
      show_err : false,
      txtSearch: "",
      txtSearch_mn: "",
      txtpersen: "",
     // name: "rptDrawing",
      drawingCd: "",
      perPage: 25,
      
      startRow: 0,
      stopRow: 25,
      height:80,
      height2:80,
      iframe: {
        src: "", //DIV HERE #EDITOR
        loaded: false
      },
      iSeleY: [],
      iMun: [],
      F_DGV1: [  {
                        name: "project_TypeName",
                        title: "ประเภทโครงการ",
                        sortField: "",
                        class: "text-left",
                        visible: true,
                        //color:back
                        //color:'#ecedee' 
                        //background-color: "#2382c3"
                      },
                      {
                        name: "project_Qty",
                        title: "จน.โครงการทั้งหมด",
                        sortField: "",
                        class: "text-right",
                        visible: true,
                        callback:(v) => {
                            if (this.$root.$options.filters.number(v,2) != 0) {
                            return '<spen> '+this.$root.$options.filters.number(v,0)+' </span> ';   
                            } else{
                                '<spen>/span> '
                            } 
                  
                          }
                      },
                      {
                        name: "project_CloseQty",
                        title: "จน.โครงการที่ปิดแล้ว",
                        sortField: "",
                        class: "text-right",
                        visible: true,
                        callback:(v) => {
                            if (this.$root.$options.filters.number(v,2) != 0) {
                            return '<spen> '+this.$root.$options.filters.number(v,0)+' </span> ';   
                            } else{
                                '<spen>/span> '
                            } 
                  
                          }
                      },
                      {
                        name: "project_Budget",
                        title: "งบประมาณ(ลบ.)",
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
                        name: "project_CostCul",
                        title: "คชจ.เกิดขึ้นจริงสะสม (ลบ.)",
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
                        name: "project_CostYear",
                        title: "คชจ.ที่เกิดจริง ปี (ลบ.)",
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
                        name: "project_CostRemain",
                        title: "งบประมาณคงเหลือ(ลบ.)",
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
                        name: "project_Costper",
                        title: "% คชจ.ที่เกิดจริงเทียบกับงบประมาณ",
                        sortField: "",
                        class: "text-right",
                        visible: true,
                        callback:(v) => {
                            if (this.$root.$options.filters.number(v,2) != 0) {
                            //return '<spen> '+this.$root.$options.filters.number(v,2)+' </span> ';  
                              if (this.$root.$options.filters.number(v,2) > 100 )
                              {
                                  return     ' <div class="task-status"><div class="status-bar"><div class="status-track">   <span class="status-text"> <b>'+this.$root.$options.filters.number(v,2)+'</b></span>  <div class="status-fill-bad" style="width:100%"></div>  </div> </div>  </div> ';

                              }else
                              {
                                  return  ' <div class="task-status"><div class="status-bar"><div class="status-track">   <span class="status-text"><b>'+this.$root.$options.filters.number(v,2)+'</b></span>  <div class="status-fill" style="width: '+this.$root.$options.filters.number(v,2)+'%"></div>  </div> </div>  </div> ';
                              }
                            
                            } else{
                                '<spen>/span> '
                            } 
                  
                          }
                      }
              ],
      dataDGV1: [],
      dataDGV2: [],
      dataDGV3: [],
      objSelect: {}
    
      
    };
  },

  methods: {

    Search(e) {
      
      this.QueryData();

    },onResize(el)
    {
        //  console.log(el.offsetWidth);
          if(el.offsetWidth < 400)
          {
               this.height = 500;
               this.height2 = 200;
               
          }else
          {
               this.height2 = 80;
               this.height = 80;
          }
    }, QueryData() {

               
               

               API.GetDataSearchBudgetProject({
              data:{zyear:this.txtSearch,zmonth:this.txtSearch_mn},              
              callblack: res => {

                  MeSeData = new Array();
                  ChartDATA_H1_1 = new Array();
                  ChartLebal = new Array();
                  ChartDATA_H1_2 = new Array();
                  ChartDATA_H1_3 = new Array();

                  this.F_DGV1[5].title = "คชจ.ที่เกิดจริง ปี "+this.txtSearch+" (ลบ.) ";
                  this.$refs.DGV1.reset();

                  if(res[0].pj_main.length > 0)
                  {
                    this.show_err = false;
                            this.dataDGV1   =  res[0].pj_main;
                            this.dataDGV1.push(res[0].pj_sum[0]);
                           
                            ChartDATA_H1_1[0] = res[0].pj_sum[0].project_CostCul.toFixed(2);
                            ChartDATA_H1_1[1] = res[0].pj_sum[0].project_Budget.toFixed(2);
                            this.txtpersen = res[0].pj_sum[0].project_Costper.toFixed(2)+"%";
///
                            this.txtUpdate= res[0].pj_rpt[0].rpt_update.replace("0:00:00", "");

                             res[0].pj_main.forEach((d,i) => {
                                   if(res[0].pj_main[i].project_TypeName !== 'รวม')
                                   {
                                    ChartLebal[i]   = res[0].pj_main[i].project_TypeName;
                                    ChartDATA_H1_2[i]= res[0].pj_main[i].project_Budget.toFixed(2);
                                    ChartDATA_H1_3[i]= res[0].pj_main[i].project_CostCul.toFixed(2);
                                   }
                                   
                                        
                             });



                  }else
                  {
                            this.show_err = true;
                            this.dataDGV1   =  [];
                            //console.log(res[0].pj_sum[0].project_Budget.toFixed(2));
                            ChartDATA_H1_1[0] = "";
                            ChartDATA_H1_1[1] = "";
                            this.txtpersen = "";
                            this.txtUpdate= "";
  

                  };

                          MeSeData ={
                            
                                labels: [
                                    "คชจ.ที่เกิดขึ้นจริงสะสม ["+ChartDATA_H1_1[0]+" ลบ.]",
                                    "งบประมาณ ["+ChartDATA_H1_1[1]+" ลบ.]"
                                ],
                                datasets: [
                                    {
                                        label: true,
                                        data: ChartDATA_H1_1,
                                        backgroundColor: ["#66c2ff", "#007acc" ]
                                     
                                    }]
                                    
                            };

                           var ctx = document.getElementById("graph1").getContext("2d");
                                if(myChart2 !== null)
                                {
                                        myChart2.data = MeSeData;
                                        myChart2.update();
                                        
                                }else
                                {
                                
                                        myChart2 = new Chart(ctx, {
                                        type: 'horizontalBar',
                                        data: MeSeData,
                                        
                                        options: {
                                                 scales: {
                                                        yAxes: [{
                                                            ticks: {
                                                              fontSize: 17
                                                            }
                                                               
                                                        }] 
                                                    },
                                                  /*  scales: {
                                                        xAxes: [{
                                                            ticks: {
                                                                min: 0 ,// Edit the value according to what you need
                                                                max:100
                                                            }
                                                        }],
                                                       
                                                    },*/
                                                    responsive: true,
                                                   plugins: { //setup chartjs-plugin-labels plug in 
                                                  
                                                            labels: [
                                                                {
                                                                    render: 'value',
                                                                    position: 'outside'
                                                                }
                                                            ]
                                                        }
                                                   
                                                }
                                        });
                            
                                };



                          var ctx2 = document.getElementById("graph2").getContext("2d");
                            if(myChart3 !== null)
                            {
                                    myChart3.data = {
                                                    labels: ChartLebal,
                                                    datasets: [{
                                                    label: 'Page A',
                                                    data: ChartDATA_H1_2,
                                                    borderColor: '#6E7EF5',
                                                    backgroundColor: '#007acc'
                                                    }, {
                                                    label: 'Page B',
                                                    data: ChartDATA_H1_3,
                                                    borderColor: '#B277DE',
                                                    backgroundColor: '#66c2ff'
                                                    }]
                                                }; 
                                    myChart3.update();
                            }else
                            {
                            
                                    myChart3 = new Chart(ctx2, {
                                        type: 'bar',
                                        data: {
                                            labels: ChartLebal,
                                            datasets: [{
                                            label: 'Page A',
                                            data: ChartDATA_H1_2,
                                            borderColor: '#6E7EF5',
                                            backgroundColor: '#6E7EF5'
                                            }, {
                                            label: 'Page B',
                                            data: ChartDATA_H1_3,
                                            borderColor: '#B277DE',
                                            backgroundColor: '#B277DE'
                                            }]
                                        },
                                        options: {
                                            responsive: true
                                            ,plugins: { //setup chartjs-plugin-labels plug in 
                                                            labels: [
                                                                {
                                                                    render: 'value',
                                                                }
                                                            ]
                                                        }
                                        
                                        }
                                        });
                        
                            };      

                           
               
                
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
   // this.txtSearch_mn =date.getMonth()-1;
    this.txtSearch = date.getFullYear();
    myChart2 = null;
myChart3 = null;
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