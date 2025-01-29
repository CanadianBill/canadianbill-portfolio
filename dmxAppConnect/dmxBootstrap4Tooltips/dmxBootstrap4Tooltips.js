dmx.Attribute('bs-tooltip', 'mounted', function(node, attr) {
  this.$watch(attr.value, function(value) {
    node.setAttribute('data-title', value || '');
  });

  $(node).tooltip({
    placement: () => node.getAttribute('data-placement') || 'auto',
    title: () => node.getAttribute('data-title') || '',
  });

  return () => {
    $(node).tooltip('dispose');
  };
});
