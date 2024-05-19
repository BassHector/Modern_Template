import './carousel_segment.css'
import React from 'react'
import react from 'react'

type CarouselSegmentProps = {
    children: React.ReactNode
    id?: string
}

const CarouselSegment = React.forwardRef<HTMLDivElement, CarouselSegmentProps>
(({children}, ref) => {
    return (
        <div ref={ref} className='carousel_segment'>
            {children}
        </div>
    );
});

export default CarouselSegment