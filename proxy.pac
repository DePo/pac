function FindProxyForURL(url, host) {

    if (dnsDomainIs(host, "demo.testfire.net") ){
       return "PROXY 127.0.0.1:8888";
    } else if (dnsDomainIs(host, "webscantest.com")) {
        return "PROXY 127.0.0.1:8800";
    } else {
        return "DIRECT";
    }
    
}
