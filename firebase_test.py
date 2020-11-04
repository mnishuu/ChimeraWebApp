from firebase import firebase
import random

firebase = firebase.FirebaseApplication('https://myawsomeprp.firebaseio.com/', None)
while True:
    toDatabase = {
        'speed': random.randint(30, 100),
        'temp': random.randint(1, 60),
        'rpm': random.randint(1000, 7000),
        'Current': random.randint(30, 100),
        'voltage': random.randint(60, 100)
    }
    result = firebase.post('/MotorData', toDatabase)