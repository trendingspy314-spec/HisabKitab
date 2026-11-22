# Site Ledger — Firebase sync version (Hinglish guide)

## Seedhi baat

- **GitHub Pages** app ki website dikhata hai; ledger data GitHub mein nahi rakhta.
- **Firebase** signed-in account ke private Firestore area mein ledger sync karta hai.
- Har phone par **same Google account** use karna hai.
- Internet na ho toh entry isi phone par save ho sakti hai; cloud sync internet wapas aane par hoga. Header mein **Synced** status dekhne ke baad hi cloud-save pakka samjhein.
- JSON backup/restore aur har section ke CSV export ab bhi hain. JSON ko Drive mein manually upload karte rahein.

## Aapke existing GitHub repo mein upload

Aapka repo: `trendingspy314-spec/HisabKitab`.

1. Pehle is app se **Backup → Download full JSON backup** karke file ko phone/Drive mein rakh lein.
2. GitHub repo kholkar **Add file → Upload files** karein.
3. Is folder ke ye files repo ke root (main screen par jo `index.html` hai usi jagah) upload/replace karein: `index.html`, `sw.js`, `manifest.webmanifest`, `icon.svg`, `icon-192.png`, `icon-512.png`, `firebase-config.js`, `firestore.rules`, `README_HINGLISH.md`.
4. Commit changes karein. GitHub Pages ka address wahi rahega: `https://trendingspy314-spec.github.io/HisabKitab/`.

## Firebase ek baar set up karein

1. `https://console.firebase.google.com/` par **apne hi Google account** se sign in karke project banayein.
2. Project mein **Add app → Web (</>)** chunein. App nickname kuch bhi rakh sakte hain. Firebase web config dikhayega.
3. Is repo ki `firebase-config.js` file GitHub par edit karein. Firebase se mile `apiKey`, `authDomain`, `projectId`, `appId` values ko file ke `PASTE_...` values se replace karein. `ownerEmail` ko apne Google account ke email se replace karein. `storageBucket` ya service-account key yahan mat daalein.
4. Firebase Console → **Authentication → Get started → Sign-in method → Google → Enable → Save**.
5. Authentication ke **Settings / Authorized domains** mein `trendingspy314-spec.github.io` add karein. Sirf hostname dalein—`https://`, `/HisabKitab/` ya slash nahi.
6. Firebase Console → **Firestore Database → Create database**. Production mode/locked rules chunein; region ko soch samajhkar chunein, kyunki baad mein badalna mushkil hota hai.
7. Firestore → **Rules** tab mein `firestore.rules` file ka poora text paste karein. `PASTE_YOUR_GOOGLE_EMAIL` ko config mein diye gaye usi email (lowercase) se replace karke **Publish** karein. Rule ko `true` karke public mat karein.
8. Config file save/commit karne ke baad Pages update hone ke liye thoda intezar karke app kholein, **Sign in** dabayein, aur wahi Google account chunein. Pehli baar purane phone ke local records is account ke cloud ledger ke saath jod diye jayenge; existing rows ko ID ke hisaab se merge kiya jata hai.

## Roz ka use aur check

- Entry save karne ke baad header mein **Synced** status aaye tabhi cloud copy confirm hai.
- Internet na ho toh phone par local copy rahegi; connection lautne par app kholkar **Sync now** dabayein. Local-only save ko doosre device par turant nahi dekha ja sakta.
- Naye phone par same GitHub Pages link + same Google account use karein.
- Backup tab se JSON download karke private Google Drive folder mein khud upload karte rahein. Restore selected phone ke records ko replace karta hai; restore ke baad sync local aur cloud rows ko merge karta hai, cloud rows delete nahi karta.
- CSV export har section se alag hota hai; complete restore ke liye JSON rakhein.

## Security aur limits

- Browser Firebase config website code mein hota hai, isliye woh secret/password nahi hai. Data ki hifazat sign-in aur Firestore rules karte hain. **Password, private key, PIN, Aadhaar/PAN** kisi file/entry mein mat daalein.
- Rules sirf configured Google email ke authenticated account ko uske apne UID ke neeche data access karne dete hain. Config email aur Rules wala email ekdum same rakhein.
- Is ready version mein current ledger ek Firestore document mein sync hota hai. Firestore document ki size limit 1 MiB hai; bahut bade/lambe ledger par sync error aaye toh backup rakhein aur app ko paginated record storage mein badalna padega.
- Firebase quotas/pricing badal sakti hain; Firebase Console mein project ka usage/billing dekhein. Free quota ko unlimited na samjhein.
- Yeh files Firebase project create nahi karti aur sign-in test nahi karti. Setup complete hone tak header **Setup needed / Local only** dikha sakta hai.
