(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-43898d2e"],{"07a2":function(t,e,a){var n=a("8a1c");t.exports=function(t){if(n(t))throw TypeError("The method doesn't accept regular expressions");return t}},2682:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"checkTransfer"},[n("div",{staticClass:"header"},[n("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[n("el-breadcrumb-item",[t._v("您现在的位置：复核发送")]),n("el-breadcrumb-item",[t._v("交易复核")])],1),n("div",[n("span",{staticClass:"mr-40"},[t._v("客户号： ***********")]),n("span",[t._v("操作员号："+t._s(t.userInfo.number))])])],1),1===t.active?n("div",{staticClass:"position-relative"},[n("img",{attrs:{src:a("bdf4"),alt:""}}),n("div",{staticClass:"money",on:{click:t.detail}},[t._v(t._s(t.number))])]):2===t.active?n("div",{staticClass:"position-relative"},[n("img",{attrs:{src:a("8846"),alt:""}}),n("div",{staticClass:"check-transfer-header mt-20"},[t._v("待复核交易列表（本级复核）")]),n("div",{staticClass:"w-100p mt-20 mb-20",staticStyle:{"max-height":"400px","overflow-y":"auto"}},[n("el-table",{attrs:{data:t.payTransferInfo,border:"","highlight-current-row":"",fit:"",size:"mini"}},[n("el-table-column",{attrs:{label:"流水号",prop:"number",align:"center"}},[[t._v("201****************")]],2),n("el-table-column",{attrs:{label:"付款方账号",prop:"payAccountNum",align:"center"}}),n("el-table-column",{attrs:{label:"收款方账号",prop:"payeeAccountNum",align:"center"}}),n("el-table-column",{attrs:{label:"收款方户名",prop:"payeeAccountName",align:"center"}}),n("el-table-column",{attrs:{label:"预约日期",align:"center",width:"80"}},[[t._v("预约日期")]],2),n("el-table-column",{attrs:{label:"金额",prop:"money",align:"center"}}),n("el-table-column",{attrs:{label:"录入员",align:"center",width:"80"}},[[t._v(t._s(t.userInfo.name))]],2),n("el-table-column",{attrs:{label:"通过",align:"center",width:"50"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[n("el-radio",{attrs:{label:1},on:{change:function(e){return t.checkColumn(a)}},model:{value:a.pass,callback:function(e){t.$set(a,"pass",e)},expression:"row.pass"}},[n("span")])]}}])}),n("el-table-column",{attrs:{label:"拒绝",align:"center",width:"50"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[n("el-radio",{attrs:{label:0},on:{change:function(e){return t.checkColumn(a)}},model:{value:a.pass,callback:function(e){t.$set(a,"pass",e)},expression:"row.pass"}},[n("span")])]}}])}),n("el-table-column",{attrs:{label:"拒绝原因",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[n("el-input",{attrs:{disabled:!!a.pass,size:"mini"},on:{input:function(e){return t.checkColumn(a)}},model:{value:a.reason,callback:function(e){t.$set(a,"reason",e)},expression:"row.reason"}})]}}])})],1)],1),n("div",{staticClass:"flex w-100p"},[n("div",{staticClass:"table-title flex-1"},[t._v("通过总笔数")]),n("div",{staticClass:"table-input"},[t._v(t._s(t.passNum))]),n("div",{staticClass:"table-title flex-1"},[t._v("通过总金额")]),n("div",{staticClass:"table-input"},[t._v(t._s(t.passMoney.toFixed(2)))]),n("div",{staticClass:"table-title flex-1"},[t._v("拒绝总笔数")]),n("div",{staticClass:"table-input"},[t._v(t._s(t.noPassNum))]),n("div",{staticClass:"table-title flex-1"},[t._v("拒绝总金额")]),n("div",{staticClass:"table-input",staticStyle:{"border-right":"solid 2px #eeeeee"}},[t._v(t._s(t.noPassMoney.toFixed(2)))])]),n("div",{staticClass:"text-center mt-20 mb-20"},[n("el-button",{attrs:{type:"warning",size:"medium"},on:{click:t.check}},[t._v("提交")]),n("el-button",{attrs:{plain:"",size:"medium"},on:{click:function(e){t.active=1}}},[t._v("返回")])],1),n("img",{attrs:{src:a("7730"),alt:""}})]):3===t.active?n("div",[n("img",{attrs:{src:a("8846"),alt:""}}),n("div",{staticClass:"check-transfer-header mt-20"},[t._v("复核交易确认")]),t.resultList[0]["pass"]?n("div",{staticClass:"table-head mt-20"},[t._v("复核 通过 交易：共"+t._s(t.passNum)+"笔 总额："+t._s(t.passMoney.toFixed(2))+"元")]):n("div",{staticClass:"table-head mt-20"},[t._v("复核 拒绝 交易：共"+t._s(t.noPassNum)+"笔 总额："+t._s(t.noPassMoney.toFixed(2))+"元")]),n("el-table",{attrs:{data:t.resultList,border:"","highlight-current-row":"",fit:"",size:"mini"}},[n("el-table-column",{attrs:{label:"流水号",prop:"number",align:"center"}},[[t._v("201****************")]],2),n("el-table-column",{attrs:{label:"付款方账号",prop:"payAccountNum",align:"center"}}),n("el-table-column",{attrs:{label:"收款方账号",prop:"payeeAccountNum",align:"center"}}),n("el-table-column",{attrs:{label:"收款方户名",prop:"payeeAccountName",align:"center"}}),n("el-table-column",{attrs:{label:"预约日期",align:"center",width:"80"}},[[t._v("预约日期")]],2),n("el-table-column",{attrs:{label:"金额",prop:"money",align:"center"}}),n("el-table-column",{attrs:{label:"录入员",align:"center",width:"80"}},[[t._v(t._s(t.userInfo.name))]],2)],1),n("div",{staticClass:"text-center mt-20 mb-20"},[n("el-button",{attrs:{type:"warning",size:"medium"},on:{click:t.confirm}},[t._v("提交")]),n("el-button",{attrs:{plain:"",size:"medium"},on:{click:function(e){t.active=2}}},[t._v("返回")])],1),t._m(0)],1):4===t.active?n("div",[n("img",{attrs:{src:a("cedd"),alt:""}}),n("div",{staticClass:"check-transfer-header mt-20 mb-20"},[t._v("已发送交易列表")]),n("el-table",{attrs:{data:t.resultList,border:"","highlight-current-row":"",fit:"",size:"mini"}},[n("el-table-column",{attrs:{label:"流水号",prop:"number",align:"center"}},[[t._v("201****************")]],2),n("el-table-column",{attrs:{label:"付款方账号",prop:"payAccountNum",align:"center"}}),n("el-table-column",{attrs:{label:"收款方账号",prop:"payeeAccountNum",align:"center"}}),n("el-table-column",{attrs:{label:"收款方户名",prop:"payeeAccountName",align:"center"}}),n("el-table-column",{attrs:{label:"金额",prop:"money",align:"center"}}),n("el-table-column",{attrs:{label:"记账操作人员",align:"center"}},[[t._v(t._s(t.userInfo.name))]],2),n("el-table-column",{attrs:{label:"交易状态",align:"center"}},[[t._v("操作成功")]],2)],1),n("div",{staticClass:"text-center mt-20"},[n("el-button",{attrs:{plain:"",size:"medium"},on:{click:function(e){t.active=1}}},[t._v("返回")])],1)],1):t._e(),n("el-dialog",{directives:[{name:"el-drag-dialog",rawName:"v-el-drag-dialog"}],attrs:{title:"中国农业银行 - K宝签名确认",width:"446px",modal:!1,"close-on-click-modal":!1,"close-on-press-escape":!1,visible:t.dialogVisible},on:{"update:visible":function(e){t.dialogVisible=e}}},[n("div",{staticClass:"position-relative "},[n("img",{attrs:{src:a("b9a0"),alt:""}}),n("img",{attrs:{src:a("95b2"),alt:""}}),n("div",{staticClass:"u-cancel",on:{click:function(e){t.dialogVisible=!1}}}),n("div",{staticClass:"u-confirm",on:{click:t.save}})])])],1)},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("img",{attrs:{src:a("7730"),alt:""}})])}],i=(a("fe59"),a("08ba"),a("a888")),c={name:"CheckTransfer",directives:{elDragDialog:i["a"]},data:function(){return{active:1,resultList:[],dialogVisible:!1,number:0,multiSelection:[],passNum:0,passMoney:0,noPassNum:0,noPassMoney:0}},computed:{userInfo:function(){return this.$store.state.userInfo},companyInfo:function(){return this.$store.state.companyInfo},payTransferInfo:function(){return this.$store.state.payTransferInfo},checkInfo:function(){return this.$store.state.checkInfo}},created:function(){this.initData()},watch:{payTransferInfo:function(t){this.number=t.length,this.calStatistic()}},methods:{initData:function(){this.number=this.payTransferInfo.length,this.calStatistic()},check:function(){if(this.resultList.length<=0)return this.$message.warning("没有提交内容"),!1;this.active=3},detail:function(){this.number>0?this.active=2:this.$message.warning("没有需要复核的内容")},multiSelect:function(t){this.multiSelection=t},checkColumn:function(t){var e=this;t.pass&&this.$set(t,"reason",""),this.payTransferInfo.length>0&&this.payTransferInfo.forEach((function(a){a.created_at!==t.created_at&&(e.$set(a,"pass",""),e.$set(a,"reason",""))})),this.$store.commit("saveCheckInfo",t),this.calStatistic()},confirm:function(){this.dialogVisible=!0},save:function(){var t=this;this.$confirm("注：因本系统为模拟系统，所以审核后的信息自动发送，真实系统需手动发送至银行终端来确认。","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){t.$store.commit("saveCheckResultInfo",t.resultList),t.$message.success("提交成功"),t.$store.commit("clearCheckInfo"),t.dialogVisible=!1,t.active=4})).catch((function(){console.log("cancel")}))},calStatistic:function(){var t=this;this.resultList=[],this.resetStatistic(),this.checkInfo.length>0&&this.checkInfo.forEach((function(e){e.pass?(t.passNum+=1,t.passMoney+=e.money?parseFloat(e.money):0,t.resultList.push(e)):(t.noPassNum+=1,t.noPassMoney+=e.money?parseFloat(e.money):0,t.resultList.push(e))}))},resetStatistic:function(){this.passNum=0,this.passMoney=0,this.noPassNum=0,this.noPassMoney=0}}},l=c,r=(a("3fe9"),a("9ca4")),o=Object(r["a"])(l,n,s,!1,null,"662e5e76",null);e["default"]=o.exports},"3fe9":function(t,e,a){"use strict";var n=a("6be0"),s=a.n(n);s.a},"6be0":function(t,e,a){},7730:function(t,e,a){t.exports=a.p+"static/img/check-help3.c318fe92.png"},"783d":function(t,e,a){var n=a("90fb"),s=n("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(a){try{return e[s]=!1,"/./"[t](e)}catch(n){}}return!1}},8846:function(t,e,a){t.exports=a.p+"static/img/check-help2.01984626.png"},"8a1c":function(t,e,a){var n=a("a719"),s=a("2118"),i=a("90fb"),c=i("match");t.exports=function(t){var e;return n(t)&&(void 0!==(e=t[c])?!!e:"RegExp"==s(t))}},"90aa":function(t,e,a){"use strict";var n=a("1c8b"),s=a("07a2"),i=a("2732"),c=a("783d");n({target:"String",proto:!0,forced:!c("includes")},{includes:function(t){return!!~String(i(this)).indexOf(s(t),arguments.length>1?arguments[1]:void 0)}})},"95b2":function(t,e,a){t.exports=a.p+"static/img/check2.711d9d9e.png"},a888:function(t,e,a){"use strict";a("b4fb"),a("b130"),a("e35a"),a("90aa"),a("5e9f");var n={bind:function(t,e,a){var n=t.querySelector(".el-dialog__header"),s=t.querySelector(".el-dialog");n.style.cssText+=";cursor:move;",s.style.cssText+=";top:0px;";var i=function(){return window.document.currentStyle?function(t,e){return t.currentStyle[e]}:function(t,e){return getComputedStyle(t,!1)[e]}}();n.onmousedown=function(t){var e=t.clientX-n.offsetLeft,c=t.clientY-n.offsetTop,l=s.offsetWidth,r=s.offsetHeight,o=document.body.clientWidth,u=document.body.clientHeight,f=s.offsetLeft,d=o-s.offsetLeft-l,m=s.offsetTop,p=u-s.offsetTop-r,b=i(s,"left"),h=i(s,"top");b.includes("%")?(b=+document.body.clientWidth*(+b.replace(/\%/g,"")/100),h=+document.body.clientHeight*(+h.replace(/\%/g,"")/100)):(b=+b.replace(/\px/g,""),h=+h.replace(/\px/g,"")),document.onmousemove=function(t){var n=t.clientX-e,i=t.clientY-c;-n>f?n=-f:n>d&&(n=d),-i>m?i=-m:i>p&&(i=p),s.style.cssText+=";left:".concat(n+b,"px;top:").concat(i+h,"px;"),a.child.$emit("dragDialog")},document.onmouseup=function(t){document.onmousemove=null,document.onmouseup=null}}}},s=function(t){t.directive("el-drag-dialog",n)};window.Vue&&(window["el-drag-dialog"]=n,Vue.use(s)),n.install=s;e["a"]=n},b130:function(t,e,a){"use strict";var n=a("1c8b"),s=a("45af").includes,i=a("258f"),c=a("ff9c"),l=c("indexOf",{ACCESSORS:!0,1:0});n({target:"Array",proto:!0,forced:!l},{includes:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}}),i("includes")},b4fb:function(t,e,a){"use strict";var n=a("1c8b"),s=a("efe2"),i=a("74e7"),c=a("a719"),l=a("3553"),r=a("d88d"),o=a("1bbd"),u=a("1ca1"),f=a("1ea7"),d=a("90fb"),m=a("f594"),p=d("isConcatSpreadable"),b=9007199254740991,h="Maximum allowed index exceeded",v=m>=51||!s((function(){var t=[];return t[p]=!1,t.concat()[0]!==t})),g=f("concat"),y=function(t){if(!c(t))return!1;var e=t[p];return void 0!==e?!!e:i(t)},_=!v||!g;n({target:"Array",proto:!0,forced:_},{concat:function(t){var e,a,n,s,i,c=l(this),f=u(c,0),d=0;for(e=-1,n=arguments.length;e<n;e++)if(i=-1===e?c:arguments[e],y(i)){if(s=r(i.length),d+s>b)throw TypeError(h);for(a=0;a<s;a++,d++)a in i&&o(f,d,i[a])}else{if(d>=b)throw TypeError(h);o(f,d++,i)}return f.length=d,f}})},b9a0:function(t,e,a){t.exports=a.p+"static/img/check1.5e2f4938.gif"},bdf4:function(t,e,a){t.exports=a.p+"static/img/check-help.86ce315a.png"},cedd:function(t,e,a){t.exports=a.p+"static/img/check-result.15b5fdc6.png"}}]);
//# sourceMappingURL=chunk-43898d2e.d38c98fd.js.map