angular.module("ngLocale", [], ["$provide", function ($provide) {
    var PLURAL_CATEGORY = {ZERO:"zero", ONE:"one", TWO:"two", FEW:"few", MANY:"many", OTHER:"other"};
    $provide.value("$locale", {"NUMBER_FORMATS":{"DECIMAL_SEP":".", "GROUP_SEP":",", "PATTERNS":[
        {"minInt":1, "minFrac":0, "macFrac":0, "posPre":"", "posSuf":"", "negPre":"-", "negSuf":"", "gSize":3, "lgSize":3, "maxFrac":3},
        {"minInt":1, "minFrac":2, "macFrac":0, "posPre":"\u00A4", "posSuf":"", "negPre":"\u00A4-", "negSuf":"", "gSize":3, "lgSize":3, "maxFrac":2}
    ], "CURRENCY_SYM":"¥"}, "pluralCat":function (n) {
        return PLURAL_CATEGORY.OTHER;
    }, "DATETIME_FORMATS":{"MONTH":["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"], "SHORTMONTH":["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"], "DAY":["日曜日", "月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日"], "SHORTDAY":["日", "月", "火", "水", "木", "金", "土"], "AMPMS":["午前", "午後"], "medium":"yyyy/MM/dd H:mm:ss", "short":"yy/MM/dd H:mm", "fullDate":"y年M月d日EEEE", "longDate":"y年M月d日", "mediumDate":"yyyy/MM/dd", "shortDate":"yy/MM/dd", "mediumTime":"H:mm:ss", "shortTime":"H:mm"}, "id":"ja-jp"});
}]);