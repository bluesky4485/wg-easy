'use strict';

const { release } = require('./package.json');

module.exports.RELEASE = release;
module.exports.PORT = process.env.PORT || 51821;

//TODO部署时需要修改password的值，或者将此值写入环境变量中
module.exports.PASSWORD = process.env.PASSWORD;
module.exports.WG_PATH = process.env.WG_PATH || '/etc/wireguard/';

//TODO部署时需要修改WG_HOST的值，或者将此值写入环境变量中
module.exports.WG_HOST = process.env.WG_HOST;
module.exports.WG_PORT = process.env.WG_PORT || 51820;
module.exports.WG_MTU = process.env.WG_MTU || null;
module.exports.WG_PERSISTENT_KEEPALIVE = process.env.WG_PERSISTENT_KEEPALIVE || 25;
module.exports.WG_DEFAULT_ADDRESS = process.env.WG_DEFAULT_ADDRESS || '10.8.0.x';
module.exports.WG_DEFAULT_DNS = typeof process.env.WG_DEFAULT_DNS === 'string'
  ? process.env.WG_DEFAULT_DNS
  : '114.114.114.114';
module.exports.WG_ALLOWED_IPS = process.env.WG_ALLOWED_IPS || '10.8.0.0/24';

module.exports.WG_POST_UP = process.env.WG_POST_UP || ``

// module.exports.WG_POST_UP = process.env.WG_POST_UP || `
// iptables -t nat -A POSTROUTING -s ${module.exports.WG_DEFAULT_ADDRESS.replace('x', '0')}/24 -o eth0 -j MASQUERADE;
// iptables -A INPUT -p udp -m udp --dport 51820 -j ACCEPT;
// iptables -A FORWARD -i wg0 -j ACCEPT;
// iptables -A FORWARD -o wg0 -j ACCEPT;
// `.split('\n').join(' ');

module.exports.WG_POST_DOWN = process.env.WG_POST_DOWN || '';
