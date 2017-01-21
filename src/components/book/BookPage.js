import React from 'react';

class Book extends React.Component {

  constructor(props) {
    super(props);
  }

  submitBook(input){
    alert(input + 'Book Submitted');
  }

  handleInput(e){

    e.preventDefault();
    const input = e.target.value;
    this.submitBook(input);

    e.target.reset();
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
          <form onSubmit={()=> this.handleInput()}>
            <input type="text" />
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default Book;