# 🌐 Bilingual Form Manager  
A sleek and bilingual (FA/EN) form application designed to store user data in LocalStorage, export data as CSV, and switch seamlessly between RTL and LTR layouts. Perfect for modern web projects!  

---

## 🚀 Features at a Glance  
- **Bilingual Support**: Fully supports Persian and English languages.  
- **Data Storage**: Saves data locally using your browser’s LocalStorage.  
- **CSV Export**: Export user data as a properly encoded CSV file.  
- **Responsive Design**: Automatically adjusts layout for RTL or LTR based on the selected language.  
- **Cross-Browser Compatibility**: Works flawlessly on major browsers.  

---

## 📖 Table of Contents  
1. [Usage](#usage)  
2. [Screenshots](#screenshots)  
3. [Project Structure](#project-structure)  
4. [Features in Detail](#features-in-detail)  
5. [Installation](#installation)  
6. [Browser Support](#browser-support)  
7. [License](#license)  

---

## 🎯 Usage  
1. Select your preferred language (FA/EN) using the language switcher.  
2. Fill in the required fields:  
   - First Name  
   - Last Name  
   - Mobile Number  
3. Save your data by clicking **"Save Data"**.  
4. Use **"Download CSV"** to export all saved records.  
5. To reset everything, click **"Clear Saved Data"**.  

---

## 🖼️ Screenshots  
### Persian Form  
![Persian Form](https://github.com/Code1616/CSVExporterForm/blob/main/screenshots/persian-form.png)  

### English Form  
![English Form](https://github.com/Code1616/CSVExporterForm/blob/main/screenshots/english-form.png)  

---

# 🗂️ Project Structure  
- **index.html**: Main HTML structure and layout  
- **style.css**: Styling and theme definitions  
- **script.js**: Handles all application logic  

---

## 🔍 Features in Detail  

### Data Storage  
- Uses browser's LocalStorage for persistent storage.  
- Stores data in a clean and accessible JSON format.  
- Ensures all inputs meet validation constraints before saving.  

### CSV Export  
- Exports saved records in UTF-8 encoded CSV format.  
- Includes headers in both Persian and English.  
- BOM (Byte Order Mark) ensures proper encoding in all spreadsheet software.  

### Language Support  
- Effortless switching between Persian and English.  
- Adapts layout dynamically to RTL or LTR direction.  
- Remembers your language preference for the session.  

---

## 💻 Installation  
Follow these simple steps to run the project locally:  

1. Clone the repository:  
   ```bash  
   git clone https://github.com/Code1616/CSVExporterForm.git
   ```  
2. Open the `index.html` file in your browser.  

---

## 🌍 Browser Support  
| Browser  | Supported Version |  
|----------|-------------------|  
| Chrome   | Latest            |  
| Firefox  | Latest            |  
| Safari   | Latest            |  
| Edge     | Latest            |  

---

## 📜 License  
This project is licensed under the **MIT License**. Feel free to use it for both personal and commercial purposes.  

---

### 💡 Pro Tip  
Want to see it live? Host it on [GitHub Pages](https://code1616.github.io/CSVExporterForm/) and share the link! 🚀  
