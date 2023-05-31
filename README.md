# notes-app

### Project Setup

Clone the project into a folder. The 'notes-app' folder will be created.
Change to that directory:
```sh
cd notes-app
```
Then run:
```sh
npm install
npm run format
```

### Run the app

```sh
npm run dev
```
The terminal should show a message saying to go to localhost port 5173 
(by default):
http://localhost:5173/


### Template
Project was initially created by running `npm init vue@latest` which creates as a base template
[create-vue](https://github.com/vuejs/create-vue).

### Contents
Folders:
- assets: contains the css assets, originated from the above-mentioned template
- components: `NoteItem` is a Note component listed in the `NotesList`
- router: has `router.js` file which is the implementation of the `VueRouter`
- stores: contains only one pinia store, the `note-store`, which saves the notes locally
- views: 
  - `NoteView` represents the view in which the user creates or edits a note 
  - `NoteListView` represents the overview of the list of notes

