var app = angular.module("app", ['hljs']);

app.filter('escapeHTML', function () {
  return function (text, startIndex, endIndex) {
    if (text) {
      return text.
        replace(/&/g, '&amp;').
        replace(/</g, '&lt;').
        replace(/>/g, '&gt;').
        replace(/'/g, '&#39;').
        replace(/"/g, '&quot;');
    }
    return '';
  };
});

$(function() {
  $('[data-clipboard-target]').tooltip({
    title: function() {
      return $(this).data('tooltipContent');
    },
    trigger: 'manual'
  });

  var cb = new Clipboard('.btn');

  cb.on('success', function(event) {
    event.clearSelection();
    $(event.trigger).data('tooltipContent', 'Copied!').tooltip('show');

    window.setTimeout(function() {
      $(event.trigger).tooltip('hide');
    }, 2000);
  })
  .on('error', function(event) { 
    $(event.trigger).data('tooltipContent', 'Press "Ctrl + C" to copy').tooltip('show');

    window.setTimeout(function() {
      $(event.trigger).tooltip('hide');
    }, 2000);
  });
});