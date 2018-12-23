A card can easily be initialized with:
```
aire-divided-card
```

To give it content, simply use its slot:
```
aire-divided-card
    p Hello, world
```

A divided card can have a title:
```
aire-divided-card(title.bind="title")
```

But if you want something more elaborate, provide `header` argument and put content in the header slot:
```
aire-divided-card(header)
    h1.fancyHeader(slot="header") Hello 
```

The divided card can also take a footer:
```
aire-divided-card(footer)
    .fancyFooter(slot="footer") Goodbye
```

And, of course, you can have a header, body content, and a footer:
```
aire-divided-card(header footer)
    h1.fancyHeader(slot="header") Hello
    p This is my content
    .fancyFooter(slot="footer") Goodbye
```