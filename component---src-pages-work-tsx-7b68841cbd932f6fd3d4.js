(self.webpackChunkwaqas_ali=self.webpackChunkwaqas_ali||[]).push([[611],{5066:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return T}});var r=a(7294),i=a(7316),n=a.n(i),d=a(7154),l=a.n(d),o=a(427),s=a(5915),u=(0,r.createContext)(),c=function(){return(0,r.useContext)(u)},f=(0,r.forwardRef)((function(e,t){var a=e.isInvalid,r=e.isRequired,i=e.isDisabled,d=e.isReadOnly,c=n()(e,["isInvalid","isRequired","isDisabled","isReadOnly"]),f={isRequired:r,isDisabled:i,isInvalid:a,isReadOnly:d};return(0,o.tZ)(u.Provider,{value:f},(0,o.tZ)(s.ZP,l()({role:"group",ref:t},c)))}));f.displayName="FormControl";var p=a(5834),h=function(e){var t=(0,p.If)().colorMode;return(0,o.tZ)(s.ZP,l()({as:"span",ml:1,color:{light:"red.500",dark:"red.300"}[t],"aria-hidden":"true",children:"*"},e))},g=(0,r.forwardRef)((function(e,t){var a=e.children,r=n()(e,["children"]),i=function(e){var t=c();return t?Object.keys(t).reduce((function(a,r){return a[r]=e[r],t&&null==e[r]&&(a[r]=t[r]),a}),{}):e}(r);return(0,o.tZ)(s.ZP,l()({ref:t,fontSize:"md",pr:"12px",pb:"4px",opacity:i.isDisabled?"0.4":"1",fontWeight:"medium",textAlign:"left",verticalAlign:"middle",display:"inline-block",as:"label"},r),a,i.isRequired&&(0,o.tZ)(h,null))}));g.displayName="FormLabel";var m=g,b=a(9713),y=a.n(b),v=a(6645),w=a(7950),S=a(9902);function E(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}var R=(0,v.Z)(s.ZP)((function(e){var t,a=e.type,r=void 0===a?"checkbox":a,i=e._hover,n=e._invalid,d=e._disabled,l=e._focus,o=e._checked,s=e._child,u=void 0===s?{opacity:0}:s,c=e._checkedAndChild,f=void 0===c?{opacity:1}:c,p=e._checkedAndDisabled,h=e._checkedAndFocus,g=e._checkedAndHover,m="input[type="+r+"]:checked:disabled + &, input[type="+r+"][aria-checked=mixed]:disabled + &",b="input[type="+r+"]:checked:hover:not(:disabled) + &, input[type="+r+"][aria-checked=mixed]:hover:not(:disabled) + &",v="input[type="+r+"]:checked:focus + &, input[type="+r+"][aria-checked=mixed]:focus + &",R="input[type="+r+"]:disabled + &",x="input[type="+r+"]:focus + &",k="input[type="+r+"]:hover:not(:disabled):not(:checked) + &",C="input[type="+r+"]:checked + &, input[type="+r+"][aria-checked=mixed] + &",O="input[type="+r+"][aria-invalid=true] + &";return(0,w.ZP)(((t={})[x]=(0,S.pA)(l),t[k]=(0,S.pA)(i),t[R]=(0,S.pA)(d),t[O]=(0,S.pA)(n),t[m]=(0,S.pA)(p),t[v]=(0,S.pA)(h),t[b]=(0,S.pA)(g),t["& > *"]=(0,S.pA)(u),t[C]=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?E(a,!0).forEach((function(t){y()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):E(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},(0,S.pA)(o),{"& > *":(0,S.pA)(f)}),t))}));R.displayName="ControlBox",R.defaultProps={display:"inline-flex",alignItems:"center",justifyContent:"center",transition:"all 120ms",flexShrink:"0","aria-hidden":"true"};var x=R,k=a(3597),C={sm:{width:"1.375rem",height:"0.75rem"},md:{width:"1.875rem",height:"1rem"},lg:{width:"2.875rem",height:"1.5rem"}},O=(0,r.forwardRef)((function(e,t){var a=e.id,r=e.name,i=e.value,d=e["aria-label"],u=e["aria-labelledby"],c=e.color,f=e.defaultIsChecked,h=e.isChecked,g=e.size,m=e.isDisabled,b=e.isInvalid,y=e.onChange,v=e.onBlur,w=e.onFocus,S=(e.children,n()(e,["id","name","value","aria-label","aria-labelledby","color","defaultIsChecked","isChecked","size","isDisabled","isInvalid","onChange","onBlur","onFocus","children"])),E=(0,p.If)().colorMode,R=C[g]&&C[g].width,O=C[g]&&C[g].height,I={rounded:"full",justifyContent:"flex-start",width:R,height:O,bg:"dark"===E?"whiteAlpha.400":"gray.300",boxSizing:"content-box",p:"2px",_checked:{bg:c+".500"},_child:{transform:"translateX(0)"},_checkedAndChild:{transform:"translateX(calc("+R+" - "+O+"))"},_focus:{boxShadow:"outline"},_hover:{cursor:"pointer"},_checkedAndHover:{cursor:"pointer"},_disabled:{opacity:.4,cursor:"not-allowed"}};return(0,o.tZ)(s.ZP,l()({as:"label",display:"inline-block",verticalAlign:"middle"},S),(0,o.tZ)(k.Z,{as:"input",type:"checkbox","aria-label":d,"aria-labelledby":u,id:a,ref:t,name:r,value:i,"aria-invalid":b,defaultChecked:f,onChange:y,onBlur:v,onFocus:w,checked:h,disabled:m}),(0,o.tZ)(x,I,(0,o.tZ)(s.ZP,{bg:"white",transition:"transform 250ms",rounded:"full",size:O})))}));O.displayName="Switch",O.defaultProps={color:"blue",size:"md"};var I=O,L=(0,r.forwardRef)((function(e,t){var a=e.gap,i=e.rowGap,d=e.columnGap,o=e.autoFlow,u=e.autoRows,c=e.autoColumns,f=e.templateRows,p=e.templateColumns,h=e.templateAreas,g=e.area,m=e.column,b=e.row,y=n()(e,["gap","rowGap","columnGap","autoFlow","autoRows","autoColumns","templateRows","templateColumns","templateAreas","area","column","row"]);return r.createElement(s.ZP,l()({ref:t,display:"grid",gridArea:g,gridTemplateAreas:h,gridGap:a,gridRowGap:i,gridColumnGap:d,gridAutoColumns:c,gridColumn:m,gridRow:b,gridAutoFlow:o,gridAutoRows:u,gridTemplateRows:f,gridTemplateColumns:p},y))}));L.displayName="Grid";var P=L,A=a(2397),z=a(5618),Z=a(5308),j=a(1496),_=a(6455),H=a(3181),V=function(e){var t=e.title,a=e.path,i=e.description,n=e.preview_image,d=e.date;return r.createElement(_.h$,{to:a},r.createElement(s.ZP,{padding:2},r.createElement(j.Z,{fluid:n.childImageSharp.fluid}),r.createElement(A.Z,{size:"md",marginTop:1},t),r.createElement(z.Z,{fontSize:"xs",fontWeight:"light",marginBottom:1},d),r.createElement(z.Z,{fontSize:"sm",fontWeight:"light"},function(e){var t=e.text,a=e.maxLength;return t.length>a?t.slice(0,a)+"...":t}({text:i,maxLength:100}))))},T=function(e){var t=e.data.allMdx.edges,a=r.useState(!1),i=a[0],n=a[1],d=t.map((function(e){return e.node.frontmatter}));return r.createElement(_.Ar,null,r.createElement(_.HJ,{title:"Projects"}),r.createElement(Z.Z,{align:"center",justify:"flex-end",paddingRight:2},r.createElement(m,{htmlFor:"show-all",fontWeight:"light"},"See All"),r.createElement(I,{id:"show-all","aria-label":"Show All Projects",value:i,color:H.iZ,onChange:function(){return n(!i)}})),r.createElement(P,{templateColumns:"repeat( auto-fit, minmax(150px, 1fr) )",gap:6},d.filter((function(e){var t=e.highlight;return i||t})).map((function(e,t){return r.createElement(V,Object.assign({key:t},e))}))))}},1496:function(e,t,a){"use strict";var r=a(5318);t.Z=void 0;var i,n=r(a(1506)),d=r(a(5354)),l=r(a(7316)),o=r(a(7154)),s=r(a(7294)),u=r(a(5697)),c=["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"],f=function(e){var t=(0,o.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=R([].concat(t.fluid))),t.fixed&&(t.fixed=R([].concat(t.fixed))),t},p=function(e){var t=e.media;return!!t&&(v&&!!window.matchMedia(t).matches)},h=function(e){var t=e.fluid,a=e.fixed,r=g(t||a||[]);return r&&r.src},g=function(e){if(v&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(p);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},m=Object.create({}),b=function(e){var t=f(e),a=h(t);return m[a]||!1},y="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,v="undefined"!=typeof window,w=v&&window.IntersectionObserver,S=new WeakMap;function E(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return s.default.createElement(s.default.Fragment,{key:t},r&&s.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),a&&s.default.createElement("source",{media:i,srcSet:a,sizes:n}))}))}function R(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function x(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return s.default.createElement("source",{key:t,media:a,srcSet:r})}))}function k(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return s.default.createElement("source",{key:t,media:a,srcSet:r})}))}function C(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var O=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(S.has(e.target)){var t=S.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),S.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return a&&(a.observe(e),S.set(e,t)),function(){a.unobserve(e),S.delete(e)}},I=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',d=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",o=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",s=e.loading?'loading="'+e.loading+'" ':"",u=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?C(e,!0):"")+C(e)})).join("")+"<img "+s+d+l+a+r+t+n+i+o+u+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},L=s.default.forwardRef((function(e,t){var a=e.src,r=e.imageVariants,i=e.generateSources,n=e.spreadProps,d=e.ariaHidden,l=s.default.createElement(P,(0,o.default)({ref:t,src:a},n,{ariaHidden:d}));return r.length>1?s.default.createElement("picture",null,i(r),l):l})),P=s.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,d=e.onLoad,u=e.onError,f=e.loading,p=e.draggable,h=e.ariaHidden,g=(0,l.default)(e,c);return s.default.createElement("img",(0,o.default)({"aria-hidden":h,sizes:a,srcSet:r,src:i},g,{onLoad:d,onError:u,ref:t,loading:f,draggable:p,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));P.propTypes={style:u.default.object,onError:u.default.func,onLoad:u.default.func};var A=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=v&&b(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!y&&w&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||v&&(y||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn,isHydrated:!1},a.imageRef=s.default.createRef(),a.placeholderRef=t.placeholderRef||s.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,d.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.setState({isHydrated:v}),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:b(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=O(e,(function(){var e=b(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=f(e),(a=h(t))&&(m[a]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=f(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,d=e.imgStyle,l=void 0===d?{}:d,u=e.placeholderStyle,c=void 0===u?{}:u,p=e.placeholderClassName,h=e.fluid,m=e.fixed,b=e.backgroundColor,y=e.durationFadeIn,v=e.Tag,w=e.itemProp,S=e.loading,R=e.draggable,C=h||m;if(!C)return null;var O=!1===this.state.fadeIn||this.state.imgLoaded,A=!0===this.state.fadeIn&&!this.state.imgCached,z=(0,o.default)({opacity:O?1:0,transition:A?"opacity "+y+"ms":"none"},l),Z="boolean"==typeof b?"lightgray":b,j={transitionDelay:y+"ms"},_=(0,o.default)({opacity:this.state.imgLoaded?0:1},A&&j,l,c),H={title:t,alt:this.state.isVisible?"":a,style:_,className:p,itemProp:w},V=this.state.isHydrated?g(C):C[0];if(h)return s.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden",maxWidth:V.maxWidth?V.maxWidth+"px":null,maxHeight:V.maxHeight?V.maxHeight+"px":null},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(V.srcSet)},s.default.createElement(v,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/V.aspectRatio+"%"}}),Z&&s.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,o.default)({backgroundColor:Z,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},A&&j)}),V.base64&&s.default.createElement(L,{ariaHidden:!0,ref:this.placeholderRef,src:V.base64,spreadProps:H,imageVariants:C,generateSources:k}),V.tracedSVG&&s.default.createElement(L,{ariaHidden:!0,ref:this.placeholderRef,src:V.tracedSVG,spreadProps:H,imageVariants:C,generateSources:x}),this.state.isVisible&&s.default.createElement("picture",null,E(C),s.default.createElement(P,{alt:a,title:t,sizes:V.sizes,src:V.src,crossOrigin:this.props.crossOrigin,srcSet:V.srcSet,style:z,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:S,draggable:R})),this.addNoScript&&s.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:I((0,o.default)({alt:a,title:t,loading:S},V,{imageVariants:C}))}}));if(m){var T=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:V.width,height:V.height},n);return"inherit"===n.display&&delete T.display,s.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:T,ref:this.handleRef,key:"fixed-"+JSON.stringify(V.srcSet)},Z&&s.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,o.default)({backgroundColor:Z,width:V.width,opacity:this.state.imgLoaded?0:1,height:V.height},A&&j)}),V.base64&&s.default.createElement(L,{ariaHidden:!0,ref:this.placeholderRef,src:V.base64,spreadProps:H,imageVariants:C,generateSources:k}),V.tracedSVG&&s.default.createElement(L,{ariaHidden:!0,ref:this.placeholderRef,src:V.tracedSVG,spreadProps:H,imageVariants:C,generateSources:x}),this.state.isVisible&&s.default.createElement("picture",null,E(C),s.default.createElement(P,{alt:a,title:t,width:V.width,height:V.height,sizes:V.sizes,src:V.src,crossOrigin:this.props.crossOrigin,srcSet:V.srcSet,style:z,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:S,draggable:R})),this.addNoScript&&s.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:I((0,o.default)({alt:a,title:t,loading:S},V,{imageVariants:C}))}}))}return null},t}(s.default.Component);A.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var z=u.default.shape({width:u.default.number.isRequired,height:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string}),Z=u.default.shape({aspectRatio:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,sizes:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string,maxWidth:u.default.number,maxHeight:u.default.number});function j(e){return function(t,a,r){var i;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+r+"`, but their values are both `undefined`.");u.default.checkPropTypes(((i={})[a]=e,i),t,"prop",r)}}A.propTypes={resolutions:z,sizes:Z,fixed:j(u.default.oneOfType([z,u.default.arrayOf(z)])),fluid:j(u.default.oneOfType([Z,u.default.arrayOf(Z)])),fadeIn:u.default.bool,durationFadeIn:u.default.number,title:u.default.string,alt:u.default.string,className:u.default.oneOfType([u.default.string,u.default.object]),critical:u.default.bool,crossOrigin:u.default.oneOfType([u.default.string,u.default.bool]),style:u.default.object,imgStyle:u.default.object,placeholderStyle:u.default.object,placeholderClassName:u.default.string,backgroundColor:u.default.oneOfType([u.default.string,u.default.bool]),onLoad:u.default.func,onError:u.default.func,onStartLoad:u.default.func,Tag:u.default.string,itemProp:u.default.string,loading:u.default.oneOf(["auto","lazy","eager"]),draggable:u.default.bool};var _=A;t.Z=_}}]);
//# sourceMappingURL=component---src-pages-work-tsx-7b68841cbd932f6fd3d4.js.map