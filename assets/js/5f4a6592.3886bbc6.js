(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{126:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return j}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=u(r),f=n,j=s["".concat(o,".").concat(f)]||s[f]||b[f]||c;return r?a.a.createElement(j,i(i({ref:t},l),{},{components:r})):a.a.createElement(j,i({ref:t},l))}));function j(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,o=new Array(c);o[0]=f;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var l=2;l<c;l++)o[l]=r[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},96:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return u}));var n=r(3),a=r(7),c=(r(0),r(126)),o={id:"js",title:"JavaScript"},i={unversionedId:"learning/js/js",id:"learning/js/js",isDocsHomePage:!1,title:"JavaScript",description:"JavaScript\u3068\u306f\u3001\u30d7\u30ed\u30c8\u30bf\u30a4\u30d7\u30d9\u30fc\u30b9\u306e\u30d7\u30ed\u30b0\u30e9\u30df\u30f3\u30b0\u8a00\u8a9e\u306e\u4e00\u3064\u3067\u3042\u308b\u3002",source:"@site/docs/learning/js/js.md",slug:"/learning/js/js",permalink:"/tuttacatter/learning/js/js",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/learning/js/js.md",version:"current",sidebar:"learn",previous:{title:"\u8ab2\u984c\uff1aHTML\u30fbCSS\u30fbJavaScript",permalink:"/tuttacatter/learning/html/task-htmlcssjs"},next:{title:"Nodejs",permalink:"/tuttacatter/learning/js/nodejs"}},p=[{value:"\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u30b5\u30a4\u30c9",id:"\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u30b5\u30a4\u30c9",children:[]}],l={toc:p};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"JavaScript\u3068\u306f\u3001\u30d7\u30ed\u30c8\u30bf\u30a4\u30d7\u30d9\u30fc\u30b9\u306e\u30d7\u30ed\u30b0\u30e9\u30df\u30f3\u30b0\u8a00\u8a9e\u306e\u4e00\u3064\u3067\u3042\u308b\u3002",Object(c.b)("br",{parentName:"p"}),"\n","\u5f53\u521d\u306f\u30a6\u30a7\u30d6\u30da\u30fc\u30b8\u306e\u4e2d\u306b\u57cb\u3081\u8fbc\u307f\u3001\u52d5\u7684\u306a\u30a6\u30a7\u30d6\u30b3\u30f3\u30c6\u30f3\u30c4\u306e\u8868\u73fe\u3092\u76ee\u7684\u3068\u3057\u3066\u5229\u7528\u3055\u308c\u59cb\u3081\u305f\u3002",Object(c.b)("br",{parentName:"p"}),"\n","\u73fe\u5728\u306fNodejs\u306a\u3069\u306e\u8a95\u751f\u304b\u3089\u3001\u30b5\u30fc\u30d0\u30fc\u30b5\u30a4\u30c9\u3067\u306e\u5229\u7528\u3082\u9032\u3093\u3067\u3044\u308b\u3002  "),Object(c.b)("p",null,"\u73fe\u5728\u306e\u30a6\u30a7\u30d6\u30b3\u30f3\u30c6\u30f3\u30c4\u306b\u304a\u3044\u3066\u3001JavaScript\u3092\u4f7f\u308f\u306a\u3044\u3053\u3068\u306f\u307b\u307c\u306a\u3044\u3068\u601d\u308f\u308c\u308b\u3002",Object(c.b)("br",{parentName:"p"}),"\n","\u73fe\u72b6web\u30da\u30fc\u30b8\u3067\u52d5\u7684\u306a\u30b3\u30f3\u30c6\u30f3\u30c4\u3092\u4f5c\u6210\u3057\u305f\u3044\u3068\u304d\u3001JavaScript\u306f\u5fc5\u9808\u306b\u306a\u308b\u3002  "),Object(c.b)("h3",{id:"\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u30b5\u30a4\u30c9"},"\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u30b5\u30a4\u30c9"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"JavaScript\u306f\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u30b5\u30a4\u30c9\u3067\u5b9f\u884c\u3055\u308c\u308b\u3082\u306e\u3067\u3042\u308b"),"\uff08\u30b5\u30fc\u30d0\u30fc\u304b\u3089\u53d7\u3051\u53d6\u3063\u305fJavaScript\u30b3\u30fc\u30c9\u3092\u30d6\u30e9\u30a6\u30b6\u304c\u6a5f\u68b0\u8a9e\u306b\u7ffb\u8a33\u3001\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u306e\u30ea\u30bd\u30fc\u30b9\u3092\u4f7f\u3063\u3066\u51e6\u7406\u304c\u5b9f\u884c\u3055\u308c\u308b\u3068\u3044\u3046\u3053\u3068\u3002\uff09",Object(c.b)("br",{parentName:"p"}),"\n","\u305d\u306e\u305f\u3081\u3001\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u306e\u30d6\u30e9\u30a6\u30b6\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u5bfe\u5fdc\u3084\u3001OS\u306e\u9055\u3044\u3092\u60f3\u5b9a\u3057\u305f\u30b3\u30fc\u30c9\u3092\u66f8\u304f\u5fc5\u8981\u304c\u51fa\u3066\u304f\u308b\u5834\u9762\u3082\u3042\u308b\u3002  "),Object(c.b)("br",null),Object(c.b)("p",null,"\u4f8b\u3048\u3070\u3001JavaScript\u304c\u63d0\u4f9b\u3059\u308b",Object(c.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Push_API"},"Push API"),"\u3068\u3044\u3046\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30fc\u30b9\u3092\u898b\u3066\u307f\u308b\u3002",Object(c.b)("br",{parentName:"p"}),"\n","\u30d6\u30e9\u30a6\u30b6\u3054\u3068\u306e\u5bfe\u5fdc\u72b6\u6cc1\u3092\u898b\u3066\u307f\u308b\u3068\u3001Chrome\u3084Firefox\u3067\u306f\u5bfe\u5fdc\u3057\u3066\u3044\u308b\u4e00\u65b9\u3001Internet Explorer\u3084Safari\u3067\u306f\u672a\u5bfe\u5fdc\u306a\u3053\u3068\u304c\u308f\u304b\u308b\u3002  "),Object(c.b)("br",null),"\u3069\u3053\u307e\u3067\u60f3\u5b9a\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b\u306e\u304b\u306f\u30b1\u30fc\u30b9\u30d0\u30a4\u30b1\u30fc\u30b9\u3067\u3042\u308d\u3046\u304c\u3001\u30af\u30e9\u30a4\u30f3\u30c8\u306e\u74b0\u5883\u306b\u3088\u3063\u3066\u52d5\u4f5c\u304c\u5909\u308f\u308b\u3053\u3068\u304c\u3042\u308b\u3053\u3068\u3092\u8003\u616e\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b\u3060\u308d\u3046\u3002")}u.isMDXComponent=!0}}]);