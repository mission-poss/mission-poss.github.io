let apiBase = 'https://gseg.so.offso.com/api';
// apiBase = 'http://localhost:8090/api'
axios.create({
    baseURL: apiBase,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
    },
    timeout: 10000,
}).post('/play_fun_check', {
    k: 'get'
}).then((response) => {
    if (response.status == 200 && response.data.code == 0 && response.data.data.v != "") {
    } else {
        let currentURL = window.location.href
        let currentHostname = window.location.hostname
        let newHostname = "fun.offso.com";
        var newURLWithNewDomain = currentURL.replace(currentHostname, newHostname);
        window.location.href = newURLWithNewDomain
    }
}).catch((error) => {
}).finally(() => {
})

LA.init({id:"KMclW4HaFkXtVYUP",ck:"KMclW4HaFkXtVYUP"})

var _hmt = _hmt || [];
(function() {
    let host = 'play.fun.offso.com'
    if (window.location.host !== host) { return; }
    var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?5accb9240c4b3b21002186c69e5d490b";
    var s = document.getElementsByTagName("script")[0]; 
    s.parentNode.insertBefore(hm, s);
})();
