import Ember from 'ember';
import layout from '../templates/components/ripple-effect';

export default Ember.Component.extend({
  layout: layout,

  onInsert: function() {
    var overlay = this.$("div.ripple-effect-container div.ripple-effect-overlay");
    overlay.click((event) => {
      this.rippleOut(evt, overlay);
    });
  }.on('didInsertElement'),

  rippleOut: function(evt, targetElement) {
    // Create SVG circle
    var svgImg = this.$("<svg><g id=\"two\"> <circle fill=\"rgba(255,255,255,0.3)\" " +
        "cx=\"" + evt.offsetX + "\" cy=\"" + evt.offsetY +  "\" r=\"20\"/> </g></svg>");
    svgImg.css("position", "absolute");
    svgImg.css("float", "left");
    svgImg.css("left", "0px");
    svgImg.css("top", "0px");
    svgImg.prop("background","red");
    svgImg.prop("z-index", 100);
    targetElement.append(svgImg);

    //Animate the circle growing
    var c = this.$(svgImg).find("circle");
    c.animate({
      "r" : this.$(svgImg).outerWidth()
    }, {
      duration: 400,
      step : function(val){
        c.attr("r", val);
      },
      complete:  function() {
        // remove circle after animation complete.
        svgImg.remove();
      }
    });
  }
});
