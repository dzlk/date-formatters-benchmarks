Benchmarks for date formatters
==============================

Run benchmarks:
```javascript
npm i
npm run bench
```

The result will be like this:
```
                      datef@0.0.5
         534,208 op/s » dd.MM
         338,920 op/s » dd MMMM YYYY
         460,113 op/s » dd.MM.YY
         221,024 op/s » DD, MMMM dd, YYYY, h:MM:ss TT

                      dateformat@1.0.11
         506,913 op/s » dd.mm
         456,238 op/s » dd MMMM YYYY
         511,334 op/s » dd.MM.YY
         317,697 op/s » dddd, mmmm dd, yyyy, h:MM:ss TT
```
