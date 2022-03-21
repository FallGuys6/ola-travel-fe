import React, {useMemo} from 'react';
import { Helmet } from 'react-helmet';
import LayoutAllPages from '@layouts/index';
import VideoComponent from '@components/videos/videos';

const TitleAndContent = props => {
  return (
    <React.Fragment>
      <div className="container__full--slogan-ola">
        <div className="container-1200">
          <div className="slogan-ola__title">
            <h1>Olatravel.vn</h1>
            <p>Nền tảng đặt tours tốt nhất tại Việt Nam, kết nối các doanh nghiệp du lịch lữ hành đến với khách hàng một cách nhanh chóng và hiệu quả nhất.</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

const Home = () => {
  const arrayElement = useMemo(()=>[{ element: TitleAndContent }, { element: VideoComponent }],[]);
  return (
    <React.Fragment>
      <Helmet>
        <title>Trang chủ - Olatravel</title>
      </Helmet>
      <LayoutAllPages childrenComponent={arrayElement} />
    </React.Fragment>
  );
};

export default Home;
