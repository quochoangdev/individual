import classNames from 'classnames/bind';
import { useState } from 'react';
import styles from './Home.module.scss';
import SliderHome from './SliderHome';
import { dataProjects, introduce } from './data';
const cx = classNames.bind(styles);
function Home() {
  const [projects] = useState(dataProjects);
  return (
    <div className={cx('wrapper')}>
      <div className={cx('introduce')}>
        <div className={cx('introduce-heading')}>Giới thiệu</div>
        <span className={cx('introduce-partition')} />
        <div className={cx('introduce-content')}>
          <p>{introduce.description1}</p>
          <p>{introduce.description2}</p>
        </div>
      </div>
      <div className={cx('description')}>
        <div className={cx('description-heading')}>Sản phẩm của mình</div>
        <span className={cx('description-partition')} />
        <div className={cx('description-content')}>
          {projects.map((project, index) => {
            return (
              <div key={index} className={cx('project')}>
                <a className={cx('project-img')} href={project.link}>
                  <img className={cx('img')} src={project.img} alt="Error" />
                </a>
                <div className={cx('project-name')}>{project.name}</div>
              </div>
            );
          })}
        </div>
      </div>
      <div className={cx('motivation')}>
        <div className={cx('motivation-heading')}>Những câu nói cho mình cảm hứng</div>
        <span className={cx('motivation-partition')} />
        <div className={cx('motivation-content')}>
          <div className={cx('motivation-slidebar')}>
            <SliderHome />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
