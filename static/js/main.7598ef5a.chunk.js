(this["webpackJsonpnogales-admin"]=this["webpackJsonpnogales-admin"]||[]).push([[0],{32:function(e,t,a){e.exports=a(64)},37:function(e,t,a){},42:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(13),s=a.n(r),o=(a(37),a(29)),l=a(7),c=a(14),d=a(15),m=a(17),u=a(16),p=a(18),g=a(8),h=a.n(g);a(26);function f(){return"undefined"!==typeof window.orientation||-1!==navigator.userAgent.indexOf("IEMobile")}var v=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).login=function(e){e.preventDefault();var t="Realizando Login ...";a.setState({fetching:!0,error:t}),h.a.auth().signInWithEmailAndPassword(a.state.email,a.state.password).then((function(e){a.props.history.push("/map")}),(function(e){t="auth/user-not-found"===e.code?"Usuario no encontrado":"Contrase\xf1a incorrecta",a.setState({fetching:!1,error:t})}))},h.a.apps.length||(a.app=h.a.initializeApp({apiKey:"AIzaSyBkRMV8HV4cazNztL2t5KAQ-QJKw1ch_Ug",authDomain:"nogalesapp-1.firebaseapp.com",databaseURL:"https://nogalesapp-1.firebaseio.com",projectId:"nogalesapp-1",storageBucket:"nogalesapp-1.appspot.com",messagingSenderId:"235008508187",appId:"1:235008508187:web:44833208e4bb535479d3be"})),a.state={fetching:!1,error:"",email:"",password:""},a}return Object(p.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement("div",{className:"navbar navbar-dark bg-dark",style:{display:"flex",justifyContent:f()?"":"center",paddingTop:20,paddingBottom:20}},i.a.createElement("img",{src:window.location.origin+"/admin-app/assets/Nogales.png",height:f()?30:"100%",className:"img-responsive",alt:"Logo"})),i.a.createElement("div",{className:"mt-3 pt-3",style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}},i.a.createElement("b",{className:"mb-4"},"Para ingresar al sistema, inicie sesi\xf3n."),i.a.createElement("hr",null),i.a.createElement("form",{onSubmit:this.login,style:{width:"50%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}},i.a.createElement("div",{className:"form-group",style:{width:"100%"}},i.a.createElement("input",{value:this.state.email,onChange:function(t){return e.setState({email:t.target.value})},type:"email",className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Ingrese correo electr\xf3nico",required:!0})),i.a.createElement("div",{className:"form-group",style:{width:"100%"}},i.a.createElement("input",{value:this.state.password,onChange:function(t){return e.setState({password:t.target.value})},type:"password",className:"form-control",id:"exampleInputPassword1",placeholder:"Contrase\xf1a",required:!0})),i.a.createElement("button",{onClick:this.login,type:"submit",className:"btn btn-secondary btn-lg btn-block"},"Ingresar"),i.a.createElement("p",{className:"mt-3",style:{alignSelf:"flex-end",color:this.state.fetching?"black":"red"}},this.state.error))))}}]),t}(n.Component),b=(a(42),a(43),a(10)),y=function(e){function t(e){var a;Object(c.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).displayMarkers=function(){return a.state.stores.map((function(e,t){return i.a.createElement(b.Marker,{key:t,id:t,title:"Hi",name:e.time,position:{lat:e.latitude,lng:e.longitude},onClick:a.onMarkerClick})}))},a.onMarkerClick=function(e,t,n){return a.setState({selectedPlace:e,activeMarker:t,showingInfoWindow:!0})},a.firestore=null;var n=new Date;n.setHours(0,0,0),a.beginningDateObject=n;try{h.a.auth().currentUser||a.props.replace("/",""),a.firestore=h.a.firestore()}catch(r){a.props.history.replace("/","")}return a.state={stores:[],locations:[],selectedBusId:-1,buses:[{id:"Cp3arit19GVGsKMVhxew",name:"Bus 1"},{id:"PcSUAY7w4p3nXfP9MLyf",name:"Bus 2"},{id:"ql9zKGWuOZtCRJncfaIL",name:"Bus 3"},{id:"Bustest",name:"test"}],selectedPlace:"",activeMarker:null,showingInfoWindow:!1,distance:"--",selectedBus:null},a}return Object(p.a)(t,e),Object(d.a)(t,[{key:"deleteOldDates",value:function(e){var t=this.firestore.batch();this.firestore.collection("server").doc(e.id).collection("tracking").where("CreatedAt","<=",this.beginningDateObject).orderBy("CreatedAt").get().then((function(e){e.forEach((function(e){t.delete(e.ref)})),t.commit().then((function(e){}))}))}},{key:"getMarkers",value:function(e){var t=this;this.setState({selectedBusId:e.id});var a=[],n=new window.google.maps.LatLngBounds,i=[];this.deleteOldDates(e);var r=0;this.firestore.collection("server").doc(e.id).collection("tracking").where("CreatedAt",">",this.beginningDateObject).orderBy("CreatedAt").get().then((function(e){e.forEach((function(e){r+=.025;var t=e.data(),s=new Date(0);s.setUTCSeconds(t.CreatedAt.seconds);var o="".concat(s.getHours(),":").concat(s.getMinutes());a.push({latitude:t.latitud,longitude:t.longitud,time:o}),n.extend(new window.google.maps.LatLng(t.latitud,t.longitud)),i.push({lat:t.latitud,lng:t.longitud})})),t.setState({stores:a,locations:i,distance:r.toString()},(function(){}))}))}},{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement("div",{className:"navbar navbar-dark bg-dark",style:{display:"flex",paddingTop:20,alignItems:"center",paddingBottom:20}},i.a.createElement("img",{src:"/admin-app/assets/Nogales.png",height:f()?30:"100%",alt:"Logo"}),i.a.createElement("div",{onClick:function(){h.a.auth().signOut().then((function(){e.props.history.replace("/","")}))},className:"btn btn-outline-success my-2 my-sm-0"},"Salir")),i.a.createElement("div",{className:"container mt-3"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-md-3"},i.a.createElement("div",{className:"card p-3"},i.a.createElement("h4",{className:"mb-3"},"Camiones de basura"),i.a.createElement("br",null),i.a.createElement("h2",null,"Reporte del d\xeda"),i.a.createElement("div",{className:"list-group"},this.state.buses.map((function(t){return i.a.createElement("div",{className:t.id===e.state.selectedBusId?"list-group-item active":"list-group-item",style:{cursor:"pointer"},onClick:function(){return e.getMarkers(t)},class:"list-group-item list-group-item-action"},t.name)}))),i.a.createElement("div",{className:"mt-3 p-3 card"},i.a.createElement("strong",{className:"text-center"},"Distancia recorrida"),i.a.createElement("strong",{className:"mt-3 text-center"},this.state.distance," KM")))),i.a.createElement("div",{className:"col-md-9"},i.a.createElement(b.Map,{google:this.props.google,zoom:14,style:{width:"100%",height:500,overFlow:"hidden",marginRight:0},ref:function(t){return e.map=t},initialCenter:{lat:18.8157483,lng:-97.1640488}},this.displayMarkers(),i.a.createElement(b.InfoWindow,{marker:this.state.activeMarker,visible:this.state.showingInfoWindow},i.a.createElement("div",null,i.a.createElement("p",null,this.state.selectedPlace.name))),this.state.locations?i.a.createElement(b.Polyline,{path:this.state.locations,strokeColor:"#0000FF",strokeOpacity:.8,strokeWeight:2}):null)))))}}]),t}(n.Component);y=Object(b.GoogleApiWrapper)({apiKey:"AIzaSyCls2n588WAf6AHLWYU69MKcPWKYrMfJcI",language:"ES"})(y);var E=i.a.createElement(o.a,{basename:"/"},i.a.createElement(l.c,null,i.a.createElement(l.a,{exact:!0,path:"/",component:v}),i.a.createElement(l.a,{path:"/map",component:y})));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(E,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[32,1,2]]]);
//# sourceMappingURL=main.7598ef5a.chunk.js.map