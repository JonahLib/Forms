"use client";

import CheckboxInput from "@/components/checkbox_input";
import ChipsInput from "@/components/chips_input";
import DropdownInput from "@/components/dropdown_input";
import Form from "@/components/form";
import FormProvider from "@/components/form_provider";
import TextInput from "@/components/text_input";
import { FORM_SCHEMA, TEST_CHIPS } from "@/constants/form";

export default function Home() {
  return (
    <FormProvider
      defaultValues={{
        tac: false,
        chips: [],
        text: "",
        dropdown: "",
        ccgs: "",
        date: "",
      }}
      yupSchema={FORM_SCHEMA}
    >
      <Form title="Form" onSubmit={(data) => console.log(data)}>
        <TextInput
          name="text"
          type="text"
          label="Text Input"
          placeholder="Place holder"
        />
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
    </FormProvider>
  );
}
