import classNames from 'classnames/bind';
import styles from '../Education/Education.module.scss';
import { dataTargetHeading, dataTargets, dataStables } from './data';

const cx = classNames.bind(styles);

function Target() {
  return (
    <div className={cx('wrapper')}>
      <h1 className={cx('wrapper-title')}>Mục tiêu</h1>

      {/* content 1 */}
      <div className={cx('wrapper-content')}>
        <h2 className={cx('education', 'partition')}>{dataTargetHeading.target}</h2>
        {dataTargets.map((dataTarget) => {
          return (
            <div key={dataTarget.id} className={cx('component', dataTarget.borderLeft)}>
              <h4 className={cx('title')}>{dataTarget.title}</h4>
              <div className={cx('timeline')}>{dataTarget.timeline}</div>
              <p className={cx('description')}>{dataTarget.description}</p>
            </div>
          );
        })}
      </div>

      {/* content 2 */}
      <div className={cx('wrapper-content')}>
        <h2 className={cx('education', 'partition')}>{dataTargetHeading.stable}</h2>
        {dataStables.map((dataStable) => {
          return (
            <div key={dataStable.id} className={cx('component', dataStable.borderLeft)}>
              <h4 className={cx('title')}>{dataStable.title}</h4>
              <div className={cx('timeline')}>{dataStable.timeline}</div>
              <p className={cx('description')}>{dataStable.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Target;
