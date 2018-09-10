exports.index = (req, res) => {
  res.render('new-route', {
    title: 'Back End: Add a New Route',
    context: 'new-route'
  });
};
