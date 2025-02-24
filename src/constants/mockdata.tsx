import { Blog } from '../types/Blog';
import { Suggestion } from '../types/Suggestion';

export const blogsData: Blog[] = [
  {
    id: '1',
    title: 'Sex Life',
    content: `
      <div style="display: flex; align-items: center; gap: 10px; flex-direction: row;">
        <img src="https://img.freepik.com/premium-vector/world-art-day-flat-style-vector-illustration_825692-323.jpg"
            style="width: 100px; height: auto; flex-shrink: 0;" />
        <p style="flex: 1; margin: 0;">
          <strong>Bold Text</strong>, <em>Italic Text</em>, and <u>Underlined Text</u> next to an image.
        </p>
      </div>

      <div style="display: flex; align-items: center; gap: 10px; flex-direction: row-reverse; margin-top: 15px;">
        <img src="https://img.freepik.com/premium-vector/world-art-day-flat-style-vector-illustration_825692-323.jpg"
            style="width: 100px; height: auto; flex-shrink: 0;" />
        <p style="flex: 1; margin: 0;">
          This time, the <em>image is on the right</em> and the text is on the left.
        </p>
      </div>

      <h2 style="margin-top: 20px;">Heading Example</h2>

      <ul>
        <li>💖First bullet point</li>
        <li>💖Second bullet point with <strong>bold</strong> text</li>
        <li>💖Third bullet point with <em>italic</em> text</li>
      </ul>

      <ol>
        <li>Numbered list item one</li>
        <li>Numbered list item two</li>
        <li>Numbered list item three</li>
      </ol>

      <h2 style="margin-top: 20px;">More Formatted Text</h2>

      <ul>
        <li>Bullet point with <strong>bold</strong> text</li>
        <li>Another item with <em>italic</em> text</li>
      </ul>
    `,
    imageUrl:
      'https://img.freepik.com/free-vector/flat-design-doodle-dynamic-background_23-2149322640.jpg?semt=ais_hybrid',
  },
  {
    id: '2',
    title: 'Gaming',
    content: 'asd2',
    imageUrl:
      'https://img.freepik.com/free-vector/flat-design-doodle-dynamic-background_23-2149322640.jpg?semt=ais_hybrid',
  },
  {
    id: '3',
    title: 'Going out',
    content: 'asd3',
    imageUrl:
      'https://img.freepik.com/free-vector/flat-design-doodle-dynamic-background_23-2149322640.jpg?semt=ais_hybrid',
  },
  {
    id: '4',
    title: 'Super man',
    content: 'asd4',
    imageUrl:
      'https://img.freepik.com/free-vector/flat-design-doodle-dynamic-background_23-2149322640.jpg?semt=ais_hybrid',
  },
  {
    id: '5',
    title: 'Eating burger',
    content: 'asd5',
    imageUrl:
      'https://img.freepik.com/free-vector/flat-design-doodle-dynamic-background_23-2149322640.jpg?semt=ais_hybrid',
  },
];

export const suggestionsData: Suggestion[] = [
  {
    id: '1',
    title: 'Tampon vệ sinh phụ nữ',
    description:
      'Tampon là loại băng vệ sinh có dạng que, nhỏ bằng đầu ngón tay, cách dùng đưa trực tiếp vào sâu trong âm đạo để giúp thấm hút những ngày kinh nguyệt. Nó còn có một đoạn dây dài ở cuối để dễ dàng lấy ra và kiểm soát khi dùng.',
    imageUrl: 'https://benh.vn/wp-content/uploads/2018/04/tampon.jpg',
    details:
      'Tampon có nhiều loại với nhiều kích cỡ, độ thấm hút khác nhau cho những ngày khác nhau của kỳ kinh nguyệt. Hầu hết tampon được làm bằng sợi tơ nhân tạo kết hợp với sợi bông tổng hợp nên khả năng thấm hút rất tốt. Tampon hữu cơ được làm từ 100% cotton.',
  },
  {
    id: '2',
    title: 'Tampon vệ sinh đàn ông',
    description:
      'Tampon là loại băng vệ sinh có dạng que, nhỏ bằng đầu ngón tay, cách dùng đưa trực tiếp vào sâu trong âm đạo để giúp thấm hút những ngày kinh nguyệt. Nó còn có một đoạn dây dài ở cuối để dễ dàng lấy ra và kiểm soát khi dùng.',
    imageUrl: 'https://benh.vn/wp-content/uploads/2018/04/tampon.jpg',
    details:
      'Tampon có nhiều loại với nhiều kích cỡ, độ thấm hút khác nhau cho những ngày khác nhau của kỳ kinh nguyệt. Hầu hết tampon được làm bằng sợi tơ nhân tạo kết hợp với sợi bông tổng hợp nên khả năng thấm hút rất tốt. Tampon hữu cơ được làm từ 100% cotton. Tampon có nhiều loại với nhiều kích cỡ, độ thấm hút khác nhau cho những ngày khác nhau của kỳ kinh nguyệt. Hầu hết tampon được làm bằng sợi tơ nhân tạo kết hợp với sợi bông tổng hợp nên khả năng thấm hút rất tốt. Tampon hữu cơ được làm từ 100% cotton. Tampon có nhiều loại với nhiều kích cỡ, độ thấm hút khác nhau cho những ngày khác nhau của kỳ kinh nguyệt. Hầu hết tampon được làm bằng sợi tơ nhân tạo kết hợp với sợi bông tổng hợp nên khả năng thấm hút rất tốt. Tampon hữu cơ được làm từ 100% cotton.',
  },
  {
    id: '3',
    title: 'Tampon vệ sinh đàn heo',
    description:
      'Tampon là loại băng vệ sinh có dạng que, nhỏ bằng đầu ngón tay, cách dùng đưa trực tiếp vào sâu trong âm đạo để giúp thấm hút những ngày kinh nguyệt. Nó còn có một đoạn dây dài ở cuối để dễ dàng lấy ra và kiểm soát khi dùng.',
    imageUrl: 'https://benh.vn/wp-content/uploads/2018/04/tampon.jpg',
    details:
      'Tampon có nhiều loại với nhiều kích cỡ, độ thấm hút khác nhau cho những ngày khác nhau của kỳ kinh nguyệt. Hầu hết tampon được làm bằng sợi tơ nhân tạo kết hợp với sợi bông tổng hợp nên khả năng thấm hút rất tốt. Tampon hữu cơ được làm từ 100% cotton.',
  },
];
