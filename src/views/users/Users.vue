<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col
        cols="12"
        lg="12"
      >
        <transition name="fade">
          <b-card no-body>
            <div slot="header">
              <h5><i
                  class="icon-people"
                  aria-hidden="true"
                ></i> พนักงาน</h5>
              <div class="card-header-actions">
                <b-link
                  class="card-header-action btn-minimize"
                  v-b-toggle.collapse1
                >
                  <i class="icon-arrow-up"></i>
                </b-link>
              </div>
            </div>
            <b-collapse
              id="collapse1"
              visible
            >
              <b-card-body >
                <b-row>
                      <b-col xl="8">
                  <b-container fluid>
                    
                    <gridv2
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
                      :o_navfooter_visible="true"
                    >
                      <template v-slot:status="{item, itemIndex}">
                        <toggle-button
                          :value="item.status=='A'?true:false"
                          :labels="{checked: 'เปิด', unchecked: 'ปิด'}"
                          @change="onChangeStatus(item, $event)"
                        />

                      </template>
                      <template v-slot:admin="{item, itemIndex}">
                        <toggle-button
                          :value="item.admin==1?true:false"
                          :labels="{checked: 'Admin', unchecked: 'User'}"
                          @change="onChangeAdmin(item, $event)"
                        />

                      </template>

                      <template v-slot:softpassword="{item, itemIndex}">
                        <b-button
                          variant="outline-warning" size="sm"
                          v-on:click="onReset(item)"
                        >Reset</b-button>

                      </template>

                    </gridv2>
                      

                  </b-container>

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

export default {
  name: 'Users',
  mounted () {
    API.AdminVerify({
      data: {
        username: this.$localStorage.get("User")
      },
      callblack: res => {
        //console.log(res);
        if (!res || res.userid == '') {
          this.$router.push({ name: 'Home' });

        }
      }
    });

    this.QueryData();

  },
  data: () => {
    return {
      currentPage: 1,
      perPage: 5,
      totalRows: 0,
      name: "Users",
      F_DGV1: [
        {
          name: "id",
          title: "รหัส",
          sortField: "id",
          class: "text-left",
          visible: true
        },
        {
          name: "description",
          title: "ชื่อ - นามสกุล",
          sortField: "description",
          class: "text-left",
          visible: true
        },
        {
          name: "email",
          title: "E-mail",
          sortField: "email",
          class: "text-left",
          visible: true
        },
        {
          name: "status",
          title: "สถานะการใช้งาน",
          sortField: "status",
          class: "text-center",
          visible: true
        },
        {
          name: "admin",
          title: "Admin",
          sortField: "admin",
          class: "text-center",
          visible: true
        },
        {
          name: "softpassword",
          title: "Reset Password",
          sortField: "",
          class: "text-center",
          visible: true
        }
      ],
      dataDGV1: [],
    }
  },
  computed: {
  },
  methods: {
    getBadge (status) {
      return status === 'Active' ? 'success'
        : status === 'Inactive' ? 'secondary'
          : status === 'Pending' ? 'warning'
            : status === 'Banned' ? 'danger' : 'primary'
    },
    getRowCount (items) {
      return items.length
    },
    userLink (id) {
      return `users/${id.toString()}`
    },
    rowClicked (item) {
      const userLink = this.userLink(item.id)
      this.$router.push({ path: userLink })
    },

    QueryData () {
      API.UserList({
        callblack: res => {
          //console.log(res);
          this.dataDGV1 = res.users;
        }
      });

    },

    onChangeStatus (data, event) {
      let value = event.value;
      API.UserStatus({
        data: {
          username: this.$localStorage.get("User"),
          userid: data.id,
          status: value,
          mode: 1
        },
        callblack: res => {
          //console.log(res);
          this.QueryData();
        }
      });
    },

    onChangeAdmin (data, event) {
      let value = event.value;
      API.UserStatus({
        data: {
          username: this.$localStorage.get("User"),
          userid: data.id,
          status: value,
          mode: 2
        },
        callblack: res => {
          //console.log(res);
          this.QueryData();
        }
      });

    },

    onReset (data) {
      API.UserPassword({
        data: {
          username: this.$localStorage.get("User"),
          userid: data.id,
        },
        callblack: res => {
          //console.log(res);
          AlertMessage("success", "บันทึกเรียบร้อยแล้ว");
          this.QueryData();
        }
      });

    },

  }
}
</script>

<style scoped>
.card-body >>> table > tbody > tr > td {
  cursor: pointer;
}
</style>
