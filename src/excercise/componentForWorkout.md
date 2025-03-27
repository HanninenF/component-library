### **📌 Uppgift: Skapa en statisk komponent för mängdträning**  

Du ska skapa en **statisk React-komponent** för att **visa träningspass**.  
Den ska fungera liknande din `FilterableProductTable`, men hantera **träningsdata** istället.  

---

## **🔹 Data: Träningspass**
Du ska hantera en lista med träningspass (`workouts`). Varje pass har:
- `category` (t.ex. "Cardio", "Strength")
- `name` (t.ex. "Running", "Bench Press")
- `duration` (tid i minuter)
- `caloriesBurned` (ungefärliga förbrukade kalorier)
- `id` (unik identifierare)

Exempel på **workouts**:
| **Category**  | **Name**       | **Duration** | **Calories Burned** |
|--------------|---------------|--------------|---------------------|
| Cardio       | Running       | 30 min       | 300 kcal           |
| Cardio       | Cycling       | 45 min       | 400 kcal           |
| Strength     | Bench Press   | 20 min       | 150 kcal           |
| Strength     | Squats        | 25 min       | 200 kcal           |

---

## **🔹 Komponenthierarki**
**Dela upp komponenterna i mindre delar** precis som du gjorde med `ProductTable`.

### **1️⃣ `WorkoutTable` (Huvudkomponent)**
- Tar emot en **lista med träningspass (`workouts`)** som props.
- **Grupperar träningspassen per kategori**.
- **Renderar en tabell med träningspassen**.

### **2️⃣ `WorkoutCategoryRow` (Kategori-rubrik)**
- Visar **kategori-rubriker** i tabellen.
- Exempel: `"Cardio"` och `"Strength"`.

### **3️⃣ `WorkoutRow` (Träningspass-rad)**
- Visar **ett träningspass i tabellen**.
- Exempel: `"Running - 30 min - 300 kcal"`.

---

## **📌 Krav på implementation**
- Komponenterna ska **bara rendera data och inte ha någon interaktivitet**.
- `WorkoutTable` ska **ta emot data via props** och **gruppera träningspassen per kategori**.
- Du får **inte använda state eller hooks**, utan endast props och JSX.

---

### **🎯 Mål**
- **Bygg en statisk träningskomponent liknande din produkt-tabell.**
- **Följ SRP och dela upp komponenterna på ett tydligt sätt.**
- **Rendera en tabell med träningspass uppdelade per kategori.**

🚀 **Lycka till!** Vill du ha en utmaning efter detta kan vi lägga till interaktivitet! 😊