import React, {Component} from 'react'
import { Skeleton } from "antd";
import axios from 'axios'
import {
  Abstract
} from '../style'

class Summary extends Component {
  constructor(props) {
    super(props)
    this.state = {
      summary: '',
      _isMounted : true
    }
  }
  getDom() {
    if(this.state.summary.length > 10) {
      return <Abstract>{this.state.summary}</Abstract>
    }else if (this.state.summary === 'nothing') {
      return null
    }else {
      return <Skeleton active />
    }
  }
  render() {
    return (
      <div>
        {this.getDom()}
      </div>
    )
  }
  componentWillMount() {
    this.setState({
      _isMounted: true
    })
  }
  componentDidMount() {
    if(this.state._isMounted) {
      this.getDetail(this.props.url)
    }
  }
  componentWillUnmount() {
    this.setState({
      _isMounted: false
    })
  }
  getDetail(url) {
    var params = new URLSearchParams();
    params.append('appkey', 'EBC3AZ5XCAYY');
    params.append('url', this.props.url);
    return axios.post('https://api.gugudata.com/news/fetchcontent', params).then(res => {
      if(res.data.Data.Content.substr(0,75)) {
        this.setState({
          summary: res.data.Data.Content.substr(0,100)
        })
      }else {
        this.setState({
          summary: 'nothing'
        }) 
      }
    }).catch((err) => {
      console.log(err)
    })
  }
}


export default Summary