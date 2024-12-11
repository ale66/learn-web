---
title: Readme
lang: en
---

# instructions

These are Win11 instructions

1. from your file explorer open the `boilerplate` folder
2. rename file `rename-me.md`, let's say `my_pres.md`
3. on an empty space of the folder display, `shift+right-click` and open a terminal
4. copy the command below and paste on the terminal 
5. a HTML file will appear, e.g., `my_pres.html`: open it in Firefox to see the output
6. open your MD file in VS Code and start editing 
7. save 
8. repeat the command from the terminal (use arrow-up for repeating without typing)
9. go back to Firefox and refresh to see the effect of your changes

```bash
pandoc --standalone --from markdown --to revealjs my_pres.md -o my_pres.html  --css my_revealjs_style.css -V transition=convex -V theme=solarized --verbose
```

<button type="button" onclick="navigator.clipboard.writeText('Text to copy')">
    Copy to Clipboard
</button>