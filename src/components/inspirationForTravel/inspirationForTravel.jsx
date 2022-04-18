import React from 'react';

function InspirationForTravel(props) {
    return (
        <div className="container-1200">
            <div className="inspirationForTravel">
                <div className="info">
                    <h1 className="title">Cảm hứng cho những chuyến đi</h1>
                    <p className="slug">Bí quyết du lịch, những chuyến câu chuyện thú vị sau mỗi chyến đi đang chờ đón bạn</p>
                </div>
                <div className="images">
                    <div className="image">
                        <img src="https://source.unsplash.com/random" alt="" />
                        <div className="image-title">Ola Travel</div>
                    </div>
                    <div className="image">
                        <img src="https://source.unsplash.com/random" alt="" />
                        <div className="image-title">Ola Travel</div>
                    </div>
                    <div className="image">
                        <img src="https://source.unsplash.com/random" alt="" />
                        <div className="image-title">Ola Travel</div>
                    </div>
                    <div className="image">
                        <img src="https://source.unsplash.com/random" alt="" />
                        <div className="image-title">Ola Travel</div>
                    </div>
                    <div className="image">
                        <img src="https://source.unsplash.com/random" alt="" />
                        <div className="image-title">Ola Travel</div>
                    </div>
                </div>
                <div className='seeAll'>
                    <a className='seeAll-text' href="#">Xem tất cả</a>
                </div>
            </div>

        </div>
    );
}

export default InspirationForTravel;