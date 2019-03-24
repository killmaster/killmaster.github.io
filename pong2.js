var a=document,e=a.createElement("canvas");a.body.appendChild(e);var f=[5,4,3]
,g=["#eca040","#c27f3c","#885a2f"],ft="px Courier",ts="qjyfmt.dbnq",bf="<<<---
-.>>++++.<+.>";rd=Math.random,nf=Math.floor;function h(d){return{c:18,b:18,x:6
91,y:491,g:0,i:0,a:d||9}}function k(d){return{c:18,b:70,x:"left"===d?150:1250,
y:465,h:0,move:0,a:10}}bf+="---.<<---.>>>++.<+.";;var n={C:function(){t=this;t
.l=e;t.t=t.l.getContext("2d");t.l.width=1400;t.l.height=1E3;t.l.style.width="7
00px";t.l.style.height="500px";t.j=k.call(t,"left");t.r=k.call(t,"right");t.m=
h.call(t);t.r.a=8;t.D=t.o=!1;t.s=t.r;t.F=t.f=0;;t.color="#eca040";;m.H();m.G()
;ts+="/tee/"+"35c9238647f5302f"},B:function(d){m.t.font="50"+ft;m.t.fillStyle=
this.color;m.t.fillRect(350,452,700,100);;m.t.fillStyle="#ffffff";m.t.fillText
(d,700,515);setTimeout(function(){m=Object.assign({},n);m.C()},3E3)},H:functio
n(){m.A();t=this;t.t.font="50"+ft;t.t.fillStyle=t.color;t.t.fillRect(350,452,7
00,100);;t.t.fillStyle="#ffffff";t.t.fillText("Press any key to begin",700,515
)},update:function(){t=this;b=t.m;l=t.j;r=t.r;t.o||(0>=b.x&&m.v.call(t,r,l),b.
x>=1400-b.c&&m.v.call(t,l,r),0>=b.y&&(b.i=2),b.y>=1E3-b.b&&(b.i=1),1===l.move?
l.y-=l.a:2===l.move&&(l.y+=l.a),m.w.call(t)&&t.s&&(b.g=t.s===l?3:4,b.i=[1,2][M
ath.round(rd())],b.y=mf(1E3*rd()-200)+200,t.s=null),0>=l.y?l.y=0:l.y>=1E3-l.b&
&(l.y=1E3-l.b),1===b.i?b.y-=b.a/1.5:2===b.i&&(b.y+=b.a/1.5),3===b.g?b.x-=b.a:4
===b.g&&(b.x+=b.a),r.y>b.y-r.b/2&&(r.y=4===b.g?r.y-r.a/1.5:r.y-r.a/4),r.y<b.y-
r.b/2&&(r.y=4===b.g?r.y+r.a/1.5:r.y+r.a/4),r.y>=1E3-r.b?r.y=1E3-r.b:0>=r.y&&(r
.y=0),b.x-b.c<=l.x&&b.x>=l.x-l.c&&b.y<=l.y+l.b&&b.y+b.b>=l.y&&(b.x=l.x+b.c,b.g
=4),b.x-b.c<=r.x&&b.x>=r.x-r.c&&b.y<=r.y+r.b&&b.y+b.b>=r.y&&(b.x=r.x-b.c,b.g=3
));l.h===f[t.f]?f[t.f+1]?(t.color=t.u(),l.h=r.h=0,l.a+=.5,r.a+=1,b.a+=1,t.f+=1
):(t.o=!0,setTimeout(function(){m.B(bf)}