from openai import OpenAI   
from bs4 import BeautifulSoup
import requests
import pyrebase
import json

# Initialize OpenAI client
OPENAI_KEY = ""
client = OpenAI(api_key=OPENAI_KEY)

# Firebase configuration
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

# Initialize Firebase
firebase = pyrebase.initialize_app(firebaseConfig)
db = firebase.database()

# URLs to process
urls = [
    "https://news.mit.edu/topic/artificial-intelligence2",
    "https://techcrunch.com/category/artificial-intelligence/",
    "https://www.artificialintelligence-news.com/"
]

# Example JSON format for expected output to guide the model's response
example_json = {
  "AI_news_info": [
    {
      "author": "Ubayed Bin Sufian",
      "content": "WordPress News Magazine Charts the Most Chic and Fashionable Women of New York City",
      "date": "August 7, 2019",
      "heading": "AI NEWS"
    }
  ]
}

# Web crawler function to retrieve website content
def get_news_content(url):
    try:
        response = requests.get(url)
        if response.status_code != 200:
            return f"Failed to retrieve website: Status code {response.status_code}"
        
        soup = BeautifulSoup(response.content, 'html.parser')
        text = soup.get_text(separator=' ', strip=True)

        return text
    
    except requests.exceptions.RequestException as e:
        return f"An error occurred: {e}"


# Function to interact with GPT and retrieve specified fields
def retrieve_summary_from_gpt(content):
    
    messages = [
        {
            "role": "system", 
            "content": "You are an AI assistant. Extract and structure AI news data from website content in JSON format. Provide only one top article with 'author', 'content' (10-word summary), 'date', and 'heading' fields, matching this schema: " + json.dumps(example_json)
        },
        {
            "role": "user", 
            "content": f"Extract and format one top AI news article in JSON. Include author, 10-word content summary, date, and heading: {content}"
        }
    ]

    # Get the response from GPT
    response = client.chat.completions.create(
        model="gpt-4o-mini",
        response_format={"type":"json_object"},  # Specifies that the response should be a JSON object
        messages=messages
    )

    # Return extracted data in JSON format
    return response.choices[0].message.content.strip()
    
# Main function to retrieve data from URLs, call GPT, and store to Firebase
def process_and_store_data():

    content = [get_news_content(url) for url in urls]
    # print(content)

    # Retrieve summary from GPT based on crawled content
    gpt_summary = retrieve_summary_from_gpt(content)
    # print(gpt_summary)

    # Send data to Firebase
    db.child('AI_news_content').set(gpt_summary)
    print("Data sent to Firebase successfully.")

process_and_store_data()