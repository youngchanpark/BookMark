from flask import Flask, request, jsonify
from flask_bcrypt import Bcrypt

from database import session, Users

app = Flask(__name__)

app.config['ENV'] = 'development'
app.config['DEBUG'] = True
app.config['TESTING'] = True

bcrypt = Bcrypt(app)

@app.route('/register', methods = ['POST'])
def register():
    user = Users()
    user.name = request.get_json()['name']
    user.username = request.get_json()['username']
    user.email = request.get_json()['email']
    user.password = bcrypt.generate_password_hash(
                request.get_json()['password']
                ).decode('utf-8')
    
    try:
        session.add(user)
        session.commit()
    except:
        error = {
            'response': 500,
            'name': user.name,
            'username': user.username,
            'email': user.email            
        }
        return error # You don't really need jsonify anymore

    result = {
        'response': 200,
        'name': user.name,
        'username': user.username,
        'email': user.email
    }
    return jsonify(result)

if __name__ == "__main__":
    app.run()
