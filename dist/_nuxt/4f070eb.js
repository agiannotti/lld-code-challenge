(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{154:function(n,e,o){var content=o(214);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,o(70).default)("1239d49d",content,!0,{sourceMap:!1})},169:function(n,e,o){"use strict";var t=o(34),component=Object(t.a)({},undefined,undefined,!1,null,null,null);e.a=component.exports},172:function(n,e,o){"use strict";o(213);var t=o(34),component=Object(t.a)({},(function(){var n=this.$createElement,e=this._self._c||n;return e("div",[e("Nuxt")],1)}),[],!1,null,null,null);e.a=component.exports},173:function(n,e,o){o(174),n.exports=o(175)},213:function(n,e,o){"use strict";o(154)},214:function(n,e,o){var t=o(69)((function(i){return i[1]}));t.push([n.i,'html{\n  font-family:"Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;\n  font-size:16px;\n  word-spacing:1px;\n  -ms-text-size-adjust:100%;\n  -webkit-text-size-adjust:100%;\n  -moz-osx-font-smoothing:grayscale;\n  -webkit-font-smoothing:antialiased;\n  box-sizing:border-box;\n  background-color:#faebd7\n}\n*,:after,:before{\n  box-sizing:border-box;\n  margin:0\n}\n.button--green{\n  display:inline-block;\n  border-radius:4px;\n  border:1px solid #3b8070;\n  color:#3b8070;\n  text-decoration:none;\n  padding:10px 30px\n}\n.button--green:hover{\n  color:#fff;\n  background-color:#3b8070\n}\n.button--grey{\n  display:inline-block;\n  border-radius:4px;\n  border:1px solid #35495e;\n  color:#35495e;\n  text-decoration:none;\n  padding:10px 30px;\n  margin-left:15px\n}\n.button--grey:hover{\n  color:#fff;\n  background-color:#35495e\n}',""]),n.exports=t},215:function(n,e,o){"use strict";o.r(e),o.d(e,"state",(function(){return t})),o.d(e,"getters",(function(){return r})),o.d(e,"mutations",(function(){return c}));o(17),o(216),o(27),o(220),o(222),o(224),o(225),o(226),o(227),o(228),o(229),o(230),o(231),o(232),o(233),o(234),o(235),o(236),o(237),o(32);var t=function(){return{products:[],pagination:[],uniqueCategories:[],categories:[]}},r={},c={addProducts:function(n,e){for(var i=0;i<e.length;i++)n.products.push(e[i])},addCategories:function(n,e){for(var i=0;i<e.length;i++){var o={};o.id=i+1,o.category=e[i].category,o.catname=e[i].catname,n.categories.push(o)}console.log(n.categories)},removeDuplicates:function(n){var e=new Set,o=n.categories.reduce((function(n,o){return e.has(o.category)||(e.add(o.category,o),n.push(o)),n}),[]);n.categories=o}}}},[[173,6,1,7]]]);