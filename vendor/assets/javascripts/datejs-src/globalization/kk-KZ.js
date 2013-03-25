Date.CultureInfo = { 	/* Culture Name */     name: "kk-KZ",     englishName: "Kazakh (Kazakhstan)",     nativeName: "ÒÐ°Ð·Ð°Ò (ÒÐ°Ð·Ð°ÒÑÑÐ°Ð½)",          /* Day Name Strings */     dayNames: ["ÐÐµÐºÑÐµÐ½Ð±Ñ", "ÐÒ¯Ð¹ÑÐµÐ½Ð±Ñ", "Ð¡ÐµÐ¹ÑÐµÐ½Ð±Ñ", "Ð¡ÓÑÑÐµÐ½Ð±Ñ", "ÐÐµÐ¹ÑÐµÐ½Ð±Ñ", "ÐÒ±Ð¼Ð°", "Ð¡ÐµÐ½Ð±Ñ"],     abbreviatedDayNames: ["ÐÐº", "ÐÑ", "Ð¡Ñ", "Ð¡Ñ", "ÐÑ", "ÐÐ¼", "Ð¡Ð½"],     shortestDayNames: ["ÐÐº", "ÐÑ", "Ð¡Ñ", "Ð¡Ñ", "ÐÑ", "ÐÐ¼", "Ð¡Ð½"],     firstLetterDayNames: ["Ð", "Ð", "Ð¡", "Ð¡", "Ð", "Ð", "Ð¡"],          /* Month Name Strings */     monthNames: ["ÒÐ°Ò£ÑÐ°Ñ", "Ð°ÒÐ¿Ð°Ð½", "Ð½Ð°ÑÑÑÐ·", "ÑÓÑÑÑ", "Ð¼Ð°Ð¼ÑÑ", "Ð¼Ð°ÑÑÑÐ¼", "ÑÑÐ»Ð´Ðµ", "ÑÐ°Ð¼ÑÐ·", "ÒÑÑÐºÒ¯Ð¹ÐµÐº", "ÒÐ°Ð·Ð°Ð½", "ÒÐ°ÑÐ°ÑÐ°", "Ð¶ÐµÐ»ÑÐ¾ÒÑÐ°Ð½"],     abbreviatedMonthNames: ["ÒÐ°Ò£", "ÐÒÐ¿", "ÐÐ°Ñ", "Ð¡ÓÑ", "ÐÐ°Ð¼", "ÐÐ°Ñ", "Ð¨ÑÐ»", "Ð¢Ð°Ð¼", "ÒÑÑ", "ÒÐ°Ð·", "ÒÐ°Ñ", "ÐÐµÐ»"],  	/* AM/PM Designators */     amDesignator: "",     pmDesignator: "",      firstDayOfWeek: 1,     twoDigitYearMax: 2029,          /**      * The dateElementOrder is based on the order of the       * format specifiers in the formatPatterns.DatePattern.       *      * Example:      <pre>      shortDatePattern    dateElementOrder      ------------------  ----------------       "M/d/yyyy"          "mdy"      "dd/MM/yyyy"        "dmy"      "yyyy-MM-dd"        "ymd"      </pre>      *      * The correct dateElementOrder is required by the parser to      * determine the expected order of the date elements in the      * string being parsed.      */     dateElementOrder: "dmy",          /* Standard date and time format patterns */     formatPatterns: {         shortDate: "dd.MM.yyyy",         longDate: "d MMMM yyyy 'Ð¶.'",         shortTime: "H:mm",         longTime: "H:mm:ss",         fullDateTime: "d MMMM yyyy 'Ð¶.' H:mm:ss",         sortableDateTime: "yyyy-MM-ddTHH:mm:ss",         universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",         rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",         monthDay: "d MMMM",         yearMonth: "MMMM yyyy"     },      /**      * NOTE: If a string format is not parsing correctly, but      * you would expect it parse, the problem likely lies below.       *       * The following regex patterns control most of the string matching      * within the parser.      *       * The Month name and Day name patterns were automatically generated      * and in general should be (mostly) correct.       *      * Beyond the month and day name patterns are natural language strings.      * Example: "next", "today", "months"      *      * These natural language string may NOT be correct for this culture.       * If they are not correct, please translate and edit this file      * providing the correct regular expression pattern.       *      * If you modify this file, please post your revised CultureInfo file      * to the Datejs Forum located at http://www.datejs.com/forums/.      *      * Please mark the subject of the post with [CultureInfo]. Example:      *    Subject: [CultureInfo] Translated "da-DK" Danish(Denmark)      *       * We will add the modified patterns to the master source files.      *      * As well, please review the list of "Future Strings" section below.       */	     regexPatterns: {         jan: /^ÒÐ°Ò£(ÑÐ°Ñ)?/i,         feb: /^Ð°ÒÐ¿(Ð°Ð½)?/i,         mar: /^Ð½Ð°Ñ(ÑÑÐ·)?/i,         apr: /^ÑÓÑ(ÑÑ)?/i,         may: /^Ð¼Ð°Ð¼(ÑÑ)?/i,         jun: /^Ð¼Ð°Ñ(ÑÑÐ¼)?/i,         jul: /^ÑÑÐ»(Ð´Ðµ)?/i,         aug: /^ÑÐ°Ð¼(ÑÐ·)?/i,         sep: /^ÒÑÑ(ÐºÒ¯Ð¹ÐµÐº)?/i,         oct: /^ÒÐ°Ð·(Ð°Ð½)?/i,         nov: /^ÒÐ°Ñ(Ð°ÑÐ°)?/i,         dec: /^Ð¶ÐµÐ»(ÑÐ¾ÒÑÐ°Ð½)?/i,          sun: /^Ð¶ÐµÐºÑÐµÐ½Ð±Ñ/i,         mon: /^Ð´Ò¯Ð¹ÑÐµÐ½Ð±Ñ/i,         tue: /^ÑÐµÐ¹ÑÐµÐ½Ð±Ñ/i,         wed: /^ÑÓÑÑÐµÐ½Ð±Ñ/i,         thu: /^Ð±ÐµÐ¹ÑÐµÐ½Ð±Ñ/i,         fri: /^Ð¶Ò±Ð¼Ð°/i,         sat: /^ÑÐµÐ½Ð±Ñ/i,          future: /^next/i,         past: /^last|past|prev(ious)?/i,         add: /^(\+|aft(er)?|from|hence)/i,         subtract: /^(\-|bef(ore)?|ago)/i,                  yesterday: /^yes(terday)?/i,         today: /^t(od(ay)?)?/i,         tomorrow: /^tom(orrow)?/i,         now: /^n(ow)?/i,                  millisecond: /^ms|milli(second)?s?/i,         second: /^sec(ond)?s?/i,         minute: /^mn|min(ute)?s?/i, 		hour: /^h(our)?s?/i, 		week: /^w(eek)?s?/i,         month: /^m(onth)?s?/i,         day: /^d(ay)?s?/i,         year: /^y(ear)?s?/i, 		         shortMeridian: /^(a|p)/i,         longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,         timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc)/i,         ordinalSuffix: /^\s*(st|nd|rd|th)/i,         timeContext: /^\s*(\:|a(?!u|p)|p)/i     },  	timezones: [{name:"UTC", offset:"-000"}, {name:"GMT", offset:"-000"}, {name:"EST", offset:"-0500"}, {name:"EDT", offset:"-0400"}, {name:"CST", offset:"-0600"}, {name:"CDT", offset:"-0500"}, {name:"MST", offset:"-0700"}, {name:"MDT", offset:"-0600"}, {name:"PST", offset:"-0800"}, {name:"PDT", offset:"-0700"}] };  /********************  ** Future Strings **  ********************  *   * The following list of strings may not be currently being used, but   * may be incorporated into the Datejs library later.   *  * We would appreciate any help translating the strings below.  *   * If you modify this file, please post your revised CultureInfo file  * to the Datejs Forum located at http://www.datejs.com/forums/.  *  * Please mark the subject of the post with [CultureInfo]. Example:  *    Subject: [CultureInfo] Translated "da-DK" Danish(Denmark)b  *  * English Name        Translated  * ------------------  -----------------  * about               about  * ago                 ago  * date                date  * time                time  * calendar            calendar  * show                show  * hourly              hourly  * daily               daily  * weekly              weekly  * bi-weekly           bi-weekly  * fortnight           fortnight  * monthly             monthly  * bi-monthly          bi-monthly  * quarter             quarter  * quarterly           quarterly  * yearly              yearly  * annual              annual  * annually            annually  * annum               annum  * again               again  * between             between  * after               after  * from now            from now  * repeat              repeat  * times               times  * per                 per  * min (abbrev minute) min  * morning             morning  * noon                noon  * night               night  * midnight            midnight  * mid-night           mid-night  * evening             evening  * final               final  * future              future  * spring              spring  * summer              summer  * fall                fall  * winter              winter  * end of              end of  * end                 end  * long                long  * short               short  */