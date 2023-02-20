var body=$response.body;
body = body.replace(/vipLevel\": \d/g,'vipLevel": 3');
body = body.replace(/expires\": "1970/g,'expires": "2025');
body = body.replace(/vipTipsType\": -1/g,'vipTipsType": 0');
$done(body);
