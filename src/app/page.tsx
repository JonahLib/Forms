"use client";

import CheckboxInput from "@/components/checkbox_input";
import ChipsInput from "@/components/chips_input";
import DropdownInput from "@/components/dropdown_input";
import Form from "@/components/form";
import FormProvider from "@/components/form_provider";
import { FORM_SCHEMA, TEST_CHIPS } from "@/constants/form";

export default function Home() {
  return (
    <FormProvider
      defaultValues={{
        tac: false,
        cats: [],
        brandName: "",
        country: "",
        brandDescription: "",
        ccgs: "",
      }}
      yupSchema={FORM_SCHEMA}
    >
      <Form title="Form" onSubmit={(data) => console.log(data)}>
        <DropdownInput
          name="country"
          label="Country"
          options={[
            { name: "United Kingdom", value: "UK" },
            { name: "United States", value: "US" },
          ]}
        />
        <ChipsInput
          title="Sub-categories"
          description="please select up to 3"
          name="cats"
          options={TEST_CHIPS}
          maxSelect={3}
        />
        <CheckboxInput name="tac" label="I agree to the terms and conditions" />
      </Form>
    </FormProvider>
  );
}
