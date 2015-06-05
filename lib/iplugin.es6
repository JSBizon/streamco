class IPlugin {
    constructor(streamco, request) {
        this.streamco = streamco;
        this.request = request;
    }

    processRequestHeader(request_header_stream) {
        //by default just return header stream without any changes
        return request_header_stream;
    }

    processRequestBody(request_body_stream) {
        return request_body_stream;
    }

    processResponseHeader(response_header_stream) {
        return response_header_stream;
    }

    processResponseBody(response_body_stream) {
        return response_body_stream;
    }

    protocols() {
        return [];
    }

    transports() {
        return [];
    }
}