# HisabKitab / Site Ledger — complete Firebase bundle (Hinglish)

## Pehle yeh samjhein

GitHub Pages app ki screen/code serve karta hai. Firebase Google sign-in aur cloud ledger store karta hai. **GitHub par `firestore.rules` file upload karne se Firebase rules apne-aap publish nahi hote**—Firebase Console mein Rules tab se alag se Publish karne honge.

## Existing repo mein complete files upload

Repo: `trendingspy314-spec/HisabKitab`.

1. App khul raha ho toh Backup tab se JSON backup download karke safe jagah rakhein. **Clear site data mat karein**—us se phone ki local entries mit sakti hain.
2. Is ZIP ko extract karein. Andar ki files ko GitHub repo ke root mein upload karke same-name files replace karein: `index.html`, `sw.js`, `manifest.webmanifest`, `icon.svg`, `icon-192.png`, `icon-512.png`, `firebase-config.js`, `firestore.rules`, `README_HINGLISH.md`.
3. GitHub par commit karein.
4. Cache ko bypass karke updated app kholne ke liye pehli baar yeh URL use karein: `https://trendingspy314-spec.github.io/HisabKitab/?refresh=4`. Yeh local IndexedDB data delete nahi karta.

## Firebase Console mein ek baar zaroor check/publish karein

1. Firebase Console → **Authentication → Sign-in method → Google** → Enable → Save.
2. Authentication → **Settings → Authorized domains** mein `trendingspy314-spec.github.io` hona chahiye (hostname only; `/HisabKitab/` nahi).
3. **Firestore Database → Rules** mein is package ke `firestore.rules` ka poora text paste karke **Publish** karein. Current rule sirf configured owner Google account ko access deta hai; ise `true` karke public na karein.
4. Repo ke `firebase-config.js` mein current Firebase Web App config rakhein. Is package mein GitHub par abhi maujood config hai. Agar Firebase project/app badla hai toh Console → Project settings → Your apps se naye `apiKey`, `authDomain`, `projectId`, `appId` daalna zaroori hai. Service-account/private key kabhi nahi daalni.

## Test kaise karein

1. App mein Google icon ke saath **Google se sign in** dabayein aur config mein diye gaye wahi Google account se sign in karein.
2. App par lautne ke baad header mein **Synced** dikhna chahiye. Backup tab mein **Cloud & local safety** ke neeche login/sync ki detail bhi dikhegi.
3. Ek chhoti test entry save karein; “Saved on this device and cloud” message/“Synced” status dekhein. Doosre device par wahi Google account kholkar verify karein.
4. JSON backup manual hi rahega—Backup tab se download karke apne Drive mein upload karein. CSV exports bhi har section mein hain.

## Agar login ya sync fail ho

Backup tab → **Cloud & local safety** mein exact error text/code dekhein:

- `auth/unauthorized-domain` → Firebase Authentication ke Authorized domains mein `trendingspy314-spec.github.io` add karke Save karein.
- `auth/operation-not-allowed` → Google provider enable nahi hua; Authentication mein enable karein.
- `permission-denied` → Firebase Console ke Firestore → Rules mein package ka rules text paste karke **Publish** karein. Sirf GitHub par rules file hona kaafi nahi.
- `Wrong Google account` → config mein owner ke roop mein set account se sign in karein.
- `Setup needed` / Firebase SDK error → internet on rakhein aur page reload karein; config fields check karein.

Error code ke saath screenshot bhejne se exact agla fix pata chalega. Password, private key ya OTP kisi ko mat bhejein.

## Data safety / limit

Offline entry pehle is phone par save hoti hai; internet/sign-in ke baad app cloud sync karta hai. Doosre phone par tabhi milegi jab sync successful ho. JSON backup phir bhi alag safety copy hai. Is version mein poora ledger ek Firestore document ke andar hai; Firestore document ki 1 MiB limit hoti hai, isliye bahut bade ledger par alag paginated-storage design chahiye.
