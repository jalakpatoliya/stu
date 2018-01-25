Patch 3 :- v3
1. Created routes and models.Added router = express.Router() in place of app = express() in file students.js(models folder) and the exported router from the file
2. Created multiple exports in student.js(routes folder) as studentSchema and Students model both were needed in other methods.ie:Xlsx2Mongo(). Multiple exports referred from: https://stackoverflow.com/questions/13857203/cant-get-data-from-database-after-multiple-schema-declared-mongoose-express
3. Deleted the files in uploads folder thus the empty folder is not showing in github.Btw uploads folder will automatically be created while uploading excel.


Patch 1 :- v1
Merging data with same Enrollment ID but not able to merge data in nested objects.
