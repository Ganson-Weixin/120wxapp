(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/shumujuankuan/detail"],{2479:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=s(e("a34a"));function s(t){return t&&t.__esModule?t:{default:t}}function u(t,n,e,a,s,u,r){try{var i=t[u](r),o=i.value}catch(c){return void e(c)}i.done?n(o):Promise.resolve(o).then(a,s)}function r(t){return function(){var n=this,e=arguments;return new Promise((function(a,s){var r=t.apply(n,e);function i(t){u(r,a,s,i,o,"next",t)}function o(t){u(r,a,s,i,o,"throw",t)}i(void 0)}))}}var i={data:function(){return{autoplaySwiper:!0,intervalSwiper:3e3,btnColor:["#409eff","#67c23a","#909399","#e6a23c","#f56c6c","#356c6c","#351c6c","#f093a9","#a7c23a","#104eff","#10441f","#a21233","#503319"],id:"",detail:{},swiperList:[],commentList:[],mescroll:null,downOption:{auto:!1},upOption:{noMoreSize:3,textNoMore:"~ 没有更多了 ~"},hasNext:!0,user:{},sfshIndex:-1,sfshOptions:["通过","不通过"],count:0}},computed:{SecondToDate:function(){var t=this.count;return null!=t&&""!=t&&(t=t>60&&t<3600?parseInt(t/60)+"分钟"+parseInt(60*(parseFloat(t/60)-parseInt(t/60)))+"秒":t>=3600&&t<86400?parseInt(t/3600)+"小时"+parseInt(60*(parseFloat(t/3600)-parseInt(t/3600)))+"分钟"+parseInt(60*(parseFloat(60*(parseFloat(t/3600)-parseInt(t/3600)))-parseInt(60*(parseFloat(t/3600)-parseInt(t/3600)))))+"秒":t>=86400?parseInt(t/3600/24)+"天"+parseInt(24*(parseFloat(t/3600/24)-parseInt(t/3600/24)))+"小时"+parseInt(60*(parseFloat(t/3600)-parseInt(t/3600)))+"分钟"+parseInt(60*(parseFloat(60*(parseFloat(t/3600)-parseInt(t/3600)))-parseInt(60*(parseFloat(t/3600)-parseInt(t/3600)))))+"秒":parseInt(t)+"秒"),t}},onLoad:function(){var t=r(a.default.mark((function t(n){return a.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.id=n.id;case 1:case"end":return t.stop()}}),t,this)})));function n(n){return t.apply(this,arguments)}return n}(),onShow:function(){var n=r(a.default.mark((function n(e){var s,u;return a.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return this.init(),s=t.getStorageSync("nowTable"),n.next=4,this.$api.session(s);case 4:u=n.sent,this.user=u.data,this.btnColor=this.btnColor.sort((function(){return.5-Math.random()}));case 7:case"end":return n.stop()}}),n,this)})));function e(t){return n.apply(this,arguments)}return e}(),destroyed:function(){},methods:{onPayTap:function(){t.setStorageSync("paytable","shumujuankuan"),t.setStorageSync("payObject",this.detail),this.$utils.jump("../pay-confirm/pay-confirm?type=1")},onAcrossTap:function(n){t.setStorageSync("crossTable","shumujuankuan"),t.setStorageSync("crossObj",this.detail),this.$utils.jump("../".concat(n,"/add-or-update?cross=true"))},init:function(){var t=r(a.default.mark((function t(){var n;return a.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$api.info("shumujuankuan",this.id);case 2:n=t.sent,this.detail=n.data,this.swiperList=this.detail.fengmiantu?this.detail.fengmiantu.split(","):[];case 5:case"end":return t.stop()}}),t,this)})));function n(){return t.apply(this,arguments)}return n}(),mescrollInit:function(t){this.mescroll=t},downCallback:function(t){this.hasNext=!0,t.resetUpScroll()},upCallback:function(){var t=r(a.default.mark((function t(n){return a.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n.endSuccess(n.size,this.hasNext);case 1:case"end":return t.stop()}}),t,this)})));function n(n){return t.apply(this,arguments)}return n}(),onChatTap:function(){this.$utils.jump("../chat/chat")},download:function(n){var e=this;t.downloadFile({url:n,success:function(t){200===t.statusCode&&(e.$utils.msg("下载成功"),window.open(n))}})},onCartTabTap:function(){this.$utils.tab("../shop-cart/shop-cart")},onCommentTap:function(){this.$utils.jump("../discussshumujuankuan/add-or-update?refid=".concat(this.id))},zan:function(){var n=r(a.default.mark((function n(){var e;return a.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:e=this,t.showModal({title:"提示",content:"是否点赞",success:function(){var t=r(a.default.mark((function t(n){return a.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!n.confirm){t.next=5;break}return e.detail.thumbsupnum=parseInt(e.detail.thumbsupnum)+1,t.next=4,e.$api.update("shumujuankuan",e.detail);case 4:e.$utils.msg("点赞成功");case 5:case"end":return t.stop()}}),t)})));function n(n){return t.apply(this,arguments)}return n}()});case 2:case"end":return n.stop()}}),n,this)})));function e(){return n.apply(this,arguments)}return e}(),cai:function(){var n=r(a.default.mark((function n(){var e;return a.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:e=this,t.showModal({title:"提示",content:"是否点踩",success:function(){var t=r(a.default.mark((function t(n){return a.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!n.confirm){t.next=5;break}return e.detail.crazilynum=parseInt(e.detail.crazilynum)+1,t.next=4,e.$api.update("shumujuankuan",e.detail);case 4:e.$utils.msg("点踩成功");case 5:case"end":return t.stop()}}),t)})));function n(n){return t.apply(this,arguments)}return n}()});case 2:case"end":return n.stop()}}),n,this)})));function e(){return n.apply(this,arguments)}return e}(),onSHTap:function(){this.$refs.popup.open()},onFinishTap:function(){var t=r(a.default.mark((function t(){return a.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.detail.sfsh){t.next=3;break}return this.$utils.msg("请选择审核状态"),t.abrupt("return");case 3:if(this.detail.shhf){t.next=6;break}return this.$utils.msg("请填写审核回复"),t.abrupt("return");case 6:return"通过"==this.detail.sfsh&&(this.detail.sfsh="是"),"不通过"==this.detail.sfsh&&(this.detail.sfsh="否"),t.next=10,this.$api.update("shumujuankuan",this.detail);case 10:this.$utils.msg("审核成功"),this.$refs.popup.close();case 12:case"end":return t.stop()}}),t,this)})));function n(){return t.apply(this,arguments)}return n}(),onCloseWinTap:function(){this.$refs.popup.close()},sfshChange:function(t){console.log(this.detail),this.sfshIndex=t.target.value,this.detail.sfsh=this.sfshOptions[this.sfshIndex]}}};n.default=i}).call(this,e("543d")["default"])},"3f9a":function(t,n,e){"use strict";e.r(n);var a=e("2479"),s=e.n(a);for(var u in a)"default"!==u&&function(t){e.d(n,t,(function(){return a[t]}))}(u);n["default"]=s.a},"426c":function(t,n,e){"use strict";var a={"mescroll-uni":function(){return Promise.all([e.e("common/vendor"),e.e("components/mescroll-uni/mescroll-uni")]).then(e.bind(null,"4bd1"))},"uni-popup":function(){return e.e("components/uni-popup/uni-popup").then(e.bind(null,"7e0a"))}},s=function(){var t=this,n=t.$createElement,e=(t._self._c,t.isAuth("shumujuankuan","支付")),a=t.isAuth("shumujuankuan","支付"),s=t.isAuth("shumujuankuan","审核");t.$mp.data=Object.assign({},{$root:{m0:e,m1:a,m2:s}})},u=[];e.d(n,"b",(function(){return s})),e.d(n,"c",(function(){return u})),e.d(n,"a",(function(){return a}))},"59aa":function(t,n,e){"use strict";var a=e("799e"),s=e.n(a);s.a},"799e":function(t,n,e){},8676:function(t,n,e){"use strict";e.r(n);var a=e("426c"),s=e("3f9a");for(var u in s)"default"!==u&&function(t){e.d(n,t,(function(){return s[t]}))}(u);e("59aa");var r,i=e("f0c5"),o=Object(i["a"])(s["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],r);n["default"]=o.exports},af56:function(t,n,e){"use strict";(function(t){e("9a6e"),e("921b");a(e("66fd"));var n=a(e("8676"));function a(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])}},[["af56","common/runtime","common/vendor"]]]);