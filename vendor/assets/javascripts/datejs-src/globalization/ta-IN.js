Date.CultureInfo = { 	/* Culture Name */     name: "ta-IN",     englishName: "Tamil (India)",     nativeName: "à®¤à®®à®¿à®´à¯ (à®à®¨à¯à®¤à®¿à®¯à®¾)",          /* Day Name Strings */     dayNames: ["à®à®¾à®¯à®¿à®±à¯", "à®¤à®¿à®à¯à®à®³à¯", "à®à¯à®µà¯à®µà®¾à®¯à¯", "à®ªà¯à®¤à®©à¯", "à®µà®¿à®¯à®¾à®´à®©à¯", "à®µà¯à®³à¯à®³à®¿", "à®à®©à®¿"],     abbreviatedDayNames: ["à®à®¾", "à®¤à®¿", "à®à¯", "à®ªà¯", "à®µà®¿", "à®µà¯", "à®"],     shortestDayNames: ["à®", "à®¤", "à®", "à®ª", "à®µ", "à®µ", "à®"],     firstLetterDayNames: ["à®", "à®¤", "à®", "à®ª", "à®µ", "à®µ", "à®"],          /* Month Name Strings */     monthNames: ["à®à®©à®µà®°à®¿", "à®ªà¯à®ªà¯à®°à®µà®°à®¿", "à®®à®¾à®°à¯à®à¯", "à®à®ªà¯à®°à®²à¯", "à®®à¯", "à®à¯à®©à¯", "à®à¯à®²à¯", "à®à®à®¸à¯à®à¯", "à®à¯à®ªà¯à®à®®à¯à®ªà®°à¯", "à®à®à¯à®à¯à®ªà®°à¯", "à®¨à®µà®®à¯à®ªà®°à¯", "à®à®¿à®à®®à¯à®ªà®°à¯"],     abbreviatedMonthNames: ["à®à®©.", "à®ªà¯à®ªà¯.", "à®®à®¾à®°à¯.", "à®à®ªà¯.", "à®®à¯", "à®à¯à®©à¯", "à®à¯à®²à¯", "à®à®.", "à®à¯à®ªà¯.", "à®à®à¯.", "à®¨à®µ.", "à®à®¿à®."],  	/* AM/PM Designators */     amDesignator: "à®à®¾à®²à¯",     pmDesignator: "à®®à®¾à®²à¯",      firstDayOfWeek: 1,     twoDigitYearMax: 2029,          /**      * The dateElementOrder is based on the order of the       * format specifiers in the formatPatterns.DatePattern.       *      * Example:      <pre>      shortDatePattern    dateElementOrder      ------------------  ----------------       "M/d/yyyy"          "mdy"      "dd/MM/yyyy"        "dmy"      "yyyy-MM-dd"        "ymd"      </pre>      *      * The correct dateElementOrder is required by the parser to      * determine the expected order of the date elements in the      * string being parsed.      */     dateElementOrder: "dmy",          /* Standard date and time format patterns */     formatPatterns: {         shortDate: "dd-MM-yyyy",         longDate: "dd MMMM yyyy",         shortTime: "HH:mm",         longTime: "HH:mm:ss",         fullDateTime: "dd MMMM yyyy HH:mm:ss",         sortableDateTime: "yyyy-MM-ddTHH:mm:ss",         universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",         rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",         monthDay: "dd MMMM",         yearMonth: "MMMM yyyy"     },      /**      * NOTE: If a string format is not parsing correctly, but      * you would expect it parse, the problem likely lies below.       *       * The following regex patterns control most of the string matching      * within the parser.      *       * The Month name and Day name patterns were automatically generated      * and in general should be (mostly) correct.       *      * Beyond the month and day name patterns are natural language strings.      * Example: "next", "today", "months"      *      * These natural language string may NOT be correct for this culture.       * If they are not correct, please translate and edit this file      * providing the correct regular expression pattern.       *      * If you modify this file, please post your revised CultureInfo file      * to the Datejs Forum located at http://www.datejs.com/forums/.      *      * Please mark the subject of the post with [CultureInfo]. Example:      *    Subject: [CultureInfo] Translated "da-DK" Danish(Denmark)      *       * We will add the modified patterns to the master source files.      *      * As well, please review the list of "Future Strings" section below.       */	     regexPatterns: {         jan: /^à®à®©(.(à®µà®°à®¿)?)?/i,         feb: /^à®ªà¯à®ªà¯(.(à®°à®µà®°à®¿)?)?/i,         mar: /^à®®à®¾à®°à¯(.(à®à¯)?)?/i,         apr: /^à®à®ªà¯(.(à®°à®²à¯)?)?/i,         may: /^à®®à¯/i,         jun: /^à®à¯à®©à¯/i,         jul: /^à®à¯à®²à¯/i,         aug: /^à®à®(.(à®¸à¯à®à¯)?)?/i,         sep: /^à®à¯à®ªà¯(.(à®à®®à¯à®ªà®°à¯)?)?/i,         oct: /^à®à®à¯(.(à®à¯à®ªà®°à¯)?)?/i,         nov: /^à®¨à®µ(.(à®®à¯à®ªà®°à¯)?)?/i,         dec: /^à®à®¿à®(.(à®®à¯à®ªà®°à¯)?)?/i,          sun: /^à®(à®¾(à®¯à®¿à®±à¯)?)?/i,         mon: /^à®¤(à®¿(à®à¯à®à®³à¯)?)?/i,         tue: /^à®(à¯(à®µà¯à®µà®¾à®¯à¯)?)?/i,         wed: /^à®ª(à¯(à®¤à®©à¯)?)?/i,         thu: /^à®µ(à®¿(à®¯à®¾à®´à®©à¯)?)?/i,         fri: /^à®µ(à¯(à®³à¯à®³à®¿)?)?/i,         sat: /^à®à®©à®¿/i,          future: /^next/i,         past: /^last|past|prev(ious)?/i,         add: /^(\+|aft(er)?|from|hence)/i,         subtract: /^(\-|bef(ore)?|ago)/i,                  yesterday: /^yes(terday)?/i,         today: /^t(od(ay)?)?/i,         tomorrow: /^tom(orrow)?/i,         now: /^n(ow)?/i,                  millisecond: /^ms|milli(second)?s?/i,         second: /^sec(ond)?s?/i,         minute: /^mn|min(ute)?s?/i, 		hour: /^h(our)?s?/i, 		week: /^w(eek)?s?/i,         month: /^m(onth)?s?/i,         day: /^d(ay)?s?/i,         year: /^y(ear)?s?/i, 		         shortMeridian: /^(a|p)/i,         longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,         timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc)/i,         ordinalSuffix: /^\s*(st|nd|rd|th)/i,         timeContext: /^\s*(\:|a(?!u|p)|p)/i     },  	timezones: [{name:"UTC", offset:"-000"}, {name:"GMT", offset:"-000"}, {name:"EST", offset:"-0500"}, {name:"EDT", offset:"-0400"}, {name:"CST", offset:"-0600"}, {name:"CDT", offset:"-0500"}, {name:"MST", offset:"-0700"}, {name:"MDT", offset:"-0600"}, {name:"PST", offset:"-0800"}, {name:"PDT", offset:"-0700"}] };  /********************  ** Future Strings **  ********************  *   * The following list of strings may not be currently being used, but   * may be incorporated into the Datejs library later.   *  * We would appreciate any help translating the strings below.  *   * If you modify this file, please post your revised CultureInfo file  * to the Datejs Forum located at http://www.datejs.com/forums/.  *  * Please mark the subject of the post with [CultureInfo]. Example:  *    Subject: [CultureInfo] Translated "da-DK" Danish(Denmark)b  *  * English Name        Translated  * ------------------  -----------------  * about               about  * ago                 ago  * date                date  * time                time  * calendar            calendar  * show                show  * hourly              hourly  * daily               daily  * weekly              weekly  * bi-weekly           bi-weekly  * fortnight           fortnight  * monthly             monthly  * bi-monthly          bi-monthly  * quarter             quarter  * quarterly           quarterly  * yearly              yearly  * annual              annual  * annually            annually  * annum               annum  * again               again  * between             between  * after               after  * from now            from now  * repeat              repeat  * times               times  * per                 per  * min (abbrev minute) min  * morning             morning  * noon                noon  * night               night  * midnight            midnight  * mid-night           mid-night  * evening             evening  * final               final  * future              future  * spring              spring  * summer              summer  * fall                fall  * winter              winter  * end of              end of  * end                 end  * long                long  * short               short  */