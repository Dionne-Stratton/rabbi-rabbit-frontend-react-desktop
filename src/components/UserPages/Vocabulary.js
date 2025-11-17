import React, { useEffect, useState } from "react";

export default function Vocabulary(props) {
  const { vocab, selectedLesson, setSelectedLesson } = props;
  const [vocabLessons, setVocabLessons] = useState([]);
  const [availableLessons, setAvailableLessons] = useState([]);

  useEffect(() => {
    if (vocab.length > 0) {
      //get all unique lesson numbers from the vocab array
      const uniqueLessons = [
        ...new Set(
          vocab.map((item) => item.lesson).filter((lesson) => lesson != null)
        ),
      ];
      //sort the lesson numbers
      uniqueLessons.sort((a, b) => a - b);
      setAvailableLessons(uniqueLessons); //set the available lessons to all unique lessons
    }
  }, [vocab]); //run this function when vocab changes

  useEffect(() => {
    //if vocab is loaded and a lesson is selected
    if (
      vocab.length > 0 &&
      selectedLesson !== "" &&
      selectedLesson !== "Select"
    ) {
      //filter the vocab to only include words from the selected lesson
      let vocabLessons = vocab.filter((vocabItem) => {
        return Number(vocabItem.lesson) === Number(selectedLesson);
      });
      //sort by lesson number
      vocabLessons.sort((a, b) => (a.lesson || 0) - (b.lesson || 0));
      setVocabLessons(vocabLessons); //set the vocab lessons to the filtered and sorted array
    } else {
      setVocabLessons([]); //clear vocab lessons if no lesson is selected
    } //eslint-disable-next-line
  }, [selectedLesson, vocab]); //run this function when the selected lesson changes

  const handleClick = (e) => {
    setSelectedLesson(e.target.value);
  };

  console.log(vocabLessons);

  return (
    <div className="main-page">
      <select
        className="main-nav select"
        name="lesson-select"
        onClick={handleClick}
        value={selectedLesson}
        onChange={(e) => setSelectedLesson(e.target.value)}
      >
        <option value="Select" onClick={handleClick}>
          Select a Set
        </option>
        {availableLessons.map((item) => {
          return (
            <option value={item} onClick={handleClick}>
              Level {item}
            </option>
          );
        })}
      </select>
      {/* if a lesson is selected, display the vocab words from that lesson number */}
      <h2>Vocabulary Set {selectedLesson ? selectedLesson : null}</h2>
      {vocabLessons.length === 0 && ( //if vocab lessons is empty display loading
        <p>Loading... Please select a set level.</p>
      )}
      <div className="vocab-page">
        {vocabLessons.map((vocabItem) => {
          return (
            <div className="vocab-words" key={vocabItem._id}>
              <div className="vocab-left">
                <p>
                  {vocabItem.hebrew_with_nikkud //if the word has nikkud, display it otherwise display the word without nikkud
                    ? vocabItem.hebrew_with_nikkud
                    : vocabItem.hebrew_without_nikkud}
                </p>
                {/* Rank info removed - showing all vocab without user data */}
              </div>
              <div className="vocab-right">
                <p>
                  {vocabItem.meaning}
                  {vocabItem.gender ? ` (${vocabItem.gender[0]})` : ""}
                  {/* if there is a gender on the vocab word show only the first letter in () otherwise don't display anything */}
                </p>
                <p>"{vocabItem.reading}"</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
