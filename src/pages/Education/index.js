import { faBookOpenReader, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './Education.module.scss';
import { dataKnowledges, dataHeading, dataSkillMyselfs } from './data';
const cx = classNames.bind(styles);

function Education() {
  return (
    <div className={cx('wrapper')}>
      <h1 className={cx('wrapper-title')}>Học vấn</h1>
      {/* content 1 */}
      <div className={cx('wrapper-content')}>
        <h2 className={cx('education')}>
          <div className={cx('block-icon')}>
            <FontAwesomeIcon className={cx('icon')} icon={faGraduationCap} />
          </div>
          {dataHeading.education}
        </h2>
        {/* school */}
        <div className={cx('component', 'border-left')}>
          <h4 className={cx('title')}>Trường Đại Học Duy Tân Đà Nẵng</h4>
          <div className={cx('timeline')}>2021</div>
          <p className={cx('description')}>
            Sau khi tốt nghiệp cấp 3, mình chưa có định hướng tiếp theo sẽ học gì làm gì. Đúng vào thời điểm này thì
            mình biết đến câu chuyện về một{' '}
            <a className={cx('story')} href="https://www.youtube.com/shorts/Q_UhCRPFKlk">
              người anh sinh năm 96 học Cơ khí - Bách Khoa
            </a>
            . Vì quá ngưỡng mộ nghị lực phi thường của anh nên mình đã quyết định và chính thức trở thành tân sinh viên
            DTU, chuyên ngành CNPM vào năm 2021.
          </p>
        </div>
        {/* f8 */}
        <div className={cx('component')}>
          <h4 className={cx('title')}>Học tập tại F8</h4>
          <div className={cx('timeline')}>2022 - nay</div>
          <p className={cx('description')}>
            Thời gian gần đây mình tình cờ biết đến
            <a className={cx('story')} href="https://www.youtube.com/shorts/Q_UhCRPFKlk">
              {' '}
              F8{' '}
            </a>
            - là trang dạy lập trình web có lộ trình mà lại hoàn toàn miễn phí. Sau khi học tập tại đây một thời gian
            mình cảm thấy được trau dồi thêm rất nhiều kiến thức mà mình đã bị hổng bấy lâu nay... Rất cảm ơn anh Sơn là
            người đã tạo ra trang web này, và nếu ai đang có ý định theo đuổi lập trình web hãy thử đến
            <a className={cx('story')} href="https://www.youtube.com/shorts/Q_UhCRPFKlk">
              {' '}
              F8{' '}
            </a>
            một lần nhé!
          </p>
        </div>
      </div>

      {/* content 2 */}
      <div className={cx('wrapper-content')}>
        <h2 className={cx('education')}>
          <div className={cx('block-icon')}>
            <FontAwesomeIcon className={cx('icon')} icon={faBookOpenReader} />
          </div>
          {dataHeading.knowledge}
        </h2>
        {dataKnowledges.map((knowledge) => {
          return (
            <div key={knowledge.id} className={cx('component', knowledge.borderLeft)}>
              <h4 className={cx('title')}>{knowledge.title}</h4>
              <div className={cx('timeline')}>{knowledge.timeline}</div>
              <p className={cx('description')}>{knowledge.description}</p>
            </div>
          );
        })}
      </div>

      {/* content 3 */}
      <div className={cx('wrapper-content')}>
        <h2 className={cx('education')}>{dataHeading.skillMyself}</h2>
        <div className={cx('skills')}>
          {dataSkillMyselfs &&
            dataSkillMyselfs.map((dataSkillMyself) => {
              return (
                <div key={dataSkillMyself.id} className={cx('skill-item', dataSkillMyself.marginTop24)}>
                  <div className={cx('skill-percent', dataSkillMyself.runPercent)}>
                    <p className={cx('percent')}>{dataSkillMyself.percent}</p>
                  </div>
                  <h5 className={cx('skill-name')}>{dataSkillMyself.name}</h5>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Education;
