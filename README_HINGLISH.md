# Site Ledger — phone par local save (simple guide)

## Ye version kaam kaise karega

- Website GitHub Pages se open hogi, lekin ledger data GitHub par nahi jayega.
- Har saved entry is phone ke browser/app mein IndexedDB naam ke local database mein save hogi.
- Pehli baar page internet se kholo; phir app shell offline open ho sakta hai. Save confirmation ke baad entry local device par likh di gayi hoti hai.
- Google Drive automatic connect nahi hai. Backup button JSON file download karta hai; us file ko tum Drive mein upload karte ho.

## GitHub Pages par daalne ka short process

1. GitHub par repo banao; is folder ke **saare files** repo root mein upload karo: `index.html`, `sw.js`, `manifest.webmanifest`, `icon.svg`, `icon-192.png`, `icon-512.png`.
2. Repo → **Settings → Pages** → Deploy from branch → `main` / root → Save. Github tumhe `https://username.github.io/repo/` jaisa link dega.
3. Mobile par Chrome mein link kholo, pehli baar internet on rakho. Android Chrome menu se **Install app / Add to Home screen**. iPhone Safari Share → **Add to Home Screen**.
4. App ko hamesha usi installed icon/link se kholo, same phone + same browser. Private/Incognito mode mat use karo.
5. Pehli entry se pehle Backup tab mein **Download full JSON backup** ka test kar lo; file ko Google Drive app se upload karke rakh sakte ho.

## Data loss se bachne ke simple rules

- Status `Local autosave` ya `Device storage protected` ho aur save toast aaye tab entry saved samjho.
- Browser settings se `site data/storage` clear mat karna; app uninstall ya Android “clear app data” bhi local ledger mita sakta hai.
- Phone kho gaya/break hua toh Drive par backup se restore karna hoga. Backup ke bina doosre phone par data khud transfer nahi hota.
- “Try to protect local storage” browser se storage eviction protection maangta hai; user/OS ke manual deletion ya phone loss ko nahi rok sakta.
- End of workday par JSON download karke private Drive mein upload karna sabse seedha safety routine hai. JSON restore file hai; CSV Excel sorting ke liye hai.
- Photos/receipts app mein embed nahi hote. Drive mein photo rakho aur uska naam/link evidence field mein likho.

## Important

Yeh local personal ledger hai, permanent cloud database nahi. Data isi device/browser/origin par rahega. GitHub Pages URL ya account badalne se app ka local data doosre origin mein alag ho sakta hai. Automatic backup baad mein cloud backend maangega; is version mein jaan-bujhkar nahi hai.
