# VS code snippet

Add it to `markdown.json` even if it's MDX. If it doesn't trigger automatically try `ctrl+space`.

```json
  "FEIQ question": {
    "prefix": "feiq",
    "body": [
      "<Question>",
      "  <Title>$1</Title>",
	  "",
      "  ```ts",
      " $2",
      "  ```",
	  "",
      "  <Answer>",
      "",
      "  </Answer>",
      "</Question>"
    ],
    "description": "Add FEIQ question"
  }
```

# Attention
- Check titles are easily skimmed on TOC
- Check correctness and re-read
- Check TOC is clickable
- Careful with formatting mdx files. Sometimes it completely destroy the result. That's why they are ignored (check .prettierignore)

# TODO

- Refactor PageLayout
- Generate headings on server side
- Get rid of `any`s
