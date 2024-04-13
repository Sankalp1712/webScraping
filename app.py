from flask import Flask, request, jsonify
from flask_cors import CORS
import os
import sys
import mysql.connector

# Add the directory containing scraping.py to the Python path
sys.path.append(os.path.join(os.path.dirname('scraping.py'), 'engine'))

# Import the scraping module
import scraping


app = Flask(__name__)
CORS(app)

db = mysql.connector.connect(
    host="localhost",
    user="root",
    password="root",
    database="article"
)

cursor=db.cursor()
author_name=None
year=None

@app.route('/search', methods=['POST'])
def submit():
    global year
    global author_name
    global year
    data = request.get_json()
    text_value = data.get("authorName")
    syear=data.get("selectedYear")
    if(syear==""):
        year=0
    else:
        year=int(syear)
    
   
    print(text_value +"  :3 ")
    print(year)

    if(text_value!="All"):

        scraping.process_text(text_value)


    
    # Call a function from scraping.py and pass the text value
    import time
    time.sleep(5)

    author_name=text_value

    return jsonify({'message': 'Text value received and processed successfully','flag':True})

@app.route('/fetch', methods=['GET'])
def get_data():
    global author_name
    global year
    flag=True
    print(author_name)
    
    
    if author_name == "All" and year !=0:
        cursor.execute("SELECT * FROM publication WHERE pub_year = %s", (year,))
    elif year == 0 and author_name != "All":
        cursor.execute("SELECT * FROM publication WHERE author >= %s", (author_name,))
    elif year == 0 and author_name == 'All':
        cursor.execute("SELECT * FROM publication")
    else:
        cursor.execute("SELECT * FROM publication WHERE author = %s and pub_year = %s", (author_name, year))
    
    data = cursor.fetchall()
    if(author_name=="All") :
        flag=False
    result = []
    for row in data:
        result.append({
            'author_id': row[0],
            'title': row[1],
            'pub_year': row[2],
            'citation': row[3],
            'author': row[4],
            'publication_id': row[5],
            'num_citations': row[6],
            'citation_url': row[7],
            'flag': flag
        })

    return jsonify(result)

@app.route('/fetch1', methods=['GET'])
def get_author_data():
    cursor.execute("SELECT * FROM author")
    data = cursor.fetchall()
    
    if author_name == "All":
        flag = False
    
    result = []
    for row in data:
        result.append({
            'author_id': row[0],
            'name': row[1],
            'affiliation': row[2],
            'email': row[3],
            'interests': row[4],
            'department': row[5],
            'citedby': row[6],
            'h_index': row[7],
            'i10_index': row[8],
            'last_searched': row[9]
        })

    return jsonify(result)


if __name__ == '__main__':
    app.run(debug=True)
