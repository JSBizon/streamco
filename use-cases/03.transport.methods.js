
/**
 * Transport proxies some methods
 *
 */
class HttpTransport {
    proxy_methods () {
        return ['post', 'get', 'put']
    }

    post() {

    }

    get() {

    }
}


class FtpTransport {
    proxy_methods () {
        return ['list', 'get', 'put', 'append', 'cwd', ....]
    }



}

class TorrentTransport {
    proxy_methods () {
        return ['put', 'get']
    }
}

class CurlTransport {
    proxy_methods () {
        return ['list', 'command', 'get', 'put', 'append']
    }
}
