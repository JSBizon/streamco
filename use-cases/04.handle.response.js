/**
 *
 * Handle response
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

var response = stremco.request(...);

response
    .use(new Response.CookieJar(CookieStore) )
    .use(new SaveFile('file1.html'))
    .use(new Proxy([8080,9000])
    .onComplete();


response.body_stream.onEnd();
