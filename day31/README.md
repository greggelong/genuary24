# music with automata

Using Wolfram 1d cellular automata to create music.
I am not mapping state of the cell as living or dead to the music.
I am mapping the music to the neighborhood rule that gives rise that cell.

There are 8 possible neighborhoods 000 to 111.
I map the neighborhood rule to the note.

```
  "C4", 111
  "D4", 110
  "E4", 101
  "F4", 100
  "G4", 011
  "A5", 010
  "B5", 001
  "C5", 000
```

I still plot live cells in white and dead cells in black.
You can enter any of the 256 rules.
Start with a single live cell or random cells.

Please pay attention that the note corresponding to the neighborhood rule reflects the neighborhood of that cell in the previous generation. It is the neighborhood that gave rise to the cell not it's current neighborhood.
