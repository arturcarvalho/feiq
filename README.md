# VS code snippet

Add it to `markdown.json` even if it's MDX.

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
- Careful with formatting mdx files. Sometimes it completely destroy the result.
- Check titles are easily skimmed on TOC
- Check correctness and re-read
- Check TOC is clickable

# TODO

- Refactor PageLayout
- Generate headings on server side
- Get rid of `any`s
