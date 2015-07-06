import Middleware from '../middleware';

export class CookieJar extends Middleware {
    constructor(request, cookie_jar) {
        this.request = request;
        this.cookie_jar = cookie_jar;
    }

    processRequestHeader(header_stream) {
        ....

        return my_header_stream;
    }

    processRequestBody(body_stream) {
        ....

        return my_body_stream;
    }

    processResponseHeader(header_stream) {
        let my_header_stream;

        header_stream

        return my_header_stream;
    }

    processResponseBody(body_stream) {
        ....

        return my_body_stream;
    }

    //['http', 'https'] - names of supported protocols
    protocols() {
        return ['http', 'https'];
    }
}
