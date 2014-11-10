# -*- coding: utf-8 -*-

from flask import Flask, render_template, jsonify, request
from werkzeug.contrib.fixers import ProxyFix

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/api/hello')
def hello():
    resp = {
        'msg': 'hello'
    }
    return jsonify(resp)


@app.route('/api/goodbye', methods=['POST'])
def goodbye():
    msg = request.get_json(force=True)['msg']
    resp = {
        'msg': 'Goodbye ' + msg
    }
    return jsonify(resp)


app.wsgi_app = ProxyFix(app.wsgi_app)
if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True, port=5000)
