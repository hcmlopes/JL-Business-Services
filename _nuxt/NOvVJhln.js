import{aU as F,d as ie,a$ as G,aI as ae,b0 as ne,b1 as se,ba as te,bb as le,A as _,r as re,o as oe,i as l,G as g,w as ue,e as ge,aA as $,E as a,V as m,c as M,n as o,H as N,bc as ce,f as c,av as de,aV as pe,b3 as be}from"./CdogYkps.js";const me={slots:{root:"relative inline-flex items-center",base:["w-full rounded-[calc(var(--ui-radius)*1.5)] border-0 placeholder:text-(--ui-text-dimmed) focus:outline-none disabled:cursor-not-allowed disabled:opacity-75","transition-colors"],leading:"absolute inset-y-0 start-0 flex items-center",leadingIcon:"shrink-0 text-(--ui-text-dimmed)",leadingAvatar:"shrink-0",leadingAvatarSize:"",trailing:"absolute inset-y-0 end-0 flex items-center",trailingIcon:"shrink-0 text-(--ui-text-dimmed)"},variants:{buttonGroup:{horizontal:{root:"group",base:"group-not-only:group-first:rounded-e-none group-not-only:group-last:rounded-s-none group-not-last:group-not-first:rounded-none"},vertical:{root:"group",base:"group-not-only:group-first:rounded-b-none group-not-only:group-last:rounded-t-none group-not-last:group-not-first:rounded-none"}},size:{xs:{base:"px-2 py-1 text-xs gap-1",leading:"ps-2",trailing:"pe-2",leadingIcon:"size-4",leadingAvatarSize:"3xs",trailingIcon:"size-4"},sm:{base:"px-2.5 py-1.5 text-xs gap-1.5",leading:"ps-2.5",trailing:"pe-2.5",leadingIcon:"size-4",leadingAvatarSize:"3xs",trailingIcon:"size-4"},md:{base:"px-2.5 py-1.5 text-sm gap-1.5",leading:"ps-2.5",trailing:"pe-2.5",leadingIcon:"size-5",leadingAvatarSize:"2xs",trailingIcon:"size-5"},lg:{base:"px-3 py-2 text-sm gap-2",leading:"ps-3",trailing:"pe-3",leadingIcon:"size-5",leadingAvatarSize:"2xs",trailingIcon:"size-5"},xl:{base:"px-3 py-2 text-base gap-2",leading:"ps-3",trailing:"pe-3",leadingIcon:"size-6",leadingAvatarSize:"xs",trailingIcon:"size-6"}},variant:{outline:"text-(--ui-text-highlighted) bg-(--ui-bg) ring ring-inset ring-(--ui-border-accented)",soft:"text-(--ui-text-highlighted) bg-(--ui-bg-elevated)/50 hover:bg-(--ui-bg-elevated) focus:bg-(--ui-bg-elevated) disabled:bg-(--ui-bg-elevated)/50",subtle:"text-(--ui-text-highlighted) bg-(--ui-bg-elevated) ring ring-inset ring-(--ui-border-accented)",ghost:"text-(--ui-text-highlighted) bg-transparent hover:bg-(--ui-bg-elevated) focus:bg-(--ui-bg-elevated) disabled:bg-transparent dark:disabled:bg-transparent",none:"text-(--ui-text-highlighted) bg-transparent"},color:{primary:"",secondary:"",success:"",info:"",warning:"",error:"",neutral:""},leading:{true:""},trailing:{true:""},loading:{true:""},highlight:{true:""},type:{file:"file:me-1.5 file:font-medium file:text-(--ui-text-muted) file:outline-none"}},compoundVariants:[{color:"primary",variant:["outline","subtle"],class:"focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-(--ui-primary)"},{color:"secondary",variant:["outline","subtle"],class:"focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-(--ui-secondary)"},{color:"success",variant:["outline","subtle"],class:"focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-(--ui-success)"},{color:"info",variant:["outline","subtle"],class:"focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-(--ui-info)"},{color:"warning",variant:["outline","subtle"],class:"focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-(--ui-warning)"},{color:"error",variant:["outline","subtle"],class:"focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-(--ui-error)"},{color:"primary",highlight:!0,class:"ring ring-inset ring-(--ui-primary)"},{color:"secondary",highlight:!0,class:"ring ring-inset ring-(--ui-secondary)"},{color:"success",highlight:!0,class:"ring ring-inset ring-(--ui-success)"},{color:"info",highlight:!0,class:"ring ring-inset ring-(--ui-info)"},{color:"warning",highlight:!0,class:"ring ring-inset ring-(--ui-warning)"},{color:"error",highlight:!0,class:"ring ring-inset ring-(--ui-error)"},{color:"neutral",variant:["outline","subtle"],class:"focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-(--ui-border-inverted)"},{color:"neutral",highlight:!0,class:"ring ring-inset ring-(--ui-border-inverted)"},{leading:!0,size:"xs",class:"ps-7"},{leading:!0,size:"sm",class:"ps-8"},{leading:!0,size:"md",class:"ps-9"},{leading:!0,size:"lg",class:"ps-10"},{leading:!0,size:"xl",class:"ps-11"},{trailing:!0,size:"xs",class:"pe-7"},{trailing:!0,size:"sm",class:"pe-8"},{trailing:!0,size:"md",class:"pe-9"},{trailing:!0,size:"lg",class:"pe-10"},{trailing:!0,size:"xl",class:"pe-11"},{loading:!0,leading:!0,class:{leadingIcon:"animate-spin"}},{loading:!0,leading:!1,trailing:!0,class:{trailingIcon:"animate-spin"}}],defaultVariants:{size:"md",color:"primary",variant:"outline"}},fe=["id","type","value","name","placeholder","disabled","required","autocomplete"],ve=pe;var q;const he=F({extend:F(me),...((q=ve.ui)==null?void 0:q.input)||{}}),ye=ie({inheritAttrs:!1,__name:"Input",props:G({as:{},id:{},name:{},type:{default:"text"},placeholder:{},color:{},variant:{},size:{},required:{type:Boolean},autocomplete:{default:"off"},autofocus:{type:Boolean},autofocusDelay:{default:0},disabled:{type:Boolean},highlight:{type:Boolean},class:{},ui:{},icon:{},avatar:{},leading:{type:Boolean},leadingIcon:{},trailing:{type:Boolean},trailingIcon:{},loading:{type:Boolean},loadingIcon:{}},{modelValue:{},modelModifiers:{}}),emits:G(["update:modelValue","blur","change"],["update:modelValue"]),setup(f,{expose:T,emit:U}){const i=f,v=U,u=ae(),[h,t]=ne(f,"modelValue"),{emitFormBlur:D,emitFormInput:E,emitFormChange:P,size:R,color:j,id:H,name:L,highlight:O,disabled:J,emitFormFocus:y,ariaAttrs:K}=se(i,{deferInputValidation:!0}),{orientation:Q,size:W}=te(i),{isLeading:d,isTrailing:z,leadingIconName:x,trailingIconName:I}=le(i),p=_(()=>W.value||R.value),n=_(()=>he({type:i.type,color:j.value,variant:i.variant,size:p==null?void 0:p.value,loading:i.loading,highlight:O.value,leading:d.value||!!i.avatar||!!u.leading,trailing:z.value||!!u.trailing,buttonGroup:Q.value})),b=re(null);function X(){var e;i.autofocus&&((e=b.value)==null||e.focus())}function A(e){t.trim&&(e=(e==null?void 0:e.trim())??null),(t.number||i.type==="number")&&(e=be(e)),t.nullify&&(e||(e=null)),h.value=e,E()}function Y(e){t.lazy||A(e.target.value)}function Z(e){const r=e.target.value;t.lazy&&A(r),t.trim&&(e.target.value=r.trim()),P(),v("change",e)}function ee(e){D(),v("blur",e)}return T({inputRef:b}),oe(()=>{setTimeout(()=>{X()},i.autofocusDelay)}),(e,r)=>{var B;return l(),g(a(de),{as:e.as,class:o(n.value.root({class:[i.class,(B=i.ui)==null?void 0:B.root]}))},{default:ue(()=>{var k,V,S;return[ge("input",$({id:a(H),ref_key:"inputRef",ref:b,type:e.type,value:a(h),name:a(L),placeholder:e.placeholder,class:n.value.base({class:(k=i.ui)==null?void 0:k.base}),disabled:a(J),required:e.required,autocomplete:e.autocomplete},{...e.$attrs,...a(K)},{onInput:Y,onBlur:ee,onChange:Z,onFocus:r[0]||(r[0]=(...s)=>a(y)&&a(y)(...s))}),null,16,fe),m(e.$slots,"default"),a(d)||e.avatar||u.leading?(l(),M("span",{key:0,class:o(n.value.leading({class:(V=i.ui)==null?void 0:V.leading}))},[m(e.$slots,"leading",{},()=>{var s,w,C;return[a(d)&&a(x)?(l(),g(N,{key:0,name:a(x),class:o(n.value.leadingIcon({class:(s=i.ui)==null?void 0:s.leadingIcon}))},null,8,["name","class"])):e.avatar?(l(),g(ce,$({key:1,size:((w=i.ui)==null?void 0:w.leadingAvatarSize)||n.value.leadingAvatarSize()},e.avatar,{class:n.value.leadingAvatar({class:(C=i.ui)==null?void 0:C.leadingAvatar})}),null,16,["size","class"])):c("",!0)]})],2)):c("",!0),a(z)||u.trailing?(l(),M("span",{key:1,class:o(n.value.trailing({class:(S=i.ui)==null?void 0:S.trailing}))},[m(e.$slots,"trailing",{},()=>{var s;return[a(I)?(l(),g(N,{key:0,name:a(I),class:o(n.value.trailingIcon({class:(s=i.ui)==null?void 0:s.trailingIcon}))},null,8,["name","class"])):c("",!0)]})],2)):c("",!0)]}),_:3},8,["as","class"])}}}),xe=Object.assign(ye,{__name:"UInput"});export{xe as _};
