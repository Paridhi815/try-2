import React from 'react';
import { connect } from 'react-redux';
import Book from '../Book/Book';
import './Body.css';
import { getBooks } from '../../Redux/Actions';


class Body extends React.Component {
  constructor() {
    super();
    this.state = {
      authorValue: 'all',
    };
  }
  componentDidMount() {
    fetch('/books', {
      method: 'PUT',
    }).then(response => response.json())
      .then((data) => {
        this.props.getBooksFromDB(data);
        const keys = Object.keys(data);
        keys.map((key) => {
          const { bookid } = data[key];
          // console.log(bookid);
          fetch(`http://localhost:8000/like/${bookid}`)
            .then((res) => {
              console.log(res);
            });
        });
      });
  }
  //   .then((=>{

  getLikeStatus(index) {
    console.log('Books inside onSync:', this.props.allBooksList);
    const url = `/like/${this.props.allBooksList[index].bookid}/1`;
    fetch(url, {
      method: 'PUT',
      // body: JSON.stringify(this.props.notes),
    }).then(response => response.text())
      .then(data => console.log(data));
  }

  // }))

  // getLikeStatus={()=>this.getLikeStatus()}

  render() {
    const authors = this.props.allBooksList.map(book => <option key={book.author} value={book.author}>{book.author}</option>);
    const filter = (filterValue) => {
      let filteredDiv;
      if (filterValue === 'all') {
        filteredDiv = this.props.allBooksList.map((bookObject, index) => <Book getLikeStatus={() => this.getLikeStatus(index)} bookName={bookObject.name} authorName={bookObject.author} />);
      } else {
        filteredDiv = this.props.allBooksList.map((bookObject) => {
          if (bookObject.author === filterValue) {
            return <Book bookName={bookObject.name} authorName={bookObject.author} />;
          }
        });
      }
      return filteredDiv;
    };
    return (
      <div className="Body-div">
        <div>
          <select onChange={(e) => {
            this.setState({
              authorValue: e.target.value,
            });
          }}
          >
            <option value="all">All</option>
            {authors}
          </select>
        </div>
        {filter(this.state.authorValue)}
      </div>
    );
  }
}


const mapStateToProps = state => ({
  allBooksList: state.getList.bookList,
});

const mapDispatchToProps = dispatch => ({
  getBooksFromDB: (bookList) => {
    dispatch(getBooks(bookList));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(Body);
