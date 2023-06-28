import React from "react";
import Page from "/Page";
import faqData from "./data";
export default function Page() {
  return (
    <Page>
      <Page.Title>Frequently Asked Questions</Page.Title>
      <Page.Frame>
        {faqData.map((item) => (
          <Page.Item key={item.id}>
            <Page.Header>{item.header}</Page.Header>
            <Page.Body>{item.body}</Page.Body>
          </Page.Item>
        ))}
      </Page.Frame>
    </Page>
  );
}