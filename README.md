# 📦 HTML Inline Utility

Mali Node.js alat za **inline-ovanje CSS-a i drugih statičkih resursa u jedan HTML fajl**.  
Idealan za **statičke email poruke** (newsletteri, transakcioni emailovi) gde eksterni resursi nisu podržani.

---

## ✨ Šta radi

- Spaja HTML + CSS u **jedan self-contained HTML fajl**
- Inline-uje `<style>` i povezane statičke resurse
- Priprema HTML za **email klijente** (Gmail, Outlook, Apple Mail…)
- Smanjuje rizik od pogrešnog renderovanja u email klijentima

---

## 🛠️ Korišćenje

Pokretanje iz root direktorijuma projekta:

```bash
node ./src/inline.js --message=<name>
```

### Primer

Ako imate poruku definisanu kao `welcome`:

```bash
node ./src/inline.js --message=welcome
```

➡️ Rezultat je finalni HTML fajl sa svim stilovima inline-ovanim, spreman za slanje.

---

## 📁 Tipična struktura projekta

```text
messages/
  welcome/
    index.html
    styles.css

dist/
  welcome.html
```

- `messages/<name>/index.html` – izvorni HTML template  
- `messages/<name>/styles.css` – stilovi koji će biti inline-ovani  
- `dist/<name>.html` – finalni output fajl

---

## 🎯 Use-case scenariji

- 📧 Email template-ovi
- 📨 Marketing kampanje
- 🔔 Transakcioni emailovi
- 📄 Statički HTML export bez eksternih zavisnosti

---

## 📌 Napomena

Alat je namenjen **build-time** upotrebi i fokusiran je na:
- jednostavnost
- predvidljiv output
- kompatibilnost sa email klijentima

Nije zamišljen za runtime renderovanje.

---

## 📄 License

MIT
