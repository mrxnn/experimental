export interface ListItem {
  text: string;
  inner?: ListItem[];
}

export const initialList: ListItem[] = [
  {
    text: "Theme",
    inner: [
      { text: "Light", inner: [{ text: "Pale" }, { text: "Ghost" }] },
      {
        text: "Dark",
        inner: [
          { text: "Black" },
          { text: "Kinda Dark", inner: [{ text: "Gray-100" }] },
        ],
      },
    ],
  },
  { text: "Index Page" },
];
