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

- Improve appearance. Quite bad
- Add js questions (from coderanx)
- Track last time user saw answer
- Generate flash cards
- Make it work on mobile
- Refactor PageLayout
- Generate headings on server side
- Get rid of anys

# Decisions

Decisions are not final.

- There are no tags. They seem to slow down content creation
- State on localStorage

