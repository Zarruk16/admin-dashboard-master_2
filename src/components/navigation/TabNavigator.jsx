import React, { useState } from "react";
import { Form, FormInput, Submit } from "../form";

function TabNavigator({ tabs }) {
  const [activeTab, setActiveTab] = useState(0); // Initialize active tab index

  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  const RenderTabContent = () => {
    return tabs[activeTab].component();
  };
  const ActiveComponent = () => {
    return (
      <div>
        <Form
          initialValues={{ staffId: "", staffPosition: "" }}
          onSubmit={() => {}}
        >
          <div className="inputs">
            <FormInput name={"staffId"} placeholder={"Staff ID"} />
            <FormInput
              name={"staffPosition"}
              placeholder={"Staff Position/Rank"}
            />
          </div>
          <Submit
            loading={false}
            className="btn-submit"
            title="Save and Update"
          />
        </Form>
      </div>
    );
  };

  return (
    <div>
      <div className="tab-navigator">
        <div className="tab-container flex">
          {tabs.map((tab, index) => (
            <span
              key={index}
              className={`tab-link ${index === activeTab ? "tab-active" : ""}`}
              onClick={() => handleTabClick(index)}
            >
              {tab.tabName}
            </span>
          ))}
        </div>
        <div className="underline" />
      </div>
      {RenderTabContent()}
    </div>
  );
}

export default TabNavigator;
