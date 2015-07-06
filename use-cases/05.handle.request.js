/**
 * Every request is a stream. In this request can be injected different behaviours.
 * 
 * Handle request
 * ================
 *
 * Data:
 * =====
 * Pieces of data moved from every handler.
 * piece of data moved in different streams: 
 * header
 * body
 * arguments (for transport which used command line: curl for example)
 * 
 * Primary Course
 * ==============
 * Exception Course
 * ================
 */

var resp = streamco.get('/').
    map(form({
          login : 'Login',
          password : 'Password'
    })).
    form({
     field : "fff",
    }).
    proxy(8080).
    auth('').
    speedLimit(1000).
    file('http://google.com/file.txt').
    filter().
    send();

var req = streamco.request({
  type: 'post', 
  url : 'http://www.google.com'
  proxy: '8080',
  speed_limit: 100,
  file: ['file1','file2'],
  auth: {
    login : 'login',
    password: 'password'
  },
  cookieJar : cookieJar,
  deflate : true
});

var response = req.send()

Priority.FIRST, 
MIDDLE - any
LAST - deflate, speed_limit

Kefir.fromBinder(function(emitter) {
  console.log('!activation');
  var i = 0;
  var intervalId = setInterval(function() {
    emitter.emit(++i);
  }, 1000);
  return function() {
    console.log('!deactivation');
    clearInterval(intervalId);
  }
});


Transport.prototype.file(['test1.txt'], {
  header : function (header, emitter) {
    var file_size = fs.getFileSize();

  },
  body : function (body, emitter) {

  }
});

FileStream

/*
Return RequestState object:

type: 'processing',//done,processing
finished: [{'name' : {
  login:'login'
  password: 'password',
  finished : Date()
}],

unfinished: [{
  name : 'file',
  arguments : ['superfile.txt'],
  last_activity: Date(),
  },
  {
  name: 'deflate',
  arguments: ['true']
  }
  ],
}
last_activity : Date(),

 */
state();
