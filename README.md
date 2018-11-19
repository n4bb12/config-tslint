<h1 align="center">
  <img src="https://konpa.github.io/devicon/devicon.git/icons/typescript/typescript-original.svg" height="48">
  @n4bb12/config-tslint
</h1>

<p align="center">
  TSLint configuration focusing on productivity and readability.
</p>

<p align="center">
  <a href="https://raw.githubusercontent.com/n4bb12/config-tslint/master/LICENSE">
    <img alt="License" src="https://flat.badgen.net/github/license/n4bb12/config-tslint?icon=github">
  </a>
</p>

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

If the mere goal is consistency, any randomly chosen ruleset is equally good.

From a productivity and readability standpoint, however, different rule configurations can have varyling levels of potential positive and negative impact.

### `trailing-comma`

```json
{ "multiline": "always", "singleline": "never" }
```

- Allows cloning the last line.
- Allows exchanging the last line.
- Allows deleting the last line.
- Is auto-fixable, while a missing semicolon, after performing one of the above actions, is not.

### `semicolon`

```json
"never"
```

- Semicolons are noise and don't add any value.
- Non-semicolon snippets work both as statements and as parameters:

```ts
console.log()
events.subscribe(e => console.log(e)/* no disturbing semicolon here */)
```

### `quotemark`

```json
"double"
```

- Double quotes are valid and commonly used in way more languages than single quotes.
- Double quotes are easier to type on German keyboards.

<!-- ### `arrow-parens`

```json
"ban-single-arg-parens"
``` -->

### `linebreak-style`

```json
["LF"]
```

- `LF` works well on all platforms.
- `CRLF` in bash scripts will fail on non-Windows systems.

### `max-line-length`

```json
[80]
```

- Easier to work with two columns / files side by side
- Leaves enough space for tool windows like file tree, outline
- Horizontal scrolling is tedious when you don't have a horizontal scroll wheel

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
- When quoting is however needed, consistency improves readability.

### `eofline`

```json
true
```

- An extra empty line speeds up adding new code at the end.
- When hitting `Ctrl + End`, the page in most cases only scrolls vertically.

### `indent`

```json
["spaces", 2]
```

- Spaces look better on the Web.
- Editor support is good enough to compete with tabs.
- Two spaces seem to be the most common choice.

### `interface-name`

```json
"never-prefix"
```

- Modern tools make it easy to determine the accurate type quickly, when needed. This makes type prefixes are a thing of the past.
- Interfaces in TypeScript have a different semantic than in other languages, where the `I` prefix is commonly used on interfaces.
- `class`, `interface` and `type` are often intersected or exchanged, depending on what needs to be achieved, so type names would need to be changed quite often, when they are prefixed with `C`, `I` or `T`.
- Prefixes don't play well with acronyms.
