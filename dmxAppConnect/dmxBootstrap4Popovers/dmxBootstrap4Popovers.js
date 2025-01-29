dmx.Attribute('bs-popover', 'mounted', function(node, attr) {
  this.$watch(attr.value, function(value) {
    node.setAttribute('data-content', value || '');
  });

  $(node).popover({
    placement: () => node.getAttribute('data-placement') || 'auto',
    title: () => node.getAttribute('popover-title') || node.getAttribute('data-title') || '',
    content: () => node.getAttribute('data-content') || '',
  });

  return () => {
    $(node).popover('dispose');
  };
});
