import React, { Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import HomePage from './HomePage';
import DocumentLaw from './DocumentLaw';
import NewStem from './NewStem';
import Content1  from './Content1';
import Content2 from './Content2';
import DocumentStem from './DocumentStem';
import Refer from './Refer';
import Refer1 from './Refer1';
import Lesson   from './Lesson';
import Courses from './Courses';
import Exercise from './Exercise';
import Jobs from './Jobs';
import Intro from './Intro';
import Topics from './Topics';
import Smart from './Smart';
import Job from './Job';
import { Switch, Route, Redirect } from 'react-router-dom';
import {DataHeader,  ChildHeader} from '../shared/data/dataHeader'
import { dataContent } from '../shared/data/dataContent';
import {dataNew} from '../shared/data/dataNew';
import { dataDocumentLaw } from '../shared/data/dataDocumentLaw';
import { dataDocumentStem } from '../shared/data/dataDocumentStem';
import { topics , topicClass} from '../shared/data/dataTopic';
import { dataRefer, dataVideos } from '../shared/data/dataRefer';
import { listDocuments, listJobs }  from '../shared/data/dataLibrary';
import Videos from './Videos';
class Main extends Component{
  constructor(props) {
    super(props);
    this.state = {
      dataNew: dataNew,
    }
  }
  render() { 
    
    return (
      <div>
        <Header data = {DataHeader} dataChild = {ChildHeader}/>
          <Switch>
              <Route  path="/homepage" component={() => <HomePage dataContent ={dataContent} dataNew={dataNew}/> }/>
              <Route  path="/newstem" component={() => <NewStem dataNew={dataNew}/>}/>
              <Route  path="/content1" component={() => <Content1/>} />
              <Route  path="/content2" component={() => <Content2/>}/>
              <Route  path="/referstem" component={() => <Refer dataRefer={dataRefer}/>}/>
              <Route  path="/refer1" component={() => <Refer1/>}/>
              <Route  path="/lesson" component={() => <Lesson/>}/>
              <Route  path="/videostem" component={() => <Videos dataVideos = {dataVideos}/>}/>
              <Route  path="/courses" component={() => <Courses listDocuments={listDocuments}/>}/>
              <Route  path="/exercise" component={() => <Exercise/>}/>
              <Route  path="/jobs" component={() => <Jobs listJobs = {listJobs}/>}/>
              <Route  path="/intro" component={() => <Intro/>}/>
              <Route  path="/topicstem" component={() => <Topics topics = {topics} topicClass= {topicClass}/>}/>
              <Route  path="/smart" component={() => <Smart/>}/>
              <Route  path="/job" component={() => <Job/>}/>
              <Route  path="/documentstem" component={() => <DocumentStem dataDocumentStem={dataDocumentStem}/>}/>
              <Route  path='/documentlaw' component={() => <DocumentLaw dataDocumentLaw= {dataDocumentLaw}/>} />
              <Redirect to='/homepage'/>
          </Switch>
        <Footer /> 
    </div>
  )
}
}
export default Main;