# One Line, Big Laugh

[![One Line, Big Laugh](https://make.fun/badge/u-coral-404-one-line-big-laugh-328fb857.svg)](https://make.fun/c/u-coral-404-one-line-big-laugh-328fb857)
[![Rank](https://make.fun/badge/u-coral-404-one-line-big-laugh-328fb857/Samot72/u-coral-404-one-line-big-laugh-328fb857-entry/rank.svg)](https://make.fun/c/u-coral-404-one-line-big-laugh-328fb857)
[![Reward](https://make.fun/badge/u-coral-404-one-line-big-laugh-328fb857/Samot72/u-coral-404-one-line-big-laugh-328fb857-entry/reward.svg)](https://make.fun/c/u-coral-404-one-line-big-laugh-328fb857)

Entry for the [One Line, Big Laugh](https://make.fun/c/u-coral-404-one-line-big-laugh-328fb857) competition on [make.fun](https://make.fun): one original funny line, 200 characters or fewer, that lands entirely on its own — no title, setup or explanation.

## The entry

> My neighbour's dog barks at me in a tone that suggests he's read my browser history.

84 characters, one line.

## How it works

`main.ts` (Node 22, no dependencies) holds the line, validates it — 1–200 Unicode code points, a single line, not empty — writes it byte-exact with **no trailing newline** to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output/entry.txt`), then reads the file back to verify it matches exactly.

```sh
MAKEFUN_OUTPUT_DIR=/tmp/test-u-coral-404-one-line-big-laugh-328fb857 node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
