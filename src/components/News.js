import React, {useEffect, useState} from 'react'
import Loading from './Loading';
import NewsItems from './NewsItems'
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props)=>{
    
    const [articles , setArticles] = useState([])
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(1);
    const [totalResults, setTotalResults] = useState(0);

    const updateNews = async() => {
        props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=6a7534fb899f4facb69bca77380082cf&page=${page}&pageSize=${props.pageSize}`
        setLoading(true)
        const data = await fetch(url);
        props.setProgress(30);
        const parsedData = await data.json();
        props.setProgress(70);
        // console.log(parsedData);
        setArticles(parsedData.articles);
        setTotalResults(parsedData.totalResults);
        setLoading(false);
        props.setProgress(100);
    }

    useEffect(() => {
        updateNews();
    }, [])
    
    const fetchMoreData = async() => {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=6a7534fb899f4facb69bca77380082cf&page=${page+1}&pageSize=${props.pageSize}`
        setPage(page+1);
        const data = await fetch(url);
        const parsedData = await data.json();
        // console.log(parsedData);
        setArticles(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults);
    }

    // const prevPg = async () => {
    //     setPage(page-1);
    //     updateNews();
    // }

    // const nextPg = async () => {
    //     if (page + 1 > Math.ceil(totalResults / props.pageSize)) {

    //     } else {
    //         setPage(page+1);
    //         updateNews();
    //     }
    // }


        return (
            <>
                <div className='container my-3'>
                    <h2>Headlines</h2>
                    {loading && <Loading />}
                    <InfiniteScroll
                        dataLength={articles.length}
                        next={fetchMoreData}
                        hasMore={articles.length !== totalResults}
                        loader={<Loading></Loading>}
                    >

                        <div className='container'>
                        <div className='row'>
                            {articles.map((element) => {
                                return <div className='col-md-4' key={element.url}>
                                    <NewsItems title={element.title ? element.title.slice(0, 50) : ""} description={element.description ? element.description.slice(0, 50) : ""} imgUrl={element.urlToImage} newsUrl={element.url} />
                                </div>
                            })}

                        </div>
                        </div>
                    </InfiniteScroll>
                    {/* <div className="container d-flex justify-content-between my-3">
                        <button type="button" disabled={page <= 1} onClick={prevPg} className="btn btn-dark">&larr; Previous</button>
                        <button type="button" disabled={page + 1 > Math.ceil(totalResults / props.pageSize)} onClick={ nextPg} className="btn btn-dark">Next &rarr;</button>
                    </div> */}
                </div>
            </>
        )
    
}

News.defaultProps = {
    country: 'in',
    pageSize: 9,
    category: 'general'
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
}

export default News