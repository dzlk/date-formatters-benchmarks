Benchmarks for date formatters
==============================

Run benchmarks:
```bash
npm i
npm run bench
```

The result will be like this:
```bash
              datef@0.0.5
 505,647 op/s » dd.MM
 310,644 op/s » dd MMMM YYYY
 424,959 op/s » dd.MM.YY
 220,610 op/s » DD, MMMM dd, YYYY, h:MM:ss TT

              dateformat@1.0.11
 487,610 op/s » dd.mm
 442,141 op/s » dd mmmm yyyy
 471,836 op/s » dd.mm.yy
 292,521 op/s » dddd, mmmm dd, yyyy, h:MM:ss TT
```
