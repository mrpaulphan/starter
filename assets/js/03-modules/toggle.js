// Jquery

function toggle(params) {
   var toggle = $('[data-toggle]');
   var toggleAttr = 'data-toggle';
   var target = $('[data-target]');

   toggle.click(function(e) {
      e.stopPropagation;
      var toggleId = $(this).attr('data-toggle');
      var thisTarget = $('[data-target="' + toggleId + '"]');

      thisTarget.toggle();

   });
}
