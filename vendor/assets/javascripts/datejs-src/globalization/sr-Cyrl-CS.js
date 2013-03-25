Date.CultureInfo = { 	/* Culture Name */     name: "sr-Cyrl-CS",     englishName: "Serbian (Cyrillic, Serbia)",     nativeName: "ÑÑÐ¿ÑÐºÐ¸ (Ð¡ÑÐ±Ð¸ÑÐ°)",          /* Day Name Strings */     dayNames: ["Ð½ÐµÐ´ÐµÑÐ°", "Ð¿Ð¾Ð½ÐµÐ´ÐµÑÐ°Ðº", "ÑÑÐ¾ÑÐ°Ðº", "ÑÑÐµÐ´Ð°", "ÑÐµÑÐ²ÑÑÐ°Ðº", "Ð¿ÐµÑÐ°Ðº", "ÑÑÐ±Ð¾ÑÐ°"],     abbreviatedDayNames: ["Ð½ÐµÐ´", "Ð¿Ð¾Ð½", "ÑÑÐ¾", "ÑÑÐµ", "ÑÐµÑ", "Ð¿ÐµÑ", "ÑÑÐ±"],     shortestDayNames: ["Ð½Ðµ", "Ð¿Ð¾", "ÑÑ", "ÑÑ", "ÑÐµ", "Ð¿Ðµ", "ÑÑ"],     firstLetterDayNames: ["Ð½", "Ð¿", "Ñ", "Ñ", "Ñ", "Ð¿", "Ñ"],          /* Month Name Strings */     monthNames: ["ÑÐ°Ð½ÑÐ°Ñ", "ÑÐµÐ±ÑÑÐ°Ñ", "Ð¼Ð°ÑÑ", "Ð°Ð¿ÑÐ¸Ð»", "Ð¼Ð°Ñ", "ÑÑÐ½", "ÑÑÐ»", "Ð°Ð²Ð³ÑÑÑ", "ÑÐµÐ¿ÑÐµÐ¼Ð±Ð°Ñ", "Ð¾ÐºÑÐ¾Ð±Ð°Ñ", "Ð½Ð¾Ð²ÐµÐ¼Ð±Ð°Ñ", "Ð´ÐµÑÐµÐ¼Ð±Ð°Ñ"],     abbreviatedMonthNames: ["ÑÐ°Ð½", "ÑÐµÐ±", "Ð¼Ð°Ñ", "Ð°Ð¿Ñ", "Ð¼Ð°Ñ", "ÑÑÐ½", "ÑÑÐ»", "Ð°Ð²Ð³", "ÑÐµÐ¿", "Ð¾ÐºÑ", "Ð½Ð¾Ð²", "Ð´ÐµÑ"],  	/* AM/PM Designators */     amDesignator: "",     pmDesignator: "",      firstDayOfWeek: 1,     twoDigitYearMax: 2029,          /**      * The dateElementOrder is based on the order of the       * format specifiers in the formatPatterns.DatePattern.       *      * Example:      <pre>      shortDatePattern    dateElementOrder      ------------------  ----------------       "M/d/yyyy"          "mdy"      "dd/MM/yyyy"        "dmy"      "yyyy-MM-dd"        "ymd"      </pre>      *      * The correct dateElementOrder is required by the parser to      * determine the expected order of the date elements in the      * string being parsed.      */     dateElementOrder: "dmy",          /* Standard date and time format patterns */     formatPatterns: {         shortDate: "d.M.yyyy",         longDate: "d. MMMM yyyy",         shortTime: "H:mm",         longTime: "H:mm:ss",         fullDateTime: "d. MMMM yyyy H:mm:ss",         sortableDateTime: "yyyy-MM-ddTHH:mm:ss",         universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",         rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",         monthDay: "d. MMMM",         yearMonth: "MMMM yyyy"     },      /**      * NOTE: If a string format is not parsing correctly, but      * you would expect it parse, the problem likely lies below.       *       * The following regex patterns control most of the string matching      * within the parser.      *       * The Month name and Day name patterns were automatically generated      * and in general should be (mostly) correct.       *      * Beyond the month and day name patterns are natural language strings.      * Example: "next", "today", "months"      *      * These natural language string may NOT be correct for this culture.       * If they are not correct, please translate and edit this file      * providing the correct regular expression pattern.       *      * If you modify this file, please post your revised CultureInfo file      * to the Datejs Forum located at http://www.datejs.com/forums/.      *      * Please mark the subject of the post with [CultureInfo]. Example:      *    Subject: [CultureInfo] Translated "da-DK" Danish(Denmark)      *       * We will add the modified patterns to the master source files.      *      * As well, please review the list of "Future Strings" section below.       */	     regexPatterns: {         jan: /^ÑÐ°Ð½(ÑÐ°Ñ)?/i,         feb: /^ÑÐµÐ±(ÑÑÐ°Ñ)?/i,         mar: /^Ð¼Ð°Ñ(Ñ)?/i,         apr: /^Ð°Ð¿Ñ(Ð¸Ð»)?/i,         may: /^Ð¼Ð°Ñ/i,         jun: /^ÑÑÐ½/i,         jul: /^ÑÑÐ»/i,         aug: /^Ð°Ð²Ð³(ÑÑÑ)?/i,         sep: /^ÑÐµÐ¿(ÑÐµÐ¼Ð±Ð°Ñ)?/i,         oct: /^Ð¾ÐºÑ(Ð¾Ð±Ð°Ñ)?/i,         nov: /^Ð½Ð¾Ð²(ÐµÐ¼Ð±Ð°Ñ)?/i,         dec: /^Ð´ÐµÑ(ÐµÐ¼Ð±Ð°Ñ)?/i,          sun: /^Ð½Ðµ(Ð´(ÐµÑÐ°)?)?/i,         mon: /^Ð¿Ð¾(Ð½(ÐµÐ´ÐµÑÐ°Ðº)?)?/i,         tue: /^ÑÑ(Ð¾(ÑÐ°Ðº)?)?/i,         wed: /^ÑÑ(Ðµ(Ð´Ð°)?)?/i,         thu: /^ÑÐµ(Ñ(Ð²ÑÑÐ°Ðº)?)?/i,         fri: /^Ð¿Ðµ(Ñ(Ð°Ðº)?)?/i,         sat: /^ÑÑ(Ð±(Ð¾ÑÐ°)?)?/i,          future: /^next/i,         past: /^last|past|prev(ious)?/i,         add: /^(\+|aft(er)?|from|hence)/i,         subtract: /^(\-|bef(ore)?|ago)/i,                  yesterday: /^yes(terday)?/i,         today: /^t(od(ay)?)?/i,         tomorrow: /^tom(orrow)?/i,         now: /^n(ow)?/i,                  millisecond: /^ms|milli(second)?s?/i,         second: /^sec(ond)?s?/i,         minute: /^mn|min(ute)?s?/i, 		hour: /^h(our)?s?/i, 		week: /^w(eek)?s?/i,         month: /^m(onth)?s?/i,         day: /^d(ay)?s?/i,         year: /^y(ear)?s?/i, 		         shortMeridian: /^(a|p)/i,         longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,         timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc)/i,         ordinalSuffix: /^\s*(st|nd|rd|th)/i,         timeContext: /^\s*(\:|a(?!u|p)|p)/i     },  	timezones: [{name:"UTC", offset:"-000"}, {name:"GMT", offset:"-000"}, {name:"EST", offset:"-0500"}, {name:"EDT", offset:"-0400"}, {name:"CST", offset:"-0600"}, {name:"CDT", offset:"-0500"}, {name:"MST", offset:"-0700"}, {name:"MDT", offset:"-0600"}, {name:"PST", offset:"-0800"}, {name:"PDT", offset:"-0700"}] };  /********************  ** Future Strings **  ********************  *   * The following list of strings may not be currently being used, but   * may be incorporated into the Datejs library later.   *  * We would appreciate any help translating the strings below.  *   * If you modify this file, please post your revised CultureInfo file  * to the Datejs Forum located at http://www.datejs.com/forums/.  *  * Please mark the subject of the post with [CultureInfo]. Example:  *    Subject: [CultureInfo] Translated "da-DK" Danish(Denmark)b  *  * English Name        Translated  * ------------------  -----------------  * about               about  * ago                 ago  * date                date  * time                time  * calendar            calendar  * show                show  * hourly              hourly  * daily               daily  * weekly              weekly  * bi-weekly           bi-weekly  * fortnight           fortnight  * monthly             monthly  * bi-monthly          bi-monthly  * quarter             quarter  * quarterly           quarterly  * yearly              yearly  * annual              annual  * annually            annually  * annum               annum  * again               again  * between             between  * after               after  * from now            from now  * repeat              repeat  * times               times  * per                 per  * min (abbrev minute) min  * morning             morning  * noon                noon  * night               night  * midnight            midnight  * mid-night           mid-night  * evening             evening  * final               final  * future              future  * spring              spring  * summer              summer  * fall                fall  * winter              winter  * end of              end of  * end                 end  * long                long  * short               short  */