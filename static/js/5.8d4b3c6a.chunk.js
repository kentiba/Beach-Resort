(this["webpackJsonpbeach-resort"]=this["webpackJsonpbeach-resort"]||[]).push([[5],{193:function(e,a,t){"use strict";var n=t(196),r=t(197),c=t(194),l=t.n(c);function m(){var e=Object(n.a)(["\n  min-height: 90vh;\n  background: url(",")\n    center/cover no-repeat;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);return m=function(){return e},e}var o=r.a.header(m(),(function(e){return e.image?e.image:l.a}));a.a=o},194:function(e,a,t){e.exports=t.p+"static/media/defaultBcg.aebaec51.jpeg"},195:function(e,a,t){"use strict";var n=t(0),r=t.n(n);a.a=function(e){var a=e.children,t=e.title,n=e.subtitle;return r.a.createElement("div",{className:"banner"},r.a.createElement("h1",null,t),r.a.createElement("div",null),r.a.createElement("p",null,n),a)}},198:function(e,a,t){"use strict";var n=t(0),r=t.n(n);a.a=function(e){var a=e.title;return r.a.createElement("div",{className:"section-title"},r.a.createElement("h4",null,a),r.a.createElement("div",null))}},199:function(e,a,t){"use strict";var n=t(0),r=t.n(n),c=t(10),l=t(200),m=t.n(l);a.a=function(e){var a=e.room,t=a.name,n=a.slug,l=a.images,o=a.price;return r.a.createElement("article",{className:"room"},r.a.createElement("div",{className:"img-container"},r.a.createElement("img",{src:l[0]||m.a,alt:"RoomImage"}),r.a.createElement("div",{className:"price-top"},r.a.createElement("h6",null,"$",o),r.a.createElement("p",null,"per night")),r.a.createElement(c.b,{className:"btn-primary room-link",to:"/beach-resort/rooms/".concat(n)},"features")),r.a.createElement("p",{className:"room-info"},t))}},200:function(e,a,t){e.exports=t.p+"static/media/room-1.e928a5c4.jpeg"},205:function(e,a,t){e.exports=t.p+"static/media/room-2.052c7681.jpeg"},209:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(193),l=t(195),m=t(10),o=t(205),i=t.n(o),s=t(199),u=function(e){var a=e.rooms;return 0===a.length?r.a.createElement("div",{className:"empty-search"},r.a.createElement("h3",null,"Unfortunately, no rooms matched your search parameters")):r.a.createElement("section",{className:"roomsList"},r.a.createElement("div",{className:"roomslist-center"},a.map((function(e,a){return r.a.createElement(s.a,{room:e,key:a})}))))},p=t(22),E=t(198),f=t(43),h=function(e,a){return Object(p.a)(new Set(e.map((function(e){return e[a]}))))},d=function(){var e=Object(n.useContext)(f.a),a=e.rooms,t=e.handleChange,c=e.type,l=e.capacity,m=e.price,o=e.minPrice,i=e.maxPrice,s=e.minSize,u=e.maxSize,d=e.breakfast,v=e.pets,g=h(a,"type"),b=h(a,"capacity");return g.sort(),b.sort((function(e,a){return e-a})),g=["all"].concat(Object(p.a)(g)),r.a.createElement("section",{className:"filter-container"},r.a.createElement(E.a,{title:"search rooms"}),r.a.createElement("form",{className:"filter-form"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"type"},"room type"),r.a.createElement("select",{name:"type",id:"type",value:c,className:"form-control",onChange:t},g.map((function(e,a){return r.a.createElement("option",{key:a,value:e},e)})))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"capacity"},"Guests"),r.a.createElement("select",{name:"capacity",id:"capacity",value:l,className:"form-control",onChange:t},b.map((function(e,a){return r.a.createElement("option",{key:a,value:e},e)})),"}")),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"price"},"Room Price $",m),r.a.createElement("input",{type:"range",name:"price",id:"price",className:"form-control",min:o,max:i,onChange:t,value:m})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"size"},"Room Size"),r.a.createElement("div",{className:"size-inputs"},r.a.createElement("input",{type:"number",name:"minSize",id:"size",className:"size-input",min:s,onChange:t,value:s}),r.a.createElement("input",{type:"number",name:"maxSize",id:"size",className:"size-input",min:u,onChange:t,value:u}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"single-extra"},r.a.createElement("input",{type:"checkbox",name:"breakfast",id:"breakfast",onChange:t,checked:d}),r.a.createElement("label",{htmlFor:"breakfast"},"Breakfast")),r.a.createElement("div",{className:"single-extra"},r.a.createElement("input",{type:"checkbox",name:"pets",id:"pets",onChange:t,checked:v}),r.a.createElement("label",{htmlFor:"pets"},"Pets")))))},v=t(44),g=function(){var e=Object(n.useContext)(f.a),a=e.sortedRooms;return e.loading?r.a.createElement(v.a,null):r.a.createElement(r.a.Fragment,null,r.a.createElement(d,null),r.a.createElement(u,{rooms:a}))};a.default=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,{image:i.a},r.a.createElement(l.a,{title:"Rooms"},r.a.createElement(m.b,{to:"/beach-resort/",className:"btn-primary"},"return home"))),r.a.createElement(g,null))}}}]);
//# sourceMappingURL=5.8d4b3c6a.chunk.js.map