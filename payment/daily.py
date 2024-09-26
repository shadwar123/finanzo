from flask import Flask, request, jsonify, render_template
from ast import literal_eval
from pymongo import MongoClient
from flask_cors import CORS
import os
import openai
import json
from dotenv import load_dotenv
app = Flask(__name__)

load_dotenv()
OPENAI_API_KEY = os.getenv('OPENAI_API_KEY')
# Function to load data from JSON file
def load_data():
    try:
        with open('data.json', 'r') as file:
            data = json.load(file)
    except FileNotFoundError:
        data = {'food': 0, 'cloth': 0, 'others': 0,'dispensary':0,'electronic':0}
    return data

# Function to save data to JSON file
def save_data(data):
    with open('data.json', 'w') as file:
        json.dump(data, file, indent=4)

# Function to update category value
def update_category(category, value):
    data = load_data()
    if category in data:
        data[category] += value
        save_data(data)
        print(f"Value added to '{category}': {value}")
    else:
        print("Invalid category.")




# Main route
@app.route('/')
def index():
    data = load_data()
    return render_template('index.html', data=data)
@app.route('/pay')
def pay():
    return render_template('pay.html')
# Route to handle form submission
@app.route('/add_value', methods=['POST'])
def add_value():
    category = request.form['category']
    value = float(request.form['value'])
    update_category(category, value)
    return index()

@app.route("/chat", methods=["GET", "POST"])
def CustomChatGPT():
    openai.api_key = OPENAI_API_KEY
                     
    # Load data from JSON file
    user_input = "suggest me some future plans in paragraph in 100 words in seperate lines."  # This is the user input message

    # Prepare messages list with system message and user input
    messages = [
        {"role": "system", "content": "You are a financial expert that specializes in real estate investment and negotiation"},
        {"role": "user", "content": user_input}
    ]
    
    try:
        # Call ChatGPT API
        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=messages
        )

        # Extract ChatGPT reply
        ChatGPT_reply = response["choices"][0]["message"]["content"]
        response_points = ChatGPT_reply.split('\n')
        # Render the response template and pass the response data
        return render_template('response.html', response=response_points)
    except openai.error.InvalidRequestError as e:
        # Handle invalid request error
        return jsonify({"error": str(e)})

if __name__ == "__main__":
    app.run(debug=True)



# from flask import Flask, render_template, request, jsonify
# import json

# app = Flask(__name__)

# # Function to load data from JSON file
# def load_data():
#     try:
#         with open('data.json', 'r') as file:
#             data = json.load(file)
#     except FileNotFoundError:
#         data = {'food': 0, 'cloth': 0, 'others': 0}
#     return data

# # Function to save data to JSON file
# def save_data(data):
#     with open('data.json', 'w') as file:
#         json.dump(data, file, indent=4)

# # Function to update category value
# def update_category(category, value):
#     data = load_data()
#     if category in data:
#         data[category] += value
#         save_data(data)
#         return True
#     else:
#         return False

# # Main route
# @app.route('/')
# def index():
#     data = load_data()
#     return render_template('index.html', data=data)

# # Route to handle form submission
# @app.route('/add_value', methods=['POST'])
# def add_value():
#     category = request.json.get('category')
#     value = float(request.json.get('value'))
#     success = update_category(category, value)
#     return jsonify({'success': success})

# if __name__ == "__main__":
#     app.run(debug=True)
