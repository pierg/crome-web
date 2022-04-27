import React from "react";

import CustomClassesList from "_docs/components/CustomClassesList.js";

export default function TextColor() {
  return (
    <>
      <CustomClassesList
        title="Text Color"
        items={[
          {
            class: "text-facebook-regular",
            properties: `--tw-text-opacity: 1;\ncolor: rgba(59, 89, 153, var(--tw-text-opacity));`,
          },
          {
            class: "text-twitter-regular",
            properties: `--tw-text-opacity: 1;\ncolor: rgba(29, 161, 242, var(--tw-text-opacity));`,
          },
          {
            class: "text-instagram-regular",
            properties: `--tw-text-opacity: 1;\ncolor: rgba(228, 64, 95, var(--tw-text-opacity));`,
          },
          {
            class: "text-github-regular",
            properties: `--tw-text-opacity: 1;\ncolor: rgba(34, 34, 34, var(--tw-text-opacity));`,
          },
          {
            class: "text-pinterest-regular",
            properties: `--tw-text-opacity: 1;\ncolor: rgba(189, 8, 28, var(--tw-text-opacity));`,
          },
          {
            class: "text-youtube-regular",
            properties: `--tw-text-opacity: 1;\ncolor: rgba(205, 32, 31, var(--tw-text-opacity));`,
          },
          {
            class: "text-vimeo-regular",
            properties: `--tw-text-opacity: 1;\ncolor: rgba(26, 183, 234, var(--tw-text-opacity));`,
          },
          {
            class: "text-slack-regular",
            properties: `--tw-text-opacity: 1;\ncolor: rgba(58, 175, 133, var(--tw-text-opacity));`,
          },
          {
            class: "text-dribbble-regular",
            properties: `--tw-text-opacity: 1;\ncolor: rgba(234, 76, 137, var(--tw-text-opacity));`,
          },
          {
            class: "text-reddit-regular",
            properties: `--tw-text-opacity: 1;\ncolor: rgba(255, 69, 0, var(--tw-text-opacity));`,
          },
          {
            class: "text-tumblr-regular",
            properties: `--tw-text-opacity: 1;\ncolor: rgba(53, 70, 92, var(--tw-text-opacity));`,
          },
          {
            class: "text-linkedin-regular",
            properties: `--tw-text-opacity: 1;\ncolor: rgba(0, 119, 181, var(--tw-text-opacity));`,
          },
        ]}
      />
    </>
  );
}
