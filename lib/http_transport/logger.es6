import Middleware from '../middleware';

export class Logger extends Middleware {
    constructor(request, output) {
        this.request = request;
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
        let my_header_stream = header_stream.scan('');
        //do subrequest
        return my_header_stream;
    }

    processResponseBody(body_stream) {
        ....

        return my_body_stream;
    }
}
