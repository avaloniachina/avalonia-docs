"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[8573],{83885:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var o=t(85893),i=t(11151);const r={id:"panels-overview",title:"Panels Overview"},a=void 0,s={id:"layout/panels-overview",title:"Panels Overview",description:"Panel elements are components that control the rendering of elements - their size and dimensions, their position, and the arrangement of their child content. Avalonia provides a number of predefined Panel elements as well as the ability to construct custom Panel elements.",source:"@site/versioned_docs/version-0.10.x/layout/panels-overview.md",sourceDirName:"layout",slug:"/layout/panels-overview",permalink:"/avalonia-docs/docs/0.10.x/layout/panels-overview",draft:!1,unlisted:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/versioned_docs/version-0.10.x/layout/panels-overview.md",tags:[],version:"0.10.x",frontMatter:{id:"panels-overview",title:"Panels Overview"},sidebar:"documentationSidebar",previous:{title:"Layout",permalink:"/avalonia-docs/docs/0.10.x/layout/"},next:{title:"Alignment, Margins and Padding",permalink:"/avalonia-docs/docs/0.10.x/layout/alignment-margins-and-padding"}},d={},l=[{value:"The Panel Class",id:"the-panel-class",level:2},{value:"Panel Common Members",id:"panel-common-members",level:3},{value:"User Interface Panels",id:"user-interface-panels",level:3},{value:"Nested Panel Elements",id:"nested-panel-elements",level:3}];function c(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"Panel"})," elements are components that control the rendering of elements - their size and dimensions, their position, and the arrangement of their child content. Avalonia provides a number of predefined ",(0,o.jsx)(n.code,{children:"Panel"})," elements as well as the ability to construct custom ",(0,o.jsx)(n.code,{children:"Panel"})," elements."]}),"\n",(0,o.jsx)(n.h2,{id:"the-panel-class",children:"The Panel Class"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"Panel"})," is the base class for all elements that provide layout support in Avalonia. Derived ",(0,o.jsx)(n.code,{children:"Panel"})," elements are used to position and arrange elements in XAML and code."]}),"\n",(0,o.jsxs)(n.p,{children:["Avalonia includes a comprehensive suite of derived panel implementations that enable many complex layouts. These derived classes expose properties and methods that enable most standard UI scenarios. Developers who are unable to find a child arrangement behavior that meets their needs can create new layouts by overriding the ",(0,o.jsx)(n.code,{children:"ArrangeOverride"})," and ",(0,o.jsx)(n.code,{children:"MeasureOverride"})," methods. For more information on custom layout behaviors, see ",(0,o.jsx)(n.a,{href:"/avalonia-docs/docs/0.10.x/layout/create-a-custom-panel",children:"Create a Custom Panel"}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"panel-common-members",children:"Panel Common Members"}),"\n",(0,o.jsxs)(n.p,{children:["All ",(0,o.jsx)(n.code,{children:"Panel"})," elements support the base sizing and positioning properties defined by ",(0,o.jsx)(n.code,{children:"Control"}),", including ",(0,o.jsx)(n.code,{children:"Height"}),", ",(0,o.jsx)(n.code,{children:"Width"}),", ",(0,o.jsx)(n.code,{children:"HorizontalAlignment"}),", ",(0,o.jsx)(n.code,{children:"VerticalAlignment"})," and ",(0,o.jsx)(n.code,{children:"Margin"}),". For additional information on positioning properties defined by ",(0,o.jsx)(n.code,{children:"Control"}),", see ",(0,o.jsx)(n.a,{href:"/avalonia-docs/docs/0.10.x/layout/alignment-margins-and-padding",children:"Alignment, Margins, and Padding Overview"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"Panel"})," exposes additional properties that are of critical importance in understanding and using layout. The ",(0,o.jsx)(n.code,{children:"Background"})," property is used to fill the area between the boundaries of a derived panel element with a ",(0,o.jsx)(n.code,{children:"Brush"}),". ",(0,o.jsx)(n.code,{children:"Children"})," represents the child collection of elements that the ",(0,o.jsx)(n.code,{children:"Panel"})," is comprised of."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Attached Properties"})}),"\n",(0,o.jsx)(n.p,{children:'Derived panel elements make extensive use of attached properties. An attached property is a specialized form of dependency property that does not have the conventional common language runtime (CLR) property "wrapper". Attached properties have a specialized syntax in XAML, which can be seen in several of the examples that follow.'}),"\n",(0,o.jsx)(n.p,{children:"One purpose of an attached property is to allow child elements to store unique values of a property that is actually defined by a parent element. An application of this functionality is having child elements inform the parent how they wish to be presented in the UI, which is extremely useful for application layout."}),"\n",(0,o.jsx)(n.h3,{id:"user-interface-panels",children:"User Interface Panels"}),"\n",(0,o.jsxs)(n.p,{children:["There are several panel classes available in Avalonia that are optimized to support UI scenarios: ",(0,o.jsx)(n.code,{children:"Panel"}),", ",(0,o.jsx)(n.code,{children:"Canvas"}),", ",(0,o.jsx)(n.code,{children:"DockPanel"}),", ",(0,o.jsx)(n.code,{children:"Grid"}),", ",(0,o.jsx)(n.code,{children:"StackPanel"}),", ",(0,o.jsx)(n.code,{children:"WrapPanel"})," and ",(0,o.jsx)(n.code,{children:"RelativePanel"}),". These panel elements are easy to use, versatile, and extensible enough for most applications."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Canvas"})," ",(0,o.jsx)("a",{id:"canvas-class"})]}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"Canvas"})," element enables positioning of content according to absolute ",(0,o.jsx)(n.em,{children:"x-"})," and ",(0,o.jsx)(n.em,{children:"y-"})," coordinates. Elements can be drawn in a unique location; or, if elements occupy the same coordinates, the order in which they appear in markup determines the order in which the elements are drawn."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"Canvas"})," provides the most flexible layout support of any ",(0,o.jsx)(n.code,{children:"Panel"}),". Height and Width properties are used to define the area of the canvas, and elements inside are assigned absolute coordinates relative to the area of the parent ",(0,o.jsx)(n.code,{children:"Canvas"}),". Four attached properties, ",(0,o.jsx)(n.code,{children:"Canvas.Left"}),", ",(0,o.jsx)(n.code,{children:"Canvas.Top"}),", ",(0,o.jsx)(n.code,{children:"Canvas.Right"})," and ",(0,o.jsx)(n.code,{children:"Canvas.Bottom"}),", allow fine control of object placement within a ",(0,o.jsx)(n.code,{children:"Canvas"}),", allowing the developer to position and arrange elements precisely on the screen."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"ClipToBounds Within a Canvas"})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"Canvas"})," can position child elements at any position on the screen, even at coordinates that are outside of its own defined ",(0,o.jsx)(n.code,{children:"Height"})," and ",(0,o.jsx)(n.code,{children:"Width"}),". Furthermore, ",(0,o.jsx)(n.code,{children:"Canvas"})," is not affected by the size of its children. As a result, it is possible for a child element to overdraw other elements outside the bounding rectangle of the parent ",(0,o.jsx)(n.code,{children:"Canvas"}),". The default behavior of a ",(0,o.jsx)(n.code,{children:"Canvas"})," is to allow children to be drawn outside the bounds of the parent ",(0,o.jsx)(n.code,{children:"Canvas"}),". If this behavior is undesirable, the ",(0,o.jsx)(n.code,{children:"ClipToBounds"})," property can be set to ",(0,o.jsx)(n.code,{children:"true"}),". This causes ",(0,o.jsx)(n.code,{children:"Canvas"})," to clip to its own size. ",(0,o.jsx)(n.code,{children:"Canvas"})," is the only layout element that allows children to be drawn outside its bounds."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Defining and Using a Canvas"})}),"\n",(0,o.jsxs)(n.p,{children:["A ",(0,o.jsx)(n.code,{children:"Canvas"})," can be instantiated simply by using XAML or code. The following example demonstrates how to use ",(0,o.jsx)(n.code,{children:"Canvas"})," to absolutely position content. This code produces three 100-pixel squares. The first square is red, and its top-left (",(0,o.jsx)(n.em,{children:"x, y"}),") position is specified as (0, 0). The second square is green, and its top-left position is (100, 100), just below and to the right of the first square. The third square is blue, and its top-left position is (50, 50), thus encompassing the lower-right quadrant of the first square and the upper-left quadrant of the second. Because the third square is laid out last, it appears to be on top of the other two squares\u2014that is, the overlapping portions assume the color of the third box."]}),"\n",(0,o.jsx)(n.p,{children:"C#"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-csharp",children:"// Create the Canvas\nmyParentCanvas = new Canvas();\nmyParentCanvas.Width = 400;\nmyParentCanvas.Height = 400;\n\n// Define child Canvas elements\nmyCanvas1 = new Canvas();\nmyCanvas1.Background = Brushes.Red;\nmyCanvas1.Height = 100;\nmyCanvas1.Width = 100;\nCanvas.SetTop(myCanvas1, 0);\nCanvas.SetLeft(myCanvas1, 0);\n\nmyCanvas2 = new Canvas();\nmyCanvas2.Background = Brushes.Green;\nmyCanvas2.Height = 100;\nmyCanvas2.Width = 100;\nCanvas.SetTop(myCanvas2, 100);\nCanvas.SetLeft(myCanvas2, 100);\n\nmyCanvas3 = new Canvas();\nmyCanvas3.Background = Brushes.Blue;\nmyCanvas3.Height = 100;\nmyCanvas3.Width = 100;\nCanvas.SetTop(myCanvas3, 50);\nCanvas.SetLeft(myCanvas3, 50);\n\n// Add child elements to the Canvas' Children collection\nmyParentCanvas.Children.Add(myCanvas1);\nmyParentCanvas.Children.Add(myCanvas2);\nmyParentCanvas.Children.Add(myCanvas3);\n"})}),"\n",(0,o.jsx)(n.p,{children:"XAML"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-markup",children:'<Canvas Height="400" Width="400">\n  <Canvas Height="100" Width="100" Top="0" Left="0" Background="Red"/>\n  <Canvas Height="100" Width="100" Top="100" Left="100" Background="Green"/>\n  <Canvas Height="100" Width="100" Top="50" Left="50" Background="Blue"/>\n</Canvas>\n'})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"DockPanel"})," ",(0,o.jsx)("a",{id:"dockpanel-class"})]}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"DockPanel"})," element uses the ",(0,o.jsx)(n.code,{children:"DockPanel.Dock"})," attached property as set in child content elements to position content along the edges of a container. When ",(0,o.jsx)(n.code,{children:"DockPanel.Dock"})," is set to ",(0,o.jsx)(n.code,{children:"Top"})," or ",(0,o.jsx)(n.code,{children:"Bottom"}),", it positions child elements above or below each other. When ",(0,o.jsx)(n.code,{children:"DockPanel.Dock"})," is set to ",(0,o.jsx)(n.code,{children:"Left"})," or ",(0,o.jsx)(n.code,{children:"Right"}),", it positions child elements to the left or right of each other. The ",(0,o.jsx)(n.code,{children:"LastChildFill"})," property determines the position of the final element added as a child of a ",(0,o.jsx)(n.code,{children:"DockPanel"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["You can use ",(0,o.jsx)(n.code,{children:"DockPanel"}),' to position a group of related controls, such as a set of buttons. Alternately, you can use it to create a "paned" UI.']}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Sizing to Content"})}),"\n",(0,o.jsxs)(n.p,{children:["If its ",(0,o.jsx)(n.code,{children:"Height"})," and ",(0,o.jsx)(n.code,{children:"Width"})," properties are not specified, ",(0,o.jsx)(n.code,{children:"DockPanel"})," sizes to its content. The size can increase or decrease to accommodate the size of its child elements. However, when these properties are specified and there is no longer room for the next specified child element, ",(0,o.jsx)(n.code,{children:"DockPanel"})," does not display that child element or subsequent child elements and does not measure subsequent child elements."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"LastChildFill"})}),"\n",(0,o.jsxs)(n.p,{children:["By default, the last child of a ",(0,o.jsx)(n.code,{children:"DockPanel"}),' element will "fill" the remaining, unallocated space. If this behavior is not desired, set the ',(0,o.jsx)(n.code,{children:"LastChildFill"})," property to ",(0,o.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Defining and Using a DockPanel"})}),"\n",(0,o.jsxs)(n.p,{children:["The following example demonstrates how to partition space using a ",(0,o.jsx)(n.code,{children:"DockPanel"}),". Five ",(0,o.jsx)(n.code,{children:"Border"})," elements are added as children of a parent ",(0,o.jsx)(n.code,{children:"DockPanel"}),". Each uses a different positioning property of a ",(0,o.jsx)(n.code,{children:"DockPanel"}),' to partition space. The final element "fills" the remaining, unallocated space.']}),"\n",(0,o.jsx)(n.p,{children:"C#"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-csharp",children:'// Create the DockPanel\nDockPanel myDockPanel = new DockPanel();\nmyDockPanel.LastChildFill = true;\n\n// Define the child content\nBorder myBorder1 = new Border();\nmyBorder1.Height = 25;\nmyBorder1.Background = Brushes.SkyBlue;\nmyBorder1.BorderBrush = Brushes.Black;\nmyBorder1.BorderThickness = new Thickness(1);\nDockPanel.SetDock(myBorder1, Dock.Top);\nTextBlock myTextBlock1 = new TextBlock();\nmyTextBlock1.Foreground = Brushes.Black;\nmyTextBlock1.Text = "Dock = Top";\nmyBorder1.Child = myTextBlock1;\n\nBorder myBorder2 = new Border();\nmyBorder2.Height = 25;\nmyBorder2.Background = Brushes.SkyBlue;\nmyBorder2.BorderBrush = Brushes.Black;\nmyBorder2.BorderThickness = new Thickness(1);\nDockPanel.SetDock(myBorder2, Dock.Top);\nTextBlock myTextBlock2 = new TextBlock();\nmyTextBlock2.Foreground = Brushes.Black;\nmyTextBlock2.Text = "Dock = Top";\nmyBorder2.Child = myTextBlock2;\n\nBorder myBorder3 = new Border();\nmyBorder3.Height = 25;\nmyBorder3.Background = Brushes.LemonChiffon;\nmyBorder3.BorderBrush = Brushes.Black;\nmyBorder3.BorderThickness = new Thickness(1);\nDockPanel.SetDock(myBorder3, Dock.Bottom);\nTextBlock myTextBlock3 = new TextBlock();\nmyTextBlock3.Foreground = Brushes.Black;\nmyTextBlock3.Text = "Dock = Bottom";\nmyBorder3.Child = myTextBlock3;\n\nBorder myBorder4 = new Border();\nmyBorder4.Width = 200;\nmyBorder4.Background = Brushes.PaleGreen;\nmyBorder4.BorderBrush = Brushes.Black;\nmyBorder4.BorderThickness = new Thickness(1);\nDockPanel.SetDock(myBorder4, Dock.Left);\nTextBlock myTextBlock4 = new TextBlock();\nmyTextBlock4.Foreground = Brushes.Black;\nmyTextBlock4.Text = "Dock = Left";\nmyBorder4.Child = myTextBlock4;\n\nBorder myBorder5 = new Border();\nmyBorder5.Background = Brushes.White;\nmyBorder5.BorderBrush = Brushes.Black;\nmyBorder5.BorderThickness = new Thickness(1);\nTextBlock myTextBlock5 = new TextBlock();\nmyTextBlock5.Foreground = Brushes.Black;\nmyTextBlock5.Text = "This content will Fill the remaining space";\nmyBorder5.Child = myTextBlock5;\n\n// Add child elements to the DockPanel Children collection\nmyDockPanel.Children.Add(myBorder1);\nmyDockPanel.Children.Add(myBorder2);\nmyDockPanel.Children.Add(myBorder3);\nmyDockPanel.Children.Add(myBorder4);\nmyDockPanel.Children.Add(myBorder5);\n'})}),"\n",(0,o.jsx)(n.p,{children:"XAML"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-markup",children:'<DockPanel LastChildFill="True">\n  <Border Height="25" Background="SkyBlue" BorderBrush="Black" BorderThickness="1" DockPanel.Dock="Top">\n    <TextBlock Foreground="Black">Dock = "Top"</TextBlock>\n  </Border>\n  <Border Height="25" Background="SkyBlue" BorderBrush="Black" BorderThickness="1" DockPanel.Dock="Top">\n    <TextBlock Foreground="Black">Dock = "Top"</TextBlock>\n  </Border>\n  <Border Height="25" Background="LemonChiffon" BorderBrush="Black" BorderThickness="1" DockPanel.Dock="Bottom">\n    <TextBlock Foreground="Black">Dock = "Bottom"</TextBlock>\n  </Border>\n  <Border Width="200" Background="PaleGreen" BorderBrush="Black" BorderThickness="1" DockPanel.Dock="Left">\n    <TextBlock Foreground="Black">Dock = "Left"</TextBlock>\n  </Border>\n  <Border Background="White" BorderBrush="Black" BorderThickness="1">\n    <TextBlock Foreground="Black">This content will "Fill" the remaining space</TextBlock>\n  </Border>\n</DockPanel>\n'})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Grid"})," ",(0,o.jsx)("a",{id:"grid-class"})]}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"Grid"})," element merges the functionality of an absolute positioning and tabular data control. A ",(0,o.jsx)(n.code,{children:"Grid"})," enables you to easily position and style elements. ",(0,o.jsx)(n.code,{children:"Grid"})," allows you to define flexible row and column groupings, and even provides a mechanism to share sizing information between multiple ",(0,o.jsx)(n.code,{children:"Grid"})," elements."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Sizing Behavior of Columns and Rows"})}),"\n",(0,o.jsxs)(n.p,{children:["Columns and rows defined within a ",(0,o.jsx)(n.code,{children:"Grid"})," can take advantage of ",(0,o.jsx)(n.code,{children:"Star"})," sizing in order to distribute remaining space proportionally. When ",(0,o.jsx)(n.code,{children:"Star"})," is selected as the Height or Width of a row or column, that column or row receives a weighted proportion of remaining available space. This is in contrast to ",(0,o.jsx)(n.code,{children:"Auto"}),", which will distribute space evenly based on the size of the content within a column or row. This value is expressed as ",(0,o.jsx)(n.code,{children:"*"})," or ",(0,o.jsx)(n.code,{children:"2*"})," when using XAML. In the first case, the row or column would receive one times the available space, in the second case, two times, and so on. By combining this technique to proportionally distribute space with a ",(0,o.jsx)(n.code,{children:"HorizontalAlignment"})," and ",(0,o.jsx)(n.code,{children:"VerticalAlignment"})," value of ",(0,o.jsx)(n.code,{children:"Stretch"})," it is possible to partition layout space by percentage of screen space. ",(0,o.jsx)(n.code,{children:"Grid"})," is the only layout panel that can distribute space in this manner."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Defining and Using a Grid"})}),"\n",(0,o.jsx)(n.p,{children:"The following example demonstrates how to build a UI similar to that found on the Run dialog available on the Windows Start menu."}),"\n",(0,o.jsx)(n.p,{children:"C#"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-csharp",children:'// Create the Grid.\ngrid1 = new Grid ();\ngrid1.Background = Brushes.Gainsboro;\ngrid1.HorizontalAlignment = HorizontalAlignment.Left;\ngrid1.VerticalAlignment = VerticalAlignment.Top;\ngrid1.ShowGridLines = true;\ngrid1.Width = 425;\ngrid1.Height = 165;\n\n// Define the Columns.\ncolDef1 = new ColumnDefinition();\ncolDef1.Width = new GridLength(1, GridUnitType.Auto);\ncolDef2 = new ColumnDefinition();\ncolDef2.Width = new GridLength(1, GridUnitType.Star);\ncolDef3 = new ColumnDefinition();\ncolDef3.Width = new GridLength(1, GridUnitType.Star);\ncolDef4 = new ColumnDefinition();\ncolDef4.Width = new GridLength(1, GridUnitType.Star);\ncolDef5 = new ColumnDefinition();\ncolDef5.Width = new GridLength(1, GridUnitType.Star);\ngrid1.ColumnDefinitions.Add(colDef1);\ngrid1.ColumnDefinitions.Add(colDef2);\ngrid1.ColumnDefinitions.Add(colDef3);\ngrid1.ColumnDefinitions.Add(colDef4);\ngrid1.ColumnDefinitions.Add(colDef5);\n\n// Define the Rows.\nrowDef1 = new RowDefinition();\nrowDef1.Height = new GridLength(1, GridUnitType.Auto);\nrowDef2 = new RowDefinition();\nrowDef2.Height = new GridLength(1, GridUnitType.Auto);\nrowDef3 = new RowDefinition();\nrowDef3.Height = new GridLength(1, GridUnitType.Star);\nrowDef4 = new RowDefinition();\nrowDef4.Height = new GridLength(1, GridUnitType.Auto);\ngrid1.RowDefinitions.Add(rowDef1);\ngrid1.RowDefinitions.Add(rowDef2);\ngrid1.RowDefinitions.Add(rowDef3);\ngrid1.RowDefinitions.Add(rowDef4);\n\n// Add the Image.\nimg1 = new Image();\nimg1.Source = runicon;\nGrid.SetRow(img1, 0);\nGrid.SetColumn(img1, 0);\n\n// Add the main application dialog.\ntxt1 = new TextBlock();\ntxt1.Text = "Type the name of a program, folder, document, or Internet resource, and Windows will open it for you.";\ntxt1.TextWrapping = TextWrapping.Wrap;\nGrid.SetColumnSpan(txt1, 4);\nGrid.SetRow(txt1, 0);\nGrid.SetColumn(txt1, 1);\n\n// Add the second text cell to the Grid.\ntxt2 = new TextBlock();\ntxt2.Text = "Open:";\nGrid.SetRow(txt2, 1);\nGrid.SetColumn(txt2, 0);\n\n// Add the TextBox control.\ntb1 = new TextBox();\nGrid.SetRow(tb1, 1);\nGrid.SetColumn(tb1, 1);\nGrid.SetColumnSpan(tb1, 5);\n\n// Add the buttons.\nbutton1 = new Button();\nbutton2 = new Button();\nbutton3 = new Button();\nbutton1.Content = "OK";\nbutton2.Content = "Cancel";\nbutton3.Content = "Browse ...";\nGrid.SetRow(button1, 3);\nGrid.SetColumn(button1, 2);\nbutton1.Margin = new Thickness(10, 0, 10, 15);\nbutton2.Margin = new Thickness(10, 0, 10, 15);\nbutton3.Margin = new Thickness(10, 0, 10, 15);\nGrid.SetRow(button2, 3);\nGrid.SetColumn(button2, 3);\nGrid.SetRow(button3, 3);\nGrid.SetColumn(button3, 4);\n\ngrid1.Children.Add(img1);\ngrid1.Children.Add(txt1);\ngrid1.Children.Add(txt2);\ngrid1.Children.Add(tb1);\ngrid1.Children.Add(button1);\ngrid1.Children.Add(button2);\ngrid1.Children.Add(button3);\n'})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"StackPanel"})," ",(0,o.jsx)("a",{id:"stackpanel-class"})]}),"\n",(0,o.jsxs)(n.p,{children:["A ",(0,o.jsx)(n.code,{children:"StackPanel"}),' enables you to "stack" elements in an assigned direction. The default stack direction is vertical. The ',(0,o.jsx)(n.code,{children:"Orientation"})," property can be used to control content flow."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"StackPanel vs. DockPanel"})}),"\n",(0,o.jsxs)(n.p,{children:["Although ",(0,o.jsx)(n.code,{children:"DockPanel"}),' can also "stack" child elements, ',(0,o.jsx)(n.code,{children:"DockPanel"})," and ",(0,o.jsx)(n.code,{children:"StackPanel"})," do not produce analogous results in some usage scenarios. For example, the order of child elements can affect their size in a ",(0,o.jsx)(n.code,{children:"DockPanel"})," but not in a ",(0,o.jsx)(n.code,{children:"StackPanel"}),". This is because ",(0,o.jsx)(n.code,{children:"StackPanel"})," measures in the direction of stacking at ",(0,o.jsx)(n.code,{children:"PositiveInfinity"}),", whereas ",(0,o.jsx)(n.code,{children:"DockPanel"})," measures only the available size."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Defining and Using a StackPanel"})}),"\n",(0,o.jsxs)(n.p,{children:["The following example demonstrates how to use a ",(0,o.jsx)(n.code,{children:"StackPanel"})," to create a set of vertically-positioned buttons. For horizontal positioning, set the ",(0,o.jsx)(n.code,{children:"Orientation"})," property to ",(0,o.jsx)(n.code,{children:"Horizontal"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"C#"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-csharp",children:'// Define the StackPanel\nmyStackPanel = new StackPanel();\nmyStackPanel.HorizontalAlignment = HorizontalAlignment.Left;\nmyStackPanel.VerticalAlignment = VerticalAlignment.Top;\n\n// Define child content\nButton myButton1 = new Button();\nmyButton1.Content = "Button 1";\nButton myButton2 = new Button();\nmyButton2.Content = "Button 2";\nButton myButton3 = new Button();\nmyButton3.Content = "Button 3";\n\n// Add child elements to the parent StackPanel\nmyStackPanel.Children.Add(myButton1);\nmyStackPanel.Children.Add(myButton2);\nmyStackPanel.Children.Add(myButton3);\n'})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"WrapPanel"})," ",(0,o.jsx)("a",{id:"wrappanel-class"})]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"WrapPanel"})," is used to position child elements in sequential position from left to right, breaking content to the next line when it reaches the edge of its parent container. Content can be oriented horizontally or vertically. ",(0,o.jsx)(n.code,{children:"WrapPanel"})," is useful for simple flowing UI scenarios. It can also be used to apply uniform sizing to all of its child elements."]}),"\n",(0,o.jsxs)(n.p,{children:["The following example demonstrates how to create a ",(0,o.jsx)(n.code,{children:"WrapPanel"})," to display ",(0,o.jsx)(n.code,{children:"Button"})," controls that wrap when they reach the edge of their container."]}),"\n",(0,o.jsx)(n.p,{children:"C#"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-csharp",children:'// Instantiate a new WrapPanel and set properties\nmyWrapPanel = new WrapPanel();\nmyWrapPanel.Background = System.Windows.Media.Brushes.Azure;\nmyWrapPanel.Orientation = Orientation.Horizontal;\nmyWrapPanel.Width = 200;\nmyWrapPanel.HorizontalAlignment = HorizontalAlignment.Left;\nmyWrapPanel.VerticalAlignment = VerticalAlignment.Top;\n\n// Define 3 button elements. The last three buttons are sized at width \n// of 75, so the forth button wraps to the next line.\nbtn1 = new Button();\nbtn1.Content = "Button 1";\nbtn1.Width = 200;\nbtn2 = new Button();\nbtn2.Content = "Button 2";\nbtn2.Width = 75;\nbtn3 = new Button();\nbtn3.Content = "Button 3";\nbtn3.Width = 75;\nbtn4 = new Button();\nbtn4.Content = "Button 4";\nbtn4.Width = 75;\n\n// Add the buttons to the parent WrapPanel using the Children.Add method.\nmyWrapPanel.Children.Add(btn1);\nmyWrapPanel.Children.Add(btn2);\nmyWrapPanel.Children.Add(btn3);\nmyWrapPanel.Children.Add(btn4);\n'})}),"\n",(0,o.jsx)(n.p,{children:"XAML"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-markup",children:'<Border HorizontalAlignment="Left" VerticalAlignment="Top" BorderBrush="Black" BorderThickness="2">\n  <WrapPanel Background="LightBlue" Width="200" Height="100">\n    <Button Width="200">Button 1</Button>\n    <Button>Button 2</Button>\n    <Button>Button 3</Button>\n    <Button>Button 4</Button>\n  </WrapPanel>\n</Border>\n'})}),"\n",(0,o.jsx)(n.h3,{id:"nested-panel-elements",children:"Nested Panel Elements"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"Panel"})," elements can be nested within each other in order to produce complex layouts. This can prove very useful in situations where one ",(0,o.jsx)(n.code,{children:"Panel"})," is ideal for a portion of a UI, but may not meet the needs of a different portion of the UI."]}),"\n",(0,o.jsxs)(n.p,{children:["There is no practical limit to the amount of nesting that your application can support, however, it is generally best to limit your application to only use those panels that are actually necessary for your desired layout. In many cases, a ",(0,o.jsx)(n.code,{children:"Grid"})," element can be used instead of nested panels due to its flexibility as a layout container. This can increase performance in your application by keeping unnecessary elements out of the tree."]})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>a});var o=t(67294);const i={},r=o.createContext(i);function a(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);