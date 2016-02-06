## required packages:

  libasound2-dev

## arm node:

  wget http://node-arm.herokuapp.com/node_latest_armhf.deb
  sudo dpkg -i node_latest_armhf.deb

use ddclient to access remotely

## run script on start:

  /etc/systemd/system/myservice.service

```
[Unit]
Description=new order listener

[Service]
ExecStart=node /home/pi/new-order/index.js &

[Install]
WantedBy=multi-user.target
```


## nginx config

```
server {
   listen 80;
   root /var/pi/new-order/;
   server_name fixd-order.rabid.audio;
   location / {
      proxy_pass http://localhost:5000/;
   }
}
```
