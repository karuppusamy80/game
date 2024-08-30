from flask import Flask,redirect,render_template,jsonify,request
import requests,time


app=Flask(__name__)

@app.route("/",methods=["GET","POST"])
def hello_world():
    if request.method == "POST":
            city = request.form['city'] 
            api = "https://api.openweathermap.org/data/2.5/weather?q="+ city + "&appid=317d6a0c283a7f263716cac070886db8"
            response = requests.get(api)
            data = response.json()
            temp = round(data['main']['temp'] - 273.15)
            pressure = data['main']['pressure']
            humidity= data['main']['humidity']
            sunrise = time.strftime('%I:%M',time.gmtime(data['sys']['sunrise'] -21600))
            sunset = time.strftime('%I:%M',time.gmtime(data['sys']['sunset'] -21600))
       
            return render_template('weather.html',city=city,temp=temp,pressure=pressure,humidity=humidity,sunrise=sunrise,sunset=sunset)
    return render_template("weather.html")

      
      









if __name__ == "__main__":
    app.run(debug=True)
