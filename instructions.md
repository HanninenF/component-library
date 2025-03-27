### **1. Kombinatorer**

**React-komponent:** **Multi-Level Dropdown Menu**

- **Beskrivning:** Bygg en flerdimensionell dropdown-meny där varje nivå använder CSS-kombinatorer för att välja rätt element.
- **Övning:** Använd **kombinatorer** för att tillämpa olika stilar på menyns olika nivåer, t.ex. `ul > li > ul` för att styla underkategorier som är dolda tills de hoveras.

```html
<nav class="dropdown-menu">
  <ul>
    <li><a href="#">Menyalternativ 1</a></li>
    <li class="submenu">
      <a href="#">Menyalternativ 2</a>
      <ul>
        <li><a href="#">Undermeny 1</a></li>
        <li><a href="#">Undermeny 2</a></li>
      </ul>
    </li>
    <li><a href="#">Menyalternativ 3</a></li>
  </ul>
</nav>
```

---

### **2. Pseudo-klasser** **React-komponent:** \*\*Interactive Tab

Navigation** - **Beskrivning:** Skapa en tabb-navigationskomponent där varje
tabb har en hover- och active-tillstånd som ändrar färg eller textstil. -
**Övning:** Använd **pseudo-klasser\*\* som `:hover`, `:active`, och `:focus` för
att ändra tabbens utseende när användaren interagerar med den.

```html
<div class="tabs">
  <div class="tab" id="tab1">Tab 1</div>
  <div class="tab" id="tab2">Tab 2</div>
  <div class="tab" id="tab3">Tab 3</div>
</div>

<div class="tab-content" id="tab1-content">Innehåll för Tab 1</div>
<div class="tab-content" id="tab2-content">Innehåll för Tab 2</div>
<div class="tab-content" id="tab3-content">Innehåll för Tab 3</div>
```

---

### **3. Pseudo-element** **React-komponent:** **Chip Component** -

**Beskrivning:** Skapa en "chip"-komponent där varje chip har ett `::before`
eller `::after` pseudo-element för att visa ett ikon eller tagg. - **Övning:**
Använd **pseudo-element** för att lägga till en ikon eller text före eller efter
varje chip, till exempel en kryssikon för att ta bort en tagg.

```html
<div class="chip">
  <span>JavaScript</span>
  <button class="close-btn">×</button>
</div>
<div class="chip">
  <span>React</span>
  <button class="close-btn">×</button>
</div>
```

---

### **4. Nesting** **React-komponent:** \*\*Card Component with Nested

Elements** - **Beskrivning:** Skapa en kortkomponent med en bild, titel och
textinnehåll. Inuti varje kort kan du ha en nested **list** eller en **button**
som är stylerad med hjälp av nested CSS-regler. - **Övning:** Använd **Nesting\*\*
för att skapa stilar för interna element i kortet, exempelvis `.card .title`
eller `.card .button`.

```html
<div class="card">
  <img src="image.jpg" alt="Bild" class="card-image" />
  <div class="card-body">
    <h2 class="card-title">Card Title</h2>
    <p class="card-text">Det här är en kortbeskrivning av innehållet.</p>
    <button class="card-button">Läs mer</button>
  </div>
</div>
```

---

### **5. `&` i Nesting Selector** **React-komponent:** \*\*Button Group with

Hover Effect** - **Beskrivning:** Skapa en grupp med knappar där du använder
**`&`** för att referera till den aktuella knappen och applicera en `:hover`
effekt på varje knapp i gruppen. - **Övning:** Använd **`&`\*\* för att skapa en
hover-effekt för varje knapp i en `ButtonGroup`, där t.ex. knapparna ändrar färg
eller storlek när de hoveras.

```html
<div class="button-group">
  <button class="button">Button 1</button>
  <button class="button">Button 2</button>
  <button class="button">Button 3</button>
</div>
```

---

### **6. Compound Selector** **React-komponent:** **Form with Inputs** -

**Beskrivning:** Skapa ett formulär som innehåller flera olika typer av inputs,
som textfält, checkboxar och radioknappar, och använd **compound selectors** för
att applicera olika stilar beroende på inputtyp eller om den är inuti ett
specifikt formulär. - **Övning:** Kombinera selektorer för att selektera
specifika element som `input[type="text"].active` eller `form .checkbox`.

```html
<form class="form">
  <label for="text-input">Text Input:</label>
  <input type="text" id="text-input" class="input" />

  <label for="checkbox">Checkbox:</label>
  <input type="checkbox" id="checkbox" class="checkbox" />

  <label for="radio">Radio Button:</label>
  <input type="radio" name="group" id="radio" class="radio" />

  <button type="submit">Submit</button>
</form>
```

---

### **7. CSS Shorthand** **React-komponent:** \*\*Custom Button with Shorthand

Styling** - **Beskrivning:** Bygg en anpassad knapp där du använder **shorthand
CSS** för att skriva kortare stilregler för `border`, `padding`, och `margin`. -
**Övning:\*\* Använd shorthand-syntax för att effektivisera din CSS, exempelvis
`border: 2px solid black` eller `margin: 10px 20px 15px`.

```html
<button class="custom-button">Click Me!</button>
```

---

### **8. Användning av `:hover` och `transition`** **React-komponent:**

**Hoverable Card** - **Beskrivning:** Skapa en kortkomponent som ändrar sin
bakgrundsfärg eller skugga när användaren hovrar över den. - **Övning:** Använd
`:hover` tillsammans med **transition** för att skapa en smidig övergång när
användaren hovrar över kortet, t.ex. genom att använda `transition:
background-color 0.3s ease-in-out`.

```html
<div class="hoverable-card">
  <img src="image.jpg" alt="Bild" class="card-image" />
  <div class="card-body">
    <h2 class="card-title">Hover over me!</h2>
    <p class="card-text">Den här kortet får en förändring vid hover.</p>
  </div>
</div>
```

---

### **9. Animationer med `@keyframes`** **React-komponent:** \*\*Progress Bar

with Animation** - **Beskrivning:** Skapa en progress bar som animerar med hjälp
av **@keyframes** och gör en fin pulserande effekt när den laddas. - **Övning:\*\*
Skapa en animation som gör att progress baren växer från 0% till 100% över en
viss tid, med en pulserande effekt.

```html
<div class="progress-container">
  <div class="progress-bar" id="progress"></div>
</div>
```

---

### **10. Animationsbeteenden (Ease, Ease-In, Ease-Out)**

**React-komponent:** **Modal Dialog Box** - **Beskrivning:** Skapa en modal
dialog som visas med en animation. När modalen öppnas ska den glida in från
toppen med en `ease-in` och när den stängs ska den glida ut med en `ease-out`. -
**Övning:** Använd **transition-timing-function** för att styra hastigheten på
animationen när modalen visas och göms, t.ex. `transition: transform 0.3s
ease-in-out`.

```html
<div class="modal-overlay" id="modal-overlay">
  <div class="modal">
    <button class="close-modal" id="close-modal">X</button>
    <div class="modal-content">
      <h2>Modal Title</h2>
      <p>Modal content goes here.</p>
      <button>OK</button>
    </div>
  </div>
</div>
```

---

### **11. Testa och jämför Transition och Animation** **React-komponent:**

**Tooltip Component** - **Beskrivning:** Skapa en tooltip-komponent som dyker
upp när användaren hovrar över ett element. Tooltipen kan ha en smidig övergång
(transition) för att visa sig, samt en animation för att få den att pulsande
upprepas efter en viss tid. - **Övning:** Använd **transition** för att animera
tooltipens synlighet och **animation** för att göra den pulsande när den är
synlig.

```html
<div class="tooltip-container">
  <button class="tooltip-trigger">Hover over me!</button>
  <div class="tooltip-content">This is a tooltip message.</div>
</div>
```

Perfekt! Här kommer en lista med 5 **React-komponentövningar** som bara använder **HTML-struktur (JSX)** och **SASS** – du får bygga komponenterna själv, utan att använda Material UI-biblioteket, men inspireras av deras riktiga komponenter. Du övar på:

- **kombinatorer**
- **pseudo-klasser**
- **pseudo-element**
- **nesting**
- **&**
- **compound selectors**

---

### 🟢 1. **Button med olika tillstånd**

**Tränar:** pseudo-klasser, compound selectors, nesting  
👉 Skapa en `<Button>`-komponent med följande struktur:

```jsx
<button>Click me</button>
```

#### Din uppgift:

- Använd `:hover`, `:focus`, `:active` och `:disabled` för att ge knappen olika visuella tillstånd.
- Lägg till en `disabled`-variant som visas som grå.
- Styla utifrån om knappen har en modifierarklass som `.primary` eller `.secondary`.

---

### 🟢 2. **Alert-komponent med ikon**

**Tränar:** pseudo-element, nesting, &  
👉 Skapa en `<Alert>`-komponent med följande struktur:

```jsx
<div className="alert success">
  <span className="message">Your profile was updated!</span>
</div>
```

#### Din uppgift:

- Använd ett `::before` pseudo-element för att skapa en ikon (exempelvis en ✔) som visas innan meddelandet.
- Ändra färg beroende på klass: `.success`, `.error`, `.warning`.
- Använd nesting med `&.success`, `&.error` i SCSS.

---

### 🟡 3. **Accordion / Expansion Panel**

**Tränar:** kombinatorer, pseudo-klasser, compound selectors  
👉 Struktur:

```jsx
<div className="accordion">
  <div className="item">
    <button className="header">Section 1</button>
    <div className="content">Hidden content here</div>
  </div>
  <!-- fler items -->
</div>
```

#### Din uppgift:

- Göm `.content` med CSS och visa det bara när `.item` har klassen `.open`.
- Använd `+` (adjacent sibling combinator) för att påverka `.content` när `.header` är i ett visst tillstånd.
- Styla `.header:hover` och `.item.open .header`.

---

### 🟡 4. **Search Input med animation**

**Tränar:** pseudo-element, nesting, pseudo-klasser  
👉 Struktur:

```jsx
<div className="search">
  <input type="text" placeholder="Search..." />
</div>
```

#### Din uppgift:

- Lägg till en förstoringsglasikon med `::before` inuti `.search`.
- När input får `:focus`, förläng sökrutan med en mjuk transition.
- Använd `&:focus-within` i din SASS för att reagera på fokus inuti `.search`.

---

### 🟠 5. **Vertical Tabs med aktiv markering**

**Tränar:** compound selectors, pseudo-klasser, kombinatorer  
👉 Struktur:

```jsx
<div className="tabs">
  <button className="tab active">Tab 1</button>
  <button className="tab">Tab 2</button>
  <button className="tab">Tab 3</button>
</div>
```

#### Din uppgift:

- Gör `.tab.active` visuellt markerad (t.ex. bakgrundsfärg).
- Använd `:not(.active)` för att ge icke-aktiva knappar ett annat utseende.
- Lägg till `:hover` och `:focus` för interaktiv känsla.
- Använd `nth-child` för att lägga till gräns på alla utom sista.

---
