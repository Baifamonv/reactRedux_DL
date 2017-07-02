import React,{Component} from 'react';
import { connect} from 'react-redux';
import { selectBook } from '../actions/index';
import {bindActionCreators} from 'redux';

class BookList extends Component{
  renderList(){
    return this.props.books.map((book)=>{
      return (
        <li
          key ={book.title}
          onClick = {() => this.props.selectBook(book)}
          className = "list-group-item">
          {book.title}
        </li>
      );
    });
  }
  render(){
    return (
      <ul className = "list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
}
// glu between react and redux
//whenever application "state" changes, the function would render again
//return new list of books

function mapStateToProps(state){
  //whatever is retruned will show up as props inside of BookList
  return {books:state.books};

}
// anthing returned from this function wil end up as props on the
//booklist constainer
/**/
function mapDispatchToProps(dispatch){
  //whenever selectBook is called, the result should be passed to all of our reducers
 // whenever call the this.props.selectBook will call the action creator
  return bindActionCreators({selectBook:selectBook},dispatch);
}
// connect take a function and component to create a container
//
export default connect(mapStateToProps,mapDispatchToProps)(BookList);
