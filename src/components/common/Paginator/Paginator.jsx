import React, {useState} from 'react'
import s from './Paginator.module.css'
import cn from 'classnames'
import left from './../../assets/images/paginator/left.png'
import right from './../../assets/images/paginator/right.png'

let Paginator = ({totalItemsCount, pageSize, currentPage = 1, onPageChanged = x => x, portionSize = 10}) => {

    let pagesCount = Math.ceil(totalItemsCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);

    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;


    return <div className={cn(s.paginator)}>
        { portionNumber > 1 &&
        <button className={s.leftButton} onClick={() => { setPortionNumber(portionNumber - 1) }}><img src={left}/></button> }

        {pages
            .filter(p => p >= leftPortionPageNumber && p<=rightPortionPageNumber)
            .map((p) => {
                return <span className={ cn({
                    [s.selectedPage]: currentPage === p
                }, s.pageNumber) }
                             key={p}
                             onClick={(e) => {
                                 onPageChanged(p);
                             }}>{p}</span>
            })}
        { portionCount > portionNumber &&
        <button className={s.rightButton} onClick={() => { setPortionNumber(portionNumber + 1) }}><img src={right}/></button> }


    </div>
}

export default Paginator;