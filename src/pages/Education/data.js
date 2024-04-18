const dataHeading = {
  education: 'Giáo dục',
  knowledge: 'Kiến thức',
  skillMyself: 'Kỹ năng của tôi',
};

const dataKnowledges = [
  {
    id: 1,
    title: 'C',
    borderLeft: 'border-left',
    timeline: 'Basic Combined Programming Language',
    description:
      'C là một ngôn ngữ lập trình phổ biến nhất thế giới, là ngôn ngữ đơn giản và linh hoạt khi sử dụng. Nó là một ngôn ngữ lập trình có cấu trúc độc lập và được sử dụng rộng rãi để viết các ứng dụng, hệ điều hành như Windows và nhiều chương trình phức tạp khác như Oracle database, Git, Python Interpreter,…',
  },
  {
    id: 2,
    title: 'HTML',
    borderLeft: 'border-left',
    timeline: 'HyperText Markup Language',
    description:
      'HTML được dịch là "Ngôn ngữ đánh dấu siêu văn bản", nó được dùng để tạo ra các tài liệu hiện thị được trên trình duyệt. HTML gọi là ngôn ngữ nhưng nó không giống như các ngôn ngữ kịch bản hay ngôn ngữ lập trình (sử dụng các kịch bản để thi hành các tác vụ), ngôn ngữ đánh dấu HTML lại sử dụng các thẻ để xác định nội dung của trang.',
  },
  {
    id: 3,
    title: 'CSS',
    borderLeft: 'border-left',
    timeline: 'Cascading Styles Sheets',
    description:
      'CSS là một ngôn ngữ được sử dụng để tìm và định dạng lại các phần tử được tạo ra bởi ngôn ngữ đánh dấu (HTML). Nói ngắn gọn hơn là ngôn ngữ tạo phong cách cho trang web.',
  },
  {
    id: 4,
    title: 'JS',
    borderLeft: null,
    timeline: 'JavaScript',
    description:
      'Javascript là một ngôn ngữ lập trình kịch bản được sử dụng rộng rãi trong các ứng dụng Website và được hỗ trợ hầu như trên tất cả các trình duyệt trên cả máy tính lẫn điện thoại. Nhiệm vụ của Javascript là xử lý những đối tượng HTML trên trình duyệt. Nó có thể can thiệp với các hành động như thêm / xóa / sửa các thuộc tính CSS và các thẻ HTML một cách dễ dàng.',
  },
];

const dataSkillMyselfs = [
  {
    id: 1,
    name: 'C',
    percent: '60%',
    marginTop24: null,
    runPercent: 'percent-60',
  },
  {
    id: 2,
    name: 'HTML',
    percent: '40%',
    marginTop24: 'margin-top-24',
    runPercent: 'percent-40',
  },
  {
    id: 3,
    name: 'CSS',
    percent: '30%',
    marginTop24: 'margin-top-24',
    runPercent: 'percent-30',
  },
  {
    id: 4,
    name: 'JS',
    percent: '15%',
    marginTop24: 'margin-top-24',
    runPercent: 'percent-15',
  },
];

export { dataKnowledges, dataHeading, dataSkillMyselfs };
