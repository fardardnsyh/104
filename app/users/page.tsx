import React from "react";
import Form from "../../components/Form";
import DynamicForm from "../../components/DynamicForm";
import SimpleDynamicForm from "@/components/SimpleDynamicForm";
import DynamicFormWithUseFieldArray from "@/components/DynamicFormWithUseFieldArray";

import { SubmitHandler } from "react-hook-form";

type MyFormData = {
  // Define your form data fields here
};

const UserPage = () => {
  const onSubmit: SubmitHandler<MyFormData> = (data) => {
    console.log(data);
  };
  return (
    <div>
      <h1>adasdasd</h1>
      <Form />
      <SimpleDynamicForm />
      <DynamicFormWithUseFieldArray onSubmit={onSubmit} />
    </div>
  );
};

export default UserPage;
