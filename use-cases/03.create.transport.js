

var curl_transport = new CurlTransport({
    bin : '/usr/bin/curl',
    tmp_dir : '/tmp',
    plugins: [formFromDb, cookie_jar, deflate, proxies]
});


var ftp_transport = new FtpTransport({
    plugins: [authFromDb, speed_limit]
});


