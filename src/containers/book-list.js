// Container is a component that has a direct connection to the state of redux

import React, {Component} from 'react'
import { connect } from 'react-redux' // pulling a single property "connect" from react-redux and declaring it
import { selectBook } from '../actions/index'
// take returned value in selectBook and makes sure it flows throughout application
import { bindActionCreators } from 'redux'

class BookList extends Component {
  renderList(){
    return this.props.books.map((book)=>{
      return(
        <li
          key={book.title}
          onClick={()=>this.props.selectBook(book)}
          className="list-group-item">
          {book.title}
        </li>
      )
    })
  }

  render(){
    return (
      <ul className='list-group col-sm-4'>
        {this.renderList()}
      </ul>
    )
  }
}

// this function connects react with redux
function mapStateToProps(state){
  // whatever is returned will show up as props
  // inside of BookList
  return {
    books: state.books
  }
}

// Anything returned from this function will end up as props on the booklist container
function mapDispatchToProps(dispatch){
  // whenever selectbook is called, result should be passed to all reducers
  // first selectBook made available as props to booklist container, second selectBook is the imported action
  return bindActionCreators({ selectBook:selectBook }, dispatch)
}

// connect takes a function (mapStateToProps) and a component (BookList) and produces a container
// a container is a component that is aware of the state of the redux
// promote booklist from a component to a container - it needs to know
// .. about this new dispatch method, selectBook. make it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList)
