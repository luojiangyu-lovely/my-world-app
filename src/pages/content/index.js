import React from 'react'
import { Switch, Route,Redirect } from 'react-router-dom'

import Plan from './component/plan'
import Essay from './component/essay'
import Figuremanage from './component/figuremanage'
import Todo from './component/todo'
import Monthlyaccount from './component/monthlyaccount'
export default function ContentPage() {
  return (
  
         <Switch>
        <Route path='/home/essay' component={Essay} exact></Route>
        <Route path='/home/whimplan' component={Plan} exact></Route>
        <Route path='/home/figuremanage' component={Figuremanage} exact></Route>
        <Route path='/home/todo' component={Todo} exact></Route>
        <Route path='/home/monthlyaccount' component={Monthlyaccount} exact></Route>
        {/* <Redirect to="/login" /> */}
      </Switch>
   
  )
}
