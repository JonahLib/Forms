"use client";

import CheckboxInput from "@/components/checkbox_input";
import ChipsInput from "@/components/chips_input";
import DropdownInput from "@/components/dropdown_input";
import Form from "@/components/form";
import FormProvider from "@/components/form_provider";
import FormResults from "@/components/form_results";
import ImageUpload from "@/components/image_upload";
import RadioInput from "@/components/radio_input/indes";
import TextInput from "@/components/text_input";
import { FORM_SCHEMA, TEST_CHIPS } from "@/constants/form";
import { useState } from "react";

export default function Home() {
  const [data, setData] = useState(null);

  return (
    <FormProvider
      defaultValues={{
        tac: false,
        chips: [],
        text: "",
        dropdown: "",
        date: "",
        radio: "",
        image: "",
      }}
      yupSchema={FORM_SCHEMA}
    >
      <Form
        title="Form"
        onSubmit={(data) => setData(data)}
        onRest={() => setData(null)}
      >
        <TextInput
          name="text"
          type="text"
          label="Text Input"
          placeholder="Place holder"
        />
        <RadioInput
          name="radio"
          title="Radio Input"
          options={[
            { label: "Option 1", value: "1" },
            { label: "Option 2", value: "2" },
            { label: "Option 3", value: "3" },
          ]}
          className="mb-4"
        />
        <ImageUpload name="image" />
        <DropdownInput
          name="dropdown"
          label="Dropdown Input"
          options={[
            { name: "Option 1", value: "1" },
            { name: "Option 2", value: "2" },
            { name: "Option 3", value: "3" },
          ]}
        />
        <ChipsInput
          title="Chips Input"
          description="please select up to 3"
          name="chips"
          options={TEST_CHIPS}
          maxSelect={3}
        />
        <TextInput
          name="date"
          type="date"
          label="Date Input"
          placeholder="Your Brand Name"
        />
        <CheckboxInput name="tac" label="I agree to the terms and conditions" />
      </Form>
      <FormResults data={data} />
    </FormProvider>
  );
}
