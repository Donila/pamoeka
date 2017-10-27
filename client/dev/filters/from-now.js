;(function(ng) {
    "use strict";
  
    ng.module("pamoeka")
      .filter("fromnow", [
        function() {
            return (time) => {
                if(time) {
                    return moment(time).fromNow();
                }
                else {
                    return moment().fromNow();
                }
            }
        }
      ]);
  }(window.angular));
  