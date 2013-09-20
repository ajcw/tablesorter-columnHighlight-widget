;(function($){
    "use strict";
    var ts = $.tablesorter = $.tablesorter || {};

    ts.addWidget({
        id: "columnHighlight",
        format: function(table) {
            $("td", table.tBodies[0]).removeClass("sorted").removeClass("sorted");
            var ascSort = "th." + table.config.cssAsc;
            var descSort = "th." + table.config.cssDesc;

            $(table.tHead).find(ascSort).add($(table.tHead).find(descSort)).each(function() {
                $("tr:visible", table.tBodies[0]).find("td:nth-child(" + ($("thead th", table).index(this) + 1) + ")").addClass("sorted").end();
            });
        }
    });
})(jQuery);