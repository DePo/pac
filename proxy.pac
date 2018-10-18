function FindProxyForURL(url, host) {

    if (dnsDomainIs(host, "demo.testfire.net") ){
       return "PROXY 127.0.0.1:8888";
    }
    if (dnsDomainIs(host, "webscantest.com")) {
        return "PROXY 127.0.0.1:8800";
    } 
    
    return "DIRECT";
    
}
