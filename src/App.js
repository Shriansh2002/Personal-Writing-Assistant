import React, { useState } from 'react';

const App = () => {
  const [feedback, setFeedback] = useState([]);

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Get the text from the form
    const text = event.target.text.value;
    console.log(text);

    // Analyze the text
    

    // Set the feedback


  };

  return (
    <div className="min-h-screen bg-gray-700 flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold text-purple-300 mb-8">Personal Writing Assistant ✨</h1>
      <div className="max-w-3xl w-full bg-purple-300 rounded-lg shadow-lg p-8">
        <form className="mb-6" onSubmit={handleFormSubmit}>
          <label htmlFor="text" className="block text-lg font-medium mb-2">
            Write your text here:
          </label>
          <textarea
            id="text"
            name="text"
            rows="5"
            className="block w-full border-gray-300 rounded-md shadow-sm sm:text-sm mb-4 p-2 focus:outline-none"
            placeholder="Start typing here..."
            minLength={50}
            required
          ></textarea>

          <button
            type="submit"
            className="bg-purple-400 hover:bg-purple-500 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
          >
            Analyze
          </button>
        </form>
        <div className={`
          ${feedback.length > 0 ? 'block' : 'invisible'}
        `}>
          <h2 className="text-lg font-bold text-gray-800 mb-4">Feedback:</h2>
          <div className="bg-gray-200 p-4 rounded-lg">
            {feedback.map((paragraph, index) => (
              <p key={index} className="text-gray-800 mb-2">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
