(self.webpackChunkwebpackWcBlocksFrontendJsonp=self.webpackChunkwebpackWcBlocksFrontendJsonp||[]).push([[3819],{7102:(e,t,r)=>{"use strict";r.d(t,{A:()=>o});var c=r(1609),a=r(8537),n=r(851);r(6625);const o=({className:e="",disabled:t=!1,name:r,permalink:o="",target:s,rel:l,style:i,onClick:u,...d})=>{const m=(0,n.A)("wc-block-components-product-name",e);if(t){const e=d;return(0,c.createElement)("span",{className:m,...e,dangerouslySetInnerHTML:{__html:(0,a.decodeEntities)(r)}})}return(0,c.createElement)("a",{className:m,href:o,target:s,...d,dangerouslySetInnerHTML:{__html:(0,a.decodeEntities)(r)},style:i})}},6042:(e,t,r)=>{"use strict";r.d(t,{A:()=>d});var c=r(1609),a=r(7723),n=r(4656),o=r(851),s=r(8529),l=r(6087);r(4567);const i=({currency:e,maxPrice:t,minPrice:r,priceClassName:l,priceStyle:i={}})=>(0,c.createElement)(c.Fragment,null,(0,c.createElement)("span",{className:"screen-reader-text"},(0,a.sprintf)(/* translators: %1$s min price, %2$s max price */ /* translators: %1$s min price, %2$s max price */
(0,a.__)("Price between %1$s and %2$s","woocommerce"),(0,s.formatPrice)(r),(0,s.formatPrice)(t))),(0,c.createElement)("span",{"aria-hidden":!0},(0,c.createElement)(n.FormattedMonetaryAmount,{className:(0,o.A)("wc-block-components-product-price__value",l),currency:e,value:r,style:i})," — ",(0,c.createElement)(n.FormattedMonetaryAmount,{className:(0,o.A)("wc-block-components-product-price__value",l),currency:e,value:t,style:i}))),u=({currency:e,regularPriceClassName:t,regularPriceStyle:r,regularPrice:s,priceClassName:l,priceStyle:i,price:u})=>(0,c.createElement)(c.Fragment,null,(0,c.createElement)("span",{className:"screen-reader-text"},(0,a.__)("Previous price:","woocommerce")),(0,c.createElement)(n.FormattedMonetaryAmount,{currency:e,renderText:e=>(0,c.createElement)("del",{className:(0,o.A)("wc-block-components-product-price__regular",t),style:r},e),value:s}),(0,c.createElement)("span",{className:"screen-reader-text"},(0,a.__)("Discounted price:","woocommerce")),(0,c.createElement)(n.FormattedMonetaryAmount,{currency:e,renderText:e=>(0,c.createElement)("ins",{className:(0,o.A)("wc-block-components-product-price__value","is-discounted",l),style:i},e),value:u})),d=({align:e,className:t,currency:r,format:a="<price/>",maxPrice:s,minPrice:d,price:m,priceClassName:p,priceStyle:g,regularPrice:y,regularPriceClassName:_,regularPriceStyle:v,style:N})=>{const b=(0,o.A)(t,"price","wc-block-components-product-price",{[`wc-block-components-product-price--align-${e}`]:e});a.includes("<price/>")||(a="<price/>",console.error("Price formats need to include the `<price/>` tag."));const w=y&&m&&m<y;let k=(0,c.createElement)("span",{className:(0,o.A)("wc-block-components-product-price__value",p)});return w?k=(0,c.createElement)(u,{currency:r,price:m,priceClassName:p,priceStyle:g,regularPrice:y,regularPriceClassName:_,regularPriceStyle:v}):void 0!==d&&void 0!==s?k=(0,c.createElement)(i,{currency:r,maxPrice:s,minPrice:d,priceClassName:p,priceStyle:g}):m&&(k=(0,c.createElement)(n.FormattedMonetaryAmount,{className:(0,o.A)("wc-block-components-product-price__value",p),currency:r,value:m,style:g})),(0,c.createElement)("span",{className:b,style:N},(0,l.createInterpolateElement)(a,{price:k}))}},2775:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>Q});var c=r(1609),a=r(8605),n=r(2796),o=r(6087),s=r(7723),l=r(851),i=r(5703),u=r(3993),d=r(1194),m=r(9786);function p(e={}){const t={};return(0,m.getCSSRules)(e,{selector:""}).forEach((e=>{t[e.key]=e.value})),t}function g(e,t){return e&&t?`has-${(0,d.c)(t)}-${e}`:""}const y=e=>{const t=(e=>{const t=(0,u.isObject)(e)?e:{style:{}};let r=t.style;return(0,u.isString)(r)&&(r=JSON.parse(r)||{}),(0,u.isObject)(r)||(r={}),{...t,style:r}})(e),r=function(e){var t,r,c,a,n,o,s;const{backgroundColor:i,textColor:d,gradient:m,style:y}=e,_=g("background-color",i),v=g("color",d),N=function(e){if(e)return`has-${e}-gradient-background`}(m),b=N||(null==y||null===(t=y.color)||void 0===t?void 0:t.gradient);return{className:(0,l.A)(v,N,{[_]:!b&&!!_,"has-text-color":d||(null==y||null===(r=y.color)||void 0===r?void 0:r.text),"has-background":i||(null==y||null===(c=y.color)||void 0===c?void 0:c.background)||m||(null==y||null===(a=y.color)||void 0===a?void 0:a.gradient),"has-link-color":(0,u.isObject)(null==y||null===(n=y.elements)||void 0===n?void 0:n.link)?null==y||null===(o=y.elements)||void 0===o||null===(s=o.link)||void 0===s?void 0:s.color:void 0}),style:p({color:(null==y?void 0:y.color)||{}})}}(t),c=function(e){var t;const r=(null===(t=e.style)||void 0===t?void 0:t.border)||{};return{className:function(e){var t;const{borderColor:r,style:c}=e,a=r?g("border-color",r):"";return(0,l.A)({"has-border-color":!!r||!(null==c||null===(t=c.border)||void 0===t||!t.color),[a]:!!a})}(e),style:p({border:r})}}(t),a=function(e){var t;return{className:void 0,style:p({spacing:(null===(t=e.style)||void 0===t?void 0:t.spacing)||{}})}}(t),n=(e=>{const t=(0,u.isObject)(e.style.typography)?e.style.typography:{},r=(0,u.isString)(t.fontFamily)?t.fontFamily:"";return{className:e.fontFamily?`has-${e.fontFamily}-font-family`:r,style:{fontSize:e.fontSize?`var(--wp--preset--font-size--${e.fontSize})`:t.fontSize,fontStyle:t.fontStyle,fontWeight:t.fontWeight,letterSpacing:t.letterSpacing,lineHeight:t.lineHeight,textDecoration:t.textDecoration,textTransform:t.textTransform}}})(t);return{className:(0,l.A)(n.className,r.className,c.className,a.className),style:{...n.style,...r.style,...c.style,...a.style}}};var _=r(1616),v=r(3603),N=r(4656);r(6007);const b=(0,_.withProductDataContext)((e=>{const{className:t,align:r}=e,a=y(e),{parentClassName:o}=(0,n.useInnerBlockLayoutContext)(),{product:i}=(0,n.useProductDataContext)();if(!(i.id&&i.on_sale||e.isDescendentOfSingleProductTemplate))return null;const u="string"==typeof r?`wc-block-components-product-sale-badge--align-${r}`:"";return(0,c.createElement)("div",{className:(0,l.A)("wc-block-components-product-sale-badge",t,u,{[`${o}__product-onsale`]:o},a.className),style:a.style},(0,c.createElement)(N.Label,{label:(0,s.__)("Sale","woocommerce"),screenReaderLabel:(0,s.__)("Product on sale","woocommerce")}))}));r(5183);let w=function(e){return e.SINGLE="single",e.THUMBNAIL="thumbnail",e}({});const k=e=>(0,c.createElement)("img",{...e,src:i.PLACEHOLDER_IMG_SRC,alt:"",width:void 0,height:void 0}),E=({image:e,loaded:t,showFullSize:r,fallbackAlt:a,width:n,scale:s,height:l,aspectRatio:i})=>{const{thumbnail:u,src:d,srcset:m,sizes:p,alt:g}=e||{},y={alt:g||a,hidden:!t,src:u,...r&&{src:d,srcSet:m,sizes:p}},_={height:l,width:n,objectFit:s,aspectRatio:i};return(0,c.createElement)(o.Fragment,null,y.src&&(0,c.createElement)("img",{style:_,"data-testid":"product-image",...y}),!e&&(0,c.createElement)(k,{style:_}))},h=e=>{const{className:t,imageSizing:r=w.SINGLE,showProductLink:a=!0,showSaleBadge:i,saleBadgeAlign:u="right",height:d,width:m,scale:p,aspectRatio:g,..._}=e,N=y(e),{parentClassName:h}=(0,n.useInnerBlockLayoutContext)(),{product:f,isLoading:C}=(0,n.useProductDataContext)(),{dispatchStoreEvent:P}=(0,v.y)();if(!f.id)return(0,c.createElement)("div",{className:(0,l.A)(t,"wc-block-components-product-image",{[`${h}__product-image`]:h},N.className),style:N.style},(0,c.createElement)(k,null));const A=!!f.images.length,S=A?f.images[0]:null,x=a?"a":o.Fragment,L=(0,s.sprintf)(/* translators: %s is referring to the product name */ /* translators: %s is referring to the product name */
(0,s.__)("Link to %s","woocommerce"),f.name),$={href:f.permalink,...!A&&{"aria-label":L},onClick:()=>{P("product-view-link",{product:f})}};return delete _.style,(0,c.createElement)("div",{className:(0,l.A)(t,"wc-block-components-product-image",{[`${h}__product-image`]:h},N.className),style:N.style},(0,c.createElement)(x,{...a&&$},!!i&&(0,c.createElement)(b,{align:u,..._}),(0,c.createElement)(E,{fallbackAlt:f.name,image:S,loaded:!C,showFullSize:r!==w.THUMBNAIL,width:m,height:d,scale:p,aspectRatio:g})))};(0,_.withProductDataContext)(h);var f=r(7102);r(7128);const C=({children:e,headingLevel:t,elementType:r=`h${t}`,...a})=>(0,c.createElement)(r,{...a},e),P=e=>{const{className:t,headingLevel:r=2,showProductLink:a=!0,linkTarget:o,align:s}=e,i=y(e),{parentClassName:u}=(0,n.useInnerBlockLayoutContext)(),{product:d}=(0,n.useProductDataContext)(),{dispatchStoreEvent:m}=(0,v.y)();return d.id?(0,c.createElement)(C,{headingLevel:r,className:(0,l.A)(t,i.className,"wc-block-components-product-title",{[`${u}__product-title`]:u,[`wc-block-components-product-title--align-${s}`]:s}),style:i.style},(0,c.createElement)(f.A,{disabled:!a,name:d.name,permalink:d.permalink,target:o,onClick:()=>{m("product-view-link",{product:d})}})):(0,c.createElement)(C,{headingLevel:r,className:(0,l.A)(t,i.className,"wc-block-components-product-title",{[`${u}__product-title`]:u,[`wc-block-components-product-title--align-${s}`]:s}),style:i.style})};(0,_.withProductDataContext)(P),r(7195);const A=e=>({width:e/5*100+"%"}),S=({parentClassName:e})=>{const t=A(0);return(0,c.createElement)("div",{className:(0,l.A)("wc-block-components-product-rating-stars__norating-container",`${e}-product-rating-stars__norating-container`)},(0,c.createElement)("div",{className:"wc-block-components-product-rating-stars__norating",role:"img"},(0,c.createElement)("span",{style:t})),(0,c.createElement)("span",null,(0,s.__)("No Reviews","woocommerce")))},x=e=>{const{rating:t,reviews:r,parentClassName:a}=e,n=A(t),o=(0,s.sprintf)(/* translators: %f is referring to the average rating value */ /* translators: %f is referring to the average rating value */
(0,s.__)("Rated %f out of 5","woocommerce"),t),i={__html:(0,s.sprintf)(/* translators: %1$s is referring to the average rating value, %2$s is referring to the number of ratings */ /* translators: %1$s is referring to the average rating value, %2$s is referring to the number of ratings */
(0,s._n)("Rated %1$s out of 5 based on %2$s customer rating","Rated %1$s out of 5 based on %2$s customer ratings",r,"woocommerce"),(0,s.sprintf)('<strong class="rating">%f</strong>',t),(0,s.sprintf)('<span class="rating">%d</span>',r))};return(0,c.createElement)("div",{className:(0,l.A)("wc-block-components-product-rating-stars__stars",`${a}__product-rating-stars__stars`),role:"img","aria-label":o},(0,c.createElement)("span",{style:n,dangerouslySetInnerHTML:i}))},L=e=>{const{textAlign:t,shouldDisplayMockedReviewsWhenProductHasNoReviews:r}=e,a=y(e),{parentClassName:o}=(0,n.useInnerBlockLayoutContext)(),{product:s}=(0,n.useProductDataContext)(),i=(e=>{const t=parseFloat(e.average_rating);return Number.isFinite(t)&&t>0?t:0})(s),d=(e=>{const t=(0,u.isNumber)(e.review_count)?e.review_count:parseInt(e.review_count,10);return Number.isFinite(t)&&t>0?t:0})(s),m=(0,l.A)(a.className,"wc-block-components-product-rating-stars",{[`${o}__product-rating`]:o,[`has-text-align-${t}`]:t}),p=r?(0,c.createElement)(S,{parentClassName:o}):null,g=d?(0,c.createElement)(x,{rating:i,reviews:d,parentClassName:o}):p;return(0,c.createElement)("div",{className:m,style:a.style},(0,c.createElement)("div",{className:"wc-block-components-product-rating-stars__container"},g))};(0,_.withProductDataContext)(L);var $=r(6042),D=r(8529);const F=e=>{var t,r;const{className:a,textAlign:o,isDescendentOfSingleProductTemplate:s}=e,i=y(e),{parentName:u,parentClassName:d}=(0,n.useInnerBlockLayoutContext)(),{product:m}=(0,n.useProductDataContext)(),p="woocommerce/all-products"===u,g=(0,l.A)("wc-block-components-product-price",a,i.className,{[`${d}__product-price`]:d});if(!m.id&&!s){const e=(0,c.createElement)($.A,{align:o,className:g});return p?(0,c.createElement)("div",{className:"wp-block-woocommerce-product-price"},e):e}const _=m.prices,v=s?(0,D.getCurrencyFromPriceResponse)():(0,D.getCurrencyFromPriceResponse)(_),N="5000",b=_.price!==_.regular_price,w=(0,l.A)({[`${d}__product-price__value`]:d,[`${d}__product-price__value--on-sale`]:b}),k=(0,c.createElement)($.A,{align:o,className:g,style:i.style,regularPriceStyle:i.style,priceStyle:i.style,priceClassName:w,currency:v,price:s?N:_.price,minPrice:null==_||null===(t=_.price_range)||void 0===t?void 0:t.min_amount,maxPrice:null==_||null===(r=_.price_range)||void 0===r?void 0:r.max_amount,regularPrice:s?N:_.regular_price,regularPriceClassName:(0,l.A)({[`${d}__product-price__regular`]:d})});return p?(0,c.createElement)("div",{className:"wp-block-woocommerce-product-price"},k):k};var I=r(7143),R=r(7594),T=r(8537);const B=(e,t)=>{const r=e.find((({id:e})=>e===t));return r?r.quantity:0};var M=r(812);r(1546);const O=({product:e,className:t,style:r})=>{const{id:n,permalink:u,add_to_cart:d,has_options:m,is_purchasable:p,is_in_stock:g}=e,{dispatchStoreEvent:y}=(0,v.y)(),{cartQuantity:_,addingToCart:N,addToCart:b}=(e=>{const{addItemToCart:t}=(0,I.useDispatch)(R.CART_STORE_KEY),{cartItems:r,cartIsLoading:c}=(0,a.V)(),{createErrorNotice:n,removeNotice:s}=(0,I.useDispatch)("core/notices"),[l,i]=(0,o.useState)(!1),u=(0,o.useRef)(B(r,e));return(0,o.useEffect)((()=>{const t=B(r,e);t!==u.current&&(u.current=t)}),[r,e]),{cartQuantity:Number.isFinite(u.current)?u.current:0,addingToCart:l,cartIsLoading:c,addToCart:(r=1)=>(i(!0),t(e,r).then((()=>{s("add-to-cart")})).catch((e=>{n((0,T.decodeEntities)(e.message),{id:"add-to-cart",context:"wc/all-products",isDismissible:!0})})).finally((()=>{i(!1)})))}})(n),w=Number.isFinite(_)&&_>0,k=!m&&p&&g,E=(0,T.decodeEntities)((null==d?void 0:d.description)||""),h=w?(0,s.sprintf)(/* translators: %s number of products in cart. */ /* translators: %s number of products in cart. */
(0,s._n)("%d in cart","%d in cart",_,"woocommerce"),_):(0,T.decodeEntities)((null==d?void 0:d.text)||(0,s.__)("Add to cart","woocommerce")),f=k?"button":"a",C={};return k?C.onClick=async()=>{await b(),y("cart-add-item",{product:e});const{cartRedirectAfterAdd:t}=(0,i.getSetting)("productsSettings");t&&(window.location.href=M.Vo)}:(C.href=u,C.rel="nofollow",C.onClick=()=>{y("product-view-link",{product:e})}),(0,c.createElement)(f,{...C,"aria-label":E,disabled:N,className:(0,l.A)(t,"wp-block-button__link","wp-element-button","add_to_cart_button","wc-block-components-product-button__button",{loading:N,added:w}),style:r},h)},z=({className:e,style:t})=>(0,c.createElement)("button",{className:(0,l.A)("wp-block-button__link","wp-element-button","add_to_cart_button","wc-block-components-product-button__button","wc-block-components-product-button__button--placeholder",e),style:t,disabled:!0}),H=e=>{const{className:t,textAlign:r}=e,a=y(e),{parentClassName:o}=(0,n.useInnerBlockLayoutContext)(),{product:s}=(0,n.useProductDataContext)();return(0,c.createElement)("div",{className:(0,l.A)(t,"wp-block-button","wc-block-components-product-button",{[`${o}__product-add-to-cart`]:o,[`align-${r}`]:r})},s.id?(0,c.createElement)(O,{product:s,style:a.style,className:a.className}):(0,c.createElement)(z,{style:a.style,className:a.className}))},W=((0,_.withProductDataContext)(H),({product:e})=>(0,c.createElement)("div",{className:"cross-sells-product"},(0,c.createElement)(n.InnerBlockLayoutContextProvider,{parentName:"woocommerce/cart-cross-sells-block",parentClassName:"wp-block-cart-cross-sells-product"},(0,c.createElement)(n.ProductDataContextProvider,{isLoading:!1,product:e},(0,c.createElement)("div",null,(0,c.createElement)(h,{className:"",showSaleBadge:!0,productId:e.id,showProductLink:!0,saleBadgeAlign:"left",imageSizing:w.SINGLE,isDescendentOfQueryLoop:!1,scale:"cover",aspectRatio:"1:1"}),(0,c.createElement)(P,{align:"",headingLevel:3,showProductLink:!0}),(0,c.createElement)(L,{isDescendentOfQueryLoop:!1,isDescendentOfSingleProductBlock:!1,productId:e.id,postId:0,shouldDisplayMockedReviewsWhenProductHasNoReviews:!1}),(0,c.createElement)(F,null)),(0,c.createElement)(H,null))))),j=({products:e,columns:t})=>{const r=e.map(((e,r)=>r>=t?null:(0,c.createElement)(W,{isLoading:!1,product:e,key:e.id})));return(0,c.createElement)("div",null,r)};var G=r(7292);const Q=({className:e,columns:t})=>{const{crossSellsProducts:r}=(0,a.V)();return void 0===t&&(t=G.attributes.columns.default),(0,c.createElement)(j,{className:e,columns:t,products:r})}},1546:()=>{},5183:()=>{},7195:()=>{},6007:()=>{},7128:()=>{},6625:()=>{},4567:()=>{}}]);