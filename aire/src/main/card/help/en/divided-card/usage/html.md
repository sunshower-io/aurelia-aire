A card can easily be initialized with:
```
<aire-divided-card></aire-divided-card>
```

To give it content, simply use its slot:
```
<aire-divided-card>
    <p>Hello, world</p>
</aire-divided-card>
```

A divided card can have a title:
```
<aire-divided-card title.bind="title"></aire-divided-card>
```

But if you want something more elaborate, provide `header` argument and put content in the header slot:
```
<aire-divided-card header>
    <h1 slot="header" class="fancyHeader">Hello</h1>
</aire-divided-card>
```

The divided card can also take a footer:
```
<aire-divided-card footer>
    <div slot="footer" class="fancyFooter">Goodbye</div>
</aire-divided-card>
```

And, of course, you can have a header, body content, and a footer:
```
<aire-divided-card header footer>
    <h1 slot="header" class="fancyHeader">Hello</h1>
    <p>This is my content</p>
    <div slot="footer" class="fancyFooter">Goodbye</div>
</aire-divided-card>
```