---
layout: post
title: Quizshow Challenge - Prison Break
date: 2020-03-09T00:00:58.139Z
---
A new year, a new ~~bacon throwing competition~~ Quizshow Treasure Hunt!

This time with less bacon and more politeness.

## The first step

Starts off with a Missing in Action 2 image with 11 pairs of numbers on it. We had 44, 24, 33, 54, a space, 41, 34, 35, 14, 15, 41, and 15.

![44 24 33 54   41 34 35 14 15 41 15](/images/uploads/start.jpg "Start")

The numbers don't translate directly to any human readable ascii so my first thought was some kind of cipher. Given that each digit of each pair never went above 5, what came to mind was the [Polybius square](https://en.wikipedia.org/wiki/Polybius_square).

So I went to <https://www.dcode.fr/polybius-cipher> and tested the first four pairs with an automatic decryption. And it worked. The output showed me that for the basic form of the latin alphabet, we get the word TINY. I then decoded the last 7 pairs with the basic form as a key and got the word QOPDEQE.

The answer then should be [tinyurl.com/QOPDEQE](tinyurl.com/QOPDEQE) that redirected us to [step 2](https://onedrive.live.com/?authkey=%21ABnW2cvRjtv9mVA&id=9E5220A782867151%21434&cid=9E5220A782867151)

## The signal

On that link we get a wave file we a note.

> May be somewhat slow to vanquish but, in the end, well worth hearing with your own eyes.

First thing that pops into my head is to open Audacity and look at the spectrogram.

![Spectrogram](/images/uploads/spectrogram.jpg "How peculiar")

Guess I got really really lucky this time. A couple of months ago I found an [article on audio steganography ](https://medium.com/@sumit.arora/audio-steganography-the-art-of-hiding-secrets-within-earshot-part-2-of-2-c76b1be719b3)that had a spectrogram that looked a lot like this one. 

This had to be SSTV.

Instead of following what the article suggested (in all fairness I only managed to find the article a couple of hours after finishing the challenge), we (and by we I mean [mjamado](https://pixels.camp/mjamado)) installed qsstv and messed with pulseaudio to get an image.

![sstv](/images/uploads/sstv.png "SSTV")

This gives us [bit.ly/2uenB9w](bit.ly/2uenB9w) and we get to [step 3](https://photos.google.com/share/AF1QipOTUaplHwAecR0XK1nv1njNBN23vQ4tv273zYQJOkt52gZ7I5sue6gA7lvUu-mJrA/photo/AF1QipPfQ-3-j_F1iWI_onIkapU6Wqmt9_P-pS2Zd2yq?key=dzA5Y28yUmdDMkFIbkRzU2dUa0tpYmVpNlp4Q01R)

## Liberty

![there's more to me](/images/uploads/postcard.jpg "Liberty")

I actually got stuck here, mainly because I'm dumb and downloaded a thumbnail instead of the actual file.

But [luisfcorreia](https://pixels.camp/luisfcorreia) actually knows how the internet works and solved this one swiftly.

He noticed that there was data after the JPG endmark, and that that data had a PK, so he unzipped it.

```
$ unzip postcard.jpg

Archive:  postcard.jpg
If you wish to visit the upside down,
step right in as you're leaving town.

Phil
warning [postcard.jpg]:  120845 extra bytes at beginning or within zipfile
  (attempting to process anyway)
```

This had a QR code called **upside_down.jpg** and we get to the step 4.

As a note, after downloading the correct file, I just opened the postcard.jpg with 7zip and got the code from there 🤷‍♂️.

## CMYK

![upside_down.jpg](/images/uploads/upside_down.jpg "upside_down.jpg")

We now have an unreadable QR code. We haven't really used any hints from the previous step. Could the CMYK Statue of Liberty be a hint?

There were at least two ways of doing this.

The first one was to use something like Photoshop and check each channel, the other was to use imagemagick to separate each channel into each own file, like this:

```
$ convert upside_down.jpg -colorspace cmyk -separate upside_down_%d.jpg
```

This then returned 4 files, numbered 0 to 3, that were readable QR codes.

![34](/images/uploads/upside_down_0.jpg "34")

![76](/images/uploads/upside_down_1.jpg "76")

![154](/images/uploads/upside_down_2.jpg "154")

![54](/images/uploads/upside_down_3.jpg "54")

They each read 34, 76, 154, and 54. 

An IP address maybe? *checks [34.76.154.54 ](34.76.154.54)really quick* Yup! Onto **step 5**!



## The passive-aggressive server
