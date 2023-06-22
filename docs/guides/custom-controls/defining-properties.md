---
id: defining-properties
title: Defining Properties
---

# Styled Property

If you are creating a custom control, you will usually want it to have properties that can be set by the _Avalonia UI_ styling system.

:::info
For more information about how to use styles in _Avalonia UI_, see the guide [here](../../styles-and-resources/styling/)_._
:::

On this page, you will see how to implement a property so that it can be changed by the _Avalonia UI_ styling system. This is a two step process:

* Register a styled property.
* Provide the getter/setter for the property.

### Register a Styled Property <a href="#registering-styled-properties" id="registering-styled-properties"></a>

You register a styled property by defining a static read-only field and using the `AvaloniaProperty.Register` method.

There is a convention for the name of a property. It must follow the pattern:

```
[AttributeName]Property
```

This means that _Avalonia UI_ will look for an attribute in the XAML, like this:

```
<MyCustomControl AttributeName="value" ... >
```

For example, with a styled property in place, you can control the background color of the custom control from the window styles collection:

{% tabs %}
{% tab title="XAML" %}
```xml
<Window xmlns="https://github.com/avaloniaui"
        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
        xmlns:d="http://schemas.microsoft.com/expression/blend/2008"
        xmlns:cc="using:AvaloniaCCExample.CustomControls"
        xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
        mc:Ignorable="d" d:DesignWidth="800" d:DesignHeight="450"
        x:Class="AvaloniaCCExample.MainWindow"
        Title="Avalonia Custom Control">

  <Window.Styles>
    <Style Selector="cc|MyCustomControl">
      <Setter Property="Background" Value="Yellow"/>
    </Style>
  </Window.Styles>

  <cc:MyCustomControl Height="200" Width="300"/>

</Window>
```
{% endtab %}

{% tab title="C#" %}
```csharp
using Avalonia;
using Avalonia.Controls;
using Avalonia.Media;

namespace AvaloniaCCExample.CustomControls
{
    public class MyCustomControl : Control
    {
        public static readonly StyledProperty<IBrush?> BackgroundProperty =
            Border.BackgroundProperty.AddOwner<MyCustomControl>();

        public IBrush? Background
        {
            get { return GetValue(BackgroundProperty); }
            set { SetValue(BackgroundProperty, value); }
        }

        public sealed override void Render(DrawingContext context)
        {
            if (Background != null)
            {
                var renderSize = Bounds.Size;
                context.FillRectangle(Background, new Rect(renderSize));
            }
            base.Render(context);
        }
    }
}
```
{% endtab %}
{% endtabs %}

:::info
Note that the getter/setter of the property uses the special Avalonia UI `GetValue` and `SetValue` methods.
:::

The styled property will work both at run-time and in the preview panel.

<!--<img src="../../../.gitbook/assets/image (4) (3).png" alt=""/>-->

:::info
For more advanced information about how to create a custom control, see [here](../how-to-create-advanced-custom-controls.md).
:::