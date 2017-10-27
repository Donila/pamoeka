;(function(ng) {
  "use strict";

  ng.module("pamoeka")
    .factory("Todo", [function() {
      const MIN_ACCEPTED_LENGTH = 5;
      
      class Todo {
        constructor(t) {
          this.message = null;
          ng.extend(this, t);
        }
        
        isValid() {
          let _isDefined = ng.isDefined(this.message);
          let _isString = ng.isString(this.message);
          let _isBigEnough = (_isDefined && _isString) ? this.message.length >= MIN_ACCEPTED_LENGTH : false;

          return _isDefined && _isString && _isBigEnough;
        }
      }
      
      return Todo;
    }]);
}(window.angular));
