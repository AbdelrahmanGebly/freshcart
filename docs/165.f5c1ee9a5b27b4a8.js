"use strict";(self.webpackChunkfreshcart=self.webpackChunkfreshcart||[]).push([[165],{5165:(T,_,r)=>{r.r(_),r.d(_,{ProductDetailsComponent:()=>x});var n=r(6814),u=r(756),t=r(4769),d=r(1120),l=r(1132),p=r(6286),m=r(2425);function g(s,c){if(1&s&&t._UZ(0,"img",15),2&s){const e=t.oxw().$implicit;t.Q6J("src",e,t.LSH)}}function D(s,c){1&s&&(t.ynx(0),t.YNc(1,g,1,1,"ng-template",14),t.BQk())}function f(s,c){if(1&s&&t._UZ(0,"i",16),2&s){const e=c.$implicit,o=t.oxw(2);t.ekj("rating-color",o.productDetails.ratingsAverage>=e)}}const v=function(){return[1,2,3,4,5]};function h(s,c){if(1&s){const e=t.EpF();t.TgZ(0,"section",1)(1,"div",2)(2,"div",3)(3,"owl-carousel-o",4),t.YNc(4,D,2,0,"ng-container",5),t.qZA()(),t.TgZ(5,"div",6)(6,"div")(7,"h2",7),t._uU(8),t.qZA(),t.TgZ(9,"p",8),t._uU(10),t.qZA(),t.TgZ(11,"span"),t._uU(12),t.qZA(),t.TgZ(13,"div",9)(14,"span",10),t._uU(15),t.ALo(16,"currency"),t.qZA(),t.TgZ(17,"span",10),t.YNc(18,f,1,2,"i",11),t._uU(19),t.qZA()(),t.TgZ(20,"button",12,13),t.NdJ("click",function(){t.CHM(e);const i=t.MAs(21),a=t.oxw();return t.KtG(a.addProductToCart(a.productDetails._id,i))}),t._uU(22,"+Add To Cart"),t.qZA()()()()()}if(2&s){const e=t.oxw();t.xp6(3),t.Q6J("options",e.productDetailsOptions),t.xp6(1),t.Q6J("ngForOf",e.productDetails.images),t.xp6(4),t.Oqu(e.productDetails.title),t.xp6(2),t.Oqu(e.productDetails.description),t.xp6(2),t.Oqu(e.productDetails.category.name),t.xp6(3),t.Oqu(t.xi3(16,8,e.productDetails.price,"EGP")),t.xp6(3),t.Q6J("ngForOf",t.DdM(11,v)),t.xp6(1),t.hij(" ",e.productDetails.ratingsAverage," ")}}let x=(()=>{class s{constructor(e,o,i,a,P){this._ActivatedRoute=e,this._ProductsService=o,this._Renderer2=i,this._CartService=a,this._ToastrService=P,this.productDetails=null,this.productDetailsOptions={loop:!0,mouseDrag:!0,touchDrag:!0,pullDrag:!1,dots:!0,autoplay:!0,autoplayTimeout:6e3,autoplaySpeed:1e3,navSpeed:700,navText:["",""],items:1,nav:!1}}ngOnInit(){this._ActivatedRoute.paramMap.subscribe({next:e=>{this.productId=e.get("id")}}),this._ProductsService.getProductDetails(this.productId).subscribe({next:({data:e})=>{this.productDetails=e}})}addProductToCart(e,o){this._Renderer2.setAttribute(o,"disabled","true"),this._CartService.addToCart(e).subscribe({next:i=>{this._ToastrService.success(i.message),this._Renderer2.removeAttribute(o,"disabled"),this._CartService.cartNumber.next(i.numOfCartItems)},error:i=>{this._Renderer2.removeAttribute(o,"disabled")}})}static#t=this.\u0275fac=function(o){return new(o||s)(t.Y36(d.gz),t.Y36(l.s),t.Y36(t.Qsj),t.Y36(p.N),t.Y36(m._W))};static#e=this.\u0275cmp=t.Xpm({type:s,selectors:[["app-product-details"]],standalone:!0,features:[t.jDz],decls:1,vars:1,consts:[["class","w-75 mx-auto rounded mt-3 mb-4 shadow p-3",4,"ngIf"],[1,"w-75","mx-auto","rounded","mt-3","mb-4","shadow","p-3"],[1,"row","align-items-center"],[1,"col-md-3"],[3,"options"],[4,"ngFor","ngForOf"],[1,"col-md-9"],[1,"h5"],[1,"text-muted","small"],[1,"d-flex","justify-content-between","align-items-center"],[1,"small"],["class","fas fa-star",3,"rating-color",4,"ngFor","ngForOf"],[1,"w-100","main-btn","mt-3",3,"click"],["btnAdd",""],["carouselSlide",""],[1,"w-100",3,"src"],[1,"fas","fa-star"]],template:function(o,i){1&o&&t.YNc(0,h,23,12,"section",0),2&o&&t.Q6J("ngIf",null!=i.productDetails)},dependencies:[n.ez,n.sg,n.O5,n.H9,u.bB,u.Fy,u.Mp]})}return s})()}}]);