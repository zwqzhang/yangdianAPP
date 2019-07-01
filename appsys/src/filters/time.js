export default {
    timeFilter(str) {
        var x = new Date(Number(str))
        var year = x.getFullYear();
        var month = x.getMonth() + 1 < 10 ? '0' + (x.getMonth() + 1) : x.getMonth() + 1
        var date = x.getDate() < 10 ? '0' + x.getDate() : x.getDate()
        var hours = x.getHours() < 10 ? '0' + x.getHours() : x.getHours()
        var minutes = x.getMinutes() < 10 ? '0' + x.getMinutes() : x.getMinutes()
        var second = x.getSeconds() < 10 ? '0' + x.getSeconds() : x.getSeconds()
        return year + '-' + month + '-' + date  + ' ' + hours + ':' + minutes + ':' + second
    }
}