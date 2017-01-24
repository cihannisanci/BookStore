import React from 'react';
import { connect } from 'react-redux';
import * as bookActions from '../../actions/bookAction';

class Book extends React.Component {

  constructor(props) {
    super(props);
  }

  submitBook(input){
    this.props.createBook(input);
  }

  handleInput(e){

    //e.preventDefault();
    const input = e.target.value;
    this.submitBook(input);

    //e.target.reset();
  }

  render() {
    return (
      <div>
        <div>
          <h3>Books</h3>
          <ul>
            {this.props.books.map((book,index) => <li key={index}>{book.title}</li>)}
          </ul>
        </div>
        <div>
          <h3>Book Entry Form</h3>
          <form onSubmit={()=> this.handleInput(e)}>
            <input type="text" />
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