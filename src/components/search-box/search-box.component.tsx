// import { Component } from "react";
import { ChangeEvent } from "react";
import "./search-box.styles.css";

export type SearchBoxType = {
      className: string;
      placeholder: string;
      onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
};

const SearchBox = ({
      onChangeHandler,
      placeholder,
      className,
}: SearchBoxType) => (
      <input
            type="search"
            className={`search-box ${className}`}
            placeholder={placeholder}
            onChange={onChangeHandler}
      />
);

// class SearchBox extends Component {

//    render() {

//       const {onChangeHandler, placeholder, className} = this.props;

//       return(
//          <input
//             type='search'
//             className={`search-box ${className}`}
//             placeholder={placeholder}
//             onChange={onChangeHandler}
//          />
//       )
//    }
// }

export default SearchBox;
