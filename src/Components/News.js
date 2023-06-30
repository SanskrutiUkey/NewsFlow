import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

// export class News extends Component {
//     static defaultProps = {
//         pageSize: 10,
//         country: "in",
//         category: "science"
//     }
//     static propTypes = {
//         pageSize: PropTypes.number,
//         country: PropTypes.string,
//         category: PropTypes.string
//     }
//     capital = (word) => {
//         return word.charAt(0).toUpperCase() + word.slice(1);
//     }
//     constructor(props) {
//         super(props);
//         console.log('Hello Constructor');

//         this.state = {
//             articles: [],
//             loading: false,
//             page: 1,
//             totalResults: 0
//         }
//         document.title = `${this.capital(this.props.category)}  - NewsFlow`
//     }
//     async updateNews() {
//         const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=7eac5753d40eF47ce8fb84bc8ad7de7dc&page=${this.state.page}&pageSize=${this.props.pageSize}`

//         this.setState({ loading: true })
//         let data = await fetch(url)
//         let parsedData = await data.json()
//         this.setState({
//             articles: parsedData.articles,
//             loading: false,
//             totalResults: parsedData.totalResults
//         })
//     }
//     handlePrevClick = async () => {
//         this.setState({ page: this.state.page - 1 })
//         this.updateNews();

//         // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=7eac5753d40eF47ce8fb84bc8ad7de7dc&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`

//         // this.setState({ loading: true })
//         // let data = await fetch(url)
//         // let parsedData = await data.json()
//         // this.setState({
//         //     page: this.state.page - 1,
//         //     articles: parsedData.articles,
//         //     loading: false
//         // })
//     }
//     handleNextClick = async () => {
//         this.setState({ page: this.state.page + 1 })
//         this.updateNews();

//         // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=7eac5753d40e47ce8fb84bc8ad7de7dc&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`
//         // {
//         //     this.setState({ loading: true })
//         //     let data = await fetch(url)
//         //     let parsedData = await data.json()
//         //     this.setState({
//         //         page: this.state.page + 1,
//         //         articles: parsedData.articles,
//         //         loading: false
//         //     })
//         // }
//     }
//     async componentDidMount() {
//         // this.updateNews()
//         //  Original code for componentDidMount
//         let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=7eac5753d40e47ce8fb84bc8ad7de7dc&page=1&pageSize=${this.props.pageSize}`
//         this.setState({ loading: true })
//         let data = await fetch(url)
//         let parsedData = await data.json()
//         this.setState({ articles: parsedData.articles, loading: false })
//     }
//     fetchMoreData = async () => {
//         this.setState({ page: this.state.page + 1 })
//         const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=7eac5753d40eF47ce8fb84bc8ad7de7dc&page=${this.state.page}&pageSize=${this.props.pageSize}`

//         this.setState({ loading: true })
//         let data = await fetch(url)
//         let parsedData = await data.json()
//         this.setState({
//             articles: this.state.articles.concat(parsedData.articles),
//             totalResults: parsedData.totalResults,
//         })
//     }
//     render() {
//         return (
//             <div className='container my-3'>
//                 <h2 className='text-center' style={{ height: "35px 0px" }}>NewsFlow - Top {this.capital(this.props.category)} Headlines</h2>
//                 {this.state.loading && <Spinner />}
//                 <InfiniteScroll
//                     dataLength={this.state.articles.length}
//                     next={this.fetchMoreData}
//                     hasMore={this.state.articles.length !== this.state.totalResults}
//                     loader={<Spinner />}
//                 >
//                     <div className='container'>
//                         <div className='row'>
//                             {this.state.articles.map((element) => {
//                                 return <div className='col-md-4' key={element.url}>
//                                     <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 45) : ""} imageUrl={element.urlToImage ? element.urlToImage : "https://media.istockphoto.com/id/1336652510/photo/news-web-banner-the-word-news-built-from-letters-on-wooden-cubes-for-the-use-as-a-web-banner.webp?b=1&s=170667a&w=0&k=20&c=K0MV9tCBgUYAW4Dvm_OCwrzxJ-oCdnYTpTVze4hTHIo="} newsUrl={element.url} date={element.publishedAt} author={element.author} source={element.source.name} />
//                                 </div>
//                             })}
//                         </div>
//                     </div>
//                 </InfiniteScroll>
//                 {/* <div className='container d-flex justify-content-between'>
//                     <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
//                     <button disabled={this.state.page + 1 > this.state.totalResults / this.props.pageSize} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
//                 </div> */}
//             </div >
//         );
//     }
// }

// export default News;


// import NewsItem from './NewsItem'
// import Spinner from './Spinner';
// import PropTypes from 'prop-types'
// import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
    static defaultProps = {
        pageSize: PropTypes.number,
        category: PropTypes.string,
    }
    capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: true,
            page: 1,
            totalResults: 0
        }
        document.title = `${this.capitalizeFirstLetter(this.props.category)} - NewsFlow`;
    }

    async updateNews() {
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.props.setProgress(10);
        this.setState({ loading: true });
        let data = await fetch(url);
        this.props.setProgress(30);
        let parsedData = await data.json()
        this.props.setProgress(70);
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false,
        })
        this.props.setProgress(100);
    }
    async componentDidMount() {
        this.updateNews();
    }
    handlePrevClick = async () => {
        this.setState({ page: this.state.page - 1 });
        this.updateNews();
    }
    handleNextClick = async () => {
        this.setState({ page: this.state.page + 1 });
        this.updateNews()
    }

    fetchMoreData = async () => {
        this.setState({ page: this.state.page + 1 })
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            totalResults: parsedData.totalResults
        })
    };

    render() {
        return (
            <>
                <h1 className="text-center" style={{ margin: '35px 0px' }}>NewsMonkey - Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h1>
                {this.state.loading && <Spinner />}
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<Spinner />}
                >
                    <div className="container">

                        <div className="row">
                            {this.state.articles.map((element) => {
                                return <div className="col-md-4" key={element.url}>
                                    <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 45) : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                                </div>
                            })}
                        </div>
                    </div>
                </InfiniteScroll>

            </>
        )
    }
}

export default News;