(this.webpackJsonpjptext=this.webpackJsonpjptext||[]).push([[0],{28:function(e,t,a){e.exports=a(76)},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),r=a(24),l=a.n(r),o=a(27),i=a(3),s=a.n(i),m=a(25),u=a(1),p=a(26),f=(a(63),function(e){var t=e.onChange;return n.a.createElement("div",{className:"file-uploader--wrapper"},n.a.createElement("input",{className:"file-uploader__input",type:"file",onChange:function(e){var a=Array.from(e.target.files),c=Object(u.a)(a,1)[0];c&&t(c)}}),n.a.createElement("p",{className:"file-uploader__title"},"Drop your images here!"),n.a.createElement("p",{className:"file-uploader__sub-title"},"or click here"))}),d=(a(64),function(e){var t=e.text,a=e.icon,r=e.onClick,l=e.className,o=e.toolTipText,i=Object(c.useState)(!1),s=Object(u.a)(i,2),m=s[0],p=s[1],f=Boolean(o);return n.a.createElement("button",{className:"button ".concat(l),onClick:function(){p(!0),setTimeout((function(){return p(!1)}),1e3),r()}},f&&n.a.createElement("span",{className:"tool-tip ".concat(m?"open":"")},o),n.a.createElement("span",null,t),a)}),v=function(){return n.a.createElement("svg",{width:24,height:24,viewBox:"0 0 444.819 444.819"},n.a.createElement("path",{d:"M434.252 114.203l-21.409-21.416c-7.419-7.04-16.084-10.561-25.975-10.561-10.095 0-18.657 3.521-25.7 10.561L222.41 231.549 83.653 92.791c-7.042-7.04-15.606-10.561-25.697-10.561-9.896 0-18.559 3.521-25.979 10.561l-21.128 21.416C3.615 121.436 0 130.099 0 140.188c0 10.277 3.619 18.842 10.848 25.693l185.864 185.865c6.855 7.23 15.416 10.848 25.697 10.848 10.088 0 18.75-3.617 25.977-10.848l185.865-185.865c7.043-7.044 10.567-15.608 10.567-25.693.001-9.901-3.523-18.559-10.566-25.985z",fill:"currentColor"}))},E=(a(65),function(e){var t=e.options,a=e.defaultValue,r=e.onChange,l=e.className,o=Object(c.useState)(!1),i=Object(u.a)(o,2),s=i[0],m=i[1],p=Boolean(t.length),f=p?t:["Empty"];return n.a.createElement("div",{className:"select--wrapper ".concat(l)},n.a.createElement(d,{className:"select__button ".concat(s?"open":""),text:a||"Select file",icon:n.a.createElement(v,null),onClick:function(){return m((function(e){return!e}))}}),s&&n.a.createElement("div",{className:"select__option--wrapper"},f.map((function(e){return n.a.createElement("div",{key:e,className:"select__option",onClick:function(){return function(e){p&&r(e),m(!1)}(e)}},e)}))))}),g=function(){return n.a.createElement("svg",{viewBox:"0 0 477.867 477.867",width:"24",height:"24"},n.a.createElement("path",{d:"M341.333 85.333H51.2c-28.277 0-51.2 22.923-51.2 51.2v290.133c0 28.277 22.923 51.2 51.2 51.2h290.133c28.277 0 51.2-22.923 51.2-51.2V136.533c0-28.277-22.923-51.2-51.2-51.2z M426.667 0h-307.2c-28.124-.001-50.984 22.684-51.2 50.807v.393h273.067c47.105.056 85.277 38.228 85.333 85.333V409.6h.393c28.124-.216 50.808-23.076 50.807-51.2V51.2c0-28.277-22.923-51.2-51.2-51.2z",fill:"currentColor"}))},h=(a(66),function(){return n.a.createElement("svg",{viewBox:"0 0 512.171 512.171",width:24,height:24},n.a.createElement("path",{d:"M310.87,8.597c-1.243-1.988-3.249-3.376-5.547-3.84c-32.464-6.314-65.84-6.314-98.304,0 c-2.298,0.464-4.304,1.852-5.547,3.84c-1.288,2.03-1.659,4.508-1.024,6.827l21.931,82.773c1.126,4.214,5.248,6.9,9.557,6.229 c15.89-2.475,32.067-2.475,47.957,0h1.28c3.967,0.136,7.504-2.481,8.533-6.315l22.187-82.688 C312.529,13.106,312.157,10.627,310.87,8.597z M206.934,102.549l-22.187-82.773c-0.628-2.278-2.173-4.194-4.267-5.291c-2.069-1.12-4.508-1.336-6.741-0.597 C142.353,24.531,113.36,41.23,88.406,63.04c-1.776,1.558-2.826,3.783-2.901,6.144c-0.151,2.278,0.617,4.522,2.133,6.229 L148.224,136c1.61,1.597,3.79,2.488,6.059,2.475c1.954,0.008,3.852-0.654,5.376-1.877c12.435-10.117,26.407-18.184,41.387-23.893 C205.395,111.421,207.981,106.961,206.934,102.549z M136.192,148.458L75.606,87.872c-1.673-1.662-3.958-2.558-6.315-2.475c-2.327-0.059-4.577,0.835-6.229,2.475 c-21.809,24.955-38.509,53.947-49.152,85.333c-0.739,2.233-0.522,4.673,0.597,6.741c1.097,2.093,3.012,3.638,5.291,4.267 l82.773,22.187c0.737,0.084,1.481,0.084,2.219,0c3.518-0.01,6.669-2.179,7.936-5.461c5.736-14.985,13.831-28.957,23.979-41.387 C139.292,156.234,139.075,151.524,136.192,148.458z M104.448,280.043c-1.264-7.93-1.892-15.949-1.877-23.979c-0.085-8.111,0.486-16.216,1.707-24.235 c0.671-4.31-2.016-8.432-6.229-9.557L15.36,200.085c-0.179-0.048-0.36-0.091-0.542-0.127c-4.622-0.923-9.116,2.076-10.039,6.698 c-6.372,32.458-6.372,65.846,0,98.304c0.823,4.037,4.414,6.91,8.533,6.827c0.737,0.084,1.481,0.084,2.219,0L98.219,289.6 C102.433,288.474,105.12,284.352,104.448,280.043z M136.704,352.576c-10.058-12.557-18.039-26.645-23.637-41.728c-1.556-4.076-5.937-6.321-10.155-5.205l-82.773,22.187 c-2.278,0.628-4.194,2.173-5.291,4.267c-1.12,2.069-1.336,4.508-0.597,6.741c10.643,31.386,27.343,60.379,49.152,85.333 c1.558,1.776,3.783,2.826,6.144,2.901c2.259-0.031,4.423-0.915,6.059-2.475l60.587-60.587 C139.273,360.895,139.494,355.954,136.704,352.576z M201.046,399.509c-14.985-5.736-28.957-13.831-41.387-23.979c-3.318-2.588-8.028-2.371-11.093,0.512l-60.587,60.587 c-1.662,1.673-2.558,3.958-2.475,6.315c-0.249,2.434,0.559,4.858,2.219,6.656c24.955,21.809,53.947,38.509,85.333,49.152 c0.906,0.13,1.825,0.13,2.731,0c1.401-0.007,2.778-0.359,4.011-1.024c2.094-1.097,3.638-3.012,4.267-5.291l22.187-82.773 C207.367,405.446,205.122,401.066,201.046,399.509z M311.894,496.789l-22.187-82.688c-1.126-4.214-5.248-6.901-9.557-6.229c-15.89,2.475-32.067,2.475-47.957,0 c-4.31-0.671-8.432,2.016-9.557,6.229l-22.187,82.688c-0.61,2.292-0.239,4.734,1.024,6.741c1.243,1.988,3.249,3.376,5.547,3.84 c32.458,6.372,65.846,6.372,98.304,0c2.298-0.464,4.304-1.852,5.547-3.84C312.133,501.523,312.504,499.081,311.894,496.789z M424.704,436.715l-60.587-60.587c-3.092-3.106-8.035-3.365-11.435-0.597c-12.429,10.148-26.401,18.243-41.387,23.979 c-4.076,1.556-6.321,5.937-5.205,10.155l21.504,82.261c0.628,2.278,2.173,4.194,4.267,5.291c1.233,0.665,2.61,1.017,4.011,1.024 c0.906,0.13,1.825,0.13,2.731,0c31.386-10.643,60.379-27.343,85.333-49.152c1.776-1.558,2.826-3.783,2.901-6.144 C426.989,440.666,426.22,438.422,424.704,436.715z M497.835,332.437c-1.097-2.094-3.012-3.638-5.291-4.267l-82.773-22.187c-4.218-1.116-8.598,1.129-10.155,5.205 c-5.736,14.985-13.831,28.957-23.979,41.387c-2.937,3.498-2.598,8.689,0.768,11.776l60.587,60.587 c1.635,1.559,3.799,2.443,6.059,2.475c2.361-0.075,4.586-1.125,6.144-2.901c21.809-24.955,38.509-53.947,49.152-85.333 C499.112,336.957,498.927,334.518,497.835,332.437z M507.222,207.168c-0.036-0.182-0.079-0.363-0.127-0.542c-1.222-4.552-5.903-7.25-10.454-6.028l-82.688,22.187 c-4.214,1.126-6.901,5.248-6.229,9.557c2.503,15.888,2.503,32.069,0,47.957c-0.671,4.31,2.016,8.432,6.229,9.557l82.688,22.187 c0.737,0.084,1.482,0.084,2.219,0c4.12,0.083,7.71-2.789,8.533-6.827c3.194-16.189,4.794-32.651,4.779-49.152 C512.114,239.643,510.457,223.267,507.222,207.168z M498.347,173.632c-10.643-31.386-27.343-60.379-49.152-85.333c-1.558-1.776-3.783-2.826-6.144-2.901 c-2.286-0.213-4.554,0.563-6.229,2.133l-60.587,60.587c-3.106,3.092-3.365,8.035-0.597,11.435 c10.124,12.351,18.218,26.235,23.979,41.131c1.267,3.282,4.418,5.451,7.936,5.461c0.737,0.084,1.482,0.084,2.219,0l82.688-22.187 c2.278-0.628,4.194-2.173,5.291-4.267C498.687,177.813,498.9,175.656,498.347,173.632z M424.619,62.954c-24.955-21.809-53.947-38.509-85.333-49.152c-2.233-0.739-4.673-0.522-6.741,0.597 c-2.094,1.097-3.638,3.012-4.267,5.291l-22.187,82.773c-1.208,4.153,0.882,8.552,4.864,10.24 c14.985,5.736,28.957,13.831,41.387,23.979c1.524,1.223,3.422,1.886,5.376,1.877c2.268,0.013,4.448-0.877,6.059-2.475 l60.587-60.587c1.662-1.673,2.558-3.958,2.475-6.315C426.966,66.894,426.166,64.648,424.619,62.954z",fill:"currentColor"}))}),w=(a(67),function(e){var t=e.text;return n.a.createElement("div",{className:"loader--wrapper"},n.a.createElement(h,null),t&&n.a.createElement("p",{className:"loader__text"},t))}),b=(a(68),function(e){var t=e.text,a=e.isLoading,c=e.boxRef,r=void 0===c?null:c,l=a||!t?" ":t;return n.a.createElement("div",{className:"text-box--wrapper"},n.a.createElement("textarea",{className:"text-box__input",ref:r,value:l,onChange:function(){}}),a&&n.a.createElement(w,{text:"Your file is loading!"}),!a&&!t&&n.a.createElement("p",{className:"text-box__message"},"No images has been converted yet!"))}),_=(a(69),function(){return n.a.createElement("svg",{viewBox:"0 0 512 512",width:24,height:24},n.a.createElement("path",{d:"m256 512c-64.349 0-129.788-2.237-194.5-6.649l-7.639-.521c-10.546-.719-19.053-8.906-20.176-19.416l-.814-7.614c-9.706-90.844-9.706-182.967 0-273.81l.814-7.614c1.123-10.51 9.63-18.697 20.176-19.416l7.639-.521c64.72-4.412 130.159-6.649 194.5-6.649 64.342 0 129.781 2.237 194.5 6.649l7.639.521c10.546.719 19.053 8.906 20.176 19.416l.814 7.613c9.707 90.844 9.707 182.967 0 273.811l-.814 7.613c-1.123 10.51-9.63 18.697-20.176 19.416l-7.639.521c-64.712 4.413-130.15 6.65-194.5 6.65z",fill:"#c4d0d9"}),n.a.createElement("path",{d:"m448.402 474.512c-64.074 4.382-128.599 6.582-192.41 6.582-63.792 0-128.318-2.2-192.392-6.582-2.915-27.288-4.946-54.652-6.075-82.035-2.52-61.761-.508-123.654 6.075-185.208 64.074-4.363 128.599-6.582 192.392-6.582 26.536 0 53.185.376 79.872 1.147 37.519 1.072 75.095 2.877 112.539 5.435 2.313 21.628 4.062 43.312 5.228 64.996 1.091 19.521 1.693 39.043 1.862 58.564.376 47.957-1.994 95.914-7.091 143.683z",fill:"#2C88D9"}),n.a.createElement("path",{d:"m452.803 423.546c-1.129 17.001-2.595 34.003-4.401 50.966-64.074 4.382-128.599 6.582-192.41 6.582-63.792 0-128.318-2.2-192.392-6.582-1.034-9.667-1.956-19.333-2.746-29-1.486-17.659-2.595-35.338-3.329-53.035h.019c61.761 0 112.426-106.784 181.841-76.75 69.415 30.015 112.05 86.36 216.069 15.026l.038.075c.245 30.919-.658 61.838-2.689 92.718z",fill:"#1AAE9F"}),n.a.createElement("path",{d:"m452.803 423.546c-1.129 17.001-2.595 34.003-4.401 50.966-64.074 4.382-128.599 6.582-192.41 6.582-63.792 0-128.318-2.2-192.392-6.582-1.034-9.667-1.956-19.333-2.746-29 .001 0 205.726-21.966 391.949-21.966z",fill:"#207868"}),n.a.createElement("circle",{cx:"360.366",cy:"273.394",fill:"#F7C325",r:"45.22"}),n.a.createElement("path",{d:"m337.231 96.515-68.095-92.032c-4.423-5.978-13.366-5.978-17.789 0l-68.095 92.032c-5.403 7.303-.19 17.645 8.894 17.645h14.251c6.111 0 11.064 4.954 11.064 11.064v92.383c0 6.111 4.954 11.064 11.064 11.064h63.432c6.111 0 11.064-4.954 11.064-11.064v-92.383c0-6.111 4.954-11.064 11.064-11.064h14.251c9.085.001 14.298-10.342 8.895-17.645z",fill:"#4b5d6c"}))}),x=function(){return n.a.createElement("div",{className:"image-empty--wrapper"},n.a.createElement(_,null),n.a.createElement("p",{className:"image-empty__title"},"Upload an Image to start!"),n.a.createElement("p",{className:"image-empty__paragraph"},"Drop your images from above!"))},N=function(e){var t=e.files,a=e.isLoading,r=Object(c.useState)({}),l=Object(u.a)(r,2),o=l[0],i=l[1],s=Object(c.useRef)(null),m=o instanceof File,p=t.map((function(e){return e.name}));Object(c.useEffect)((function(){var e=t[t.length-1];e&&i(e)}),[t]);return n.a.createElement("div",{className:"files-viewer--wrapper"},n.a.createElement("div",{className:"files-viewer__content files-viewer__text-input--wrapper"},n.a.createElement("div",{className:"files-viewer__text-input__options"},n.a.createElement(E,{className:"files-select",options:p,onChange:function(e){var a=t.find((function(t){return t.name===e}));a&&i(a)},defaultValue:o.name}),n.a.createElement(d,{icon:n.a.createElement(g,null),onClick:function(){var e=s&&s.current;e&&(e.select(),document.execCommand("copy"))},toolTipText:"Copied!"})),n.a.createElement(b,{boxRef:s,text:o.convertedText,isLoading:a})),n.a.createElement("div",{className:"files-viewer__preview--wrapper files-viewer__content"},n.a.createElement("p",{className:"files-viewer__title"},"Preview"),m?n.a.createElement("img",{className:"files-viewer__preview",src:URL.createObjectURL(o),alt:"preview"}):n.a.createElement(x,null)))},C=(a(70),function(){return n.a.createElement("h1",{className:"header-title"},n.a.createElement("span",{className:"header-strong"},"JPT"),"ext")}),j=(a(71),function(e){var t=e.id,a=e.progress,c=e.status,r=100-a;return n.a.createElement("div",{id:t,className:"progressbar--wrapper"},n.a.createElement("p",{className:"progress__status"},c),n.a.createElement("div",{className:"progress__wrapper"},n.a.createElement("span",{className:"progress"},a,"%"),n.a.createElement("span",{className:"progress__filler",style:{right:"".concat(r,"%")}})))}),O=a(9),z=a(14),y=(a(72),function(e){var t=e.alignments,a=void 0===t?{}:t,c=e.variant,r=Object.keys(a).reduce((function(e,t){var c=a[t],n="left"===t||"right"===t;return Object(z.a)(Object(z.a)({},e),{},Object(O.a)({},t,"".concat(c,n?"vw":"vh")))}),{});return n.a.createElement("div",{className:"cloud--wrapper",style:r},n.a.createElement("span",{className:"cloud ".concat(c||"normal")}))}),M=(a(73),function(){return n.a.createElement("div",{className:"footer--wrapper"})}),k=(a(74),function(){var e=Object(c.useState)({progress:0,status:"Upload your file to start!"}),t=Object(u.a)(e,2),a=t[0],r=t[1],l=Object(c.useState)(""),i=Object(u.a)(l,2),d=i[0],v=i[1],E=Object(c.useState)([]),g=Object(u.a)(E,2),h=g[0],w=g[1],b=Object(c.useState)(!1),_=Object(u.a)(b,2),x=_[0],O=_[1],z=Object(c.useCallback)(function(){var e=Object(m.a)(s.a.mark((function e(t){var a,c,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object(p.createWorker)({logger:function(e){var t=e.status,a=e.progress;return r({status:t,progress:100*a.toFixed()})}}),O(!0),e.next=4,a.load();case 4:return e.next=6,a.loadLanguage("eng");case 6:return e.next=8,a.initialize("eng");case 8:return e.next=10,a.recognize(t);case 10:c=e.sent,n=c.data.text,v(n),O(!1),r({status:"Completed!",progress:100}),w((function(e){return e.map((function(e){var a=e.name===t.name;return a&&(t.convertedText=n),a?t:e}))}));case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[]);return n.a.createElement(n.a.Fragment,null,n.a.createElement(y,{alignments:{top:38,left:-15},variant:"normal"}),n.a.createElement(y,{alignments:{top:10,left:60},variant:"short-top"}),n.a.createElement("div",{className:"home"},n.a.createElement(C,null),n.a.createElement(f,{onChange:function(e){var t=h.filter((function(t){return t.name!==e.name})),a=document.getElementById("scrolled-element");z(e),a.scrollIntoView({behavior:"smooth"}),w([].concat(Object(o.a)(t),[e]))}}),n.a.createElement(j,Object.assign({id:"scrolled-element"},a)),n.a.createElement(N,{convertedText:d,files:h,isLoading:x})),n.a.createElement(M,null))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(75);l.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[28,1,2]]]);
//# sourceMappingURL=main.ab7e2602.chunk.js.map