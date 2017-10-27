;(function(ng) {
  "use strict";

  ng.module("pamoeka")
    .factory("Topic", [function() {
      const MIN_ACCEPTED_LENGTH = 5;
      
      class Topic {
        constructor(t) {
          this.title = null;
          this.imageUrl = null;
          this.createdBy = null;
          ng.extend(this, t);
        }
        
        isValid() {
          let _isDefined = ng.isDefined(this.title);
          let _isString = ng.isString(this.title);
          let _isBigEnough = (_isDefined && _isString) ? this.title.length >= MIN_ACCEPTED_LENGTH : false;

          return _isDefined && _isString && _isBigEnough;
        }
      }
      
      return Topic;
    }]);
}(window.angular));
