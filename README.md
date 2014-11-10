# flask-angular

 * flask + angularjs boilerplate

## features

### Server
 * Python 3.4.2
 * gunicorn
 * nginx

### Client
 * AngularJS
 * Bootstrap
 * Angular-Bootstrap

## gunicorn
 * gunicorn app:app -b localhost:5000

## nginx
 * sudo cp nginx/conf/flask-angular.conf /usr/local/etc/nginx/sites-available/
 * sudo ln -s /usr/local/etc/nginx/sites-available/flask-angular.conf /usr/local/etc/nginx/sites-enabled/
