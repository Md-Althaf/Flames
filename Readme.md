# Flames Public Wall

No pages left at teh back of ur Notebook ? Dont worry you can us ethis Falmes Website to calculate your result!

whether u wnat to check ur flames outcome .post your mathc on the public though "Flames Wall" , or want to share it , this project has coveered for u .

(And i u didnt get the result u wnated  ... feel free to for the repo and manipulate the script , that's what we can do we cant change fate though )



## How to Set Up Your Own Database (Google Sheets + Apps Script)

if u wnat to make thsi yourself then go to spreadsheet and create a new one and make headers name1 and name2 and result and date in row 1 okay .

1. inside ur spreadsheet look at the link in ur browser URL . grab the long string of text right after `/d/` like this :
   `httsp://docs.gogle.com/spredsheets/d/YOUR_SPREDSHET_ID_HERE/edt`

2. copy that code after `/d/` that is ur spreadsheet file name / ID .

3. go to Extensions -> Apps Script and paste ur code and add ur ID like this :
   ```javascript
   const sheet = SpreadsheetApp.openById("YOUR_SPREDSHET_ID_HERE").getActiveSheet();