(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"0mN4":function(e,t,a){"use strict";a("OGtf")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"9eSz":function(e,t,a){"use strict";a("rGqo"),a("yt8O"),a("Btvt"),a("XfO3"),a("EK0E"),a("0mN4");var r=a("TqRt");t.__esModule=!0,t.default=void 0;var i,n=r(a("PJYZ")),s=r(a("VbXa")),l=r(a("8OQS")),o=r(a("pVnL")),d=r(a("q1tI")),c=r(a("17x9")),u=function(e){var t=(0,o.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=y([].concat(t.fluid))),t.fixed&&(t.fixed=y([].concat(t.fixed))),t},f=function(e){var t=e.fluid,a=e.fixed;return(t&&t[0]||a&&a[0]).src},m=Object.create({}),p=function(e){var t=u(e),a=f(t);return m[a]||!1},g="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,h="undefined"!=typeof window,b=h&&window.IntersectionObserver,v=new WeakMap;function E(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},r&&d.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),d.default.createElement("source",{media:i,srcSet:a,sizes:n}))}))}function y(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function S(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function w(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function L(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var I=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(v.has(e.target)){var t=v.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),v.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return a&&(a.observe(e),v.set(e,t)),function(){a.unobserve(e),v.delete(e)}},O=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",o=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?L(e,!0):"")+L(e)})).join("")+"<img "+d+s+l+a+r+t+n+i+o+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},N=function(e){var t=e.src,a=e.imageVariants,r=e.generateSources,i=e.spreadProps,n=d.default.createElement(k,(0,o.default)({src:t},i));return a.length>1?d.default.createElement("picture",null,r(a),n):n},k=d.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,s=e.onLoad,c=e.onError,u=e.loading,f=e.draggable,m=(0,l.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable"]);return d.default.createElement("img",(0,o.default)({sizes:a,srcSet:r,src:i},m,{onLoad:s,onError:c,ref:t,loading:u,draggable:f,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));k.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var R=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=h&&p(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!g&&b&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||h&&(g||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=I(e,(function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=f(t),m[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,s=e.imgStyle,l=void 0===s?{}:s,c=e.placeholderStyle,f=void 0===c?{}:c,m=e.placeholderClassName,p=e.fluid,g=e.fixed,h=e.backgroundColor,b=e.durationFadeIn,v=e.Tag,y=e.itemProp,L=e.loading,I=e.draggable,R=!1===this.state.fadeIn||this.state.imgLoaded,V=!0===this.state.fadeIn&&!this.state.imgCached,z=(0,o.default)({opacity:R?1:0,transition:V?"opacity "+b+"ms":"none"},l),C="boolean"==typeof h?"lightgray":h,P={transitionDelay:b+"ms"},T=(0,o.default)({opacity:this.state.imgLoaded?0:1},V&&P,{},l,{},f),q={title:t,alt:this.state.isVisible?"":a,style:T,className:m,itemProp:y};if(p){var j=p,x=j[0];return d.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(x.srcSet)},d.default.createElement(v,{style:{width:"100%",paddingBottom:100/x.aspectRatio+"%"}}),C&&d.default.createElement(v,{title:t,style:(0,o.default)({backgroundColor:C,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},V&&P)}),x.base64&&d.default.createElement(N,{src:x.base64,spreadProps:q,imageVariants:j,generateSources:w}),x.tracedSVG&&d.default.createElement(N,{src:x.tracedSVG,spreadProps:q,imageVariants:j,generateSources:S}),this.state.isVisible&&d.default.createElement("picture",null,E(j),d.default.createElement(k,{alt:a,title:t,sizes:x.sizes,src:x.src,crossOrigin:this.props.crossOrigin,srcSet:x.srcSet,style:z,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:L,draggable:I})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:O((0,o.default)({alt:a,title:t,loading:L},x,{imageVariants:j}))}}))}if(g){var G=g,M=G[0],W=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:M.width,height:M.height},n);return"inherit"===n.display&&delete W.display,d.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:W,ref:this.handleRef,key:"fixed-"+JSON.stringify(M.srcSet)},C&&d.default.createElement(v,{title:t,style:(0,o.default)({backgroundColor:C,width:M.width,opacity:this.state.imgLoaded?0:1,height:M.height},V&&P)}),M.base64&&d.default.createElement(N,{src:M.base64,spreadProps:q,imageVariants:G,generateSources:w}),M.tracedSVG&&d.default.createElement(N,{src:M.tracedSVG,spreadProps:q,imageVariants:G,generateSources:S}),this.state.isVisible&&d.default.createElement("picture",null,E(G),d.default.createElement(k,{alt:a,title:t,width:M.width,height:M.height,sizes:M.sizes,src:M.src,crossOrigin:this.props.crossOrigin,srcSet:M.srcSet,style:z,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:L,draggable:I})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:O((0,o.default)({alt:a,title:t,loading:L},M,{imageVariants:G}))}}))}return null},t}(d.default.Component);R.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var V=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),z=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string});R.propTypes={resolutions:V,sizes:z,fixed:c.default.oneOfType([V,c.default.arrayOf(V)]),fluid:c.default.oneOfType([z,c.default.arrayOf(z)]),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var C=R;t.default=C},OGtf:function(e,t,a){var r=a("XKFU"),i=a("eeVq"),n=a("vhPU"),s=/"/g,l=function(e,t,a,r){var i=String(n(e)),l="<"+t;return""!==a&&(l+=" "+a+'="'+String(r).replace(s,"&quot;")+'"'),l+">"+i+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(l),r(r.P+r.F*i((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",a)}},RXBc:function(e,t,a){"use strict";a.r(t);var r=a("q1tI"),i=a.n(r),n=(a("Ovt8"),function(){return i.a.createElement("div",{className:"footer"},i.a.createElement("p",null,"Chan-Ho Suh © - 2019 "))}),s=a("cK5w");a("GsLf"),a("+ZDr"),a("lw3w"),a("emEt").default.enqueue,i.a.createContext({});var l=function(){var e=s.data;return i.a.createElement("div",null,i.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Anonymous+Pro|Open+Sans&display=swap",rel:"stylesheet"}),i.a.createElement("link",{rel:"stylesheet",href:"https://use.fontawesome.com/releases/v5.7.2/css/all.css",integrity:"sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr",crossorigin:"anonymous"}),i.a.createElement("div",{className:"header-main"},i.a.createElement("div",{className:"dev"},i.a.createElement("h1",null,e.site.siteMetadata.title),i.a.createElement("span",{className:"attr"},"Software Engineer"),i.a.createElement("span",{className:"dot"},"•"),i.a.createElement("span",{className:"attr"},"Mathematician"),i.a.createElement("span",{className:"dot"},"•"),i.a.createElement("span",{className:"attr"},"Flaneur")),i.a.createElement("div",{className:"icons"},i.a.createElement("a",{href:"https://github.com/chanhosuh"},i.a.createElement("i",{className:"fab fa-github"})),i.a.createElement("a",{href:"https://stackoverflow.com/users/story/1175053?view=Cv"},i.a.createElement("i",{className:"fab fa-stack-overflow"})),i.a.createElement("a",{href:"https://twitter.com/chanhosuh"},i.a.createElement("i",{className:"fab fa-twitter"})),i.a.createElement("a",{href:"https://www.linkedin.com/in/chanhosuh/"},i.a.createElement("i",{className:"fab fa-linkedin"}))),i.a.createElement("hr",null)))},o=function(e){return i.a.createElement("div",null,i.a.createElement(l,null),i.a.createElement("div",{className:"content-main"},e.children),i.a.createElement(n,null))},d=a("LBTr"),c=a.n(d),u=a("9eSz"),f=a.n(u);a.d(t,"query",(function(){return m}));var m="2790026819";t.default=function(e){return console.log(m),i.a.createElement(o,null,i.a.createElement("div",{className:c.a.main},i.a.createElement("div",{className:c.a.left},i.a.createElement("div",{className:c.a.imagen},i.a.createElement(f.a,{className:c.a.img,fluid:e.data.file.childImageSharp.fluid}))),i.a.createElement("div",{className:c.a.right},i.a.createElement("div",null,i.a.createElement("i",{class:"fas fa-envelope"})," csuh.web at gmail",i.a.createElement("i",{class:"fas fa-file"}),i.a.createElement("a",{href:"/resume.html"},"html")," | ",i.a.createElement("a",{href:"/resume.pdf"},"pdf")),i.a.createElement("div",null,i.a.createElement("p",null,"Currently I work at a commercial bank developing Python-based tools for data scientists and engineers. Previously I was mainly wrangling with backend stuff in Python and Django. I spent several years working on"," ",i.a.createElement("a",{href:"https://en.wikipedia.org/wiki/Wall_Street"},"Wall Street"),", supporting"," ",i.a.createElement("a",{href:"https://en.wikipedia.org/wiki/Trader_(finance)"},"trading")," ","in various capacities. Before that, I was a full-fledged academic, spending a lot of time"," ",i.a.createElement("a",{href:"https://en.wikipedia.org/wiki/Topology"},"turning things inside-out.")),i.a.createElement("p",null,"In my spare time, I enjoy working on Bitcoin and Ethereum development.")))))}},cK5w:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Chan-Ho Suh"}}}}')},lw3w:function(e,t,a){var r;e.exports=(r=a("rzlk"))&&r.default||r},rzlk:function(e,t,a){"use strict";a.r(t);a("91GP");var r=a("q1tI"),i=a.n(r),n=a("IOVJ");t.default=function(e){var t=e.location,a=e.pageResources;return a?i.a.createElement(n.a,Object.assign({location:t,pageResources:a},a.json)):null}}}]);
//# sourceMappingURL=component---src-pages-index-js-519637d0e2952d933fd1.js.map