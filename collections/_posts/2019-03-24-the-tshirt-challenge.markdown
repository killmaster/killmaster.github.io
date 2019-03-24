---
layout: post
title: "The T-shirt challenge"
date: 2019-03-24 17:09:00 +0000
category: pixelscamp pixels.camp challenges
---
On [Pixels.Camp V3](https://pixels.camp/), following last editions example, there was a challenge regarding the event's t-shirts.

This is the story of how we ([killmaster][1], [tiagoad][2], [joanarijo][3], and [bacitoto][4] cracked this edition's.

## Getting all the tshirts
This was probably the easiest step of the whole process, albeit a bit time consuming (not the most time consuming, as you'll soon find out).
During the goodies bag and shirt giveaway we looked into the pile to find out how many there were and all chose differently.
Between us and our group of friends (shoutout to [afonsus1997][5] and [mjamado][6]) we managed to get 6 different shirts. Given that we noticed that they would work in pairs, we kindly asked the staff if we could check the entrance lobby, where the shirts were stored, if we could find the one's that were missing.

By the start of the Code in the Dark event we had all 8 shirts.

![sweet dreams are made of **this** inside](/images/uploads/this1.jpg)
![sweet dreams are made of **this** outside](/images/uploads/this2.jpg)
![are you gonna be my **curl** inside](/images/uploads/curl1.jpg)
![are you gonna be my **curl** outside](/images/uploads/curl2.jpg)
![wake me up when **npm install** ends inside](/images/uploads/npm1.jpg)
![wake me up when **npm install** ends outside](/images/uploads/npm2.jpg)
![**shells** like teen spirit inside](/images/uploads/shells1.jpg)
![**shells** like teen spirit outside](/images/uploads/shells2.jpg)
![take *mysql* away inside](/images/uploads/mysql1.jpg)
![take **mysql** away outside](/images/uploads/mysql2.jpg)

## Finding out what the t-shirts' secrets and the spectrum part
By now, just looking at the content on the shirts, we had a pretty good idea of what we'd have to do.
Inspecting a little closer, me and Tiago noticed that there was a piece of the code that looked strangely like [brainfuck](https://en.wikipedia.org/wiki/Brainfuck), but for some reason decided to find out what the code actually did.
We asked Joana, if she could blend two of them into a single image to see if OCR actually worked. It didn't, so Tiago started handtyping the first merged pair while I started working on a second one that wasn't yet completelly merged.

While us three were working on this, rumors started to spread about a radio frequency (88.5 MHz) transmitting numbers and a ZX Spectrum that was waiting for a 5 digit number input. Having a slight suspicion that they would be connected, Francisco started looking into it, writting down two full number sequences and recording some of the [stream](/images/uploads/radio.3gpp).
He found that that the first number of each sequence started with a 5 digit number, followed by 79 numbers with 3 digits.

![Notebook1](/images/uploads/notebook1.jpg)
![Notebook2](/images/uploads/notebook2.jpg)

Given that the ZX Spectrum's monitor had a modified Lost logo (that was designed by [Isa][7] as we later found out), Francisco tried one of the 5 digit numbers, followed by the number sequence from Lost (04,08,15,16,23,42). This actually worked and showed a screen with, again, more 3 digit numbers.

![ZX Lost](/images/uploads/lost_splash.jpg)
![ZX 1](/images/uploads/zx1.jpg)
![ZX 2](/images/uploads/zx2.jpg)
![ZX 3](/images/uploads/zx3.jpg)
![ZX 4](/images/uploads/zx4.jpg)

These 4 screens were kind of a dead end at this point. Converting the numbers to ascii didn't return any meaningfull data, so we decided to go back to the shirts for more clues.

Tiago finished transcribing the code, there were some errors that we managed to find out quickly diffing his code against what was typed by me for the other pair of shirts, and we ended up with this:

{% highlight javascript %}
var a=document,e=a.createElement("canvas");a.body.appendChild(e);var f=[5,4,3],g=["#de6a45","#8e3f2d","#462116"],ft="px Courier",ts="qjydmt.dbnq",bf=".<<----.>-----.>>--";rd=Math.random,mf=Math.floor;function h(d){return{c:18,b:18,x:691,y:491,g:0,i:0,a:d||9}}function k(d){return{c:18,b:70,x:"left"===d?150:1250,y:465,h:0,move:0,a:10}}bf+="--.<--.--.<<+.+++.>>";var n={C:function(){t=this;t.l=e;t.t=t.l.getContext("2d");t.l.width=1400;t.l.height=1E3;t.l.style.width="700px";t.l.style.height="500px";t.j=k.call(t,"left");t.r=k.call(t,"right");t.m=h.call(t);t.r.a=8;t.D=t.o=!1;t.s=t.r;t.F=t.f=0;;t.color="#de6145";;m.H();m.G();ts+="/tee/"+"bc82ddcc95915759"},B:function(d){m.t.font="50"+ft;m.t.fillStyle=this.color;m.t.fillRect(350,452,700,100);;m.t.fillStyle="#ffffff";m.t.fillText(d,700,515);setTimeout(function(){m=Object.assign({},n);m.C()},3E3)},H:function(){m.A();t=this;t.t.font="50"+ft;t.t.fillStyle=t.color;t.t.fillRect(350,452,700,100);;t.t.fillStyle="#ffffff";t.t.fillText("Press any key to begin",700,515)},update:function(){t=this;b=t.m;l=t.j;r=t.r;t.o||(0>=b.x&&m.v.call(t,r,l),b.x>=1400-b.c&&m.v.call(t,l,r),0>=b.y&&(b.i=2),b.y>=1E3-b.b&&(b.i=1),1===l.move?l.y-=l.a:2===l.move&&(l.y+=l.a),m.w.call(t)&&t.s&&(b.g=t.s===l?3:4,b.i=[1,2][Math.round(rd())],b.y=mf(1E3*rd()-200)+200,t.s=null),0>=l.y?l.y=0:l.y>=1E3-l.b&&(l.y=1E3-l.b),1===b.i?b.y-=b.a/1.5:2===b.i&&(b.y+=b.a/1.5),3===b.g?b.x-=b.a:4===b.g&&(b.x+=b.a),r.y>b.y-r.b/2&&(r.y=4===b.g?r.y-r.a/1.5:r.y-r.a/4),r.y<b.y-r.b/2&&(r.y=4===b.g?r.y+r.a/1.5:r.y+r.a/4),r.y>=1E3-r.b?r.y=1E3-r.b:0>=r.y&&(r.y=0),b.x-b.c<=l.x&&b.x>=l.x-l.c&&b.y<=l.y+l.b&&b.y+b.b>=l.y&&(b.x=l.x+b.c,b.g=4),b.x-b.c<=r.x&&b.x>=r.x-r.c&&b.y<=r.y+r.b&&b.y+b.b>=r.y&&(b.x=r.x-b.c,b.g=3));l.h===f[t.f]?f[t.f+1]?(t.color=t.u(),l.h=r.h=0,l.a+=.5,r.a+=1,b.a+=1,t.f+=1):(t.o=!0,setTimeout(function(){m.B(bf)},1E3)):r.h===f[t.f]&&(t.o=10,setTimeout(function(){m.B("Game Over!")},1E3))},A:function(){t=this;c=t.t;b=t.m;l=t.j;r=t.r;c.clearRect(0,0,1400,1E3);c.fillStyle=t.color;c.fillRect(0,0,1400,1E3);c.fillStyle="#ffffff";c.fillRect(l.x,l.y,l.c,l.b);c.fillRect(r.x,r.y,r.c,r.b);m.w.call(t)&&c.fillRect(b.x,b.y,b.c,b.b);c.beginPath();c.setLineDash([7,15]);c.moveTo(700,860);c.lineTo(700,140);c.lineWidth=10;c.strokeStyle="#ffffff";c.stroke();c.font="100"+ft;c.textAlign="center";c.fillText(l.h.toString(),400,200);c.fillText(r.h.toString(),1E3,200);c.font="30"+ft;c.fillText("Round "+(m.f+1),700,35);c.font="40"+ft;c.fillText(f[m.f]?f[m.f]:f[m.f-1],700,100)},loop:function(){m.update();m.A();m.o||requestAnimationFrame(m.loop)},G:function(){a.addEventListener("keydown",function(d){!1===m.D&&(m.D=!0,window.requestAnimationFrame(m.loop));if(38===d.keyCode||87===d.keyCode)m.j.move=1;if(40===d.keyCode||83===d.keyCode)m.j.move=2});a.addEventListener("keyup",function(){m.k.move=0})},v:function(d,p){t=this;t.m=h.call(t,t.m.a);t.s=p;t.F=(new Date).getTime();d.h++},w:function(){return 1E3<=(new Date).getTime()-this.F},u:function(){var d=g[mf(rd()*g.length)];return d===this.color?m.u():d}},m=Object.assign({},n);m.C();
{% endhighlight %}

Copying the code into the browser console gave us a game of pong, we assumed beating the game gave us a clue, so we tried it. Since we were all pretty tired winning was taking too much time, we didn't want it to take that long so we changed the code a little to make the ball always travel right, making the game win itself for us.

{% highlight javascript %}
var a=document,e=a.createElement("canvas");a.body.appendChild(e);var f=[5,4,3],g=["#de6a45","#8e3f2d","#462116"],ft="px Courier",ts="qjydmt.dbnq",bf=".<<----.>-----.>>--";rd=Math.random,mf=Math.floor;function h(d){return{c:18,b:18,x:691,y:491,g:0,i:0,a:d||9}}function k(d){return{c:18,b:70,x:"left"===d?150:1250,y:465,h:0,move:0,a:10}}bf+="--.<--.--.<<+.+++.>>";var n={C:function(){t=this;t.l=e;t.t=t.l.getContext("2d");t.l.width=1400;t.l.height=1E3;t.l.style.width="700px";t.l.style.height="500px";t.j=k.call(t,"left");t.r=k.call(t,"right");t.m=h.call(t);t.r.a=8;t.D=t.o=!1;t.s=t.r;t.F=t.f=0;;t.color="#de6145";;m.H();m.G();ts+="/tee/"+"bc82ddcc95915759"},B:function(d){m.t.font="50"+ft;m.t.fillStyle=this.color;m.t.fillRect(350,452,700,100);;m.t.fillStyle="#ffffff";m.t.fillText(d,700,515);setTimeout(function(){m=Object.assign({},n);m.C()},3E3)},H:function(){m.A();t=this;t.t.font="50"+ft;t.t.fillStyle=t.color;t.t.fillRect(350,452,700,100);;t.t.fillStyle="#ffffff";t.t.fillText("Press any key to begin",700,515)},update:function(){t=this;b=t.m;l=t.j;r=t.r;t.o||(0>=b.x&&m.v.call(t,r,l),b.x>=1400-b.c&&m.v.call(t,l,r),0>=b.y&&(b.i=2),b.y>=1E3-b.b&&(b.i=1),1===l.move?l.y-=l.a:2===l.move&&(l.y+=l.a),m.w.call(t)&&t.s&&(b.g=t.s===l?3:4,b.i=[1,2][Math.round(rd())],b.y=mf(1E3*rd()-200)+200,t.s=null),0>=l.y?l.y=0:l.y>=1E3-l.b&&(l.y=1E3-l.b),1===b.i?b.y-=b.a/1.5:2===b.i&&(b.y+=b.a/1.5),3===b.g?b.x+=b.a:4===b.g&&(b.x+=b.a),r.y>b.y-r.b/2&&(r.y=4===b.g?r.y-r.a/1.5:r.y-r.a/4),r.y<b.y-r.b/2&&(r.y=4===b.g?r.y+r.a/1.5:r.y+r.a/4),r.y>=1E3-r.b?r.y=1E3-r.b:0>=r.y&&(r.y=0),b.x-b.c<=l.x&&b.x>=l.x-l.c&&b.y<=l.y+l.b&&b.y+b.b>=l.y&&(b.x=l.x+b.c,b.g=4),b.x-b.c<=r.x&&b.x>=r.x-r.c&&b.y<=r.y+r.b&&b.y+b.b>=r.y&&(b.x=r.x-b.c,b.g=3));l.h===f[t.f]?f[t.f+1]?(t.color=t.u(),l.h=r.h=0,l.a+=.5,r.a+=1,b.a+=1,t.f+=1):(t.o=!0,setTimeout(function(){m.B(bf)},1E3)):r.h===f[t.f]&&(t.o=10,setTimeout(function(){m.B("Game Over!")},1E3))},A:function(){t=this;c=t.t;b=t.m;l=t.j;r=t.r;c.clearRect(0,0,1400,1E3);c.fillStyle=t.color;c.fillRect(0,0,1400,1E3);c.fillStyle="#ffffff";c.fillRect(l.x,l.y,l.c,l.b);c.fillRect(r.x,r.y,r.c,r.b);m.w.call(t)&&c.fillRect(b.x,b.y,b.c,b.b);c.beginPath();c.setLineDash([7,15]);c.moveTo(700,860);c.lineTo(700,140);c.lineWidth=10;c.strokeStyle="#ffffff";c.stroke();c.font="100"+ft;c.textAlign="center";c.fillText(l.h.toString(),400,200);c.fillText(r.h.toString(),1E3,200);c.font="30"+ft;c.fillText("Round "+(m.f+1),700,35);c.font="40"+ft;c.fillText(f[m.f]?f[m.f]:f[m.f-1],700,100)},loop:function(){m.update();m.A();m.o||requestAnimationFrame(m.loop)},G:function(){a.addEventListener("keydown",function(d){!1===m.D&&(m.D=!0,window.requestAnimationFrame(m.loop));if(38===d.keyCode||87===d.keyCode)m.j.move=1;if(40===d.keyCode||83===d.keyCode)m.j.move=2});a.addEventListener("keyup",function(){m.k.move=0})},v:function(d,p){t=this;t.m=h.call(t,t.m.a);t.s=p;t.F=(new Date).getTime();d.h++},w:function(){return 1E3<=(new Date).getTime()-this.F},u:function(){var d=g[mf(rd()*g.length)];return d===this.color?m.u():d}},m=Object.assign({},n);m.C();
{% endhighlight %}

When the game ended we were greeted with a string of brainfuck code. The same one we found when we looked at the shirts the first time.
During the typing we also noticed that there was another string in the code, named _ts_, that had an hash appended to it. We plugged it into the pixels.camp URL and lo and behold, the same brainfuck.

Brainfuck on each shirt:
* THIS:
    ```brainfuck
    >+.<<+.>++++..>.<---.<<++.>>>+++++.---.
    ```
* CURL:
    ```brainfuck
    ++++++++++[>+++++++++++>++++++++++++>++
    ```
* NPM INSTALL:
    ```brainfuck
    <<<----.>>++++.<+.>---.<<---.>>>++.<+.
    ```
* SHELLS:
    ```brainfuck
    .<<----.>-----.>>----.<--.--.<<+.+++.>>
    ```
* MYSQL:
    ```brainfuck
    ++++++++>+++++<<<<-]>++.>>+++++.<.>----
    ```

Finding that the bf var was all that was needed lightened our load significantly because we could discard transcribing all 8 shirts.
We got all four of the brainfuck string from all the t-shirts (will update the article with the list of strings we got), we just needed to find the order in which they should run and interpret it. The final result was the string "br41nfuck3d".
We tried appending that to the base pixels.camp URL and got nothing, so next we tried to plug it to the end of pixels.camp/tee/ like the hash we previously found. 

![br41nfuck3d](/images/uploads/br41nfuck3d.jpg)

The __Agent ID__ also matches the 5 digit number from the Number Station.
Now we knew for sure that the ZX Spectrum and Number Station was related to the T-Shirts, and we also had pretty good idea on what to do next.

## Decoding the numbers

Let's recap all the data we have so far.
* A number station that outputs a 5 digit number and 79 numbers with 3 digits
* A ZX Spectrum that receives the 5 digit that when we input the 5 digit number and the numbers from Lost outputs a bunch of 3 digit numbers
* A website with a 5 digit Agent ID and a huge amount of 3 digit numbers
* The 5 digit numbers from the number station are the same as the numbers we saw on the website so far

The next part was oddly and satisfyingly simple. I had refreshed my memory on number stations and one-time pads a couple of weeks earlier (thank you [Quizmaster][8]), so it seemed pretty clear that the site was the pre-shared key. So the next step should be XORing the message from the Number Station against the key. The result was:

>You have 108 minutes left to type your ID and these numbers: 04 08 15 16 23 42.

Working on the first try, and telling us that we already have the data we needed from the Spectrum. How nice!

We decoded the numbers from the Agent ID we got from the Spectrum with the remaining key and got a link to a pastebin that said:

>In the maze, near the manhole...

## The hard part

So now we had to find a maze near a manhole. We went outside, the Parque Eduardo VII had a bunch of bushes that seemed _kind_ of like a maze. Maybe we could find something near a manhole?
The time was 2AM and there were 4 people walking around in the middle of what was a pretty shady park. After splitting up and covering almost all of it, we found nothing and headed back into the venue.
We roamed around inside looking for something similar to a manhole for about an hour and nothing. Seemed like a dead end.
Checking Slack to see if someone had finished the challenge we noticed Isa was awake distributing Night Owl and Movie Night badges, so I talked to her. 
We told her that we followed all the steps, got to the pastebin, and that we even done something dumb and went to the middle of the park to find something.
She laughed and said we were on the right track from the start, and we soon got a message from [cdeath][9] who said, and I quote:
>satellite view might help

We went straight into google maps (lets pretend we did this on a phone from the beginning), and started looking for manholes and things that looked like manholes.
After marking a couple of them we went out into the park again, and while we were walking toward one of the marked spots, I get a message from Nuno asking if we're done already. I share what we're doing and show where we're intending to go and he asks us if we know what a manhole is.
At this point we're feeling dumb, and Nuno says what cracks it for us. Zoom, enhance.

![Zoom, enhance](/images/uploads/zoom,&#32;enhance.jpg)

There it was. The X that marked the spot.
We zoomed there pretty quick, found the manhole. And looked in the bushes for anything at all.
It took us pretty long to find it, but there it was.

![the cache](/images/uploads/cache.jpg)

Inside there were two handwritten hashcodes. Unlabeled. One of them had the T-Shirt Challenge badge, the other the T-Shirt Challenge Winner that was could be redeemed by one person only.

Me and Tiago each chose one and he got lucky!

![The end](/images/uploads/end.jpg)

~~Disregard the time, Tiago's phone ran out of battery and had to go to the venue to redeem the badge he picked.~~

The End.

## Thanks

We would like to thank everyone involved on building this puzzle.
You guys are awesome!


[1]: https://pixels.camp/killmaster
[2]: https://pixels.camp/tiagoad
[3]: https://pixels.camp/joanarijo
[4]: https://pixels.camp/bacitoto
[5]: https://pixels.camp/afonsus1997
[6]: https://pixels.camp/mjamado
[7]: https://pixels.camp/isacosta
[8]: https://pixels.camp/carlosefr
[9]: https://pixels.camp/cdeath

## More info

The full radio stream can be found [here](/images/uploads/eightyeightdotfive.egpp) <sup>[10]</sup>. Didn't include it in the story because it wasn't the one used by our team, but people might find it interesting.


## Credits

[10]: https://pixels.camp/miguelpduarte
[10] Miguel Duarte - for the brainfuck code, the full radio stream, and the picture of the Lost Pix3l