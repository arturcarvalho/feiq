# VS code snippet

Add it to `markdown.json` even if it's MDX.

````json
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
````

# TODO

- Refactor PageLayout (dont rename to MDXLayout, I think there's some kind of conflict with another MDXLayout)
- Generate headings on server side
- Get rid of `any`s
