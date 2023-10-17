function scrollToTop() {
    $('html, body').animate({ scrollTop: 0 }, 'slow');
  }

  function scrollToBottom() {
    $('html, body').animate({ scrollTop: $(document).height() }, 'slow');
  }