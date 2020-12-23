---
layout: post
title: Pixels.Camp Forever mini-challenge
date: 2020-12-23T21:31:19.708Z
---
As most of you know, this year's [Pixels.Camp](https://pixels.camp) was cancelled due to the COVID-19 pandemic, with no future date planned yet.

But since the organizers are awesome, they offered a limited number of a special t-shirt to a few of us in the community that met some criteria. I won't explain it all here, but you can check it out [here](https://github.com/PixelsCamp/pixelscamp-forever).

In typical Pixels.Camp fashion, there was a *not so hidden* present with it.

## The card

So the card didn't arrive with the t-shirt and was instead delivered via [twitter](https://twitter.com/pixelscamp/status/1340724144778801152) and slack.

![Oh Flynn...](/images/uploads/a6_1.png "A6_1")

![See you in the future!](/images/uploads/a6_2.png "A6_2")

It was slightly obvious that the numbers weren't just *random noise*. Nothing ever is.
So me and [Afonso](https://twitter.com/Af0nsus) OCRed the card and got the text.

The quote is from Tron: Legacy. [Carlos Rodrigues](https://twitter.com/carlosefr), our beloved quizmaster, shared the clip for that specific part of the film with us. You can watch it [here](https://www.youtube.com/watch?v=pDHBqK8gc_E).

Since we were only interested in the numbers, we deleted the Tron's quote from it and got:

```
058 228 189 044 064 119 052 157 103 043 052 147 076 141 015 094 009 041 043 240 044 068 101
108 218 016 155 053 118 103 244 058 175 151 189 050 115 221 105 247 096 051 189 235 215 131
070 225 015 092 000 010 231 064 250 123 053 069 152 229 215 184 219 182 129 089 159 228 054
038 050 200 041 130 243 227 228 197 020 053 203 125 083 195 173 149 046 217 017 237 122 030
011 138 100 191 229 082 112 111 200 249 111 137 236 230 057 162 054 241 180 018 050 117 228
185                 206 095 232 230 042 202 205 153 192 232 253 080 099 071 120 237 108 241
251 110 042 049 103 000 100 255 214 009 248 015 126 155 169 174 213 202 147 099 007 032 228
001                     138 044 114 020 048 134 143 036 019 025 150 025 185 093 058 207 013
006                                                                             023 049 118
138                         156 014 135 217 148 022 118 222 058 172 003 113 205 063 157 076
252                     017 135 161 208 039 060 140 028 044 211 223 121 163 199 176 254 087
078                                 172 223 076 180 183 141 081 096 007 056 108 125 051 127
120                                                     163 176 051 047 123 249 012 228 095
185                         146 097 239 073 139 084 149 183 045 107 069 231 133 022 070 154
086 150 049 253 080 163 196 203 048 033 133 152 087 197 150 000 221 243 173 001 033 022 213
024             070 229 165 189 129 233 152 219 061 126 161 020 203 127 206 163 095 085 000
121 161 045 213 029 070 171 075 167 218 003 171 055 120 029 249 100 038 221 133 195 023 078
249                             119 209 201 181 063 129 023 033 094 212 218 213 095 031 024
136 053 057 155 103 077 212 089 209 121 056 016 150 179 085 159 239 038 109 239 040 079 033
169 131 036 183 168 158 002 233 080 203 036 237 140 076 187 064 000 241 062 235 094 051 243
021 073 167 236 159 115 253 194 141 201 227 107 014 027 234 190 045 169 186 169 093 038 079
196 110 201 149 086 116 231 159 255 015 064 066 223 030 053 091 197 164 205 037 080 247 162
034 189 245 221 152 095 086 244 102 078 181 084 202 100 036 175 239 112 014 166 164 012 213
191 042 002 044 198 150 104 114 187 220 062 238 204 118 093 137 004 156 055 234 191 181 136
197 018 213 138 234 156 155 005 009 242 120 068 128 035 184 149 017 226 170 067 210 007 193
211 089 035 105 012 123 245 003 208 166 036 246 196
```

The aestethic of it didn't seem to be a clue, so we made it a number per line.

## The numbers Mason, what do they mean?!

Now came the time consuming part of the whole deal. There were no clues that actually helped me getting the answer, and in hindsight, there weren't any clues that didn't totally give it away.

Things I tried on the first day included:

* looking for patterns in the bytes after converting them to binary
* converting each byte to unicode and trying to read the text
* rotating the matrix and trying the previous steps
* trying to find a way to use [TRON Code](https://en.wikipedia.org/wiki/TRON_(encoding)) on it
* getting an image out of the bytes in grayscale
* store the bytes in a binary file and `chmod +x` it
* doing the same thing we did in [2019's T-shirt challenge](https://killmaster.netlify.app/2019/03/24/the-tshirt-challenge/) with the one-time pad
* *badly* using (*foreshadowing*) the decryption process from the [Pixels.Camp Forever](https://github.com/PixelsCamp/pixelscamp-forever) site but with the public key.

So a couple of days later I decided to ask for more clues and our quizmaster asked me what I had tried already, and after I listed some of the things he told me I as awfully close in one of them.

Given that the only try that gave any kind of output that wasn't just giberish was the decryption process, I decided to stick to that one.

## Getting the answer

By now I needed the bytes into a binary, so I rewrote a little python script to do it for me.

```python
with open("card-numbers.txt") as f:
    data = [int(line.rstrip('\n')) for line in f.readlines()]

f = open('result.enc', 'wb')
f.write(bytearray(data))
f.close()
```

After trying a lot of stuff instead of actually reading the documentation, I decided to actually read the error message instead of just copy-pasting it into Google and complaining.
Seems like `openssl rsautl -inkey public.crt -in result.enc` tells you that it is `unable to load Private Key`. 
Well, yeah... There is no private key there. 
Guess what, there's a parameter `-pubin` that tells openssl that the key used is the public key.
But this still returns an error. This time it's `unable to load Public Key`.
And guess what, what we have isn't a public key. It's a public certificate.
We extract the key from the certificate with `openssl x509 -pubkey -noout -in public.crt > public.key`.

The final command is

```
openssl rsautl -inkey public.key -in result.enc -pubin
```

Where `result.enc` is the binary file and `public.key` is the key extracted from the certificate.

We then get the hidden message:

```
        PI  XELSCAMPPI  XE
      LS  CA          MP  PI
      XE  LS          CA  MP
        PI  XE      LS  CA
              MP  PI
                XE
              LSCAMP
            PIXELSCAMP

You're one of us, that's for sure. :)
```

## Conclusion

Thank you guys for this little extra challenge this year! We love you!
Thank you Afonso for helping! And for the badges! Check his [github](https://github.com/afonsus1997)!

Hope to see you all in a next Pixels.Camp event!

### Little extra

Here's a pic of the T-shirt and Afonso's badges.

![Maximum flex](/images/uploads/img_20201222_130335.jpg "The T-shirt and badges!")