(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0bd285"],{"2b98":function(t,n,e){"use strict";e.r(n);var o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("h3",[t._v("用户编辑页面")]),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.content,expression:"content"}],attrs:{cols:"30",rows:"10"},domProps:{value:t.content},on:{input:function(n){n.target.composing||(t.content=n.target.value)}}}),e("button",{on:{click:t.saveContent}},[t._v("保持")]),e("ul",t._l(t.list,(function(n,o){return e("li",{key:o},[e("h3",[t._v(t._s(n.title))])])})),0)])},i=[],s={data:function(){return{content:"",list:[]}},methods:{saveContent:function(){this.list.push({title:this.content}),this.content=""}},beforeRouteLeave:function(t,n,e){this.content?(alert("输入框有值确定要离开吗"),e(!1)):e()}},c=s,a=e("2877"),u=Object(a["a"])(c,o,i,!1,null,"f5293530",null);n["default"]=u.exports}}]);
//# sourceMappingURL=chunk-2d0bd285.f8d2f987.js.map