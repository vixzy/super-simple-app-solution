exports.index = (req, res) => {
  res.render('responsive', {
    title: 'Front End: Responsive Design',
    context: 'front-end'
  });
};
