(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[515],{2306:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/post/[slug]",function(){return t(3077)}])},3077:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return b}});var s=t(5893),a=t(7294),r=t(9008),i=t.n(r),o=t(7283),l=t(5850);function d(){var e,n,t=(e=["\nquery GetPost($slug: ID!) {\n  post(id: $slug, idType: SLUG) {\n    author {\n      node {\n        username\n      }\n    }\n    content(format: RENDERED)\n    date\n    title\n    categories {\n      nodes {\n        name\n      }\n    }\n    featuredImage {\n      node {\n        altText\n        description(format: RAW)\n        sourceUrl\n        title(format: RAW)\n      }\n    }\n  }\n}\n"],n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}})));return d=function(){return t},t}var c=(0,o.Ps)(d()),u=t(1163),h=t(5675),m=t.n(h),p=t(1664),x=t.n(p),f=t(4646),j=t(6726),g=t(4147),v=t(8271),b=function(){var e=(0,a.useState)(!1),n=(e[0],e[1],function(e){var n=(0,l.a)(c,{variables:{slug:e}});return{error:n.error,data:n.data,loading:n.loading}}((0,u.useRouter)().query.slug)),t=n.error,r=n.loading,o=n.data;return r?(0,s.jsx)("div",{className:"block py-20 text-center",children:(0,s.jsx)(v.$j,{})}):t?(0,s.jsxs)("p",{children:["Error : ",t]}):(0,s.jsxs)(g.A,{children:[(0,s.jsx)(i(),{children:(0,s.jsxs)("title",{children:["Joe Shepard - Article - ",o.post.title]})}),(0,s.jsx)(j.aG,{title:o.post.title,paths:[{name:"Home",link:"/"},{name:"Projects & Content",link:"/post/"+o.post.title},{name:o.post.title,link:""}]}),(0,s.jsx)("div",{className:"single-post py-24 lg:py-28 xl:py-32",children:(0,s.jsxs)("div",{className:"container mx-auto",children:[(0,s.jsxs)("div",{className:"post-header mb-8",children:[(0,s.jsx)("div",{className:"fiximage mb-5 overflow-hidden rounded border border-white border-opacity-20",children:(0,s.jsx)(m(),{loader:f.XI,unoptimized:!0,src:o.post.featuredImage.node.sourceUrl,height:650,width:1350,alt:"Blog Image",layout:"responsive",objectFit:"cover",placeholder:"blur",blurDataURL:"data:image/svg+xml;base64,".concat((0,f.s3)((0,f.f8)(1350,650)))})}),(0,s.jsxs)("div",{className:"flex flex-wrap justify-between gap-x-4",children:[(0,s.jsxs)("div",{className:"mb-0 flex gap-2 text-heading",children:["Category :",(0,s.jsx)("div",{className:"inline-flex list-none gap-1.5",children:(0,s.jsx)("span",{className:"after:content-[','] last:after:hidden",children:(0,s.jsx)(x(),{href:"#",children:(0,s.jsx)("a",{className:"text-body hover:text-primary",children:o.post.categories.nodes[0].name})})})})]}),(0,s.jsxs)("p",{className:"mb-0 text-heading",children:["Published on :",(0,s.jsx)("span",{className:"ml-1.5 text-body",children:new Date(o.post.date).toLocaleDateString("en-us",{month:"short",day:"2-digit",year:"numeric"})})]})]})]}),(0,s.jsx)("div",{className:"post-body mt-4",children:(0,s.jsx)("div",{className:"post-content",children:(0,s.jsx)("div",{dangerouslySetInnerHTML:{__html:o.post.content}})})})]})})]})}}},function(e){e.O(0,[937,995,147,774,888,179],(function(){return n=2306,e(e.s=n);var n}));var n=e.O();_N_E=n}]);