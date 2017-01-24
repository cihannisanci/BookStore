import React from 'react';
import { connect } from 'react-redux';
import * as bookActions from '../../actions/bookAction';

class Book extends React.Component {

  constructor(props) {
    super(props);
  }

  submitBook(e,title){
    e.preventDefault();
    const input = {newTitle: title.value};
    this.props.createBook(input);
    e.target.reset();
  }

  render() {
    let bookTitle;
    return (  
      <div>
        <div>
          <h3>Books</h3>
          <ul>
            {this.props.books.map((book,index) => <li key={index}>{book.newTitle}</li>)}
          </ul>
        </div>
        <div>
          <h3>Book Entry Form</h3>
          <form onSubmit={(e)=> this.submitBook(e, bookTitle)}>
            <input type="text" name="newTitle" ref={e => bookTitle = e}/>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    books: state.books
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    createBook: book => dispatch(bookActions.createBook(book))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Book);