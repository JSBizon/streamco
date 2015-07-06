/**
 * Streamco uses different transport like a plugin.
 * Create transport
 * ================
 *
 * Data:
 * =====
 * Primary Course
 * ==============
 * Exception Course
 * ================
 */

var Streamco = require('streamco');
var CurlTransport = require('streamco.curl');
var FTPTransport = require('streamco.ftp');
var RtorrentTransport = require('streamco.rtorrent');
var WebTransport = require('streamco.web');//default
var PhantomJSTransport = require('streamco.phantomjs');
var FileTransport = require('streamco.file');//implement protocol file://


//init curl transport
var curl_transport = new CurlTransport({
    bin : '/usr/bin/curl',
    tmp_dir : '/tmp'
});

/*
[
'ftp',
'smtp',
'http',
'https',
....
]
*/
curl_transport.protocols();//list of protocols




var streamco = new Streamco({
    transports : curl_transport,//[curl_transport, ftp_transport, request_transport]

/*
    transports : {
        'http,https' : ,
        'magnet' : torrent_transport
    },

    transports : function (protocol, uri) {
        if (protocol == 'http') {
            return new CurlTransport({});
        }
    },
*/
    concurrency_limit : 10,

    middlewares: [DbForm, CookieJar, Deflate, Proxy]//default plugins which will be installed for every request

    /*
    plugins: [{
                factory: CookieJar,
                arguments: {
                    store: new DbCookieStore()
                },
                alias: 'cookie_jar'
            },
            {
                factory: Proxy,
                arguments: {
                    proxies: ['127.0.0.1:8080', '127.0.0.1:9000'],
                    proxy_choice: function() {
                }
            }
            },
        {
            factory: Redirect,
            arguments: {
                max_redirects: 10
            },
            alias: 'redirect'
        },
        {
            factory: function () {
                return [plugin1, plugin2];
            }
        }
    ],

     */
});

/*
Plugins can be dependent from transport, plugins dependent from protocol

*/


/*init by file*/
var streamco = new Streamco(config_file);

var request = streamco.request('http://google.com');
var response = request.send();

response.pipe(streamco.request('ftp://myftp.com'));

streamco.request('http://example.com/myfile').pipe(stremco.request('ftp://myftp.com/'));

