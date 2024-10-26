import pyrebase

firebaseConfig = {
  "apiKey": "AIzaSyBJwu2gatIkgBCZqseonxsoJd5gPyz0ShE",
  "authDomain": "ai-news-hub.firebaseapp.com",
  "databaseURL": "https://ai-news-hub-default-rtdb.europe-west1.firebasedatabase.app",
  "projectId": "ai-news-hub",
  "storageBucket": "ai-news-hub.appspot.com",
  "messagingSenderId": "1011698158648",
  "appId": "1:1011698158648:web:bc0fe5428b832845096acd",
  "measurementId": "G-78PDLMH4DB"
}

firebase=pyrebase.initialize_app(firebaseConfig)

db=firebase.database()

# Send data to the database
data = "Hello Ubayed!"
db.child('AI_news_content').set(data)