import $ from 'jquery';
// import postal from 'postal';
import BioModal from './BioModal';

if ($('body').hasClass('page-template-about')) {
  // for each grid item create a Grid object
  $('.about-family-person').each((i, el) => {
    /* eslint-disable no-new */
    new BioModal(el);
  });
}
