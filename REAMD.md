```
import * as machine from './index'
async function gen() {
    console.log(JSON.stringify(await new machine.HardInfo().gen()))
}
gen()
```
```JSON
{
	"arch": 11,
	"platform": 7,
	"cpu": {
		"model": "Intel(R) Core(TM) i7-7700K CPU @ 4.20GHz",
		"speed": 4200,
		"amount": 8
	},
	"hostname": "DESKTOP-UVAMCHI",
	"network": {
		"以太网": [{
			"address": "fe80::797e:787c:e8db:ef58",
			"netmask": "ffff:ffff:ffff:ffff::",
			"family": "IPv6",
			"mac": "38:d5:47:79:2f:a7",
			"scopeid": 19,
			"internal": false,
			"cidr": "fe80::797e:787c:e8db:ef58/64"
		}, {
			"address": "192.168.0.50",
			"netmask": "255.255.255.0",
			"family": "IPv4",
			"mac": "38:d5:47:79:2f:a7",
			"internal": false,
			"cidr": "192.168.0.50/24"
		}],
		"以太网 2": [{
			"address": "fe80::a170:2659:905a:b8d2",
			"netmask": "ffff:ffff:ffff:ffff::",
			"family": "IPv6",
			"mac": "00:50:56:c0:00:08",
			"scopeid": 11,
			"internal": false,
			"cidr": "fe80::a170:2659:905a:b8d2/64"
		}, {
			"address": "169.254.184.210",
			"netmask": "255.255.0.0",
			"family": "IPv4",
			"mac": "00:50:56:c0:00:08",
			"internal": false,
			"cidr": "169.254.184.210/16"
		}],
		"以太网 5": [{
			"address": "fe80::f177:2b26:1bd7:82a3",
			"netmask": "ffff:ffff:ffff:ffff::",
			"family": "IPv6",
			"mac": "00:50:56:c0:00:01",
			"scopeid": 6,
			"internal": false,
			"cidr": "fe80::f177:2b26:1bd7:82a3/64"
		}, {
			"address": "169.254.130.163",
			"netmask": "255.255.0.0",
			"family": "IPv4",
			"mac": "00:50:56:c0:00:01",
			"internal": false,
			"cidr": "169.254.130.163/16"
		}],
		"Loopback Pseudo-Interface 1": [{
			"address": "::1",
			"netmask": "ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff",
			"family": "IPv6",
			"mac": "00:00:00:00:00:00",
			"scopeid": 0,
			"internal": true,
			"cidr": "::1/128"
		}, {
			"address": "127.0.0.1",
			"netmask": "255.0.0.0",
			"family": "IPv4",
			"mac": "00:00:00:00:00:00",
			"internal": true,
			"cidr": "127.0.0.1/8"
		}]
	},
	"hdd": {
		"parts": [{
			"free": "66.66 GB",
			"size": "193.93 GB",
			"place": "C:",
			"letter": "C:"
		}, {
			"free": "171.27 GB",
			"size": "251.82 GB",
			"place": "D:",
			"letter": "D:"
		}, {
			"free": "8.33 GB",
			"size": "99.24 GB",
			"place": "F:",
			"letter": "F:"
		}, {
			"free": "247.50 GB",
			"size": "277.00 GB",
			"place": "G:",
			"letter": "G:"
		}, {
			"free": "79.31 GB",
			"size": "277.00 GB",
			"place": "H:",
			"letter": "H:"
		}, {
			"free": "223.66 GB",
			"size": "277.29 GB",
			"place": "I:",
			"letter": "I:"
		}],
		"total": {
			"free": "796.73 GB",
			"size": "1.34 TB"
		}
	},
	"release": "10.0.17134",
	"type": 3,
	"user": {
		"uid": -1,
		"gid": -1,
		"username": "鄢鹏权",
		"homedir": "C:\\Users\\鄢鹏权",
		"shell": null
	},
	"memory": {
		"total": 17103507456,
		"free": 8986157056
	},
	"uptime": 5721
}
```