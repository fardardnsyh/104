"use client";
import React, { useState } from "react";

const SimpleDynamicForm: React.FC = () => {
  const [fields, setFields] = useState<string[]>(["Field 1"]);

  const addField = () => {
    setFields((prevFields) => [
      ...prevFields,
      `Field ${prevFields.length + 1}`,
    ]);
  };

  const removeField = (index: number) => {
    setFields((prevFields) => {
      const newFields = [...prevFields];
      newFields.splice(index, 1);
      return newFields;
    });
  };

  return (
    <div>
      <form>
        {fields.map((field, index) => (
          <div key={index}>
            <label>
              {field}:
              <input type="text" name={`field-${index}`} />
            </label>
            <button type="button" onClick={() => removeField(index)}>
              Remove
            </button>
          </div>
        ))}
      </form>

      <button type="button" onClick={addField}>
        Add Field
      </button>
    </div>
  );
};

export default SimpleDynamicForm;
