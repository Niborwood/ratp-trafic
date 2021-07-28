(this["webpackJsonpratp-chakra"]=this["webpackJsonpratp-chakra"]||[]).push([[0],{117:function(e,t,r){"use strict";r.r(t);var c=r(143),a=r(0),n=r(76),i=r.n(n),s=r(3),l=r(77),o=r.n(l),j=r(145),d=r(80),u=r(147),b=r(140),h=r(141),f=r(135),O=r(142),x=r(78),g=r(120),v=r(133),p=r(59),m=r(2),S=function(e){var t=Object(g.b)().toggleColorMode,r=Object(g.c)("dark","light"),c=Object(g.c)(p.a,p.b);return Object(m.jsx)(v.a,Object(x.a)({size:"md",fontSize:"lg","aria-label":"Switch to ".concat(r," mode"),variant:"ghost",color:"current",marginLeft:"2",onClick:t,icon:Object(m.jsx)(c,{})},e))},C=r(136),y=r(148);var T=function(e){var t=e.stationsData.map((function(e){return Object(m.jsxs)(C.g,{children:[Object(m.jsx)(C.d,{children:(t=e.fields.station.toLowerCase(),t.replace(/\w\S*/g,(function(e){return e.charAt(0).toUpperCase()+e.substr(1).toLowerCase()})))}),Object(m.jsxs)(C.d,{children:[e.fields.ville," ",e.fields.arrondissement_pour_paris?"(".concat(e.fields.arrondissement_pour_paris,")"):null]}),Object(m.jsx)(C.d,{isNumeric:!0,children:e.fields.trafic.toLocaleString()}),Object(m.jsx)(C.d,{isNumeric:!0,children:e.fields.rang})]},e.recordid);var t}));return 0===t.length?Object(m.jsxs)(y.a,{status:"error",variant:"left-accent",children:[Object(m.jsx)(y.b,{}),"Aucune gare ne contient ces termes."]}):Object(m.jsxs)(C.a,{variant:"striped",colorScheme:"teal",children:[Object(m.jsx)(C.b,{children:"Trafic par station de m\xe9tro, sur l'ann\xe9e 2020 (Source : RATP)"}),Object(m.jsx)(C.f,{children:Object(m.jsxs)(C.g,{children:[Object(m.jsx)(C.e,{children:"Nom"}),Object(m.jsx)(C.e,{children:"Ville"}),Object(m.jsx)(C.e,{isNumeric:!0,children:"Trafic"}),Object(m.jsx)(C.e,{isNumeric:!0,children:"Rang"})]})}),Object(m.jsx)(C.c,{children:t})]})},w=r(146),k=r(84),F=r(149);var B=function(e){var t=e.value,r=e.handleChange,c=e.onSubmitForm;return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("form",{action:"",children:Object(m.jsxs)(u.a,{children:[Object(m.jsx)(w.a,{placeholder:"Nom de la gare (sans accents)",size:"md",variant:"filled",focusBorderColor:"teal.400",value:t,onChange:r}),Object(m.jsx)(k.a,{type:"submit",px:8,leftIcon:Object(m.jsx)(F.a,{}),colorScheme:"teal",variant:"solid",onClick:c,children:"Rechercher"})]})})})},A=r(138),P=r(139);var z=function(e){var t=e.totalStations,r=e.displayedStations,c=e.traficSort,a=e.areaSort,n=Math.round(r/t*100);return 0===n&&r>0&&(n=1),Object(m.jsxs)(A.b,{border:"1px",borderColor:"teal.500",borderRadius:"md",padding:4,children:[Object(m.jsxs)(A.a,{children:[Object(m.jsx)(A.c,{children:1===r?"Station affich\xe9e":"Stations Affich\xe9es"}),Object(m.jsx)(A.d,{children:r}),Object(m.jsxs)(P.a,{colorScheme:0===r?"red":"gray",children:[n,"% des stations totales"]})]}),Object(m.jsxs)(A.a,{children:[Object(m.jsx)(A.c,{children:"Tri par rang"}),Object(m.jsx)(A.d,{children:"rang"===c?"Croissant":"D\xe9croissant"}),Object(m.jsx)(P.a,{colorScheme:"teal",children:"Trafic"})]}),Object(m.jsxs)(A.a,{children:[Object(m.jsx)(A.c,{children:"Filtre g\xe9ographique"}),Object(m.jsx)(A.d,{textTransform:"capitalize",children:"null"===a?"Toutes zones":a}),Object(m.jsx)(P.a,{colorScheme:"teal",children:"Zone"})]})]})},L=r(144);var R=function(e){var t=e.sortByTrafic,r=e.sortByArea,c=e.traficSort,a=e.areaSort,n=e.resetFilters;return Object(m.jsxs)(u.a,{justify:"center",children:[Object(m.jsxs)(L.a,{children:[Object(m.jsx)(L.b,{as:k.a,colorScheme:"teal",children:"Trier par..."}),Object(m.jsxs)(L.e,{width:"240px",children:[Object(m.jsxs)(L.f,{defaultValue:c,title:"Par trafic",type:"radio",children:[Object(m.jsx)(L.d,{value:"-rang",onClick:function(e){t(e.currentTarget.value)},children:"D\xe9croissant"}),Object(m.jsx)(L.d,{value:"rang",onClick:function(e){t(e.currentTarget.value)},children:"Croissant"})]}),Object(m.jsx)(L.c,{}),Object(m.jsxs)(L.f,{defaultValue:a,title:"Par ville",type:"radio",children:[Object(m.jsx)(L.d,{value:"null",onClick:function(e){r(e.currentTarget.value)},children:"Tous"}),Object(m.jsx)(L.d,{value:"paris",onClick:function(e){r(e.currentTarget.value)},children:"Paris"}),Object(m.jsx)(L.d,{value:"banlieue",onClick:function(e){r(e.currentTarget.value)},children:"Banlieue"})]})]})]}),Object(m.jsx)(k.a,{onClick:n,colorScheme:"teal",variant:"outline",children:"R\xe9initialiser les filtres"})]})};var D=function(){var e=Object(a.useState)(""),t=Object(s.a)(e,2),r=t[0],c=t[1],n=Object(a.useState)(""),i=Object(s.a)(n,2),l=i[0],x=i[1],g=Object(a.useState)([]),v=Object(s.a)(g,2),p=v[0],C=v[1],y=Object(a.useState)(!1),w=Object(s.a)(y,2),k=w[0],F=w[1],A=Object(a.useState)("null"),P=Object(s.a)(A,2),L=P[0],D=P[1],N=Object(a.useState)("-rang"),_=Object(s.a)(N,2),M=_[0],I=_[1],V=Object(a.useState)("null"),q=Object(s.a)(V,2),E=q[0],J=q[1],W=function(){F(!0);var e="";switch(E){case"paris":e="&refine.ville=Paris";break;case"banlieue":e="&exclude.ville=Paris"}o.a.get("https://data.ratp.fr/api/records/1.0/search/?dataset=trafic-annuel-entrant-par-station-du-reseau-ferre-2020&q=&sort=".concat(M,"&rows=305&facet=reseau&facet=station&facet=ville&facet=arrondissement_pour_paris&refine.reseau=M%C3%A9tro").concat(e)).then((function(e){"null"===L&&D(e.data.nhits);var t=e.data.records;if(r){var c=t.filter((function(e){return e.fields.station.toLowerCase().includes(l.toLowerCase())}));C(c)}else console.log("plop"),C(t);console.log(p)})).catch((function(e){console.log(e)})).finally((function(){F(!1)}))};return Object(a.useEffect)((function(){W()}),[M,E,l]),Object(m.jsx)(j.a,{theme:d.theme,children:Object(m.jsxs)(u.b,{textAlign:"center",justify:"center",align:"center","min-h":"100vh",children:[Object(m.jsx)(S,{justifySelf:"flex-end"}),Object(m.jsxs)(u.b,{spacing:4,w:"lg",children:[Object(m.jsx)(b.a,{as:"h1",size:"2xl",isTruncated:!0,children:Object(m.jsxs)(u.a,{justify:"center",mb:8,children:[Object(m.jsx)(h.a,{color:"teal.500",children:"RATP"})," ",Object(m.jsx)(h.a,{children:"Metro Traffic"})]})}),Object(m.jsx)(B,{value:r,handleChange:function(e){return c(e.target.value)},onSubmitForm:function(e){F(!0),e.preventDefault(),x(r),W()}}),k?Object(m.jsx)(u.a,{justify:"center",children:Object(m.jsx)(f.a,{thickness:"4px",speed:"0.65s",emptyColor:"gray.200",color:"teal.500",size:"xl",align:"center"})}):Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(z,{totalStations:L,displayedStations:p.length,traficSort:M,areaSort:E}),Object(m.jsx)(R,{sortByTrafic:function(e){F(!0),I(e)},traficSort:M,areaSort:E,sortByArea:function(e){F(!0),J(e)},resetFilters:function(){F(!0),c(""),x(""),J("null"),I("-rang")}}),Object(m.jsx)(O.a,{}),Object(m.jsx)(T,{stationsData:p})]}),Object(m.jsx)(h.a,{fontSize:"xs",children:"By Robin Souriau"})]})]})})},N=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,150)).then((function(t){var r=t.getCLS,c=t.getFID,a=t.getFCP,n=t.getLCP,i=t.getTTFB;r(e),c(e),a(e),n(e),i(e)}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(Object(m.jsxs)(a.StrictMode,{children:[Object(m.jsx)(c.a,{}),Object(m.jsx)(D,{})]}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),N()}},[[117,1,2]]]);
//# sourceMappingURL=main.9b8f3917.chunk.js.map