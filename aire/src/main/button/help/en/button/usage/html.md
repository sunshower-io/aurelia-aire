A button is a `<button />` element with some default styling:
```
<aire-button></aire-button>
```

To give the button text, pass in a label:
```
<aire-button label.bind="labelText"></aire-button>
```

To give the button an icon, pass in an icon:
```
<aire-button icon.bind="iconString"></aire-button>
```

As with any button, an aire-button can be disabled:
```
<aire-button disabled></aire-button>
```

A button is of type `submit` by default, but can be `button` or `reset` by passing in a type:
```
<aire-button type.bind="buttonType"></aire-button>
```