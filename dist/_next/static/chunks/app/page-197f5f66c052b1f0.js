(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{5386:(e,t,r)=>{Promise.resolve().then(r.bind(r,5723))},5723:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>u});var a=r(5155),n=r(2115),i=r(3391);let d=i.wA.withTypes(),l=i.d4.withTypes();i.Pj.withTypes();var s=r(8744),c=r(8217);function u(){let e=d(),t=l(e=>e.counter.value),{items:r}=l(e=>e.data);return(0,n.useEffect)(()=>{e((0,s.F)())},[e]),(0,a.jsxs)("div",{children:[(0,a.jsx)("ul",{children:r.map(e=>(0,a.jsx)("li",{children:e.title},e.id))}),(0,a.jsxs)("h1",{children:["Count: ",t]}),(0,a.jsx)("button",{onClick:()=>e((0,c.GV)()),children:"Increment"})]})}},8217:(e,t,r)=>{"use strict";r.d(t,{Ay:()=>l,GV:()=>n});let a=(0,r(8943).Z0)({name:"counter",initialState:{value:0},reducers:{increment:e=>{e.value+=1},decrement:e=>{e.value-=1},incrementByAmount:(e,t)=>{e.value+=t.payload}}}),{increment:n,decrement:i,incrementByAmount:d}=a.actions,l=a.reducer},8744:(e,t,r)=>{"use strict";r.d(t,{A:()=>i,F:()=>n});var a=r(8943);let n=(0,a.zD)("data/fetchData",async()=>(await fetch("/portfolio.json")).json()),i=(0,a.Z0)({name:"data",initialState:{items:[],loading:!1,error:null},reducers:{},extraReducers:e=>{e.addCase(n.pending,e=>{e.loading=!0,e.error=null}).addCase(n.fulfilled,(e,t)=>{e.loading=!1,e.items=t.payload}).addCase(n.rejected,(e,t)=>{e.loading=!1,e.error=t.error.message||"Error fetching data"})}}).reducer}},e=>{var t=t=>e(e.s=t);e.O(0,[505,441,517,358],()=>t(5386)),_N_E=e.O()}]);