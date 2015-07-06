

response.header_stream // kefir stream
response.body_stream // kefir stream

/*
var request = streamco.request('http://google.com');
var response = request.send();

response.pipe(streamco.request('ftp://myftp.com'));
streamco.request('http://example.com/myfile').pipe(stremco.request('ftp://myftp.com/'));
*/

//request
//fs.createReadStream('file.json').pipe(request.put('http://mysite.com/obj.json'))


//request
//request('http://google.com/doodle.png').pipe(fs.createWriteStream('doodle.png'))



//request
//request.get('http://google.com/img.png').pipe(request.put('http://mysite.com/img.png'))

streamco.get('http://google.com').pipe(streamco.put('ftp://myftp.com/google.html'));

streamco.get('ftp://myftp.com/image.png')
    .pipe(
        streamco.file({}).post('http://myserver.com/upload.php')
        );
