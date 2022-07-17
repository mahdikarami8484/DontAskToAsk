"use strict";(self["webpackChunkdontasktoask"]=self["webpackChunkdontasktoask"]||[]).push([[64],{9585:function(n,t,e){var l=e(9242),o=e(3396);function i(n,t,e,l,i,r){const a=(0,o.up)("HeaderSection"),c=(0,o.up)("router-view"),s=(0,o.up)("FooterSection");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(a),(0,o.Wm)(c),(0,o.Wm)(s)],64)}var r=e(7139);const a={id:"header"},c={class:"holder"},s=(0,o._)("i",{class:"icon-life-buoy"},null,-1),u=["onClick"],h=(0,o._)("i",{class:"icon-sun"},null,-1),m=[h];function _(n,t,e,l,i,h){const _=(0,o.up)("routerLink");return(0,o.wg)(),(0,o.iD)("header",a,[(0,o._)("div",c,[(0,o.Wm)(_,{to:"",style:(0,r.j5)("color: "+n.$route.meta.accent)},{default:(0,o.w5)((()=>[s,(0,o._)("h1",null,(0,r.zw)(n.$route.meta.title),1)])),_:1},8,["style"]),t[0]||((0,o.qZ)(-1),t[0]=(0,o._)("ul",null,[(0,o._)("li",{title:"حالت تیره/روشن",onClick:n=>h.ToggleMode(),id:"toggle-mode"},m,8,u)]),(0,o.qZ)(1),t[0])])])}var g={name:"HeaderSection",methods:{ToggleMode(){document.body.classList.contains("dark")?this.SetMode("light"):this.SetMode("dark")},SetMode(n,t=!0){"dark"===n?(document.body.classList.remove("light"),document.body.classList.add("dark"),document.querySelector("#toggle-mode i").className="icon-moon"):(document.body.classList.remove("dark"),document.body.classList.add("light"),document.querySelector("#toggle-mode i").className="icon-sun"),t&&localStorage.setItem("mode",n),document.cookie=`mode=${n}; expires=Thu, 1 Jan 2048 12:00:00 UTC; path=/`}},created(){window.addEventListener("storage",(n=>{"mode"===n.key&&this.SetMode(n.newValue,!1)}))},mounted(){this.SetMode(`; ${document.cookie}`.split("; mode=").pop().split(";").shift(),!1)}},d=e(89);const k=(0,d.Z)(g,[["render",_]]);var p=k;const w=n=>((0,o.dD)("data-v-cdcfea12"),n=n(),(0,o.Cn)(),n),U={class:"section-footer holder"},v=w((()=>(0,o._)("hr",null,null,-1))),f=w((()=>(0,o._)("header",null,[(0,o._)("i",{class:"icon-life-buoy"}),(0,o._)("h2",null,"صفحات مرتبط")],-1))),b={class:"section-footer holder"},W=w((()=>(0,o._)("hr",null,null,-1))),D=w((()=>(0,o._)("header",null,[(0,o._)("i",{class:"icon-figma"}),(0,o._)("h2",null,"سایر پروژه‌ها")],-1))),S={key:0,id:"shimmer-developix-projects-list"},y=(0,o.uE)('<li class="shimmer" data-v-cdcfea12></li><li class="shimmer" data-v-cdcfea12></li><li class="shimmer" data-v-cdcfea12></li><li class="shimmer" data-v-cdcfea12></li><li class="shimmer" data-v-cdcfea12></li><li class="shimmer" data-v-cdcfea12></li>',6),x=[y],C={key:1},j=["href"],P=w((()=>(0,o._)("hr",null,null,-1))),B=w((()=>(0,o._)("div",{class:"holder"},[(0,o._)("a",{href:"https://github.com/erfanmola/DontAskToAsk",target:"_blank",rel:"noopener",title:"Github"},"مشارکت در توسعه پروژه"),(0,o._)("a",{href:"https://Developix.ir",target:"_blank",title:"Developix",rel:"noopener"},[(0,o._)("i",{class:"icon-DP"})])],-1)));function F(n,t,e,l,i,a){const c=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o._)("section",U,[v,f,(0,o._)("ul",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.RelatedPages,((n,t)=>((0,o.wg)(),(0,o.iD)("li",{key:t,style:(0,r.j5)("background:"+n.meta.gradient)},[(0,o.Wm)(c,{to:n.path},{default:(0,o.w5)((()=>[(0,o.Uk)((0,r.zw)(n.meta.title),1)])),_:2},1032,["to"])],4)))),128))])]),(0,o._)("section",b,[W,D,null===i.DevelopixProjectsList?((0,o.wg)(),(0,o.iD)("ul",S,x)):((0,o.wg)(),(0,o.iD)("ul",C,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.DevelopixActiveProjectsList,((n,t)=>((0,o.wg)(),(0,o.iD)("li",{key:t,style:(0,r.j5)("background: linear-gradient(215deg, "+n.colors[1]+" 0%, "+n.colors[0]+" 100%);")},[(0,o._)("a",{rel:"noopener",target:"_blank",href:n.link},(0,r.zw)(n.title),9,j)],4)))),128))])),P]),t[0]||((0,o.qZ)(-1),t[0]=(0,o._)("footer",{id:"footer"},[B]),(0,o.qZ)(1),t[0])])}var A={name:"FooterSection",computed:{RelatedPages:function(){return this.$router.options.routes.filter((n=>"component"in n&&this.$route.name!==n.name))},DevelopixActiveProjectsList:function(){return Object.fromEntries(Object.entries(this.DevelopixProjectsList).filter((n=>n[1].status&&n[0]!==this.DevelopixProjectsContext)))}},data(){return{DevelopixProjectsList:null,DevelopixProjectsContext:"dontasktoask"}},methods:{async FetchDevelopixProjectsList(){let n=await fetch("https://developix-ir.github.io/Developix/DevelopixProjects.json");try{let t=await n.json();return t}catch(t){return null}}},async mounted(){this.DevelopixProjectsList=await this.FetchDevelopixProjectsList()}};const L=(0,d.Z)(A,[["render",F],["__scopeId","data-v-cdcfea12"]]);var Z=L,T={name:"DontAskToAsk",components:{HeaderSection:p,FooterSection:Z}};const N=(0,d.Z)(T,[["render",i]]);var $=N,H=e(678);const Y={id:"section-home",class:"section-main"},q={class:"holder"},E=(0,o._)("p",null,"یکی از مشکلاتی که در انجمن‌ها یا گروه‌های پرسش و پاسخ با اون مواجه هستیم، پرسیدن سوال ناقص یا نامناسب هست که در نهایت به جواب اصولی هم ختم نمیشه و تنها اثر اون تلف شدن وقت پرسشگر و پاسخگو هست، از اونجایی که پرسیدن سوال صحیح نصف مسیر رسیدن به جواب صحیح رو تشکیل میده، سعی کنیم با پرسیدن سوال مناسب سریع‌تر به جواب برسیم و اتلاف وقت خودمون و دیگران رو به حداقل برسونیم",-1),M={class:"scenario scenario-wrong"},O=(0,o._)("h2",null,[(0,o._)("i",{class:"icon-x"}),(0,o.Uk)("چیزی که شما می‌پرسید")],-1),z=(0,o._)("hr",null,null,-1),I=(0,o.Uk)("ببخشید، کسی اینجا متخصص جاوا هست؟"),V=(0,o._)("hr",null,null,-1),X=(0,o.Uk)("کی اینجا گسسته بلده؟"),G=(0,o._)("hr",null,null,-1),J=(0,o.Uk)("چرا کدی که نوشتم کار نمی‌کنه؟"),K=(0,o._)("hr",null,null,-1),R=(0,o.Uk)("می‌تونم یک سوال برنامه‌نویسی بپرسم؟"),Q=(0,o._)("p",null,[(0,o.Uk)("در چنین نوع پرسش هایی به دلایل زیادی، "),(0,o._)("b",null,"افرادی که دانش کافی برای راهنمایی دارند هم برای پاسخگویی مشارکت نمی‌کنند"),(0,o.Uk)("، چون شما دارید چیزی می‌خواهید که بیشتر از اون چیزی هست که فکر می‌کنید")],-1),nn={class:"scenario scenario-wrong"},tn=(0,o._)("h2",null,[(0,o._)("i",{class:"icon-x"}),(0,o.Uk)("چیزی که شما می‌خواهید")],-1),en=(0,o._)("hr",null,null,-1),ln=(0,o.Uk)("ببخشید کسی اینجا متخصص جاوا هست که تمایل داشته باشه توی دونستن و تلاش برای رفع مشکل یا سوال من مشارکت کنه؟ هر اتفاقی هم که می‌خواد بیوفته مهم نیست و شاید هم حتی سوال من واقعا مرتبط با جاوا نباشه ولی خب از اونجایی که خودم تشخیص دادم که به جاوا ربط داره باید دنبال یک جاوا کار کاملا متخصص بگردم که بیاد به‌صورت رایگان وقت بزاره و سوال من رو جواب بده، بازم تاکید می‌کنم که طرف باید متخصص جاوا باشه و اگه متخصص نباشه و با این حال جواب سوال من رو بلد باشه من نمی‌خوام که جواب بده و دقیقا باید متخصص باشه"),on=(0,o._)("hr",null,null,-1),rn=(0,o.Uk)("کی اینجا هست که گسسته بلد باشه و بیکار و الاف باشه تا بیاد و به پیام من پاسخ بده و بگه که : آره آقا من گسسته بلدم و می‌خوام تورو راهنمایی کنم هر سوالی داری بپرس، هرگونه سوالی از گسسته داشته باشی من می‌تونم جواب بدم چون که من خدای رشته گسسته هستم و مطمئنا هرگونه سوالی در این زمینه داشته باشی من می‌تونم جواب بدم بدون اینکه اصلا بدونم سوالت چی هست"),an=(0,o._)("hr",null,null,-1),cn=(0,o.Uk)("من یک کدی نوشتم و در خیالم انتظار دارم که فلان کار رو انجام بده، برای همین کد ناقص خودم رو برای شما می‌فرستم و انتظار دارم که بدون اینکه بدونید که من انتظار دارم که کد من چیکار کنه، شما حدس بزنید و مشکلش رو برای من پیدا کنید و بگید"),sn=(0,o._)("hr",null,null,-1),un=(0,o.Uk)("من در دریا هستم و وسط دریا داد می‌زنم و می‌پرسم که آیا می‌تونم شنا کنم یا نه"),hn=(0,o._)("p",null,[(0,o.Uk)("در سوالات بالا یا موارد مشابه، شما دارید روی دوش بقیه مسئولیت قرار می‌دهید و اعتماد به‌نفس و توانایی‌های بقیه رو زیر سوال می‌برید و دایره افرادی که می‌تونند به سوال شما پاسخ بدهند رو کوچک‌تر می‌کنید، شما بدون اینکه سوال واقعی خودتون رو بپرسید، دارید مقدمه‌چینی می‌کنید تا ببینید که اصلا می‌ارزه که سوالتون رو بپرسید یا نه"),(0,o._)("br"),(0,o._)("br"),(0,o.Uk)("بخش آزاردهنده ماجرا اینجاست که "),(0,o._)("b",null,"وقتی شما خودتون به‌قدری حوصله ندارید که برای توضیح مشکل یا سوالتون وقت بگذارید، چرا انتظار دارید یکی برای کمک به شما حوصله کنه و به‌صورت رایگان وقت بگذاره؟"),(0,o.Uk)(" در چنین شرایطی می‌تونید به‌دنبال یک منتور باشید تا در ازای پرداخت هزینه بهتون دائما راهنمایی ارائه کنه")],-1),mn={class:"scenario scenario-correct"},_n=(0,o._)("h2",null,[(0,o._)("i",{class:"icon-check"}),(0,o.Uk)("چیزی که شما باید بپرسید")],-1),gn=(0,o._)("hr",null,null,-1),dn=(0,o.Uk)("سلام، من می‌خواهم در زبان جاوا فلان کار را انجام دهم، برای انجام اینکار باید چه مواردی رو یاد بگیرم و مطالعه کنم؟"),kn=(0,o._)("hr",null,null,-1),pn=(0,o.Uk)("سلام، من در درس گسسته مقطع فلان و رشته بهمان، در بخش فلان مشکل بهمان را دارم،‌ کسی می‌تونه راهنمایی کنه که چطور می‌تونم حل کنم؟"),wn=(0,o._)("hr",null,null,-1),Un=(0,o.Uk)("سلام، من می‌خواهم فلان کار را در پلتفرم بهمان و زبان فلان انجام دهم، این کدی هست که من نوشته‌ام و این خروجی هست که من می‌گیرم، می‌خواهم خروجی فلان را بگیرم، کدم را باید به چه صورتی تغییر بدهم تا نتیجه فوق برسم؟"),vn=(0,o._)("hr",null,null,-1),fn=(0,o.Uk)("سلام، من در حوزه فلان برنامه‌نویسی مشکل بهمان را دارم، آیا کسی می‌تونه راهنمایی کنه تا مشکلم رو حل کنم؟"),bn=(0,o._)("hr",null,null,-1),Wn=(0,o.Uk)("سلام وقت‌بخیر، یک سوال درمورد فلان داشتم"),Dn=(0,o._)("br",null,null,-1),Sn=(0,o.Uk)("مشکلی که دارم فلان هست"),yn=(0,o._)("br",null,null,-1),xn=(0,o.Uk)("فلان کارها رو انجام دادم"),Cn=(0,o._)("br",null,null,-1),jn=(0,o.Uk)("فلان نتیجه رو گرفتم"),Pn=(0,o._)("br",null,null,-1),Bn=(0,o.Uk)("می‌خواهم فلان نتیجه رو بگیرم"),Fn=(0,o._)("br",null,null,-1),An=(0,o.Uk)("ممنون میشم اگر کسی وقت داشت راهنمایی کنه"),Ln=(0,o._)("p",null,[(0,o.Uk)("لطفا این رو هم مد نظر داشته باشید که قبل از پرسیدن سوال، حتما توی گوگل به‌دنبال مشکلتون بگردید چون به احتمال خیلی زیاد قبل از شما هم افرادی به این مشکل برخورد کردند و در سایت های مختلف مطرح کرده‌اند و جواب گرفته‌اند"),(0,o._)("br"),(0,o._)("br"),(0,o.Uk)("همچنین این مورد رو هم به‌یاد داشته باشید که معمولا کسی برای پاسخگویی به سوالات شما هزینه‌ای دریافت نمی‌کنه، پس مجبور به پاسخگویی به سوالات شما نیست و بلکه داره از با ارزش‌ترین سرمایه زندگی‌اش که زمان هست، برای شما مایه می‌گذاره، پس تشکر یادتون نره (:")],-1);function Zn(n,t,e,l,i,r){const a=(0,o.up)("SpeechBubble");return(0,o.wg)(),(0,o.iD)("div",Y,[(0,o._)("div",q,[E,(0,o._)("section",M,[O,z,(0,o.Wm)(a,{alignment:"right",author:"سناریو اول"},{content:(0,o.w5)((()=>[I])),_:1}),V,(0,o.Wm)(a,{alignment:"right",author:"سناریو دوم"},{content:(0,o.w5)((()=>[X])),_:1}),G,(0,o.Wm)(a,{alignment:"right",author:"سناریو سوم"},{content:(0,o.w5)((()=>[J])),_:1}),K,(0,o.Wm)(a,{alignment:"right",author:"سناریو چهارم"},{content:(0,o.w5)((()=>[R])),_:1})]),Q,(0,o._)("section",nn,[tn,en,(0,o.Wm)(a,{alignment:"right",author:"سناریو اول"},{content:(0,o.w5)((()=>[ln])),_:1}),on,(0,o.Wm)(a,{alignment:"right",author:"سناریو دوم"},{content:(0,o.w5)((()=>[rn])),_:1}),an,(0,o.Wm)(a,{alignment:"right",author:"سناریو سوم"},{content:(0,o.w5)((()=>[cn])),_:1}),sn,(0,o.Wm)(a,{alignment:"right",author:"سناریو چهارم"},{content:(0,o.w5)((()=>[un])),_:1})]),hn,(0,o._)("section",mn,[_n,gn,(0,o.Wm)(a,{alignment:"right",author:"سناریو اول"},{content:(0,o.w5)((()=>[dn])),_:1}),kn,(0,o.Wm)(a,{alignment:"right",author:"سناریو دوم"},{content:(0,o.w5)((()=>[pn])),_:1}),wn,(0,o.Wm)(a,{alignment:"right",author:"سناریو سوم"},{content:(0,o.w5)((()=>[Un])),_:1}),vn,(0,o.Wm)(a,{alignment:"right",author:"سناریو چهارم"},{content:(0,o.w5)((()=>[fn])),_:1}),bn,(0,o.Wm)(a,{alignment:"right",author:"سناریو کلی"},{content:(0,o.w5)((()=>[Wn,Dn,Sn,yn,xn,Cn,jn,Pn,Bn,Fn,An])),_:1})]),Ln])])}const Tn=n=>((0,o.dD)("data-v-41bb1498"),n=n(),(0,o.Cn)(),n),Nn={key:0},$n=Tn((()=>(0,o._)("div",null,null,-1)));function Hn(n,t,e,l,i,a){return(0,o.wg)(),(0,o.iD)("article",{class:(0,r.C_)(["speech-bubble",e.alignment])},[(0,o._)("div",null,[(0,o._)("p",null,[(0,o.WI)(n.$slots,"content",{},void 0,!0)]),null!==e.author?((0,o.wg)(),(0,o.iD)("span",Nn,(0,r.zw)(e.author),1)):(0,o.kq)("",!0)]),$n],2)}var Yn={name:"SpeechBubble",props:{author:{type:String,default:null},alignment:{type:String,default:"right"}}};const qn=(0,d.Z)(Yn,[["render",Hn],["__scopeId","data-v-41bb1498"]]);var En=qn,Mn={name:"HomeView",components:{SpeechBubble:En},mounted(){window.scrollTo({top:0,behavior:"smooth"})}};const On=(0,d.Z)(Mn,[["render",Zn]]);var zn=On;const In={id:"section-xy",class:"section-main"},Vn={class:"holder"},Xn=(0,o._)("p",null,"مسئله فلان و بهمان بیانگر پرسیدن سوال درمورد راه‌حل پیشنهادی خودتون برای مسئله، به جای پرسیدن درمورد خود مسئله هست، که این مورد معمولا به اتلاف وقت و در نهایت عدم دریافت پاسخ مطلوب منتهی می‌شود و نه پرسشگر پاسخ درست و حسابی می‌گیرد و نه پاسخگو می‌تواند پاسخ صحیح ارائه کند",-1),Gn={class:"scenario scenario-wrong"},Jn=(0,o._)("h2",null,[(0,o._)("i",{class:"icon-x"}),(0,o.Uk)("سناریو فلان و بهمان")],-1),Kn=(0,o._)("hr",null,null,-1),Rn=(0,o.Uk)("می‌خواهد کار X را انجام دهد"),Qn=(0,o.Uk)("نمی‌داند که چگونه کار X را باید انجام داد، ولی فکر می‌کند که اگر کار Y را انجام دهد، به نتیجه X می‌رسد"),nt=(0,o.Uk)("حتی نحوه انجام کار Y را هم بلد نیست"),tt=(0,o.Uk)("درمورد نحوه انجام کار Y سوال می‌پرسد"),et=(0,o.Uk)("بعد از ساعت‌ها کلنجار رفتن و توضیحات اضافی و اتلاف وقت، متوجه می‌شود که پرسشگر می‌خواسته کار X را انجام دهد ولی درمورد Y سوال پرسیده چون فکر می‌کرده که راه‌حل مشکلش Y باشد در حالی که اینطور نمی‌باشد و راه‌حل مشکل X کاملا متفاوت است"),lt=(0,o._)("p",null,[(0,o.Uk)("برای کاهش احتمال وقوع مسئله فلان و بهمان، همیشه سعی کنید سوالتون رو دقیق‌تر شرح بدید و یک تصویر گسترده‌تری از سوالتون رو ارائه کنید تا با توجه به کاری که می‌خواهید انجام بدید، بهترین و بهینه‌ترین روش برای شما پیشنهاد داده بشه، همچنین راه‌حل هایی که خودتون امتحان کردید و نتیجه هایی که گرفتید رو هم در سوالتون ذکر کنید تا پاسخگو متوجه راه هایی که رفتید بشه"),(0,o._)("br"),(0,o._)("br"),(0,o.Uk)("در نهایت، درمورد کاری که می‌خواهید انجام دهید سوال کنید و اصلا و ابدا درمورد روش های پیشنهادی خودتون برای انجام اون کار سوال نکنید")],-1),ot={class:"scenario scenario-wrong"},it=(0,o._)("h2",null,[(0,o._)("i",{class:"icon-x"}),(0,o.Uk)("سناریو پسوند فایل")],-1),rt=(0,o._)("hr",null,null,-1),at=(0,o.Uk)("چطور می‌تونم سه حرف آخر اسم یک فایل رو نمایش بدم ؟"),ct=(0,o.Uk)("echo ${foo: -3}"),st=(0,o.Uk)("چرا سه حرف آخر ؟ دقیقا می‌خواهید چه کاری انجام دهید ؟ فرمت فایل رو می‌خواهید نمایش بدید ؟"),ut=(0,o.Uk)("بله، فرمت فایل رو لازم دارم"),ht=(0,o.Uk)("هیچ تضمینی وجود نداره که فرمت هر فایلی سه حرفی باشه ! گرفتن سه حرف آخر به‌عنوان فرمت فایل یک حرکت اشتباه هست، می‌تونید از کد زیر برای گرفتن فرمت فایل استفاده کنید"),mt=(0,o.Uk)("echo ${foo##*.}"),_t={class:"scenario scenario-correct"},gt=(0,o._)("h2",null,[(0,o._)("i",{class:"icon-check"}),(0,o.Uk)("سناریو پسوند فایل")],-1),dt=(0,o._)("hr",null,null,-1),kt=(0,o.Uk)("چطور می‌تونم فرمت یک فایل رو نمایش بدم ؟"),pt=(0,o.Uk)("echo ${foo##*.}"),wt=(0,o._)("hr",null,null,-1),Ut={class:"scenario scenario-wrong"},vt=(0,o._)("h2",null,[(0,o._)("i",{class:"icon-x"}),(0,o.Uk)("سناریو مشکل Nmap")],-1),ft=(0,o._)("hr",null,null,-1),bt=(0,o.Uk)("دستور 'nmap -O -A 127.0.0.1' یک‌سری خروجی تولید می‌کنه که اولشون با OS شروع میشه، چطوری می‌تونم عوضش کنم ؟"),Wt=(0,o.Uk)("توی سورس‌کد nmap دنبال کد های مربوط به اون قسمت بگردید و کد رو جایگزین کنید و خودتون برنامه شخصی‌سازی شده nmap تون رو کامپایل کنید و استفاده کنید"),Dt=(0,o.Uk)("آهان، ولی خب من بلد نیستم سورس برنامه nmap رو بخونم، چه برسه به اینکه تغییرش بدم و کامپایلش کنم !"),St=(0,o.Uk)("خب چاره‌ای ندارید، راستی، به چه دلیلی می‌خواهید اینکار رو بکنید اصلا ؟"),yt=(0,o.Uk)("چون نمی‌خوام اطلاعات سیستم‌عاملم رو نشون بده"),xt=(0,o.Uk)("خب گزینه OS Scanning رو غیرفعال کنید !"),Ct={class:"scenario scenario-correct"},jt=(0,o._)("h2",null,[(0,o._)("i",{class:"icon-check"}),(0,o.Uk)("سناریو مشکل Nmap")],-1),Pt=(0,o._)("hr",null,null,-1),Bt=(0,o.Uk)("چطور می‌تونم کاری کنم که nmap اطلاعات سیستم‌عاملم رو نشون نده ؟"),Ft=(0,o.Uk)("گزینه OS Scanning رو غیرفعال کنید");function At(n,t,e,l,i,r){const a=(0,o.up)("SpeechBubble");return(0,o.wg)(),(0,o.iD)("div",In,[(0,o._)("div",Vn,[Xn,(0,o._)("section",Gn,[Jn,Kn,(0,o.Wm)(a,{alignment:"right"},{content:(0,o.w5)((()=>[Rn])),_:1}),(0,o.Wm)(a,{alignment:"right"},{content:(0,o.w5)((()=>[Qn])),_:1}),(0,o.Wm)(a,{alignment:"right"},{content:(0,o.w5)((()=>[nt])),_:1}),(0,o.Wm)(a,{author:"پرسشگر",alignment:"right"},{content:(0,o.w5)((()=>[tt])),_:1}),(0,o.Wm)(a,{author:"پاسخگو",alignment:"left"},{content:(0,o.w5)((()=>[et])),_:1})]),lt,(0,o._)("section",ot,[it,rt,(0,o.Wm)(a,{author:"پرسشگر",alignment:"right"},{content:(0,o.w5)((()=>[at])),_:1}),(0,o.Wm)(a,{alignment:"left"},{content:(0,o.w5)((()=>[ct])),_:1}),(0,o.Wm)(a,{author:"پاسخگو",alignment:"left"},{content:(0,o.w5)((()=>[st])),_:1}),(0,o.Wm)(a,{author:"پرسشگر",alignment:"right"},{content:(0,o.w5)((()=>[ut])),_:1}),(0,o.Wm)(a,{alignment:"left"},{content:(0,o.w5)((()=>[ht])),_:1}),(0,o.Wm)(a,{author:"پاسخگو",alignment:"left"},{content:(0,o.w5)((()=>[mt])),_:1})]),(0,o._)("section",_t,[gt,dt,(0,o.Wm)(a,{author:"پرسشگر",alignment:"right"},{content:(0,o.w5)((()=>[kt])),_:1}),(0,o.Wm)(a,{author:"پاسخگو",alignment:"left"},{content:(0,o.w5)((()=>[pt])),_:1})]),wt,(0,o._)("section",Ut,[vt,ft,(0,o.Wm)(a,{author:"پرسشگر",alignment:"right"},{content:(0,o.w5)((()=>[bt])),_:1}),(0,o.Wm)(a,{author:"پاسخگو",alignment:"left"},{content:(0,o.w5)((()=>[Wt])),_:1}),(0,o.Wm)(a,{author:"پرسشگر",alignment:"right"},{content:(0,o.w5)((()=>[Dt])),_:1}),(0,o.Wm)(a,{author:"پاسخگو",alignment:"left"},{content:(0,o.w5)((()=>[St])),_:1}),(0,o.Wm)(a,{author:"پرسشگر",alignment:"right"},{content:(0,o.w5)((()=>[yt])),_:1}),(0,o.Wm)(a,{author:"پاسخگو",alignment:"left"},{content:(0,o.w5)((()=>[xt])),_:1})]),(0,o._)("section",Ct,[jt,Pt,(0,o.Wm)(a,{author:"پرسشگر",alignment:"right"},{content:(0,o.w5)((()=>[Bt])),_:1}),(0,o.Wm)(a,{author:"پاسخگو",alignment:"left"},{content:(0,o.w5)((()=>[Ft])),_:1})])])])}var Lt={name:"XYView",components:{SpeechBubble:En},mounted(){window.scrollTo({top:0,behavior:"smooth"})}};const Zt=(0,d.Z)(Lt,[["render",At]]);var Tt=Zt;const Nt={id:"section-nohello",class:"section-main"},$t={class:"holder"},Ht=(0,o._)("p",null,"از جمله مشکلاتی که در مطرح کردن سوال‌ها در انجمن‌ها یا گروه‌ها یا شرکت‌ها وجود داره، حاشیه‌ها و مقدمه های بی‌موردی هست که نه‌تنها به فرآیند پاسخگویی کمکی نمی‌کنه، بلکه باعث اتلاف وقت پرسشگر و پاسخگو می‌شود",-1),Yt={class:"scenario scenario-wrong"},qt=(0,o._)("h2",null,[(0,o._)("i",{class:"icon-x"}),(0,o.Uk)("حاشیه و مقدمه‌چینی")],-1),Et=(0,o._)("hr",null,null,-1),Mt=(0,o.Uk)("سلام"),Ot=(0,o.Uk)("کسی هست ؟"),zt=(0,o.Uk)("یه مشکل فوری دارم"),It=(0,o.Uk)("سلام دادما !"),Vt=(0,o.Uk)("انصافا یکی جواب بده کارم گیره"),Xt=(0,o.Uk)("سلام وقت‌بخیر، مشکل چی هست ؟ دقیق بفرمایید !"),Gt=(0,o.Uk)("سلام داداش خوبی"),Jt=(0,o.Uk)("مشکل من اینه که توی جاوا"),Kt=(0,o.Uk)("بلد نیستم تایم فعلی رو بگیرم"),Rt=(0,o.Uk)("به نظرت چرا کدم کار نمی‌کنه"),Qt=(0,o.Uk)("لطفا کدتون رو قرار بدید !"),ne=(0,o.Uk)("باشه الان می‌فرستم"),te=(0,o.Uk)("{ کد اشتباه }"),ee=(0,o.Uk)("باید اینطوری نوشته بشه"),le=(0,o._)("br",null,null,-1),oe=(0,o.Uk)("{کد صحیح}"),ie=(0,o._)("p",null,"سلام دادن، احوال‌پرسی، صمیمی بودن اتفاقا خیلی خوب و محترمانه است، ولی به‌شرطی که باعث اتلاف وقت نشه و کل سلام و احوال‌پرسی و احترام به طرف مقابل در یک پیام می‌تونه خلاصه بشه تا باعث بهبود خوانایی بشه و وقت کم‌تری از هر دو طرف تلف بشه",-1),re={class:"scenario scenario-correct"},ae=(0,o._)("h2",null,[(0,o._)("i",{class:"icon-check"}),(0,o.Uk)("بدون حاشیه و مقدمه‌چینی")],-1),ce=(0,o._)("hr",null,null,-1),se=(0,o.Uk)("سلام دوستان، من یه مشکلی توی جاوا دارم و بلد نیستم که چطوری زمان فعلی رو بگیرم، این کد پایین رو من نوشتم و ممنون میشم اصلاحش کنید"),ue=(0,o._)("br",null,null,-1),he=(0,o.Uk)("{ کد اشتباه }"),me=(0,o.Uk)("سلام وقت‌بخیر، کدتون مشکل داره و باید اینطوری نوشته بشه"),_e=(0,o._)("br",null,null,-1),ge=(0,o.Uk)("{کد صحیح}"),de=(0,o._)("p",null,"در نهایت، به‌عنوان یک توسعه‌دهنده به این موضوع فکر کنید که وقتی یک جستجویی انجام می‌دهید و به انجمن های مشابه StackOverFlow می‌رسید، اگر به جای پاسخ سرراست، با یک طومار سلام و احوال‌پرسی مواجه شوید چه حسی پیدا می‌کنید (:",-1);function ke(n,t,e,l,i,r){const a=(0,o.up)("SpeechBubble");return(0,o.wg)(),(0,o.iD)("div",Nt,[(0,o._)("div",$t,[Ht,(0,o._)("section",Yt,[qt,Et,(0,o.Wm)(a,{alignment:"right"},{content:(0,o.w5)((()=>[Mt])),_:1}),(0,o.Wm)(a,{alignment:"right"},{content:(0,o.w5)((()=>[Ot])),_:1}),(0,o.Wm)(a,{alignment:"right"},{content:(0,o.w5)((()=>[zt])),_:1}),(0,o.Wm)(a,{alignment:"right"},{content:(0,o.w5)((()=>[It])),_:1}),(0,o.Wm)(a,{author:"پرسشگر",alignment:"right"},{content:(0,o.w5)((()=>[Vt])),_:1}),(0,o.Wm)(a,{author:"پاسخگو",alignment:"left"},{content:(0,o.w5)((()=>[Xt])),_:1}),(0,o.Wm)(a,{alignment:"right"},{content:(0,o.w5)((()=>[Gt])),_:1}),(0,o.Wm)(a,{alignment:"right"},{content:(0,o.w5)((()=>[Jt])),_:1}),(0,o.Wm)(a,{alignment:"right"},{content:(0,o.w5)((()=>[Kt])),_:1}),(0,o.Wm)(a,{author:"پرسشگر",alignment:"right"},{content:(0,o.w5)((()=>[Rt])),_:1}),(0,o.Wm)(a,{author:"پاسخگو",alignment:"left"},{content:(0,o.w5)((()=>[Qt])),_:1}),(0,o.Wm)(a,{alignment:"right"},{content:(0,o.w5)((()=>[ne])),_:1}),(0,o.Wm)(a,{author:"پرسشگر",alignment:"right"},{content:(0,o.w5)((()=>[te])),_:1}),(0,o.Wm)(a,{author:"پاسخگو",alignment:"left"},{content:(0,o.w5)((()=>[ee,le,oe])),_:1})]),ie,(0,o._)("section",re,[ae,ce,(0,o.Wm)(a,{author:"پرسشگر",alignment:"right"},{content:(0,o.w5)((()=>[se,ue,he])),_:1}),(0,o.Wm)(a,{author:"پاسخگو",alignment:"left"},{content:(0,o.w5)((()=>[me,_e,ge])),_:1})]),de])])}var pe={name:"NoHelloView",components:{SpeechBubble:En},mounted(){window.scrollTo({top:0,behavior:"smooth"})}};const we=(0,d.Z)(pe,[["render",ke]]);var Ue=we;const ve={id:"section-nopv",class:"section-main"},fe={class:"holder"},be=(0,o._)("p",null,"یکی از مشکلاتی که افراد متخصص هر حوزه با آن سر و کار دارند، انتظار های بی‌جای بقیه برای کمک به آن‌ها است، به‌طوری که این انتظارها به‌قدری بالا می‌روند که اگر شخصی بخواهد به تمامی انتظارات پاسخگو باشد، هیچ وقتی برای کار های خودش باقی نمی‌ماند",-1),We={class:"scenario scenario-wrong"},De=(0,o._)("h2",null,[(0,o._)("i",{class:"icon-x"}),(0,o.Uk)("انتظارات بی‌جا")],-1),Se=(0,o._)("hr",null,null,-1),ye=(0,o.Uk)("داداش تو کامپیوترت خوبه، این امتحان برنامه‌نویسی من رو میدی ؟ عروسیت جبران می‌کنم"),xe=(0,o._)("hr",null,null,-1),Ce=(0,o.Uk)("حاجی حس می‌کنم دل دوست دخترم کاروان‌سراست، اینستاشو برام هک می‌کنی مچشو بگیرم ؟"),je=(0,o._)("hr",null,null,-1),Pe=(0,o.Uk)("سلام یه مشکل فوری دارم توی JS چطوری حل‌اش کنم ؟"),Be=(0,o._)("hr",null,null,-1),Fe=(0,o.Uk)("داداش می‌خوام برنامه‌نویسی شروع کنم چیکار کنم"),Ae=(0,o._)("hr",null,null,-1),Le=(0,o.Uk)("چطوری باید تاریخ و زمان شمسی رو توی PHP بگیرم ؟"),Ze=(0,o._)("hr",null,null,-1),Te=(0,o.Uk)("ناموسا جواب بده لینوکس نصب کردم و سیستمم بالا نمیاد کارم لنگه"),Ne=(0,o._)("hr",null,null,-1),$e=(0,o.Uk)("می‌خوام این آموزش رو بخرم، یه نگاهی به سرفصل هاش بنداز ببین به دردم میخوره یا نه"),He=(0,o._)("hr",null,null,-1),Ye=(0,o.Uk)("خیلی بیشعوری که جواب نمیدی، یه مشکل توی سایتم دارم و کارم گیره، اصلا فکر کردی کی هستی که جواب من رو نمیدی ؟"),qe=(0,o._)("hr",null,null,-1),Ee=(0,o.Uk)("یه ویس بده کامل توضیح بده که پایتون خوبه یا جاوا اسکریپت"),Me=(0,o._)("p",null,"واقعیت ماجرا این هست که تقریبا همه دوست دارند که به بقیه کمک کنند و فرد مفیدی برای جامعه باشند، ولی مشکل اینجاست که هر روز بر روی زمین معادل ۲۴ ساعت هست و این زمان خیلی کمی هست به‌خصوص وقتی که نصف این زمان رو در خواب و خوراک بگذرونیم و از این ساعات باقی‌مانده، در ایده‌آل‌ترین حالت چند ساعت برای خودمون وقت داریم و اینجاست که خودمون بر اساس اولویت‌هایی که داریم، انتخاب می‌کنیم که زمانمون رو برای چه چیز هایی صرف کنیم",-1),Oe=(0,o._)("p",null,"این واقعیت امر هست که مشکلات شما صرفا برای خودتون اولویت بالایی دارند و برای بقیه احتمالا کم‌ترین اولویتی ندارند، در چنین شرایطی می‌توانید فردی حرفه‌ای به‌عنوان منتور یا مربی استخدام کنید تا به ازای دریافت هزینه شما رو راهنمایی کنه و همیشه در دسترس برای پاسخگویی باشه",-1),ze=(0,o._)("p",null,"اگر کسی از دوستان یا آشناهای شما برنامه‌نویس هست، دلیل نمیشه که مجبور بشه به جای انجام بازی آنلاین مورد علاقه‌اش، بیاد و برای شما ویندوز نصب کنه یا اینستاگرام پارتنرتون رو هک کنه، چرا ؟ چون به‌نظر شما این‌کار واجب‌تر و ضروری‌تر از انجام یک بازی کامپیوتری آنلاین هست",-1),Ie=(0,o._)("p",null,"بهترین راهکار برای حل این مشکل، قطع وابستگی هست، سعی کنید در هیچ مبحثی به کسی وابستگی نداشته باشید و از راهنمایی منتورها و مربی های مجرب هر حوزه استفاده کنید که احتمالا با هزینه همراه هست، یا از دوره های آموزشی تجاری استفاده کنید که شامل پشتیبانی هستند و سطح انتظارات رایگان‌تون رو از بقیه همیشه پایین نگه‌دارید",-1),Ve=(0,o._)("p",{style:{"text-align":"center","user-select":"none",opacity:"0.25","pointer-events":"none","font-variation-settings":"'wght' 900","font-size":"1.125rem"}},"Craving is Suffering",-1);function Xe(n,t,e,l,i,r){const a=(0,o.up)("SpeechBubble");return(0,o.wg)(),(0,o.iD)("div",ve,[(0,o._)("div",fe,[be,(0,o._)("section",We,[De,Se,(0,o.Wm)(a,{author:"آشنای اول",alignment:"right"},{content:(0,o.w5)((()=>[ye])),_:1}),xe,(0,o.Wm)(a,{author:"آشنای دوم",alignment:"right"},{content:(0,o.w5)((()=>[Ce])),_:1}),je,(0,o.Wm)(a,{author:"آشنای سوم",alignment:"right"},{content:(0,o.w5)((()=>[Pe])),_:1}),Be,(0,o.Wm)(a,{author:"آشنای چهارم",alignment:"right"},{content:(0,o.w5)((()=>[Fe])),_:1}),Ae,(0,o.Wm)(a,{author:"آشنای پنجم",alignment:"right"},{content:(0,o.w5)((()=>[Le])),_:1}),Ze,(0,o.Wm)(a,{author:"آشنای ششم",alignment:"right"},{content:(0,o.w5)((()=>[Te])),_:1}),Ne,(0,o.Wm)(a,{author:"آشنای هفتم",alignment:"right"},{content:(0,o.w5)((()=>[$e])),_:1}),He,(0,o.Wm)(a,{author:"آشنای هشتم",alignment:"right"},{content:(0,o.w5)((()=>[Ye])),_:1}),qe,(0,o.Wm)(a,{author:"آشنای نهم",alignment:"right"},{content:(0,o.w5)((()=>[Ee])),_:1})]),Me,Oe,ze,Ie,Ve])])}var Ge={name:"NoPvView",components:{SpeechBubble:En},mounted(){window.scrollTo({top:0,behavior:"smooth"})}};const Je=(0,d.Z)(Ge,[["render",Xe]]);var Ke=Je;const Re={id:"section-home",class:"section-main"},Qe={class:"holder"},nl=(0,o._)("p",null,[(0,o.Uk)(" گاهی‌اوقات پاسخ دادن به سؤالاتی که کدی همراه‌شون نیست خیلی سخت هست. ما نمی‌دونیم کد شما چه فرایندی رو طی کرده تا به مشکلی که الان دارید رسیده. ممکنه به خطای داخلی برنامه مربوط باشه، ممکنه از سرویس خاصی نشأت گرفته باشه، ممکنه حتی مشکل سینتکس داشته باشه! نمیشه به‌طور قطعی جواب داد. تمام پاسخ‌ها با حدس و گمان مواجه‌اند تا زمانی که کُدتون رو بذارید! حتی اگر کسی با حدس و گمان پاسخ بده، و حتی اگه از قضا جوابش درست هم باشه، اون پاسخ صرفاً برای شما درست هست و کسانی که در آینده اون سوال و جواب رو می‌خونند و می‌بینند، ممکنه هیچی ازش متوجه ‌نشوند ! "),(0,o._)("br"),(0,o.Uk)(" پس این رو درنظر داشته باشید که برای کمک‌گرفتن از بقیه، اول از همه شما باید به پاسخ‌دهنده کمک کنید تا مشکل رو دقیق‌تر درک کنه. ")],-1),tl={class:"scenario scenario-wrong"},el=(0,o._)("h2",null,[(0,o._)("i",{class:"icon-x"}),(0,o.Uk)("همونطور که اشاره کردیم، وقت‌تون رو برای گفتن یا خوندنِ این جملات تلف نکنید")],-1),ll=(0,o._)("hr",null,null,-1),ol=(0,o.Uk)("آقا من یه کد نوشتم واسه سایتم که ایمیل بفرسته ولی کار نمی‌کنه"),il=(0,o.Uk)("خب چرا کار نمی‌کنه؟"),rl=(0,o.Uk)("نمی‌دونم ارور فلان میده"),al=(0,o.Uk)("خب ارور چیه؟"),cl=(0,o.Uk)("{ارور}"),sl=(0,o.Uk)("خط 12 کُدت چی نوشتی؟"),ul=(0,o.Uk)("{کد باگ‌دار}"),hl=(0,o.Uk)("{کد درست}"),ml=(0,o._)("p",null,"در این حالت حتی افرادی که ممکنه پاسخ رو هم بدونند، جوابی به سؤال‌تون نمیدن چون جواب شما وابسته به کُدتون هست",-1),_l={class:"scenario scenario-correct"},gl=(0,o._)("h2",null,[(0,o._)("i",{class:"icon-check"}),(0,o.Uk)("درصورتی که ‌می‌توانید اینجوری بنویسید‌")],-1),dl=(0,o._)("hr",null,null,-1),kl=(0,o.Uk)("آقا من یه کد نوشتم که ایمیل بفرسته از سایتم، ولی به این ارور {ارور} برمی‌خورم. این هم ‌کد من هست {کد باگ‌دار}"),pl=(0,o.Uk)("مشکل شما فلان‌چیز هست و این هم راه‌حل {کد درست}"),wl=(0,o._)("p",null,"پس همیشه سعی کنید در انتهای سؤالی که نوشتید کُدتون رو اضافه کنید و فراموش نکنید حتما با فرمت Monospace این‌کار رو انجام بدید",-1),Ul={class:"scenario scenario-correct"},vl=(0,o._)("span",{class:"monospace"}," I'm a Good Code ",-1),fl=(0,o.Uk)("I'm a Bad Code"),bl=(0,o._)("p",null,"کد، زیادیش هم خوب نیست! بعضاً می‌بینید که در متن سؤال، کلی کدِ آشفته و درهم و برهم وجود داره و اصل سؤال به موضوعی کوچیک اشاره داره که به این حجم از کد اصلا نیازی نیست! در نظر داشته باشید که کدِ زیادی، سؤال و مشکل رو شخصی و مرتبط با خودتون می‌کنه. و برای جامعه پرسش و پاسخی که توش این موضوع رو مطرح کردید، به‌هیچ‌عنوان جالب نیست.",-1);function Wl(n,t,e,l,i,r){const a=(0,o.up)("SpeechBubble");return(0,o.wg)(),(0,o.iD)("div",Re,[(0,o._)("div",Qe,[nl,(0,o._)("section",tl,[el,ll,(0,o.Wm)(a,{author:"پرسشگر",alignment:"right"},{content:(0,o.w5)((()=>[ol])),_:1}),(0,o.Wm)(a,{author:"پاسخگو",alignment:"left"},{content:(0,o.w5)((()=>[il])),_:1}),(0,o.Wm)(a,{author:"پرسشگر",alignment:"right"},{content:(0,o.w5)((()=>[rl])),_:1}),(0,o.Wm)(a,{author:"پاسخگو",alignment:"left"},{content:(0,o.w5)((()=>[al])),_:1}),(0,o.Wm)(a,{author:"پرسشگر",alignment:"right"},{content:(0,o.w5)((()=>[cl])),_:1}),(0,o.Wm)(a,{author:"پاسخگو",alignment:"left"},{content:(0,o.w5)((()=>[sl])),_:1}),(0,o.Wm)(a,{author:"پرسشگر",alignment:"right"},{content:(0,o.w5)((()=>[ul])),_:1}),(0,o.Wm)(a,{author:"پاسخگو",alignment:"left"},{content:(0,o.w5)((()=>[hl])),_:1})]),ml,(0,o._)("section",_l,[gl,dl,(0,o.Wm)(a,{author:"پرسشگر",alignment:"right"},{content:(0,o.w5)((()=>[kl])),_:1}),(0,o.Wm)(a,{author:"پاسخگو",alignment:"left"},{content:(0,o.w5)((()=>[pl])),_:1})]),wl,(0,o._)("section",Ul,[(0,o.Wm)(a,{author:"درست",alignment:"left"},{content:(0,o.w5)((()=>[vl])),_:1}),(0,o.Wm)(a,{author:"غلط",alignment:"left"},{content:(0,o.w5)((()=>[fl])),_:1})]),bl])])}var Dl={name:"NoCodeView",components:{SpeechBubble:En},mounted(){window.scrollTo({top:0,behavior:"smooth"})}};const Sl=(0,d.Z)(Dl,[["render",Wl]]);var yl=Sl;const xl=[{path:"/",name:"home",component:zn,meta:{title:"نپرس که بپرسم، فقط بپرس",accent:"#EC407A",gradient:"linear-gradient(215deg, #F48FB1 0%, #C2185B 100%)"}},{path:"/xy",name:"xy",component:Tt,meta:{title:"مسئله فلان و بهمان",accent:"#9C27B0",gradient:"linear-gradient(215deg, #CE93D8 0%, #4A148C 100%)"}},{path:"/nohello",name:"nohello",component:Ue,meta:{title:"سلام، بی‌سلام",accent:"#03A9F4",gradient:"linear-gradient(215deg, #81D4FA 0%, #01579B 100%)"}},{path:"/nopv",name:"nopv",component:Ke,meta:{title:"خصوصی سوال نکنید",accent:"#FF9800",gradient:"linear-gradient(215deg, #FFCC80 0%, #E65100 100%)"}},{path:"/nocode",name:"nocode",component:yl,meta:{title:"کُدِت رو بذار!",accent:"#009f7b",gradient:"linear-gradient(45deg, hsla(190,100%,28.4%,1) 0%, hsla(162,100%,73.5%,1) 100%);"}},{path:"/xyproblem",redirect:"/xy"},{path:"/:any(.*)",redirect:"/"}],Cl=(0,H.p7)({history:(0,H.PO)("/"),routes:xl});Cl.afterEach((n=>{let t=n.meta.title||"";document.title=t.length>0?t:"نپرس که بپرسم، فقط بپرس"}));var jl=Cl,Pl=e(5431);(0,Pl.z)("/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(n){console.error("Error during service worker registration:",n)}});var Bl=e(8970);const Fl=(0,l.ri)($);Fl.use(jl),Fl.use(Bl.ZP,{config:{id:"UA-161433595-7"}},jl),Fl.mount("#app")}}]);