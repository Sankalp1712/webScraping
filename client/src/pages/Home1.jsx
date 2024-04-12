import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Home1() {
  const pictUrl = 'https://www.pict.edu/';
  const [authorName, setAuthorName] = useState('All');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [selectedYear, setSelectedYear] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (authorName !== "") {
        setLoading(true); // Set loading state to true
        const response = await axios.post('http://127.0.0.1:5000/search', { authorName,selectedYear });
        setLoading(false); // Set loading state to false after request completes
        setFormSubmitted(true);
        setAuthorName('');
        setSelectedYear('');
      } else {
        alert("Please Enter Author Name");
      }
    } catch (err) {
      console.log(err);
      setLoading(false); // Set loading state to false if there's an error
    }
  };

  const handleChange = (e) => {
    setAuthorName(e.target.value);
  };
  const handleYearChange = (e) => {
    setSelectedYear(e.target.value);
  };

  return (
    <div>
      <div className='text-center content-center mt-18 mb-10'>
        <a href={pictUrl}>
          <img
            className='mx-auto mb-5 w-50 h-auto'
            src='https://www.pict.edu/images/pic.jpg'
            alt='Pict logo'
          />
        </a>
        <p className='text-sm text-red-700 font-semibold'>
          Society for Computer Technology and Research's
        </p>
        <h1 className='text-lg font-semibold'>
          PUNE INSTITUTE OF COMPUTER TECHNOLOGY
        </h1>
        <p className='text-sm text-red-700'>
          (An Autonomous Institute affiliated to Saviribai Phule Pune
          University)
        </p>
      </div>
      <div className='text-center'>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            placeholder='Enter the Name of Author'
            value={authorName}
            onChange={handleChange}
            className='p-2 border border-solid text-gray-500'
          />
          <select value={selectedYear} onChange={handleYearChange} className='p-2 border border-solid text-gray-500'>
            <option value="0">All</option>
            <option value="2024">2024</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
            <option value="2018">2018</option>
            <option value="2017">2017</option>
            <option value="2016">2016</option>
            <option value="2015">2015</option>
            <option value="2014">2014</option>
            <option value="2013">2013</option>
            <option value="2012">2012</option>
            <option value="2011">2011</option>
            <option value="2010">2010</option>
            <option value="2009">2009</option>
            <option value="2008">2008</option>
            <option value="2007">2007</option>
            <option value="2006">2006</option>
            <option value="2005">2005</option>
            <option value="2004">2004</option>
            <option value="2003">2003</option>
            <option value="2002">2002</option>
            <option value="2001">2001</option>
            <option value="2000">2000</option>
            <option value="1999">1999</option>
            <option value="1998">1998</option>
            <option value="1997">1997</option>
            <option value="1996">1996</option>
            <option value="1995">1995</option>
            <option value="1994">1994</option>
            <option value="1993">1993</option>
            <option value="1992">1992</option>
            <option value="1991">1991</option>
            <option value="1990">1990</option>
            {/* Add more options as needed */}
          </select>
          {/* Render the Link component conditionally based on the formSubmitted and loading states */}
          {formSubmitted ? (
            <Link to="/result" className='p-2 border text-white hover:opacity-85' style={{ backgroundColor: '#584343' }}>
              Search
            </Link>
          ) : (
            <button type='submit' disabled={loading} className='p-2 border text-white hover:opacity-85' style={{ backgroundColor: '#584343' }}>
              {loading ? 'Loading...' : 'Search'}
            </button>
          )}
        </form>
        <div className='mt-4 '>
          <Link to ='/result1' className="border p-2 text-sm rounded bg-slate-800 text-white hover:opacity-90">
            Get Author Data
          </Link>
        </div>
      </div>
    </div>
  );
}
