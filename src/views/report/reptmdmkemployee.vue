<template>
  <!-- <WidgetsBrand/> -->

  <div class="animated fadeIn">


    
    <b-row v-if="show">
      <b-col lg="12">
        <transition name="fade">
          <b-card no-body >
            <div slot="header">
              <h5><i class="fa fa-television" aria-hidden="true"></i> สรุปข้อมูลพนักงาน</h5>
             
            </div>
            <b-collapse id="collapse1" visible>

              <b-card-body class="text-center">





              <b-card class="text-center bg-light">
                  <b-container fluid>



                      <b-container class="bv-example-row">
                        <b-row>
                        
                          <b-col sm="4">

                            <b-form-group
                                  label="ประจำปี ค.ศ."
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
                             <b-button id="myCheck" @click="SHOWDATA" size="lg" variant="outline-info" squared    >แสดงข้อมูล</b-button>
                          </b-col>
                        </b-row>
                      </b-container>

                  </b-container>
                </b-card>









                 <b-row style="font-family: 'Tahoma', Times, serif;">


                     <b-col lg="4" >
                          <b-list-group >
                            <b-list-group-item style="backgroundColor:#85adad">
                             <b-img src="img/KIGLOGO.png" fluid alt="Responsive image"></b-img>
                            </b-list-group-item>
                            <b-list-group-item style="backgroundColor:#c2d6d6">
                                <b-row style="color: #ffffff;">

                          <b-col sm="6" class="border border-white">

                               <b-row>
                                   <b-container class="bv-example-row " >
                                    <b-row>
                                      <b-col style="backgroundColor:#1f4060" >จน.พนักงานตามโครงสร้าง</b-col>

                                      <div class="w-100"></div>
                                      <b-col style="backgroundColor:#3873ad"><h3><b>{{this.DS_11| number(0)}}</b></h3></b-col>
                                    
                                    </b-row>
                                  </b-container>
                              </b-row>
                                <b-row>
                                
                                   <b-container class="bv-example-row" >
                                  <b-row>
                                    <b-col style="backgroundColor:#1f4060">รายเดือน</b-col>
                                    <b-col style="backgroundColor:#1f4060">รายวัน</b-col>
                                    <div class="w-100" ></div>
                                    <b-col style="backgroundColor:#3873ad" ><h3><b>{{this.DS_12| number(0)}}</b></h3></b-col>
                                    <b-col style="backgroundColor:#3873ad"><h3><b>{{this.DS_13| number(0)}}</b></h3></b-col>
                                  </b-row>
                                </b-container> 


                              </b-row>


                        </b-col>

                           <b-col sm="6" class="border border-white">

                          <b-row>
                                   <b-container class="bv-example-row" >
                                    <b-row>
                                      <b-col style="backgroundColor:#1f4060">จน.พนักงานปัจจุบัน</b-col>

                                      <div class="w-100"></div>  
                                      <b-col style="backgroundColor:#3873ad"><h3><b>{{this.DS_14| number(0)}}</b></h3></b-col>
                                    
                                    </b-row>
                                  </b-container>
                              </b-row>
                                <b-row>
                                
                                   <b-container class="bv-example-row" >
                                  <b-row>
                                    <b-col style="backgroundColor:#1f4060">รายเดือน</b-col>
                                    <b-col style="backgroundColor:#1f4060">รายวัน</b-col>
                                    <div class="w-100"></div>
                                    <b-col style="backgroundColor:#3873ad"><h3><b>{{this.DS_15| number(0)}}</b></h3></b-col>
                                    <b-col style="backgroundColor:#3873ad"><h3><b>{{this.DS_16| number(0)}}</b></h3></b-col>
                                  </b-row>
                                </b-container> 

                              </b-row>

                        </b-col>

                              </b-row >

                            </b-list-group-item>
                            
                          </b-list-group>
                     </b-col>







                     <b-col lg="4">
                          <b-list-group>
                            <b-list-group-item style="backgroundColor:#85adad">
                             <b-img src="img/KKFLOGO.png" fluid alt="Responsive image"></b-img>
                            </b-list-group-item>
                            <b-list-group-item style="backgroundColor:#c2d6d6">
                                <b-row style="color: #ffffff;">



                          <b-col sm="6" class="border border-white">

                          <b-row>
                                   <b-container class="bv-example-row" >
                                    <b-row>
                                      <b-col style="backgroundColor:#1f4060" >จน.พนักงานตามโครงสร้าง</b-col>

                                      <div class="w-100"></div>
                                      <b-col style="backgroundColor:#3873ad"><h3><b>{{this.DS_21| number(0)}}</b></h3></b-col>
                                    
                                    </b-row>
                                  </b-container>
                              </b-row>
                                <b-row>
                                
                                   <b-container class="bv-example-row" >
                                  <b-row>
                                    <b-col style="backgroundColor:#1f4060">รายเดือน</b-col>
                                    <b-col style="backgroundColor:#1f4060">รายวัน</b-col>
                                    <div class="w-100"></div>
                                    <b-col style="backgroundColor:#3873ad" ><h3><b>{{this.DS_22| number(0)}}</b></h3></b-col>
                                    <b-col style="backgroundColor:#3873ad"><h3><b>{{this.DS_23| number(0)}}</b></h3></b-col>
                                  </b-row>
                                </b-container> 


                              </b-row>
 

                        </b-col>

                           <b-col sm="6" class="border border-white">

                          <b-row>
                                   <b-container class="bv-example-row" >
                                    <b-row>
                                      <b-col style="backgroundColor:#1f4060">จน.พนักงานปัจจุบัน</b-col>

                                      <div class="w-100"></div>  
                                      <b-col style="backgroundColor:#3873ad"><h3><b>{{this.DS_24| number(0)}}</b></h3></b-col>
                                    
                                    </b-row>
                                  </b-container>
                              </b-row>
                                <b-row>
                                
                                   <b-container class="bv-example-row" >
                                  <b-row>
                                    <b-col style="backgroundColor:#1f4060">รายเดือน</b-col>
                                    <b-col style="backgroundColor:#1f4060">รายวัน</b-col>
                                    <div class="w-100"></div>
                                    <b-col style="backgroundColor:#3873ad"><h3><b>{{this.DS_25| number(0)}}</b></h3></b-col>
                                    <b-col style="backgroundColor:#3873ad"><h3><b>{{this.DS_26| number(0)}}</b></h3></b-col>
                                  </b-row>
                                </b-container> 

                              </b-row>

                        </b-col>

                              </b-row >

                            </b-list-group-item>
                            
                          </b-list-group>
                     </b-col>




                          <b-col lg="4" >
                          <b-list-group >
                            <b-list-group-item style="backgroundColor:#85adad">
                             <b-img src="img/LOGOAMW.png" fluid alt="Responsive image"></b-img>
                            </b-list-group-item>
                            <b-list-group-item style="backgroundColor:#c2d6d6">
                                <b-row style="color: #ffffff;">

                          <b-col sm="6" class="border border-white">

                          <b-row>
                                   <b-container class="bv-example-row" >
                                    <b-row>
                                      <b-col style="backgroundColor:#1f4060" >จน.พนักงานตามโครงสร้าง</b-col>

                                      <div class="w-100"></div>
                                      <b-col style="backgroundColor:#3873ad"><h3><b>{{this.DS_31| number(0)}}</b></h3></b-col>
                                    
                                    </b-row>
                                  </b-container>
                              </b-row>
                                <b-row>
                                
                                   <b-container class="bv-example-row" >
                                  <b-row>
                                    <b-col style="backgroundColor:#1f4060">รายเดือน</b-col>
                                    <b-col style="backgroundColor:#1f4060">รายวัน</b-col>
                                    <div class="w-100"></div>
                                    <b-col style="backgroundColor:#3873ad" ><h3><b>{{this.DS_32| number(0)}}</b></h3></b-col>
                                    <b-col style="backgroundColor:#3873ad"><h3><b>{{this.DS_33| number(0)}}</b></h3></b-col>
                                  </b-row>
                                </b-container> 


                              </b-row>


                        </b-col>

                           <b-col sm="6" class="border border-white">

                          <b-row>
                                   <b-container class="bv-example-row" >
                                    <b-row>
                                      <b-col style="backgroundColor:#1f4060">จน.พนักงานปัจจุบัน</b-col>

                                      <div class="w-100"></div>  
                                      <b-col style="backgroundColor:#3873ad"><h3><b>{{this.DS_34| number(0)}}</b></h3></b-col>
                                    
                                    </b-row>
                                  </b-container>
                              </b-row>
                                <b-row>
                                
                                   <b-container class="bv-example-row" >
                                  <b-row>
                                    <b-col style="backgroundColor:#1f4060">รายเดือน</b-col>
                                    <b-col style="backgroundColor:#1f4060">รายวัน</b-col>
                                    <div class="w-100"></div>
                                    <b-col style="backgroundColor:#3873ad"><h3><b>{{this.DS_35| number(0)}}</b></h3></b-col>
                                    <b-col style="backgroundColor:#3873ad"><h3><b>{{this.DS_36| number(0)}}</b></h3></b-col>
                                  </b-row>
                                </b-container> 

                              </b-row>

                        </b-col>

                              </b-row >

                            </b-list-group-item>
                            
                          </b-list-group>
                     </b-col>








                  </b-row>




                  <br>






                    <b-row style="font-family: 'Tahoma', Times, serif;">


                     <b-col lg="4">
                          <b-list-group>
                            <b-list-group-item style="backgroundColor:#85adad">
                             <b-img src="img/LOGOKKENG.png" fluid alt="Responsive image"></b-img>
                            </b-list-group-item>
                            <b-list-group-item style="backgroundColor:#c2d6d6">
                                <b-row style="color: #ffffff;">



                          <b-col sm="6" class="border border-white">

                          <b-row>
                                   <b-container class="bv-example-row" >
                                    <b-row>
                                      <b-col style="backgroundColor:#1f4060" >จน.พนักงานตามโครงสร้าง</b-col>

                                      <div class="w-100"></div>
                                      <b-col style="backgroundColor:#3873ad"><h3><b>{{this.DS_41| number(0)}}</b></h3></b-col>
                                    
                                    </b-row>
                                  </b-container>
                              </b-row>
                                <b-row>
                                
                                   <b-container class="bv-example-row" >
                                  <b-row>
                                    <b-col style="backgroundColor:#1f4060">รายเดือน</b-col>
                                    <b-col style="backgroundColor:#1f4060">รายวัน</b-col>
                                    <div class="w-100"></div>
                                    <b-col style="backgroundColor:#3873ad" ><h3><b>{{this.DS_42| number(0)}}</b></h3></b-col>
                                    <b-col style="backgroundColor:#3873ad"><h3><b>{{this.DS_43| number(0)}}</b></h3></b-col>
                                  </b-row>
                                </b-container> 


                              </b-row>


                        </b-col>

                           <b-col sm="6" class="border border-white">

                          <b-row>
                                   <b-container class="bv-example-row" > 
                                    <b-row>
                                      <b-col style="backgroundColor:#1f4060">จน.พนักงานปัจจุบัน</b-col>

                                      <div class="w-100"></div>  
                                      <b-col style="backgroundColor:#3873ad"><h3><b>{{this.DS_44| number(0)}}</b></h3></b-col>
                                    
                                    </b-row>
                                  </b-container>
                              </b-row>
                                <b-row>
                                
                                   <b-container class="bv-example-row" >
                                  <b-row>
                                    <b-col style="backgroundColor:#1f4060">รายเดือน</b-col>
                                    <b-col style="backgroundColor:#1f4060">รายวัน</b-col>
                                    <div class="w-100"></div>
                                    <b-col style="backgroundColor:#3873ad"><h3><b>{{this.DS_45| number(0)}}</b></h3></b-col>
                                    <b-col style="backgroundColor:#3873ad"><h3><b>{{this.DS_46| number(0)}}</b></h3></b-col>
                                  </b-row>
                                </b-container> 

                              </b-row>

                        </b-col>

                              </b-row >

                            </b-list-group-item>
                            
                          </b-list-group>
                     </b-col>





 <b-col lg="4" >
                          <b-list-group >
                            <b-list-group-item style="backgroundColor:#85adad">
                             <b-img src="img/LOGOBP.png" fluid alt="Responsive image"></b-img>
                            </b-list-group-item>
                            <b-list-group-item style="backgroundColor:#c2d6d6">
                                <b-row style="color: #ffffff;">

                          <b-col sm="6" class="border border-white">

                          <b-row>
                                   <b-container class="bv-example-row" >
                                    <b-row>
                                      <b-col style="backgroundColor:#1f4060" >จน.พนักงานตามโครงสร้าง</b-col>

                                      <div class="w-100"></div>
                                      <b-col style="backgroundColor:#3873ad"><h3><b>{{this.DS_51| number(0)}}</b></h3></b-col>
                                    
                                    </b-row>
                                  </b-container>
                              </b-row>
                                <b-row>
                                
                                   <b-container class="bv-example-row" >
                                  <b-row>
                                    <b-col style="backgroundColor:#1f4060">รายเดือน</b-col>
                                    <b-col style="backgroundColor:#1f4060">รายวัน</b-col>
                                    <div class="w-100"></div>
                                    <b-col style="backgroundColor:#3873ad" ><h3><b>{{this.DS_52| number()}}</b></h3></b-col>
                                    <b-col style="backgroundColor:#3873ad"><h3><b>{{this.DS_53| number(0)}}</b></h3></b-col>
                                  </b-row>
                                </b-container> 


                              </b-row>


                        </b-col>

                           <b-col sm="6" class="border border-white">

                          <b-row>
                                   <b-container class="bv-example-row" >
                                    <b-row>
                                      <b-col style="backgroundColor:#1f4060">จน.พนักงานปัจจุบัน</b-col>

                                      <div class="w-100"></div>  
                                      <b-col style="backgroundColor:#3873ad"><h3><b>{{this.DS_54| number(0)}}</b></h3></b-col>
                                    
                                    </b-row>
                                  </b-container>
                              </b-row>
                                <b-row>
                                
                                   <b-container class="bv-example-row" >
                                  <b-row>
                                    <b-col style="backgroundColor:#1f4060">รายเดือน</b-col>
                                    <b-col style="backgroundColor:#1f4060">รายวัน</b-col>
                                    <div class="w-100"></div>
                                    <b-col style="backgroundColor:#3873ad"><h3><b>{{this.DS_55| number(0)}}</b></h3></b-col>
                                    <b-col style="backgroundColor:#3873ad"><h3><b>{{this.DS_56| number(0)}}</b></h3></b-col>
                                  </b-row>
                                </b-container> 

                              </b-row>

                        </b-col>

                              </b-row >

                            </b-list-group-item>
                            
                          </b-list-group>
                     </b-col>



                  </b-row> 






              </b-card-body>

            </b-collapse>
          </b-card>
       </transition>





      </b-col>
    </b-row>



 
      <b-row >
        <b-col lg="12">
          <transition name="fade">
            <b-card no-body >
              <div slot="header">
                <i class="fa fa-bar-chart" aria-hidden="true"></i> สรุปอัตรากำลังคน แยกบริษัท/หน่วยงาน
                <div class="card-header-actions">
                  <b-link class="card-header-action btn-minimize" v-b-toggle.collapse3>
                    <i class="icon-arrow-up"></i>
                  </b-link>
                </div>
              </div>
              <b-collapse id="collapse3" visible>
                <b-card-body>
                 
                <b-row>
 
                       <b-table-simple hover small caption-top responsive striped bordered style="overflow-X: scroll;overflow-y: hidden"> 
                   
                        <b-thead  style="background-color: #000000;font-weight: bold;color:#ffffff">
                         							
                          <b-tr class="text-center">
                            <b-th>บริษัท/หน่วยงาน</b-th>
                            <b-th>ม.ค.</b-th>
                            <b-th>ก.พ.</b-th>
                            <b-th>มี.ค.</b-th>
                            <b-th>เม.ย.</b-th>
                            <b-th>พ.ค.</b-th>
                            <b-th>มิ.ย.</b-th>
                            <b-th>ก.ค.</b-th>
                            <b-th>ส.ค.</b-th>
                            <b-th>ก.ย.</b-th>
                            <b-th>ต.ค.</b-th>
                            <b-th>พ.ย.</b-th>
                            <b-th>ธ.ค.</b-th>
                          </b-tr>
                        </b-thead>
                        <b-tbody v-for="item in itemData" :key="item.code_id">  
                          <b-tr  v-bind:id="item.code_id" class="text-right">
                            <b-td class="text-left">
                              <i v-bind:id="item.code_id+'B'" style="font-size:18px;" class="fa fa-plus-circle" v-on:click="showshild(item.code_id)"></i> 
                                   {{item.stocode}}</b-td> 
                            <b-td >{{item.d1}}</b-td>
                            <b-td>{{item.d2}}</b-td>
                            <b-td>{{item.d3}}</b-td>
                            <b-td>{{item.d4}}</b-td>
                            <b-td>{{item.d5}}</b-td>
                            <b-td>{{item.d6}}</b-td>
                            <b-td>{{item.d7}}</b-td>
                            <b-td>{{item.d8}}</b-td>
                            <b-td>{{item.d9}}</b-td>
                            <b-td>{{item.d10}}</b-td>
                            <b-td>{{item.d11}}</b-td>
                            <b-td>{{item.d12}}</b-td> 
                          </b-tr>
                          
                        </b-tbody>
                         <b-tfoot  v-for="item2 in itemDataSUM" :key="item2.stocode" style="background-color: #4d4d4d;font-weight: bold;color:#ffffff">  
                           <b-tr class="text-right">
                              <b-td>{{item2.stocode}}</b-td>
                              <b-td>{{item2.d1}}</b-td>
                              <b-td>{{item2.d2}}</b-td>
                              <b-td>{{item2.d3}}</b-td>
                              <b-td>{{item2.d4}}</b-td>
                              <b-td>{{item2.d5}}</b-td>
                              <b-td>{{item2.d6}}</b-td>
                              <b-td>{{item2.d7}}</b-td>
                              <b-td>{{item2.d8}}</b-td>
                              <b-td>{{item2.d9}}</b-td>
                              <b-td>{{item2.d10}}</b-td>
                              <b-td>{{item2.d11}}</b-td>
                              <b-td>{{item2.d12}}</b-td> 
                           </b-tr>
                         </b-tfoot> 

                      </b-table-simple>
 
 
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

import '../../../node_modules/@fortawesome/fontawesome-free/css/all.css';
import '../../../node_modules/vue-ads-table-tree/dist/vue-ads-table-tree.css';

import Vue from "vue";
import VueAdsTableTree from 'vue-ads-table-tree';
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
var date = new Date();
var item= null;
var i_ONLOAD = true;


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
  components: {
        VueAdsTableTree,
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
      show1: true,
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
      objSelect: {},
      itemData:[],
      itemDatatot:[],
      itemDataSUM:[],
       /* {code_id:1,code_Sub:'M1' ,stocode: 'M1' ,d1: '124',d2: '132',d3: '132',d4: '132',d5: '132',d6: '132',d7: '132',d8: '132',d9: '132',d10: '132',d11: '132',d12: '132' },
        {code_id:2, code_Sub:'S1' ,stocode: 'S1' ,d1: '124',d2: '132',d3: '132',d4: '132',d5: '132',d6: '132',d7: '132',d8: '132',d9: '132',d10: '132',d11: '132',d12: '132' },
        {code_id:3, code_Sub:'L2' ,stocode: 'L2' ,d1: '124',d2: '132',d3: '132',d4: '132',d5: '132',d6: '132',d7: '132',d8: '132',d9: '132',d10: '132',d11: '132',d12: '132' },
        {code_id:4, code_Sub:'L2' ,stocode: 'L2' ,d1: '124',d2: '132',d3: '132',d4: '132',d5: '132',d6: '132',d7: '132',d8: '132',d9: '132',d10: '132',d11: '132',d12: '132' },
        {code_id:5, code_Sub:'L2'  ,stocode: 'L2',d1: '124',d2: '132',d3: '132',d4: '132',d5: '132',d6: '132',d7: '132',d8: '132',d9: '132',d10: '132',d11: '132',d12: '132' },
        {code_id:6, code_Sub:'L2'  ,stocode: 'L2',d1: '124',d2: '132',d3: '132',d4: '132',d5: '132',d6: '132',d7: '132',d8: '132',d9: '132',d10: '132',d11: '132',d12: '132' },
        {code_id:7, code_Sub:'S1' ,stocode: 'S1' ,d1: '124',d2: '132',d3: '132',d4: '132',d5: '132',d6: '132',d7: '132',d8: '132',d9: '132',d10: '132',d11: '132',d12: '132' },
        {code_id:8, code_Sub:'L7' ,stocode: 'L7' ,d1: '124',d2: '132',d3: '132',d4: '132',d5: '132',d6: '132',d7: '132',d8: '132',d9: '132',d10: '132',d11: '132',d12: '132' },
        {code_id:9, code_Sub:'L7' ,stocode: 'L7' ,d1: '124',d2: '132',d3: '132',d4: '132',d5: '132',d6: '132',d7: '132',d8: '132',d9: '132',d10: '132',d11: '132',d12: '132' },
        {code_id:10, code_Sub:'L7'  ,stocode: 'L7',d1: '124',d2: '132',d3: '132',d4: '132',d5: '132',d6: '132',d7: '132',d8: '132',d9: '132',d10: '132',d11: '132',d12: '132' },
        {code_id:11, code_Sub:'L7'  ,stocode: 'L7',d1: '124',d2: '132',d3: '132',d4: '132',d5: '132',d6: '132',d7: '132',d8: '132',d9: '132',d10: '132',d11: '132',d12: '132' }*/
      //,
      DS_11:"0",DS_12:"0",DS_13:"0",DS_14:"0",DS_15:"0",DS_16:"0",
      DS_21:"0",DS_22:"0",DS_23:"0",DS_24:"0",DS_25:"0",DS_26:"0",
      DS_31:"0",DS_32:"0",DS_33:"0",DS_34:"0",DS_35:"0",DS_36:"0",
      DS_41:"0",DS_42:"0",DS_43:"0",DS_44:"0",DS_45:"0",DS_46:"0",
      DS_51:"0",DS_52:"0",DS_53:"0",DS_54:"0",DS_55:"0",DS_56:"0"
 
    };
  },

  methods: {

    Search(e) {
      
      //this.QueryData();
      //this.SHOWDATA(); 

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

              
              
             

    },showshild(el_id)
    {   
      
         var s_SUB = "";
         var s_SUB_TEX = "";
         var id_OLD = "";
         var id_OLD_class = "";
         var idB = el_id+"B";
         var s_SUB_TEX_L = "";

         const result = this.itemData.find( ({ code_id }) => code_id === el_id);
         s_SUB = result.code_Sub.substring(0, 1);
         
         if(s_SUB==="M"){ s_SUB = "S"; }else
         if(s_SUB==="S"){ s_SUB = "L"; };
         
         s_SUB_TEX = s_SUB+result.code_id;
          
        for(let key in this.itemData) 
        {
          if(this.itemData[key].code_Sub===s_SUB_TEX)
          { 
              s_SUB_TEX_L = "L"+this.itemData[key].code_id; /// ต้องการปิด L ด้วย
              id_OLD = this.itemData[key].code_id;

              var e = document.getElementById(this.itemData[key].code_id);
            
              if(e.style.visibility == 'collapse')
              { 
                 id_OLD_class  = 'visible';
                 e.style.visibility = 'visible';
                 document.getElementById(idB).className = "fa fa-minus-circle"; 
              }
              else
              {
                id_OLD_class  = 'collapse';
                e.style.visibility = 'collapse'; 
                document.getElementById(idB).className = "fa fa-plus-circle"; 
              }
              
          }
          
          if(s_SUB==="S")
              {
                  
                  if(id_OLD_class === 'collapse')
                  {
                      if(this.itemData[key].code_Sub===s_SUB_TEX_L)
                      {
                         e = document.getElementById(this.itemData[key].code_id);
                         e.style.visibility = 'collapse';
                         document.getElementById(id_OLD+'B').className = "fa fa-plus-circle"; 
                      }
                       
                  }
              }


        }

    },SHOWDATA2()
    {
                    for(let key in this.itemData) 
                      {
                        var idB = this.itemData[key].code_id+"B";
                    
                        var e = document.getElementById(this.itemData[key].code_id);
                        //console.log(e);
                        if(this.itemData[key].code_Sub.substring(0, 1) !== "M")
                        { 
                            e.style.visibility = 'collapse'; 
                            
                        } 

                        if (this.itemData[key].code_Sub.substring(0, 1) === "M")
                        {
                            e.style.backgroundColor = "#d9e6f2";
                        }

                        if (this.itemData[key].code_Sub.substring(0, 1) === "L")
                        {
                            document.getElementById(idB).className = "fa fa-chevron-right";  ////fas fa-minus 
                            e.style.backgroundColor = "#f2f2f2";
                             
                        }

                        if (this.itemData[key].code_Sub.substring(0, 1) === "S")
                        {
                            e.style.backgroundColor = "#f4f4d7";
                        }
                      };

    },thousands_separators(num)
        {
          var num_parts = num.toString().split(".");
          num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
          return num_parts.join(".");
        },
    SHOWDATA()
    {

              API.GetDataSearchKemployeetotal({
              data:{iYear:this.txtSearch},             ///this.txtSearch 
              callblack: res => 
              {
                                  this.DS_21= "-";
                                  this.DS_22= "-";
                                  this.DS_23= "-";
                                  this.DS_24= "-";
                                  this.DS_25= "-";
                                  this.DS_26= "-"; 
                              
                           
                                   this.DS_41=  "-";
                                  this.DS_42= "-";
                                  this.DS_43= "-";
                                  this.DS_44= "-";
                                  this.DS_45= "-";
                                  this.DS_46= "-";
                               
                                  this.DS_11=  "-";
                                  this.DS_12= "-";
                                  this.DS_13= "-";
                                  this.DS_14="-";
                                  this.DS_14= "-";
                                  this.DS_14= "-";
                                  this.DS_15= "-";
                                  this.DS_16= "-";
                                 
                                 this.DS_51= "-";
                                  this.DS_52= "-";
                                  this.DS_53= "-";
                                  this.DS_54= "-";
                                  this.DS_55= "-";
                                  this.DS_56= "-";
                              
                                  this.DS_31= "-";
                                  this.DS_32= "-";
                                  this.DS_33= "-";
                                  this.DS_34= "-";
                                  this.DS_35= "-";
                                  this.DS_36= "-";


                 this.itemDatatot = res;
                 for(let key in this.itemDatatot) 
                    {

          /*            DS_11:"0",DS_12:"0",DS_13:"0",DS_14:"0",DS_15:"0",DS_16:"0",  KIG
      DS_21:"0",DS_22:"0",DS_23:"0",DS_24:"0",DS_25:"0",DS_26:"0",  KKF
      DS_31:"0",DS_32:"0",DS_33:"0",DS_34:"0",DS_35:"0",DS_36:"0",  AMW
      DS_41:"0",DS_42:"0",DS_43:"0",DS_44:"0",DS_45:"0",DS_46:"0",KKE
      DS_51:"0",DS_52:"0",DS_53:"0",DS_54:"0",DS_55:"0",DS_56:"0"BPT
                       */
                       switch(this.itemDatatot[key].company_code) {
                                case "KKF": 
                                  this.DS_21= ((this.itemDatatot[key].emp_Struct_Mn + this.itemDatatot[key].emp_Struct_Day)).toLocaleString('en-IN');
                                  this.DS_22= this.itemDatatot[key].emp_Struct_Mn;
                                  this.DS_23= this.itemDatatot[key].emp_Struct_Day;
                                  this.DS_24= this.itemDatatot[key].emp_Act_Mn + this.itemDatatot[key].emp_Act_Day;
                                  this.DS_25= this.itemDatatot[key].emp_Act_Mn;
                                  this.DS_26= this.itemDatatot[key].emp_Act_Day;
                                  break;
                                case "KKE":
                                   this.DS_41=  this.itemDatatot[key].emp_Struct_Mn + this.itemDatatot[key].emp_Struct_Day;
                                  this.DS_42= this.itemDatatot[key].emp_Struct_Mn;
                                  this.DS_43= this.itemDatatot[key].emp_Struct_Day;
                                  this.DS_44= this.itemDatatot[key].emp_Act_Mn + this.itemDatatot[key].emp_Act_Day;
                                  this.DS_45= this.itemDatatot[key].emp_Act_Mn;
                                  this.DS_46= this.itemDatatot[key].emp_Act_Day;
                                  break;
                                  case "KIG":
                                    this.DS_11=  this.itemDatatot[key].emp_Struct_Mn + this.itemDatatot[key].emp_Struct_Day;
                                  this.DS_12= this.itemDatatot[key].emp_Struct_Mn;
                                  this.DS_13= this.itemDatatot[key].emp_Struct_Day;
                                  this.DS_14= this.itemDatatot[key].emp_Act_Mn + this.itemDatatot[key].emp_Act_Day;
                                  this.DS_15= this.itemDatatot[key].emp_Act_Mn;
                                  this.DS_16= this.itemDatatot[key].emp_Act_Day;
                                  break;
                                  case "BPT":
                                    this.DS_51= this.itemDatatot[key].emp_Struct_Mn + this.itemDatatot[key].emp_Struct_Day;
                                  this.DS_52= this.itemDatatot[key].emp_Struct_Mn;
                                  this.DS_53= this.itemDatatot[key].emp_Struct_Day;
                                  this.DS_54= this.itemDatatot[key].emp_Act_Mn + this.itemDatatot[key].emp_Act_Day;
                                  this.DS_55= this.itemDatatot[key].emp_Act_Mn;
                                  this.DS_56= this.itemDatatot[key].emp_Act_Day;
                                  break;
                                  case "AMW":
                                      this.DS_31= this.itemDatatot[key].emp_Struct_Mn + this.itemDatatot[key].emp_Struct_Day;
                                  this.DS_32= this.itemDatatot[key].emp_Struct_Mn;
                                  this.DS_33= this.itemDatatot[key].emp_Struct_Day;
                                  this.DS_34= this.itemDatatot[key].emp_Act_Mn + this.itemDatatot[key].emp_Act_Day;
                                  this.DS_35= this.itemDatatot[key].emp_Act_Mn;
                                  this.DS_36= this.itemDatatot[key].emp_Act_Day;
                                  break;
                                default:
                                  // code block
                              }
                         
                    }
              }
              });



              API.GetDataSearchKemployeelist({
              data:{iYear:this.txtSearch},             ///this.txtSearch 
              callblack: res => 
              {
                 this.itemData = res;
                 setTimeout(() => this.SHOWDATA2(), 1000);
              }
              });

              API.GetDataSearchKemployeelistsum({
              data:{iYear:this.txtSearch},             ///this.txtSearch 
              callblack: res => 
              {
                 this.itemDataSUM = res;
                  
              }
              });



             
                  /*    */

    }
    
 
     
  },
  mounted() {

     var Selet = new Array();
   //  var date = new Date();

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
     i_ONLOAD = true;
    //this.Search();
 //this.QueryData();
      this.SHOWDATA();
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