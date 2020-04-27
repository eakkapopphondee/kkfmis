<template>
  <!-- <WidgetsBrand/> -->

  <div class="animated fadeIn">
    <b-row>
      <b-col lg="12">
        <transition name="fade">
          <b-card no-body v-if="show">
            <div slot="header">
              <i class="fa fa-bar-chart" aria-hidden="true"></i> สรุปต้นทุน และค่าใช้จ่ายในการดำเนินงาน
              <div class="card-header-actions">
                <b-link class="card-header-action btn-minimize" v-b-toggle.collapse1>
                  <i class="icon-arrow-up"></i>
                </b-link>
              </div>
            </div>

            <b-collapse id="collapse1" visible>
              <b-card-body>
                <b-row>
                  <b-col sm="4">
                    <b-form-group
                      label="ปี"
                      label-for="basicSelect"
                      :label-cols="3"
                      :horizontal="true"
                    >
                      <b-form-select
                        id="sale"
                        v-model="txtSearch"
                        @change="Search"
                        :plain="true"
                        :options="iSeleY" value="Please select">
                      ></b-form-select>
                    </b-form-group>
                  </b-col>
                </b-row>

                <div class="tab-panels">
                  <section id="rauchbier" class="tab-panel">
                    <b-row>
                      <b-col md="12">
                        <b-card style="border: 0px solid;">
                          <div
                            class="knob_data"
                            style="background-image: url('img/brand/Flagex.png'); background-repeat: no-repeat;
                              background-size: contain; background-position: left;  color:#1A5276; text-align: center; "
                          >
                            ค่าใช้จ่ายสะสม : {{this.dataDrawingexpenValue.total_cost}} (ลบ.)
                            <span
                              class="txt_smaller"
                            > 

                            </span>
                          </div>
                          <b-row>
                            <b-col sm="3">
                              <div class="callout callout-successdanger">
                                <small class="card-title text-title">วัตถุดิบใช้ไป (ลบ.)</small>
                                <br />
                                <strong
                                  class="h2"
                                >{{this.dataDrawingexpenValue.material_cost| number(2)}}</strong>
                                <div class="chart-wrapper" :style="{ top: '-10px'}"></div>
                              </div>
                              <div class="progress-group">
                                <div class="progress-group-header">
                                  <span class="title">%</span>
                                  <span
                                    class="ml-auto font-weight-bold"
                                  >{{this.dataDrawingexpenValue.material_per| number(2)}}%</span>
                                </div>
                                <div class="progress-group-bars">
                                  <b-progress
                                    height="{}"
                                    class="progress-xs"
                                    :value="this.dataDrawingexpenValue.material_per"
                                    variant="success"
                                  ></b-progress>
                                </div>
                              </div>
                            </b-col>

                            <b-col sm="3">
                              <div class="callout callout-warning">
                                <small class="card-title text-title">เกี่ยวกับพนักงาน (ลบ.)</small>
                                <br />
                                <strong
                                  class="h2"
                                >{{this.dataDrawingexpenValue.employee_cost| number(2)}}</strong>
                                <div class="chart-wrapper" :style="{ top: '-10px'}"></div>
                              </div>
                              <div class="progress-group">
                                <div class="progress-group-header">
                                  <span class="title">%</span>
                                  <span
                                    class="ml-auto font-weight-bold"
                                  >{{this.dataDrawingexpenValue.employee_per| number(2)}}%</span>
                                </div>
                                <div class="progress-group-bars">
                                  <b-progress
                                    height="{}"
                                    class="progress-xs"
                                    :value="this.dataDrawingexpenValue.employee_per"
                                    variant="success"
                                  ></b-progress>
                                </div>
                              </div>
                            </b-col>

                            <b-col sm="3">
                              <div class="callout callout-warning">
                                <small class="card-title text-title">ปะอวน (ลบ.)</small>
                                <br />
                                <strong class="h2">{{this.dataDrawingexpenValue.paoun_cost| number(2)}}</strong>
                                <div class="chart-wrapper" :style="{ top: '-10px'}"></div>
                              </div>
                              <div class="progress-group">
                                <div class="progress-group-header">
                                  <span class="title">%</span>
                                  <span
                                    class="ml-auto font-weight-bold"
                                  >{{this.dataDrawingexpenValue.paoun_per| number(2)}}%</span>
                                </div>
                                <div class="progress-group-bars">
                                  <b-progress
                                    height="{}"
                                    class="progress-xs"
                                    :value="this.dataDrawingexpenValue.paoun_per"
                                    variant="success"
                                  ></b-progress>
                                </div>
                              </div>
                            </b-col>

                            <b-col sm="3">
                              <div class="callout callout-warning">
                                <small class="card-title text-title">การผลิต (ลบ.)</small>
                                <br />
                                <strong
                                  class="h2"
                                >{{this.dataDrawingexpenValue.production_cost| number(2)}}</strong>
                                <div class="chart-wrapper" :style="{ top: '-10px'}"></div>
                              </div>
                              <div class="progress-group">
                                <div class="progress-group-header">
                                  <span class="title">%</span>
                                  <span
                                    class="ml-auto font-weight-bold"
                                  >{{this.dataDrawingexpenValue.production_per| number(2)}}%</span>
                                </div>
                                <div class="progress-group-bars">
                                  <b-progress
                                    height="{}"
                                    class="progress-xs"
                                    :value="this.dataDrawingexpenValue.production_per"
                                    variant="success"
                                  ></b-progress>
                                </div>
                              </div>
                            </b-col>

                            <b-col sm="3">
                              <div class="callout callout-warning">
                                <small class="card-title text-title">การขาย (ลบ.)</small>
                                <br />
                                <strong class="h2">{{this.dataDrawingexpenValue.sale_cost| number(2)}}</strong>
                                <div class="chart-wrapper" :style="{ top: '-10px'}"></div>
                              </div>
                              <div class="progress-group">
                                <div class="progress-group-header">
                                  <span class="title">%</span>
                                  <span
                                    class="ml-auto font-weight-bold"
                                  >{{this.dataDrawingexpenValue.sale_per| number(2)}}%</span>
                                </div>
                                <div class="progress-group-bars">
                                  <b-progress
                                    height="{}"
                                    class="progress-xs"
                                    :value="this.dataDrawingexpenValue.sale_per"
                                    variant="success"
                                  ></b-progress>
                                </div>
                              </div>
                            </b-col>

                            <b-col sm="3">
                              <div class="callout callout-warning">
                                <small class="card-title text-title">การบริหาร (ลบ.)</small>
                                <br />
                                <strong class="h2">{{this.dataDrawingexpenValue.manage_cost| number(2)}}</strong>
                                <div class="chart-wrapper" :style="{ top: '-10px'}"></div>
                              </div>
                              <div class="progress-group">
                                <div class="progress-group-header">
                                  <span class="title">%</span>
                                  <span
                                    class="ml-auto font-weight-bold"
                                  >{{this.dataDrawingexpenValue.manage_per| number(2)}}%</span>
                                </div>
                                <div class="progress-group-bars">
                                  <b-progress
                                    height="{}"
                                    class="progress-xs"
                                    :value="this.dataDrawingexpenValue.manage_per"
                                    variant="success"
                                  ></b-progress>
                                </div>
                              </div>
                            </b-col>

                            <b-col sm="3">
                              <div class="callout callout-warning">
                                <small class="card-title text-title">ตัดจ่าย/เสื่อมราคา (ลบ.)</small>
                                <br />
                                <strong class="h2">{{this.dataDrawingexpenValue.dp_cost| number(2)}}</strong>
                                <div class="chart-wrapper" :style="{ top: '-10px'}"></div>
                              </div>
                              <div class="progress-group">
                                <div class="progress-group-header">
                                  <span class="title">%</span>
                                  <span
                                    class="ml-auto font-weight-bold"
                                  >{{this.dataDrawingexpenValue.dp_per| number(2)}}%</span>
                                </div>
                                <div class="progress-group-bars">
                                  <b-progress
                                    height="{}"
                                    class="progress-xs"
                                    :value="this.dataDrawingexpenValue.dp_per"
                                    variant="success"
                                  ></b-progress>
                                </div>
                              </div>
                            </b-col>
                          </b-row>
                        </b-card>
                      </b-col>
                    </b-row>
                  </section>
                </div>
              </b-card-body>
            </b-collapse>
          </b-card>
        </transition>
      </b-col>
      <b-col sm="12">
      <b-card border-variant="secondary"  bg-variant="light" header="กราฟค่าใช้จ่ายสะสม" align="center">
        <b-card-text>
          <div style>
                    <canvas id="graph1"></canvas>
                    </div>

        </b-card-text>
      </b-card>
    </b-col>
    </b-row>



    <div class="animated fadeIn">
      <b-row>
        <b-col lg="12">
          <transition name="fade">
            <b-card no-body v-if="show">
              <div slot="header">
                <i class="fa fa-bar-chart" aria-hidden="true"></i> สรุปต้นทุน และค่าใช้จ่ายในการดำเนินงาน แยกรายเดือน
                <div class="card-header-actions">
                  <b-link class="card-header-action btn-minimize" v-b-toggle.collapse3>
                    <i class="icon-arrow-up"></i>
                  </b-link>
                </div>
              </div>
              <b-collapse id="collapse3" visible>
                <b-card-body>
                  
                  <gridmobile 
                    ref="gridDrawing"
                    
                    :fields="fieldDataAR"
                    :name="name"
                    :btnGrid="false"
                    :btnAdd="false"
                    :btnClone="false"
                    :btnView="false"
                    :btnEdit="false"
                  
                    :btnDelete="false"
                    :o_col_checkbox="false"
                    :trackBy="'rowID'"
                    :data="dataDrawingexpenValueByMn"
                    :o_navfooter_visible="false"
                  ></gridmobile>
                  <p>(หน่วย : ล้านบาท)</p>
                </b-card-body>
              </b-collapse>
            </b-card>
       
          </transition>
        </b-col>
         <b-col sm="4">
             <div style="width:350px;">
               <canvas id="graphBymn1" width="400" height="400"></canvas>


             </div>
           </b-col> 
            <b-col sm="4">
             <div style="width:350px;">
               <canvas id="graphBymn2" width="400" height="400"></canvas>


             </div>
            </b-col>  
             <b-col sm="4">
             <div style="width:350px;">
               <canvas id="graphBymn3" width="400" height="400"></canvas>


             </div>
</b-col>  
              <b-col sm="4">
             <div style="width:350px;">
               <canvas id="graphBymn4" width="400" height="400"></canvas>


             </div>
             </b-col>  
              <b-col sm="4">
             <div style="width:350px;">
               <canvas id="graphBymn5" width="400" height="400"></canvas>


             </div>
             </b-col>  
              <b-col sm="4">
             <div style="width:350px;">
               <canvas id="graphBymn6" width="400" height="400"></canvas>


             </div>
             </b-col>  
              <b-col sm="4">
             <div style="width:350px;">
               <canvas id="graphBymn7" width="400" height="400"></canvas>


             </div>
             </b-col>  
              <b-col sm="4">
             <div style="width:350px;">
               <canvas id="graphBymn8" width="400" height="400"></canvas>


             </div>
             </b-col>  
            
      </b-row>
    </div>



  </div>
</template>






<script>
import Vue from "vue";

import Chart from "chart.js";

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
      options: ["Option 1", "Option 2", "Option 3"],
      selectOptions: [
        "Option 1",
        "Option 2",
        "Option 3",
        {
          value: ["some value", "another value"],
          label: "Selected option"
        }
      ],
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
      name: "rptDrawing",
      drawingCd: "",
      perPage: 25,

      startRow: 0,
      stopRow: 25,
      
      iSeleY: [],
      dataDrawingARAll: [],
      dataDrawingexpenValue: {
            yr :0, total_cost :0, material_cost:0,
            material_per :0, employee_cost :0, employee_per  :0,
            paoun_cost :0, paoun_per:0,production_cost :0, production_per:0,
            sale_cost:0, sale_per:0, manage_cost :0,manage_per:0,dp_cost:0,dp_per:0
        
      },
      dataDrawingexpenValuegraph: {},
      dataDrawingexpenValueByMn: [],
      dataDrawingexpenValueByMnQ :{ total_cost :0, material_cost:0, employee_cost :0,  
                                    paoun_cost :0, production_cost :0, sale_cost:0, 
                                    manage_cost :0,dp_cost:0
                                  },

      dataDrawingexpenValueByMngraph1: [],
      dataDrawingexpenValueByMngraph2: [],
      dataDrawingexpenValueByMngraph3: [],
      dataDrawingexpenValueByMngraph4: [],
      dataDrawingexpenValueByMngraph5: [],
      dataDrawingexpenValueByMngraph6: [],
      dataDrawingexpenValueByMngraph7: [],
      dataDrawingexpenValueByMngraph8: [],
      
      dataDrawingARValueOvs: {},
      dataDrawingARPercenOvs: {},

      dataDrawingARValueAll: {},

      dataDrawing: [],
      dataDrawingEX: [],
      dataDrawingDM: [],
		 
      fieldDataAR: [
        {
          name: "mn",
          title: "ค่าใช้จ่ายแยกเดือน ",
          sortField: "mn_ntx",
          class: "text-left",
          visible: true
        },
        {
          name: "material_cost",
          title: "วัตถุดิบใช้ไป (ลบ.)",
          sortField: "material_cost",
          class: "text-right",
          visible: true
        },

        {
          name: "employee_cost",
          title: "เกี่ยวกับพนักงานสายผลิต (ลบ.)",
          sortField: "employee_cost",
          class: "text-right",
          visible: true
        },
        {
          name: "paoun_cost",
          title: "ค่าปะอวน (ลบ.)",
          sortField: "paoun_cost",
          class: "text-right",
          visible: true
        },

        {
          name: "production_cost",
          title: "การผลิต (ลบ.)",
          sortField: "production_cost",
          class: "text-right",
          visible: true
        },

        {
          name: "sale_cost",
          title: "การขาย (ลบ.)",
          sortField: "sale_cost",
          class: "text-right",
          visible: true
        },

        {
          name: "manage_cost",
          title: "การบริหาร (ลบ.)",
          sortField: "manage_cost",
          class: "text-right",
          visible: true
        },

        {
          name: "dp_cost",
          title: "ตัดจ่าย และเสื่อมราคา (ลบ.)",
          sortField: "dp_cost",
          class: "text-right",
          visible: true
        },
        {
          name: "total_cost",
          title: "รวม (ลบ.)",
          sortField: "total_cost",
          class: "text-right",
          visible: true
        } 
      ],

      iframe: {
        src: "", //DIV HERE #EDITOR
        loaded: false
      },

      dataSelect: [],
      objSelect: {},

      dataDashboardARAll: [],
      dataDashboardAROvs: [],
      dataDashboardARDom: [],

      dataDashboardARAllObj: {},
      dataDashboardAROvsObj: {},
      dataDashboardARDomObj: {},
      dataDrawingGraph:[],
      dataDrawingYYgraph:[],
      dataDrawingGraph2:[],
      dataDrawingYYgraph2:[], 
      dataDrawingGraph3:[],
      dataDrawingYYgraph3:[],
      dataDrawingGraph4:[],
      dataDrawingYYgraph4:[],
      dataDrawingGraph5:[],
      dataDrawingYYgraph5:[], 
      dataDrawingGraph6:[],
      dataDrawingYYgraph6:[],
      dataDrawingGraph7:[],
      dataDrawingYYgraph7:[],
      dataDrawingGraph8:[],
      dataDrawingYYgraph8:[],
      dataDrawingLabel:[],
      dataDrawingYYLabel:[]  
    };
  },

  methods: {
    Search(e) {
      this.QueryData();
    },

    QueryData() {
      //  this.dataDrawingexpenValue = {};  
      //this.dataDrawingexpenValuegraph = {};  
      API.GetDataKexpensestotal({
        data: { yr: this.txtSearch },
        callblack: res => {
          let errA = "";
          let _statusA = "";
          if (res.length <= 0) {
            AlertMessage("error", "ไม่พบข้อมูลต้นทุนและค่าใช้จ่ายภาพรวม");
            this.dataDrawingexpenValue.total_cost = 0;
            this.dataDrawingexpenValue.material_cost = 0;
            this.dataDrawingexpenValue.material_per = 0;
            this.dataDrawingexpenValue.employee_cost = 0;
            this.dataDrawingexpenValue.employee_per = 0;
            this.dataDrawingexpenValue.paoun_cost = 0;
            this.dataDrawingexpenValue.paoun_per = 0;
            this.dataDrawingexpenValue.production_cost = 0;
            this.dataDrawingexpenValue.production_per = 0;
            this.dataDrawingexpenValue.sale_cost = 0;
            this.dataDrawingexpenValue.sale_per = 0;
            this.dataDrawingexpenValue.manage_cost = 0;
            this.dataDrawingexpenValue.manage_per = 0;
            this.dataDrawingexpenValue.dp_cost = 0;
            this.dataDrawingexpenValue.dp_per = 0;

            this.dataDrawingexpenValuegraph.material_cost = 0;
            this.dataDrawingexpenValuegraph.employee_cost = 0;
            this.dataDrawingexpenValuegraph.paoun_cost = 0;
            this.dataDrawingexpenValuegraph.production_cost = 0;
            this.dataDrawingexpenValuegraph.sale_cost = 0;
            this.dataDrawingexpenValuegraph.manage_cost = 0;
            this.dataDrawingexpenValuegraph.dp_cost = 0;

            return;
          }
 //console.log(res);
          res.forEach((d, i) => {
            //this.dataDrawingARAll.push(d);
          
            this.dataDrawingexpenValue.yr = d.yr;
            this.dataDrawingexpenValue.total_cost = d.total_cost;
            
            this.dataDrawingexpenValue.material_cost = d.material_cost;
            this.dataDrawingexpenValue.material_per = d.material_per;
            this.dataDrawingexpenValue.employee_cost = d.employee_cost;
            this.dataDrawingexpenValue.employee_per = d.employee_per;
            this.dataDrawingexpenValue.paoun_cost = d.paoun_cost;
            this.dataDrawingexpenValue.paoun_per = d.paoun_per;
            this.dataDrawingexpenValue.production_cost = d.production_cost;
            this.dataDrawingexpenValue.production_per = d.production_per;
            this.dataDrawingexpenValue.sale_cost = d.sale_cost;
            this.dataDrawingexpenValue.sale_per = d.sale_per;
            this.dataDrawingexpenValue.manage_cost = d.manage_cost;
            this.dataDrawingexpenValue.manage_per = d.manage_per;
            this.dataDrawingexpenValue.dp_cost = d.dp_cost;
            this.dataDrawingexpenValue.dp_per = d.dp_per;

            this.dataDrawingexpenValuegraph.material_cost = d.material_cost;
            this.dataDrawingexpenValuegraph.employee_cost = d.employee_cost;
            this.dataDrawingexpenValuegraph.paoun_cost = d.paoun_cost;
            this.dataDrawingexpenValuegraph.production_cost = d.production_cost;
            this.dataDrawingexpenValuegraph.sale_cost = d.sale_cost;
            this.dataDrawingexpenValuegraph.manage_cost = d.manage_cost;
            this.dataDrawingexpenValuegraph.dp_cost = d.dp_cost;
          });

/*
          module("app", ["chart.js"]).controller("DoughnutCtrl", function ($scope) {
            $scope.labels = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
            $scope.data = this.GetDataKexpensestotalgraph;
          });
*/
          var ctx = document.getElementById('graph1').getContext("2d");
                    // var ctx = document.getElementById("graph1").getContext("2d");
                        var myChart = new Chart(ctx, {
                          type: 'doughnut',
                          data: {
                            labels: ['วัตถุดิบใช้ไป', 'เกี่ยวกับพนักงาน', 'ปะอวน','การผลิต','การขาย','การบริหาร','ตัดจ่าย/เสื่อมราคา'],
                            datasets: [{
                             label: 'สรุปต้นทุน และค่าใช้จ่ายในการดำเนินงาน บจก.KKF',
                              data:  [this.dataDrawingexpenValuegraph.material_cost, this.dataDrawingexpenValuegraph.employee_cost,
                                      this.dataDrawingexpenValuegraph.paoun_cost, this.dataDrawingexpenValuegraph.production_cost ,
                                      this.dataDrawingexpenValuegraph.sale_cost,this.dataDrawingexpenValuegraph.manage_cost,
                                      this.dataDrawingexpenValuegraph.dp_cost], //
                             // backgroundColor: ['#36C1A1', '#339DF9', '#E2A11E', '#E290E5','#F96565']
                             backgroundColor : [ '#803690', '#00ADF9', '#DCDCDC', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360']
                            }]
                          },
                          options: {
                            responsive: true
                          }
                        });
                         
           //console.log(this.txtSearch);
          API.GetDataKexpensesBymn({
            data: { yr: this.txtSearch },
            callblack: res => {
              let errA = "";
              let _statusA = "";
              if (res.length <= 0) {
                AlertMessage("error", "ไม่พบข้อมูล");
                return;
              }
             //console.log(res);
              

this.dataDrawingexpenValueByMn = [];
this.dataDrawingexpenValueByMnQ =[];
this.dataDrawingGraph=[];
this.dataDrawingYYgraph=[];
this.dataDrawingYYgraph.push(0);
this.dataDrawingGraph1=[];
this.dataDrawingYYgraph1=[];
this.dataDrawingYYgraph1.push(0);
this.dataDrawingGraph2=[];
this.dataDrawingYYgraph2=[];
this.dataDrawingYYgraph2.push(0);
this.dataDrawingGraph3=[];
this.dataDrawingYYgraph3=[];
this.dataDrawingYYgraph3.push(0);
this.dataDrawingGraph4=[];
this.dataDrawingYYgraph4=[];
this.dataDrawingYYgraph4.push(0);
this.dataDrawingGraph5=[];
this.dataDrawingYYgraph5=[];
this.dataDrawingYYgraph5.push(0);
this.dataDrawingGraph6=[];
this.dataDrawingYYgraph6=[];
this.dataDrawingYYgraph6.push(0);
this.dataDrawingGraph7=[];
this.dataDrawingYYgraph7=[];
this.dataDrawingYYgraph7.push(0);
this.dataDrawingLabel =[];
this.dataDrawingYYLabel=[]; 
this.dataDrawingYYLabel.push(0);

              var ii; 
               
             for (ii = 0; ii < res.length; ii++) {
               // console.log(res[ii]["mn"]);
                //res[0]["yr"][i].toString(),
                this.dataDrawingexpenValueByMnQ =[];
                this.dataDrawingexpenValueByMnQ.mn_ntx =  res[ii]["mn"];
                if (res[ii]["mn"]  == 1) {
                   this.dataDrawingexpenValueByMnQ.mn = " ม.ค";   
                   this.dataDrawingYYLabel.push("ม.ค");
                }
                else if (res[ii]["mn"]  == 2) {
                   this.dataDrawingexpenValueByMnQ.mn = " ก.พ";   
                   this.dataDrawingYYLabel.push("ก.พ");
                }
                else if (res[ii]["mn"]  == 3) {
                   this.dataDrawingexpenValueByMnQ.mn = " มี.ค";   
                   this.dataDrawingYYLabel.push("มี.ค");
                }
                else if (res[ii]["mn"]  = 4) {
                   this.dataDrawingexpenValueByMnQ.mn = " เม.ย"; 
                   this.dataDrawingYYLabel.push("เม.ย"); 
                }
                else if (res[ii]["mn"]  = 5) {
                   this.dataDrawingexpenValueByMnQ.mn = " พ.ค";   
                   this.dataDrawingYYLabel.push("พ.ค");
                }
                else if (res[ii]["mn"]  = 6) {
                   this.dataDrawingexpenValueByMnQ.mn = " มิ.ย";  
                   this.dataDrawingYYLabel.push("มิ.ย"); 
                }
                else if (res[ii]["mn"]  = 7) {
                   this.dataDrawingexpenValueByMnQ.mn = " ก.ค";  
                   this.dataDrawingYYLabel.push("ก.ค");  
                }
                else if (res[ii]["mn"]  = 8) {
                   this.dataDrawingexpenValueByMnQ.mn = " ส.ค";
                   this.dataDrawingYYLabel.push("ส.ค");     
                }
                else if (res[ii]["mn"]  = 9) {
                   this.dataDrawingexpenValueByMnQ.mn = " ก.ย";
                   this.dataDrawingYYLabel.push("ก.ย");    
                }
                else if (res[ii]["mn"]  = 10) {
                   this.dataDrawingexpenValueByMnQ.mn = " ต.ค";  
                   this.dataDrawingYYLabel.push("ต.ค");  
                }
                else if (res[ii]["mn"]  = 11) {
                   this.dataDrawingexpenValueByMnQ.mn = " พ.ย";
                   this.dataDrawingYYLabel.push("พ.ย");     
                }
                else if (res[ii]["mn"]  = 12) {
                   this.dataDrawingexpenValueByMnQ.mn = " ธ.ค"; 
                   this.dataDrawingYYLabel.push("ธ.ค");   
                } 
                //this.dataDrawingexpenValueByMnQ.mn =  res[ii]["mn"];
                this.dataDrawingexpenValueByMnQ.material_cost = res[ii]["material_cost"];
                this.dataDrawingexpenValueByMnQ.employee_cost = res[ii]["employee_cost"];
                this.dataDrawingexpenValueByMnQ.paoun_cost    = res[ii]["paoun_cost"];
                this.dataDrawingexpenValueByMnQ.production_cost = res[ii]["production_cost"];
                this.dataDrawingexpenValueByMnQ.sale_cost = res[ii]["sale_cost"];
                this.dataDrawingexpenValueByMnQ.manage_cost = res[ii]["manage_cost"];
                this.dataDrawingexpenValueByMnQ.dp_cost = res[ii]["dp_cost"];
                this.dataDrawingexpenValueByMnQ.total_cost = res[ii]["total_cost"];
                this.dataDrawingexpenValueByMn.push(this.dataDrawingexpenValueByMnQ);

                this.dataDrawingYYgraph.push(Number(res[ii].material_cost));
                this.dataDrawingYYgraph1.push(Number(res[ii].employee_cost));
                this.dataDrawingYYgraph2.push(Number(res[ii].paoun_cost));
                this.dataDrawingYYgraph3.push(Number(res[ii].production_cost));
                this.dataDrawingYYgraph4.push(Number(res[ii].sale_cost));
                this.dataDrawingYYgraph5.push(Number(res[ii].manage_cost));
                this.dataDrawingYYgraph6.push(Number(res[ii].dp_cost));
                this.dataDrawingYYgraph7.push(Number(res[ii].total_cost));
                
                //this.dataDrawingexpenValueByMngraph1
              };
 
               this.dataDrawingLabel = this.dataDrawingYYLabel; 
               this.dataDrawingGraph = this.dataDrawingYYgraph;

               var ctx = document.getElementById('graphBymn1').getContext("2d");
               this.bar = new Chart(ctx, {
                type: 'line',
                    options: {
                    responsive: true,

                    title: { // ข้อความที่อยู่ด้านบนของแผนภูมิ
                          text: "วัตถุดิบใช้ไป (ลบ.)",
                          //display: true
                      }



                },
                    data: {
                      labels: this.dataDrawingLabel,//['','ม.ค.', 'ก.พ.', 'มี.ค.'],//,'เม.ย.','พ.ค.','มิ.ย.','ก.ค.','ส.ค.','ก.ย.','ต.ค.','พ.ย.','ธ.ค.'
                      datasets: [
                        {
                backgroundColor: 'rgba(55, 173, 221, 0.1)',
                    borderColor: 'rgba(55, 173, 221, 1.0)',
                          label: 'วัตถุดิบใช้ไป (ลบ.)',
                      
                          data: this.dataDrawingGraph//['',71.27,75.77,75.77]

                        } 

                        ]
                    }
                    
                  }); 
             
             this.dataDrawingGraph1 = this.dataDrawingYYgraph1;

               var ctx = document.getElementById('graphBymn2').getContext("2d");
               this.bar = new Chart(ctx, {
                type: 'line',
                    options: {
                    responsive: true,

                    title: { // ข้อความที่อยู่ด้านบนของแผนภูมิ
                          text: "เกี่ยวกับพนักงานสายผลิต (ลบ.)",
                          //display: true
                      }



                },
                    data: {
                      labels: this.dataDrawingLabel,//['','ม.ค.', 'ก.พ.', 'มี.ค.'],//,'เม.ย.','พ.ค.','มิ.ย.','ก.ค.','ส.ค.','ก.ย.','ต.ค.','พ.ย.','ธ.ค.'
                      datasets: [
                        {
                backgroundColor: 'rgba(55, 173, 221, 0.1)',
                    borderColor: 'rgba(55, 173, 221, 1.0)',
                          label: 'เกี่ยวกับพนักงานสายผลิต (ลบ.)',
                      
                          data: this.dataDrawingGraph1//['',71.27,75.77,75.77]

                        } 

                        ]
                    }
                    
                  }); 

                  this.dataDrawingGraph2 = this.dataDrawingYYgraph2;

               var ctx = document.getElementById('graphBymn3').getContext("2d");
               this.bar = new Chart(ctx, {
                type: 'line',
                    options: {
                    responsive: true,

                    title: { // ข้อความที่อยู่ด้านบนของแผนภูมิ
                          text: "ค่าปะอวน (ลบ.)",
                          //display: true
                      }



                },
                    data: {
                      labels: this.dataDrawingLabel,//['','ม.ค.', 'ก.พ.', 'มี.ค.'],//,'เม.ย.','พ.ค.','มิ.ย.','ก.ค.','ส.ค.','ก.ย.','ต.ค.','พ.ย.','ธ.ค.'
                      datasets: [
                        {
                backgroundColor: 'rgba(55, 173, 221, 0.1)',
                    borderColor: 'rgba(55, 173, 221, 1.0)',
                          label: 'ค่าปะอวน (ลบ.)',
                      
                          data: this.dataDrawingGraph2//['',71.27,75.77,75.77]

                        } 

                        ]
                    }
                    
                  }); 

                  this.dataDrawingGraph3 = this.dataDrawingYYgraph3;

               var ctx = document.getElementById('graphBymn4').getContext("2d");
               this.bar = new Chart(ctx, {
                type: 'line',
                    options: {
                    responsive: true,

                    title: { // ข้อความที่อยู่ด้านบนของแผนภูมิ
                          text: "การผลิต (ลบ.)",
                          //display: true
                      }



                },
                    data: {
                      labels: this.dataDrawingLabel,//['','ม.ค.', 'ก.พ.', 'มี.ค.'],//,'เม.ย.','พ.ค.','มิ.ย.','ก.ค.','ส.ค.','ก.ย.','ต.ค.','พ.ย.','ธ.ค.'
                      datasets: [
                        {
                backgroundColor: 'rgba(55, 173, 221, 0.1)',
                    borderColor: 'rgba(55, 173, 221, 1.0)',
                          label: 'การผลิต (ลบ.)',
                      
                          data: this.dataDrawingGraph3//['',71.27,75.77,75.77]

                        } 

                        ]
                    }
                    
                  }); 

                  this.dataDrawingGraph4 = this.dataDrawingYYgraph4;

               var ctx = document.getElementById('graphBymn5').getContext("2d");
               this.bar = new Chart(ctx, {
                type: 'line',
                    options: {
                    responsive: true,

                    title: { // ข้อความที่อยู่ด้านบนของแผนภูมิ
                          text: "การขาย (ลบ.)",
                          //display: true
                      }



                },
                    data: {
                      labels: this.dataDrawingLabel,//['','ม.ค.', 'ก.พ.', 'มี.ค.'],//,'เม.ย.','พ.ค.','มิ.ย.','ก.ค.','ส.ค.','ก.ย.','ต.ค.','พ.ย.','ธ.ค.'
                      datasets: [
                        {
                backgroundColor: 'rgba(55, 173, 221, 0.1)',
                    borderColor: 'rgba(55, 173, 221, 1.0)',
                          label: 'การขาย (ลบ.)',
                      
                          data: this.dataDrawingGraph4//['',71.27,75.77,75.77]

                        } 

                        ]
                    }
                    
                  }); 

                  this.dataDrawingGraph5 = this.dataDrawingYYgraph5;

               var ctx = document.getElementById('graphBymn6').getContext("2d");
               this.bar = new Chart(ctx, {
                type: 'line',
                    options: {
                    responsive: true,

                    title: { // ข้อความที่อยู่ด้านบนของแผนภูมิ
                          text: "การบริหาร (ลบ.)",
                          //display: true
                      }



                },
                    data: {
                      labels: this.dataDrawingLabel,//['','ม.ค.', 'ก.พ.', 'มี.ค.'],//,'เม.ย.','พ.ค.','มิ.ย.','ก.ค.','ส.ค.','ก.ย.','ต.ค.','พ.ย.','ธ.ค.'
                      datasets: [
                        {
                backgroundColor: 'rgba(55, 173, 221, 0.1)',
                    borderColor: 'rgba(55, 173, 221, 1.0)',
                          label: 'การบริหาร (ลบ.)',
                      
                          data: this.dataDrawingGraph5//['',71.27,75.77,75.77]

                        } 

                        ]
                    }
                    
                  }); 

                this.dataDrawingGraph6 = this.dataDrawingYYgraph6;

               var ctx = document.getElementById('graphBymn7').getContext("2d");
               this.bar = new Chart(ctx, {
                type: 'line',
                    options: {
                    responsive: true,

                    title: { // ข้อความที่อยู่ด้านบนของแผนภูมิ
                          text: "ตัดจ่าย และเสื่อมราคา (ลบ.)",
                          //display: true
                      }



                },
                    data: {
                      labels: this.dataDrawingLabel,//['','ม.ค.', 'ก.พ.', 'มี.ค.'],//,'เม.ย.','พ.ค.','มิ.ย.','ก.ค.','ส.ค.','ก.ย.','ต.ค.','พ.ย.','ธ.ค.'
                      datasets: [
                        {
                backgroundColor: 'rgba(55, 173, 221, 0.1)',
                    borderColor: 'rgba(55, 173, 221, 1.0)',
                          label: 'ตัดจ่าย และเสื่อมราคา (ลบ.)',
                      
                          data: this.dataDrawingGraph6//['',71.27,75.77,75.77]

                        } 

                        ]
                    }
                    
                  }); 

             this.dataDrawingGraph7 = this.dataDrawingYYgraph7;

               var ctx = document.getElementById('graphBymn8').getContext("2d");
               this.bar = new Chart(ctx, {
                type: 'line',
                    options: {
                    responsive: true,

                    title: { // ข้อความที่อยู่ด้านบนของแผนภูมิ
                          text: "รวม (ลบ.)",
                          //display: true
                      }



                },
                    data: {
                      labels: this.dataDrawingLabel,//['','ม.ค.', 'ก.พ.', 'มี.ค.'],//,'เม.ย.','พ.ค.','มิ.ย.','ก.ค.','ส.ค.','ก.ย.','ต.ค.','พ.ย.','ธ.ค.'
                      datasets: [
                        {
                backgroundColor: 'rgba(55, 173, 221, 0.1)',
                    borderColor: 'rgba(55, 173, 221, 1.0)',
                          label: 'รวม (ลบ.)',
                      
                          data: this.dataDrawingGraph7//['',71.27,75.77,75.77]

                        } 

                        ]
                    }
                    
                  }); 
 
            }
          });
        }
      });
    },

    ongridclick(mode, data, evt) {
      this.mode = mode;

      this.dataSelect = ObjCopy(data);
      this.objSelect = ObjCopy(this.dataSelect[0]);

      this.iframe.loaded = false;

      let reader = new FileReader();
      reader.onload = function() {
        var dataURL = reader.result;
        var output = document.getElementById("output");
        output.src = dataURL;
      };
      reader.readAsDataURL(file);
    },

    load() {}
  },

  mounted() {
   
    //let date = new Date();
   
    var iii;
    var Selet = new Array();
     let date = new Date();
     Selet[0] = date.getFullYear();
     for (iii = 1; iii < 5; iii++) 
     {
        Selet[iii] = date.getFullYear()-iii;
     }
     this.iSeleY = Selet;
    //   console.log("555555");
  //   H1 = [];

    this.txtSearch = date.getFullYear();

    //this.Search();
    //console.log(this.txtSearch);
    this.QueryData();
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





