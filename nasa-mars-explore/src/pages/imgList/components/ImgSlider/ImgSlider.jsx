import { useState } from 'react'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import './ImgSlider.scss'
import { useDispatch, useSelector } from 'react-redux';
import { fetchMoreImgList, setNextPage } from 'redux/slices/imgListSlice';

export default function ImgSlider({ slides }) {
    const dispatch = useDispatch();
    const { querrySetup } = useSelector(state => state.imgList);
    const [currentSlide, setCurrentSlide] = useState(0);
    const changeSlide = (index) => { setCurrentSlide(index) };
    const loadMore = () => {
        dispatch(setNextPage());
        dispatch(fetchMoreImgList(querrySetup));
    };

    return (
        <div className='imgSlider'>
            <div className='imgSlider__slide'>
                <img src={slides[currentSlide]?.img_src} alt={slides[currentSlide]?.camera.full_name} />
            </div>
            <div className='imgSlider__list'>
                {slides?.map((item, index) => (
                    <div
                        className={index === currentSlide ? 'list__item list__item-active' : 'list__item'}
                        key={index}
                        onClick={() => changeSlide(index)}
                    >
                        <img src={item.img_src} alt={item.camera.full_name} />
                    </div>
                ))}
                <div className='list__loadMore' onClick={loadMore}>
                    <KeyboardDoubleArrowRightIcon fontSize='large' />
                </div>
            </div>
        </div>
    )
}
