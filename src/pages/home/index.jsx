import React, { useMemo } from 'react';
import { Helmet } from 'react-helmet';
import LayoutAllPages from '@layouts/index';
import VideoComponent from '@components/videos/videos';
import BoxSearch from '@components/boxSearch/boxSearch';
import slideMultipleItems from '@components/slideMultipleItems/slideMultipleItems';
import CustomersComment from '@components/customersComment/customersComment';
import { useViewport } from '@hooks/customHooks';
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
  const viewPort = useViewport();
  const arrayElement = useMemo(() => {
    let array = [{ element: TitleAndContent }, { element: VideoComponent }, { element: slideMultipleItems }, { element: CustomersComment }];
    if (viewPort.width >= 992) {
      array.push({ element: BoxSearch });
    }
    return array;
  }, [viewPort.width]);
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
