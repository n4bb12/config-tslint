<h1 align="center">
  <img src="https://konpa.github.io/devicon/devicon.git/icons/typescript/typescript-original.svg" height="48">
  @n4bb12/config-tslint
</h1>

<p align="center">
  Personal TSLint configuration.
</p>

<p align="center">
  <a href="https://raw.githubusercontent.com/n4bb12/config-tslint/master/LICENSE">
    <img alt="License" src="https://flat.badgen.net/github/license/n4bb12/config-tslint?icon=github">
  </a>
</p>

## About

Shareable TSLint configuration for my personal projects.

## Install

```
yarn add --dev @n4bb12/config-tslint
```


## Usage

Add the following to your [TSLint config](https://palantir.github.io/tslint/usage/configuration):

```json
{
  "extends": "@n4bb12/config-tslint"
}
```


## Thoughts

Maximizing productivity is my number one principle for making choices on linting rules.

While any random choice of formatting and linting rules will make work easier for teams, many choices have an impact on productivity.

Readability and editability are my main productivity priorities.

<!-- ### `arrow-parens`

```json
"ban-single-arg-parens"
``` -->

### `eofline`

```json
true
```

- An extra empty line speeds up adding new code at the end.
- When hitting `Ctrl + End`, I want the cursor to be on line start.

### `indent`

```json
["spaces", 2]
```

- Spaces look better on the Web.
- Two spaces seem to be the most common choice.
- Editor support is good enough to compete with tabs.

### `interface-name`

```json
"never-prefix"
```

- Modern tools make it easy to determine the accurate type quickly, when needed. This makes type prefixes are a thing of the past.
- Interfaces in TypeScript have a different semantic than in other languages, where the `I` prefix is commonly used on interfaces.
- `class`, `interface` and `type` are often intersected or exchanged, depending on what needs to be achieved, so type names would need to be changed quite often, when they are prefixed with `C`, `I` or `T`.
- Prefixes don't play well with acronyms.

### `linebreak-style`

```json
["LF"]
```

- `LF` works well on all platforms.
- `CRLF` in bash scripts have fallen on my foot too many times.

### `max-line-length`

```json
[80]
```

- Eyes can consume shorter lines faster.

<!-- ### `member-access`

  "options": "no-public",
  "severity": "warning" -->

<!-- ### `no-trailing-whitespace`

  "severity": "warning" -->

### `object-literal-key-quotes`

```json
"consistent-as-needed"
```

- Less typing is needed when keys are not quoted.
- When quoting is needed, consistency improves readability.

### `quotemark`

```json
"double"
```

- Double quotes are valid and commonly used in way more languages than single quotes.
- Double quotes are easier to type on German keyboards.

### `semicolon`

```json
"never"
```

- Semicolons don't are noise and don't add any value.
- Non-semicolon snippets work both as statements and as parameters:

```ts
console.log()
events.subscribe(e => console.log(e)/* no disturbing semicolon here */)
```

### `trailing-comma`

```json
{ "multiline": "always", "singleline": "never" }
```

- Allows cloning the last line.
- Allows exchanging the last line.
- Allows deleting the last line.
- Is auto-fixable, while a missing semicolon, when attempting one of the above actions, is not.
