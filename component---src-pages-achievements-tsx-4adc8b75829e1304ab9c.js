(self.webpackChunkwaqas_ali=self.webpackChunkwaqas_ali||[]).push([[780],{3110:function(e,n,t){"use strict";var r=t(7154),a=t.n(r),i=t(7316),l=t.n(i),o=t(7294),c=t(427),u=t(5308),s=t(671),d=(0,o.forwardRef)((function(e,n){var t,r=e.direction,i=e.isInline,d=void 0!==i&&i,h=e.isReversed,p=void 0!==h&&h,m=e.children,f=e.align,w=e.justify,k=e.spacing,g=void 0===k?2:k,v=e.shouldWrapChildren,b=l()(e,["direction","isInline","isReversed","children","align","justify","spacing","shouldWrapChildren"]),y=p||r&&r.endsWith("reverse"),C=d||r&&r.startsWith("row");C&&(t="row"),y&&(t=d?"row-reverse":"column-reverse"),r&&(t=r),C||y||r||(t="column");var E=o.Children.toArray(m).filter(o.isValidElement);return(0,c.tZ)(u.Z,a()({align:f,justify:w,direction:t},b,{ref:n}),E.map((function(e,n){var t,r,i=E.length===n+1,l=C?((t={})[y?"ml":"mr"]=i?null:g,t):((r={})[y?"mt":"mb"]=i?null:g,r);return v?(0,c.tZ)(s.ZP,a()({d:"inline-block"},l,{key:"stack-box-wrapper-"+n}),e):(0,o.cloneElement)(e,l)})))}));n.Z=d},5774:function(e,n,t){"use strict";t.d(n,{dw:function(){return h},Jf:function(){return m},kN:function(){return w},vh:function(){return p}});var r=t(7316),a=t.n(r),i=t(7154),l=t.n(i),o=t(7294),c=t(4167),u=t(5618),s=t(671),d=t(5308),h=(0,o.forwardRef)((function(e,n){return o.createElement(u.Z,l()({ref:n,fontWeight:"medium",fontSize:"sm"},e))}));h.displayName="StatLabel";var p=(0,o.forwardRef)((function(e,n){return o.createElement(u.Z,l()({ref:n,fontSize:"sm",opacity:"0.8",mb:2},e))}));p.displayName="StatHelpText";var m=function(e){return o.createElement(u.Z,l()({fontSize:"2xl",verticalAlign:"baseline",fontWeight:"semibold"},e))},f={increase:{name:"triangle-up",color:"green.400"},decrease:{name:"triangle-down",color:"red.400"}};(0,o.forwardRef)((function(e,n){var t=e.type,r=void 0===t?"increase":t,i=e["aria-label"],u=a()(e,["type","aria-label"]);return o.createElement(c.Z,l()({ref:n,mr:1,size:"14px",verticalAlign:"middle","aria-label":i},f[r],u))})).displayName="StatArrow";var w=(0,o.forwardRef)((function(e,n){return o.createElement(s.ZP,l()({ref:n,flex:"1",pr:4,position:"relative"},e))}));w.displayName="Stat",(0,o.forwardRef)((function(e,n){return o.createElement(d.Z,l()({ref:n,flexWrap:"wrap",justifyContent:"space-around",alignItems:"flex-start"},e))})).displayName="StatGroup"},4441:function(e,n,t){"use strict";t.r(n);var r=t(7294),a=t(5774),i=t(2061),l=t(3110),o=t(4071),c=t(6455),u=[{rank:1,awards:["Champion"],date:"11/01/2019",title:"Chengdu80 2019 - Inter-university fintech competition in Chengdu, China",link:"https://www.cs.hku.hk/news-events/news-and-announcements/20191104_Chengdu_2019",project:"/work/dragonsearch"},{rank:1,awards:["Champion"],date:"05/01/2018",title:"PolyU x Radica BigDatathon 2018",link:"https://www.datavalleyhk.com/bigdatathon"},{rank:2,awards:["Runner-up","Best Presentation"],date:"06/01/2019",title:"BEA 100 Fintech Challenge",link:"https://www.hkbea.com/bea100fc/",project:"https://github.com/piy0999/Unicorns-First"},{rank:2,awards:["Runner-up"],date:"04/01/2019",title:"The Innovator Tribank Fintech Challenge 2019",link:"https://www.shacombank.com.hk/eng/main/fintech/2019/index.jsp",project:"https://github.com/piy0999/Unicorns-First"},{rank:2,awards:["Runner-up"],date:"11/01/2018",title:"Chengdu80 2018 - Inter-university fintech competition in Chengdu, China",project:"/work/pipo"},{rank:2,awards:["Runner-up","Most Innovative Award"],date:"05/01/2018",title:"Imagine Cup Hong Kong Finals",link:"https://www.facebook.com/msphongkong/posts/1028750247300048"},{rank:2,awards:["Runner-up"],date:"03/01/2018",title:"HKU Global Challenges, Local Solutions 2018",link:"https://www.sustainability.hku.hk/event/global-challenges-local-solutions-changing-lives-for-good"},{rank:2,awards:["Runner-up"],date:"12/01/2017",title:"SCB (Shanghai Commercial Bank) Greater China Fintech Competition"},{rank:4,awards:["Incubated"],date:"03/01/2019",title:"iDendron | HKU Innovation & Entrepreneurship Hub",link:"https://idendron.hku.hk/",project:"http://takedailydose.com/"},{rank:1,awards:["HK$100,000 Seed Fund"],date:"05/01/2018",title:"CCMF (Cyberbort Creative Micro Fund)",link:"https://www.cyberport.hk/en/about_cyberport/cyberport_youth/cyberport_creative_micro_fund"}],s=["January","February","March","April","May","June","July","August","September","October","November","December"],d=function(e){var n=e.title,t=e.link,l=e.project,o=e.date,c=e.awards;return r.createElement(a.kN,null,r.createElement(a.dw,null,function(e){return s[new Date(e).getMonth()]+" "+new Date(e).getFullYear()}(o),l&&r.createElement("span",null,r.createElement("span",null," - "),r.createElement(i.Z,{href:l},"See Project"))),r.createElement(a.Jf,null,c.join(", ")),r.createElement(a.vh,null,t?r.createElement(i.Z,{href:t},n):n))};n.default=function(){return r.createElement(c.Ar,null,r.createElement(c.HJ,{title:"Achievements"}),r.createElement(l.Z,null,u.sort((function(e,n){return e.rank-n.rank||new Date(n.date).getTime()-new Date(e.date).getTime()})).map((function(e,n){return r.createElement(r.Fragment,null,r.createElement(d,Object.assign({key:n},e)),n<u.length-1&&r.createElement(o.Z,null))}))))}}}]);
//# sourceMappingURL=component---src-pages-achievements-tsx-4adc8b75829e1304ab9c.js.map