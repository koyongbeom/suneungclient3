function setCookie(cookie_name : string, value : any, days : number) { 
    var exdate = new Date(); 
    exdate.setDate(exdate.getDate() + days); // 설정 일수만큼 현재시간에 만료값으로 지정 
    var cookie_value = escape(value) + ((days == null) ? '' : '; expires=' + exdate.toUTCString()); 
    document.cookie = cookie_name + '=' + cookie_value; 
}

function getCookie(cookie_name : string) {
    var x, y;
    var val = document.cookie.split(';');
    for (var i = 0; i < val.length; i++) {
        x = val[i].substr(0, val[i].indexOf('='));
        y = val[i].substr(val[i].indexOf('=') + 1);
        x = x.replace(/^\s+|\s+$/g, ''); // 앞과 뒤의 공백 제거하기 
        if (x == cookie_name) {
            return unescape(y); // unescape로 디코딩 후 값 리턴 
        }
    }
}

function addCookie(id: number) {
    var items = getCookie('record'); // 이미 저장된 값을 쿠키에서 가져오기 
    var expire = 30; // 쿠키값을 저장할 기간 
    if (items) {
        var itemArray : any = items.split(',');
        if (itemArray.indexOf(id) != -1) { // 이미 존재하는 경우 종료 
            console.log('Already exists.');
        } else { // 새로운 값 저장 및 최대 개수 유지하기 
            itemArray.unshift(id);
            items = itemArray.join(',');
            setCookie('record', items, expire);
        }
    } else { // 신규 id값 저장하기 
        setCookie('record', id, expire);
    }
}

export default {setCookie, getCookie, addCookie};