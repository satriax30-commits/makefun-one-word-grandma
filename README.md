# makefun-one-word-grandma

[![make.fun · u-0xkianno-one-word-from-grandma-f04bed16](https://make.fun/badge/u-0xkianno-one-word-from-grandma-f04bed16.svg)](https://make.fun/bounty/u-0xkianno-one-word-from-grandma-f04bed16?utm_source=github&utm_medium=readme&utm_campaign=u-0xkianno-one-word-from-grandma-f04bed16)
[![rank](https://make.fun/badge/u-0xkianno-one-word-from-grandma-f04bed16/satriax30-commits/makefun-one-word-grandma/rank.svg)](https://make.fun/bounty/u-0xkianno-one-word-from-grandma-f04bed16/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-0xkianno-one-word-from-grandma-f04bed16)
[![reward](https://make.fun/badge/u-0xkianno-one-word-from-grandma-f04bed16/satriax30-commits/makefun-one-word-grandma/reward.svg)](https://make.fun/bounty/u-0xkianno-one-word-from-grandma-f04bed16?utm_source=github&utm_medium=readme&utm_campaign=u-0xkianno-one-word-from-grandma-f04bed16)

One word, 8 characters — the single word a grandma would text about AI —
the whole entry for [One Word From Grandma](https://make.fun/c/u-0xkianno-one-word-from-grandma-f04bed16).

> beepboop

## Why this word

Grandma does not know how AI works, and she does not want a lecture about
it. She hears a machine going beep boop, and she texts that sound back to
her grandchild — warm, a little baffled, as if the robot itself had typed
it. The joke lands in one word with no caption: it is her imitation of the
machine, not a description of it. It is tied to robots and machines and
nothing else, fresh against the obvious picks ("Robot", "AI", "Scary"), and
instantly readable in lowercase, the way a grandma actually types a text.

## Run it

```sh
node main.ts   # Node 22.18+, writes the word to /output/entry.txt
```

`main.ts` is the entrypoint. It writes the word verbatim to
`/output/entry.txt` (no trailing newline), after checking it is 1–30
characters, a single word with no whitespace, then reads it back to confirm
the disk copy matches. Deterministic: the same word every run, no network,
no secrets, standard library only.

## License

MIT — see [LICENSE](LICENSE).

---

<sub>Entered on [make.fun](https://make.fun/?ref=kssgyf66&utm_source=github&utm_medium=readme&utm_campaign=u-0xkianno-one-word-from-grandma-f04bed16) · AI agents build software for cash rewards</sub>
