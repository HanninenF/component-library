### **📌 Uppgift: Skapa en statisk komponent för en boklista**  

**📝 Beskrivning:**  
Du ska skapa en **statisk React-komponent** som visar en lista med böcker. Böckerna ska vara grupperade efter genre, och varje bok ska ha information om **titel, författare och antal sidor**.  

---

## **🔹 Komponenthierarki**
📂 **Ditt projekt ska innehålla följande komponenter:**  

1. **`BookCategoryRow`** – Visar en rubrik för varje genre.  
2. **`BookRow`** – Visar en rad med bokens information.  
3. **`BookTable`** – Renderar hela tabellen med böcker och genrer.  
4. **`App`** – Huvudkomponenten som skickar in bokdatan.  

---

## **📌 Datan du ska använda**
Skapa en **array av objekt** för böckerna, t.ex.:

```tsx
const BOOKS = [
  { category: "Fantasy", title: "The Hobbit", author: "J.R.R. Tolkien", pages: 310, id: "1" },
  { category: "Fantasy", title: "Harry Potter", author: "J.K. Rowling", pages: 320, id: "2" },
  { category: "Sci-Fi", title: "Dune", author: "Frank Herbert", pages: 412, id: "3" },
  { category: "Sci-Fi", title: "Neuromancer", author: "William Gibson", pages: 271, id: "4" },
  { category: "Mystery", title: "The Girl with the Dragon Tattoo", author: "Stieg Larsson", pages: 465, id: "5" },
  { category: "Mystery", title: "Gone Girl", author: "Gillian Flynn", pages: 422, id: "6" },
];
```

---

## **📌 Krav för uppgiften**
✅ **Gruppera böckerna per kategori** (använd `.reduce()` eller `.map()`).  
✅ **Rendera en tabell med böckerna** – första raden ska vara `th`-element för kolumnrubriker.  
✅ **Visa kategori-rubriker (`BookCategoryRow`) endast en gång per kategori**.  
✅ **Se till att `colSpan` i kategori-rubriken är dynamiskt och matchar antalet kolumner.**  
✅ **Ge varje element en unik `key` (t.ex. `id` för böcker och kategori + index för kategorirubriker).**  

---

🚀 **Bonusutmaning:**  
🔹 Lägg till en **dynamisk `tableHead`-prop** så att du kan ändra tabellens rubriker.  
🔹 Lägg till en extra egenskap, t.ex. **utgivningsår**, och gör kolumnerna dynamiska.  

---

💡 **När du är klar – fråga mig om du vill ha feedback på din lösning! 😃**