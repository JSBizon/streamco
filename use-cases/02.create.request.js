/**
 *
 * Create request approaches
 * ================
 *
 * Data:
 * =====
 * Need to set different options to the request
 * Easy set up additional plugins
 *
 * Primary Course
 * ==============
 * Exception Course
 * ================
 */

//?, hard to detect priority of plugins
var request = streamco.request({
    method: 'post',
    uri: 'http://www.google.com',
    proxy: '8080',
    speed_limit: 100,
    file: ['file1', 'file2'],
    auth: {
        login: 'login',
        password: 'password'
    },
    cookieJar: cookieJar,
    deflate: true
});

var response = request.send();

//create request with plugins priority:
var request = streamco.request(
    {
        method: 'post',
        uri: 'http://www.google.com',
        cookieJar: cookieJar,
        auth: {
            login: 'login',
            password: 'password'
        }
    },{
        proxy: function* () {
            yield 8080;
        },
        speed_limit: 100,
        file: ['file1', 'file2'],
    },{
        deflate: true
    }
);

var response = request.send();

//create request plugins used by default from streamco initialization
var request = streamco.get('http://google.com');
var request = new Streamco.Request();

//construct chain request??
var response = streamco.request()
    .auth({
        'login' : 'login',
        'password' : 'password'
    })
    .form({
        'email': 'email',
        'name': 'name'
    })
    .proxy(8080)
    .cookie_jar(cookieJar)
    .file(['file1', 'file2'])
    .speed_limit(100)
    .deflate(true)
    .post('http://google.com');


//set up additional plugins for request
var FormFromDb = require('form-from-db');
var Proxy = require('streamco.http.proxy');
var File = require('streamco.http.file');

var db = new Sequelize(database, username, password, options);

streamco.request().use(FormFromDb, db)
    .use(File,['file1','file2'])
    .use(Proxy,[8080,9000])
    .post('http://google.com');

var response = request.uri('http://test.com').method('POST').send();

