import{r as m,A as x,u as v,b as f,j as e,R as h,E as j,L as I,B as g}from"./index-9e2cd7ad.js";import{u as E,I as r}from"./form-hook-ddbccdb0.js";/* empty css                  */import{I as y}from"./ImageUpload-ebd61f6c.js";const w=()=>{const i=m.useContext(x),{isLoading:l,error:n,sendRequest:o,clearError:d}=v(),[t,s]=E({title:{value:"",isValid:!1},description:{value:"",isValid:!1},address:{value:"",isValid:!1},image:{value:null,isValid:!1}},!1),p=f(),c=async u=>{u.preventDefault();try{const a=new FormData;a.append("title",t.inputs.title.value),a.append("description",t.inputs.description.value),a.append("address",t.inputs.address.value),a.append("image",t.inputs.image.value),await o("https://extinct-sweatsuit-cow.cyclic.cloud/api/places","POST",a,{Authorization:"Bearer "+i.token}),p("/")}catch{}};return e.jsxs(h.Fragment,{children:[e.jsx(j,{error:n,onClear:d}),e.jsxs("form",{className:"place-form",onSubmit:c,children:[l&&e.jsx(I,{asOverlay:!0}),e.jsx("h3",{children:"Add a place"}),e.jsx(r,{id:"title",type:"text",placeholder:"Title",errorText:"Please enter a valid title.",validators:["REQUIRED","MIN(5)"],onInput:s}),e.jsx(r,{id:"address",type:"text",placeholder:"Address",validators:["REQUIRED","MIN(5)"],errorText:"Please enter a valid address.",onInput:s}),e.jsx(r,{id:"description",type:"textarea",placeholder:"Description",rows:"6",validators:[],errorText:"Please enter a valid description (at least 5 characters).",onInput:s}),e.jsx(y,{id:"image",onInput:s,errorText:"Please provide an image."}),e.jsx(g,{type:"submit",disabled:!t.isValid,children:"ADD PLACE"})]})]})};export{w as default};