export interface ListItem {
  text: string;
  type?: "menu" | "title";
  inner?: ListItem[];
}

// reminder ->
// don't use same text within the same nesting level.
// we rely on the text for differentiating the active menu item.
// TODO: introduce a unique Id for each list item.
export const initialList: ListItem[] = [
  {
    text: "Theme",
    type: "title",
  },
  {
    text: "Theme",
    inner: [{ text: "Light" }, { text: "Dark" }, { text: "System" }],
  },
  { text: "Navigation", type: "title" },
  { text: "Index Page" },
  {
    text: "Blog Posts",
    inner: [
      { text: "Introduction to Grid Systems" },
      { text: "Flawless Typography" },
      { text: "Environmentally Friendly Cloud Computing" },
      { text: "Something Else" },
    ],
  },
  { text: "About Me" },
  { text: "Contact Me" },
  { text: "Navigation", type: "title" },
  { text: "Twitter" },
  { text: "LinkedIn" },
  { text: "Inspiration" },
];
