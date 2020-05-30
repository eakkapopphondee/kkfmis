<template> <!-- <WidgetsBrand/> -->



<div class="animated fadeIn">


  
   <b-row>

      <b-col lg="12">
        <transition name="fade">
          <b-card no-body v-if="show">
            <div slot="header"><i class="fa fa-television" aria-hidden="true"></i> สรุปยอดขายภาพรวม 

              <div class="card-header-actions">
      
                <b-link class="card-header-action btn-minimize" v-b-toggle.collapse1>
                  <i class="icon-arrow-up"></i>
                </b-link>
     
              </div>
            </div>

              <b-collapse id="collapse1" visible>


              <b-card-body>



 <div class="tabset">
 
  <input type="radio" name="tabset12" id="tab1" aria-controls="marzen" checked >
  <label for="tab1">Dash board ยอดขายสะสมถึงเดือนปัจจุบัน</label>
 
  <input type="radio" name="tabset12" id="tab2" aria-controls="rauchbier" >
  <label for="tab2">Dash board  ยอดขายทั้งปี</label>

  
  <div class="tab-panels">
  <section id="marzen" class="tab-panel"> 




<div class="dashboard">
  <div class="all-card">
    <div class="row">

      <div class="col-lg-3 col-md-6">
        <div class="card">
          <div class="card-body border-left-1">
            <div class="row">
              <div class="col">
                <p class="card-title text-title">เป้าหมาย  (ลบ.)</p>
                <h2 class="card-text text-amount">
                  
                 
                  
                  {{dataDashboardobj.cum_target_value| number(2)}} </h2>
              </div>
              <div class="col-auto">
                <div class="icon-shape icon-area">
                  <i class="fa fa-flag" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

  
 <div class="col-lg-3 col-md-6">
        <div class="card">
          <div class="card-body border-left-2">
            <div class="row">
              <div class="col">
                <p class="card-title text-title">ยอดขาย  (ลบ.)</p>
                <h2 class="card-text text-amount">{{dataDashboardobj.cum_sale_value| number(2)}}</h2>
              </div>
              <div class="col-auto">
                <div class="icon-shape icon-pie">
                  <i class="fa fa-dollar" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-6">
        <div class="card">
          <div class="card-body border-left-3">
            <div class="row">
              <div class="col">
                <p class="card-title text-title">ต่างจากเป้าหมาย (ลบ.)</p>
                <h2 class="card-text text-amount">{{dataDashboardobj.cum_diff_value| number(2)}}</h2>
              </div>
              <div class="col-auto">
               <div class="icon-shape icon-pie">
                  <i class="fa fa-exchange" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-6">
        <div class="card">
          <div class="card-body border-left-4">
            <div class="row">
              <div class="col">
               <p class="card-title text-title">% เทียบเป้าหมาย</p>
                <h2 class="card-text text-amount">{{dataDashboardobj.cum_percent_diff| number(2)}} %</h2>
              </div>
              <div class="col-auto">
                <div class="icon-shape icon-percent">
                  <i class="fa fa-percent" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>






          </div>
        </div>
      </div>








<!-- 
<b-row>
  
      <b-col md="12">
        <b-card  style="border: 0px solid;">








          
  <b-row>
    <b-col md="3">
  <div class="panel post">
    <a href="javascript:void();"><span color="#0B5345">{{dataDashboardobj.target_value}} </span>เป้าหมาย (ลบ.)</a>
  </div>
  </b-col>
  <b-col md="3">
  <div class="panel comment">
    <a href="javascript:void();"><span>{{dataDashboardobj.totsale_value}} </span>ยอดขาย (ลบ.)</a>
  </div>
  </b-col>
  <b-col md="3">
  <div class="panel page">
    <a href="javascript:void();"><span>{{dataDashboardobj.diff_value}} </span>ต่างจากเป้าหมาย (ลบ.)</a>
  </div>
  </b-col>
  <b-col md="3">

  <div class="panel user">
    <a href="javascript:void();"><span>{{dataDashboardobj.percent_diff}} %</span>% เทียบเป้าหมาย</a>
  </div>
  </b-col>


</b-row>

       </b-card>
      </b-col>

    </b-row> -->



<b-row>
      <b-col md="6">
        <b-card  style="border: 0px solid;">
       
            <div class="knob_data" style= "background-image: url('img/brand/Flagex.png'); background-repeat: no-repeat;
            background-size: contain; background-position: left;  color:#1A5276; text-align: center; " >ขายต่างประเทศ {{dataDashboardEXobj.cum_percent_diff| number(2)}}% <span class="txt_smaller"></span></div>
              <b-row>


                
                <b-col sm="4">
                  <div class="callout callout-info">
                    <small class="text-muted">เป้าหมาย (ลบ.)</small><br>
                    <strong class="h2">{{dataDashboardEXobj.cum_target_value| number(2)}} </strong>
                    <div class="chart-wrapper" :style="{ top: '-10px'}">
                      <!--<callout-chart-example :data="[35, 23, 56, 22, 97, 23, 64]" variant="#20a8d8" width="80" height="30" />-->
                    
                    </div>
                  </div>
                </b-col>

                <b-col sm="4">
                    <div class="callout callout-successdanger">
                    <small class="text-muted">ยอดขาย (ลบ.)</small><br>
                    <strong class="h2">{{dataDashboardEXobj.cum_sale_value| number(2)}} </strong>
                    <div class="chart-wrapper" :style="{ top: '-10px'}">
                    
                    </div>
                 </div>
                </b-col>
                <b-col sm="4">
                  <div class="callout callout-warning">
                    <small class="text-muted">ต่างจากเป้าหมาย (ลบ.)</small><br>
                    <strong class="h2">

                      <div style="color:#C0392B; display:block;" id="1NOK" >{{dataDashboardEXobj.cum_diff_value| number(2)}}</div>
                      <div style="color:#2471A3; display:none;"  id="1OK" >{{dataDashboardEXobj.cum_diff_value| number(2)}}</div>

           




                    </strong>
                    <div class="chart-wrapper" :style="{ top: '-10px'}">
                    </div>
                  </div>
                </b-col>


              </b-row>


                  <div class="progress-group">
                  <div class="progress-group-header">
                    <i class="icon-chart progress-group-icon"></i>
                    <span class="title">% เทียบเป้าหมาย</span>
                    <span class="ml-auto font-weight-bold">{{dataDashboardEXobj.cum_percent_diff| number(2)}}%</span>
                  </div>
                  <div class="progress-group-bars">
                    <b-progress height={} class="progress-xs" :value=this.dataDashboardEXobj.cum_percent_diff variant="success"></b-progress>
                  </div>
                </div>
          
        </b-card>
      </b-col>


      <b-col md="6">
        <b-card   style="border: 0px solid;">   
            
                  <div class="knob_data" style= "background-image: url('img/brand/thai2.png'); background-repeat: no-repeat;
                  background-size: contain; background-position: left;  color:#1A5276; text-align: center;" >ขายในประเทศ {{dataDashboardDMobj.cum_percent_diff| number(2)}}% <span class="txt_smaller"></span></div>
             
               <b-row>
                <b-col sm="4">
                  <div class="callout callout-info">
                    <small class="text-muted">เป้าหมาย (ลบ.)</small><br>
                    <strong class="h2">{{dataDashboardDMobj.cum_target_value| number(2)}}</strong>
                    <div class="chart-wrapper" :style="{ top: '-10px'}">
                      <!--<callout-chart-example :data="[35, 23, 56, 22, 97, 23, 64]" variant="#20a8d8" width="80" height="30" />-->
                      
                    </div>
                  </div>
                </b-col>

                <b-col sm="4">
                    <div class="callout callout-danger">
                    <small class="text-muted">ยอดขาย (ลบ.)</small><br>
                    <strong class="h2">{{dataDashboardDMobj.cum_sale_value| number(2)}}</strong>
                    <div class="chart-wrapper" :style="{ top: '-10px'}">
               
                    </div>
                 </div>
                </b-col>
                <b-col sm="4">
                  <div class="callout callout-warning">
                    <small class="text-muted">ต่างจากเป้าหมาย (ลบ.)</small><br>
               
<strong class="h2">
                      <div style="color:#C0392B; display:block; " id="2NOK" >{{dataDashboardDMobj.cum_diff_value| number(2)}}</div>
                      <div style="color:#2471A3; display:none;" id="2OK" >{{dataDashboardDMobj.cum_diff_value| number(2)}}</div>
</strong>

                    <div class="chart-wrapper" :style="{ top: '-10px'}">
                     
                    </div>
                  </div>
                </b-col>


              </b-row>

                              <div class="progress-group">
                  <div class="progress-group-header">
                    <i class="icon-chart progress-group-icon"></i>
                    <span class="title">% เทียบเป้าหมาย</span>
                    <span class="ml-auto font-weight-bold">{{dataDashboardDMobj.cum_percent_diff| number(2)}}%</span>
                  </div>
                  <div class="progress-group-bars">
 
                    <b-progress height={} class="progress-xs" :value=this.dataDashboardDMobj.cum_percent_diff variant="success"></b-progress>
                  </div>
                </div>

          
          
        </b-card>
      </b-col>

    </b-row>




  </section>
    <section id="rauchbier" class="tab-panel">


<div class="dashboard">
  <div class="all-card">
    <div class="row">

      <div class="col-lg-3 col-md-6">
        <div class="card">
          <div class="card-body border-left-1">
            <div class="row">
              <div class="col">
                <p class="card-title text-title">เป้าหมาย  (ลบ.)</p>
                <h2 class="card-text text-amount">
                  
                 
                  
                  {{dataDashboardobjYY.target_value| number(2)}} </h2>
              </div>
              <div class="col-auto">
                <div class="icon-shape icon-area">
                  <i class="fa fa-flag" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

  
 <div class="col-lg-3 col-md-6">
        <div class="card">
          <div class="card-body border-left-2">
            <div class="row">
              <div class="col">
                <p class="card-title text-title">ยอดขาย  (ลบ.)</p>
                <h2 class="card-text text-amount">{{dataDashboardobjYY.totsale_value| number(2)}}</h2>
              </div>
              <div class="col-auto">
                <div class="icon-shape icon-pie">
                  <i class="fa fa-dollar" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-6">
        <div class="card">
          <div class="card-body border-left-3">
            <div class="row">
              <div class="col">
                <p class="card-title text-title">ต่างจากเป้าหมาย (ลบ.)</p>

  
                <h2 class="card-text text-amount">{{dataDashboardobjYY.diff_value| number(2)}}</h2>



              </div>
              <div class="col-auto">
               <div class="icon-shape icon-pie">
                  <i class="fa fa-exchange" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-6">
        <div class="card">
          <div class="card-body border-left-4">
            <div class="row">
              <div class="col">
               <p class="card-title text-title">% เทียบเป้าหมาย</p>
                <h2 class="card-text text-amount">{{dataDashboardobjYY.percent_diff| number(2)}} %</h2>





              </div>
              <div class="col-auto">
                <div class="icon-shape icon-percent">
                  <i class="fa fa-percent" aria-hidden="true"></i>
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
            background-size: contain; background-position: left;  color:#1A5276; text-align: center; " >ขายต่างประเทศ : {{dataDashboardEXobjYY.percent_diff| number(2)}} % <span class="txt_smaller"></span></div>
              <b-row>


                
                <b-col sm="4">
                  <div class="callout callout-info">
                    <small class="text-muted">เป้าหมาย (ลบ.)</small><br>
                    <strong class="h2">{{dataDashboardEXobjYY.target_value| number(2)}} </strong>
                    <div class="chart-wrapper" :style="{ top: '-10px'}">
                      <!--<callout-chart-example :data="[35, 23, 56, 22, 97, 23, 64]" variant="#20a8d8" width="80" height="30" />-->
                    
                    </div>
                  </div>
                </b-col>

                <b-col sm="4">
                    <div class="callout callout-successdanger">
                    <small class="text-muted">ยอดขาย (ลบ.)</small><br>
                    <strong class="h2">{{dataDashboardEXobjYY.totsale_value| number(2)}} </strong>
                    <div class="chart-wrapper" :style="{ top: '-10px'}">
                    
                    </div>
                 </div>
                </b-col>
                <b-col sm="4">
                  <div class="callout callout-warning">
                    <small class="text-muted">ต่างจากเป้าหมาย (ลบ.)</small><br>

                  <strong class="h2">

                     <div style="color:#C0392B; display:block; " id="11NOK" >{{dataDashboardEXobjYY.diff_value| number(2)}}</div>
                      <div style="color:#2471A3; display:none;" id="11OK" >{{dataDashboardEXobjYY.diff_value| number(2)}}</div>

                 </strong>


                    <div class="chart-wrapper" :style="{ top: '-10px'}">
               
                    </div>
                  </div>
                </b-col>


              </b-row>


                  <div class="progress-group">
                  <div class="progress-group-header">
                    <i class="icon-chart progress-group-icon"></i>
                    <span class="title">% เทียบเป้าหมาย</span>
                    <span class="ml-auto font-weight-bold">{{dataDashboardEXobjYY.percent_diff| number(2)}}%</span>
                  </div>
                  <div class="progress-group-bars">
                    <b-progress height={} class="progress-xs" :value=this.dataDashboardEXobjYY.percent_diff variant="success"></b-progress>
                  </div>
                </div>
          
        </b-card>
      </b-col>


      <b-col md="6">
        <b-card   style="border: 0px solid;">   
            
                  <div class="knob_data" style= "background-image: url('img/brand/thai2.png'); background-repeat: no-repeat;
                  background-size: contain; background-position: left;  color:#641E16; text-align: center;" >ขายในประเทศ : {{dataDashboardDMobjYY.percent_diff| number(2)}} % <span class="txt_smaller"></span></div>
             
               <b-row>
                <b-col sm="4">
                  <div class="callout callout-info">
                    <small class="text-muted">เป้าหมาย (ลบ.)</small><br>
                    <strong class="h2">{{dataDashboardDMobjYY.target_value| number(2)}}</strong>
                    <div class="chart-wrapper" :style="{ top: '-10px'}">
                      <!--<callout-chart-example :data="[35, 23, 56, 22, 97, 23, 64]" variant="#20a8d8" width="80" height="30" />-->
                      
                    </div>
                  </div>
                </b-col>

                <b-col sm="4">
                    <div class="callout callout-danger">
                    <small class="text-muted">ยอดขาย (ลบ.)</small><br>
                    <strong class="h2">{{dataDashboardDMobjYY.totsale_value| number(2)}}</strong>
                    <div class="chart-wrapper" :style="{ top: '-10px'}">
               
                    </div>
                 </div>
                </b-col>
                <b-col sm="4">
                  <div class="callout callout-warning">
                    <small class="text-muted">ต่างจากเป้าหมาย (ลบ.)</small><br>
           
                     <strong class="h2">
                      <div style="color:#C0392B; display:block;" id="22NOK" >{{dataDashboardDMobjYY.diff_value| number(2)}}</div>
                      <div style="color:#2471A3; display:none;" id="22OK" >{{dataDashboardDMobjYY.diff_value| number(2)}}</div>          
                    </strong>


                    <div class="chart-wrapper" :style="{ top: '-10px'}">
                     
                    </div>
                  </div>
                </b-col>


              </b-row>

                              <div class="progress-group">
                  <div class="progress-group-header">
                    <i class="icon-chart progress-group-icon"></i>
                    <span class="title">% เทียบเป้าหมาย</span>
                    <span class="ml-auto font-weight-bold">{{dataDashboardDMobjYY.percent_diff| number(2)}}%</span>
                  </div>
                  <div class="progress-group-bars">
 
                    <b-progress height={} class="progress-xs" :value=this.dataDashboardDMobjYY.percent_diff variant="success"></b-progress>
                  </div>
                </div>

          
          
        </b-card>
      </b-col>

    </b-row>

   </section>

  </div>
  
</div> 

               
              </b-card-body>
            </b-collapse>
          </b-card>
        </transition>
      </b-col>
  </b-row>


 
<div class="animated fadeIn">
   
    <b-row>
      <b-col lg="12">
        <transition name="fade">
          <b-card no-body v-if="show">
            <div slot="header"><i class="fa fa-bar-chart" aria-hidden="true"></i> รายงานสรุปยอดขายภาพรวม 
              <div class="card-header-actions">
      
                <b-link class="card-header-action btn-minimize" v-b-toggle.collapse2>
                  <i class="icon-arrow-up"></i>
                </b-link>
     
              </div>
            </div>
            <b-collapse id="collapse2" visible>
              <b-card-body>


   
 

              
      <b-row>
            <b-col sm="4">
              <b-form-group
            label="ยอดขายปี"
            label-for="basicSelect"
            :label-cols="3"
            :horizontal="true">



              
                <b-form-select 
                  id="sale"
                  v-model="txtSearch" 
                  @change="Search" 
                  
                 
                  :plain="true"
                  :options="[2019,2020]" value="Please select">
                </b-form-select>


              </b-form-group>
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
           <b-col sm="12">

              <br>
          <p>ตารางสรุปข้อมูลแบบสะสม</p>
         <gridmobile
                ref="gridDrawing"
                
                :fields="fieldDrawingsum"
                :name="name"
                :btnGrid="false"
                :btnAdd="false"
                :btnClone="false"
                :btnView="false"
                :btnEdit="false"
              
                :btnDelete="false"
                :o_col_checkbox="false"
                :trackBy="'rowID'"
                :data="dataDrawing"
                :o_navfooter_visible="false"
              
                
                
            >
            </gridmobile>
            </b-col>
             </b-row>
             <br>
                <b-row>


            <b-col sm="4">
             <div class="XXX" >
               <canvas id="graph1" width="400" height="400"></canvas>


             </div>
             
             </b-col>
            <b-col sm="4">
             <div class="XXX" >
               <canvas id="graphEX" width="400" height="400"></canvas>


             </div>
             
             </b-col>
                         <b-col sm="4">
             <div class="XXX" >
               <canvas id="graphDM" width="400" height="400"></canvas>


             </div>





             </b-col>
         </b-row>

          <b-row>
           <b-col sm="12">
          <br>
         <p>ตารางสรุปข้อมูลแบบประจำเดือน</p>
         <gridmobile
                ref="gridDrawingM"
                
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
                :data="dataDrawing"
                :o_navfooter_visible="false"
              
                
                
            >
            </gridmobile>
            </b-col>
             </b-row> 


<!-- 
  </section>
    <section id="rauchbier" class="tab-panel">
  
          <grid
                ref="gridDrawing"
       
                :fields="fieldDrawin"
                :name="name"
                :btnGrid="false"
                :btnAdd="false"
                :btnClone="false"
                :btnView="false"
                :btnEdit="false"
              
                :btnDelete="false"
                :o_col_checkbox="false"
                :trackBy="'rowID'"
                :data="dataDrawing"
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
      <b-col lg="12">
        <transition name="fade">
          <b-card no-body v-if="show">
            <div slot="header" style=" color:#2E86C1;" ><i class="fa fa-bar-chart" aria-hidden="true"></i> รายงานสรุปยอดขายต่างประเทศ 
              <div class="card-header-actions">
      
                <b-link class="card-header-action btn-minimize" v-b-toggle.collapse3>
                  <i class="icon-arrow-up"></i>
                </b-link>
     
              </div>
            </div>
            <b-collapse id="collapse3" visible>
              <b-card-body>


   
 


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
          <p>ตารางสรุปข้อมูลแบบสะสม</p>
         <gridmobile
                ref="gridDrawing2"
       
                :fields="fieldDrawingsum"
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
            </gridmobile> 

        </b-col>

        <b-col sm="12">
               <br>
          <p>ตารางสรุปข้อมูลแบบประจำเดือน</p>
         <gridmobile
                ref="gridDrawing2M"
       
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
            </gridmobile> 

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
      <b-col lg="12">
        <transition name="fade">
          <b-card no-body v-if="show">
            <div slot="header" style=" color:#117A65;" ><i class="fa fa-bar-chart" aria-hidden="true"></i> รายงานสรุปยอดขายในประเทศ 
              <div class="card-header-actions">
      
                <b-link class="card-header-action btn-minimize" v-b-toggle.collapse4>
                  <i class="icon-arrow-up"></i>
                </b-link>
     
              </div>
            </div>
            <b-collapse id="collapse4" visible>
              <b-card-body>


   
 

<!-- 
<div class="tabset">

  <input type="radio" name="tabset56" id="tab5" aria-controls="marzen" checked>
  <label for="tab5">สะสม</label>
 
  <input type="radio" name="tabset56" id="tab6" aria-controls="rauchbier">
  <label for="tab6">ประจำเดือน</label>

  
  <div class="tab-panels">
    <section id="marzen" class="tab-panel"> -->
   <b-row>
        <b-col sm="12">
              <br>
          <p>ตารางสรุปข้อมูลแบบสะสม</p>
         <gridmobile
                ref="gridDrawing3"
       
                :fields="fieldData"
                :name="name"
                :btnGrid="false"
                :btnAdd="false"
                :btnClone="false"
                :btnView="false"
                :btnEdit="false"
              
                :btnDelete="false"
                :o_col_checkbox="false"
                :trackBy="'rowID'"
                :data="dataDrawingDM"
                :o_navfooter_visible="false"
              
                
                
            >
            </gridmobile> 
      </b-col>
        <b-col sm="12">
              <br>
          <p>ตารางสรุปข้อมูลแบบประจำเดือน</p>
         <gridmobile
                ref="gridDrawing3M"
       
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
                :data="dataDrawingDM"
                :o_navfooter_visible="false"
              
                
                
            >
            </gridmobile> 
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
                :data="dataDrawingDM"
                :o_navfooter_visible="false"
              
                
                
            >
            </grid> 
 
   </section>

  </div>
  
</div>
 -->



        
              </b-card-body>
            </b-collapse>
          </b-card>
        </transition>
      </b-col>
    </b-row>



    


          
</div>   






 
<div class="fixed-bottom-bar" style=" background:#EAF2F8 repeat top left;">  

<div class="fixed-bottom-bar-in">
     
      <label class="switch" >
      <input      type="checkbox"
                  id="typerept"
                  @change="Settyperept" 

                  v-model="chktyperept" 

                   checked="on"
      
       >           
      <span class="slider"></span>
    
      <p class="off">ถึงปัจจุบัน</p>
      <p class="on">แสดงทั้งปี</p>
    </label>
</div>
  </div> 
  
<!-- 
   
    <input type="checkbox" id="id-name--1" name="set-name" class="switch-input">
    <label for="id-name--1" class="switch-label"><span class="toggle--on">แบบสะสม</span><span class="toggle--off">แบบประจำเดือน</span></label>
    -->



 </div>        

</template>










// function Set1() {
//   document.getElementById("tab1").checked = true;
//    document.getElementById("tab3").checked = true;
// }

// function unSet1() {
//   document.getElementById("tab1").checked = false;
//    document.getElementById("tab3").checked = false;
// }

//import Vue from 'vue'


























 <script>


import Vue from 'vue'


import Chart from 'chart.js'

 
import { API } from "@/shared/core";
import { GetDateView, AlertMessage, ObjCopy, ObjResetValue, GetLastUpdate,GetDateTimeFormat } from "@/shared/utils";
import { status, configMode } from "@/shared/define";
import { required, minLength } from "vuelidate/lib/validators";
import dic from "@/shared/dic";

import 'webrtc-adapter';




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
    let date = new Date();

    this.txtSearch = date.getFullYear();


    this.Settyperept();
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
    perPage: 25,

      startRow: 0,
      stopRow: 25,

     dataDrawingGraph:[],
     dataDrawingGraph2:[],

    dataDrawingYY:[],

    dataDrawingYYgraph:[],
dataDrawingYYgraph2:[],

     dataDrawingEXYY:[],
    dataDrawingDMYY:[],


    dataDrawingMM:[],
     dataDrawingEXMM:[],
    dataDrawingDMMM:[],


    dataDrawing:[],
     dataDrawingEX:[],
    dataDrawingDM:[],




    dataDrawing2:[],
     dataDrawingEX2:[],
    dataDrawingDM2:[],


   

    fieldData:[
      
      // {
         
      //   name: "rowID",
      //   title: "No",
      //     class: "text-right",
      //   visible: true
      // },
       
       {
        name: "month_code",
        title: "เดือน",
        sortField: "mnt",
        class: "text-rig",
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
    fieldDrawing:[   
      
       
       {
        name: "month_code",
        title: "เดือน",
        sortField: "mnt",
        class: "text-rig",
        visible: true
        },
        {
        name: "target_value",
        title: "เป้าหมายประจำเดือน (ลบ.)",
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
        name: "totsale_value",
        title: "ยอดขายประจำเดือน (ลบ.)",
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
        name: "diff_value",
        title: "ต่างจากเป้าหมายประจำเดือน (ลบ.)",
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
        name: "percent_diff",
        title: "% เทียบเป้าหมายประจำเดือน",
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
     
      
    fieldDrawingsum:[
      
      // {
         
      //   name: "rowID",
      //   title: "No",
      //     class: "text-right",
      //   visible: true
      // },
       
       {
        name: "month_code",
        title: "เดือน",
        sortField: "mnt",
        class: "text-rig",
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
     

    iframe: {
    src: "", //DIV HERE #EDITOR
    loaded: false
    },
    dataSelect:[],
    objSelect:{},
    bar:null,

    dataDashboardobj:{},
    dataDashboardEXobj:{},
    dataDashboardDMobj:{},

    setdataDashboardobj:[],
    setdataDashboardEXobj:[],
    setdataDashboardDMobj:[],


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



    Settyperept(){

        


             this.dataDrawing    =  [];
             this.dataDrawingEX  =  [];
             this.dataDrawingDM  =  [];

             if (this.chktyperept)
             {
              this.dataDrawing    =  this.dataDrawingYY;
              this.dataDrawingEX =  this.dataDrawingEXYY;
              this.dataDrawingDM =  this.dataDrawingDMYY;

             } else {
 
               this.dataDrawing   =  this.dataDrawingMM;  
               this.dataDrawingEX =  this.dataDrawingEXMM; 
               this.dataDrawingDM =  this.dataDrawingDMMM; 
 
             }

            
      

             
      



               this.$refs.gridDrawing.reset();
               this.$refs.gridDrawing2.reset();
               this.$refs.gridDrawing3.reset();

               this.$refs.gridDrawingM.reset();
               this.$refs.gridDrawing2M.reset();
               this.$refs.gridDrawing3M.reset();



    },


   validator (val) {
      return val ? val.length >= 4 : false
    },

    QueryData(){


          

      API.reptsummarysaleGetDataGrid({
   
       data:{yr:this.txtSearch,tsale:""},    
   

        callblack: res => {

            let errA = "";
            let _statusA = ""; 
            if (res.length <= 0)                            
            {   
              AlertMessage("error", 'ไม่พบข้อมูลยอดขายประจำเดือน');
              return ;
            }



            this.dataDrawingMM = [];
            this.dataDrawingYY = [];


            this.dataDrawing = [];


            this.dataDrawingYYgraph=[];
            this.dataDrawingYYgraph2=[];




             let date = new Date();

             let numA  =0;
             let numYY =0;
             let numYYchk =0;

            numYYchk = this.txtSearch;

            
          
            numA  = GetDateTimeFormat( date,"MM");
            numYY = GetDateTimeFormat( date,"YYYY");
            
      

            if (this.chktyperept)  
            {
               numA=12;  
               

            } else {

               numA=GetDateTimeFormat( date,"MM");
            }
             
             if (numYY > numYYchk )
             {
                numA=12;
             }


            this.dataDrawingGraph=[];
            this.dataDrawingGraph2=[];

            this.dataDrawingYYgraph.push(0);
            this.dataDrawingYYgraph2.push(0);


  

             res.forEach((d,i) => {



               if (i<numA ) {


              this.dataDrawingMM.push(d);   

              this.dataDrawingYYgraph.push(Number(res[i].totsale_value));

               }
                 
              this.dataDrawingYY.push(d);

              this.dataDrawingYYgraph2.push(Number(res[i].target_value));
        

            });

      

    
            if (this.chktyperept)  
            {
               this.dataDrawing = this.dataDrawingYY;

            } else {

                this.dataDrawing = this.dataDrawingMM;
            }





             


     this.dataDrawingGraph = this.dataDrawingYYgraph;
     
     this.dataDrawingGraph2 = this.dataDrawingYYgraph2;


  

   var ctx = document.getElementById('graph1').getContext('2d')

   

   this.bar = new Chart(ctx, {
   type: 'line',
      options: {
      responsive: true,

      title: { // ข้อความที่อยู่ด้านบนของแผนภูมิ
            text: "กราฟสรุปยอดขายประจำเดือน-ภาพรวม",
            display: true
         }



  },
      data: {
        labels: ['','ม.ค.', 'ก.พ.', 'มี.ค.','เม.ย.','พ.ค.','มิ.ย.','ก.ค.','ส.ค.','ก.ย.','ต.ค.','พ.ย.','ธ.ค.'],
        datasets: [
          {
   backgroundColor: 'rgba(55, 173, 221, 0.1)',
      borderColor: 'rgba(55, 173, 221, 1.0)',
            label: 'เป้าหมายประจำเดือน (ลบ.)',
         
            data: this.dataDrawingGraph2

          },
          {

            backgroundColor: 'rgba(217, 136, 128   , 0.4)',
            borderColor: 'rgba(217, 136, 128  , 1.0)',       
  
            label: 'ยอดขายประจำเดือน (ลบ.)',
            data: this.dataDrawingGraph
          }
          
          
          
          
          ]
      }
      
    });




            res.forEach((d,i) => {

            if (i<numA ) {


            


            this.setdataDashboardobj= []; 

            this.setdataDashboardobj.push(d);


            this.dataDashboardobj = this.setdataDashboardobj[0];

            }






            });



        }

         });

 

      API.reptsummarysaleGetDataGrid({
   
       data:{yr:this.txtSearch,tsale:"1"},    
       


        callblack: res => {

            let errA = "";
            let _statusA = ""; 
            if (res.length <= 0)                            
            {   

              return ;
            }

             this.dataDrawingEXMM = [];
             this.dataDrawingEXYY = [];
             this.dataDrawingEX =  [];
              this.dataDrawingEX2 =  [];

             let date = new Date();

             let numA =0;


            

             let numYY =0;
             let numYYchk =0;

            numYYchk = this.txtSearch;

            
          
            numA = GetDateTimeFormat( date,"MM");
            numYY = GetDateTimeFormat( date,"YYYY");
            
            if (this.chktyperept)  
            {
           

                numA=12;
            } else {

              numA=GetDateTimeFormat( date,"MM");
              
            }
             
             if (numYY > numYYchk )
            {
                numA=12;
            }
            this.dataDrawingYYgraph=[];
             this.dataDrawingYYgraph2=[];


       this.dataDrawingGraph=[];
             this.dataDrawingGraph2=[];

              this.dataDrawingYYgraph.push(0);
               this.dataDrawingYYgraph2.push(0);


             res.forEach((d,i) => {


            
 
               

               if (i<numA ) {
              this.dataDrawingYYgraph.push(Number(res[i].totsale_value));
              this.dataDrawingEXMM.push(d);
               }
                 
              this.dataDrawingEXYY.push(d);
              this.dataDrawingYYgraph2.push(Number(res[i].target_value));
        

            });

      
    
            if (this.chktyperept)  
            {
               this.dataDrawingEX = this.dataDrawingEXYY;

            } else {

                this.dataDrawingEX = this.dataDrawingEXMM;
            }

    


     this.dataDrawingGraph = this.dataDrawingYYgraph;
     
     this.dataDrawingGraph2 = this.dataDrawingYYgraph2;

  





   var ctxEX = document.getElementById('graphEX').getContext('2d')

   this.barEX = new Chart(ctxEX, {
   type: 'line',
      options: {
    responsive: true,

      title: { // ข้อความที่อยู่ด้านบนของแผนภูมิ
            text: "กราฟสรุปยอดขายประจำเดือน-ขายต่างประเทศ",
            display: true
         }
  },
      data: {
        labels: ['','ม.ค.', 'ก.พ.', 'มี.ค.','เม.ย.','พ.ค.','มิ.ย.','ก.ค.','ส.ค.','ก.ย.','ต.ค.','พ.ย.','ธ.ค.'],
        datasets: [
          {
   backgroundColor: 'rgba(55, 173, 221, 0.1)',
      borderColor: 'rgba(55, 173, 221, 1.0)',
            label: 'เป้าหมายประจำเดือน (ลบ.)',
         
            data: this.dataDrawingGraph2

          },
          {
          
    
            label: 'ยอดขายประจำเดือน (ลบ.)',
            data: this.dataDrawingGraph
          }
          
          
          
          
          ]
      }
      
    });










        
      
     



            res.forEach((d,i) => {

            if (i<numA ) {
         

            this.setdataDashboardEXobj= []; 

            this.setdataDashboardEXobj.push(d);


            this.dataDashboardEXobj = this.setdataDashboardEXobj[0];






            }

            });



                       if (this.dataDashboardEXobj.cum_diff_value < 0 )
                      document.getElementById('1NOK').style.display = "block";
                      else
                      document.getElementById('1NOK').style.display = "none";

                      if (this.dataDashboardEXobj.cum_diff_value < 0 )
                      document.getElementById('1OK').style.display = "none";
                      else
                      document.getElementById('1OK').style.display = "block";



            
          
       


        }




        





      });




      API.reptsummarysaleGetDataGrid({
   
       data:{yr:this.txtSearch,tsale:"0"},    
   

        callblack: res => {

            let errA = "";
            let _statusA = ""; 
            if (res.length <= 0)                            
            {   
       
              return ;
            }


             this.dataDrawingDMYY = [];
             this.dataDrawingDMMM = [];
             this.dataDrawingDM = [];
             this.dataDrawingDM2 = [];

             let date = new Date();

             let numA =0;


            

            let numYY =0;
            let numYYchk =0;

            numYYchk = this.txtSearch;


            this.dataDrawingGraph=[];
            this.dataDrawingGraph2=[];

            this.dataDrawingYYgraph=[];
            this.dataDrawingYYgraph2=[];

            this.dataDrawingYYgraph.push(0);
            this.dataDrawingYYgraph2.push(0);
            
          
            numA  = GetDateTimeFormat( date,"MM");
            numYY = GetDateTimeFormat( date,"YYYY");
            
            if (this.chktyperept)  
            {
              numA=12;


            } else {

              

                 numA=GetDateTimeFormat( date,"MM");
            }
             
             if (numYY > numYYchk )
            {
                numA=12;
            }

          


             res.forEach((d,i) => {


          



               if (i<numA ) {
              this.dataDrawingYYgraph.push(Number(res[i].totsale_value));

                 this.dataDrawingDMMM.push(d);
               }
                 
                this.dataDrawingDMYY.push(d);
                this.dataDrawingYYgraph2.push(Number(res[i].target_value));
        

            });

      

            if (this.chktyperept)  
            {
               this.dataDrawingDM = this.dataDrawingDMYY;

            } else {

                this.dataDrawingDM = this.dataDrawingDMMM;
            }
    


            this.dataDrawingGraph = this.dataDrawingYYgraph;
     
            this.dataDrawingGraph2 = this.dataDrawingYYgraph2;





   var ctxDM = document.getElementById('graphDM').getContext('2d')

   this.barDM = new Chart(ctxDM, {
   type: 'line',
      options: {
    responsive: true    , title: { // ข้อความที่อยู่ด้านบนของแผนภูมิ
            text: "กราฟสรุปยอดขายประจำเดือน-ขายในประเทศ",
            display: true
         }
  },
      data: {
        labels: ['','ม.ค.', 'ก.พ.', 'มี.ค.','เม.ย.','พ.ค.','มิ.ย.','ก.ค.','ส.ค.','ก.ย.','ต.ค.','พ.ย.','ธ.ค.'],
        datasets: [
          {
   backgroundColor: 'rgba(55, 173, 221, 0.1)',
      borderColor: 'rgba(55, 173, 221, 1.0)',
            label: 'เป้าหมายประจำเดือน (ลบ.)',
         
            data: this.dataDrawingGraph2

          },
          {
          
    
            label: 'ยอดขายประจำเดือน (ลบ.)',
            data: this.dataDrawingGraph
          }
          
          
          
          
          ]
      }
      
    });

  



     

            
      




        
      
     









            res.forEach((d,i) => {

            if (i<numA ) {

     

            this.setdataDashboardDMobj= []; 

            this.setdataDashboardDMobj.push(d);


            this.dataDashboardDMobj = this.setdataDashboardDMobj[0];

            }





            });


            
                       if (this.setdataDashboardDMobj.cum_diff_value < 0 )
                      document.getElementById('2NOK').style.display = "block";
                      else
                      document.getElementById('2NOK').style.display = "none";

                      if (this.setdataDashboardDMobj.cum_diff_value < 0 )
                      document.getElementById('2OK').style.display = "none";
                      else
                      document.getElementById('2OK').style.display = "block";
 


        }

      });




            API.reptsummarysaleGetDataDashboardAll({
              data:{yr:this.txtSearch,tsale:""},              
              callblack: res => {


                  this.dataDashboardAll   =  res ;
                  this.dataDashboardobjYY =  res[0];
             
             
           




              }


            });


            API.reptsummarysaleGetDataDashboardAll({
              data:{yr:this.txtSearch,tsale:"1"},              
              callblack: res => {


                  this.dataDashboardEX      =  res ;
                  this.dataDashboardEXobjYY =  res[0];



               res.forEach((d,i) => {

           

     

            this.setdataDashboardDMobj= []; 

            this.setdataDashboardDMobj.push(d);


            this.dataDashboardDMobj = this.setdataDashboardDMobj[0];

          
                       if (this.dataDashboardDMobj.diff_value < 0 )
                      document.getElementById('11NOK').style.display = "block";
                      else
                      document.getElementById('11NOK').style.display = "none";

                      if (this.dataDashboardDMobj.diff_value < 0 )
                      document.getElementById('11OK').style.display = "none";
                      else
                      document.getElementById('11OK').style.display = "block";





            });









                  
                   
              }


            });
                
             
            


                 



            API.reptsummarysaleGetDataDashboardAll({
              data:{yr:this.txtSearch,tsale:"0"},              
              callblack: res => {


                  this.dataDashboardDM =  res ;
                  this.dataDashboardDMobjYY = res[0];



  res.forEach((d,i) => {

           

     

            this.setdataDashboardDMobj= []; 

            this.setdataDashboardDMobj.push(d);


            this.dataDashboardDMobj = this.setdataDashboardDMobj[0];


                       if (this.dataDashboardDMobjYY.diff_value < 0 )
                      document.getElementById('22NOK').style.display = "block";
                      else
                      document.getElementById('22NOK').style.display = "none";

                      if (this.dataDashboardDMobjYY.diff_value < 0 )
                      document.getElementById('22OK').style.display = "none";
                      else
                      document.getElementById('22OK').style.display = "block";





            });









              }
              
            });


          







       
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



</style>





