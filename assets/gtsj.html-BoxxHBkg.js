import{_ as j,c,g as p,h as d,u,j as m,v,b as n,o as i,F as k,r as x,d as y,f as S}from"./app-CYkl2hCf.js";import{h as T}from"./artConst-Ca7o9eri.js";import"./artplayer-5lU95gBm.js";const C={__name:"gtsj.html",setup(g,{expose:a}){a();const e=u("vod-gtsj",{src:"",a:[],p:[]});m(async()=>{e.value.vodsn=(await v.find({name:"snzy-56"})).data,t(0)});const t=l=>{const{a:o}=e.value;e.value.p=o,e.value.src=o[l].url},r={state:e,a:t,get vod(){return v},get hlsConfig(){return T},get useStorage(){return u},onMounted:m};return Object.defineProperty(r,"__isScriptSetup",{enumerable:!1,value:!0}),r}};function V(g,a,e,t,r,l){const o=n("ArtPlayer"),_=n("SiteInfo"),f=n("Tabs");return i(),c("div",null,[p(o,{src:t.state.src,config:t.hlsConfig(t.state.p)},null,8,["src","config"]),p(f,{id:"2",data:[{id:"vod-gtsj-a"}],active:0,"tab-id":"vod-gtsj"},{title0:d(({value:h,isActive:b})=>a[0]||(a[0]=[S("索尼资源")])),tab0:d(({value:h,isActive:b})=>[(i(!0),c(k,null,x(t.state.a,(s,w)=>(i(),y(_,{name:s.vod_name,desc:"",logo:s.vod_pic,preview:s.vod_pic,url:"",onClick:P=>t.a(w)},null,8,["name","logo","preview","onClick"]))),256))]),_:1})])}const N=j(C,[["render",V],["__file","gtsj.html.vue"]]),z=JSON.parse('{"path":"/private/lunli/gtsj.html","title":"港台三级🔞🈲","lang":"zh-CN","frontmatter":{"title":"港台三级🔞🈲","icon":"person-falling-burst","date":"2020-01-01T00:00:00.000Z","order":4,"category":["影视点播"],"tag":["港台三级"],"feed":false,"seo":false,"head":[["link",{"rel":"alternate","type":"application/atom+xml","href":"https://www.viptv.work/atom.xml","title":"VIPTV - 工作室 Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://www.viptv.work/feed.json","title":"VIPTV - 工作室 JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://www.viptv.work/rss.xml","title":"VIPTV - 工作室 RSS Feed"}]]},"headers":[],"git":{"createdTime":1740327977000,"updatedTime":1740327977000,"contributors":[{"name":"github-actions[bot]","username":"github-actions[bot]","email":"28900094+github-actions[bot]@users.noreply.github.com","commits":1,"url":"https://github.com/github-actions[bot]"}]},"readingTime":{"minutes":0.38,"words":113},"filePathRelative":"private/lunli/gtsj.md","localizedDate":"2020年1月1日"}');export{N as comp,z as data};
