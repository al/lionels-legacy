# Define a PR template

Define a PR message template to which we will all adhere. PR messages consist of a title, a body and a checklist. Additionally it may contain a test plan, and/or metadata (like related issue numbers).

PR messages should prefer the present tense, imperative mood, e.g. "Change the default value to 10" rather than "This changes the default value to 10" or "Changed the default value to 10" or "Changes the default value to 10".

Summarise clearly what the PR does. Lists are good for this.

## IMPORTANT

Highlight critical information like the need to create environment variables or secrets, migrate data, etc.

Other details:

- Aim to limit the PR title to no more than 50 characters.
- Capitalise the title and do not include a period.
- Use asterisks or hyphens to create lists.

## Check List

- [ ] Passes linting
- [ ] Passes tests

## Test Plan

Include a test plan whenever possible:

- Check previous PRs and see that they don't follow a standard template.
- Apply new PR template.
- Verify that all subsequent PRs follow the same format.
- Verify that all tests pass.

/cc @person, @otherperson

Fixes #123 #456
Related #99
