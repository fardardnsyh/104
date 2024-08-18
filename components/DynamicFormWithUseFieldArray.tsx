// DynamicFormWithUseFieldArray.tsx
import React from 'react';
import { useForm, SubmitHandler, useFieldArray } from 'react-hook-form';

interface FormData {
  fields: {
    label: string;
  }[];
}

interface DynamicFormWithUseFieldArrayProps {
  onSubmit: SubmitHandler<FormData>;
}

const DynamicFormWithUseFieldArray: React.FC<DynamicFormWithUseFieldArrayProps> = ({ onSubmit }) => {
  const { control, handleSubmit, register } = useForm<FormData>({
    defaultValues: {
      fields: [{ label: 'Field 1' }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'fields',
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {fields.map((field, index) => (
        <div key={index}>
          <label>
            {`Field ${index + 1}:`}
            <input {...register(`fields.${index}.label` as const)} defaultValue={field.label} />
          </label>
          <button type="button" onClick={() => remove(index)}>
            Remove
          </button>
        </div>
      ))}

      <button type="button" onClick={() => append({ label: '' })}>
        Add Field
      </button>

      <button type="submit">Submit</button>
    </form>
  );
};

export default DynamicFormWithUseFieldArray;
