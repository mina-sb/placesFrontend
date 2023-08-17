import{r as a,u as j,a as m,j as e,R as g,E as C,L as I,P as w,d as y}from"./index-a3d35e26.js";const _=()=>{const[r,n]=a.useState(),{isLoading:i,error:p,sendRequest:c,clearError:d}=j(),[f,h]=a.useState({}),o=m().userId;a.useEffect(()=>{(async()=>{try{const s=await c(`http://localhost:5000/api/places/user/${o}`);n(s.places);let l;s.userImg?l=`http://localhost:5000/${s.userImg}`:l=y,h({name:s.name,image:l,placesCount:s.placesCount})}catch{}})()},[c,o]);const x=t=>{n(s=>s.filter(l=>l.id!==t))};return e.jsxs(g.Fragment,{children:[e.jsx(C,{error:p,onClear:d}),i&&e.jsx("div",{className:"center",children:e.jsx(I,{})}),!i&&r&&e.jsx(w,{items:r,creatorInfo:f,onDeletePlace:x})]})},P="_header_ovoqw_1",v="_profile_data_ovoqw_17",E="_profileImg_ovoqw_33",u={header:P,profile_data:v,profileImg:E},k=()=>e.jsxs("svg",{width:"100%",height:"100%",id:"svg",viewBox:"0 0 1440 390",xmlns:"http://www.w3.org/2000/svg",class:"transition duration-300 ease-in-out delay-150",children:[e.jsx("defs",{children:e.jsxs("linearGradient",{id:"gradient",x1:"0%",y1:"50%",x2:"100%",y2:"50%",children:[e.jsx("stop",{offset:"5%","stop-color":"#2de2eb"}),e.jsx("stop",{offset:"95%","stop-color":"#7484dc"})]})}),e.jsx("path",{d:"M 0,400 C 0,400 0,100 0,100 C 98.82296650717703,94.88038277511961 197.64593301435406,89.76076555023924 284,99 C 370.35406698564594,108.23923444976076 444.23923444976083,131.83732057416267 548,133 C 651.7607655502392,134.16267942583733 785.397129186603,112.88995215311006 900,100 C 1014.602870813397,87.11004784688994 1110.1722488038279,82.60287081339713 1197,84 C 1283.8277511961721,85.39712918660287 1361.9138755980862,92.69856459330143 1440,100 C 1440,100 1440,400 1440,400 Z",stroke:"none","stroke-width":"0",fill:"url(#gradient)","fill-opacity":"0.4",class:"transition-all duration-300 ease-in-out delay-150 path-0",transform:"rotate(-180 720 200)"}),e.jsx("defs",{children:e.jsxs("linearGradient",{id:"gradient",x1:"0%",y1:"50%",x2:"100%",y2:"50%",children:[e.jsx("stop",{offset:"5%","stop-color":"#2de2eb"}),e.jsx("stop",{offset:"95%","stop-color":"#7484dc"})]})}),e.jsx("path",{d:"M 0,400 C 0,400 0,200 0,200 C 67.79904306220095,220.21052631578948 135.5980861244019,240.42105263157893 235,235 C 334.4019138755981,229.57894736842107 465.4066985645934,198.5263157894737 571,198 C 676.5933014354066,197.4736842105263 756.7751196172248,227.4736842105263 854,233 C 951.2248803827752,238.5263157894737 1065.4928229665072,219.57894736842107 1166,210 C 1266.5071770334928,200.42105263157893 1353.2535885167463,200.21052631578948 1440,200 C 1440,200 1440,400 1440,400 Z",stroke:"none","stroke-width":"0",fill:"url(#gradient)","fill-opacity":"0.53",class:"transition-all duration-300 ease-in-out delay-150 path-1",transform:"rotate(-180 720 200)"}),e.jsx("defs",{children:e.jsxs("linearGradient",{id:"gradient",x1:"0%",y1:"50%",x2:"100%",y2:"50%",children:[e.jsx("stop",{offset:"5%","stop-color":"#2de2eb"}),e.jsx("stop",{offset:"95%","stop-color":"#7484dc"})]})}),e.jsx("path",{d:"M 0,400 C 0,400 0,300 0,300 C 87.03349282296651,299.3014354066986 174.06698564593302,298.60287081339715 283,309 C 391.933014354067,319.39712918660285 522.7655502392345,340.8899521531101 621,336 C 719.2344497607655,331.1100478468899 784.8708133971294,299.8373205741626 866,299 C 947.1291866028706,298.1626794258374 1043.7511961722487,327.7607655502393 1142,333 C 1240.2488038277513,338.2392344497607 1340.1244019138758,319.11961722488036 1440,300 C 1440,300 1440,400 1440,400 Z",stroke:"none","stroke-width":"0",fill:"url(#gradient)","fill-opacity":"1",class:"transition-all duration-300 ease-in-out delay-150 path-2",transform:"rotate(-180 720 200)"})]}),L=()=>{const r=m().userId,{isLoading:n,error:i,sendRequest:p,clearError:c}=j(),[d,f]=a.useState({}),[h,o]=a.useState("");a.useEffect(()=>{x()},[r]);const x=async()=>{let t;try{t=await p(`http://localhost:5000/api/users/${r}`),f(t),t.image?o(`http://localhost:5000/${t.image}`):o(y)}catch{}};return e.jsxs(g.Fragment,{children:[e.jsx(C,{error:i,onClear:c}),!n&&d&&e.jsxs("header",{className:u.header,children:[e.jsx(k,{}),e.jsxs("div",{className:u.profile_data,children:[e.jsx("img",{className:u.profileImg,src:h}),e.jsx("h3",{children:d.name})]})]})]})},q=()=>e.jsxs(g.Fragment,{children:[e.jsx(L,{}),e.jsx(_,{})]});export{q as default};