import { useRef } from 'react';

const PostSearch = ({ onSearch }) => {
  const yearInputRef = useRef();
  const monthInputRef = useRef();

  const submitHandler = (e) => {
      e.preventDefault();
      const selectedYear = yearInputRef.current.value;
      const selectedMonth = monthInputRef.current.value;
      
      onSearch(selectedYear, selectedMonth);
  };

  return (
    <form onSubmit={submitHandler}>
        <button>Find Post</button>
        <div>
          <label htmlFor="year">Year</label>
          <select id="year" ref={yearInputRef}>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
          <label htmlFor="month">Month</label>
          <select id="month" ref={monthInputRef}>
            <option value="1">Jan</option>
            <option value="2">Feb</option>
            <option value="3">Mar</option>
            <option value="4">Apr</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">Aug</option>
            <option value="9">Sept</option>
            <option value="10">Oct</option>
            <option value="11">Nov</option>
            <option value="12">Dec</option>
          </select>
        </div>
    </form>
  )
}

export default PostSearch