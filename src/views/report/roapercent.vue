<template>
  <!-- <WidgetsBrand/> -->

  <div class="animated fadeIn">
    <b-row>
      <b-col lg="12">
        <transition name="fade">
          <b-card no-body v-if="show">
            <div slot="header">
              <h5> <i class="fa fa-television" aria-hidden="true"></i> รายงานสรุป ROA และ % กำไร</h5>
              <div class="card-header-actions">
                <b-link class="card-header-action btn-minimize" v-b-toggle.collapse1>
                  <i class="icon-arrow-up"></i>
                </b-link>
              </div>
            </div>
            <b-collapse id="collapse1" visible>


              <b-card-body>
               

           <b-alert show variant="secondary">
             
<b-col sm="5">
              <b-form-group
            label="ปีดำเนินงาน"
            label-for="basicSelect"
            :label-cols="5"
            :horizontal="true">


                <b-form-select 
                  id="sale"
                  v-model="txtSearch" 
                  @change="Search" 
                  
                  :plain="true"
                  :options="iSeleY" value="Please select">
                </b-form-select>

              </b-form-group>
            </b-col>

           </b-alert>

              </b-card-body>

              <b-card-body>
                
 <i class="fa fa-television" aria-hidden="true"></i>ผลการดำเนินงานภาพรวม
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
                <br />
                <b-row>
       


                <b-col sm="6">
                    <b-card border-variant="secondary"  bg-variant="light" header="กราฟ ROA และกำไรจากการดำเนินงาน (%)" align="center">
                      <b-card-text>
                       <div v-resize:throttle.100="onResize">
                          <canvas id="graph1" ref="CDG1" v-bind:height="height" ></canvas>


                        </div>
                        </b-card-text>
                    </b-card>
                  </b-col>





                </b-row>
              </b-card-body>

              <b-card-body>
                <i class="fa fa-television" aria-hidden="true"></i>
 เปรียบเทียบผลการดำเนินงาน ปี {{this.txtSearch}} กับปี {{this.txtSearch-1}} แยกรายเดือน
                <gridmobile
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
                ></gridmobile>

                <br />
                <b-row>
                  <b-col sm="6">
                    <b-card border-variant="secondary"  bg-variant="light" header="กราฟ ROA (%)" align="center">
                      <b-card-text>
                        <div style>
                                    <canvas id="graph2" v-bind:height="height"></canvas>
                                  </div>

                      </b-card-text>
                    </b-card>
                  </b-col>

                  <b-col sm="6">
                    <b-card border-variant="secondary"  bg-variant="light" header="กราฟกำไรจากการดำเนินงาน (%)" align="center">
                      <b-card-text>
                        <div style>
                                    <canvas id="graph3" v-bind:height="height"></canvas>
                                  </div>

                      </b-card-text>
                    </b-card>
                  </b-col>
                </b-row>
              </b-card-body>

              <b-card-body>
                <i class="fa fa-television" aria-hidden="true"></i>
 เปรียบเทียบผลการดำเนินงาน ปี {{this.txtSearch}} กับปี {{this.txtSearch-1}} แยกไตรมาส
                <gridmobile
                  ref="DGV3"
                  :fields="F_DGV3"
                  :name="name"
                  :btnGrid="false"
                  :btnAdd="false"
                  :btnClone="false"
                  :btnView="false"
                  :btnEdit="false"
                  :btnDelete="false"
                  :o_col_checkbox="false"
                  :trackBy="'rowID'"
                  :data="dataDGV3"
                  :o_navfooter_visible="false"
                ></gridmobile>

                <br />
                <b-row>
                  <b-col sm="6">
                    <b-card border-variant="secondary"  bg-variant="light" header="กราฟ ROA (%)" align="center">
                      <b-card-text>
                        <div style>
                                    <canvas id="graph4" v-bind:height="height"></canvas>
                                  </div>

                      </b-card-text>
                    </b-card>
                  </b-col>

                  <b-col sm="6">
                    <b-card border-variant="secondary"  bg-variant="light" header="กราฟกำไรจากการดำเนินงาน (%)" align="center">
                      <b-card-text>
                        <div style>
                                    <canvas id="graph5" v-bind:height="height"></canvas>
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

import "webrtc-adapter";
import Chart from "chart.js";



var i;
   var  H2 = new Array();


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
  name: "roapercent",

  created: function() {
    const self = this;
  },

  data() {
    return {
      selected: [],
      show: true,
      horizontal: { label: "col-3", input: "col-6" },

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
      modal: false,
      mode: "Add",
      errMsg: "",
      avSearch: false,
      txtSearch: "",
      name: "roapercent",
      drawingCd: "",
      perPage: 25,

      startRow: 0,
      stopRow: 25,

      iframe: {
        src: "", //DIV HERE #EDITOR
        loaded: false
      },
      iSeleY: [],
      dataDGV1: [],
      dataDGV2: [],
      dataDGV3: [],
      objSelect: {},
      height:200,
      F_DGV1: [],
      F_DGV2: [{
                        name: "mn_name",
                        title: "รายการ",
                        sortField: "",
                        class: "text-left",
                        visible: true
                      },  {
                        name: "now_per_roa",
                        title: "ROA(%) ",
                        sortField: "",
                        class: "text-right",
                        visible: true
                      }, {
                        name: "compare_per_roa",
                        title: "ROA(%) ",
                        sortField: "",
                        class: "text-right",
                        visible: true
                      }, {
                        name: "diff_per_roa",
                        title: "ROA(%) ส่วนต่าง",
                        sortField: "",
                        class: "text-right",
                        visible: true
                      },{
                        name: "now_per_margin",
                        title: "กำไร(%) ",
                        sortField: "",
                        class: "text-right",
                        visible: true
                      }, {
                        name: "compare_per_margin",
                        title: "กำไร(%) ",
                        sortField: "",
                        class: "text-right",
                        visible: true
                      }, {
                        name: "diff_per_margin",
                        title: "กำไร(%) ส่วนต่าง",
                        sortField: "",
                        class: "text-right",
                        visible: true
                      }],
      F_DGV3: [    
                     {
                        name: "mn_name",
                        title: "ไตรมาส",
                        sortField: "",
                        class: "text-left",
                        visible: true
                      },  {
                        name: "now_per_roa",
                        title: "ROA(%) 2020",
                        sortField: "",
                        class: "text-right",
                        visible: true
                      }, {
                        name: "compare_per_roa",
                        title: "ROA(%) 2019",
                        sortField: "",
                        class: "text-right",
                        visible: true
                      }, {
                        name: "diff_per_roa",
                        title: "ROA(%) ส่วนต่าง",
                        sortField: "",
                        class: "text-right",
                        visible: true
                      },{
                        name: "now_per_margin",
                        title: "กำไร(%) 2020",
                        sortField: "",
                        class: "text-right",
                        visible: true
                      }, {
                        name: "compare_per_margin",
                        title: "กำไร(%) 2019",
                        sortField: "",
                        class: "text-right",
                        visible: true
                      }, {
                        name: "diff_per_margin",
                        title: "กำไร(%) ส่วนต่าง",
                        sortField: "",
                        class: "text-right",
                        visible: true,
                         variant: 'danger'
                      }
                      ]
    };
  },

  methods: {
    Search(e) {
      this.QueryData();
    },onResize(el)
    {
          
          if(el.offsetWidth < 300)
          {
              //  console.log(el.offsetWidth, el.offsetHeight);
               this.height = 500;
             
              
          }else
          {
               this.height = 200;
              
              
          }
    },
    QueryData() {
      
     
 
      
      var Tc = 0;
      var H1 = new Array();
     
      var dataH1 = new Array();
      var ChartCul_H1 = new Array();
      var ChartDATA_H1_1 = new Array();
      var ChartDATA_H1_2 = new Array();
     
       var ChartROA_H1 = new Array();
       var CDATA_H2_1 = new Array();
       var CDATA_H2_2 = new Array();
       var CDATA_H3_1 = new Array();
       var CDATA_H3_2 = new Array();

       var ChartROA_H2 = new Array(); 
       var CDATA_H4_1  = new Array();
       var CDATA_H4_2  = new Array();
       var CDATA_H5_1  = new Array();
       var CDATA_H5_2  = new Array();


  


          this.F_DGV1 = H1;
          this.dataDGV1 = dataH1;
          this.$refs.DGV1.reset();


     
     

      API.GetDataROASummary({
        data: { iYear: this.txtSearch.toString() },
        callblack: res => {
          if (res.length <= 0) {
            AlertMessage("error", "ไม่พบข้อมูลลูกหนี้");
            return;
          } else {

         ///console.log(this.txtSearch);
          ///   dataH1.push({Teesss: "ROA (%)"})[0]  ;    
           dataH1[0] = {Teesss: "ROA (%)"};   
           dataH1[1] = {Teesss: "กำไรจากการดำเนินงาน (%)"};   
            H1[0] = {
              name: "Teesss",
              title: "รายการ",
              sortField: "",
              class: "text-left",
              visible: true
            };


              ChartCul_H1[0] = 0;
              ChartDATA_H1_1[0] = 0;
              ChartDATA_H1_2[0] = 0;

            for (i = 0; i < res[0]["yeaRs"].length; i++) {
              Tc = i + 1;
              H1[Tc] = {
                name: "CUL" + Tc.toString(),
                title: "ปี " + res[0]["yeaRs"][i].toString(),
                sortField: "",
                class: "text-right",
                visible: true
              };
              ;
            var CULhh = "CUL" + Tc.toString();
            dataH1[0][CULhh] =  res[0]["roAs"][i].toString();   
            dataH1[1][CULhh] =  res[0]["margin"][i].toString(); 
           ///  dataH1.push() ;
              ///dataH1.unshift( {"CUL1": res[0]["roAs"][0].toString()})
           //dataH1[0] = dataH1[0].+{"CUL1": res[0]["roAs"][0].toString()} ;   

              ChartCul_H1[i+1] = res[0]["yeaRs"][i].toString().substring(0, 4);
              ChartDATA_H1_1[i+1] = res[0]["roAs"][i];
              ChartDATA_H1_2[i+1] = res[0]["margin"][i];
            }
             

            /*dataH1[0] = {
              Teesss: "ROA (%)",
              //CUL1: res[0]["roAs"][0].toString(),
              //CUL2: res[0]["roAs"][1].toString(),
              //CUL3: res[0]["roAs"][2].toString()
            };*/
            
           /* dataH1[1] = {
              Teesss: "กำไรจากการดำเนินงาน (%)",
             // CUL1: res[0]["margin"][0].toString(),
              ///CUL2: res[0]["margin"][1].toString(),
             // CUL3: res[0]["margin"][2].toString()
            };*/

          }
          this.F_DGV1 = H1;
          this.$refs.DGV1.reset();
          
          var ctx = document.getElementById("graph1").getContext("2d");
          this.bar = new Chart(ctx, {
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
              datasets: [
                {
                  backgroundColor: "rgba(55, 173, 221, 0.1)",
                  borderColor: "rgba(95, 190, 238, 1.0)",
                  label: "ROA (%)",
                  data: ChartDATA_H1_1
                },
                {
                  backgroundColor: "rgba(255, 226, 226   , 0.3)",
                  borderColor: "rgba(243, 126, 126  , 1.0)",
                  label: "กำไรจากการดำเนินงาน (%)",
                  data: ChartDATA_H1_2
                }
              ]
            }
          });
        }
      });
            
            /*  
               this.dataDGV2   =[];
               */
          //  this.F_DGV2 = H2;
            // this.dataDGV2 = [];
        //    this.$refs.DGV2.reset();

     
      
          
          API.GetDataRoaPercentBymn({
              data:{iYear:this.txtSearch},              
              callblack: res => {

                this.F_DGV2[1].title = "ROA(%) "+this.txtSearch;
                this.F_DGV2[2].title = "ROA(%) "+(this.txtSearch-1).toString();

                this.F_DGV2[4].title = "กำไร(%) "+this.txtSearch;
                this.F_DGV2[5].title = "กำไร(%) "+(this.txtSearch-1).toString();
                this.$refs.DGV2.reset();

                  this.dataDGV2   =  res ;

                   var cui = res.length;
                  var rop = 1;
                          ChartROA_H1[0]=0;
                          CDATA_H2_1[0]=0;
                          CDATA_H2_2[0]=0;

                          CDATA_H3_1[0]=0;
                          CDATA_H3_2[0]=0;

                  res.forEach((d,i) => {
                      if(rop!=cui)
                      {
                          ChartROA_H1[i+1]=res[i].mn_name;

                          CDATA_H2_1[i+1]=res[i].now_per_roa;
                          CDATA_H2_2[i+1]=res[i].compare_per_roa;

                          CDATA_H3_1[i+1]=res[i].now_per_margin;
                          CDATA_H3_2[i+1]=res[i].compare_per_margin;
                      }
                     
                      rop++;
                   });


                  var ctx2 = document.getElementById("graph2").getContext("2d");
                  this.bar = new Chart(ctx2, {
                    type: "line",
                    options: {
                      responsive: true,
                      title: {
                        // ข้อความที่อยู่ด้านบนของแผนภูมิ
                        //text: "กราฟROA (%)",
                        display: true
                      }
                    },
                    data: {
                      labels: ChartROA_H1,
                      datasets: [
                        {
                          backgroundColor: "rgba(55, 173, 221, 0.1)",
                          borderColor: "rgba(95, 190, 238, 1.0)",
                          label: "2020",
                          data: CDATA_H2_1
                        },
                        {
                          backgroundColor: "rgba(255, 226, 226   , 0.3)",
                  borderColor: "rgba(243, 126, 126  , 1.0)",
                          label: "2019",
                          data: CDATA_H2_2
                        }
                      ]
                    }

                  });


                  var ctx3 = document.getElementById("graph3").getContext("2d");
                  this.bar = new Chart(ctx3, {
                  type: "line",
                  options: {
                    responsive: true,
                    title: {
                      // ข้อความที่อยู่ด้านบนของแผนภูมิ
                    //  text: "กราฟกำไรจากการดำเนินงาน (%)",
                      display: true
                    }
                  },
                  data: {
                    labels: ChartROA_H1,
                    datasets: [
                      {
                          backgroundColor: "rgba(55, 173, 221, 0.1)",
                          borderColor: "rgba(95, 190, 238, 1.0)",
                          label: "2020",
                          data: CDATA_H3_1
                        },
                        {
                          backgroundColor: "rgba(255, 226, 226   , 0.3)",
                  borderColor: "rgba(243, 126, 126  , 1.0)",
                          label: "2019",
                          data: CDATA_H3_2
                        }
                    ]
                  }
                });

              }
              });


              API.GetDataRoaPercentQuarter({
              data:{iYear:this.txtSearch},              
              callblack: res => {

           

                this.F_DGV3[1].title = "ROA(%) "+this.txtSearch;
                this.F_DGV3[2].title = "ROA(%) "+(this.txtSearch-1).toString();

                this.F_DGV3[4].title = "กำไร(%) "+this.txtSearch;
                this.F_DGV3[5].title = "กำไร(%) "+(this.txtSearch-1).toString();
                this.$refs.DGV3.reset();


                  this.dataDGV3   =  res ;
             
                 // console.log(x);
                 var cui = res.length;
                 var rop = 1;

                 ChartROA_H2[0]=0;

                        CDATA_H4_1[0]=0;
                        CDATA_H4_2[0]=0;

                        CDATA_H5_1[0]=0;
                        CDATA_H5_2[0]=0;
                 
                  res.forEach((d,i) => {
                      
                      if(rop!=cui)
                      {
                        ChartROA_H2[i+1]=res[i].mn_name;

                        CDATA_H4_1[i+1]=res[i].now_per_roa;
                        CDATA_H4_2[i+1]=res[i].compare_per_roa;

                        CDATA_H5_1[i+1]=res[i].now_per_margin;
                        CDATA_H5_2[i+1]=res[i].compare_per_margin;
                      }
                     
                      rop++;
                   });

                  var ctx4 = document.getElementById("graph4").getContext("2d");
                  this.bar = new Chart(ctx4, {
                    type: "line",
                    options: {
                      responsive: true,
                      title: {
                        // ข้อความที่อยู่ด้านบนของแผนภูมิ
                       // text: "กราฟROA (%)",
                        display: true
                      }
                    },
                    data: {
                      labels: ChartROA_H2,
                      datasets: [
                        {
                          backgroundColor: "rgba(55, 173, 221, 0.1)",
                          borderColor: "rgba(55, 173, 221, 1.0)",
                          label: "2020",
                          data: CDATA_H4_1
                        },
                        {
                          backgroundColor: "rgba(255, 226, 226   , 0.3)",
                  borderColor: "rgba(243, 126, 126  , 1.0)",
                          label: "2019",
                          data: CDATA_H4_2
                        }
                      ]
                    }

                  });


                   var ctx5 = document.getElementById("graph5").getContext("2d");
                  this.bar = new Chart(ctx5, {
                  type: "line",
                  options: {
                    responsive: true,
                    title: {
                      // ข้อความที่อยู่ด้านบนของแผนภูมิ
                     // text: "กราฟกำไรจากการดำเนินงาน (%)",
                      display: true
                    }
                  },
                  data: {
                    labels: ChartROA_H2,
                    datasets: [
                      {
                          backgroundColor: "rgba(55, 173, 221, 0.1)",
                          borderColor: "rgba(55, 173, 221, 1.0)",
                          label: "2020",
                          data: CDATA_H5_1
                        },
                        {
                         backgroundColor: "rgba(255, 226, 226   , 0.3)",
                  borderColor: "rgba(243, 126, 126  , 1.0)",
                          label: "2019",
                          data: CDATA_H5_2
                        }
                    ]
                  }
                });



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
    //   console.log("555555");
  //   H1 = [];

    this.txtSearch = date.getFullYear();
    this.QueryData();
   
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