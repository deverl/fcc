sudo apt update
sudo apt install python3-pip python3-venv nginx user-agents mariadb-server



sudo mysql_secure_installation


sudo systemctl enable mariadb
sudo systemctl start mariadb


sudo systemctl status mariadb


CREATE DATABASE fcc;
CREATE USER 'fccuser'@'localhost' IDENTIFIED BY 'fccuser';
GRANT ALL PRIVILEGES ON fcc.* TO 'fccuser'@'localhost';
FLUSH PRIVILEGES;



sudo systemctl status nginx


sudo systemctl start nginx
sudo systemctl enable nginx


cd /path/to/fccmysql

rm -rf venv
python3 -m venv venv
source venv/bin/activate
pip install flask gunicorn pymysql mysql-connector-python blinker click flask_cors itsdangerous jinja2 MarkupSafe packaging PyYAML ua-parser ua-parser-builtins user-agents werkzeug titlecase



Install these packages with pip


Package                Version
---------------------- ------------
blinker                1.9.0
click                  8.1.8
Flask                  3.1.0
flask_cors
gunicorn               23.0.0
itsdangerous           2.2.0
Jinja2                 3.1.6
MarkupSafe             3.0.2
mysql-connector-python 9.2.0
packaging              24.2
pip                    24.2
PyMySQL                1.1.1
PyYAML                 6.0.2
ua-parser              1.0.1
ua-parser-builtins     0.18.0.post1
user-agents            2.2.0
Werkzeug               3.1.3



Place the flaskapp.service file at /etc/systemd/system/myflaskapp.service


Place the myflaskapp file at /etc/nginx/sites-available/myflaskapp


sudo systemctl daemon-reexec
sudo systemctl daemon-reload
sudo systemctl start myflaskapp
sudo systemctl enable myflaskapp

sudo rm /etc/nginx/sites-enabled/default


sudo ln -s /etc/nginx/sites-available/myflaskapp /etc/nginx/sites-enabled
sudo nginx -t
sudo systemctl restart nginx







# Put this line in the crontab file to automatically update the database every Monday morning

0 2 * * 1 cd /opt/fcc && /opt/fcc/bin/update.sh >> /opt/fcc/update.log 2>&1


