---
id: how-to-use-web-assembly
title: Web Assembly
---


# 👉 Web Assembly

在浏览器中使用WebAssembly

目前还处于早期阶段，尚未准备好用于生产，但如果您想测试这个令人兴奋的新功能，请按照以下步骤进行。

1. 安装 `wasm-experimental` 和 `wasm-tools` 工作负载工具。请参阅 [dotnet 文档](https://docs.microsoft.com/en-us/dotnet/core/tools/dotnet-workload-install)。

```bash
dotnet workload install wasm-experimental wasm-tools
```

2. 安装或更新dotnet模板到最新版本。

```bash
dotnet new install avalonia.templates
```

3. 创建一个新目录用于项目。

```bash
mkdir WebTest
cd WebTest
```

4. 生成一个支持在浏览器中运行的新项目。

```bash
dotnet new avalonia.xplat
```

5. 为了运行，请执行以下操作：

```bash
cd WebTest.Web
dotnet run
```

6. 在控制台输出中，您将看到打开应用程序的HTTP和HTTPS链接。

## 互操作性

可以从Avalonia Web应用程序调用JavaScript代码。Avalonia应用程序与Microsoft的标准 **\[JSImport]/\[JSExport]** 互操作性兼容。您可以在 [它们的文档](https://learn.microsoft.com/en-us/aspnet/core/blazor/javascript-interoperability/import-export-interop?view=aspnetcore-7.0) 上找到更多信息。

## 传统的Blazor后端

从Avalonia 11.0 开始，[Avalonia.Web](https://www.nuget.org/packages/Avalonia.Web/) 包依赖于内置的.NET互操作性，具有更好的稳定性和性能。传统的Blazor后端仍然可用于兼容性，并且可以通过引用 [Avalonia.Web.Blazor](https://www.nuget.org/packages/Avalonia.Web.Blazor/) 包来使用。

## 故障排除

如果您尚未执行安装所需工作负载的步骤，后续在浏览器中运行应用程序时将遇到错误（例如 `System.DllNotFoundException: libSkiaSharp`），您需要重新构建才能运行该应用程序。
