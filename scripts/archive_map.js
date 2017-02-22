function getArchivesMap() {
    var _years = {}
    hexo.locals.get('posts').forEach(function(post) {
      var year = post.date.year();
      var published_at = post.date;
      var posts_dates = _years[year] || [];
    if(!(year in _years)) {
      posts_dates.push(published_at);
    } else {
      posts_dates.filter(function(current) {
        if (current.month() != published_at.month())
          posts_dates.push(published_at);
      });
    }
    _years[year] = posts_dates;
  });
  return _years;
}


hexo.extend.filter.register('template_locals', function(locals){

  locals.archivesMap = getArchivesMap();
  return locals;
});