<template>
  <!-- <WidgetsBrand/> -->

  <div class="animated fadeIn">


<div>
  <b-list-group horizontal>
    <b-list-group-item  type="button" @click="to_Material2" > รายงาน สรุปปริมาณและมูลค่าคงเหลือวัตถุดิบแยกตามกลุ่มวัตถุดิบ</b-list-group-item>
    <b-list-group-item variant="primary " type="button"  >รายงาน สรุปปริมาณ มูลค่าคงเหลือ และประมาณการการใช้วัตถุดิบ</b-list-group-item>
  </b-list-group>
</div>

    
    <b-row >
      <b-col lg="12">
        <transition name="fade">
          <b-card no-body >
            <div slot="header">
              <h5><i class="fa fa-television" aria-hidden="true"></i> รายงานสรุปปริมาณ มูลค่าคงเหลือและประมาณการการใช้วัตถุดิบ </h5>
              <div class="card-header-actions">
                <b-link class="card-header-action btn-minimize" v-b-toggle.collapse1>
                  <i class="icon-arrow-up"></i>
                </b-link>
              </div>
            </div>
            <b-collapse id="collapse1" visible>

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

                       <b-card-body> 

                                <b-row> 
                                <b-col lg="12" v-resize:throttle.100="onResize">
                                    <b-row >
                                        
                                        <b-col lg="12" style="position:relative;z-index: 1;">
                                             
                                            <b-list-group-item style="backgroundColor:#e3e8e8" class="d-flex align-items-center">
                                 
                                        
                                                   
                                                <span class=""><b>กราฟแสดงประมาณการจน.เดือนที่ใช้เม็ดวัตถุดิบคงเหลือในคลังและวัตถุดิบค้างรับจาก Supplier</b></span>
                                                
                                            </b-list-group-item>

                                         </b-col>     
                                   </b-row>  
                                    <b-list-group-item class="d-flex align-items-center" style="backgroundColor:rgba(178, 206, 215, 0.32);position:relative;bottom:35px;">

                                         <canvas v-bind:height="height2" id="graph1">  
                                         </canvas>
                                    </b-list-group-item>
                                </b-col>      
                                </b-row>


                        <i class="fa fa-television" aria-hidden="true"></i>
                                  ปริมาณและมูลค่าคงเหลือวัตถุดิบ (ตัน)
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


   



    <div class="animated fadeIn" >
      <b-row>
        <b-col lg="12">
          <transition name="fade">
            <b-card no-body >
              <div slot="header">
                <i class="fa fa-bar-chart" aria-hidden="true"></i> รายการตารางราคาสั่งซื้อวัตถุดิบจาก Supplier ล่าสุด (บาท/กก.)

         
                <div class="card-header-actions">
                  <b-link class="card-header-action btn-minimize" v-b-toggle.collapse4>
                    <i class="icon-arrow-up"></i>
                  </b-link>
                </div>
              </div>
              <b-collapse id="collapse4" visible>
                <b-card-body>

                              <grid
                                        ref="DGV10"
                                        :fields="F_DGV10"
                                        :name="name"
                                        :btnGrid="false"
                                        :btnAdd="false"
                                        :btnClone="false"
                                        :btnView="false"
                                        :btnEdit="false"
                                        :btnDelete="false"
                                        :o_col_checkbox="false"
                                        :trackBy="'rowID'"
                                        :data="dataDGV10"
                                        :o_navfooter_visible="false"
                                      ></grid>
               
                </b-card-body>
              </b-collapse>
            </b-card>
          </transition>
        </b-col>
      </b-row>
    </div>




     <div class="animated fadeIn" >
      <b-row >
        <b-col lg="12">
          <transition name="fade">
            <b-card no-body >
              <div slot="header">
                <i class="fa fa-bar-chart" aria-hidden="true"></i> ประมาณการการใช้ DM  
                <div class="card-header-actions">
                  <b-link class="card-header-action btn-minimize" v-b-toggle.collapse3>
                    <i class="icon-arrow-up"></i>
                  </b-link>
                </div>
              </div>
              <b-collapse id="collapse3" visible>
                <b-card-body>
                  
                    <b-row> 
                      <b-col lg="12">



                        <b-col lg="6">
                        
                                  <i class="fa fa-television" aria-hidden="true"></i>
                                  ประมาณการการใช้ DM ตามปริมาณยอด Order สั่งผลิต ภาพรวม (ตัน)
                                      <grid
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
                                      ></grid>

                      </b-col> 
                               
 

                      </b-col> 
                    </b-row>  <br>   <br>  


                    <b-row> 
                      
                      <b-col lg="8">
                          
                   <div>
                    <i class="fa fa-television" aria-hidden="true"></i>
                                                ประมาณการการใช้ DM ปริมาณยอด Order สั่งผลิต รายเดือน (ตัน)
                          
                          <b-tabs>
                    <b-tab @click="c_K1" title="ขายในประเทศ" active>

                       <div >
                                        <b-card border-variant="secondary" bg-variant="light" header="กราฟแสดงปริมาณประมาณการการใช้ DM (ตัน) ขายในประเทศ " align="center">
                                          <b-card-text>
                                                        <canvas v-bind:height="100" id="graph5"></canvas>
                                          </b-card-text>
                                        </b-card>
                                 </div>


                      <br>  
                              <grid
                                ref="DGV4"
                                :fields="F_DGV4"
                                :name="name"
                                :btnGrid="false"
                                :btnAdd="false"
                                :btnClone="false"
                                :btnView="false"
                                :btnEdit="false"
                                :btnDelete="false"
                                :o_col_checkbox="false"
                                :trackBy="'rowID'"
                                :data="dataDGV4"
                                :o_navfooter_visible="false"
                              ></grid>  
                              


                    </b-tab>
                    <b-tab  @click="c_K2" title="ขายต่างประเทศ" >

                       <div >
                                        <b-card border-variant="secondary" bg-variant="light" header="กราฟแสดงปริมาณประมาณการการใช้ DM (ตัน) ขายต่างประเทศ " align="center">
                                          <b-card-text>
                                                        <canvas v-bind:height="100" id="graph6"></canvas>
                                          </b-card-text>
                                        </b-card>
                                 </div>
                      <br> 

                            <grid
                                ref="DGV5"
                                :fields="F_DGV5"
                                :name="name"
                                :btnGrid="false"
                                :btnAdd="false"
                                :btnClone="false"
                                :btnView="false"
                                :btnEdit="false"
                                :btnDelete="false"
                                :o_col_checkbox="false"
                                :trackBy="'rowID'"
                                :data="dataDGV5"
                                :o_navfooter_visible="false"
                              ></grid> 


                    </b-tab>
                    <b-tab  @click="c_K3" title="ภาพรวม" >
                      <div >
                                        <b-card border-variant="secondary" bg-variant="light" header="กราฟแสดงปริมาณประมาณการการใช้ DM (ตัน) ภาพรวม " align="center">
                                          <b-card-text>
                                                        <canvas v-bind:height="100" id="graph7"></canvas>
                                          </b-card-text>
                                        </b-card>
                                 </div>
                      <br> 

                            <grid
                                ref="DGV6"
                                :fields="F_DGV6"
                                :name="name"
                                :btnGrid="false"
                                :btnAdd="false"
                                :btnClone="false"
                                :btnView="false"
                                :btnEdit="false"
                                :btnDelete="false"
                                :o_col_checkbox="false"
                                :trackBy="'rowID'"
                                :data="dataDGV6"
                                :o_navfooter_visible="false"
                              ></grid> 


                    </b-tab>
                  </b-tabs>
              
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
 

     <b-row v-if="show">
      <b-col lg="12">
        <transition name="fade">
          <b-card no-body >
            <div slot="header">
              <i class="fa fa-television" aria-hidden="true"></i> รายการวัตถุดิบที่ไม่พบกลุ่มวัตถุดิบ
              <div class="card-header-actions">
                <b-link class="card-header-action btn-minimize" v-b-toggle.collapse6>
                  <i class="icon-arrow-up"></i>
                </b-link>
              </div>
            </div>
            <b-collapse id="collapse6" >
              <b-card-body>
<i class="fa fa-television" aria-hidden="true"></i>
                                  ประมาณกลุ่มวัตถุดิบที่ไม่กำหนดกลุ่มวัตถุดิบเพื่อออกรายงาน
                            <b-row>
                              
                              <b-col lg="6">
                                       <grid
                                        ref="DGV9"
                                        :fields="F_DGV9"
                                        :name="name"
                                        :btnGrid="false"
                                        :btnAdd="false"
                                        :btnClone="false"
                                        :btnView="false"
                                        :btnEdit="false"
                                        :btnDelete="false"
                                        :o_col_checkbox="false"
                                        :trackBy="'rowID'"
                                        :data="dataDGV9"
                                        :o_navfooter_visible="false"
                                      ></grid>
                              </b-col>        
                           </b-row> <br/>
 
                            <div v-if="show_err">
                              


                            <b-row>
                            <div>
                              <b-alert show variant="danger">
                              <!--  <h4 class="alert-heading">ผิดพลาด!</h4>  -->
                                <p>
                                  <b> ตรวจพบข้อมูลเม็ดวัตุดิบที่ไม่มีรหัสกลุ่มวัตถุดิบ โปรแกรมไม่สามารถแสดงรายงาน สรุปปริมาณและมูลค่าคงเหลือได้ กรุณาติดต่อฝ่ายบัญชี ! </b>
                                </p>
                                <hr>
                              
                              <div v-html="txt_PB"></div>

                                
                              </b-alert>
                            </div>
                            </b-row>
                            </div>


                            

              </b-card-body>

            </b-collapse>
          </b-card>
       </transition>
      </b-col>
    </b-row>

 

     <div class="animated fadeIn" >
      <b-row>
        <b-col lg="12">
          <transition name="fade">
            <b-card no-body >
              <div slot="header">
                <i class="fa fa-bar-chart" aria-hidden="true"></i> กำลังการผลิตตามแผนทอ

         
                <div class="card-header-actions">
                  <b-link class="card-header-action btn-minimize" v-b-toggle.collapse4>
                    <i class="icon-arrow-up"></i>
                  </b-link>
                </div>
              </div>
              <b-collapse id="collapse4" visible>
                <b-card-body>

                              <b-row> 
                                <b-col lg="8" v-resize:throttle.100="onResize">
                                    <b-row >
                                        
                                        <b-col lg="12" style="position:relative;z-index: 1;"> 
                                            

                                            <b-list-group-item style="backgroundColor:#e3e8e8" class="d-flex align-items-center">
                                 
                                        
                                                  <b-avatar class="mr-3"><i class="fa fa-bar-chart" aria-hidden="true"></i></b-avatar>
                                                <span class=""><h5>กราฟแสดงกำลังการผลิตตามแผนตามแผนรายเครื่อง</h5></span>
                                                
                                                <span class="mr-auto">
                                                     
                                                </span>
                                                <h5><b-badge class="float-right">จน.เครื่องทอทั้งหมด : {{this.txtUpdate}}</b-badge></h5>

                                            </b-list-group-item>  

                                         </b-col>   


                                   </b-row>  
                                    <b-list-group-item class="d-flex align-items-center" style="backgroundColor:rgba(178, 206, 215, 0.32);position:relative;bottom:35px;">

                                         <canvas v-bind:height="100" id="graph8">  
                                         </canvas>
                                    </b-list-group-item>
                                </b-col>      
                                </b-row>

                  
                <!-- <b-row> 
                      <b-col lg="12">
                        <b-col lg="8">

                               <grid
                                ref="DGV7"
                                :fields="F_DGV7"
                                :name="name"
                                :btnGrid="false"
                                :btnAdd="false"
                                :btnClone="false"
                                :btnView="false"
                                :btnEdit="false"
                                :btnDelete="false"
                                :o_col_checkbox="false"
                                :trackBy="'rowID'"
                                :data="dataDGV7"
                                :o_navfooter_visible="false"
                              ></grid> 

                        </b-col>
                      </b-col>  
                 </b-row>   !-->



                 <b-row>  

                   <b-col lg="12">
                        <b-col lg="8">
 
                       <b-table-simple hover small caption-top responsive striped bordered style="overflow-X: scroll;overflow-y: hidden"> 
                   
                        <b-thead  style="background-color: #92b8d2;font-weight: bold;color:#000000">
                         							
                          <b-tr class="text-center">
                            <b-th >เดือนตามแผนทอ</b-th>
                            <b-th>จน.วันที่งาน</b-th>
                            <b-th>จน.วันทำงานของเครื่องทอ</b-th>
                            <b-th>จน.วันทำงานที่มีแผนการผลิต</b-th>
                            <b-th>%กำลังการผลิต</b-th>
                            
                          </b-tr>
                        </b-thead>

                           <b-tbody v-for="item in itemData" :key="item.code_id">  
                          <b-tr  v-bind:id="item.code_id" class="text-right"  >
                            <b-td class="text-left ">
                              <i   v-bind:id="item.code_id+'B'" style="font-size:18px;" class="fa fa-plus-circle text-success" v-on:click="showshild(item.code_id)" ></i> 
                                   {{item.mn_name}}</b-td> 
                            <b-td >{{item.work_day}}</b-td>
                            <b-td>{{item.workMach_day}}</b-td>
                            <b-td>{{item.workMachReal_day}}</b-td>
                            <b-td>
                              
                                  <b-progress :max="100" height="1rem"  variant="primary" class="dark border border-dark" animated>
                                    <b-progress-bar :value="item.per_power" >
                                      <span > <strong style="color:black;">{{ item.per_power }}</strong></span>
                                    </b-progress-bar>
                                  </b-progress>

                              </b-td> 
                          </b-tr>
                          
                        </b-tbody>
                         
                      </b-table-simple>

                       </b-col>
                      </b-col>  
 
 
                </b-row>    

                             
               
                </b-card-body>
              </b-collapse>
            </b-card>
          </transition>
        </b-col>
      </b-row>
    </div>

    

    <div class="animated fadeIn" >
      <b-row>
        <b-col lg="12">
          <transition name="fade">
            <b-card no-body >
              <div slot="header">
                <i class="fa fa-bar-chart" aria-hidden="true"></i> แนวโน้มราคาวัตถุดิบย้อนหลัง 1 ปี
                <div class="card-header-actions">
                  <b-link class="card-header-action btn-minimize" v-b-toggle.collapse5>
                    <i class="icon-arrow-up"></i>
                  </b-link>
                </div>
              </div>
              <b-collapse id="collapse5" visible>
                <b-card-body>
                               
                              <b-row>
                                <b-col sm="12">  
                                <div >
                                        <b-card border-variant="secondary" bg-variant="light" header="กราฟแนวโน้มราคาวัตถุดิบย้อนหลัง 1 ปี" align="center">
                                          <b-card-text>
                                                        <canvas v-bind:height="80" id="graph4"></canvas>
                                          </b-card-text>
                                        </b-card>
                              </div>
                                </b-col>
                              </b-row>

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
var tt;

var  H2 = new Array();

var myChart1 = null;
var myChart2 = null;
var myChart3 = null;
var bar= null;
var bar2= null;
var bar3= null; 
var bar4= null; 
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
      show1: true,
      show2: false,
      show3: false,
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
       txtUpdate:"",
      txt_PB:"",
      modal: false,
      mode: "Add",
      errMsg: "",
      avSearch: false,
      show_err : true,
      show_err1 : true,
      show_err2 : true,
      txtSearch: "",
      txtSearch_mn: "",
     // name: "rptDrawing",
      drawingCd: "",
      perPage: 25,
      height2:60,
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
      dataDGV4: [],
      dataDGV5: [],
      dataDGV6: [],
      dataDGV7: [],
      dataDGV9: [],
      dataDGV10: [],
      objSelect: {},
      F_DGV1: [  {
                        name: "matgrprpcd",
                        title: "ประเภทวัตถุดิบ",
                        sortField: "",
                        class: "text-left",
                        visible: true,
                        width:120
                      }, 
                      {
                        name: "mat_price", 
                        title: "ราคาวัตถุดิบถัวเฉลี่ย(บาท/กก.)",
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
                        name: "remain_RecvQty",
                        title: "ค้างรับจาก Supplier",
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
                        name: "remain_cul",
                        title: "ปริมาณเม็ดคงเหลือ(คงเหลือ + ค้างรับ)",
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
                        name: "salebal_wei",
                        title: "ปริมาณยอด Order สั่งผลิต",
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
                        name: "totbal_wei",
                        title: "ปริมาณเม็ดคงเหลือหลักหัก Order ในมือ",
                        sortField: "",
                        class: "text-right",
                        visible: true,
                        callback:(v) => {
                            if (this.$root.$options.filters.number(v,2) != 0) {

                                  if (this.$root.$options.filters.number(v,2) < 0  )
                                  {
                                      return '<spen class="text-danger"> '+this.$root.$options.filters.number(v,2)+' </span> '; 
                                  }else
                                  {
                                      return '<spen> '+this.$root.$options.filters.number(v,2)+' </span> '; 
                                  } 

                            } else{
                                '<spen>/span> '
                            } 
                  
                          }
                      },
                      {
                        name: "pay_wei_cum2",
                        title: "ปริมาณใช้เม็ดเฉลี่ยต่อเดือน",
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
                        name: "per_month",
                        title: "จน.เดือนของปริมาณเม็ดเหลือใช้",
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
         F_DGV10: [],
         F_DGV3: [ 
                      {
                        name: "dm_ShowDash",
                        title: "ประเภทวัตถุดิบ",
                        sortField: "",
                        class: "text-left",
                        visible: true,
                        width:120
                      },
                      {
                        name: "wei_tot_Dm",
                        title: "ขายในประเทศ",
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
                        name: "wei_tot_Ex",
                        title: "ขายต่างประเทศ",
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
                        name: "wei_tot",
                        title: "รวม",
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
                F_DGV4: [],
                F_DGV5: [],
                F_DGV6: [],
                F_DGV7: [
                     {
                        name: "mn_name",
                        title: "เดือนตามแผนทอ",
                        sortField: "",
                        class: "text-left",
                        visible: true
                      },
                      {
                        name: "work_day",
                        title: "จน.วันทำงาน",
                        sortField: "",
                        class: "text-right",
                        visible: true,
                        callback:(v) => {
                            if (this.$root.$options.filters.number(v,0) != 0) {
                            return '<spen> '+this.$root.$options.filters.number(v,0)+' </span> ';   
                            } else{
                                '<spen>/span> '
                            } 
                  
                          }
                      },
                      {
                        name: "workMach_day",
                        title: "จน.วันทำงานของเครื่องทอ",
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
                        name: "workMachReal_day",
                        title: "จน.วันทำงานที่มีแผนการผลิต",
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
                        name: "per_power",
                        title: "%กำลังการผลิต",
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
                F_DGV9: [ 
                      {
                        name: "mn_name",
                        title: "เดือน/ปี ตามแผนทอ",
                        sortField: "",
                        class: "text-left",
                        visible: true,
                        width:140
                      },
                      {
                        name: "tsale",
                        title: "ปภ.ขาย",
                        sortField: "",
                        class: "text-left",
                        visible: true,
                         
                      },
                      {
                        name: "dm_code",
                        title: "กลุ่มวัตถุดิบ",
                        sortField: "",
                        class: "text-left",
                        visible: true,
                         
                      },
                      {
                        name: "net_wei",
                        title: "นน.(ตัน)",
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
                 itemData:[]
      
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
               this.height2 = 250;
          }else
          {
               this.height2 = 60;
          }
    },
    to_Material2()
    {
      this.$router.push("/report/reptmaterial")
    }
    ,c_K1()
    {
       /* show1 = true;
        show2= false;
        show3= false;*/
    },c_K2()
    {
       /*  show1 = false;
        show2= true;
        show3= false; */

    },c_K3()
    {
      /*  show1 = false;
        show2= false;
        show3= true;*/
    },
    SHOWDATA2()
    {
         for(let key in this.itemData) 
          {
            
                        var idB = this.itemData[key].code_id+"B";
                    
                        var e = document.getElementById(this.itemData[key].code_id);
                       
                        if (this.itemData[key].code_Sub === "ZZ")
                        {
                            document.getElementById(idB).className = "fa fa-angle-right pl-4";  ////fas fa-minus 
                            e.style.backgroundColor = "#ffffff";
                            e.style.visibility = 'collapse'; 
                            
                        }

                        
          };

    },
    showshild(el_id)
    {   
         var s_SUB_OLD = "";
         var s_SUB = "";
         var s_SUB_TEX = "";
         var id_OLD = "";
         var id_OLD_class = "";
         var id_OLDL = ""; 
         var idB = el_id+"B";
         var s_SUB_TEX_L = "";
         var s_SUB_TEX_Z = "";


         var s_IYear = "";
         var s_IMonth = "";

         const result = this.itemData.find( ({ code_id }) => code_id === el_id);
         s_SUB = result.code_Sub;

         s_IYear= result.iyear;
         s_IMonth= result.imonth;
 
 

        for(let key in this.itemData) 
        {
             
                if(s_SUB==="Z")
                {

                    if(this.itemData[key].code_Sub === 'ZZ')
                    {
                        if((s_IYear===this.itemData[key].iyear) && (s_IMonth===this.itemData[key].imonth))
                        {
                                var e = document.getElementById(this.itemData[key].code_id);
 
                                if(e.style.visibility == 'collapse')
                                { 
                                  
                                   e.style.visibility = 'visible'; 
                                   document.getElementById(idB).className = "fa fa-minus-circle text-danger";  
                                   
   
                                }
                                else
                                {
                             
                                    e.style.visibility = 'collapse';  
                                    document.getElementById(idB).className = "fa fa-plus-circle text-success";  
                                 
                                  
                                }
                        }
                    }
                 
                   
                   
              }

               

        }

    },
    QueryData() {
      
      var Tc = 0;
      var H1 = new Array();
      var H4 = new Array();
      var H5 = new Array();
      var H6 = new Array();
      var H10 = new Array();

      var dataH1 = new Array();
      var dataH4 = new Array();
      var dataH5 = new Array();
      var dataH6 = new Array();
      var dataH10 = new Array();

      var ChartLB_H1 = new Array();
      var ChartCul_H1 = new Array();
      var ChartDATA_H1_1 = new Array();

      var ChartDATA_H1_2 = new Array();
      var ChartDATA_H1_3 = new Array();
      var ChartDATA_H1_4 = new Array();
      var ChartDATA_H1_5 = new Array();

      var CharDATA_set2 = new Array();
      var CharDATA_set3 = new Array();
      var CharDATA_set4 = new Array();
      var CharDATA_set5 = new Array();

  
       var Charttxt_H1 = new Array();

       var C_COLOR = new Array();
       var C_NAME_C = new Array();

       var C_MONTH = new Array();

    
      var CharDATA_H2 = new Array();
      var CharDATA_set = new Array();

        this.F_DGV4 = H4;
        this.dataDGV4 = dataH4;
        this.$refs.DGV4.reset();


        this.F_DGV5 = H5;
        this.dataDGV5 = dataH5;
        this.$refs.DGV5.reset();

        this.F_DGV6 = H6;
        this.dataDGV6 = dataH6;
        this.$refs.DGV6.reset();

 
        var sNO_DM = true;
        var MeSeData= null;

          this.F_DGV2 = H1;
        this.dataDGV2 = dataH1;
        this.$refs.DGV2.reset();


        this.F_DGV10 = H10;
        this.dataDGV10 = dataH10;
        this.$refs.DGV10.reset();

         C_COLOR = ["rgba(54, 193, 161, 1.0)","rgba(51, 157, 249, 1.0)","rgba(226, 161, 30, 1.0)"
                            ,"rgba(226, 144, 229, 1.0)","rgba(249, 101, 101, 1.0)","rgba(0, 46, 108, 1)","rgba(112, 132, 0, 1)"];
         C_MONTH  = ["ม.ค","ก.พ","มี.ค","เม.ย","พ.ค","มิ.ย","ก.ค","ส.ค","ก.ย","ต.ค","พ.ย","ธ.ค" ];        
          

          var Lebal_power = new Array();
          var Lebal_power_val = new Array();
      /// var iMouns = this.txtSearch_mn.selectedIndex;
      //    var iMouns =  this.$refs.txtid_mn.selectedIndex();  
    //   console.log(iMouns);



         API.GetDataSearchmdmRmSubprice({
              data:{},              
              callblack: res => {
             /// console.log(res);
                       Tc = 0;
                       H10[0] = {
                          name: "mn_name",
                          title: "ประเภทวัตุดิบ",
                          sortField: "",
                          class: "text-left",
                          visible: true,
                          width:70
                        };   

                        

                        function Culdata(mn_name, cul1, cul2, cul3, cul4, cul5, cul6, cul7, cul8, cul9
                                      , cul10, cul11, cul12, cul13, cul14, cul15, cul16, cul17, cul18, cul119, cul20, cul21){  // Function constructor
                          this.mn_name = mn_name;          // do not forget 'this.'
                          this.cul1 = cul1;
                          this.cul2 = cul2;
                          this.cul3 = cul3;
                          this.cul4 = cul4;
                          this.cul5 = cul5;
                          this.cul6 = cul6;
                          this.cul7 = cul7;
                          this.cul8 = cul8;
                          this.cul9 = cul9;
                          this.cul10 = cul10;
                          this.cul11 = cul11;
                          this.cul12 = cul12;
                          this.cul13 = cul13;
                          this.cul14 = cul14;
                          this.cul15 = cul15;
                          this.cul16 = cul16;
                        }
                        var Cda = new Array();
                        function addPerson(Cda){    
                        /*  var p = new Culdata(mn_name, cul1, cul2, cul3, cul4, cul5, cul6, cul7, cul8, cul9
                                      , cul10, cul11, cul12, cul13, cul14, cul15, cul16, cul17, cul18, cul119, cul20, cul21); // here we create instance*/
                           var p = new Culdata(Cda[0], Cda[1], Cda[2], Cda[3], Cda[4], Cda[5], Cda[6], Cda[7], Cda[8], Cda[9]
                                      , Cda[10], Cda[11], Cda[12], Cda[13], Cda[14], Cda[15], Cda[16], Cda[17], Cda[18], Cda[19], Cda[20], Cda[21]);
                          dataH10.push(p);
                        }

  
                        var iLop = res[0].pj_rph.length;
                        for (i = 0; i < iLop; i++) {
                            Tc = i + 1;

                              //// CULUMNS
                              H10[Tc] = {
                                  name: "cul" +Tc.toString() ,
                                  title: res[0].pj_rph[i].shotnm.toString(),
                                  sortField: "",
                                  class: "text-right",
                                  visible: true,
                                   width:110,
                                  callback:(v) => {
                                      if (this.$root.$options.filters.number(v,2) != 0) {
                                      return '<spen> '+this.$root.$options.filters.number(v,2)+' </span> ';   
                                      } else{
                                          '<spen>/span> '
                                      } 
                            
                                    }
                                };
                        }

                         var iLop = res[0].pj_rpc.length;
                         for (i = 0; i < iLop; i++) {
                             var D1 = [];
                             D1.push(res[0].pj_rpc[i].matgrprpcd.toString());

                               var iL = res[0].pj_rph.length;
                              

                               for (t = 0; t < iL; t++) {
                                    var CK_D = 0;
                                    var iLL = res[0].pj_rpdata.length;
                                    for (tt = 0; tt < iLL; tt++) {
                                         if(     (res[0].pj_rpc[i].matgrprpcd.toString() === res[0].pj_rpdata[tt].matgrprpcd.toString()) 
                                              && ( res[0].pj_rpdata[tt].rows_id.toString() === res[0].pj_rph[t].rows_id.toString()) 
                                           )
                                           {  
                                               ///console.log(res[0].pj_rpc[i].matgrprpcd.toString() +' ---  '+res[0].pj_rpdata[tt].matgrprpcd.toString()+' ---  '+res[0].pj_rpdata[tt].rows_id+' ---  '+res[0].pj_rph[t].rows_id);
                                          
                                               D1.push(res[0].pj_rpdata[tt].ordprc.toString());
                                               CK_D = 1;
                                           } 
                                    }
                                    if(CK_D<=0) /// หาไม่เจอ
                                    {
                                          D1.push(0);
                                    }

                                     //
                               }
                               addPerson(D1);
                              
                          }

                         
                           ///     var D1 =['HOMO',1,1,1,1,1,1,1,1,1,1,1,1,1,1];
                      
                                //// DATA
  
                       /// console.log(dataH10);
                      
                        this.dataDGV10   =  dataH10;

                         this.F_DGV10 = H10;
                         this.$refs.DGV10.reset();

           
                  }
              });
          

          API.GetDataSearchMaterial({
              data:{zyear:this.txtSearch,zmonth:this.txtSearch_mn},              
              callblack: res => {

                MeSeData = new Array();
                 
                 res.forEach((d,i) => {
               
          
                       if(res[i].matgrprpcd.toString() !== "รวมทั้งสิ้น")
                        {
                             ChartDATA_H1_1[i]= res[i].per_month.toFixed(2);
                             ChartLB_H1[i]= res[i].matgrprpcd;
                        }
  
                   });

                 
                          MeSeData ={
                            
                                labels: ChartLB_H1,
                                datasets: [
                                    {
                                        label: true,
                                        data: ChartDATA_H1_1,
                                        backgroundColor: ["#007acc", "#007acc" , "#007acc" ,"#007acc"  , "#007acc" , "#007acc"  ] 
                                    }]
                                    
                            };

                            var ctx = document.getElementById("graph1").getContext("2d");
                                if(myChart2 !== null)
                                {
                                        myChart2.data = MeSeData;
                                        myChart2.options ={
                                                 scales: {
                                                       xAxes: [{
                                                            ticks: {
                                                              stepSize: 1,
                                                                min: 0 ,// Edit the value according to what you need
                                                                max: 10
                                                            }
                                                        }],
                                                        yAxes: [{
                                                            ticks: {
                                                              fontSize: 14
                                                            }
                                                               
                                                        }] 
                                                    },
                                                  
                                                    responsive: true,
                                                   plugins: { //setup chartjs-plugin-labels plug in 
                                                  
                                                            labels: [
                                                                {
                                                                    render: 'value',
                                                                    position: 'outside'
                                                                }
                                                            ]
                                                        }
                                                   
                                                };
                                        myChart2.update();
                                        
                                }else
                                {
                                
                                        myChart2 = new Chart(ctx, {
                                        type: 'horizontalBar',
                                        data: MeSeData,
                                        
                                        options: {
                                                 scales: {
                                                       xAxes: [{
                                                            ticks: {
                                                                stepSize: 1,
                                                                min: 0 ,// Edit the value according to what you need
                                                                max: 10
                                                                
                                                            }
                                                        }],
                                                        yAxes: [{
                                                            ticks: {
                                                              fontSize: 14
                                                            }
                                                               
                                                        }] 
                                                    },
                                                  
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
 
                  this.dataDGV1   =  res;


              }
              });



              API.GetDataSearchMaterial_sale({
              data:{zyear:this.txtSearch,zmonth:this.txtSearch_mn},              
              callblack: res => {
                   ///  console.log(res);
                     this.dataDGV3   =  res;
                  
              }
              });


              API.GetDataSearchMaterial_salemonth({
              data:{zyear:this.txtSearch,zmonth:this.txtSearch_mn},              
              callblack: res => {
                     
                     var iLop = res["pj_rpt"].length;
                    // console.log(iLop);
                       

                       H4[0] = {
                          name: "mn_name",
                          title: "เดือน/ปี ตามแผนทอ",
                          sortField: "",
                          class: "text-left",
                          visible: true,
                          width:150
                        };

                        H5[0] = {
                          name: "mn_name",
                          title: "เดือน/ปี ตามแผนทอ",
                          sortField: "",
                          class: "text-left",
                          visible: true,
                          width:150
                        };
                        
                        H6[0] = {
                          name: "mn_name",
                          title: "เดือน/ปี ตามแผนทอ",
                          sortField: "",
                          class: "text-left",
                          visible: true,
                          width:150
                        };

 
                        for (i = 0; i < iLop; i++) {
                            Tc = i + 1;
                              H4[Tc] = {
                                  name: "cul" +Tc.toString() ,
                                  title: res["pj_rpt"][i].dm_ShowDash.toString(),
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

                                H5[Tc] = {
                                  name: "cul" +Tc.toString() ,
                                  title: res["pj_rpt"][i].dm_ShowDash.toString(),
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

                                H6[Tc] = {
                                  name: "cul" +Tc.toString() ,
                                  title: res["pj_rpt"][i].dm_ShowDash.toString(),
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

                             //// กราฟ 1   
                             // data_list[iLop+1] = res["pj_seledm"][0].mn_name+" "+res["pj_seledm"][0].iyear_Use;
                              var iLopdm = res["pj_seledm"].length;
                              var fdata_c1 = new Array();
                              var il = 0;
                              var Il_data = 0;
                              var iMoth_ilo = 0;
                              var iMoth_new = 0;
                              iMoth_ilo = res["pj_seledm"][0].imonth_Use;

                                  for (il = 0; il < iLopdm; il++) 
                                  {
                                      iMoth_new = res["pj_seledm"][il].imonth_Use;
                                      if(iMoth_ilo === iMoth_new)
                                      {
                                          if( res["pj_seledm"][il].show_idx === res["pj_rpt"][i].show_idx)
                                          {
                                             fdata_c1[Il_data] = res["pj_seledm"][il].net_wei_tot;
                                             
                                          }else
                                          {
                                             if(fdata_c1[Il_data] > 0)
                                              {
                                              }else
                                              {
                                                fdata_c1[Il_data] = 0;
                                              }
                                          }
                                          
                                      }else
                                      {
                                            Il_data++;  
                                            if( res["pj_seledm"][il].show_idx === res["pj_rpt"][i].show_idx)
                                            {
                                              fdata_c1[Il_data] = res["pj_seledm"][il].net_wei_tot;
                                              
                                            }else
                                            {
                                              if(fdata_c1[Il_data] > 0)
                                              {
                                              }else
                                              {
                                                fdata_c1[Il_data] = 0;
                                              }
                                            }
                                            
                                      }
                                      iMoth_ilo = res["pj_seledm"][il].imonth_Use; 
                                  }
                                   
                                   CharDATA_set2[i] = {backgroundColor:"rgba(0, 0, 0, 0)",
                                   borderColor: C_COLOR[i],
                                   label: res["pj_rpt"][i].dm_ShowDash.toString(),
                                   data: fdata_c1}; 


                              //// กราฟ 2  
                               iLopdm = res["pj_seleex"].length;
                               fdata_c1 = new Array();
                               il = 0;
                               Il_data = 0;
                               iMoth_ilo = 0;
                               iMoth_new = 0;
                               iMoth_ilo = res["pj_seleex"][0].imonth_Use;

                                  for (il = 0; il < iLopdm; il++) 
                                  {
                                      iMoth_new = res["pj_seleex"][il].imonth_Use;
                                      if(iMoth_ilo === iMoth_new)
                                      {
                                          if( res["pj_seleex"][il].show_idx === res["pj_rpt"][i].show_idx)
                                          {
                                             fdata_c1[Il_data] = res["pj_seleex"][il].net_wei_tot;
                                             
                                          }else
                                          {
                                             if(fdata_c1[Il_data] > 0)
                                              {
                                              }else
                                              {
                                                fdata_c1[Il_data] = 0;
                                              }
                                          }
                                          
                                      }else
                                      {
                                            Il_data++;  
                                            if( res["pj_seleex"][il].show_idx === res["pj_rpt"][i].show_idx)
                                            {
                                              fdata_c1[Il_data] = res["pj_seleex"][il].net_wei_tot;
                                              
                                            }else
                                            {
                                              if(fdata_c1[Il_data] > 0)
                                              {
                                              }else
                                              {
                                                fdata_c1[Il_data] = 0;
                                              }
                                            }
                                            
                                      }
                                      iMoth_ilo = res["pj_seleex"][il].imonth_Use; 
                                  }
                                   
                                   CharDATA_set3[i] = {backgroundColor:"rgba(0, 0, 0, 0)",
                                   borderColor: C_COLOR[i],
                                   label: res["pj_rpt"][i].dm_ShowDash.toString(),
                                   data: fdata_c1}; 



                                   //// กราฟ 3  
                               iLopdm = res["pj_selesum"].length;
                               fdata_c1 = new Array();
                               il = 0;
                               Il_data = 0;
                               iMoth_ilo = 0;
                               iMoth_new = 0;
                               iMoth_ilo = res["pj_selesum"][0].imonth_Use;

                                  for (il = 0; il < iLopdm; il++) 
                                  {
                                      iMoth_new = res["pj_selesum"][il].imonth_Use;
                                      if(iMoth_ilo === iMoth_new)
                                      {
                                          if( res["pj_selesum"][il].show_idx === res["pj_rpt"][i].show_idx)
                                          {
                                             fdata_c1[Il_data] = res["pj_selesum"][il].net_wei_tot;
                                             
                                          }else
                                          {
                                             if(fdata_c1[Il_data] > 0)
                                              {
                                              }else
                                              {
                                                fdata_c1[Il_data] = 0;
                                              }
                                          }
                                          
                                      }else
                                      {
                                            Il_data++;  
                                            if( res["pj_selesum"][il].show_idx === res["pj_rpt"][i].show_idx)
                                            {
                                              fdata_c1[Il_data] = res["pj_selesum"][il].net_wei_tot;
                                              
                                            }else
                                            {
                                              if(fdata_c1[Il_data] > 0)
                                              {
                                              }else
                                              {
                                                fdata_c1[Il_data] = 0;
                                              }
                                            }
                                            
                                      }
                                      iMoth_ilo = res["pj_selesum"][il].imonth_Use; 
                                  }
                                   
                                   CharDATA_set4[i] = {backgroundColor:"rgba(0, 0, 0, 0)",
                                   borderColor: C_COLOR[i],
                                   label: res["pj_rpt"][i].dm_ShowDash.toString(),
                                   data: fdata_c1}; 

            
 
                          };

                   /*  H4[iLop] = {
                          name: "zum_f",
                          title: "รวม",
                          sortField: "",
                          class: "text-left",
                          visible: true,
                          width:150
                        };

                        H5[iLop] = {
                          name: "zum_f",
                          title: "รวม",
                          sortField: "",
                          class: "text-left",
                          visible: true,
                          width:150
                        };
                        
                        H6[iLop] = {
                          name: "zum_f",
                          title: "รวม",
                          sortField: "",
                          class: "text-left",
                          visible: true,
                          width:150
                        };
*/

                         


                          var iLop_data = res["pj_seledm"].length;
                          var fdata = new Array();

                          var iMoth_old = 0; 
                          var iMoth_new = 0; 
                          var iYear_old = 0; 
                          var iYear_new = 0; 
                          var iIDX_show = 0; 


                          iYear_old = res["pj_seledm"][0].iyear_Use;
                          iMoth_old = res["pj_seledm"][0].imonth_Use;
                         
                          var k=0;
                          var dr=0;
                          t = 0;

                          var data_rows = new Array();
                          var data_list = new Array();

                          data_list[iLop]= res["pj_seledm"][0].mn_name+" "+res["pj_seledm"][0].iyear_Use.toString().substring(2,4);
                      
                          for (i = 0; i < iLop_data; i++) 
                          {
                       
                              iYear_new = res["pj_seledm"][i].iyear_Use;
                              iMoth_new = res["pj_seledm"][i].imonth_Use;
                              iIDX_show = res["pj_seledm"][i].show_idx;
 

                              if(iYear_old === iYear_new && iMoth_old === iMoth_new)  //// ปีเดียวกัน เดือนเดียวกัน
                              {
                                  data_list[iLop]= res["pj_seledm"][i].mn_name+" "+res["pj_seledm"][i].iyear_Use.toString().substring(2,4);
                                  for(k=0;k<iLop;k++)
                                  {
                                      if(iIDX_show  === res["pj_rpt"][k].show_idx)
                                      { 
                                            data_list[k] = res["pj_seledm"][i].net_wei_tot;
                                      }else
                                      {
                                            if(data_list[k] > 0)
                                            {

                                            }else
                                            {
                                              data_list[k] = 0;
                                            } 
                                      } 
                                  }

                                  iYear_old = res["pj_seledm"][i].iyear_Use;
                                  iMoth_old = res["pj_seledm"][i].imonth_Use;
  
                              }
                              else
                              {
                                     
                                     data_rows.push(data_list);
                                     data_list = new Array();

                                     data_list[iLop]= res["pj_seledm"][i].mn_name+" "+res["pj_seledm"][i].iyear_Use.toString().substring(2,4);
                                     for(k=0;k<iLop;k++)
                                      {
                                          if(iIDX_show  === res["pj_rpt"][k].show_idx)
                                          { 
                                                data_list[k] = res["pj_seledm"][i].net_wei_tot; 
                                          }else
                                          {
                                             if(data_list[k] > 0)
                                            {

                                            }else
                                            {
                                              data_list[k] = 0;
                                            }
                                          } 
    
                                      }
                                      iYear_old = res["pj_seledm"][i].iyear_Use;
                                      iMoth_old = res["pj_seledm"][i].imonth_Use; 
                              }
                              
                          }
                           data_rows.push(data_list);
                            
                            var sSUM1=0;
                            var sSUM2=0;
                            var sSUM3=0;
                            var sSUM4=0;
                            var sSUM5=0;
                            var sSUM6=0;
                            var sSUM7=0;
   
                          for (i = 0; i < data_rows.length; i++) 
                          {
                                 ChartDATA_H1_2[i]  =data_rows[i][iLop].toString();
 
                                    const expr = data_rows[0].length;
                                        switch (expr) {                          
                                          
                                          case 1:dataH4[i] = {
                                                     mn_name: data_rows[i][iLop].toString(),
                                                     CUL1: data_rows[i][0]
                                                  }
                                          case 2:dataH4[i] = {
                                                     mn_name: data_rows[i][iLop].toString(),
                                                     CUL1: data_rows[i][0],
                                                     CUL2: data_rows[i][1]
                                                  } 
                                          case 3:dataH4[i] = {
                                                     mn_name:  data_rows[i][iLop].toString(),
                                                     cul1: data_rows[i][0],
                                                     cul2: data_rows[i][1],
                                                     cul3: data_rows[i][2]
                                                  } 
                                          case 4:  dataH4[i] = {
                                                     mn_name: data_rows[i][iLop].toString(),
                                                     cul1: data_rows[i][0],
                                                     cul2: data_rows[i][1],
                                                     cul3: data_rows[i][2],
                                                     cul4: data_rows[i][3]
                                                  } 
                                          case 5: dataH4[i] = {
                                                     mn_name: data_rows[i][iLop].toString(),
                                                     cul1: data_rows[i][0],
                                                     cul2: data_rows[i][1],
                                                     cul3: data_rows[i][2],
                                                     cul4: data_rows[i][3],
                                                     cul5: data_rows[i][4]
                                                  } 
                                          case 6: dataH4[i] = {
                                                     mn_name: data_rows[i][iLop].toString(),
                                                     cul1: data_rows[i][0],
                                                     cul2: data_rows[i][1],
                                                     cul3: data_rows[i][2],
                                                     cul4: data_rows[i][3],
                                                     cul5: data_rows[i][4],
                                                     cul6: data_rows[i][5]
                                                  } 
                                          case 7: dataH4[i] = {
                                                     mn_name:data_rows[i][iLop].toString(),
                                                     cul1: data_rows[i][0],
                                                     cul2: data_rows[i][1],
                                                     cul3: data_rows[i][2],
                                                     cul4: data_rows[i][3],
                                                     cul5: data_rows[i][4],
                                                     cul6: data_rows[i][5],
                                                     cul7: data_rows[i][6]
                                                  } 
                                        }
 
                                        if(data_rows[0].length===1)
                                        {
                                                  sSUM1 = sSUM1+data_rows[i][0];
                                        }
                                        if(data_rows[0].length===2)
                                        {
                                                  sSUM1 = sSUM1+data_rows[i][0];
                                                  sSUM2 = sSUM2+data_rows[i][1];
                                           
                                        }
                                        if(data_rows[0].length===3)
                                        {
                                                  sSUM1 = sSUM1+data_rows[i][0];
                                                  sSUM2 = sSUM2+data_rows[i][1];
                                                  sSUM3 = sSUM3+data_rows[i][2];
                                            
                                        }
                                        if(data_rows[0].length===4)
                                        {
                                                  sSUM1 = sSUM1+data_rows[i][0];
                                                  sSUM2 = sSUM2+data_rows[i][1];
                                                  sSUM3 = sSUM3+data_rows[i][2];
                                                  sSUM4 = sSUM4+data_rows[i][3];
                                                
                                        }
                                        if(data_rows[0].length===5)
                                        {
                                                  sSUM1 = sSUM1+data_rows[i][0];
                                                  sSUM2 = sSUM2+data_rows[i][1];
                                                  sSUM3 = sSUM3+data_rows[i][2];
                                                  sSUM4 = sSUM4+data_rows[i][3];
                                                  sSUM5 = sSUM5+data_rows[i][4];
                                         
                                        }
                                        if(data_rows[0].length===6)
                                        {
                                                  sSUM1 = sSUM1+data_rows[i][0];
                                                  sSUM2 = sSUM2+data_rows[i][1];
                                                  sSUM3 = sSUM3+data_rows[i][2];
                                                  sSUM4 = sSUM4+data_rows[i][3];
                                                  sSUM5 = sSUM5+data_rows[i][4];
                                                  sSUM6 = sSUM6+data_rows[i][5]; 
                                        
                                        }
                                        if(data_rows[0].length===7)
                                        {
                                                  sSUM1 = sSUM1+data_rows[i][0];
                                                  sSUM2 = sSUM2+data_rows[i][1];
                                                  sSUM3 = sSUM3+data_rows[i][2];
                                                  sSUM4 = sSUM4+data_rows[i][3];
                                                  sSUM5 = sSUM5+data_rows[i][4];
                                                  sSUM6 = sSUM6+data_rows[i][5]; 
                                                  sSUM7 = sSUM7+data_rows[i][6]; 
                                        }
                                        
                          }

                                  const expr3 = data_rows[0].length;
                                        switch (expr3) {                          
                                          
                                          case 1:dataH4[i] = {
                                                     mn_name: 'รวม',
                                                     cul1: sSUM1
                                                  }
                                          case 2:dataH4[i] = {
                                                     mn_name: 'รวม',
                                                     cul1: sSUM1,
                                                     cul2: sSUM2
                                                  } 
                                          case 3:dataH4[i] = {
                                                     mn_name:  'รวม',
                                                     cul1: sSUM1,
                                                     cul2: sSUM2,
                                                     cul3: sSUM3
                                                  } 
                                          case 4:  dataH4[i] = {
                                                     mn_name: 'รวม',
                                                     cul1: sSUM1,
                                                     cul2: sSUM2,
                                                     cul3: sSUM3,
                                                     cul4: sSUM4
                                                  } 
                                          case 5: dataH4[i] = {
                                                     mn_name: 'รวม',
                                                     cul1: sSUM1,
                                                     cul2: sSUM2,
                                                     cul3: sSUM3,
                                                     cul4: sSUM4,
                                                     cul5: sSUM5
                                                  } 
                                          case 6: dataH4[i] = {
                                                     mn_name: 'รวม',
                                                     cul1: sSUM1,
                                                     cul2: sSUM2,
                                                     cul3: sSUM3,
                                                     cul4: sSUM4,
                                                     cul5: sSUM5,
                                                     cul6: sSUM6
                                                  } 
                                          case 7: dataH4[i] = {
                                                     mn_name:'รวม',
                                                     cul1: sSUM1,
                                                     cul2: sSUM2,
                                                     cul3: sSUM3,
                                                     cul4: sSUM4,
                                                     cul5: sSUM5,
                                                     cul6: sSUM6,
                                                     cul7: sSUM7
                                                  } 
                                        }
                         
 

                          this.F_DGV4 = H4;
                          this.$refs.DGV4.reset();

                        var ctx = document.getElementById("graph5").getContext("2d");

                         if(bar2 !== null)
                          {
                                  bar2.data.labels = ChartDATA_H1_2;
                                  bar2.data.datasets =  CharDATA_set2;
                                  bar2.update();
                          }else
                          {

                                  bar2 = new Chart(ctx, {
                                    type: "line",
                                    options: {
                                      responsive: true,
                                      title: {
                                        // ข้อความที่อยู่ด้านบนของแผนภูมิ
                                        
                                        display: true
                                      }
                                    },
                                    data: {
                                      labels: ChartDATA_H1_2,
                                      datasets: CharDATA_set2
                                    }
                                  });
                      
                          }

                          //////////////////////////////////////////////  2 


                         var iLop_data = res["pj_seleex"].length;
                          var fdata = new Array();

                          var iMoth_old = 0; 
                          var iMoth_new = 0; 
                          var iYear_old = 0; 
                          var iYear_new = 0; 
                          var iIDX_show = 0; 


                          iYear_old = res["pj_seleex"][0].iyear_Use;
                          iMoth_old = res["pj_seleex"][0].imonth_Use;
                         
                          var k=0;
                          var dr=0;
                          t = 0;

                          var data_rows = new Array();
                          var data_list = new Array();

                          data_list[iLop]= res["pj_seleex"][0].mn_name+" "+res["pj_seleex"][0].iyear_Use.toString().substring(2,4);
                      
                          for (i = 0; i < iLop_data; i++) 
                          {
                       
                              iYear_new = res["pj_seleex"][i].iyear_Use;
                              iMoth_new = res["pj_seleex"][i].imonth_Use;
                              iIDX_show = res["pj_seleex"][i].show_idx;
 

                              if(iYear_old === iYear_new && iMoth_old === iMoth_new)  //// ปีเดียวกัน เดือนเดียวกัน
                              {
                                  data_list[iLop]= res["pj_seleex"][i].mn_name+" "+res["pj_seleex"][i].iyear_Use.toString().substring(2,4);
                                  for(k=0;k<iLop;k++)
                                  {
                                      if(iIDX_show  === res["pj_rpt"][k].show_idx)
                                      { 
                                            data_list[k] = res["pj_seleex"][i].net_wei_tot;
                                      }else
                                      {
                                            if(data_list[k] > 0)
                                            {

                                            }else
                                            {
                                              data_list[k] = 0;
                                            } 
                                      } 
                                  }

                                  iYear_old = res["pj_seleex"][i].iyear_Use;
                                  iMoth_old = res["pj_seleex"][i].imonth_Use;
  
                              }
                              else
                              {
                                     
                                     data_rows.push(data_list);
                                     data_list = new Array();

                                     data_list[iLop]= res["pj_seleex"][i].mn_name+" "+res["pj_seleex"][i].iyear_Use.toString().substring(2,4);
                                     for(k=0;k<iLop;k++)
                                      {
                                          if(iIDX_show  === res["pj_rpt"][k].show_idx)
                                          { 
                                                data_list[k] = res["pj_seleex"][i].net_wei_tot; 
                                          }else
                                          {
                                             if(data_list[k] > 0)
                                            {

                                            }else
                                            {
                                              data_list[k] = 0;
                                            }
                                          } 
    
                                      }
                                      iYear_old = res["pj_seleex"][i].iyear_Use;
                                      iMoth_old = res["pj_seleex"][i].imonth_Use; 
                              }
                              
                          }
                           data_rows.push(data_list);
                            
                            var sSUM1=0;
                            var sSUM2=0;
                            var sSUM3=0;
                            var sSUM4=0;
                            var sSUM5=0;
                            var sSUM6=0;
                            var sSUM7=0;
   
                          for (i = 0; i < data_rows.length; i++) 
                          {
                                 ChartDATA_H1_3[i]  =data_rows[i][iLop].toString();

                                    const expr2 = data_rows[0].length;
                                        switch (expr2) {                          
                                          
                                          case 1:dataH5[i] = {
                                                     mn_name: data_rows[i][iLop].toString(),
                                                     CUL1: data_rows[i][0]
                                                  }
                                          case 2:dataH5[i] = {
                                                     mn_name: data_rows[i][iLop].toString(),
                                                     CUL1: data_rows[i][0],
                                                     CUL2: data_rows[i][1]
                                                  } 
                                          case 3:dataH5[i] = {
                                                     mn_name:  data_rows[i][iLop].toString(),
                                                     cul1: data_rows[i][0],
                                                     cul2: data_rows[i][1],
                                                     cul3: data_rows[i][2]
                                                  } 
                                          case 4:  dataH5[i] = {
                                                     mn_name: data_rows[i][iLop].toString(),
                                                     cul1: data_rows[i][0],
                                                     cul2: data_rows[i][1],
                                                     cul3: data_rows[i][2],
                                                     cul4: data_rows[i][3]
                                                  } 
                                          case 5: dataH5[i] = {
                                                     mn_name: data_rows[i][iLop].toString(),
                                                     cul1: data_rows[i][0],
                                                     cul2: data_rows[i][1],
                                                     cul3: data_rows[i][2],
                                                     cul4: data_rows[i][3],
                                                     cul5: data_rows[i][4]
                                                  } 
                                          case 6: dataH5[i] = {
                                                     mn_name: data_rows[i][iLop].toString(),
                                                     cul1: data_rows[i][0],
                                                     cul2: data_rows[i][1],
                                                     cul3: data_rows[i][2],
                                                     cul4: data_rows[i][3],
                                                     cul5: data_rows[i][4],
                                                     cul6: data_rows[i][5]
                                                  } 
                                          case 7: dataH5[i] = {
                                                     mn_name:data_rows[i][iLop].toString(),
                                                     cul1: data_rows[i][0],
                                                     cul2: data_rows[i][1],
                                                     cul3: data_rows[i][2],
                                                     cul4: data_rows[i][3],
                                                     cul5: data_rows[i][4],
                                                     cul6: data_rows[i][5],
                                                     cul7: data_rows[i][6]
                                                  } 
                                        }
 
                                        if(data_rows[0].length===1)
                                        {
                                                  sSUM1 = sSUM1+data_rows[i][0];
                                        }
                                        if(data_rows[0].length===2)
                                        {
                                                  sSUM1 = sSUM1+data_rows[i][0];
                                                  sSUM2 = sSUM2+data_rows[i][1];
                                           
                                        }
                                        if(data_rows[0].length===3)
                                        {
                                                  sSUM1 = sSUM1+data_rows[i][0];
                                                  sSUM2 = sSUM2+data_rows[i][1];
                                                  sSUM3 = sSUM3+data_rows[i][2];
                                            
                                        }
                                        if(data_rows[0].length===4)
                                        {
                                                  sSUM1 = sSUM1+data_rows[i][0];
                                                  sSUM2 = sSUM2+data_rows[i][1];
                                                  sSUM3 = sSUM3+data_rows[i][2];
                                                  sSUM4 = sSUM4+data_rows[i][3];
                                                
                                        }
                                        if(data_rows[0].length===5)
                                        {
                                                  sSUM1 = sSUM1+data_rows[i][0];
                                                  sSUM2 = sSUM2+data_rows[i][1];
                                                  sSUM3 = sSUM3+data_rows[i][2];
                                                  sSUM4 = sSUM4+data_rows[i][3];
                                                  sSUM5 = sSUM5+data_rows[i][4];
                                         
                                        }
                                        if(data_rows[0].length===6)
                                        {
                                                  sSUM1 = sSUM1+data_rows[i][0];
                                                  sSUM2 = sSUM2+data_rows[i][1];
                                                  sSUM3 = sSUM3+data_rows[i][2];
                                                  sSUM4 = sSUM4+data_rows[i][3];
                                                  sSUM5 = sSUM5+data_rows[i][4];
                                                  sSUM6 = sSUM6+data_rows[i][5]; 
                                        
                                        }
                                        if(data_rows[0].length===7)
                                        {
                                                  sSUM1 = sSUM1+data_rows[i][0];
                                                  sSUM2 = sSUM2+data_rows[i][1];
                                                  sSUM3 = sSUM3+data_rows[i][2];
                                                  sSUM4 = sSUM4+data_rows[i][3];
                                                  sSUM5 = sSUM5+data_rows[i][4];
                                                  sSUM6 = sSUM6+data_rows[i][5]; 
                                                  sSUM7 = sSUM7+data_rows[i][6]; 
                                        }
                                        
                          }

                                  const expr = data_rows[0].length;
                                        switch (expr) {                          
                                          
                                          case 1:dataH5[i] = {
                                                     mn_name: 'รวม',
                                                     cul1: sSUM1
                                                  }
                                          case 2:dataH5[i] = {
                                                     mn_name: 'รวม',
                                                     cul1: sSUM1,
                                                     cul2: sSUM2
                                                  } 
                                          case 3:dataH5[i] = {
                                                     mn_name:  'รวม',
                                                     cul1: sSUM1,
                                                     cul2: sSUM2,
                                                     cul3: sSUM3
                                                  } 
                                          case 4:  dataH5[i] = {
                                                     mn_name: 'รวม',
                                                     cul1: sSUM1,
                                                     cul2: sSUM2,
                                                     cul3: sSUM3,
                                                     cul4: sSUM4
                                                  } 
                                          case 5: dataH5[i] = {
                                                     mn_name: 'รวม',
                                                     cul1: sSUM1,
                                                     cul2: sSUM2,
                                                     cul3: sSUM3,
                                                     cul4: sSUM4,
                                                     cul5: sSUM5
                                                  } 
                                          case 6: dataH5[i] = {
                                                     mn_name: 'รวม',
                                                     cul1: sSUM1,
                                                     cul2: sSUM2,
                                                     cul3: sSUM3,
                                                     cul4: sSUM4,
                                                     cul5: sSUM5,
                                                     cul6: sSUM6
                                                  } 
                                          case 7: dataH5[i] = {
                                                     mn_name:'รวม',
                                                     cul1: sSUM1,
                                                     cul2: sSUM2,
                                                     cul3: sSUM3,
                                                     cul4: sSUM4,
                                                     cul5: sSUM5,
                                                     cul6: sSUM6,
                                                     cul7: sSUM7
                                                  } 
                                        }



                          this.F_DGV5 = H5;
                          this.$refs.DGV5.reset();


 


                         var ctx2 = document.getElementById("graph6").getContext("2d");

                         if(bar3 !== null)
                          {
                                  bar3.data.labels = ChartDATA_H1_3;
                                  bar3.data.datasets =  CharDATA_set3;
                                  bar3.update();
                          }else
                          {

                                  bar3 = new Chart(ctx2, {
                                    type: "line",
                                    options: {
                                      responsive: true,
                                      title: {
                                        // ข้อความที่อยู่ด้านบนของแผนภูมิ
                                        
                                        display: true
                                      }
                                    },
                                    data: {
                                      labels: ChartDATA_H1_3,
                                      datasets: CharDATA_set3
                                    }
                                  });
                      
                          }




                          ////////////////////////////////////////////// 3


                         var iLop_data = res["pj_selesum"].length;
                          var fdata = new Array();

                          var iMoth_old = 0; 
                          var iMoth_new = 0; 
                          var iYear_old = 0; 
                          var iYear_new = 0; 
                          var iIDX_show = 0; 


                          iYear_old = res["pj_selesum"][0].iyear_Use;
                          iMoth_old = res["pj_selesum"][0].imonth_Use;
                         
                          var k=0;
                          var dr=0;
                          t = 0;

                          var data_rows = new Array();
                          var data_list = new Array();

                          data_list[iLop]= res["pj_selesum"][0].mn_name+" "+res["pj_selesum"][0].iyear_Use.toString().substring(2,4);
                      
                          for (i = 0; i < iLop_data; i++) 
                          {
                       
                              iYear_new = res["pj_selesum"][i].iyear_Use;
                              iMoth_new = res["pj_selesum"][i].imonth_Use;
                              iIDX_show = res["pj_selesum"][i].show_idx;
 

                              if(iYear_old === iYear_new && iMoth_old === iMoth_new)  //// ปีเดียวกัน เดือนเดียวกัน
                              {
                                  data_list[iLop]= res["pj_selesum"][i].mn_name+" "+res["pj_selesum"][i].iyear_Use.toString().substring(2,4);
                                  for(k=0;k<iLop;k++)
                                  {
                                      if(iIDX_show  === res["pj_rpt"][k].show_idx)
                                      { 
                                            data_list[k] = res["pj_selesum"][i].net_wei_tot;
                                      }else
                                      {
                                            if(data_list[k] > 0)
                                            {

                                            }else
                                            {
                                              data_list[k] = 0;
                                            } 
                                      } 
                                  }

                                  iYear_old = res["pj_selesum"][i].iyear_Use;
                                  iMoth_old = res["pj_selesum"][i].imonth_Use;
  
                              }
                              else
                              {
                                     
                                     data_rows.push(data_list);
                                     data_list = new Array();

                                     data_list[iLop]= res["pj_selesum"][i].mn_name+" "+res["pj_selesum"][i].iyear_Use.toString().substring(2,4);
                                     for(k=0;k<iLop;k++)
                                      {
                                          if(iIDX_show  === res["pj_rpt"][k].show_idx)
                                          { 
                                                data_list[k] = res["pj_selesum"][i].net_wei_tot; 
                                          }else
                                          {
                                             if(data_list[k] > 0)
                                            {

                                            }else
                                            {
                                              data_list[k] = 0;
                                            }
                                          } 
    
                                      }
                                      iYear_old = res["pj_selesum"][i].iyear_Use;
                                      iMoth_old = res["pj_selesum"][i].imonth_Use; 
                              }
                              
                          }
                           data_rows.push(data_list);
                            
                            var sSUM1=0;
                            var sSUM2=0;
                            var sSUM3=0;
                            var sSUM4=0;
                            var sSUM5=0;
                            var sSUM6=0;
                            var sSUM7=0;
   
                          for (i = 0; i < data_rows.length; i++) 
                          {
                                 ChartDATA_H1_4[i]  =data_rows[i][iLop].toString();

                                    const expr2 = data_rows[0].length;
                                        switch (expr2) {                          
                                          
                                          case 1:dataH6[i] = {
                                                     mn_name: data_rows[i][iLop].toString(),
                                                     CUL1: data_rows[i][0]
                                                  }
                                          case 2:dataH6[i] = {
                                                     mn_name: data_rows[i][iLop].toString(),
                                                     CUL1: data_rows[i][0],
                                                     CUL2: data_rows[i][1]
                                                  } 
                                          case 3:dataH6[i] = {
                                                     mn_name:  data_rows[i][iLop].toString(),
                                                     cul1: data_rows[i][0],
                                                     cul2: data_rows[i][1],
                                                     cul3: data_rows[i][2]
                                                  } 
                                          case 4:  dataH6[i] = {
                                                     mn_name: data_rows[i][iLop].toString(),
                                                     cul1: data_rows[i][0],
                                                     cul2: data_rows[i][1],
                                                     cul3: data_rows[i][2],
                                                     cul4: data_rows[i][3]
                                                  } 
                                          case 5: dataH6[i] = {
                                                     mn_name: data_rows[i][iLop].toString(),
                                                     cul1: data_rows[i][0],
                                                     cul2: data_rows[i][1],
                                                     cul3: data_rows[i][2],
                                                     cul4: data_rows[i][3],
                                                     cul5: data_rows[i][4]
                                                  } 
                                          case 6: dataH6[i] = {
                                                     mn_name: data_rows[i][iLop].toString(),
                                                     cul1: data_rows[i][0],
                                                     cul2: data_rows[i][1],
                                                     cul3: data_rows[i][2],
                                                     cul4: data_rows[i][3],
                                                     cul5: data_rows[i][4],
                                                     cul6: data_rows[i][5]
                                                  } 
                                          case 7: dataH5[i] = {
                                                     mn_name:data_rows[i][iLop].toString(),
                                                     cul1: data_rows[i][0],
                                                     cul2: data_rows[i][1],
                                                     cul3: data_rows[i][2],
                                                     cul4: data_rows[i][3],
                                                     cul5: data_rows[i][4],
                                                     cul6: data_rows[i][5],
                                                     cul7: data_rows[i][6]
                                                  } 
                                        }
 
                                        if(data_rows[0].length===1)
                                        {
                                                  sSUM1 = sSUM1+data_rows[i][0];
                                        }
                                        if(data_rows[0].length===2)
                                        {
                                                  sSUM1 = sSUM1+data_rows[i][0];
                                                  sSUM2 = sSUM2+data_rows[i][1];
                                           
                                        }
                                        if(data_rows[0].length===3)
                                        {
                                                  sSUM1 = sSUM1+data_rows[i][0];
                                                  sSUM2 = sSUM2+data_rows[i][1];
                                                  sSUM3 = sSUM3+data_rows[i][2];
                                            
                                        }
                                        if(data_rows[0].length===4)
                                        {
                                                  sSUM1 = sSUM1+data_rows[i][0];
                                                  sSUM2 = sSUM2+data_rows[i][1];
                                                  sSUM3 = sSUM3+data_rows[i][2];
                                                  sSUM4 = sSUM4+data_rows[i][3];
                                                
                                        }
                                        if(data_rows[0].length===5)
                                        {
                                                  sSUM1 = sSUM1+data_rows[i][0];
                                                  sSUM2 = sSUM2+data_rows[i][1];
                                                  sSUM3 = sSUM3+data_rows[i][2];
                                                  sSUM4 = sSUM4+data_rows[i][3];
                                                  sSUM5 = sSUM5+data_rows[i][4];
                                         
                                        }
                                        if(data_rows[0].length===6)
                                        {
                                                  sSUM1 = sSUM1+data_rows[i][0];
                                                  sSUM2 = sSUM2+data_rows[i][1];
                                                  sSUM3 = sSUM3+data_rows[i][2];
                                                  sSUM4 = sSUM4+data_rows[i][3];
                                                  sSUM5 = sSUM5+data_rows[i][4];
                                                  sSUM6 = sSUM6+data_rows[i][5]; 
                                        
                                        }
                                        if(data_rows[0].length===7)
                                        {
                                                  sSUM1 = sSUM1+data_rows[i][0];
                                                  sSUM2 = sSUM2+data_rows[i][1];
                                                  sSUM3 = sSUM3+data_rows[i][2];
                                                  sSUM4 = sSUM4+data_rows[i][3];
                                                  sSUM5 = sSUM5+data_rows[i][4];
                                                  sSUM6 = sSUM6+data_rows[i][5]; 
                                                  sSUM7 = sSUM7+data_rows[i][6]; 
                                        }
                                        
                          }

                                  const expr6 = data_rows[0].length;
                                        switch (expr6) {                          
                                          
                                          case 1:dataH6[i] = {
                                                     mn_name: 'รวม',
                                                     cul1: sSUM1
                                                  }
                                          case 2:dataH6[i] = {
                                                     mn_name: 'รวม',
                                                     cul1: sSUM1,
                                                     cul2: sSUM2
                                                  } 
                                          case 3:dataH6[i] = {
                                                     mn_name:  'รวม',
                                                     cul1: sSUM1,
                                                     cul2: sSUM2,
                                                     cul3: sSUM3
                                                  } 
                                          case 4:  dataH6[i] = {
                                                     mn_name: 'รวม',
                                                     cul1: sSUM1,
                                                     cul2: sSUM2,
                                                     cul3: sSUM3,
                                                     cul4: sSUM4
                                                  } 
                                          case 5: dataH6[i] = {
                                                     mn_name: 'รวม',
                                                     cul1: sSUM1,
                                                     cul2: sSUM2,
                                                     cul3: sSUM3,
                                                     cul4: sSUM4,
                                                     cul5: sSUM5
                                                  } 
                                          case 6: dataH6[i] = {
                                                     mn_name: 'รวม',
                                                     cul1: sSUM1,
                                                     cul2: sSUM2,
                                                     cul3: sSUM3,
                                                     cul4: sSUM4,
                                                     cul5: sSUM5,
                                                     cul6: sSUM6
                                                  } 
                                          case 7: dataH6[i] = {
                                                     mn_name:'รวม',
                                                     cul1: sSUM1,
                                                     cul2: sSUM2,
                                                     cul3: sSUM3,
                                                     cul4: sSUM4,
                                                     cul5: sSUM5,
                                                     cul6: sSUM6,
                                                     cul7: sSUM7
                                                  } 
                                        }



                          this.F_DGV6 = H6;
                          this.$refs.DGV6.reset();




                         var ctx3 = document.getElementById("graph7").getContext("2d");

                         if(bar4 !== null)
                          {
                                  bar4.data.labels = ChartDATA_H1_4;
                                  bar4.data.datasets =  CharDATA_set4;
                                  bar4.update();
                          }else
                          {

                                  bar4 = new Chart(ctx3, {
                                    type: "line",
                                    options: {
                                      responsive: true,
                                      title: {
                                        // ข้อความที่อยู่ด้านบนของแผนภูมิ
                                        
                                        display: true
                                      }
                                    },
                                    data: {
                                      labels: ChartDATA_H1_4,
                                      datasets: CharDATA_set4
                                    }
                                  });
                      
                          }


                    
              }
              });


              API.GetDataSearchmdmMchPower({
              data:{zyear:this.txtSearch,zmonth:this.txtSearch_mn},              
              callblack: res => {
                
               // this.dataDGV7   =  res;

                  Lebal_power = new Array();
                  Lebal_power_val = new Array();
                  var iMach = Math.ceil(res[0].workMach_day/res[0].work_day);
                  this.txtUpdate = iMach;
                  for (i = 0; i < res.length; i++) 
                  {
                        Lebal_power[i] = res[i].mn_name;
                        Lebal_power_val[i] = res[i].per_power;
                  }

 
                      var ctx2 = document.getElementById("graph8").getContext("2d");
                            if(myChart3 !== null)
                            {
                                    myChart3.data = {
                                                    labels: Lebal_power,
                                                    datasets: [{
                                                    label: 'Page A',
                                                    data: Lebal_power_val,
                                                    borderColor: '#6E7EF5',
                                                    backgroundColor: '#176396'
                                                    } ]
                                                }; 
                                    myChart3.update();
                            }else
                            {
                            
                                    myChart3 = new Chart(ctx2, {
                                        type: 'bar',
                                        data: {
                                            labels:  Lebal_power,
                                            datasets: [{
                                            label: 'Page A',
                                            data:  Lebal_power_val,
                                            borderColor: '#6E7EF5',
                                            backgroundColor: '#176396'
                                            } ]
                                        },
                                        options: {
                                            scales: {
                                                       xAxes: [{
                                                            ticks: {
                                                              
                                                            }
                                                        }],
                                                        yAxes: [{
                                                            ticks: {
                                                              fontSize: 14,
                                                               stepSize: 10, 
                                                                min: 0 ,// Edit the value according to what you need
                                                                max: 100
                                                            }
                                                               
                                                        }] 
                                                    },
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

              API.GetDataSearchmdmMchPower2({
                data:{zyear:this.txtSearch,zmonth:this.txtSearch_mn},              
                callblack: res => {
                    //console.log(res);
                  this.itemData = res;
                  ///console.log(this.itemData);
                  setTimeout(() => this.SHOWDATA2(), 1000);
                }
              });


             
 
              API.GetDataSearchMaterialPRC({
              data:{zyear:this.txtSearch,zmonth:this.txtSearch_mn},              
              callblack: res => {
                 this.dataDGV9   =  res[0]["l_pbnoshow"];
                 console.log(res);

                   this.txt_PB = "";
                     /*   if(sNO_DM)
                         {
                           
                         }else
                         {
                           for (i = 0; i < res[0]["s_pb"].length; i++) 
                           {
                                this.txt_PB = this.txt_PB +res[0]["s_pb"][i].toString()+ '</br>';
                           }
                           
                         }*/
                          for (i = 0; i < res[0]["s_pb"].length; i++) 
                           {
                                this.txt_PB = this.txt_PB +res[0]["s_pb"][i].toString()+ '</br>';
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
                                          case 6: dataH1[i] = {
                                                     mn_name:  res[0]["c_data"][i]["mn_name"].toString()+" "+res[0]["c_data"][i]["iYear"].toString().substring(2, 4),
                                                     CUL1: res[0]["c_data"][i]["cuL_1"].toString(),
                                                     CUL2: res[0]["c_data"][i]["cuL_2"].toString(),
                                                     CUL3: res[0]["c_data"][i]["cuL_3"].toString(),
                                                     CUL4: res[0]["c_data"][i]["cuL_4"].toString(),
                                                     CUL5: res[0]["c_data"][i]["cuL_5"].toString(),
                                                     CUL6: res[0]["c_data"][i]["cuL_6"].toString()
                                                  }
                                          case 7: dataH1[i] = {
                                                     mn_name:  res[0]["c_data"][i]["mn_name"].toString()+" "+res[0]["c_data"][i]["iYear"].toString().substring(2, 4),
                                                     CUL1: res[0]["c_data"][i]["cuL_1"].toString(),
                                                     CUL2: res[0]["c_data"][i]["cuL_2"].toString(),
                                                     CUL3: res[0]["c_data"][i]["cuL_3"].toString(),
                                                     CUL4: res[0]["c_data"][i]["cuL_4"].toString(),
                                                     CUL5: res[0]["c_data"][i]["cuL_5"].toString(),
                                                     CUL6: res[0]["c_data"][i]["cuL_6"].toString(),
                                                     CUL7: res[0]["c_data"][i]["cuL_7"].toString()
                                                  }        
                                        } 
                          }

                         
                            //  console.log(C_NAME_C);
                           
                           // C_NAME_C = ["copo","copo","copo"];
                            CharDATA_H2 = [[0],[0],[0],[0],[0],[0],[0]];
                          
                                         
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
                        //    this.show_err = false;
                          // this.show = true;
                         }else
                         {
                         //  this.show_err = true;
                         //  this.show = false;
                         }
                           this.show_err = true;
                           this.show = true;
                        
                        

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
  bar2= null;
 bar3= null; 
 bar4= null; 


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