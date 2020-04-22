import Vue from 'vue'
import axios from './instance';
import { GetObjVal, AlertMessage } from "@/shared/utils";

//Vue.use(axios)

const url = () => {  
    if (mode) return "https://kkfmisapi.kkfnets.com/"; /*prod   http://kkfmisdevapi.kkfnets.com/   */
    else return "https://localhost:44312/"; /*dev*/  
}

export function Call(o) {   
    let urlx = !o.url ? url() : o.url;
    urlx = urlx + (!o.path ? '' : o.path);

    if (o.method.toUpperCase() === 'GET') {
        if (o.data) {
            let key = Object.keys(o.data);
            urlx += "?";
            for (let i = 0; i < key.length; i++) {
                let tmp = o.data[key[i]];
                if (Array.isArray(tmp)) {
                    if (tmp.length > 0) {
                        for (let j = 0; j < tmp.length; j++) {
                            urlx += key[i] + "=" + (!tmp[j] ? '' : tmp[j]);
                            if (tmp.length > j + 1) urlx += "&";
                        }
                    } else { urlx += key[i] + "=" + (!o.data[key[i]] ? '' : o.data[key[i]]); }
                } else { urlx += key[i] + "=" + (!o.data[key[i]] ? '' : o.data[key[i]]); }
                if (key.length > i + 1) urlx += "&";
            }
        }
    }
    
    axios({
        headers: {
            'content-type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            AccessToken: Vue.localStorage.get('AccessToken'),
            Token: Vue.localStorage.get('Token'),
            RecaptchaResponse: o.recaptcha
        },
        method: o.method.toUpperCase(),
        url: urlx,
        data: o.data ? o.data : {},
        withCredentials: true
    })
        .then(res => {
            if (o.callblack) {
                o.callblack(res.data);
            } else {
                o.callback(res.data);
            }
        })
        .catch((error) => {
            console.error(error);
            if (/^O0/.test(GetObjVal(error, 'response.data.code'))) {
                Vue.localStorage.remove("Token");
                Vue.localStorage.remove("User");
                window.location.href = '/member/signin';
                //this.$router.push('/member/signin');
            } else { AlertMessage('error', GetObjVal(error, 'response.data.message')); }
        });
};

export const API = {



    MsCauseAppvListActive: (o) => {
        Object.assign(o, { method: 'Post', path: 'v1/MsCauseAppv/ListActive/' });
        Call(o);
    },

    msUserSequenceGetData: (o) => {
        Object.assign(o, { method: 'Post', path: 'v1/msUserSequence/GetData/' });
        Call(o);
    },
    //v1/RptFollowsWorkOrder/Report
    RptFollowsWorkOrderReport: (o) => {
        Object.assign(o, { method: 'Post', path: 'v1/RptFollowsWorkOrder/Report' });
        Call(o);
    },
    RptFollowsWorkOrderHeadReport: (o) => {
        Object.assign(o, { method: 'Post', path: 'v1/RptFollowsWorkOrder/ReportHead' });
        Call(o);
    },
    RptFollowsWorkOrderDetailReport: (o) => {
        Object.assign(o, { method: 'Post', path: 'v1/RptFollowsWorkOrder/ReportDetail' });
        Call(o);
    },
    RptFollowsWorkOrderLastReport: (o) => {
        Object.assign(o, { method: 'Post', path: 'v1/RptFollowsWorkOrder/ReportLast' });
        Call(o);
    },

    RptFollowsWorkOrderLastReport: (o) => {
        Object.assign(o, { method: 'Post', path: 'v1/RptFollowsWorkOrder/ReportLast' });
        Call(o);
    },
    //rmEmployee
    rmEmployeeSearch: (o) => {
        Object.assign(o, { method: 'Post', path: 'v1/rmEmployee/Search/' });
        Call(o);
    },
    rmEmployeeGetData: (o) => {
        Object.assign(o, { method: 'Post', path: 'v1/rmEmployee/GetData/' });
        Call(o);
    },
    //
    mtWorkOrderHGetData: (o) => {
        Object.assign(o, { method: 'Post', path: 'v1/mtWorkOrderH/GetData/' });
        Call(o);
    },
    //MtWorkOrderSequenceL
    MtWorkOrderSequenceLGetData: (o) => {
        Object.assign(o, { method: 'Post', path: 'v1/MtWorkOrderSequenceL/GetData/' });
        Call(o);
    },
    //msWorkStationGrp
    msWorkStationGrpGetData: (o) => {
        Object.assign(o, { method: 'Post', path: 'v1/msWorkStationGrp/GetData/' });
        Call(o);
    },

    //MtMoveOrderSequence
    MtMoveOrderSequenceGetData: (o) => {
        Object.assign(o, { method: 'Post', path: 'v1/MtMoveOrderSequence/GetData/' });
        Call(o);
    },

    MtMoveOrderSequenceGetNextWorkStationGrp: (o) => {
        Object.assign(o, { method: 'Post', path: 'v1/MtMoveOrderSequence/GetNextWorkStationGrp/' });
        Call(o);
    },
    MtMoveOrderSequenceInsertMove: (o) => {
        Object.assign(o, { method: 'Post', path: 'v1/MtMoveOrderSequence/InsertMove/' });
        Call(o);
    },

    MtWorkOrderSequence_EmpCloseOrder: (o) => {
        Object.assign(o, { method: 'Post', path: 'v1/MtWorkOrderSequence_Emp/CloseOrder/' });
        Call(o);
    },

    MtWorkOrderSequence_EmpGetDataViwe: (o) => {
        Object.assign(o, { method: 'Post', path: 'v1/MtWorkOrderSequence_Emp/GetDataView/' });
        Call(o);
    },

    MtWorkOrderSequence_MchGetDataViwe: (o) => {
        Object.assign(o, { method: 'Post', path: 'v1/MtWorkOrderSequence_Mch/GetDataView/' });
        Call(o);
    },

    MtWorkOrderSequence_MchGetData: (o) => {
        Object.assign(o, { method: 'Post', path: 'v1/MtWorkOrderSequence_Mch/GetData/' });
        Call(o);
    },


    ViewWorkOrderDGetData: (o) => {
        Object.assign(o, { method: 'Post', path: 'v1/ViewWorkOrderD/GetData/' });
        Call(o);
    },

    MsDrawingPathGetData : (o) => {
        Object.assign(o, { method: 'Post', path: 'v1/MsDrawingPath/GetData/' });
        Call(o);
    },

    MsDrawingPathSearch : (o) => {
        Object.assign(o, { method: 'Post', path: 'v1/MsDrawingPath/Search/' });
        Call(o);
    },

    zValueGetData : (o) => {
        Object.assign(o, { method: 'Post', path: 'v1/zValue/GetData/' });
        Call(o);
    },

    
    
    reptsummarysaleGetDataGrid : (o) => {
        Object.assign(o, { method: 'Post', path: 'api/mdmSalesDetail/SearchDetail/' });
        Call(o);
    },


    reptsummarysaleGetDataDashboardAll : (o) => {
        Object.assign(o, { method: 'Post', path: 'api/mdmSales/SearchSummary/' });
        Call(o);
    },


        //--------------------Oauth-----------------------//
        OauthAccess: (o) => {
            Object.assign(o, { method: 'get', path: 'api/Oauth/Access' });
            Call(o);
        },
        OauthLogin: (o) => {
            Object.assign(o, { method: 'Post', path: 'api/Oauth/Login' });
            Call(o);
        },
        OauthLogout: (o) => {
            Object.assign(o, { method: 'delete', path: 'api/Oauth/Logout' });
            Call(o);
        },

        OauthApprove: (o) => {
            Object.assign(o, { method: 'Post', path: 'api/Oauth/Approve' });
            Call(o);
        },


            //--------------------User-----------------------//
    UserRegister: (o) => {
        Object.assign(o, { method: 'Post', path: 'api/User/Register' });
        Call(o);
    },


    //---- รายงานงบลูกหนี้ ------//
    GetDataARSummary: (o) => {
        Object.assign(o, { method: 'Post', path: 'api/mdmAR/SearchSummary' });
        Call(o);
    },


    GetDataARDetail: (o) => {
        Object.assign(o, { method: 'Post', path: 'api/mdmARDetail/SearchDetail' });
        Call(o);
    },

    GetDataROASummary: (o) => {     
        Object.assign(o, { method: 'Post', path: 'api/mdmROA/SearchSum' });
        Call(o);
    },

    GetDataRoaPercentBymn: (o) => {     
        Object.assign(o, { method: 'Post', path: 'api/mdmROA/SearchRoaPercentBymn' });
        Call(o);
    },

    GetDataRoaPercentQuarter: (o) => {     
        Object.assign(o, { method: 'Post', path: 'api/mdmROA/SearchRoaPercentQuarter' });
        Call(o);
    }





};