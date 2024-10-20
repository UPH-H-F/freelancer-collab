from flask import Flask, request, render_template

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def index():
  if request.method == 'POST':
    name = request.form['name']
    email = request.form['email']
    message = request.form['message']
    
    # Process the data here (e.g., save to a database)
    # ...

    return 'Message received successfully!'
  else:
    return render_template('index.html')  # Your HTML file

if __name__ == '__main__':
    app.run(debug=True) 