webpackJsonp([0],{"2oSw":function(e,t){},"5ZAl":function(e,t){},NHnr:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i("7+uW"),a=i("/ocq"),o=i("cVxw"),r=i.n(o),s={name:"Projects",data:function(){return{projects:r.a}},mounted:function(){document.title="Oli Heslington — Graphic Designer"}},c={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("main",{staticClass:"container projects"},[e._m(0),e._v(" "),i("section",e._l(e.projects,function(t){return i("router-link",{key:t.id,staticClass:"tile inverted",style:{background:t.color},attrs:{tag:"div",to:"/projects/"+t.id,data:t}},[i("div",{staticClass:"overlay"},[i("h2",{domProps:{innerHTML:e._s(t.title)}}),e._v(" "),i("p",[e._v("Explore project")])]),e._v(" "),i("img",{attrs:{src:"/static/img/"+t.id+"-ft.png",alt:t.title}})])}))])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"container"},[t("h1",[this._v("Hi. I’m Oli. Graphic Designer & Creative Thinker.")])])}]};var l=i("VU/8")(s,c,!1,function(e){i("mYj/")},"data-v-6e9c58c6",null).exports,d={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("app-header"),this._v(" "),t("router-view",{key:this.$route.path}),this._v(" "),t("app-footer")],1)},staticRenderFns:[]};var h=i("VU/8")(null,d,!1,function(e){i("p7G0")},null,null).exports,u={name:"ProjectDetail",data:function(){return{projects:r.a}},props:["id"],computed:{currentProject:function(){for(var e=this.projects,t=0;t<e.length;t++){if(t+1>e.length-1)var i=t-1,n=0;else if(t-1<0)i=e.length-1,n=t+1;else i=t-1,n=t+1;e[t].prev={id:e[i].id,title:e[i].title},e[t].next={id:e[n].id,title:e[n].title}}var a=this.id;return e.filter(function(e){return e.id===a})}},mounted:function(){for(var e=this.projects,t=0;t<e.length;t++)e[t].id===this.id&&(document.title="Oli Heslington — "+e[t].title,document.getElementsByTagName("header")[0].classList.add("inverted"),document.getElementsByTagName("footer")[0].classList.add("inverted"),document.getElementsByTagName("body")[0].style.backgroundColor=e[t].color)},beforeDestroy:function(){document.getElementsByTagName("header")[0].classList.remove("inverted"),document.getElementsByTagName("footer")[0].classList.remove("inverted"),document.getElementsByTagName("body")[0].style.backgroundColor=null}},p={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("main",{staticClass:"project"},[e._l(e.currentProject,function(t){return i("div",{staticClass:"title"},[i("div",{staticClass:"container"},[i("h1",{domProps:{innerHTML:e._s(t.title)}})])])}),e._v(" "),e._l(e.currentProject,function(t){return i("div",{staticClass:"details"},[i("div",{staticClass:"container"},[i("div",[i("h4",[e._v("Scope")]),e._v(" "),i("ul",e._l(t.scope.length,function(n){return i("li",{staticClass:"caps",domProps:{innerHTML:e._s(t.scope[n-1])}})}))]),e._v(" "),i("div",[i("h4",[e._v("Overview")]),e._v(" "),i("p",{domProps:{innerHTML:e._s(t.overview)}})])])])}),e._v(" "),e._l(e.currentProject,function(t){return i("div",{staticClass:"bg"},[i("div",{staticClass:"container"},[i("img",{attrs:{src:"/static/img/"+t.id+"-1.png",alt:t.title}}),e._v(" "),i("div",{staticClass:"details"},[i("p",{domProps:{innerHTML:e._s(t.commentary)}})]),e._v(" "),e._l(3,function(e){return i("img",{attrs:{src:"/static/img/"+t.id+"-"+(e+1)+".png",alt:t.title}})})],2),e._v(" "),e._l(e.currentProject,function(t){return i("router-link",{key:t.next.id,staticClass:"next",attrs:{tag:"div",to:"/projects/"+t.next.id,data:t}},[i("p",{staticClass:"caps"},[e._v("Next")]),e._v(" "),i("h2",[e._v(e._s(t.next.title))])])})],2)})],2)},staticRenderFns:[]};var m=i("VU/8")(u,p,!1,function(e){i("2oSw")},"data-v-1106ae18",null).exports,v={mounted:function(){function e(){var e=window.innerHeight-(document.getElementsByTagName("header")[0].offsetHeight+document.getElementsByTagName("footer")[0].offsetHeight);document.getElementsByTagName("main")[0].style.minHeight=e+"px"}document.title="Oli Heslington — About",document.getElementsByTagName("body")[0].classList.add("inverted"),e(),window.onresize=e},beforeDestroy:function(){document.getElementsByTagName("body")[0].classList.remove("inverted"),document.getElementsByTagName("main")[0].style.minHeight=null}},g={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("main",{staticClass:"about"},[i("div",{staticClass:"container"},[i("div",[i("h1",[e._v("OH, hello there…")])]),e._v(" "),i("div",[i("p",[e._v("I’m Oli Heslington a graphic designer and creative thinker with a passion for all things creative. I never miss a deadline I love a design challenge. My strengths lie in branding, corporate stationery, editorial design, website design, print and digital collateral and iconography and I enjoy exploring design solutions in order to develop new, contemporary, original and unique ideas to exceed clients’ expectations.")]),e._v(" "),i("p",[i("a",{attrs:{href:"mailto:oliheslington@gmail.com"}},[e._v("Email me")]),e._v(" to discuss your next project, or simply just say hello. 👋")])]),e._v(" "),i("div",[i("ul",[i("li",[i("h3",[e._v("Branding")])]),e._v(" "),i("li",[i("h3",[e._v("Corporate Stationery")])]),e._v(" "),i("li",[i("h3",[e._v("Editorial Design")])]),e._v(" "),i("li",[i("h3",[e._v("Website Design")])]),e._v(" "),i("li",[i("h3",[e._v("Print & Digital")])]),e._v(" "),i("li",[i("h3",[e._v("Iconography")])])])])])])}]};var f=i("VU/8")(v,g,!1,function(e){i("5ZAl")},"data-v-86787148",null).exports;n.a.use(a.a);var y=new a.a({routes:[{path:"/",redirect:"/projects"},{path:"/projects",name:"Projects",component:l},{path:"/projects/:id",name:"ProjectDetail",component:m,props:!0},{path:"/about",name:"About",component:f}],scrollBehavior:function(e,t,i){return{x:0,y:0}}}),_={render:function(){var e=this.$createElement,t=this._self._c||e;return t("header",[t("router-link",{attrs:{exact:"",tag:"svg",to:"/projects",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"1000px",height:"1000px",viewBox:"0 0 1000 1000","enable-background":"new 0 0 1000 1000","xml:space":"preserve"}},[t("g",[t("path",{staticClass:"outer",attrs:{d:"M500,0c276.143,0,500,223.857,500,500s-223.857,500-500,500S0,776.143,0,500S223.857,0,500,0z"}}),this._v(" "),t("path",{staticClass:"inner",attrs:{d:"M330.871,336.785C233.415,336.785,158.2,403.015,158.2,500s75.214,163.214,172.671,163.214 S503.543,596.972,503.543,500S428.328,336.785,330.871,336.785z"}}),this._v(" "),t("path",{staticClass:"inner",attrs:{d:"M841.8,657.528h-95.57V536.9H633.172v120.628H537.6V341.986h95.572v111.655h113.058V341.986h95.57V657.528z"}}),this._v(" "),t("path",{staticClass:"outer",attrs:{d:"M336.349,421.116c-1.824-0.105-3.651-0.146-5.478-0.116c-41.243-0.637-75.193,32.28-75.83,73.523 c-0.029,1.825,0.01,3.652,0.116,5.477c-2.388,41.179,29.058,76.496,70.237,78.884c1.824,0.105,3.651,0.146,5.477,0.116 c41.243,0.638,75.192-32.28,75.831-73.523c0.029-1.825-0.011-3.652-0.116-5.477C408.974,458.821,377.527,423.504,336.349,421.116z"}})])]),this._v(" "),t("nav",[t("router-link",{staticClass:"caps",attrs:{tag:"a",to:"/projects"}},[this._v("Projects")]),this._v(" "),t("router-link",{staticClass:"caps",attrs:{tag:"a",to:"/about"}},[this._v("About")])],1)],1)},staticRenderFns:[]};var b=i("VU/8")(null,_,!1,function(e){i("nSCA")},"data-v-4db2c1c5",null).exports,w={render:function(){var e=this.$createElement,t=this._self._c||e;return t("footer",[t("small",[this._v("© "),t("span",[this._v("Copyright")]),this._v(" "+this._s((new Date).getFullYear())+" Oli Heslington")]),this._v(" "),t("a",{attrs:{href:"mailto:oliheslington@gmail.com"}},[this._v("oliheslington@gmail.com")])])},staticRenderFns:[]};var j=i("VU/8")(null,w,!1,function(e){i("Pw+e")},"data-v-b7451a0c",null).exports;n.a.component("app-header",b),n.a.component("app",h),n.a.component("app-footer",j),new n.a({el:"#app",router:y,components:{App:h},template:"<app/>"})},"Pw+e":function(e,t){},cVxw:function(e,t){e.exports=[{id:"fernhay",title:"Fernhay",scope:["Website Design"],overview:"The brief for this project was to create a new website design for Fernhay, an independent project management and product delivery company. They wanted their website to showcase their services and thought process involved with every project they undertake whilst evoking a friendly, high quality service.",commentary:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non diam eu orci lobortis ultrices sed vel metus. Etiam eu viverra nulla, lacinia ultricies turpis. Mauris vitae vehicula dolor. Vestibulum posuere nullam.",color:"#1b99a7"},{id:"thirteen",title:"Osborne Pike",scope:["Editorial Design"],overview:"The brief for this project was to create a book to celebrate Osborne Pike's 13<sup>th</sup> birthday. The book would include 13 launched projects and 13 concepts.",commentary:"The concept that I chose for the book combines both their existing brand and their previous logo, creating lines and directing the reader through a story of their work.",color:"#f89623"},{id:"beau",title:"BEAU",scope:["Branding","Print Collateral"],overview:"The brief for this project was to create a brand for a new luxury menswear label. The clothing is directed for the modern gentleman, who appreciates the good quality of life and notices the little details. The brief was to focus on innovation and engineering achievement that Britain has accomplished.",commentary:"The logo has been created by reflecting Britain as a whole by the use of a circle and triangular shapes represent engineering as these are commonly used when constructing structures.",color:"#3742fa"},{id:"liv",title:"LIV",scope:["Branding","Print Collateral","App Design"],overview:"The brief for this project was to create a campaign that could be used within todays society. I aimed to educated and help young adults between the age of 18 - 25 about the dangers of binge drinking and the effect on their health. This is one of the biggest problems that affect young adults in today’s modern society.",commentary:"The LIV logo was created by using the idea of veins and arteries to form a bespoke typeface and logo that referenced the campaigns intentions.",color:"#ffcccc"},{id:"janesmith",title:"Jane Smith Training",scope:["Website Design"],overview:"The brief for this project was to create a series of landing pages for Jane Smith Training to promote their new Workshop courses.",commentary:"The look and feel of the website has been continued throughout the landing pages. A form was added to the main banner with a short description of the course to allow viewers to access key information instantly and sign up.",color:"#e95305"},{id:"cocoon",title:"Cocoon",scope:["Branding","Print Collateral","App Design"],overview:"The brief for this project was to create a campaign that could be used today. I aimed to promote and educate young adults about the dangers of cycle helmet safety.",commentary:"The Cocoon logo has been created using circles and the ‘C’ uses a slice of a circle to represent the riders head and helmet.",color:"#fa8231"},{id:"apex",title:"Apex Air Conditioning",scope:["Branding","Corporate Stationery","Website Design"],overview:"The brief for this project was to create a new brand identity, corporate stationery, website design and health and safety documents to update the Apex Air Conditioning brand.",commentary:"The logo combines the feel of water and air which represent the services which they provide. This creates an abstract visual, forming key elements of Apex's core values.",color:"#5c7aba"}]},"mYj/":function(e,t){},nSCA:function(e,t){},p7G0:function(e,t){}},["NHnr"]);