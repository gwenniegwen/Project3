import React, { useState } from "react";
import { Emoji, Picker } from "emoji-mart";
import "emoji-mart/css/emoji-mart.css";

const emojiTypeList = ["apple"];

function AddEmoji() {
  const [emojiList, setEmojiList] = useState([]);
  const [emojiType, setEmojiType] = useState(null);

  const onClickButton = (e) => {
    console.log(e.target.name);
    setEmojiType(e.target.name);
  };

  const onSelect = (emoji) => {
    console.log({ emoji });
    setEmojiList([...emojiList, emoji]);
    setEmojiType(null);
  };

 
  return (
    <>
      <p>
        {emojiTypeList.map((name) => (
          <button onClick={onClickButton} name={name} key={name} i class="far fa-smile">  
          </button>
        ))}
      </p>
      {emojiType && (
        <Picker
          onSelect={(emoji) => onSelect({ ...emoji, emojiType })}
          set={emojiType}
          i18n={{
            search: "Search",
            categories: {
              search: "Result",
              recent: "Frequently Used",
              people: "People",
              foods: "Foods",
              activity: "Activity",
              places: "Places",
              objects: "Objects",
              symbols: "Symbols",
              flags: "Flags",
            },
          }}
          style={{
            position: "absolute",
            zIndex: "1",
          }}
        />
      )}
      {emojiList.length
        ? emojiList.map(({ id, emojiType }, i) => (
            <Emoji
              emoji={id}
              size={32}
              set={emojiType}
              onClick={(emoji) => onSelect({ ...emoji, emojiType })}
              key={i}
            />
          ))
        : null}
    </>
  );
}

export default AddEmoji;
