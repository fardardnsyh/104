import React from "react";
import {
  useForm,
  useFieldArray,
  SubmitHandler,
  FieldValues,
} from "react-hook-form";

interface FormData {
  fields: {
    type: string;
    label: string;
    // Add more field properties as needed
  }[];
}

interface DynamicFormProps {
  onSubmit: SubmitHandler<FormData>;
}

const DynamicForm: React.FC<DynamicFormProps> = ({ onSubmit }) => {
  const { control, handleSubmit, register } = useForm<FormData>({
    defaultValues: {
      fields: [{ type: "text", label: "Field 1" }], // Initial field, you can customize as needed
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "fields",
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {fields.map((field, index) => (
        <div key={field.id}>
          <label>
            Type:
            <select {...register(`fields.${index}.type` as const)}>
              {/* Add your field type options here */}
              <option value="text">Text</option>
              <option value="number">Number</option>
              {/* Add more options as needed */}
            </select>
          </label>
          <label>
            Label:
            <input {...register(`fields.${index}.label` as const)} />
          </label>
          {/* Add more fields based on your requirements */}
          <button type="button" onClick={() => remove(index)}>
            Remove
          </button>
        </div>
      ))}

      <button type="button" onClick={() => append({ type: "text", label: "" })}>
        Add Field
      </button>

      <button type="submit">Submit</button>
    </form>
  );
};

export default DynamicForm;
