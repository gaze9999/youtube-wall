(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b20b35a4"],{"1e92":function(t,e,n){"use strict";var o=n("81a4"),a=n.n(o);a.a},"77b6":function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-scroll-y-transition",[n("v-col",{staticClass:"youtube_frame"},[n("v-hover",{attrs:{"close-delay":"400"},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.hover;return[n("div",{staticClass:"btn_cover",class:{active:o}},[n("v-hover",{attrs:{"close-delay":"400"},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.hover;return[n("div",{staticClass:"v_btn"},[n("v-btn",{style:"opacity: "+(o?1:.25),attrs:{icon:"",color:"white",small:""},on:{click:function(e){return e.stopPropagation(),t.remove(e)}}},[n("v-icon",[t._v("mdi-close-circle")])],1)],1)]}}],null,!0)}),n("v-hover",{attrs:{"close-delay":"400"},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.hover;return[n("div",{staticClass:"v_btn"},[t.vLinkLoop?t._e():n("v-btn",{style:"opacity: "+(o?.75:.25),attrs:{icon:"",color:"white",small:""},on:{click:function(e){return e.stopPropagation(),t.setLoop(e)}}},[n("v-icon",[t._v("mdi-sync")])],1),t.vLinkLoop?n("v-btn",{style:"opacity: 1",attrs:{icon:"",color:"white",small:""},on:{click:function(e){return e.stopPropagation(),t.setLoop(e)}}},[n("v-icon",[t._v("mdi-sync")])],1):t._e()],1)]}}],null,!0)})],1)]}}])}),n("youtube",{ref:"youtube",attrs:{id:"player-"+t.vLinkId,"video-id":t.videoLink.videoId,width:"100%",height:"100%"},on:{playing:t.playing,ended:t.ended}}),this.$store.state.appbar.controlbarStatus.chat?n("iframe",{staticClass:"youtube_chat",attrs:{id:"chat-"+t.vLinkId,src:t.vLinkChat,type:"text/html",allowfullscreen:"",dark_theme:"1"}}):t._e()],1)],1)},a=[],i=(n("99af"),n("a9e3"),{name:"g-video-frame",props:{videoLink:{index:Number,videoId:String,loop:Boolean},linkIndex:Number},data:function(){return{videoCount:this.$store.state.linkStore.videoStore.length,chatEmbed:"https://www.youtube.com/live_chat?embed=1&v=".concat(this.videoLink.videoId,"&embed_domain=").concat(window.location.hostname),chatStatus:this.$store.state.appbar.controlbarStatus.chat}},computed:{vLinkIndex:function(){return this.videoLink.index},vLinkId:function(){return this.videoLink.videoId},vLinkLoop:{get:function(){return this.videoLink.loop},set:function(t){this.$store.dispatch("linkStore/updateLoopStatus",t)}},vLinkChat:function(){return this.chatEmbed},player:function(){return this.$refs.youtube.player},playingStatus:function(){return this.$store.state.appbar.controlbarStatus.playing},mutedStatus:function(){return this.$store.state.appbar.controlbarStatus.muted}},mounted:function(){this.player.playVideo(),this.controlPlaying(),this.controlMuting()},watch:{playingStatus:function(){this.controlPlaying()},mutedStatus:function(){this.controlMuting()}},methods:{remove:function(){this.$store.commit("linkStore/removeLink",this.videoLink),localStorage.videoLocalStore=JSON.stringify(this.$store.state.linkStore.videoStore);var t={level:1,messange:"影片刪除"};this.$store.commit("messanges/bindMessange",t)},playing:function(){},ended:function(){this.vLinkLoop&&(this.player.seekTo("start"),this.player.playVideo())},controlPlaying:function(){this.playingStatus?(this.player.seekTo("end"),this.player.playVideo()):this.player.pauseVideo()},controlMuting:function(){this.mutedStatus?this.player.mute():this.player.unMute()},setLoop:function(){this.vLinkLoop=this.vLinkIndex,this.$log.debug("vIndex: ",this.vLinkIndex),this.$log.debug("vIndex: ",this.vLinkLoop)}}}),r=i,s=(n("1e92"),n("2877")),c=n("6544"),l=n.n(c),u=n("8336"),d=(n("4160"),n("caad"),n("13d5"),n("45fc"),n("4ec9"),n("b64b"),n("d3b7"),n("ac1f"),n("3ca3"),n("5319"),n("2ca0"),n("159b"),n("ddb0"),n("ade3")),v=n("5530"),f=(n("4b85"),n("2b0e")),h=n("d9f7"),p=n("80d2"),b=["sm","md","lg","xl"],y=function(){return b.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{})}(),m=function(){return b.reduce((function(t,e){return t["offset"+Object(p["t"])(e)]={type:[String,Number],default:null},t}),{})}(),g=function(){return b.reduce((function(t,e){return t["order"+Object(p["t"])(e)]={type:[String,Number],default:null},t}),{})}(),k={col:Object.keys(y),offset:Object.keys(m),order:Object.keys(g)};function S(t,e,n){var o=t;if(null!=n&&!1!==n){if(e){var a=e.replace(t,"");o+="-".concat(a)}return"col"!==t||""!==n&&!0!==n?(o+="-".concat(n),o.toLowerCase()):o.toLowerCase()}}var L=new Map,w=f["a"].extend({name:"v-col",functional:!0,props:Object(v["a"])(Object(v["a"])(Object(v["a"])(Object(v["a"])({cols:{type:[Boolean,String,Number],default:!1}},y),{},{offset:{type:[String,Number],default:null}},m),{},{order:{type:[String,Number],default:null}},g),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var n=e.props,o=e.data,a=e.children,i=(e.parent,"");for(var r in n)i+=String(n[r]);var s=L.get(i);return s||function(){var t,e;for(e in s=[],k)k[e].forEach((function(t){var o=n[t],a=S(e,t,o);a&&s.push(a)}));var o=s.some((function(t){return t.startsWith("col-")}));s.push((t={col:!o||!n.cols},Object(d["a"])(t,"col-".concat(n.cols),n.cols),Object(d["a"])(t,"offset-".concat(n.offset),n.offset),Object(d["a"])(t,"order-".concat(n.order),n.order),Object(d["a"])(t,"align-self-".concat(n.alignSelf),n.alignSelf),t)),L.set(i,s)}(),t(n.tag,Object(h["a"])(o,{class:s}),a)}}),_=n("16b7"),O=n("f2e7"),j=n("58df"),$=n("d9bd"),I=Object(j["a"])(_["a"],O["a"]).extend({name:"v-hover",props:{disabled:{type:Boolean,default:!1},value:{type:Boolean,default:void 0}},methods:{onMouseEnter:function(){this.runDelay("open")},onMouseLeave:function(){this.runDelay("close")}},render:function(){return this.$scopedSlots.default||void 0!==this.value?(this.$scopedSlots.default&&(t=this.$scopedSlots.default({hover:this.isActive})),Array.isArray(t)&&1===t.length&&(t=t[0]),t&&!Array.isArray(t)&&t.tag?(this.disabled||(t.data=t.data||{},this._g(t.data,{mouseenter:this.onMouseEnter,mouseleave:this.onMouseLeave})),t):(Object($["c"])("v-hover should only contain a single element",this),t)):(Object($["c"])("v-hover is missing a default scopedSlot or bound value",this),null);var t}}),x=n("132d"),C=n("0789"),M=Object(s["a"])(r,o,a,!1,null,"35004d10",null);e["default"]=M.exports;l()(M,{VBtn:u["a"],VCol:w,VHover:I,VIcon:x["a"],VScrollYTransition:C["d"]})},"81a4":function(t,e,n){}}]);
//# sourceMappingURL=chunk-b20b35a4.e86084fb.js.map