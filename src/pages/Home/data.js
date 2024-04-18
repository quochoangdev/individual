const introduce = {
  description1:
    'Mình tên là Quốc Hoàng, hiện tại đang là sinh viên của trường ĐH Duy Tân Đà Nẵng, chuyên ngành Công Nghệ Phần Mềm .',
  description2:
    'Thời gian gần đây mình tình cờ biết đến FullStack. Sau 1 khoảng thời gian học tập, mình đã trau dồi một số kiến thức cơ bản và sẽ tiếp tục cố gắng học thêm để vươn tới mục tiêu có thể thực tập và đi làm trong tương lai!',
};

const dataProjects = [
  {
    id: 1,
    name: 'Tiktok Clone (20%)',
    link: '/',
    img: require('./components/img/tiktok-ui.png'),
  },
  {
    id: 2,
    name: 'The Band',
    link: 'https://quochoang03.github.io/TheBand/',
    img: require('./components/img/theBand.png'),
  },
  {
    id: 3,
    name: 'Shoppe',
    link: 'https://quochoang03.github.io/Shopee-res/',
    img: require('./components/img/Shopee-res.png'),
  },
  {
    id: 4,
    name: 'Travel (60%)',
    link: 'https://quochoang03.github.io/Travel/',
    img: require('./components/img/Travel.png'),
  },
  // {
  //   id: 5,
  //   name: 'Placeholder',
  //   link: '/',
  //   img: require('./components/img/placeholder.webp'),
  // },
  // {
  //   id: 6,
  //   name: 'Placeholder',
  //   link: '/',
  //   img: require('./components/img/placeholder.webp'),
  // },
];

const dataSliderHome = [
  {
    id: 1,
    quote: 'Anh Sơn',
    description:
      ' Hãy bình tĩnh để xây dựng một nền móng thật chắc! Người nào không có móng chắc, lên được khoảng 20 tầng thôi không xây được tiếp đâu... cố xây tiếp... SẬP!',
    image: require('./components/img/SonDang.jpg'),
  },
  {
    id: 2,
    quote: 'Mark Zuckerberg',
    description:
      'Di chuyển nhanh và phá vỡ các quy tắc. Nếu vẫn chưa phá vỡ cái gì, chứng tỏ bạn di chuyển chưa đủ nhanh.',
    image: require('./components/img/MarkZuckerberg.jpg'),
  },
  {
    id: 3,
    quote: 'Warren Edward Buffett',
    description:
      'Khi một người được ngồi trong bóng mát ngày hôm nay thì đó là vì ai đó đã trồng 1 cái cây từ trước đó rất lâu.',
    image: require('./components/img/WarrenEdwardBuffett.jpg'),
  },
  {
    id: 4,
    quote: 'Bill Gates',
    description:
      'Tôi chọn người lười biếng để làm những việc khó khăn. Bởi một người lười biếng sẽ tìm ra cách dễ dàng để làm việc đó.',
    image: require('./components/img/BillGates.png'),
  },
];
export { introduce, dataProjects, dataSliderHome };
