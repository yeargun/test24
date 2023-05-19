import React, { useState } from "react";
import styles from "../styles/TagInput.module.css";

function TagInput({
  className,
  tags,
  addTag,
  removeTag,
  inputValue,
  handleInputChange,
}) {
  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.key === ",") {
      event.preventDefault();
      addTag();
    }
  };

  console.log("got this as tags", tags);

  return (
    <div className={className}>
      <div className={styles.tagsWrapper}>
        {tags?.map((tag) => (
          <div key={tag} className="tag">
            {tag}
            <button onClick={() => removeTag(tag)}>X</button>
          </div>
        ))}
      </div>
      <textarea
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder="Add tags separated by commas (max 8 tags)"
      />
    </div>
  );
}

export default TagInput;
