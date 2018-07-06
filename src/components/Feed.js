import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    loadArticles
} from './../redux/actions/actions'
import AsideFeed from './AsideFeed'

const mapStateToProps = state => {
    return {
        articles: state.articles.articles
    }
}

class Feed extends Component {

    componentWillReceiveProps(nextProps) {
        
    }
        
    componentWillMount() {
        this.props.loadArticles()
    }
    
    render() {
    const articles = this.props.articles.reverse().map((article)=>
                <div className="card">
                    <div className="post-metadata">
                        <img alt="" className="avatar-image" src={article.author.provider_pic} height="40" width="40"/>
                        <div className="post-info">
                            <div className="PopoverLink">
                            <span className="popover-link" data-reactroot=""><a href={`/profile/${article.author._id}`}>{article.author.name}</a></span></div>
                            <small>Posted • A must read</small>
                        </div>
                    </div>

                    {article.feature_img.length > 0 ? <div className="post-picture-wrapper">
                        <img src={article.feature_img} alt="Thumb" />
                    </div>:''}

                    <div className="card-body">
                        <div className="card-title">
                            <a href={`/articleview/${article._id}`} >{article.title}</a>
                        </div>
                        <div className="card-text">
                            <p className="" dangerouslySetInnerHTML={{__html: article.description}}></p>
                        </div>
                        <a className="btn btn-primary" href={`/articleview/${article._id}`}>Read more</a>
                    </div>

                </div>
            )

        return ( 
            <div className="container-fluid">
                <div className="article col-8">
                    <div className="">

                        {articles}
                    </div>
                </div>
                {this.props.articles ? <AsideFeed _articles={this.props.articles} /> : ''}
            </div>
        );
    }
}

export default connect(mapStateToProps, { loadArticles })(Feed);